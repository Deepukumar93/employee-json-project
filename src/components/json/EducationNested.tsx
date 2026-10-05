
type EducationNestedProps = {
  employee: {
    education: {
      qualification: string;
      university: string;
      course: string;
      passingYear: string;
      percentage: string;
    };
  };
};

export default function EducationNested({
  employee,
}: EducationNestedProps) {
  const educationKeys = Object.keys(
    employee.education
  );

  const educationValues = Object.values(
    employee.education
  );

  const educationEntries = Object.entries(
    employee.education
  );

  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Education Nested JSON
      </h2>

      {/* Education Keys */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Education Keys
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {educationKeys.map((key) => (
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

      {/* Education Values */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Education Values
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {educationValues.map((value, index) => (
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

      {/* Education Key + Value */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Education Key + Value
        </h3>

        <div className="space-y-3">
          {educationEntries.map(([key, value]) => (
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

