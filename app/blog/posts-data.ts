export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "network-troubleshooting-tips",
    title: "5 Catatan Saat Troubleshooting Jaringan di Lapangan",
    excerpt: "Beberapa hal praktis yang kami pelajari ketika menangani kasus jaringan di kantor klien, supaya downtime bisa ditekan seminimal mungkin.",
    tag: "Infrastructure",
    content: [
      "Saat menangani kasus jaringan di lokasi klien, masalah jarang sekali sama persis antara satu tempat dengan tempat lain. Namun, ada beberapa pola yang selalu kami temukan dan bisa dijadikan checklist sederhana sebelum panik.",
      "Mulai dari pengecekan fisik kabel dan port, dokumentasi topologi yang rapi, sampai cara berkomunikasi dengan tim internal klien, semua berpengaruh ke seberapa cepat masalah bisa diselesaikan.",
    ],
  },
  {
    slug: "first-pesantren-website",
    title: "Belajar dari Project Website Pesantren Pertama Kami",
    excerpt: "Bagaimana proses kami membantu pesantren memiliki profil online yang rapi, serta apa saja pelajaran yang bisa diterapkan ke project berikutnya.",
    tag: "Web Development",
    content: [
      "Project website pesantren pertama ini mengajarkan kami untuk benar-benar memahami kebutuhan komunikasi lembaga pendidikan ke orang tua dan calon santri.",
      "Mulai dari penyusunan struktur halaman, pengelompokan informasi program, sampai cara menyajikan galeri kegiatan dengan ringan diakses dari HP.",
    ],
  },
  {
    slug: "small-team-workflow",
    title: "Workflow Tim Kecil untuk Menyelesaikan Project Teknologi",
    excerpt: "Catatan ringan tentang bagaimana tim kecil kami membagi peran, menjaga komunikasi, dan merapikan dokumentasi project.",
    tag: "Team Notes",
    content: [
      "Sebagai tim kecil, kami harus sangat sadar dengan kapasitas dan waktu yang tersedia. Itu artinya, workflow dan dokumentasi bukan cuma formalitas, tapi jadi alat bantu utama agar semua orang tetap on-track.",
      "Kami membagi project menjadi blok kerja kecil, menentukan PIC dengan jelas, dan memastikan semua keputusan penting tercatat di satu tempat yang mudah diakses.",
    ],
  },
];
