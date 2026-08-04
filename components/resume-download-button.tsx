'use client'

import { useState, useCallback } from 'react'
import { Download, Loader2 } from 'lucide-react'

interface ResumeDownloadButtonProps {
  label: string
}

export default function ResumeDownloadButton({ label }: ResumeDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = useCallback(async () => {
    setIsGenerating(true)
    try {
      // Dynamic imports to avoid SSR issues
      const { pdf } = await import('@react-pdf/renderer')
      const { default: ResumePDF } = await import('./resume-pdf')

      const blob = await pdf(<ResumePDF />).toBlob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Mike_Attara_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error generating PDF:', error)
    } finally {
      setIsGenerating(false)
    }
  }, [])

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-accent text-accent-foreground rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all disabled:opacity-70 disabled:cursor-wait"
    >
      {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
      {isGenerating ? 'Generating...' : label}
    </button>
  )
}
