
type SkillsFilterProps = {
  employee: {
    skills: string[];
  };
};

export default function SkillsFilter({
  employee,
}: SkillsFilterProps) {
  const filteredSkills = employee.skills.filter(
    (skill) => skill === "Java"
  );

  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-2xl font-semibold text-gray-800">
        Skills - Filter
      </h2>

      <p className="mb-4 text-sm text-gray-500">
        Filtered Skill: Java
      </p>

      <div className="flex flex-wrap gap-3">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
          >
            <p className="font-medium text-gray-700">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

