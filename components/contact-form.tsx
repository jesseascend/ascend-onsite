'use client';

import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'error'>('idle');

  function handleSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus('error');
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="form-intro"><p className="eyebrow">Tell us about your environment</p><h2>Discovery Call request</h2><p>Fields marked with an asterisk are required. The live form connection is awaiting owner selection; until then, email is the available contact path.</p></div>
      {status === 'error' && <div className="form-alert" role="alert" tabIndex={-1}><AlertCircle aria-hidden="true" /><div><strong>Online submission is not connected yet.</strong><p>Please email <a href={`mailto:${site.publicEmail}`}>{site.publicEmail}</a>. We have not recorded or sent the information below.</p></div></div>}
      <div className="form-grid">
        <label><span>Name *</span><input name="name" type="text" autoComplete="name" required /></label>
        <label><span>Organization *</span><input name="organization" type="text" autoComplete="organization" required /></label>
        <label><span>Job title</span><input name="jobTitle" type="text" autoComplete="organization-title" /></label>
        <label><span>Email *</span><input name="email" type="email" autoComplete="email" required /></label>
        <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" /></label>
        <label><span>City</span><input name="city" type="text" autoComplete="address-level2" /></label>
        <label className="form-wide"><span>Organization type *</span><select name="organizationType" required defaultValue=""><option value="" disabled>Select one</option><option>Active Adult / 55+</option><option>Independent Living</option><option>Assisted Living</option><option>Senior Living</option><option>Luxury Residential Community</option><option>Master-Planned / HOA Community</option><option>Resort / Hotel</option><option>Other</option></select></label>
        <label><span>Approximate population</span><input name="approximatePopulation" inputMode="numeric" /></label>
        <label><span>Expected frequency</span><select name="frequency" defaultValue=""><option value="">Not sure yet</option><option>One-time</option><option>Weekly</option><option>Multiple times per week</option><option>Monthly</option><option>Seasonal</option></select></label>
        <label className="form-wide"><span>What would you like the wellness program to accomplish? *</span><textarea name="message" rows={6} required /></label>
      </div>
      <button className="button form-submit" type="submit">Request a Discovery Call <ArrowRight aria-hidden="true" size={18} /></button>
      <p className="form-note">Submitting this preview form does not transmit data. Production delivery, consent language, and spam protection must be configured before launch.</p>
    </form>
  );
}
