import React from 'react';
import { ArrowRight, BriefcaseBusiness, FileText, Mail, MoveUpRight, Zap } from 'lucide-react';

const opportunities = [
  { title: 'Hydro Power', detail: 'Plant operations, maintenance and hydropower engineering.' },
  { title: 'Wind Power', detail: 'Wind farm operations, asset performance and field services.' },
  { title: 'Solar Power', detail: 'Solar project delivery, operations and technical support.' },
  { title: 'Engineering & Operations', detail: 'Engineering, electrical, mechanical and control room roles.' },
  { title: 'Administration & Corporate Functions', detail: 'Contribute across finance, people, administration and corporate services.' },
];

const fieldClass = 'w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100';
const labelClass = 'mb-1.5 block text-sm font-semibold text-slate-700';

function JobField({ label, name, type = 'text', placeholder, required = true, wide = false }) {
  return (
    <div className={wide ? 'sm:col-span-2' : ''}>
      <label className={labelClass} htmlFor={`job-${name}`}>{label}{required && <span className="text-red-600"> *</span>}</label>
      {name === 'address' ? (
        <textarea id={`job-${name}`} name={name} rows="3" required={required} placeholder={placeholder} className={`${fieldClass} resize-y`} />
      ) : (
        <input id={`job-${name}`} name={name} type={type} required={required} placeholder={placeholder} className={fieldClass} />
      )}
    </div>
  );
}

function applyByEmail(event) {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(event.currentTarget).entries());
  const body = [
    `Full Name: ${values.fullName}`,
    `Phone / Mobile: ${values.phone}`,
    `Email: ${values.email}`,
    `Address: ${values.address}`,
    `Applying for (Post): ${values.post}`,
    `Skill Set: ${values.skills}`,
    `Experience: ${values.experience}`,
    '',
    `Resume selected in browser: ${values.resume?.name || 'No file selected'}`,
    'Please attach the resume file manually before sending.',
  ].join('\n');
  window.location.href = `mailto:info@bhorukapower.com?subject=${encodeURIComponent(`Job application - ${values.post}`)}&body=${encodeURIComponent(body)}`;
}

export default function JobsAtBPCL() {
  return (
    <main className="bg-slate-50 text-[#17395f]">
      <section className="border-b border-blue-950 bg-gradient-to-r from-[#082f63] via-[#0B4B94] to-[#1764ac] px-5 py-10 text-white sm:py-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">Careers · Bhoruka Power</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Careers at Bhoruka Power</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">Be part of a team delivering dependable renewable energy. Explore opportunities across our power projects and corporate functions.</p>
          <div className="mt-5 h-[3px] w-12 bg-sky-300" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        <section aria-labelledby="opportunities-heading">
          <div className="mb-5 flex items-end justify-between gap-4 border-b border-slate-200 pb-3">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-800">Build a meaningful career</p><h2 id="opportunities-heading" className="mt-1 text-xl font-bold">Career opportunities</h2></div>
            <Zap className="mb-1 hidden text-blue-700 sm:block" size={24} aria-hidden="true" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((item, index) => <article key={item.title} className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
              <div className="flex items-start justify-between gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-800"><BriefcaseBusiness size={18} aria-hidden="true" /></span><span className="text-xs font-bold text-slate-300">0{index + 1}</span></div>
              <h3 className="mt-3 font-bold text-slate-800">{item.title}</h3><p className="mt-1 text-sm leading-5 text-slate-500">{item.detail}</p>
            </article>)}
          </div>
        </section>

        <section aria-labelledby="application-heading" className="mt-7 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-lg bg-[#0B4B94] p-5 text-white sm:p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10"><FileText size={20} aria-hidden="true" /></span>
            <h2 className="mt-4 text-xl font-bold">Apply to join us</h2>
            <p className="mt-2 text-sm leading-6 text-blue-100">Share your details and the role you are interested in. The application form prepares an email for you to review and send.</p>
            <div className="mt-5 border-t border-white/20 pt-4"><p className="text-sm font-semibold">Prefer email?</p><a href="mailto:info@bhorukapower.com" className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-blue-300 underline-offset-4 hover:text-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">info@bhorukapower.com <MoveUpRight size={14} aria-hidden="true" /></a></div>
          </aside>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-800">Application details</p><h2 id="application-heading" className="mt-1 text-xl font-bold">Jobs @ BPCL</h2><p className="mt-1 text-sm text-slate-500">Fields marked with <span className="text-red-600">*</span> are required.</p></div>
            <form onSubmit={applyByEmail} className="grid gap-4 sm:grid-cols-2">
              <JobField label="Full Name" name="fullName" placeholder="Your full name" />
              <JobField label="Phone / Mobile" name="phone" type="tel" placeholder="Your contact number" />
              <JobField label="Email" name="email" type="email" placeholder="you@example.com" />
              <JobField label="Applying for (Post)" name="post" placeholder="Position or area of interest" />
              <JobField label="Address" name="address" placeholder="Your postal address" wide />
              <JobField label="Skill Set" name="skills" placeholder="Key skills and qualifications" />
              <JobField label="Experience" name="experience" placeholder="Years or relevant experience" />
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="job-resume">Resume Attachment <span className="text-red-600">*</span></label>
                <input id="job-resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className="block w-full cursor-pointer rounded-md border border-slate-300 bg-white text-sm text-slate-600 file:mr-4 file:border-0 file:bg-blue-50 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-blue-800 hover:file:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700" />
                <p className="mt-1.5 text-xs leading-5 text-slate-500">A mailto link cannot attach a local file. When your email application opens, manually attach the resume file before sending.</p>
              </div>
              <div className="sm:col-span-2"><button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0B4B94] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#083870] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">Prepare application email <ArrowRight className="ml-2" size={16} aria-hidden="true" /></button><p className="mt-2 text-xs text-slate-500">Your application is not submitted until you review and send the email.</p></div>
            </form>
          </div>
        </section>
        <p className="mt-5 rounded-md border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-slate-700">Alternatively, email your resume to <a className="font-semibold text-blue-800 underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700" href="mailto:info@bhorukapower.com">info@bhorukapower.com</a>. Please attach your resume manually to the email.</p>
        <p className="mt-4 flex items-center gap-2 text-xs text-slate-500"><Mail size={14} aria-hidden="true" />Email drafts are created on your device and are not sent or stored by this website.</p>
      </div>
    </main>
  );
}
