
type AllValuesProps = {
  employee: {
    [key: string]: unknown;
  };
};

export default function AllValues({
  employee,
}: AllValuesProps) {
  const values = Object.values(employee);

  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        All Values
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {values.map((value, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
          >
            <p className="break-words text-sm text-gray-700">
              {String(value)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

