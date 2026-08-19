"use client";

import { MapPin, Clock, Phone } from "lucide-react";

const STORE_ADDRESS = "Jl. Raya Karadenan RT 3 RW 4, Kel. Karadenan, Kec. Cibinong, Kab. Bogor 16913";
const STORE_PHONE = "+6282321006968";
const STORE_HOURS = "Senin - Minggu: 07.00 - 21.00";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.353!2d106.8!3d-6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e8b0b0b0b0b0%3A0x0!2sCibinong%2C+Bogor!5e0!3m2!1sid!2sid!4v1700000000000";

export default function MapSection() {
  return (
    <section id="lokasi" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
            Lokasi Kami
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-dark sm:text-4xl">
            Kunjungi <span className="text-amber">Toko BatteryGo</span>
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Datang langsung ke toko kami untuk lihat langsung produk aki yang
            tersedia. Teknisi siap membantu pemasangan di lokasi!
          </p>
        </div>

        {/* Map + Info card */}
        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {/* Store info cards + button */}
          <div className="flex w-full flex-col gap-4 lg:w-[35%]">
            {/* Address */}
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5">
                <MapPin className="h-5 w-5 text-navy" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-dark">
                  Alamat
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {STORE_ADDRESS}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber/10">
                <Clock className="h-5 w-5 text-amber" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-dark">
                  Jam Buka
                </h4>
                <p className="mt-1 text-xs text-muted">{STORE_HOURS}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-whatsapp/10">
                <Phone className="h-5 w-5 text-whatsapp" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-dark">
                  Telepon / WhatsApp
                </h4>
                <p className="mt-1 text-xs text-muted">{STORE_PHONE}</p>
              </div>
            </div>

            {/* CTA button */}
            <a
              href="https://maps.google.com/?q=-6.4536,106.8476"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-navy/20 transition-all hover:bg-navy-light hover:shadow-navy/30 hover:scale-[1.02]"
            >
              <MapPin className="h-4 w-4" />
              Buka di Google Maps
            </a>
          </div>

          {/* Map embed - fills full height */}
          <div className="w-full lg:w-[65%]">
            <div className="h-[350px] overflow-hidden rounded-2xl border border-gray-100 shadow-sm sm:h-[400px] lg:h-full">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi BatteryGo - Cibinong, Bogor"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
