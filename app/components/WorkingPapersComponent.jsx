import Link from "next/link"

const WorkingPapersComponent = () => {
  return (
    <div className="sm:grid-flow-row md:grid md:grid-cols-5">
      <div className='col-start-2 mb-5'>
        <div className='mb-5'>
            <h1 className='text-2xl font-medium'>
              Working Papers
            </h1>
            <p>
            <Link className="text-blue-500 italic" 
                href="https://www.dropbox.com/scl/fi/qgebakl520nmc992t1ibx/Labor_Reallocation_Between_Small_Firms.pdf?e=2&fbclid=IwZXh0bgNhZW0CMTAAAR040WZEFKeUNzMNuzqdIQxHPDHRErxvcKsiyBSF5jZfqRyxZsAB6jGtFto_aem_kChfqd65Y2zuYOD11LY86A&rlkey=s74xo9rup5e0extuoazgvaib1&dl=0" 
                target="_blank">
                <br/>
                Allocating Labor Across Small Firms: Experimental Evidence on Information Constraints
                <br/>
            </Link>
            </p>
          </div>
      </div>

      <div className='row-start-2 col-start-2 justify-center mb-5'>
          <h1 className='text-xl font-medium'>
            Research topic one
          </h1>
          <h2 className='text-lg'>
            The opening intro to research title two
          </h2>
          <p>
            Research statement
          </p>
        </div>
    </div>
  )
}

export default WorkingPapersComponent