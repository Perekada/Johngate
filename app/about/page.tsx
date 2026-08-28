import { aboutHighlights } from '../data/site-data';

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">About us</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">A trusted name in motor supplies.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-lg leading-8 text-slate-700">
            Johngate is dedicated to supplying dependable motor products that keep businesses, riders and families moving with confidence.
            We focus on quality, convenience and strong after-sales support, helping our customers find the right solutions for daily operations and long-term performance.
          </p>

          <div className="mt-8 grid gap-4">
            {aboutHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-200">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Why customers choose us</p>
          <ul className="mt-6 space-y-4 text-slate-200">
            <li>• Verified product quality and trusted sourcing</li>
            <li>• Responsive support for purchase and delivery guidance</li>
            <li>• Reliable stock availability for essential motor parts</li>
            <li>• Strong customer relationships built on consistency</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
