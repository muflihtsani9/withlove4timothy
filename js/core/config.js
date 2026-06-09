/**
 * BUCIN — Cinematic Love Experience
 * Core Configuration System
 */

const CONFIG = {
  version: '2.0.0',
  debug: false,

  // ─── TIMING ───────────────────────────────────────────────────────
  timing: {
    preloaderMin: 2800,
    fadeIn: 1200,
    sectionTransition: 800,
    hoverDelay: 60,
    scrollThrottle: 16,
  },

  // ─── EASING ───────────────────────────────────────────────────────
  easing: {
    cinematic:   'power4.inOut',
    soft:        'power2.out',
    elastic:     'elastic.out(1, 0.4)',
    bounce:      'back.out(1.7)',
    silk:        'expo.out',
    brutal:      'power4.out',
    romantic:    'sine.inOut',
  },

  // ─── PARTICLES ────────────────────────────────────────────────────
  particles: {
    desktop: { count: 180, speed: 0.28, size: [0.8, 2.4] },
    tablet:  { count: 90,  speed: 0.22, size: [0.6, 1.8] },
    mobile:  { count: 45,  speed: 0.16, size: [0.5, 1.4] },
  },

  // ─── THREE.JS ─────────────────────────────────────────────────────
  three: {
    fov: 75,
    near: 0.1,
    far: 1000,
    cameraZ: 5,
    orbs: {
      desktop: 12,
      mobile: 6,
    },
    mouseInfluence: 0.035,
    scrollInfluence: 0.001,
  },

  // ─── BREAKPOINTS ──────────────────────────────────────────────────
  breakpoints: {
    mobile: 640,
    tablet: 1024,
    desktop: 1440,
  },

  // ─── PERFORMANCE ──────────────────────────────────────────────────
  performance: {
    fpsTarget: 60,
    fpsLow: 30,
    adaptiveQuality: true,
    maxDegradationLevel: 3,
  },

  // ─── QUOTES ───────────────────────────────────────────────────────
  loadingQuotes: [
    "Setiap alam semesta memiliki pusat gravitasi...",
    "Beberapa orang ditulis di bintang-bintang.",
    "Cinta adalah satu-satunya geometri yang melengkungkan waktu.",
    "Kamu adalah frekuensi yang selalu aku cari.",
    "Sebelum kamu, aku hanya kebisingan. Setelah kamu, aku menjadi musik.",
    "Ada alam semesta paralel yang tak terbatas. Di semua mereka — kamu.",
  ],

  // ─── LOVE STORY DATA ──────────────────────────────────────────────
  timeline: [
    {
      date: "Awal Mulanya",
      title: "Tabrakan Pertama",
      quote: "Seribu orang asing berlalu. Tapi kamu — kamu berbeda. Kamu terlihat seperti perasaan yang telah aku lupakan.",
      icon: "✦",
    },
    {
      date: "Kata-Kata Pertama",
      title: "Pesan yang Mengubah Segalanya",
      quote: "Tiga kata di layar. Dan entah bagaimana seluruh arsitektur hidupku bergeser secara halus.",
      icon: "◈",
    },
    {
      date: "Suara Pertama",
      title: "Ketika Aku Mendengarmu",
      quote: "Tawamu adalah hal paling membingungkan. Aku memutar ulang tujuh belas kali. Tidak sengaja.",
      icon: "◉",
    },
    {
      date: "Pertemuan Pertama",
      title: "Waktu Berhenti Di Sini",
      quote: "Kamu berjalan masuk dan kebisingan sekitar dunia hanya... menghilang. Seperti seseorang telah menekan bisu pada segalanya yang bukan dirimu.",
      icon: "✧",
    },
    {
      date: "Sekarang",
      title: "Setiap Hari Setelahnya",
      quote: "Aku tidak percaya pada takdir. Tapi aku percaya padamu. Yang, ternyata, adalah hal yang sama.",
      icon: "♡",
    },
  ],

  // ─── GALLERY CAPTIONS ─────────────────────────────────────────────
  //
  // CARA TAMBAH FOTO:
  //   1. Taruh file foto di folder:  assets/images/
  //   2. Isi field "img" dengan path-nya, contoh:
  //        img: 'assets/images/foto1.jpg'
  //   3. Kalau "img" dikosongkan (''), kartu tampil sebagai gradient placeholder
  //
  // Rasio foto ideal: 3:4 (portrait) — misal 600x800px atau 900x1200px
  //
  gallery: [
    { img: '', caption: "Cara kamu terlihat ketika kamu tidak sedang melihat.", tag: "candid"    },
    { img: '', caption: "Malam yang larut menjadi pagi.",                       tag: "always"   },
    { img: '', caption: "Tawamu benar-benar adalah kepribadian.",               tag: "chaos"    },
    { img: '', caption: "Aku mengingat setiap versi dirimu.",                  tag: "favorite" },
    { img: '', caption: "Jam-jam yang lembut, cahaya keemasan, kamu.",          tag: "ours"     },
    { img: '', caption: "Versi diriku yang ada dekat denganmu.",                tag: "diri terbaik"},
  ],
};

// Freeze to prevent accidental mutations
Object.freeze(CONFIG);
Object.freeze(CONFIG.timing);
Object.freeze(CONFIG.easing);
Object.freeze(CONFIG.particles);
Object.freeze(CONFIG.three);
Object.freeze(CONFIG.breakpoints);
Object.freeze(CONFIG.performance);

window.CONFIG = CONFIG;
