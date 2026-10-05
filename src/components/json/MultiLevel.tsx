
type MultiLevelProps = {
  employee: {
    contact: {
      address: string;
      city: string;
      state: string;
      country: string;
    };
    professional: {
      designation: string;
      department: string;
      joiningDate: string;
      employmentType: string;
    };
    education: {
      qualification: string;
      university: string;
      course: string;
      passingYear: string;
      percentage: string;
    };
  };
};

export default function MultiLevel({
  employee,
}: MultiLevelProps) {
  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Multi-Level JSON
      </h2>

      {/* Contact */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Contact
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">Address</p>
            <p className="font-semibold text-gray-800">
              {employee.contact.address}
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">City</p>
            <p className="font-semibold text-gray-800">
              {employee.contact.city}
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">State</p>
            <p className="font-semibold text-gray-800">
              {employee.contact.state}
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">Country</p>
            <p className="font-semibold text-gray-800">
              {employee.contact.country}
            </p>
          </div>
        </div>
      </div>

      {/* Professional */}
      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Professional
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">
              Designation
            </p>
            <p className="font-semibold text-gray-800">
              {employee.professional.designation}
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">
              Department
            </p>
            <p className="font-semibold text-gray-800">
              {employee.professional.department}
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">
              Joining Date
            </p>
            <p className="font-semibold text-gray-800">
              {employee.professional.joiningDate}
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">
              Employment Type
            </p>
            <p className="font-semibold text-gray-800">
              {employee.professional.employmentType}
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Education
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">
              Qualification
            </p>
            <p className="font-semibold text-gray-800">
              {employee.education.qualification}
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">
              University
            </p>
            <p className="font-semibold text-gray-800">
              {employee.education.university}
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">
              Course
            </p>
            <p className="font-semibold text-gray-800">
              {employee.education.course}
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">
              Passing Year
            </p>
            <p className="font-semibold text-gray-800">
              {employee.education.passingYear}
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 text-sm text-gray-500">
              Percentage
            </p>
            <p className="font-semibold text-gray-800">
              {employee.education.percentage}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

