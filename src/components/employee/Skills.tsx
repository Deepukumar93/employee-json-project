type SkillsProps = {
  employee: {
    skills: string[];
  };
};

export default function Skills({ employee }: SkillsProps) {
  return (
    <section className="mb-6">
      <h2 className="mb-5 text-2xl font-semibold">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {employee.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-gray-200 px-4 py-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}