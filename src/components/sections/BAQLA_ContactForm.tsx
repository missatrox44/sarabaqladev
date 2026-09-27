'use client';

import { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useToast } from '@/hooks/use-toast';

const field = 'w-full rounded-xl border-0 bg-baqla-card px-4 py-3 text-baqla-ink placeholder:text-baqla-muted focus-visible:outline-baqla-lime';
const label = 'mb-2 block text-sm font-semibold text-baqla-lime';

export function BAQLA_ContactForm() {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm('mzzrdayr');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast({ title: 'Message sent!', description: "Thanks for reaching out! I'll get back to you soon." });
      formRef.current?.reset();
    }
  }, [state.succeeded, toast]);

  useEffect(() => {
    if (Array.isArray(state.errors) && state.errors.length > 0) {
      toast({ title: 'Submission error', description: 'Failed to send message. Please try again.', variant: 'destructive' });
    }
  }, [state.errors, toast]);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label htmlFor="baqla-name" className={label}>Name <span aria-hidden="true">*</span></label>
        <input id="baqla-name" name="name" type="text" autoComplete="name" required aria-describedby="baqla-name-error" className={field} />
        <div id="baqla-name-error" className="mt-1 text-sm text-baqla-lime"><ValidationError prefix="Name" field="name" errors={state.errors} /></div>
      </div>
      <div>
        <label htmlFor="baqla-email" className={label}>Email <span aria-hidden="true">*</span></label>
        <input id="baqla-email" name="email" type="email" autoComplete="email" required aria-describedby="baqla-email-error" className={field} />
        <div id="baqla-email-error" className="mt-1 text-sm text-baqla-lime"><ValidationError prefix="Email" field="email" errors={state.errors} /></div>
      </div>
      <div>
        <label htmlFor="baqla-message" className={label}>Message <span aria-hidden="true">*</span></label>
        <textarea id="baqla-message" name="message" rows={5} required aria-describedby="baqla-message-error" className={`${field} resize-y`} />
        <div id="baqla-message-error" className="mt-1 text-sm text-baqla-lime"><ValidationError prefix="Message" field="message" errors={state.errors} /></div>
      </div>
      <button type="submit" disabled={state.submitting} className="justify-self-start rounded-full bg-baqla-lime px-6 py-3 font-semibold text-baqla-olive transition hover:bg-baqla-card disabled:opacity-60">
        {state.submitting ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
