'use client';

import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { submitInquiryForm } from '@/lib/submit-form';

export function ContactForm() {
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
    const result = await submitInquiryForm(form, 'discovery');
    if (result.ok) {
      window.location.href = '/thank-you/?type=discovery';
      return;
    }
    setError(result.error);
    setStatus('error');
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="form-intro"><h2>Discovery Call request</h2></div>
      {status === 'error' && <div className="form-alert" role="alert" tabIndex={-1}><AlertCircle aria-hidden="true" /><div><strong>We couldn&rsquo;t send your request.</strong><p>{error}</p></div></div>}
      <div className="form-grid">
        <label><span>Name *</span><input name="name" type="text" autoComplete="name" required /></label>
        <label><span>Organization *</span><input name="organization" type="text" autoComplete="organization" required /></label>
        <label><span>Job title</span><input name="jobTitle" type="text" autoComplete="organization-title" /></label>
        <label><span>Email *</span><input name="email" type="email" autoComplete="email" required /></label>
        <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" /></label>
        <label><span>City</span><input name="city" type="text" autoComplete="address-level2" /></label>
        <label className="form-wide"><span>Organization type *</span><select name="organizationType" required defaultValue=""><option value="" disabled>Select one</option><option>Active Adult / 55+</option><option>Assisted Living / Memory Care</option><option>Hospitality</option></select></label>
        <label className="form-wide"><span>What would you like the wellness program to accomplish? *</span><textarea name="message" rows={6} required /></label>
      </div>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="form-honeypot" />
      <button className="button form-submit" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Request a Discovery Call'} <ArrowRight aria-hidden="true" size={18} /></button>
    </form>
  );
}
