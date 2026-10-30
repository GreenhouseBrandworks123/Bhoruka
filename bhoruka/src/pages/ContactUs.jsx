import React, { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Globe2, Building2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const projects = [
  'Shivapur Hydel Power Plant',
  'Shahapur & D9 Hydel Power Plant',
  'Rajankollur Hydel Power Plant',
  'Madhavamantri Hydel Power Plant',
  'Mandagere Mini Hydel Scheme',
  'Chayadevi Hydel Scheme',
  'Neria Mini Hydel Scheme',
  'Sri Rama Deverekatte Mini Hydel Scheme',
  'Jaisalmer Wind Power Project (6 X 0.35 MW)',
  'Chitradurga Wind Power Project (4 x 0.5 MW)',
];

const fieldClass = 'w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100';
const labelClass = 'mb-1.5 block text-sm font-semibold text-slate-700';

function ContactField({ label, name, type = 'text', placeholder, required = true, wide = false }) {
  return (
    <div className={wide ? 'sm:col-span-2' : ''}>
      <label className={labelClass} htmlFor={`contact-${name}`}>{label}{required && <span className="text-red-600"> *</span>}</label>
      {name === 'query' ? (
        <textarea id={`contact-${name}`} name={name} rows="5" required={required} placeholder={placeholder} className={`${fieldClass} resize-y`} />
      ) : (
        <input id={`contact-${name}`} name={name} type={type} required={required} placeholder={placeholder} className={fieldClass} />
      )}
    </div>
  );
}

function SuccessModal({ open, onOk }) {
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 p-4 transition-opacity duration-200 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden={!open}>
      <section role="dialog" aria-modal="true" aria-labelledby="contact-success-heading" className={`w-full max-w-md rounded-xl bg-white p-6 text-center shadow-2xl transition duration-200 sm:p-8 ${open ? 'scale-100 translate-y-0' : 'scale-95 translate-y-2'}`}>
        <CheckCircle2 className="mx-auto text-emerald-600" size={52} strokeWidth={1.8} aria-hidden="true" />
        <h2 id="contact-success-heading" className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">Enquiry Submitted Successfully!</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Thank you for contacting Bhoruka Power Corporation Limited.</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">Your enquiry has been submitted successfully for this demo.</p>
        <button type="button" onClick={onOk} className="mt-6 min-w-24 rounded-md bg-[#0B4B94] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#083870] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">OK</button>
      </section>
    </div>
  );
}

function sendEnquiry(event, setSuccessOpen) {
  event.preventDefault();
  setSuccessOpen(true);
}

export default function ContactUs() {
  const [successOpen, setSuccessOpen] = useState(false);
  const formRef = useRef(null);

  const closeSuccess = () => {
    setSuccessOpen(false);
    formRef.current?.reset();
  };

  return (
    <main className="bg-slate-50 text-[#17395f]">
      <section className="border-b border-blue-950 bg-gradient-to-r from-[#082f63] via-[#0B4B94] to-[#1764ac] px-5 py-10 text-white sm:py-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">Bhoruka Power Corporation Limited</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">Connect with our corporate office or send a business enquiry to our team.</p>
          <div className="mt-5 h-[3px] w-12 bg-sky-300" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        <section aria-labelledby="office-heading" className="grid gap-5 lg:grid-cols-[1.05fr_1.5fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-[#0B4B94]"><Building2 size={20} aria-hidden="true" /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-800">Corporate Office</p>
                <h2 id="office-heading" className="mt-0.5 text-lg font-bold">Bhoruka Power Corporation Limited</h2>
              </div>
            </div>
            <div className="space-y-4 text-sm leading-6 text-slate-600">
              <div className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-blue-800" size={18} aria-hidden="true" /><address className="not-italic">Hitananda II, 48, Lavelle Road<br />Bangalore – 560001<br />Karnataka, India.</address></div>
              <div className="flex gap-3"><Phone className="mt-0.5 shrink-0 text-blue-800" size={18} aria-hidden="true" /><div><a className="font-medium text-slate-700 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700" href="tel:+918022630100">+91 80 2263 0100</a><p className="text-xs text-slate-500">Fax: +91 80 2224 5246</p></div></div>
              <div className="flex gap-3"><Mail className="mt-0.5 shrink-0 text-blue-800" size={18} aria-hidden="true" /><span className="break-all font-medium text-slate-700">info@bhorukapower.com</span></div>
              <div className="flex gap-3"><Globe2 className="mt-0.5 shrink-0 text-blue-800" size={18} aria-hidden="true" /><a className="break-all font-medium text-slate-700 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700" href="https://www.bhorukapower.com/" target="_blank" rel="noreferrer">www.bhorukapower.com <ArrowUpRight className="inline" size={14} /></a></div>
            </div>
          </div>

          <section aria-labelledby="projects-heading" className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-4 border-b border-slate-200 pb-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-800">Our operations</p>
              <h2 id="projects-heading" className="mt-1 text-xl font-bold">Project-wise Contact</h2>
              <p className="mt-1 text-sm text-slate-500">For project enquiries, please contact the corporate office.</p>
            </div>
            <ul className="grid gap-x-6 sm:grid-cols-2">
              {projects.map((project, index) => <li key={project} className="flex min-h-12 items-center gap-3 border-b border-slate-100 py-2.5 text-sm leading-5 text-slate-700"><span className="text-[11px] font-bold text-blue-800">{String(index + 1).padStart(2, '0')}</span><span>{project}</span></li>)}
            </ul>
          </section>
        </section>

        <section aria-labelledby="enquiry-heading" className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-800">Get in touch</p>
            <h2 id="enquiry-heading" className="mt-1 text-xl font-bold">Business Enquiry</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">Complete the form to see a confirmation for this frontend demo. Your enquiry is not sent or stored.</p>
          </div>
          <form ref={formRef} onSubmit={(event) => sendEnquiry(event, setSuccessOpen)} className="grid gap-4 sm:grid-cols-2">
            <ContactField label="Name" name="name" placeholder="Your full name" />
            <ContactField label="Company" name="company" placeholder="Company name" />
            <ContactField label="Designation" name="designation" placeholder="Your role or designation" />
            <ContactField label="Email" name="email" type="email" placeholder="you@company.com" />
            <ContactField label="Phone" name="phone" type="tel" placeholder="Your contact number" />
            <ContactField label="Query / Comments" name="query" placeholder="How can we help?" wide />
            <div className="sm:col-span-2"><button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0B4B94] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#083870] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">Submit Enquiry <ArrowUpRight className="ml-2" size={16} aria-hidden="true" /></button><p className="mt-2 text-xs text-slate-500">Demo interaction only. Your enquiry details are not sent to or stored on a server.</p></div>
          </form>
        </section>
      </div>
      <SuccessModal open={successOpen} onOk={closeSuccess} />
    </main>
  );
}
