export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Contact</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">We are ready to help you source the right product.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-200">
          <h2 className="text-2xl font-bold">Johngate Motors</h2>
          <div className="mt-6 space-y-4 text-slate-200">
            <p>📍 24 Motor Plaza, Ikeja, Lagos</p>
            <p>📞 +234 800 000 0000</p>
            <p>✉️ sales@johngate.com</p>
          </div>
        </div>

        <form className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
              <input type="text" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500" placeholder="you@example.com" />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
            <input type="text" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500" placeholder="How can we help?" />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
            <textarea rows={5} className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500" placeholder="Tell us what you need" />
          </div>

          <button type="button" className="mt-6 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-400">
            Send enquiry
          </button>
        </form>
      </div>
    </main>
  );
}
