// ═══════════════════════════════════════════════════════
// EDIT YOUR TEACHING HERE — just update the array below
// ═══════════════════════════════════════════════════════
const courses = [
  { term: 'Winter 2026', course: 'Econ 409: Introduction to Game Theory. Instructor: Doron Ravid' },
  { term: 'Winter 2024', course: 'Econ 461: Economic Development. Instructor: Emma Riley' },
  { term: 'Fall 2023', course: 'Econ 251: Introduction to Statistics and Econometrics. Instructor: Olga Lazareva' },
  { term: 'Winter 2023, Fall 2024, Winter 2025', course: 'ECON 401: Intermediate Microeconomics. Instructor: Chris Proulx' },
  { term: 'Fall 2022, Fall 2025', course: 'ECON 401: Intermediate Microeconomics. Instructor: David Miller' },
]

const TeachingComponent = () => {
  return (
    <div>
      <h2 className="inline-block text-2xl font-bold text-slate-heading pb-2 border-b-2 border-link-blue mb-5">
        Teaching
      </h2>

      <h3 className="text-lg text-slate-heading mt-5 mb-1 leading-tight">
        Graduate Student Instructor at <strong>the University of Michigan</strong>
      </h3>

      <table className="w-full mb-5 border-collapse" role="table" aria-label="Graduate Student Instructor at the University of Michigan">
        <tbody>
          {courses.map((c, i) => (
            <tr key={i} className="even:bg-[#fafafa] hover:bg-[#f0f0f0]">
              <td className="py-3 px-2 border border-white text-left align-top whitespace-nowrap w-[15%]" data-label="Term">
                {c.term}
              </td>
              <td className="py-3 px-2 border border-white text-left align-top w-[85%]" data-label="Course">
                {c.course}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeachingComponent
