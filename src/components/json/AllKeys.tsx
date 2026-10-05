
type AllKeysProps = {
  employee: {
    [key: string]: unknown;
  };
};

export default function AllKeys({ employee }: AllKeysProps) {
  const keys = Object.keys(employee);

  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        All Keys
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {keys.map((key) => (
          <div
            key={key}
            className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
          >
            <p className="text-sm font-medium text-gray-700">
              {key}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

