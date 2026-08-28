import Image from 'next/image';
import Link from 'next/link';
import { productCatalog } from './data/site-data';

const featuredProducts = productCatalog.slice(0, 4);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-600">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.24),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Drive with confidence
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Premium tyre and motor solutions for every journey.
            </h1>
            <p className="mt-6 text-lg text-slate-200">
              Johngate supplies trusted tyres, tubes, batteries and generator essentials designed to keep riders and businesses moving smoothly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300"
              >
                Shop products <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact sales
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur-sm">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-100 to-slate-200 p-6 text-slate-900">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Featured line</p>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                  In stock
                </span>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-300 via-amber-200 to-orange-200 p-3">
                <Image
                  src={productCatalog[0].image}
                  alt={productCatalog[0].name}
                  width={900}
                  height={500}
                  className="h-64 w-full rounded-[1rem] object-cover"
                />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {['Tyres', 'Tubes', 'Batteries'].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-100 px-3 py-4 text-sm font-semibold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'Fast order processing', description: 'Instant digital ordering and reliable support for every purchase.', icon: '🛒' },
            { title: 'Secure payments', description: 'Protected payment procedures designed for speed and confidence.', icon: '🔒' },
            { title: 'Nationwide delivery', description: 'We deliver premium motor products to customers across the region.', icon: '🚚' },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/70">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-xl text-amber-700">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Our products</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Built for performance and reliability.</h2>
            </div>
            <Link href="/products" className="text-sm font-bold text-amber-600 hover:text-amber-700">
              View all products →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
                <div className="h-48 overflow-hidden bg-slate-200">
                  <Image src={product.image} alt={product.name} width={800} height={500} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
                    {product.category}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.specs.slice(0, 2).map((spec) => (
                      <span key={spec} className="rounded-full bg-slate-200 px-2 py-1 text-[10px] font-semibold text-slate-700">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-300/60 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Contact sales</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Ready to source dependable motor supplies?
              </h2>
              <p className="mt-5 max-w-xl text-slate-300">
                From tyres and batteries to essential workshop accessories, our team helps you find the right fit for your business or personal needs.
              </p>
            </div>

            <form className="space-y-4 rounded-3xl bg-white/5 p-5 backdrop-blur-sm">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-400"
                  placeholder="you@example.com"
                />
              </div>
              <button type="button" className="w-full rounded-2xl bg-amber-400 px-4 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300">
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
