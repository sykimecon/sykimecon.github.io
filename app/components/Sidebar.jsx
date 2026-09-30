import Image from 'next/image'

const Sidebar = () => {
  return (
    <aside className="hidden md:block sticky top-20 self-start text-center p-4">
      <header>
        <Image
          src="./images/sy.jpg"
          alt="Seongyoon Kim, PhD Candidate in Economics at the University of Michigan"
          width={200}
          height={200}
          unoptimized
          className="w-[12.5rem] max-w-full h-auto mx-auto mb-4 block border-[3px] border-border-light rounded-full shadow-md"
        />
        <p className="text-[2rem] font-bold leading-tight tracking-tight text-slate-heading mb-3">
          Seongyoon Kim
        </p>
        <p className="mb-1 text-slate-body">
          PhD Candidate in Economics
          <br />
          University of Michigan
        </p>
        <p className="mt-2.5 text-sm text-slate-body text-center">
          syoonkim@umich.edu
        </p>
        <hr className="my-4 border-border-light opacity-60" />

        <div className="max-w-[13.75rem] mx-auto pl-5">
          <p className="flex items-center mb-2.5 text-sm leading-normal">
            <svg className="w-4 h-4 min-w-[1rem] mr-3 fill-slate-muted shrink-0" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
            </svg>
            <a href="mailto:syoonkim@umich.edu" className="flex-1 text-left text-link-blue hover:text-link-blue-hover hover:underline hover:underline-offset-2">
              Email
            </a>
          </p>
        </div>
      </header>
    </aside>
  )
}

export default Sidebar
