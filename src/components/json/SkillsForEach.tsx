
type SkillsForEachProps = {
  employee: {
    skills: string[];
  };
};

export default function SkillsForEach({
  employee,
}: SkillsForEachProps) {
  const skillList: string[] = [];

  employee.skills.forEach((skill) => {
    skillList.push(skill);
  });

  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-2xl font-semibold text-gray-800">
        Skills - ForEach
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {skillList.map((skill, index) => (
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
