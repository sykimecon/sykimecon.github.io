const CvComponent = () => {
  const cvPath = './sykim_cv2024.pdf'

  return (
    <div>
      <h2 className="inline-block text-2xl font-bold text-slate-heading pb-2 border-b-2 border-link-blue mb-5">
        Curriculum Vitae
      </h2>

      <a
        href={cvPath}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 mb-4 text-sm font-medium text-slate-body bg-[#f7fafc] border border-border-light rounded-lg no-underline transition-all duration-200 hover:bg-blue-50 hover:border-link-blue hover:text-link-blue hover:shadow-sm"
      >
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        </svg>
        <strong className="text-slate-heading">Download PDF</strong>
      </a>

      <div className="border border-border-light rounded-md overflow-hidden mt-4">
        <iframe
          src={cvPath}
          title="Curriculum Vitae"
          className="w-full border-0"
          style={{ height: '80vh' }}
        />
      </div>

      <p className="text-xs text-slate-muted mt-3">
        PDF not displaying?{' '}
        <a href={cvPath} download className="text-link-blue hover:text-link-blue-hover">Download it here</a>.
      </p>
    </div>
  )
}

export default CvComponent
