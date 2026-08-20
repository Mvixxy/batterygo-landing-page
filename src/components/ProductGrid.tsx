import { Phone, Zap } from "lucide-react";

const WHATSAPP_NUMBER = "6282321006968";

interface Product {
  brand: string;
  model: string;
  capacity: string;
  priceOriginal: string;
  promoPrice: string;
  warranty: string;
  vehicle: string;
  popular?: boolean;
  photo?: string;
  photoAlt?: string;
}

const carProducts: Product[] = [
  {
    brand: "GS Astra",
    model: "GS Hybrid 36B20L",
    capacity: "35 Ah",
    priceOriginal: "Rp 425.000",
    promoPrice: "Rp 395.000",
    warranty: "12 bulan",
    vehicle: "Agya, Ayla, Brio Satya",
    photo: "/products/image-12.webp",
    photoAlt: "Kemasan aki GS Hybrid 36B20L untuk mobil kecil",
  },
  {
    brand: "GS Astra",
    model: "GS Hybrid 46B24L",
    capacity: "45 Ah",
    priceOriginal: "Rp 535.000",
    promoPrice: "Rp 505.000",
    warranty: "12 bulan",
    vehicle: "Avanza, Xenia, Rush, Terios",
    popular: true,
    photo: "/products/image-4.webp",
    photoAlt: "Kemasan aki GS Hybrid 46B24L untuk mobil keluarga",
  },
  {
    brand: "Incoe",
    model: "Incoe Gold 65D26R",
    capacity: "65 Ah",
    priceOriginal: "Rp 635.000",
    promoPrice: "Rp 599.000",
    warranty: "18 bulan",
    vehicle: "Innova, Fortuner, Pajero",
    photo: "/products/image-14.webp",
    photoAlt: "Kemasan aki Incoe Gold 65D26R untuk mobil menengah ke atas",
  },
  {
    brand: "Incoe",
    model: "Incoe MF 580-24",
    capacity: "80 Ah",
    priceOriginal: "Rp 845.000",
    promoPrice: "Rp 795.000",
    warranty: "18 bulan",
    vehicle: "Fortuner, Pajero, CR-V, Everest",
    popular: true,
    photo: "/products/image-5.webp",
    photoAlt: "Kemasan aki Incoe MF 580-24 untuk mobil besar",
  },
  {
    brand: "GS Astra",
    model: "GS Premium 12N10-3B",
    capacity: "10 Ah",
    priceOriginal: "Rp 235.000",
    promoPrice: "Rp 215.000",
    warranty: "12 bulan",
    vehicle: "Motor sport & touring ringan",
    photo: "/products/image-6.webp",
    photoAlt: "Kemasan aki GS Premium 12N10-3B untuk motor sport",
  },
  {
    brand: "GS Astra",
    model: "GS Premium 65D31R",
    capacity: "75 Ah",
    priceOriginal: "Rp 825.000",
    promoPrice: "Rp 775.000",
    warranty: "12 bulan",
    vehicle: "Fortuner, Pajero, L300, Everest",
    photo: "/products/image-7.webp",
    photoAlt: "Kemasan aki GS Premium 65D31R untuk mobil besar",
  },
  {
    brand: "GS Astra",
    model: "GS Premium 105D31R",
    capacity: "90 Ah",
    priceOriginal: "Rp 1.050.000",
    promoPrice: "Rp 995.000",
    warranty: "12 bulan",
    vehicle: "Diesel pick-up & big SUV",
    photo: "/products/image-9.webp",
    photoAlt: "Kemasan aki GS Premium 105D31R untuk kendaraan diesel",
  },
  {
    brand: "Amaron",
    model: "Amaron Onyx N55",
    capacity: "55 Ah",
    priceOriginal: "Rp 655.000",
    promoPrice: "Rp 610.000",
    warranty: "18 bulan",
    vehicle: "Avanza, Xenia, Rush, Brio",
    photo: "/products/image-13.webp",
    photoAlt: "Kemasan aki Amaron Onyx N55 untuk mobil harian",
  },
];

