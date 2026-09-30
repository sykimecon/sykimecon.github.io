'use client'

import { useState } from 'react'

// ——— Paper data (edit here to add/update papers) ———
const papers = {
  jmp: {
    title: '[Job Market Paper Title]',
    coauthors: '',
    abstract: '[Abstract text for your job market paper.]',
    pdf: '',
  },
  workingPapers: [
    {
      title: 'Allocating Labor Across Small Firms: Experimental Evidence on Information Constraints',
      coauthors: '',
      abstract: '',
      pdf: 'https://www.dropbox.com/scl/fi/tsbagohxjghtvdapylcn5/Draft_Apr_2024.pdf?rlkey=h4hs2ttwlk73m1mfuryc6xqhq&e=1&st=u8pzx94j&dl=0',
    },
  ],
  workInProgress: [],
}

function AbstractToggle({ text }) {
  const [open, setOpen] = useState(false)
  if (!text || text.startsWith('[')) return null

  return (
    <div className="mt-1">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-link-blue hover:text-link-blue-hover hover:underline hover:underline-offset-2 bg-transparent border-0 cursor-pointer p-0"
      >
        <span className="text-xs">{open ? '[\u2212]' : '[+]'}</span> Abstract
      </button>
      {open && (
        <p className="mt-2 text-sm text-slate-muted leading-relaxed">{text}</p>
      )}
    </div>
  )
}

function PaperCard({ paper }) {
  return (
    <div className="px-4 py-3 border-b border-border-light rounded-md transition-all duration-200 hover:bg-[#f7fafc] hover:shadow-[inset_3px_0_0_#2b6cb0] last:border-b-0">
      <p className="mb-1 font-semibold text-slate-heading">
        {paper.title}
        {paper.pdf && (
          <a href={paper.pdf} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm font-normal text-link-blue hover:text-link-blue-hover">
            [PDF]
          </a>
        )}
      </p>
      {paper.coauthors && (
        <p className="text-sm text-slate-muted mb-1">with {paper.coauthors}</p>
      )}
      <AbstractToggle text={paper.abstract} />
    </div>
  )
}

const ResearchComponent = () => {
  return (
    <div>
      <h2 className="inline-block text-2xl font-bold text-slate-heading pb-2 border-b-2 border-link-blue mb-5">
        Job Market Paper
      </h2>
      <PaperCard paper={papers.jmp} />

      <h2 className="inline-block text-2xl font-bold text-slate-heading pb-2 border-b-2 border-link-blue mb-5 mt-8">
        Working Papers
      </h2>
      {papers.workingPapers.map((paper, i) => (
        <PaperCard key={i} paper={paper} />
      ))}

      <h2 className="inline-block text-2xl font-bold text-slate-heading pb-2 border-b-2 border-link-blue mb-5 mt-8">
        Work in Progress
      </h2>
      {papers.workInProgress.length > 0 ? (
        papers.workInProgress.map((paper, i) => (
          <PaperCard key={i} paper={paper} />
        ))
      ) : (
        <p className="text-slate-muted italic text-sm">Coming soon.</p>
      )}
    </div>
  )
}

export default ResearchComponent
