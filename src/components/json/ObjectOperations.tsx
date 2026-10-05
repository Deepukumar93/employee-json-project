
type ObjectOperationsProps = {
  employee: {
    id: string;
    name: string;
    email: string;
    gender: string;
  };
};

export default function ObjectOperations({
  employee,
}: ObjectOperationsProps) {
  // 1. Read
  const readName = employee.name;
  const readEmail = employee.email;

  // 2. Add
  const addedEmployee = {
    ...employee,
    salary: 50000,
  };

  // 3. Update
  const updatedEmployee = {
    ...employee,
    name: "Deepu Kumar Singh",
  };

  // 4. Delete
  const deletedEmployee: {
    id: string;
    name: string;
    gender?: string;
  } = {
    id: employee.id,
    name: employee.name,
    gender: employee.gender,
  };

  delete deletedEmployee.gender;

  // 5. Search
  const searchEmployee =
    employee.id === "EMP-001"
      ? employee
      : null;

  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Object Operations
      </h2>

      {/* Read */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          1. Read
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">
              Name
            </p>
            <p className="font-semibold text-gray-800">
              {readName}
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">
              Email
            </p>
            <p className="break-words font-semibold text-gray-800">
              {readEmail}
            </p>
          </div>
        </div>
      </div>

      {/* Add */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          2. Add
        </h3>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-1 text-sm text-gray-500">
            Salary
          </p>
          <p className="font-semibold text-gray-800">
            ₹{addedEmployee.salary}
          </p>
        </div>
      </div>

      {/* Update */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          3. Update
        </h3>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-1 text-sm text-gray-500">
            Updated Name
          </p>
          <p className="font-semibold text-gray-800">
            {updatedEmployee.name}
          </p>
        </div>
      </div>

      {/* Delete */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          4. Delete
        </h3>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-1 text-sm text-gray-500">
            Gender after delete
          </p>
          <p className="font-semibold text-gray-800">
            {deletedEmployee.gender ?? "Deleted"}
          </p>
        </div>
      </div>

      {/* Search */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          5. Search
        </h3>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-1 text-sm text-gray-500">
            Search Result
          </p>
          <p className="font-semibold text-gray-800">
            {searchEmployee
              ? searchEmployee.name
              : "Employee not found"}
          </p>
        </div>
      </div>
    </section>
  );
}
