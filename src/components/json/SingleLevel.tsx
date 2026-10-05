
type SingleLevelProps = {
  employee: {
    name: string;
    email: string;
    phone: string;
    gender: string;
  };
};

export default function SingleLevel({
  employee,
}: SingleLevelProps) {
  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-2xl font-semibold text-gray-800">
        Single-Level JSON
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-1 text-sm font-medium text-gray-500">
            Name
          </p>
          <p className="font-semibold text-gray-800">
            {employee.name}
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-1 text-sm font-medium text-gray-500">
            Email
          </p>
          <p className="break-words font-semibold text-gray-800">
            {employee.email}
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-1 text-sm font-medium text-gray-500">
            Phone
          </p>
          <p className="font-semibold text-gray-800">
            {employee.phone}
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-1 text-sm font-medium text-gray-500">
            Gender
          </p>
          <p className="font-semibold text-gray-800">
            {employee.gender}
          </p>
        </div>
      </div>
    </section>
  );
}

