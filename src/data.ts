export type Category = "aman" | "tergantung" | "tidak_aman";

export interface CardData {
  id: string;
  t: string; // text content
  cat: Category; // target category
  why: string; // explanation
}

export const BANK_DATA: Omit<CardData, "id">[] = [
  { t: "Foto liburanmu, dengan tag lokasi, diposting seminggu setelah kamu pulang ke rumah", cat: "aman", why: "Aman karena diposting setelah kamu sudah pulang, jadi tidak menunjukkan rumah sedang kosong." },
  { t: "Foto liburanmu, dengan tag lokasi, diposting saat kamu sedang di sana", cat: "tidak_aman", why: "Menunjukkan rumahmu kosong secara real-time — berisiko untuk keamanan rumah." },
  { t: "Nama lengkap dan nama sekolahmu di bio akun publik", cat: "tidak_aman", why: "Kombinasi ini memudahkan orang asing melacak dan mendekatimu di dunia nyata." },
  { t: "Foto makanan yang baru kamu masak", cat: "aman", why: "Tidak mengandung informasi pribadi yang bisa disalahgunakan." },
  { t: "Jadwal harian lengkap (jam sekolah, les, pulang) di story", cat: "tidak_aman", why: "Memudahkan seseorang memprediksi kapan kamu sendirian atau di lokasi tertentu." },
  { t: "Video singkat menari mengikuti tren, wajah dan suara terlihat jelas", cat: "tergantung", why: "Tergantung siapa yang bisa melihat (privat/publik) dan apakah kamu nyaman videonya disebarluaskan tanpa kendali." },
  { t: "Alamat rumah lengkap di caption atau tag lokasi", cat: "tidak_aman", why: "Informasi ini bisa langsung digunakan untuk mendatangi rumahmu." },
  { t: "Pendapatmu tentang film yang baru ditonton", cat: "aman", why: "Opini pribadi tanpa data sensitif — aman dibagikan." },
  { t: "Screenshot pesan pribadi teman, share ke media sosial tanpa izin mereka", cat: "tidak_aman", why: "Melanggar privasi orang lain, bisa merusak kepercayaan dan berujung konflik." },
  { t: "Foto bersama teman di acara sekolah, wajah semua orang terlihat", cat: "tergantung", why: "Tergantung apakah semua yang ada di foto setuju untuk difoto dan diposting." },
  { t: "Nomor HP pribadi di kolom komentar publik", cat: "tidak_aman", why: "Nomor HP bisa disalahgunakan untuk penipuan atau pelecehan oleh orang tak dikenal." },
  { t: "Ulasan singkat tentang buku yang kamu baca", cat: "aman", why: "Konten netral, tidak ada risiko privasi." },
  { t: "Tanggal lahir lengkap (tanggal, bulan, tahun) di profil publik", cat: "tidak_aman", why: "Sering dipakai sebagai bagian dari verifikasi akun/password — rawan disalahgunakan." },
  { t: "Cerita tentang hobi barumu, tanpa detail lokasi", cat: "aman", why: "Tidak mengandung data yang bisa dilacak ke lokasi atau identitas spesifik." },
  { t: "Curhat marah tentang guru atau teman sekelas, nama disebutkan", cat: "tidak_aman", why: "Bisa dianggap perundungan/pencemaran nama baik dan sulit dihapus sepenuhnya setelah tersebar." },
  { t: "Foto dengan seragam sekolah yang menampilkan nama sekolah jelas", cat: "tergantung", why: "Tergantung akun privat/publik — nama sekolah mempermudah orang asing menemukanmu secara fisik." },
  { t: "Meme lucu yang kamu buat sendiri, tidak menyinggung siapa pun", cat: "aman", why: "Konten kreatif netral, aman dibagikan siapa saja." },
  { t: "Tempat nongkrong favorit dengan tag lokasi real-time", cat: "tidak_aman", why: "Menunjukkan pola keberadaanmu secara langsung, berisiko untuk keamanan pribadi." },
  { t: "Pencapaian akademik atau lomba yang kamu menangkan", cat: "aman", why: "Informasi positif tanpa data sensitif." },
  { t: "Foto keluarga saat merayakan ulang tahun di rumah", cat: "tergantung", why: "Tergantung apakah tag lokasi/alamat ikut terlihat dan siapa yang bisa melihat akunmu." },
  { t: "Foto tiket pesawat atau boarding pass yang menampilkan barcode", cat: "tidak_aman", why: "Barcode mengandung informasi pribadi dan detail penerbangan yang bisa diretas." },
  { t: "Curhatan tentang masalah keluarga di akun publik", cat: "tidak_aman", why: "Bisa merusak reputasi keluarga dan meninggalkan jejak digital negatif." },
  { t: "Foto hewan peliharaan tanpa menunjukkan alamat rumah", cat: "aman", why: "Tidak mengungkapkan informasi sensitif, sangat aman." },
  { t: "Membagikan link artikel berita yang kamu baca", cat: "aman", why: "Hanya berbagi informasi publik, tidak membahayakan dirimu." },
  { t: "Foto menggunakan barang mewah di jalanan sepi", cat: "tergantung", why: "Bisa memancing niat buruk jika diposting dengan lokasi spesifik." },
  { t: "Memposting password Wi-Fi rumah di status publik", cat: "tidak_aman", why: "Orang asing bisa mengakses jaringan rumahmu untuk hal ilegal." },
  { t: "Komentar memuji karya seni teman di media sosial", cat: "aman", why: "Interaksi positif tanpa menyertakan privasi." },
  { t: "Mengisi kuis online yang menanyakan nama hewan peliharaan pertama dan ibu kandung", cat: "tidak_aman", why: "Ini sering digunakan sebagai pertanyaan keamanan untuk meretas akun." },
  { t: "Membagikan video kecelakaan lalu lintas dengan korban terlihat jelas", cat: "tidak_aman", why: "Tidak etis, melanggar privasi korban, dan bisa menimbulkan trauma." },
  { t: "Foto rapor dengan nilai-nilai sekolahmu", cat: "tergantung", why: "Mungkin kamu bangga, tapi rapor memuat nama lengkap, NISN, dan data identitas yang rawan." },
  { t: "Menulis resolusi tahun baru secara umum", cat: "aman", why: "Membagikan tujuan pribadi secara umum tidak membahayakan siapa pun." },
  { t: "Foto KTP atau Kartu Pelajar sebagai bukti menang kuis", cat: "tidak_aman", why: "Data identitas resmi bisa dicuri untuk pinjaman online atau penipuan." }
];

export function getRandomCards(count: number = 9): CardData[] {
  const shuffled = [...BANK_DATA].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((item, index) => ({
    ...item,
    id: `card_${index}_${Date.now()}`,
  }));
}
