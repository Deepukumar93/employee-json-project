type PersonalInfoProps = {
  employee: {
    name: string;
    id: string;
    dateOfBirth: string;
    gender: string;
    phone: string;
    email: string;
  };
};

export default function PersonalInfo({
  employee,
}: PersonalInfoProps) {
  return (
    <section className="mb-6">
      <h2 className="mb-5 text-2xl font-semibold">
        Personal Information
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">
            Employee Name
          </p>

          <p className="font-medium">
            {employee.name}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Employee ID
          </p>

          <p className="font-medium">
            {employee.id}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Date of Birth
          </p>

          <p className="font-medium">
            {employee.dateOfBirth}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Gender
          </p>

          <p className="font-medium">
            {employee.gender}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Phone Number
          </p>

          <p className="font-medium">
            {employee.phone}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Email Address
          </p>

          <p className="font-medium">
            {employee.email}
          </p>
        </div>
      </div>
    </section>
  );
}