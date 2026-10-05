
type SkillsFindProps = {
  employee: {
    skills: string[];
  };
};

export default function SkillsFind({
  employee,
}: SkillsFindProps) {
  const foundSkill = employee.skills.find(
    (skill) => skill === "Next.js"
  );

  return (
    <section className="mx-auto mb-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-2xl font-semibold text-gray-800">
        Skills - Find
      </h2>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <p className="mb-1 text-sm font-medium text-gray-500">
          Found Skill
        </p>

        <p className="font-semibold text-gray-800">
          {foundSkill}
        </p>
      </div>
    </section>
  );
}

