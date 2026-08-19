import { Phone } from "lucide-react";

const WHATSAPP_NUMBER = "6283851053900";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      {/* Background accent */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-whatsapp/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          Butuh Aki Sekarang?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
          Chat kami sekarang dan dapatkan harga terbaik. Konsultasi gratis,
          tidak ada paksaan beli.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20BatteryKu%2C%20saya%20butuh%20aki%20sekarang`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold text-white shadow-xl shadow-whatsapp/30 transition-all hover:scale-105 hover:bg-whatsapp-dark sm:text-lg"
          >
            <Phone className="h-5 w-5" />
            Chat WhatsApp Sekarang
          </a>
          <a
            href="tel:+6283851053900"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/40 sm:text-lg"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            Telepon Langsung
          </a>
        </div>
      </div>
    </section>
  );
}
