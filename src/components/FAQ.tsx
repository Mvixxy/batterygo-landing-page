"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6282321006968";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Apa saja merk aki yang tersedia?",
    answer:
      "Kami menyediakan berbagai merk aki berkualitas seperti GS Astra, Incoe, Dry Plus, Aspira, Amaron, GOF Batt, Motobatt, dan Motorcycle Fit. Semua produk bergaransi resmi distributor.",
  },
  {
    question: "Apakah ada garansi untuk setiap pembelian?",
    answer:
      "Ya, semua aki yang kami jual bergaransi resmi. Lama garansi bervariasi tergantung merk, mulai dari 12 bulan hingga 18 bulan. Silakan tanyakan detail garansi untuk masing-masing produk.",
  },
  {
    question: "Apakah BatteryGo melayani pemasangan aki?",
    answer:
      "Tentu! Kami melayani pemasangan aki 24 jam, baik untuk mobil maupun motor. Teknisi kami siap membantu pemasangan di lokasi toko atau datang ke lokasi Anda.",
  },
  {
    question: "Bagaimana cara membeli aki dari BatteryGo?",
    answer:
      "Cukup klik tombol \"Tanya Harga\" pada produk yang diinginkan, lalu chat kami via WhatsApp. Tim kami akan membantu memilih aki yang sesuai, memberikan informasi harga, dan mengatur pengiriman atau pemasangan.",
  },
  {
    question: "Apakah melayani pengiriman aki ke lokasi?",
    answer:
      "Ya, kami melayani pengiriman aki ke lokasi Anda di area Bogor dan sekitarnya. Hubungi kami via WhatsApp untuk info lebih lanjut mengenai areajangkauan dan biaya pengiriman.",
  },
  {
    question: "Jam berapa toko BatteryGo buka?",
    answer:
      "Toko kami buka setiap hari Senin-Minggu dari jam 07.00 hingga 21.00. Untuk pemasangan di luar jam operasional, silakan hubungi kami via WhatsApp untuk janji khusus.",
  },
  {
    question: "Apakah bisa tukar tambah aki lama?",
    answer:
      "Ya, BatteryGo melayani tukar tambah aki. Datang langsung ke toko dengan aki lama Anda, dan kami akan bantu proses tukar tambahnya. Hubungi kami via WhatsApp untuk estimasi harga tukar tambah.",
  },
];

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-amber/20 hover:shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <h3 className="font-display text-sm font-bold text-dark sm:text-base">
          {item.question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-180 text-amber" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gray-100 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
            <p className="text-sm leading-relaxed text-muted">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-bg py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-dark sm:text-4xl">
            Pertanyaan <span className="text-amber">Umum</span>
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Belum menemukan jawaban? Hubungi kami langsung via WhatsApp.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:gap-4">
          {faqData.map((item) => (
            <FAQAccordion key={item.question} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center sm:mt-12">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20BatteryGo%2C%20saya%20punya%20pertanyaan`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-white shadow-lg shadow-whatsapp/20 transition-all hover:scale-105 hover:bg-whatsapp-dark hover:shadow-whatsapp/40"
          >
            <MessageCircle className="h-4 w-4" />
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
