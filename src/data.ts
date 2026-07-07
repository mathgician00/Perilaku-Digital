export type Category = "aman" | "tergantung" | "tidak_aman";

export interface CardData {
  id: string;
  t: string; // text content
  cat: Category; // target category
  why: string; // explanation
}

export const BANK_DATA: Omit<CardData, "id">[] = [
  { t: "Foto liburanmu, diposting seminggu setelah kamu pulang ke rumah", cat:"aman", why:"Aman karena diposting setelah kamu sudah pulang, jadi tidak menunjukkan rumah sedang kosong."},
  { t: "Foto liburanmu, diposting saat kamu masih di sana dengan lokasi aktif", cat:"tidak_aman", why:"Menunjukkan rumahmu kosong secara real-time — berisiko untuk keamanan rumah."},
  { t: "Nama lengkap dan nama sekolahmu di bio akun publik", cat:"tidak_aman", why:"Kombinasi ini memudahkan orang asing melacak dan mendekatimu di dunia nyata."},
  { t: "Foto makanan yang baru kamu masak", cat:"aman", why:"Tidak mengandung informasi pribadi yang bisa disalahgunakan."},
  { t: "Jadwal harian lengkap (jam sekolah, les, pulang) di story", cat:"tidak_aman", why:"Memudahkan seseorang memprediksi kapan kamu sendirian atau di lokasi tertentu."},
  { t: "Video singkat menari mengikuti tren, wajah dan suara terlihat jelas", cat:"tergantung", why:"Tergantung siapa yang bisa melihat (privat/publik) dan apakah kamu nyaman videonya disebarluaskan tanpa kendali."},
  { t: "Alamat rumah lengkap di caption atau tag lokasi", cat:"tidak_aman", why:"Informasi ini bisa langsung digunakan untuk mendatangi rumahmu."},
  { t: "Pendapatmu tentang film yang baru ditonton", cat:"aman", why:"Opini pribadi tanpa data sensitif — aman dibagikan."},
  { t: "Screenshot pesan pribadi teman tanpa izin mereka", cat:"tidak_aman", why:"Melanggar privasi orang lain, bisa merusak kepercayaan dan berujung konflik."},
  { t: "Foto bersama teman di acara sekolah, wajah semua orang terlihat", cat:"tergantung", why:"Tergantung apakah semua yang ada di foto setuju untuk difoto dan diposting."},
  { t: "Nomor HP pribadi di kolom komentar publik", cat:"tidak_aman", why:"Nomor HP bisa disalahgunakan untuk penipuan atau pelecehan oleh orang tak dikenal."},
  { t: "Ulasan singkat tentang buku yang kamu baca", cat:"aman", why:"Konten netral, tidak ada risiko privasi."},
  { t: "Tulis novel singkat versimu sendiri. Pahlawannya adalah kamu yang bernama 'Pahlawan [nama panggilanmu saat kecil]. Asistennya adalah penyihir wanita bernama [nama ibumu]", cat: "tidak_aman", why: "Data nama panggilan bisa disalahgunakan untuk melakukan panggilan penipuan. Nama ibu kandung berpotensi disalahgunakan untuk urusan yang berhubungan dengan bank"},
  { t: "Tanggal lahir lengkap (tanggal, bulan, tahun) di profil publik", cat:"tidak_aman", why:"Sering dipakai sebagai bagian dari verifikasi akun/password — rawan disalahgunakan."},
  { t: "Cerita tentang hobi barumu, tanpa detail lokasi", cat:"aman", why:"Tidak mengandung data yang bisa dilacak ke lokasi atau identitas spesifik."},
  { t: "Curhat marah tentang guru atau teman sekelas, nama disebutkan", cat:"tidak_aman", why:"Bisa dianggap perundungan/pencemaran nama baik dan sulit dihapus sepenuhnya setelah tersebar."},
  { t: "Foto dengan seragam sekolah yang menampilkan nama sekolah jelas", cat:"tergantung", why:"Tergantung akun privat/publik — nama sekolah mempermudah orang asing menemukanmu secara fisik."},
  { t: "Meme lucu yang kamu buat sendiri, tidak menyinggung siapa pun", cat:"aman", why:"Konten kreatif netral, aman dibagikan siapa saja."},
  { t: "Tempat nongkrong favorit dengan tag lokasi real-time", cat:"tidak_aman", why:"Menunjukkan pola keberadaanmu secara langsung, berisiko untuk keamanan pribadi."},
  { t: "Pencapaian akademik atau lomba yang kamu menangkan", cat:"aman", why:"Informasi positif tanpa data sensitif."},
  { t: "17+ only!! Tunjukin kalian udah legal dengan foto bareng KTP", cat: "tidak_aman", why: "Menunjukkan data pribadi dan wajah. Berpotensi disalahgunakan untuk pinjol dan penipuan."},
  { t: "Foto keluarga saat merayakan ulang tahun di rumah", cat:"tergantung", why:"Tergantung apakah tag lokasi/alamat ikut terlihat dan siapa yang bisa melihat akunmu."},
  { t: "Tunjukkan foto liburan terakhirmu, dengan tag lokasi, diposting seminggu setelah kamu pulang", cat: "aman", why: "Aman karena diposting setelah kamu pulang (latepost), jadi tidak menunjukkan rumahmu sedang kosong." },
  { t: "\"Yang lagi enjoy liburan, drop foto liburanmu sekarang!\" dengan tag lokasi langsung dari tempat wisata", cat: "tidak_aman", why: "Menunjukkan rumahmu kosong secara real-time — berisiko untuk pencurian." },
  { t: "\"Spill nama lengkap dan asal sekolahmu biar dapet mutual!\"", cat: "tidak_aman", why: "Kombinasi ini memudahkan orang asing melacak dan mendekatimu di dunia nyata." },
  { t: "Ikut tren \"Drop foto makanan estetik yang baru kamu masak\"", cat: "aman", why: "Tidak mengandung informasi pribadi yang bisa disalahgunakan." },
  { t: "\"Spill jadwal harianmu (jam sekolah, les, pulang) biar bisa meetup!\"", cat: "tidak_aman", why: "Memudahkan seseorang memprediksi kapan kamu sendirian atau di lokasi tertentu." },
  { t: "Video dance challenge TikTok tren terbaru, wajah dan suara terlihat jelas", cat: "tergantung", why: "Tergantung pengaturan privasimu (privat/publik) dan apakah kamu nyaman videonya disebarluaskan." },
  { t: "Share alamat rumah lengkap di caption \"Mampir yuk!\"", cat: "tidak_aman", why: "Informasi ini bisa langsung digunakan orang asing atau oknum jahat untuk mendatangi rumahmu." },
  { t: "Ngetweet: \"Film yang baru rilis ini bagus banget, 10/10!\"", cat: "aman", why: "Opini pribadi tanpa data sensitif — aman dibagikan ke publik." },
  { t: "\"Spill chat lucu bareng bestie\" tapi lupa sensor nama dan nomornya", cat: "tidak_aman", why: "Melanggar privasi orang lain, bisa merusak kepercayaan dan menyebarkan data pribadi." },
  { t: "Posting \"Photo dump sekolah\" bareng temen sekelas, semua wajah jelas", cat: "tergantung", why: "Tergantung apakah semua yang ada di foto sudah setuju untuk difoto dan diposting ke publik." },
  { t: "\"Yang mau mabar, save nomor HP gue ya!\" di kolom komentar medsos", cat: "tidak_aman", why: "Nomor HP bisa disalahgunakan untuk penipuan, spam, atau pelecehan oleh orang tak dikenal." },
  { t: "Bikin ulasan singkat tentang buku favorit yang baru kamu baca", cat: "aman", why: "Konten netral dan informatif, tidak ada risiko privasi." },
  { t: "Tren template \"Spill biodata: Tanggal, bulan, dan tahun lahir\"", cat: "tidak_aman", why: "Sering dipakai sebagai bagian dari verifikasi akun/password (contoh: pin bank) — rawan diretas." },
  { t: "Cerita tentang hobi barumu merajut tas, tanpa detail lokasi", cat: "aman", why: "Tidak mengandung data yang bisa dilacak ke lokasi atau identitas spesifik." },
  { t: "Curhat emosi nyindir teman sekelas pakai inisial yang terlalu jelas", cat: "tidak_aman", why: "Bisa dianggap cyberbullying/pencemaran nama baik dan jejaknya sulit dihapus sepenuhnya." },
  { t: "Mirror selfie pakai seragam sekolah dengan logo OSIS/sekolah terlihat jelas", cat: "tergantung", why: "Tergantung akun privat/publik — nama sekolah mempermudah orang asing menemukanmu secara fisik." },
  { t: "Share meme lucu tentang kehidupan sekolah secara umum", cat: "aman", why: "Konten kreatif yang menghibur dan netral, aman dibagikan siapa saja." },
  { t: "\"Lagi nongki di kafe X nih, sini merapat!\" (live location)", cat: "tidak_aman", why: "Menunjukkan pola keberadaanmu secara langsung, sangat berisiko untuk keamanan pribadi." },
  { t: "Posting foto medali lomba lari tanpa mencantumkan alamat rumah", cat: "aman", why: "Merupakan pencapaian positif tanpa menyertakan data sensitif." },
  { t: "Vlog ngerayain ulang tahun di rumah bareng keluarga besar", cat: "tergantung", why: "Tergantung apakah kamu merekam plat nomor mobil atau alamat rumah dengan jelas di video." },
  { t: "\"Finally liburan!\" dengan pamer tiket pesawat yang menampilkan barcode jelas", cat: "tidak_aman", why: "Barcode mengandung informasi data diri lengkap dan detail penerbangan yang bisa diretas/dibatalkan." },
  { t: "Bikin thread panjang menceritakan aib atau masalah internal keluarga", cat: "tidak_aman", why: "Bisa merusak reputasi keluarga dan meninggalkan jejak digital negatif selamanya." },
  { t: "\"Kenalin nih anabul baruku!\" dengan foto hewan peliharaan di dalam rumah", cat: "aman", why: "Tidak mengungkapkan informasi sensitif, sangat aman dan menghibur." },
  { t: "Share link artikel berita dari portal terpercaya tentang teknologi", cat: "aman", why: "Berbagi informasi publik yang bermanfaat tidak membahayakan dirimu." },
  { t: "Foto pakai barang-barang branded sendirian di jalanan/gang sepi", cat: "tergantung", why: "Bisa memancing niat buruk perampokan atau kejahatan kalau lokasi mudah ditebak." },
  { t: "Nulis password Wi-Fi rumah di status WA biar tamu gampang lihat", cat: "tidak_aman", why: "Orang asing di kontakmu bisa mengakses jaringan rumahmu untuk tindakan ilegal." },
  { t: "Komen \"Keren banget gambarmu!\" di postingan karya seni teman", cat: "aman", why: "Interaksi positif di media sosial tanpa menyertakan pelanggaran privasi." },
  { t: "Kuis \"Siapa nama ibu kandungmu dan hewan peliharaan pertamamu?\"", cat: "tidak_aman", why: "Pertanyaan ini sering digunakan bank/layanan sebagai pertanyaan keamanan (security questions) untuk meretas akun." },
  { t: "Record dan share video kecelakaan di jalan tanpa sensor korban", cat: "tidak_aman", why: "Tidak etis, melanggar privasi korban, dan bisa menimbulkan trauma bagi keluarga." },
  { t: "\"Alhamdulillah, nilai bagus!\" dengan foto rapor penuh nomor NISN", cat: "tergantung", why: "Mungkin kamu bangga, tapi rapor memuat data identitas resmi yang rawan pencurian identitas jika tidak disensor." },
  { t: "Share list goals atau resolusi tahun barumu secara umum", cat: "aman", why: "Membagikan tujuan pribadi secara umum dan positif tidak membahayakan siapa pun." },
  { t: "\"Wah menang giveaway!\" pamer KTP/Kartu Pelajar sebagai syarat klaim", cat: "tidak_aman", why: "Data KTP atau identitas resmi sangat rawan dicuri untuk pinjaman online ilegal atau penipuan identitas." },
  { t: "Ikut template 'Add Yours': \"Seberapa gemas wajahmu saat kamu usia 4 tahun?\"", cat: "tidak_aman", why: "Data wajah masa kecil bisa disalahgunakan untuk melatih model pengenalan wajah (AI Face Recognition) tanpa izin." },
  { t: "Template 'Add Yours': \"Spill tanda tangan asli vs tanda tangan KTP kalian dong!\"", cat: "tidak_aman", why: "Sangat berbahaya! Tanda tangan bisa langsung disalahgunakan untuk memalsukan dokumen atau transaksi finansial atas namamu." },
  { t: "Template 'Add Yours': \"Spill foto rumah masa kecil kalian!\"", cat: "tergantung", why: "Jika memperlihatkan alamat jelas atau ciri khas rumah, bisa dipakai untuk social engineering. Sebaiknya hindari jika detailnya terlalu spesifik." }
];

export function getRandomCards(count: number = 9): CardData[] {
  const shuffled = [...BANK_DATA].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((item, index) => ({
    ...item,
    id: `card_${index}_${Date.now()}`,
  }));
}
