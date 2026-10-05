
"use client";

import employees from "@/data/employees.json";

export default function Page() {
  const employee = employees[0];

  // =====================================================
  // TOPIC 1: GET ALL KEYS
  // Object.keys() se object ki saari keys milti hain
  // =====================================================

  const keys = Object.keys(employee);

  // =====================================================
  // TOPIC 2: GET ALL VALUES
  // Object.values() se object ki saari values milti hain
  // =====================================================

  const values = Object.values(employee);

  // =====================================================
  // TOPIC 3: GET KEY + VALUE
  // Object.entries() se key aur value dono milte hain
  // =====================================================

  const entries = Object.entries(employee);

  // =====================================================
  // TOPIC 4: READ OPERATION
  // Object se directly value read karna
  // =====================================================

  const readName = employee.name;
  const readEmail = employee.email;

  // =====================================================
  // TOPIC 5: ADD OPERATION
  // Spread operator (...) se new property add karna
  // =====================================================

  const addedEmployee = {
    ...employee,
    salary: 50000,
  };

  // =====================================================
  // TOPIC 6: UPDATE OPERATION
  // Existing property ki value change karna
  // =====================================================

  const updatedEmployee = {
    ...employee,
    name: "Deepu Kumar Singh",
  };

  // =====================================================
  // TOPIC 7: DELETE OPERATION
  // delete operator se property remove karna
  // =====================================================

  const deletedEmployee: {
    id: string;
    name: string;
    gender?: string;
  } = {
    id: employee.id,
    name: employee.name,
    gender: employee.gender,
  };

  delete deletedEmployee.gender;

  // =====================================================
  // TOPIC 8: SEARCH OPERATION
  // find() se specific employee search karna
  // =====================================================

  const searchEmployee = employees.find(
    (emp) => emp.id === "EMP-001"
  );

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow">

        {/* =================================================
            TOPIC 1: ALL KEYS
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            All Keys
          </h2>

          <div className="space-y-2">
            {keys.map((key) => (
              <div
                key={key}
                className="rounded-lg border bg-gray-50 p-3"
              >
                {key}
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            TOPIC 2: ALL VALUES
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            All Values
          </h2>

          <div className="space-y-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-lg border bg-gray-50 p-3"
              >
                {String(value)}
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            TOPIC 3: KEY + VALUE
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Key + Value
          </h2>

          <div className="space-y-2">
            {entries.map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between gap-4 rounded-lg border bg-gray-50 p-3"
              >
                <strong>{key}</strong>

                <span>
                  {String(value)}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            TOPIC 4: SINGLE-LEVEL JSON
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Single-Level JSON
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="rounded-lg border bg-gray-50 p-4">
              <strong>Name:</strong>{" "}
              {employee.name}
            </div>

            <div className="rounded-lg border bg-gray-50 p-4">
              <strong>Email:</strong>{" "}
              {employee.email}
            </div>

            <div className="rounded-lg border bg-gray-50 p-4">
              <strong>Phone:</strong>{" "}
              {employee.phone}
            </div>

            <div className="rounded-lg border bg-gray-50 p-4">
              <strong>Gender:</strong>{" "}
              {employee.gender}
            </div>

          </div>
        </section>

        {/* =================================================
            TOPIC 5: MULTI-LEVEL JSON
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Multi-Level JSON
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="rounded-lg border bg-gray-50 p-4">
              <strong>City:</strong>{" "}
              {employee.contact.city}
            </div>

            <div className="rounded-lg border bg-gray-50 p-4">
              <strong>State:</strong>{" "}
              {employee.contact.state}
            </div>

            <div className="rounded-lg border bg-gray-50 p-4">
              <strong>Designation:</strong>{" "}
              {employee.professional.designation}
            </div>

            <div className="rounded-lg border bg-gray-50 p-4">
              <strong>Qualification:</strong>{" "}
              {employee.education.qualification}
            </div>

          </div>
        </section>

        {/* =================================================
            TOPIC 6: NESTED JSON - CONTACT
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Contact - Nested JSON
          </h2>

          <h3 className="mb-3 font-semibold">
            Contact Keys
          </h3>

          <div className="mb-5 space-y-2">
            {Object.keys(employee.contact).map((key) => (
              <div
                key={key}
                className="rounded-lg border bg-gray-50 p-3"
              >
                {key}
              </div>
            ))}
          </div>

          <h3 className="mb-3 font-semibold">
            Contact Values
          </h3>

          <div className="space-y-2">
            {Object.values(employee.contact).map(
              (value, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-gray-50 p-3"
                >
                  {value}
                </div>
              )
            )}
          </div>
        </section>

        {/* =================================================
            TOPIC 7: NESTED JSON - PROFESSIONAL
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Professional - Nested JSON
          </h2>

          <h3 className="mb-3 font-semibold">
            Professional Keys
          </h3>

          <div className="mb-5 space-y-2">
            {Object.keys(employee.professional).map(
              (key) => (
                <div
                  key={key}
                  className="rounded-lg border bg-gray-50 p-3"
                >
                  {key}
                </div>
              )
            )}
          </div>

          <h3 className="mb-3 font-semibold">
            Professional Values
          </h3>

          <div className="space-y-2">
            {Object.values(employee.professional).map(
              (value, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-gray-50 p-3"
                >
                  {value}
                </div>
              )
            )}
          </div>
        </section>

        {/* =================================================
            TOPIC 8: NESTED JSON - EDUCATION
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Education - Nested JSON
          </h2>

          <h3 className="mb-3 font-semibold">
            Education Keys
          </h3>

          <div className="mb-5 space-y-2">
            {Object.keys(employee.education).map(
              (key) => (
                <div
                  key={key}
                  className="rounded-lg border bg-gray-50 p-3"
                >
                  {key}
                </div>
              )
            )}
          </div>

          <h3 className="mb-3 font-semibold">
            Education Values
          </h3>

          <div className="space-y-2">
            {Object.values(employee.education).map(
              (value, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-gray-50 p-3"
                >
                  {value}
                </div>
              )
            )}
          </div>
        </section>

        {/* =================================================
            TOPIC 9: ARRAY map()
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Skills - map()
          </h2>

          <div className="flex flex-wrap gap-3">
            {employee.skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-lg border bg-gray-50 px-4 py-2"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            TOPIC 10: ARRAY filter()
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Skills - filter()
          </h2>

          <div className="flex flex-wrap gap-3">
            {employee.skills
              .filter((skill) => skill.includes("Java"))
              .map((skill) => (
                <div
                  key={skill}
                  className="rounded-lg border bg-gray-50 px-4 py-2"
                >
                  {skill}
                </div>
              ))}
          </div>
        </section>

        {/* =================================================
            TOPIC 11: ARRAY find()
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Skills - find()
          </h2>

          <div className="rounded-lg border bg-gray-50 p-4">
            {employee.skills.find(
              (skill) => skill === "React.js"
            )}
          </div>
        </section>

        {/* =================================================
            TOPIC 12: ARRAY forEach()
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            Skills - forEach()
          </h2>

          <p className="mb-3 text-gray-600">
            Open browser console to see all skills.
          </p>

          <button
            onClick={() => {
              employee.skills.forEach((skill, index) => {
                console.log(index, skill);
              });
            }}
            className="rounded-lg bg-black px-5 py-2 text-white"
          >
            Print Skills in Console
          </button>
        </section>

        {/* =================================================
            TOPIC 13: JSON OBJECT OPERATIONS
        ================================================= */}

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold">
            JSON Object Operations
          </h2>

          {/* READ */}

          <div className="mb-6 rounded-lg border p-5">
            <h3 className="mb-3 text-lg font-semibold">
              Read
            </h3>

            <p>
              <strong>Name:</strong>{" "}
              {readName}
            </p>

            <p className="mt-2">
              <strong>Email:</strong>{" "}
              {readEmail}
            </p>
          </div>

          {/* ADD */}

          <div className="mb-6 rounded-lg border p-5">
            <h3 className="mb-3 text-lg font-semibold">
              Add
            </h3>

            <p>
              <strong>Original Name:</strong>{" "}
              {employee.name}
            </p>

            <p className="mt-2">
              <strong>Added Salary:</strong>{" "}
              {addedEmployee.salary}
            </p>
          </div>

          {/* UPDATE */}

          <div className="mb-6 rounded-lg border p-5">
            <h3 className="mb-3 text-lg font-semibold">
              Update
            </h3>

            <p>
              <strong>Old Name:</strong>{" "}
              {employee.name}
            </p>

            <p className="mt-2">
              <strong>Updated Name:</strong>{" "}
              {updatedEmployee.name}
            </p>
          </div>

          {/* DELETE */}

          <div className="mb-6 rounded-lg border p-5">
            <h3 className="mb-3 text-lg font-semibold">
              Delete
            </h3>

            <p>
              <strong>Original Gender:</strong>{" "}
              {employee.gender}
            </p>

            <p className="mt-2">
              <strong>Gender after delete:</strong>{" "}
              {deletedEmployee.gender ?? "Deleted"}
            </p>
          </div>

          {/* SEARCH */}

          <div className="rounded-lg border p-5">
            <h3 className="mb-3 text-lg font-semibold">
              Search
            </h3>

            {searchEmployee ? (
              <div className="space-y-2">
                <p>
                  <strong>ID:</strong>{" "}
                  {searchEmployee.id}
                </p>

                <p>
                  <strong>Name:</strong>{" "}
                  {searchEmployee.name}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {searchEmployee.email}
                </p>
              </div>
            ) : (
              <p>Employee not found</p>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}

