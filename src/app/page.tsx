
import employees from "@/data/employees.json";

import AllKeys from "@/components/json/AllKeys";
import AllValues from "@/components/json/AllValues";
import KeyValue from "@/components/json/KeyValue";
import SingleLevel from "@/components/json/SingleLevel";
import MultiLevel from "@/components/json/MultiLevel";
import ContactNested from "@/components/json/ContactNested";
import ProfessionalNested from "@/components/json/ProfessionalNested";
import EducationNested from "@/components/json/EducationNested";
import SkillsMap from "@/components/json/SkillsMap";
import SkillsFilter from "@/components/json/SkillsFilter";
import SkillsFind from "@/components/json/SkillsFind";
import SkillsForEach from "@/components/json/SkillsForEach";
import ObjectOperations from "@/components/json/ObjectOperations";

export default function Home() {
  const employee = employees[0];

  return (
    <main>
      <AllKeys employee={employee} />

      <AllValues employee={employee} />

      <KeyValue employee={employee} />

      <SingleLevel employee={employee} />

      <MultiLevel employee={employee} />

      <ContactNested employee={employee} />

      <ProfessionalNested employee={employee} />

      <EducationNested employee={employee} />

      <SkillsMap employee={employee} />

      <SkillsFilter employee={employee} />

      <SkillsFind employee={employee} />

      <SkillsForEach employee={employee} />

      <ObjectOperations employee={employee} />
    </main>
  );
}

