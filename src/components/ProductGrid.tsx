import { Phone, Zap, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6282321006968";

interface Product {
  brand: string;
  model: string;
  capacity: string;
  warranty: string;
  vehicle: string;
  popular?: boolean;
  promo?: boolean;
  promoText?: string;
  photo: string;
  photoAlt: string;
}

const carProducts: Product[] = [
  {
    brand: "GS Astra",
    model: "GS Hybrid 36B20L",
    capacity: "35 Ah",
    warranty: "12 bulan",
    vehicle: "Agya, Ayla, Brio Satya, Jazz, Sigra",
    photo: "/products/gs-hybrid.jpg",
    photoAlt: "Aki GS Hybrid 36B20L untuk mobil kecil",
  },
  {
    brand: "GS Astra",
    model: "GS MF 46B24L",
    capacity: "45 Ah",
    warranty: "12 bulan",
    vehicle: "Avanza, Xenia, Rush, Terios",
    popular: true,
    promo: true,
    promoText: "Gratis Pemasangan!",
    photo: "/products/gs-mf.jpg",
    photoAlt: "Aki GS MF 46B24L untuk mobil keluarga",
  },
  {
    brand: "Dry Plus",
    model: "Dry Plus+ 36B20L",
    capacity: "35 Ah",
    warranty: "12 bulan",
    vehicle: "Agya, Ayla, Brio, Splash",
    promo: true,
    promoText: "Favorit Grabcar!",
    photo: "/products/dryplus-mf.jpg",
    photoAlt: "Aki Dry Plus+ 36B20L untuk mobil kecil",
  },
  {
    brand: "Incoe",
    model: "Incoe Gold 65D26R",
    capacity: "65 Ah",
    warranty: "18 bulan",
    vehicle: "Innova, Fortuner, Pajero",
    popular: true,
    promo: true,
    promoText: "Harga Spesial!",
    photo: "/products/incoe-gold.jpg",
    photoAlt: "Aki Incoe Gold 65D26R untuk mobil menengah",
  },
  {
    brand: "Incoe",
    model: "Incoe MF 580-24",
    capacity: "80 Ah",
    warranty: "18 bulan",
    vehicle: "Fortuner, Pajero, CR-V, Everest",
    photo: "/products/incoe-mf.jpg",
    photoAlt: "Aki Incoe MF 580-24 untuk mobil besar",
  },
  {
    brand: "Incoe",
    model: "Incoe Premium NX120-7L",
    capacity: "80 Ah",
    warranty: "18 bulan",
    vehicle: "Big SUV & MPV Diesel",
    photo: "/products/incoe-premium.jpg",
    photoAlt: "Aki Incoe Premium NX120-7L untuk kendaraan besar",
  },
  {
    brand: "GS Astra",
    model: "GS Premium 65D31R",
    capacity: "75 Ah",
    warranty: "12 bulan",
    vehicle: "Fortuner, Pajero, L300, Everest",
    photo: "/products/gs-premium.jpg",
    photoAlt: "Aki GS Premium 65D31R untuk mobil besar",
  },
  {
    brand: "Amaron",
    model: "Amaron Onyx N55",
    capacity: "55 Ah",
    warranty: "18 bulan",
    vehicle: "Avanza, Xenia, Rush, Brio",
    promo: true,
    promoText: "Best Seller!",
    photo: "/products/amaaron-onyx.jpg",
    photoAlt: "Aki Amaron Onyx N55 untuk mobil harian",
  },
];

const motorProducts: Product[] = [
  {
    brand: "GS Astra",
    model: "GS GTZ4V",
    capacity: "3 Ah",
    warranty: "12 bulan",
    vehicle: "Vario 125, Beat, Scoopy",
    popular: true,
    photo: "/products/gs-gtz.jpg",
    photoAlt: "Aki GS GTZ4V untuk motor matic",
  },
  {
    brand: "GS Astra",
    model: "GS GTZ8V",
    capacity: "6 Ah",
    warranty: "12 bulan",
    vehicle: "NMAX, Aerox, PCX, ADV",
    promo: true,
    promoText: "Paling Laris!",
    photo: "/products/gs-moto-mf.jpg",
    photoAlt: "Aki GS GTZ8V untuk motor maxi matic",
  },
  {
    brand: "Aspira",
    model: "Aspira GM5Z-3B",
    capacity: "5 Ah",
    warranty: "12 bulan",
    vehicle: "Mio, Supra, Jupiter",
    photo: "/products/astra-mf.jpg",
    photoAlt: "Aki Aspira GM5Z-3B untuk motor matic",
  },
  {
    brand: "Motorcycle Fit",
    model: "Fit MF7B-4B",
    capacity: "9 Ah",
    warranty: "12 bulan",
    vehicle: "Motor sport & touring",
    photo: "/products/motorcycle-mf.jpg",
    photoAlt: "Aki Motorcycle Fit MF7B-4B untuk motor sport",
  },
  {
    brand: "GOF Batt",
    model: "GOF Batt AGM GTZ6V",
    capacity: "6 Ah",
    warranty: "12 bulan",
    vehicle: "Motor sport, adventure, touring",
    photo: "/products/gofbatt.jpg",
    photoAlt: "Aki GOF Batt AGM GTZ6V untuk motor sport",
  },
  {
    brand: "Motobatt",
    model: "Motobatt MBTX9U",
    capacity: "10.5 Ah",
    warranty: "12 bulan",
    vehicle: "Big bike, touring, custom",
    photo: "/products/motobatt.jpg",
    photoAlt: "Aki Motobatt MBTX9U untuk motor besar",
  },
];

function ProductCard({ product }: { product: Product }) {
  const waMessage = encodeURIComponent(
    `Halo BatteryGo, saya tertarik dengan:\n\n*${product.brand} ${product.model}*\nKapasitas: ${product.capacity}\n\nMohon info harga dan ketersediaan.`
  );

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/30 hover:shadow-xl hover:shadow-amber/10">
      {/* Photo area */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
        {/* Promo banner */}
        {product.promo && (
          <div className="absolute left-3 top-3 z-10 rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-3 py-1.5 text-[11px] font-bold text-white shadow-md">
            {product.promoText}
          </div>
        )}

        {/* Popular badge */}
        {product.popular && !product.promo && (
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-amber px-3 py-1 text-[11px] font-bold text-navy shadow-md">
            <Zap className="h-3 w-3" />
            Populer
          </div>
        )}

        {/* Product image */}
        <img
          src={product.photo}
          alt={product.photoAlt}
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Brand badge */}
        <div className="mb-3 inline-flex self-start rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
          {product.brand}
        </div>

        {/* Product name */}
        <h3 className="font-display text-lg font-bold text-dark leading-tight">
          {product.model}
        </h3>

        {/* Specs */}
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
            {product.capacity}
          </span>
          <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
            Garansi {product.warranty}
          </span>
        </div>

        {/* Vehicle compatibility */}
        <p className="mt-3 text-xs text-muted">
          Cocok untuk: {product.vehicle}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-bold text-white shadow-md shadow-whatsapp/20 transition-all hover:bg-whatsapp-dark hover:shadow-lg hover:shadow-whatsapp/30"
          >
            <MessageCircle className="h-4 w-4" />
            Tanya Harga
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="produk" className="bg-slate-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
        {/* Car batteries */}
        <div className="mb-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-0">
            <span className="inline-block rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
              Produk Kami
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-dark sm:text-4xl">
              Aki <span className="text-amber">Mobil</span>
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Pilihan aki mobil berkualitas dari brand terpercaya. Semua
              bergaransi resmi distributor.
            </p>
          </div>

          {/* Swipe hint on mobile */}
          <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
            <span className="text-xs text-muted">Geser untuk lihat lainnya</span>
            <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[12.5vw] pb-4 hide-scrollbar sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
            {carProducts.map((product) => (
              <div key={product.model} className="w-[75vw] min-w-[75vw] snap-center sm:w-auto sm:min-w-0 sm:snap-none">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Motorcycles */}
        <div>
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-0">
            <span className="inline-block rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
              Produk Kami
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-dark sm:text-4xl">
              Aki <span className="text-amber">Motor & Spesial</span>
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Aki motor untuk semua tipe, dari matic harian sampai big bike.
              Tersedia juga aki khusus untuk kebutuhan spesifik.
            </p>
          </div>

          {/* Swipe hint on mobile */}
          <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
            <span className="text-xs text-muted">Geser untuk lihat lainnya</span>
            <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[12.5vw] pb-4 hide-scrollbar sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
            {motorProducts.map((product) => (
              <div key={product.model} className="w-[75vw] min-w-[75vw] snap-center sm:w-auto sm:min-w-0 sm:snap-none">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
