import employees from "@/data/employees.json";

import EmployeeHeader from "@/components/employee/EmployeeHeader";
import PersonalInfo from "@/components/employee/PersonalInfo";
import ContactInfo from "@/components/employee/ContactInfo";
import ProfessionalInfo from "@/components/employee/ProfessionalInfo";
import Education from "@/components/employee/Education";
import Skills from "@/components/employee/Skills";

export default function Home() {
  const employee = employees[0];

  return (
    <main className="mx-auto max-w-5xl p-8">
      <EmployeeHeader employee={employee} />

      <PersonalInfo employee={employee} />

      <ContactInfo employee={employee} />

      <Education employee={employee} />

      <ProfessionalInfo employee={employee} />

      <Skills employee={employee} />
    </main>
  );
}