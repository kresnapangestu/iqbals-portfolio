import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/en";
import { rt } from "@/i18n/richText";

/**
 * Bahasa Indonesia.
 *
 * Typed against `Dictionary`, so this file cannot go stale: a key added to
 * `en.ts` fails the build here until it is translated.
 *
 * Written to read as Indonesian, not as translated English. Job titles and
 * tool names stay in their industry form — "Front-end Developer", "Next.js",
 * "dashboard" — because that is what the audience for this page actually says.
 */
export const id: Dictionary = {
  meta: {
    jobTitle: "Front-end Developer",
    description:
      "Front-end developer di Bandung dan Jakarta. Empat tahun membangun dashboard operasional telekomunikasi dan memodernisasi front-end lawas ke React dan Next.js.",
    siteName: (name) => `Portofolio ${name}`,
    portraitAlt: (name) => `Foto ${name}`,
    logoAlt: (name) => `${name}, kembali ke beranda`,
    interfaceAlt: (project) => `Tampilan antarmuka ${project}`,
  },

  a11y: {
    skipToContent: "Lewati ke konten",
    primaryNav: "Utama",
    socialProfiles: "Profil media sosial",
    opensInNewTab: "(terbuka di tab baru)",
  },

  nav: {
    sections: {
      hero: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
    },
    resume: "CV",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    languageLabel: "Bahasa",
    languageOption: (language) => `Ganti ke ${language}`,
  },

  hero: {
    greeting: "Halo",
    introSuffix: ", nama saya",
    roleLine: "Front-end Developer yang berbasis di Bandung & Jakarta.",
    bio: rt(
      "Saya membangun dashboard operasional dan memodernisasi front-end lawas di ",
      { emphasis: "Huawei Tech Investment" },
      ". Selama empat tahun, pekerjaan itu mencakup lebih dari 40 dashboard analitik telekomunikasi yang dipakai lebih dari 500 orang setiap hari. Sebagian besar yang saya bangun juga saya rancang sendiri, dan antarmukanya tetap terbaca ketika datanya berantakan.",
    ),
    ctaWork: "Lihat karya pilihan",
    ctaResume: "Lihat CV",
  },

  about: {
    heading: "Tentang",
    paragraphs: [
      rt(
        "Ketertarikan pada komputer sejak kecil membawa saya menempuh studi ilmu komputer di ",
        { emphasis: "Politeknik Negeri Bandung" },
        ", tempat saya berkenalan dengan pengembangan web dan menekuninya sejak itu. Setelahnya saya membangun perangkat lunak untuk sebuah software house dan untuk sebuah korporasi besar, dan kini saya melanjutkan jenjang itu ke gelar sarjana Teknik Informatika di ",
        { emphasis: "Universitas Jenderal Achmad Yani (UNJANI)" },
        ".",
      ),
      rt(
        "Fokus saya sekarang adalah pekerjaan front-end di ",
        { emphasis: "Huawei Tech Investment" },
        ": dashboard operasional yang dibuka tim jaringan setiap hari dan harus bisa mereka percaya.",
      ),
      rt(
        "Di luar pekerjaan front-end, saya sedang mendalami jaringan, pipeline CI/CD, dan infrastruktur homelab. Situs ini salah satu hasil eksperimen itu: berjalan di server yang saya rakit dari laptop 2013 bekas, dan dideploy lewat Git runner milik saya sendiri.",
      ),
      rt(
        "Saat jauh dari keyboard, biasanya saya ada di kedai kopi, bermain gim bersama teman, bermain tenis bersama klub atau teman-teman saya, atau menyimak playlist di ",
        { link: "Spotify", href: siteConfig.spotifyUrl },
        ".",
      ),
    ],
  },

  experience: {
    heading: "Tempat saya bekerja",
    companiesLabel: "Perusahaan",
    employmentType: {
      "Full-time": "Penuh waktu",
      "Part-time": "Paruh waktu",
      Freelance: "Lepas",
      Internship: "Magang",
    },
    present: "Sekarang",
    technologiesAt: (company) => `Teknologi yang digunakan di ${company}`,
    viewResume: "Lihat CV lengkap",
    duration: {
      lessThanMonth: "kurang dari sebulan",
      // Indonesian nouns do not inflect for number, so the count carries it all.
      years: (count) => `${count} tahun`,
      months: (count) => `${count} bulan`,
      combine: (years, months) => `${years} ${months}`,
    },
  },

  projects: {
    heading: "Karya pilihan",
    empty: "Karya pilihan sedang diperbarui.",
    seeMore: "Lihat karya lainnya",
    viewProject: "Lihat proyek",
    technologiesIn: (project) => `Teknologi yang digunakan pada ${project}`,
  },

  projectDetail: {
    breadcrumbLabel: "Navigasi halaman",
    home: "Beranda",
    projects: "Proyek",
    builtWith: "Dibangun dengan",
    visitLiveSite: "Kunjungi situsnya",
    notPubliclyAvailable: "Tidak tersedia untuk publik",
    allProjects: "Semua proyek",
    detailHeading: "Detail proyek",
    problem: "Masalahnya",
    contribution: "Yang saya bangun",
    outcome: "Hasilnya",
    moreProjects: "Proyek lainnya",
    previous: "← Sebelumnya",
    next: "Selanjutnya →",
    screenshotAlt: (project, index) => `Tangkapan layar ${project} ${index}`,
  },

  footer: {
    prompt: "Punya sesuatu yang perlu dibangun?",
    note: "Terbuka untuk kesempatan apapun. Gambaran singkat soal pekerjaannya dan lini masa Anda sudah cukup untuk memulai percakapan.",
    credit: (name) =>
      `Dirancang dan dibangun oleh ${name}. Di-hosting sendiri dengan Next.js.`,
  },

  media: {
    previewUnavailable: "Pratinjau tidak tersedia",
  },

  notFound: {
    title: "Halaman tidak ditemukan",
    heading: "Halaman ini tidak ada.",
    body: "Tautannya mungkin sudah usang, atau halamannya sudah dipindahkan. Selebihnya tetap tinggal satu klik dari sini.",
    cta: "Kembali ke beranda",
  },

  content: {
    experience: {
      huawei: {
        role: "Front-end Developer",
        highlights: [
          "Merombak dan memelihara aplikasi web berskala besar sepanjang transformasi XL Axiata menjadi XLSmart, meningkatkan visibilitas operasional bagi Service Operation Center.",
          "Memimpin migrasi XLMS untuk modul-modul lawas yang kritikal ke Next.js dan Tailwind CSS, memangkas waktu pengembangan sekitar 50% dan mempercepat waktu muat sekitar 20%.",
          "Membangun dashboard eksekutif dengan Next.js, FusionCharts, Tailwind CSS, dan Material UI untuk pemantauan KPI dan performa layanan secara real-time oleh pemangku kepentingan level C.",
          "Merilis 40+ dashboard analitik telekomunikasi yang melayani 500+ pengguna harian, lengkap dengan grafik, tabel, dan peta berbasis Recharts dan FusionCharts.",
          "Menerapkan Atomic Design dan arsitektur modular, meningkatkan penggunaan ulang komponen dan memangkas waktu pengembangan sekitar 30%.",
          "Menjaga aplikasi pelaporan dan analitik React lawas tetap berjalan tanpa gangguan selama proses modernisasi.",
        ],
      },
      stara: {
        role: "Front-end Developer",
        highlights: [
          "Membangun aplikasi React untuk BPDLH yang merampingkan pengajuan pendanaan dan memverifikasi berkas dari para pemangku kepentingan.",
          "Mengerjakan alur yang dipakai pemohon BPDLH sekaligus perangkat internal yang memprosesnya.",
          "Menyusun antarmuka dengan Atomic Design sehingga sisi eksternal dan internal berbagi satu lapisan komponen.",
        ],
      },
      sama: {
        role: "Front-end Developer & Desainer UI/UX",
        highlights: [
          "Merancang dan membangun produk mulai dari sistem point-of-sale, platform pembelajaran, hingga aplikasi pengelolaan sampah.",
          "Mengembangkan landing page dan aplikasi web MasukBersama dengan Next.js dan Tailwind CSS, sekaligus merancang antarmukanya.",
          "Membangun aplikasi pengelolaan sampah dan daur ulang DALANG dengan React.",
          "Merancang antarmuka untuk aplikasi internal Kementerian Ketenagakerjaan Republik Indonesia, aplikasi kasir Oil Mart, dan company profile sebuah produsen valve.",
        ],
      },
      qtasnim: {
        role: "Front-end Developer",
        highlights: [
          "Mengembangkan dan memelihara fitur-fitur utama aplikasi web Biro Klasifikasi Indonesia (BKI).",
          "Membangun antarmuka yang responsif dan aksesibel dengan React, Formik, dan Material UI.",
          "Berkoordinasi dengan tim dari perusahaan eksternal untuk merilis fitur-fitur krusial BKI, serta menjaga kualitas kode lewat code review.",
        ],
      },
      bigio: {
        role: "Front-end Developer",
        highlights: [
          "Membangun aplikasi web BIG Audit Trail yang mencatat aksi, perubahan, dan transaksi lintas sistem dan proses bisnis beserta waktu dan pengguna asalnya.",
          "Berkontribusi pada BUSAMI, aplikasi mobile yang membawa tim memenangkan BIG Hackathon.",
        ],
      },
    },

    projects: {
      sentinel: {
        summary:
          "Sistem pemantauan KPI telekomunikasi yang menandai anomali pada deret waktu jaringan, dibangun sebagai penelitian skripsi: Z-Score untuk deteksi univariat dan Isolation Forest untuk multivariat.",
        contribution:
          "Membangun keseluruhan sistem: dashboard Next.js, gateway NestJS yang memegang akses basis data, dan layanan FastAPI yang memuat algoritma deteksinya.",
        role: "Full-stack Developer",
        year: "2025 – 2026",
        problem:
          "Penurunan KPI jaringan tersembunyi di antara ribuan titik deret waktu, dan menelaah grafiknya satu per satu membuatnya baru ketahuan terlambat — kalau sempat ketahuan sama sekali.",
      },
      next_pmt_cmt: {
        summary:
          "Dasbor pemantauan terpusat untuk XLSmart, menyajikan performa Telco API secara real-time dari tingkat nasional hingga kecamatan pada tampilan layar besar Network Operations Center.",
        contribution:
          "Memimpin desain sistem, migrasi, dan pengembangan menggunakan Next, Zustand, dan Recharts.",
        role: "Front-end Developer",
        year: "2023 – Sekarang",
        problem:
          "Tim Network Operations Center (NOC) dan pemangku kepentingan membutuhkan platform monitoring terpusat untuk memantau performa Telco API secara real-time di level Nasional, Provinsi, Kota, dan Kecamatan. Sebelumnya, dashboard penting tersebar di berbagai sistem, termasuk PMT-CMT, sehingga menyulitkan pemantauan cepat, analisis insiden, dan pengambilan keputusan saat terjadi gangguan jaringan.",
        outcome:
          "Membangun dashboard monitoring terpusat yang mengonsolidasikan dashboard krusial dari PMT-CMT ke dalam satu platform modern yang dioptimalkan untuk tampilan big-screen NOC. Solusi ini memberikan visibilitas real-time terhadap performa Telco API di seluruh wilayah operasional, mempercepat deteksi gangguan, meningkatkan efisiensi monitoring, dan mendukung pengambilan keputusan operasional yang lebih cepat.",
      },
      "xl-axiata": {
        summary:
          "Service Operation Center untuk XLSmart yang menyajikan data operasional sebagai grafik, peta, dan tabel bagi pemangku kepentingan senior.",
        contribution:
          "Membangun aplikasi webnya dengan React dan FusionCharts.",
        role: "Front-end Developer",
        year: "2021 – Sekarang",
        problem:
          "Staf Service Operation Center dan pemangku kepentingan senior membutuhkan data operasional telekomunikasi dalam satu tempat yang terbaca sekilas, bukan yang harus dirakit dari laporan-laporan terpisah.",
        outcome:
          "Bagian dari rangkaian analitik telekomunikasi berisi 40+ dashboard yang melayani 500+ pengguna harian.",
      },
      ourinvitation: {
        summary:
          "Platform undangan pernikahan daring: lebih murah dari cetak, dikirim lewat pesan, dan tidak menyisakan apa pun untuk dibuang.",
        contribution:
          "Memigrasikan produk dari React dan SCSS ke Next.js dan Tailwind CSS, serta membangun landing page dan tiga tema undangan.",
        role: "Front-end Developer",
        problem:
          "Undangan pernikahan cetak mahal dan boros, sementara basis kode React dan SCSS yang ada mahal untuk ditambahi tema baru.",
      },
      bpdlh: {
        summary:
          "Sistem pengelolaan pendanaan untuk BPDLH (Badan Pengelola Dana Lingkungan Hidup): pemangku kepentingan mengajukan permohonan dana di satu sisi, tim verifikator menelaahnya di sisi lain.",
        contribution:
          "Membangun aplikasi React untuk sisi pemohon sekaligus back-office — Identity Server untuk masuk, React Hook Form untuk formulir pengajuan, Redux untuk state penelaahan.",
        role: "Front-end Developer",
        year: "2023 – 2024",
        problem:
          "Permohonan pendanaan dan dokumen pendukungnya berpindah secara manual, sehingga verifikator tidak punya cara yang konsisten untuk memeriksa berkas pemangku kepentingan dan tidak ada satu tampilan untuk melihat posisi alokasi dana.",
        outcome:
          "Permohonan dan verifikasi kini berjalan dalam satu sistem, sehingga alokasi sumber daya dan operasional harian membaik. Penataan antarmuka dengan Atomic Design membuat aplikasi eksternal dan internal berbagi satu lapisan komponen.",
      },
      masukbersama: {
        summary:
          "Produk pembelajaran dua platform yang membantu siswa SMA menguji kompetensinya sebelum ujian masuk perguruan tinggi.",
        contribution:
          "Membangun aplikasi webnya dengan Next.js dan Tailwind CSS, sekaligus merancang antarmukanya.",
        role: "Front-end Developer & Desainer UI/UX",
        year: "2022 – 2023",
        problem:
          "Siswa tidak punya cara berisiko rendah untuk mengukur kesiapan mereka sebelum mengikuti ujian masuk perguruan tinggi.",
      },
      mybki: {
        summary:
          "Service Operation Center untuk Biro Klasifikasi Indonesia yang menyajikan data operasional sebagai grafik, peta, dan tabel.",
        contribution:
          "Membangun aplikasi webnya dengan React, memakai Formik untuk penanganan dan validasi formulir.",
        role: "Front-end Developer",
        year: "2021",
        problem:
          "Data operasional dan klasifikasi tersebar di banyak sistem, sehingga tim yang harus menindaklanjutinya tidak punya satu tampilan terpadu.",
      },
      mubarokulhuda: {
        summary:
          "Sistem SPP lintas platform untuk Madrasah Mubarokulhuda yang mencakup pembayaran manual dan transfer bank, tunggakan, laporan keuangan, serta rekap pembayaran.",
        contribution:
          "Membangun aplikasi webnya dengan React dan merancang antarmuka versi web maupun mobile.",
        role: "Front-end Developer & Desainer UI/UX",
        problem:
          "Orang tua dan pihak administrasi sekolah mencatat pembayaran dan tunggakan SPP secara manual, tanpa satu catatan bersama yang bisa dipegang kedua belah pihak.",
      },
    },
  },
};
