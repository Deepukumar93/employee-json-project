
type ProfessionalNestedProps = {
  employee: {
    professional: {
      designation: string;
      department: string;
      joiningDate: string;
      employmentType: string;
    };
  };
};

export default function ProfessionalNested({
  employee,
}: ProfessionalNestedProps) {
  const professionalKeys = Object.keys(
    employee.professional
  );

  const professionalValues = Object.values(
    employee.professional
  );

  const professionalEntries = Object.entries(
    employee.professional
  );

  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Professional Nested JSON
      </h2>

      {/* Professional Keys */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Professional Keys
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {professionalKeys.map((key) => (
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

      {/* Professional Values */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Professional Values
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {professionalValues.map((value, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <p className="break-words text-gray-700">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Key + Value */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Professional Key + Value
        </h3>

        <div className="space-y-3">
          {professionalEntries.map(([key, value]) => (
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

