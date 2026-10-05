
type ContactNestedProps = {
  employee: {
    contact: {
      address: string;
      city: string;
      state: string;
      country: string;
    };
  };
};

export default function ContactNested({
  employee,
}: ContactNestedProps) {
  const contactKeys = Object.keys(employee.contact);

  const contactValues = Object.values(employee.contact);

  const contactEntries = Object.entries(employee.contact);

  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Contact Nested JSON
      </h2>

      {/* Contact Keys */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Contact Keys
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {contactKeys.map((key) => (
            <div
              key={key}
              className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center"
            >
              <p className="font-medium text-gray-700">
                {key}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Values */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Contact Values
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {contactValues.map((value, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <p className="text-gray-700">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Key + Value */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Contact Key + Value
        </h3>

        <div className="space-y-3">
          {contactEntries.map(([key, value]) => (
            <div
              key={key}
              className="grid grid-cols-1 gap-2 rounded-lg border border-gray-200 bg-gray-50 p-4 sm:grid-cols-[180px_1fr] sm:items-center"
            >
              <p className="font-semibold text-gray-800">
                {key}
              </p>

              <p className="break-words text-gray-600">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
