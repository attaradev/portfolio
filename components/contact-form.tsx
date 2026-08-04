'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react'
import {
  contactIntents,
  intentFields,
  consultingOptions,
  speakingFormats,
  type ContactIntent,
} from '@/data/contact'

const baseSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
})

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface ContactFormProps {
  selectedIntent: ContactIntent | null
  onBack: () => void
}

export default function ContactForm({ selectedIntent, onBack }: ContactFormProps) {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(baseSchema),
  })

  const fields = selectedIntent ? intentFields[selectedIntent] : []
  const intentLabel = contactIntents.find((i) => i.id === selectedIntent)?.label || ''

  const onSubmit = async (_: Record<string, string>) => {
    setFormStatus('submitting')
    setErrorMessage('')

    // Collect all form data including dynamic fields
    const formData = new FormData(document.querySelector('form') as HTMLFormElement)
    const allData: Record<string, string> = {}
    formData.forEach((value, key) => {
      allData[key] = value.toString()
    })

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

      if (accessKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            ...allData,
            intent: intentLabel,
            from_name: 'Portfolio Contact Form',
            subject: `[${intentLabel}] New inquiry from ${allData.name}`,
            replyto: allData.email,
          }),
        })

        const result = await response.json()

        if (response.ok && result.success) {
          setFormStatus('success')
          reset()
          setTimeout(() => setFormStatus('idle'), 5000)
        } else {
          throw new Error(result.message || 'Form submission failed')
        }
      } else {
        // Fallback to mailto
        const subject = `[${intentLabel}] New inquiry`
        const body = Object.entries(allData)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n\n')
        const mailtoLink = `mailto:hello@attara.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoLink

        setTimeout(() => {
          setFormStatus('success')
          reset()
          setTimeout(() => setFormStatus('idle'), 5000)
        }, 500)
      }
    } catch (error) {
      setFormStatus('error')
      setErrorMessage('Something went wrong. Please try again or email me directly at hello@attara.dev')
      console.error('Form submission error:', error)
    }
  }

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        Choose a different option
      </button>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">{intentLabel}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {contactIntents.find((i) => i.id === selectedIntent)?.description}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Your Name <span className="text-accent">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            disabled={formStatus === 'submitting'}
          />
          {errors.name && <p className="mt-1.5 text-sm text-destructive">{errors.name.message as string}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Your Email <span className="text-accent">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            name="email"
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            disabled={formStatus === 'submitting'}
          />
          {errors.email && <p className="mt-1.5 text-sm text-destructive">{errors.email.message as string}</p>}
        </div>

        {/* Dynamic Fields based on Intent */}
        {fields.map((field, index) => (
          <div key={index}>
            <label htmlFor={`field-${index}`} className="block text-sm font-medium text-foreground mb-1.5">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={`field-${index}`}
                name={field.label}
                placeholder={field.placeholder}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                disabled={formStatus === 'submitting'}
              />
            ) : (
              <input
                type="text"
                id={`field-${index}`}
                name={field.label}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                disabled={formStatus === 'submitting'}
              />
            )}
          </div>
        ))}

        {/* Consulting-specific fields */}
        {selectedIntent === 'consulting' && (
          <>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Timeline</label>
              <div className="space-y-2">
                {consultingOptions.timeline.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="timeline"
                      value={option.value}
                      className="w-4 h-4 text-accent border-border focus:ring-accent"
                    />
                    <span className="text-sm text-muted-foreground">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Type of engagement</label>
              <div className="space-y-2">
                {consultingOptions.engagement.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="engagement"
                      value={option.value}
                      className="w-4 h-4 text-accent border-border rounded focus:ring-accent"
                    />
                    <span className="text-sm text-muted-foreground">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Speaking-specific fields */}
        {selectedIntent === 'speaking' && (
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Event Format</label>
            <div className="grid grid-cols-2 gap-2">
              {speakingFormats.map((format) => (
                <label key={format.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    value={format.value}
                    className="w-4 h-4 text-accent border-border focus:ring-accent"
                  />
                  <span className="text-sm text-muted-foreground">{format.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formStatus === 'submitting' || formStatus === 'success'}
          className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formStatus === 'submitting' ? (
            <>
              <div className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : formStatus === 'success' ? (
            <>
              <CheckCircle size={20} />
              Message Sent!
            </>
          ) : (
            <>
              <Send size={18} />
              Submit
            </>
          )}
        </button>

        {/* Success Message */}
        {formStatus === 'success' && (
          <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 flex items-start gap-3">
            <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-accent">Thank you for reaching out!</p>
              <p className="text-sm text-muted-foreground mt-1">
                I&apos;ll review your message and respond within 48 hours.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {formStatus === 'error' && (
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-3">
            <AlertCircle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-destructive">Something went wrong</p>
              <p className="text-sm text-muted-foreground mt-1">{errorMessage}</p>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
