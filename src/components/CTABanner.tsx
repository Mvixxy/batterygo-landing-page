import { Phone } from "lucide-react";

const WHATSAPP_NUMBER = "6282321006968";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-12 sm:py-16 sm:py-20">
      {/* Background accent */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-whatsapp/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl sm:text-4xl">
          Butuh Aki Sekarang?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/60 sm:mt-4 sm:text-base sm:text-lg">
          Chat kami sekarang dan dapatkan harga terbaik. Konsultasi gratis,
          tidak ada paksaan beli.
        </p>
        <div className="mt-6 flex flex-row items-center justify-center gap-2 sm:mt-8 sm:gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20BatteryGo%2C%20saya%20butuh%20aki%20sekarang`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-whatsapp px-3 py-2.5 text-[11px] font-bold text-white shadow-xl shadow-whatsapp/30 transition-all hover:scale-105 hover:bg-whatsapp-dark sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-base sm:text-lg"
          >
            <Phone className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            Chat WhatsApp
          </a>
          <a
            href="tel:+6282321006968"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-white/20 px-3 py-2.5 text-[11px] font-semibold text-white transition-all hover:border-white/40 sm:flex-none sm:px-8 sm:py-4 sm:text-base sm:text-lg"
          >
            <svg className="h-4 w-4 fill-current sm:h-5 sm:w-5" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            Telepon Langsung
          </a>
        </div>
      </div>
    </section>
  );
}
