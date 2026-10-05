
type KeyValueProps = {
  employee: {
    [key: string]: unknown;
  };
};

export default function KeyValue({
  employee,
}: KeyValueProps) {
  const entries = Object.entries(employee);

  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        Key + Value
      </h2>

      <div className="space-y-3">
        {entries.map(([key, value]) => (
          <div
            key={key}
            className="grid grid-cols-1 gap-2 rounded-lg border border-gray-200 bg-gray-50 p-4 sm:grid-cols-[180px_1fr] sm:items-center"
          >
            <p className="font-semibold text-gray-800">
              {key}
            </p>

            <p className="break-words text-gray-600">
              {String(value)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

