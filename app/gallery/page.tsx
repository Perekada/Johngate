import Image from 'next/image';
import { galleryImages } from '../data/site-data';

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Gallery</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">A look into Johngate’s product world.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {galleryImages.map((image) => (
          <div key={image.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="h-64 overflow-hidden bg-slate-200">
              <Image src={image.src} alt={image.title} width={900} height={700} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-slate-900">{image.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