const motorProducts: Product[] = [
  {
    brand: "GS Astra",
    model: "GS GTZ4V",
    capacity: "3 Ah",
    priceOriginal: "Rp 185.000",
    promoPrice: "Rp 165.000",
    warranty: "12 bulan",
    vehicle: "Vario 125, Beat, Scoopy",
    photo: "/products/photoroom-20260820-132438.webp",
    photoAlt: "Kemasan aki GS GTZ4V untuk motor matic",
  },
  {
    brand: "GS Astra",
    model: "GS GTZ6V",
    capacity: "6 Ah",
    priceOriginal: "Rp 295.000",
    promoPrice: "Rp 265.000",
    warranty: "12 bulan",
    vehicle: "NMAX, Aerox, PCX, ADV",
    popular: true,
    photo: "/products/image-11.webp",
    photoAlt: "Kemasan aki GS Astra untuk motor maxi matic",
  },
  {
    brand: "Aspira",
    model: "Aspira GM5Z-3B",
    capacity: "3.5 Ah",
    priceOriginal: "Rp 175.000",
    promoPrice: "Rp 155.000",
    warranty: "12 bulan",
    vehicle: "Vario 125, Beat, Scoopy",
    photo: "/products/image-3.webp",
    photoAlt: "Kemasan aki Aspira GM5Z-3B untuk motor matic",
  },
  {
    brand: "GS Astra",
    model: "GS GTZ8V",
    capacity: "6 Ah",
    priceOriginal: "Rp 315.000",
    promoPrice: "Rp 285.000",
    warranty: "12 bulan",
    vehicle: "NMAX, Aerox, PCX, ADV",
    photo: "/products/image-10.webp",
    photoAlt: "Kemasan aki GS GTZ8V edisi spesial untuk motor maxi matic",
  },
  {
    brand: "Dry Plus",
    model: "Dry Plus+ 36B20L",
    capacity: "35 Ah",
    priceOriginal: "Rp 395.000",
    promoPrice: "Rp 370.000",
    warranty: "12 bulan",
    vehicle: "Agya, Ayla, Brio, Splash",
    photo: "/products/image-1.webp",
    photoAlt: "Kemasan aki Dry Plus+ 36B20L untuk mobil kecil",
  },
  {
    brand: "Motobatt",
    model: "Motobatt MBTX9U",
    capacity: "10.5 Ah",
    priceOriginal: "Rp 425.000",
    promoPrice: "Rp 395.000",
    warranty: "12 bulan",
    vehicle: "Big bike, touring, custom",
    photo: "/products/image-8.webp",
    photoAlt: "Kemasan aki Motobatt MBTX9U untuk motor besar",
  },
];

function ProductCard({ product }: { product: Product }) {
  const waMessage = encodeURIComponent(
    `Halo BatteryGo, saya tertarik dengan:\n\n*${product.brand} ${product.model}*\nKapasitas: ${product.capacity}\nHarga Promo: ${product.promoPrice}\n\nMohon info lebih lanjut.`
  );

  const discount = (() => {
    const orig = parseInt(product.priceOriginal.replace(/\D/g, ""));
    const promo = parseInt(product.promoPrice.replace(/\D/g, ""));
    return Math.round(((orig - promo) / orig) * 100);
  })();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/30 hover:shadow-xl hover:shadow-amber/10">
      {/* Photo area */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 sm:h-56">
        {/* Discount badge */}
        <div className="absolute left-3 top-3 z-10 rounded-lg bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white shadow-md">
          HEMAT {discount}%
        </div>

        {/* Popular badge */}
        {product.popular && (
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-amber px-3 py-1 text-[11px] font-bold text-navy shadow-md">
            <Zap className="h-3 w-3" />
            Populer
          </div>
        )}

        {/* Product image */}
        {product.photo ? (
          <img
            src={product.photo}
            alt={product.photoAlt || product.model}
            className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-300">
            <span className="text-xs font-medium">Foto Produk</span>
          </div>
        )}

        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
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

        {/* Price + CTA */}
        <div className="mt-auto pt-4">
          <div className="mb-1 font-display text-sm text-muted line-through">
            {product.priceOriginal}
          </div>
          <div className="mb-3 font-display text-2xl font-extrabold text-red-600">
            {product.promoPrice}
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-bold text-white shadow-md shadow-whatsapp/20 transition-all hover:bg-whatsapp-dark hover:shadow-lg hover:shadow-whatsapp/30"
          >
            <Phone className="h-4 w-4" />
            Pesan Sekarang
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
              Aki <span className="text-amber">Motor & Aki Spesial</span>
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
