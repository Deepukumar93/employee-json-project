type EmployeeHeaderProps = {
  employee: {
    name: string;
    id: string;
    professional: {
      designation: string;
    };
  };
};

export default function EmployeeHeader({
  employee,
}: EmployeeHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold">
        {employee.name}
      </h1>

      <p className="mt-2 text-gray-600">
        Employee ID: {employee.id}
      </p>

      <p className="mt-1 text-gray-600">
        {employee.professional.designation}
      </p>
    </header>
  );
}