import Image from 'next/image';
import { productCatalog } from '../data/site-data';

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Products</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">Our complete product range.</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {productCatalog.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
            <div className="h-52 overflow-hidden bg-slate-200">
              <Image src={product.image} alt={product.name} width={800} height={500} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
                  {product.category}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">#{product.id}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">{product.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {product.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-amber-500" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
