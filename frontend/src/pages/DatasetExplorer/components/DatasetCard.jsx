export default function DatasetCard({ dataset }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-xl shadow-lg p-4 text-white backdrop-blur-md flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{dataset.source}</h3>
      <p className="text-sm opacity-80">
        {dataset.rows} rows x {dataset.columns} columns
      </p>
      <p className="text-sm opacity-60">{new Date(dataset.date).toLocaleDateString()}</p>
      {dataset.plot_url ? (
        <iframe src={dataset.plot_url} className="w-full h-64 mt-2 rounded" />
      ) : null}
    </div>
  );
}
