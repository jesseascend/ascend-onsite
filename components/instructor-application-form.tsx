'use client';

import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { submitInquiryForm } from '@/lib/submit-form';

export function InstructorApplicationForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus('submitting');
    const result = await submitInquiryForm(form, 'instructor');
    if (result.ok) {
      window.location.href = '/thank-you/?type=instructor';
      return;
    }
    setError(result.error);
    setStatus('error');
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="form-intro"><p className="eyebrow">Join the Ascend team</p><h2>Instructor application</h2><p>Fields marked with an asterisk are required.</p></div>
      {status === 'error' && <div className="form-alert" role="alert" tabIndex={-1}><AlertCircle aria-hidden="true" /><div><strong>We couldn&rsquo;t send your application.</strong><p>{error}</p></div></div>}
      <div className="form-grid">
        <label><span>Name *</span><input name="name" type="text" autoComplete="name" required /></label>
        <label><span>Email *</span><input name="email" type="email" autoComplete="email" required /></label>
        <label><span>Phone *</span><input name="phone" type="tel" autoComplete="tel" required /></label>
        <label><span>City *</span><input name="city" type="text" autoComplete="address-level2" required /></label>
        <label><span>Years of experience</span><input name="yearsExperience" inputMode="numeric" /></label>
        <label><span>Availability</span><input name="availability" type="text" placeholder="e.g. weekday mornings, flexible" /></label>
        <label className="form-wide"><span>Certifications</span><input name="certifications" type="text" placeholder="e.g. ACE, NASM, group fitness, aquatics" /></label>
        <label className="form-wide"><span>Tell us about your experience *</span><textarea name="message" rows={6} required placeholder="Populations you've worked with, class formats, and what draws you to on-site wellness." /></label>
      </div>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="form-honeypot" />
      <button className="button form-submit" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Submit application'} <ArrowRight aria-hidden="true" size={18} /></button>
    </form>
  );
}
