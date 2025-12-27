"use client";

import RevealOnScroll from "./animation/reveal-on-scroll";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Muhajir",
    designation: "Mahasiswa",
    company: "",
    testimonial: "Proses migrasi website tugas akhir saya berjalan sangat lancar. Semua langkah dijelaskan secara rinci, sehingga saya bisa memahami setiap tahapannya",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Fitriah Ulfah",
    designation: "HRD - Forthen Indonesia",
    company: "Forthen Indonesia",
    testimonial: "Instalasi jaringan dilakukan dengan cepat dan hasilnya sangat memuaskan. Koneksi stabil sepanjang waktu, dan tim selalu siap membantu ketika ada kendala.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Hanna Christina",
    designation: "Digital Ads - Megapenerjemah",
    company: "Megapenerjemah",
    testimonial: "Big thanks buat kakaknya! Benar-benar sabar dan sangat membantu. Prosesnya cepat, komunikasinya jelas, dan hasilnya memuaskan. Pokoknya bintang 5",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Putri Azka",
    designation: "Event & Comunity - BLP Team",
    company: "BLP Beauty",
    testimonial: "Semuanya cepet, gak ada masalah sih selama sebulan ini. Harga pemasangan juga bersahabat, dan dikasih saran sesuai budget jugaa. Thaankss semogaa bs langganan sampeee tua yah!.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Aditiya Puspanegara",
    designation: "Journalist - Owner Journal Pathway Care",
    company: "Journal Pathway Care",
    testimonial: "Abang ini asik banget orangnya, sabar dan mau ngerti saya walaupun saya ngomongnya nggak pake bahasa IT. Jadi nggak bikin saya pusing sama istilah teknis,  Pokoknya enak diajak ngobrol. Gaskeun",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Guntur Sahadi",
    designation: "Technician - Indihome",
    company: "Telkkom",
    testimonial: "Sangat puas dengan hasil pekerjaan yang rapi dan layanan yang profesional. Jaringan stabil sepanjang hari membuat pekerjaan menjadi lebih efisien.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const Testimonial = () => {
  return (
    <div id="testimonials" className="w-full max-w-7xl mx-auto py-6 xs:py-12 px-4 sm:px-6">
      <RevealOnScroll>
        <h2 className="mb-8 xs:mb-14 text-4xl md:text-5xl font-bold text-center tracking-tight">Testimonials</h2>
      </RevealOnScroll>
      <RevealOnScroll delay={0.05}>
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.id} delay={0.04 * index}>
              <TestimonialCard testimonial={testimonial} />
            </RevealOnScroll>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[number] }) => (
  <div className="bg-accent rounded-xl py-6 px-4 sm:py-6 sm:px-6 h-full">
    <div className="flex flex-col gap-4 sm:gap-6 h-full">
      <div className="flex items-start justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <Avatar className="w-10 h-10 shrink-0">
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="text-base sm:text-lg font-semibold truncate">{testimonial.name}</p>
            <p className="text-xs sm:text-sm text-gray-500 truncate">{testimonial.designation}</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 stroke-yellow-500" />
          <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 stroke-yellow-500" />
          <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 stroke-yellow-500" />
          <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 stroke-yellow-500" />
          <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 stroke-yellow-500" />
        </div>
      </div>

      <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-semibold tracking-tight grow">&quot;{testimonial.testimonial}&quot;</p>
    </div>
  </div>
);

export default Testimonial;
