import Link from 'next/link'

const AboutComponent = () => {
  return (
    <div>
      <p className="max-w-[42rem] mb-5">
        I am a PhD Candidate in the Department of Economics at the{' '}
        <a href="https://lsa.umich.edu/econ" target="_blank" rel="noopener noreferrer" className="text-link-blue hover:text-link-blue-hover">
          University of Michigan
        </a>
        . My research lies in trade economics and development economics, often studying transportation infrastructure in developing economies. I am interested in infrastructure development and structural change. 
      </p>

      <p className="max-w-[42rem] mb-5">
        I received my bachelor&apos;s degree from{' '}
        <a href="https://nyuad.nyu.edu/" target="_blank" rel="noopener noreferrer" className="text-link-blue hover:text-link-blue-hover">
          New York University Abu Dhabi
        </a>{' '}
        (NYUAD) in Economics and Mathematics in 2020.
      </p>

      {/* CV button */}
      <Link
        href="/cv"
        className="inline-flex items-center gap-2 px-5 py-2.5 mb-4 text-sm font-medium text-slate-body bg-[#f7fafc] border border-border-light rounded-lg no-underline transition-all duration-200 hover:bg-blue-50 hover:border-link-blue hover:text-link-blue hover:shadow-sm"
      >
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        </svg>
        <strong className="text-slate-heading">Curriculum Vitae</strong>
      </Link>

      <hr className="border-0 h-px bg-border-light my-5" />

      {/* Publications */}
      <h2 className="inline-block text-2xl font-bold text-slate-heading pb-2 border-b-2 border-link-blue mb-5">
        Publications
      </h2>

      <div className="px-4 py-3 border-b border-border-light rounded-md transition-all duration-200 hover:bg-[#f7fafc] hover:shadow-[inset_3px_0_0_#2b6cb0]">
        <p className="mb-1 font-semibold text-slate-heading">
          Allocating Labor Across Small Firms: Experimental Evidence on Information Constraints
          <a href="https://www.dropbox.com/scl/fi/qgebakl520nmc992t1ibx/Labor_Reallocation_Between_Small_Firms.pdf?rlkey=s74xo9rup5e0extuoazgvaib1&e=1&dl=0">
            [PDF]
          </a>
        </p>
        <p className="text-sm text-slate-muted">with Morgan Hardy, Jamie McCasland, Andreas Menzel, Marc Witte</p>
      </div>
    </div>
  )
}

export default AboutComponent
