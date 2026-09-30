// ——— Teaching data (edit here to add/update entries) ———
const courses = [
  {
    term: 'Fall 2023',
    course: 'Introduction to Statistics and Econometrics II (Econ 452)',
  },
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
