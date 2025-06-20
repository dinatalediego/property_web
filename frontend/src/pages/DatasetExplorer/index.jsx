// frontend/src/pages/DatasetExplorer.jsx

import React, { useState, useEffect } from "react"
import { Listbox } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import { DatabaseIcon } from "@heroicons/react/outline"
import Navbar from "../../components/Navbar"
import { DatasetExplorerAgent } from "./logic/DatasetExplorerAgent"
import { supabase } from "../../supabaseClient";

export default function DatasetExplorer() {
  // Estados
  const [tables, setTables]       = useState([])
  const [selectedTable, setSelectedTable] = useState(null)
  const [head, setHead]           = useState([])
  const [describe, setDescribe]   = useState({ rows: 0, pctNoNull: {} })
  const [info, setInfo]           = useState([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState("")

  // 1) Carga dinámicamente las tablas públicas
  useEffect(() => {
    async function fetchTables() {
      try {
        console.log("🔍 Fetching tables…")
        // Supón que tu agent tiene un método getTables(), si no, lo implementas
        const { data: tbls, error: tblErr } = await supabase
          .from("information_schema.tables")
          .select("table_name")
          .eq("table_schema", "public")

        if (tblErr) throw tblErr
        const names = tbls.map(r => r.table_name)
        console.log("✅ Tablas encontradas:", names)
        setTables(names)
        setSelectedTable(names[0] || null)
      } catch (e) {
        console.error("❌ Error fetching tables:", e)
        setError("No pude cargar la lista de tablas")
      }
    }
    fetchTables()
  }, [])

  // 2) Cuando cambie la tabla seleccionada, dispara las 3 consultas
  useEffect(() => {
    if (!selectedTable) return

    async function fetchData() {
      setLoading(true)
      setError("")
      try {
        console.log("🚀 Iniciando fetch de datos para", selectedTable)
        const agent = new DatasetExplorerAgent(selectedTable)

        const [headData, descData, infoData] = await Promise.all([
          agent.getHead(5),
          agent.getDescribe(),
          agent.getInfo()
        ])

        console.log("📥 head:", headData)
        console.log("📥 describe:", descData)
        console.log("📥 info:", infoData)

        setHead(headData)
        setDescribe(descData)
        setInfo(infoData)
      } catch (e) {
        console.error("❌ Error fetching data:", e)
        setError("Error cargando datos de la tabla")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [selectedTable])

  // Loader / Error
  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-red-400">
          {error}
        </div>
      </>
    )
  }
  if (loading && !head.length) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-white">
          Cargando…
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="p-8 space-y-8 bg-gradient-to-br from-indigo-900 to-black text-white">

        {/* ── DROPDOWN DINÁMICO ───────────────────────────────────────── */}
        <div className="w-64 mx-auto">
          <Listbox value={selectedTable} onChange={setSelectedTable}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <span className="flex items-center">
                  <DatabaseIcon className="w-5 h-5 text-indigo-600 mr-2" />
                  {selectedTable || "Selecciona tabla"}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon className="w-5 h-5 text-gray-400" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none">
                {tables.map(tbl => (
                  <Listbox.Option
                    key={tbl}
                    value={tbl}
                    className={({ active }) =>
                      `cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? "bg-indigo-100 text-indigo-900" : "text-gray-800"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-semibold" : ""}`}>
                          {tbl}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                            <CheckIcon className="w-5 h-5" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        {/* ── HEAD (primeras filas) ──────────────────────────────────────── */}
        {head.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold flex items-center">
              <DatabaseIcon className="w-6 h-6 mr-2" />
              Primeras filas de “{selectedTable}”
            </h2>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-indigo-800">
                  <tr>
                    {Object.keys(head[0]).map(col => (
                      <th key={col} className="px-3 py-2 text-left">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {head.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-indigo-700" : "bg-indigo-600"}>
                      {Object.values(row).map((v, j) => (
                        <td key={j} className="px-3 py-1">
                          {String(v)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── DESCRIBE ──────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold">Descripción del Dataset</h2>
          <p className="mt-2"><strong>Total de filas:</strong> {describe.rows}</p>
          <ul className="list-disc list-inside mt-2">
            {Object.entries(describe.pctNoNull).map(([col, pct]) => (
              <li key={col}>
                <strong>{col}</strong>: {pct.toFixed(1)}% no nulos
              </li>
            ))}
          </ul>
        </section>

        {/* ── INFO ──────────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold">Metadatos de Columnas</h2>
          <ul className="mt-2 space-y-1">
            {info.map(col => (
              <li key={col.column_name} className="flex justify-between">
                <span>{col.column_name}</span>
                <span className="text-indigo-300 italic">{col.data_type}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
