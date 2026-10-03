type ProfessionalInfoProps = {
  employee: {
    professional: {
      designation: string;
      department: string;
      joiningDate: string;
      employmentType: string;
    };
  };
};

export default function ProfessionalInfo({
  employee,
}: ProfessionalInfoProps) {
  return (
    <section className="mb-6">
      <h2 className="mb-5 text-2xl font-semibold">
        Professional Information
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">
            Designation
          </p>

          <p className="font-medium">
            {employee.professional.designation}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Department
          </p>

          <p className="font-medium">
            {employee.professional.department}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Joining Date
          </p>

          <p className="font-medium">
            {employee.professional.joiningDate}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Employment Type
          </p>

          <p className="font-medium">
            {employee.professional.employmentType}
          </p>
        </div>
      </div>
    </section>
  );
}