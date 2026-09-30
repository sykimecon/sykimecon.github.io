'use client'

import { useState } from 'react'

// ═══════════════════════════════════════════════════════
// EDIT YOUR PAPERS HERE — just update the arrays below
// ═══════════════════════════════════════════════════════
const papers = {
  publications: [
    {
      title: 'Allocating Labor Across Small Firms: Experimental Evidence on Information Constraints',
      coauthors: 'Morgan Hardy, Jamie McCasland, Andreas Menzel, Marc Witte',
      abstract: '[Your abstract here]',
      pdf: 'https://www.dropbox.com/scl/fi/qgebakl520nmc992t1ibx/Labor_Reallocation_Between_Small_Firms.pdf?rlkey=s74xo9rup5e0extuoazgvaib1&e=1&dl=0',
    },
  ],
  workInProgress: [
    {
      title: 'Network Complementarities in Maritime Trade Infrastructure: Evidence from the Philippines',
      coauthors: '',
      abstract: '[Your abstract here]',
      pdf: '',
    },
    {
      title: 'Market Access and Household-Level Specialization: Evidence from Road-Building in Malawi',
      coauthors: '',
      abstract: '[Your abstract here]',
      pdf: '',
    },
    {
      title: 'Distributional Environmental Consequences of the Trade of Used Vehicles',
      coauthors: '',
      abstract: '[Your abstract here]',
      pdf: '',
    },
        {
      title: 'Agricultural Productivity, Market Access, and Spatial Structural Change',
      coauthors: 'Henry Young',
      abstract: '[Your abstract here]',
      pdf: '',
    },
          {
      title: 'Timing of Cash Transfers in the context of Climate Change-Induced Weather Shocks',
      coauthors: 'Gaea Morales',
      abstract: '[Your abstract here]',
      pdf: '',
    },
  ],
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
        Publications
      </h2>
      {papers.publications.map((paper, i) => (
        <PaperCard key={i} paper={paper} />
      ))}

      <h2 className="inline-block text-2xl font-bold text-slate-heading pb-2 border-b-2 border-link-blue mb-5 mt-8">
        Work in Progress
      </h2>
      {papers.workInProgress.map((paper, i) => (
        <PaperCard key={i} paper={paper} />
      ))}
    </div>
  )
}

export default ResearchComponent
