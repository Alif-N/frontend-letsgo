# LetsGo Library - Frontend Portfolio Website

Website ini adalah frontend interaktif untuk **LetsGo Library** (Sistem Pelestarian Bahan Pustaka dan Repositori Kampus). Project ini telah dirampingkan menjadi **website statis (HTML/JS/CSS)** murni sehingga dapat dijalankan tanpa memerlukan server backend (PHP/Laravel) maupun database (MySQL).

Semua fungsionalitas CRUD data buku, data anggota, otentikasi/session, dan pencatatan audit log dijalankan di sisi klien menggunakan **Alpine.js** dan disimpan secara persisten di **localStorage** browser Anda.

## 🚀 Cara Menjalankan

Karena website ini 100% statis, Anda dapat menjalankannya dengan cara:
1. **Buka Langsung:** Double-click file `index.html` dari file explorer untuk membukanya di browser favorit Anda.
2. **Local Server (Opsional):** Jalankan ekstensi VS Code seperti *Live Server*, atau jalankan server lokal sederhana lainnya (misal: `npx serve .`).
3. **Deploy Online (Sangat Mudah):** Cukup unggah repository ini ke platform gratis seperti **GitHub Pages, Netlify, atau Vercel** untuk mempublikasikannya secara online.

---

## 🔑 Akun Uji Coba (Demo Accounts)

Anda dapat masuk menggunakan salah satu dari akun uji coba di bawah ini untuk melihat perbedaan hak akses (Role Dashboard & Menu):

| Email | Password | Role / Jabatan | Fitur Spesifik |
| :--- | :--- | :--- | :--- |
| **admin@letsgo.com** | `password` | **Grand Admin** | Akses semua menu, bypass verifikasi di semua tahap, kelola anggota (CRUD), cetak laporan global, lihat riwayat proses audit log global. |
| **budi@letsgo.com** | `password` | **Admin Entri Data** | Menambah buku baru (Entri Baru), melakukan verifikasi tahap awal (Status: Entri Data -> Pemotongan), mengunduh laporan aktivitas pribadi. |
| **siti@letsgo.com** | `password` | **Staff Verifikasi** | Melakukan verifikasi dokumen sesuai alur tugasnya (misal: Pemotongan -> Scanning), mengunduh laporan aktivitas pribadi. |

> Anda juga bisa mendaftarkan akun baru melalui tombol **Daftar** di halaman Login.

---

## 🛠️ Tech Stack & Fitur Frontend

1. **Tailwind CSS (via CDN):** Styling premium, responsif, dan dinamis dengan warna modern.
2. **Alpine.js (via CDN):** Manajemen state dinamis (CRUD, otentikasi login, modal dialog, toggle sidebar responsif).
3. **Chart.js (via CDN):** Menampilkan diagram doughnut & bar interaktif di halaman Dashboard.
4. **localStorage Browser:** Media penyimpanan database tiruan agar data yang Anda tambahkan/ubah/hapus tidak hilang saat halaman direfresh.
5. **Dynamic CSV Exporter:** Fitur cetak laporan yang secara dinamis menyusun data log filter menjadi file CSV dan mengunduhnya ke komputer Anda.
