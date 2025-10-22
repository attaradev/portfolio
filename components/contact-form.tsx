'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200, 'Subject is too long'),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000, 'Message is too long'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus('submitting')
    setErrorMessage('')

    try {
      // Check if Web3Forms access key is configured
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

      if (accessKey) {
        // Use Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            from_name: 'Portfolio Contact Form',
            replyto: data.email,
          }),
        })

        const result = await response.json()

        if (response.ok && result.success) {
          setFormStatus('success')
          reset()

          // Reset success message after 5 seconds
          setTimeout(() => {
            setFormStatus('idle')
          }, 5000)
        } else {
          throw new Error(result.message || 'Form submission failed')
        }
      } else {
        // Fallback to mailto if no API key configured
        const mailtoLink = `mailto:hello@attara.dev?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`
        window.location.href = mailtoLink

        // Simulate success for mailto
        setTimeout(() => {
          setFormStatus('success')
          reset()

          setTimeout(() => {
            setFormStatus('idle')
          }, 5000)
        }, 500)
      }
    } catch (error) {
      setFormStatus('error')
      setErrorMessage('Something went wrong. Please try again or email me directly at hello@attara.dev')
      console.error('Form submission error:', error)
    }
  }

  return (
    <div className="max-w-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Your Name
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="Mike Attara"
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            disabled={formStatus === 'submitting'}
          />
          {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Your Email
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            disabled={formStatus === 'submitting'}
          />
          {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
            Subject
          </label>
          <input
            {...register('subject')}
            type="text"
            id="subject"
            placeholder="Let's build something together"
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            disabled={formStatus === 'submitting'}
          />
          {errors.subject && <p className="mt-2 text-sm text-destructive">{errors.subject.message}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Message
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            placeholder="Tell me about your project, team, or speaking opportunity..."
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
            disabled={formStatus === 'submitting'}
          />
          {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formStatus === 'submitting' || formStatus === 'success'}
          className="w-full sm:w-auto px-8 py-4 bg-accent text-accent-foreground rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
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
              Send Message
              <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
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
                I'll get back to you within 24-48 hours. Check your email for a confirmation.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {formStatus === 'error' && (
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-3">
            <AlertCircle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-destructive">Oops! Something went wrong</p>
              <p className="text-sm text-muted-foreground mt-1">{errorMessage}</p>
            </div>
          </div>
        )}
      </form>

      {/* Alternative Contact Method */}
      <div className="mt-8 p-6 rounded-xl bg-muted/20 border border-border/50">
        <p className="text-sm text-muted-foreground">
          Prefer email?{' '}
          <a
            href="mailto:hello@attara.dev"
            className="text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            hello@attara.dev
          </a>
        </p>
      </div>
    </div>
  )
}
