import { MapPin, Clock, Phone, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

const storeInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Contoh No. 123, Kota, Provinsi",
  },
  {
    icon: Clock,
    label: "Jam Buka",
    value: "Senin - Sabtu: 08.00 - 17.00",
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "+62 812-3456-7890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@powerbatt.com",
  },
];

export default function Footer() {
  return (
    <footer id="kontak" className="bg-navy pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <rect
                    x="6"
                    y="4"
                    width="12"
                    height="17"
                    rx="2"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                  <rect
                    x="9"
                    y="2"
                    width="6"
                    height="2"
                    rx="1"
                    fill="#F59E0B"
                  />
                  <rect
                    x="8"
                    y="10"
                    width="8"
                    height="8"
                    rx="1"
                    fill="#F59E0B"
                  />
                </svg>
              </div>
              <span className="font-display text-xl font-extrabold text-white">
                PowerBatt
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Solusi aki terpercaya untuk mobil dan motor Anda. Garansi resmi,
              harga terbaik, pengiriman cepat.
            </p>

            {/* Social placeholder */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/60 transition-colors hover:bg-amber/20 hover:text-amber"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/60 transition-colors hover:bg-amber/20 hover:text-amber"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/70">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Produk", href: "#produk" },
                { label: "Keunggulan", href: "#keunggulan" },
                { label: "Cara Order", href: "#cara-order" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/70">
              Kontak
            </h3>
            <ul className="mt-4 space-y-4">
              {storeInfo.map((info) => (
                <li key={info.label} className="flex items-start gap-3">
                  <info.icon className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                  <div>
                    <div className="text-xs font-medium text-white/40">
                      {info.label}
                    </div>
                    <div className="text-sm text-white/70">{info.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} PowerBatt. Semua hak dilindungi.
            </p>
            <p className="text-xs text-white/30">
              Solusi aki terpercaya untuk mobil & motor Anda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
