import { Phone, Zap, ImageOff } from "lucide-react";

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
}

const carProducts: Product[] = [
  {
    brand: "GS Astra",
    model: "GS Hybrid 60",
    capacity: "60 Ah",
    priceOriginal: "Rp 625.000",
    promoPrice: "Rp 585.000",
    warranty: "24 bulan",
    vehicle: "Avanza, Xenia, Agya, Ayla",
    popular: true,
  },
  {
    brand: "GS Astra",
    model: "GS Hybrid 70",
    capacity: "70 Ah",
    priceOriginal: "Rp 725.000",
    promoPrice: "Rp 685.000",
    warranty: "24 bulan",
    vehicle: "Innova, Rush, Terios",
  },
  {
    brand: "Incoe",
    model: "Incoe MF 60",
    capacity: "60 Ah",
    priceOriginal: "Rp 535.000",
    promoPrice: "Rp 495.000",
    warranty: "18 bulan",
    vehicle: "Avanza, Xenia, Agya, Ayla",
  },
  {
    brand: "Incoe",
    model: "Incoe MF 80",
    capacity: "80 Ah",
    priceOriginal: "Rp 845.000",
    promoPrice: "Rp 795.000",
    warranty: "18 bulan",
    vehicle: "Fortuner, Pajero, CR-V",
    popular: true,
  },
  {
    brand: "Yuasa",
    model: "Yuasa YBX 5075",
    capacity: "75 Ah",
    priceOriginal: "Rp 765.000",
    promoPrice: "Rp 725.000",
    warranty: "24 bulan",
    vehicle: "Innova, Fortuner, Pajero",
  },
  {
    brand: "Yuasa",
    model: "Yuasa YBX 5060",
    capacity: "60 Ah",
    priceOriginal: "Rp 585.000",
    promoPrice: "Rp 545.000",
    warranty: "24 bulan",
    vehicle: "Avanza, Xenia, Brio",
  },
  {
    brand: "Marathon",
    model: "Marathon MF 60",
    capacity: "60 Ah",
    priceOriginal: "Rp 465.000",
    promoPrice: "Rp 425.000",
    warranty: "12 bulan",
    vehicle: "Avanza, Xenia, Brio, Agya",
  },
  {
    brand: "Marathon",
    model: "Marathon MF 80",
    capacity: "80 Ah",
    priceOriginal: "Rp 695.000",
    promoPrice: "Rp 650.000",
    warranty: "12 bulan",
    vehicle: "Fortuner, Pajero, Everest",
  },
];

const motorProducts: Product[] = [
  {
    brand: "GS Astra",
    model: "GS GTZ5S",
    capacity: "3.5 Ah",
    priceOriginal: "Rp 210.000",
    promoPrice: "Rp 185.000",
    warranty: "12 bulan",
    vehicle: "Vario 125, Beat, Scoopy",
    popular: true,
  },
  {
    brand: "GS Astra",
    model: "GS GTZ6V",
    capacity: "6 Ah",
    priceOriginal: "Rp 295.000",
    promoPrice: "Rp 265.000",
    warranty: "12 bulan",
    vehicle: "NMAX, Aerox, PCX, ADV",
  },
  {
    brand: "Incoe",
    model: "Incoe MF YTZ4V",
    capacity: "3 Ah",
    priceOriginal: "Rp 175.000",
    promoPrice: "Rp 145.000",
    warranty: "12 bulan",
    vehicle: "Vario 125, Beat, Scoopy",
  },
  {
    brand: "Incoe",
    model: "Incoe MF YTZ6V",
    capacity: "5 Ah",
    priceOriginal: "Rp 245.000",
    promoPrice: "Rp 215.000",
    warranty: "12 bulan",
    vehicle: "NMAX, Aerox, PCX",
    popular: true,
  },
  {
    brand: "Yuasa",
    model: "Yuasa YTZ4V",
    capacity: "3 Ah",
    priceOriginal: "Rp 195.000",
    promoPrice: "Rp 165.000",
    warranty: "12 bulan",
    vehicle: "Vario 125, Beat, Scoopy",
  },
  {
    brand: "Yuasa",
    model: "Yuasa YTZ7V",
    capacity: "6 Ah",
    priceOriginal: "Rp 315.000",
    promoPrice: "Rp 285.000",
    warranty: "12 bulan",
    vehicle: "NMAX, Aerox, PCX, ADV",
  },
];

function ProductCard({ product }: { product: Product }) {
  const waMessage = encodeURIComponent(
    `Halo BatteryGo, saya tertarik dengan:\n\n*${product.brand} ${product.model}*\nKapasitas: ${product.capacity}\nHarga Promo: ${product.promoPrice}\n\nMohon info lebih lanjut.`
  );

  return (
    <div className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:border-amber/30 hover:shadow-lg hover:shadow-amber/5">
      {product.popular && (
        <div className="absolute -top-3 right-4 z-10 flex items-center gap-1 rounded-full bg-amber px-3 py-1 text-xs font-bold text-navy shadow-sm">
          <Zap className="h-3 w-3" />
          Populer
        </div>
      )}

      {/* Photo placeholder */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-slate-bg to-gray-100">
        <div className="flex flex-col items-center gap-2 text-gray-300">
          <ImageOff className="h-10 w-10" />
          <span className="text-xs font-medium">Foto Produk</span>
        </div>
        {/* Discount badge */}
        <div className="absolute left-3 top-3 rounded-lg bg-red-500 px-2 py-1 text-[11px] font-bold text-white shadow-sm">
          HEMAT{" "}
          {(() => {
            const orig = parseInt(product.priceOriginal.replace(/\D/g, ""));
            const promo = parseInt(product.promoPrice.replace(/\D/g, ""));
            const disc = Math.round(((orig - promo) / orig) * 100);
            return `${disc}%`;
          })()}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Brand badge */}
        <div className="mb-3 inline-flex self-start rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
          {product.brand}
        </div>

        {/* Product name */}
        <h3 className="font-display text-lg font-bold text-dark">
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
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-bold text-white transition-all hover:bg-whatsapp-dark"
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

          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 hide-scrollbar sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
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
              Aki <span className="text-amber">Motor</span>
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Aki motor untuk semua tipe, dari matic harian sampai big bike.
              Harga transparan, garansi jelas.
            </p>
          </div>

          {/* Swipe hint on mobile */}
          <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
            <span className="text-xs text-muted">Geser untuk lihat lainnya</span>
            <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 hide-scrollbar sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
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
