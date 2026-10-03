type EducationProps = {
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

export default function Education({
  employee,
}: EducationProps) {
  return (
    <section className="mb-6">
      <h2 className="mb-5 text-2xl font-semibold">
        Education
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">
            Qualification
          </p>

          <p className="font-medium">
            {employee.education.qualification}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            University
          </p>

          <p className="font-medium">
            {employee.education.university}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Course
          </p>

          <p className="font-medium">
            {employee.education.course}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Passing Year
          </p>

          <p className="font-medium">
            {employee.education.passingYear}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Percentage
          </p>

          <p className="font-medium">
            {employee.education.percentage}
          </p>
        </div>
      </div>
    </section>
  );
}