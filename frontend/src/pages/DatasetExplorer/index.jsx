import Navbar from "../../components/Navbar";
import useDataset from "../../hooks/useDataset";
import DatasetCard from "./components/DatasetCard";

export default function DatasetExplorer() {
  const { data, loading, error } = useDataset();

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-white">
          Cargando...
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-red-400">
          {error}
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-gradient-to-br from-indigo-900 to-black min-h-screen pt-20">
        {data.map((record) => (
          <DatasetCard key={record.source + record.date} dataset={record} />
        ))}
      </div>
    </>
  );
}
