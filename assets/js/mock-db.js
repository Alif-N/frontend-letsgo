// Mock Database untuk Website Portfolio LetsGo Library
// Menyimpan data di localStorage agar persisten saat halaman direfresh.

const DEFAULT_USERS = [
    {
        nik: "12345678",
        nama_depan: "Grand",
        nama_belakang: "Admin",
        email: "admin@letsgo.com",
        password: "password",
        role: "grand admin",
        dibuat_pada: "2025-01-15T08:00:00Z"
    },
    {
        nik: "87654321",
        nama_depan: "Budi",
        nama_belakang: "Santoso",
        email: "budi@letsgo.com",
        password: "password",
        role: "admin entri data",
        dibuat_pada: "2025-02-10T09:30:00Z"
    },
    {
        nik: "11223344",
        nama_depan: "Siti",
        nama_belakang: "Rahma",
        email: "siti@letsgo.com",
        password: "password",
        role: "staff verifikasi",
        dibuat_pada: "2025-03-05T10:15:00Z"
    }
];

const DEFAULT_BOOKS = [
    {
        id_buku: "BKB-001",
        no_klasifikasi: "005.1/SKR/2026",
        nrp_pengarang: "5025211001",
        pengarang: "Ahmad Fauzi",
        judul_buku: "Rancang Bangun Sistem Deteksi Plagiarisme Dokumen Menggunakan Cosine Similarity",
        kategori: "Skripsi",
        id_status: 5, // Selesai
        link_repositori: "https://repository.its.ac.id/102938",
        tahun_terbit: 2025,
        jumlah_eksemplar: 2,
        riwayat: [
            {
                id: 101,
                tindakan: "terima",
                catatan: "Dokumen lengkap, nomor klasifikasi valid.",
                tanggal_perubahan_status: "2026-06-01T09:00:00Z",
                nik: "12345678",
                user: { nama_depan: "Grand", nama_belakang: "Admin" },
                transisi: { statusAwal: "Entri Baru", statusTujuan: "Selesai" }
            }
        ]
    },
    {
        id_buku: "BKB-002",
        no_klasifikasi: "004.2/SKR/2026",
        nrp_pengarang: "5025211042",
        pengarang: "Rian Hidayat",
        judul_buku: "Analisis Kinerja Algoritma K-Nearest Neighbor pada Klasifikasi Sentimen Review Aplikasi",
        kategori: "Skripsi",
        id_status: 1, // Entri Baru
        link_repositori: "",
        tahun_terbit: 2026,
        jumlah_eksemplar: 1,
        riwayat: []
    },
    {
        id_buku: "BKB-003",
        no_klasifikasi: "006.3/THS/2026",
        nrp_pengarang: "5025222010",
        pengarang: "Dewi Lestari",
        judul_buku: "Penerapan Deep Learning Convolutional Neural Network untuk Klasifikasi Penyakit Daun Padi",
        kategori: "Thesis",
        id_status: 4, // Menunggu Link Repositori
        link_repositori: "",
        tahun_terbit: 2026,
        jumlah_eksemplar: 1,
        riwayat: [
            {
                id: 102,
                tindakan: "terima",
                catatan: "File PDF utama telah disetujui. Silakan unggah ke repositori kampus.",
                tanggal_perubahan_status: "2026-06-10T14:20:00Z",
                nik: "11223344",
                user: { nama_depan: "Siti", nama_belakang: "Rahma" },
                transisi: { statusAwal: "Diperiksa Petugas", statusTujuan: "Menunggu Link Repositori" }
            }
        ]
    },
    {
        id_buku: "BKB-004",
        no_klasifikasi: "007.1/KP/2026",
        nrp_pengarang: "5025231015",
        pengarang: "Fikri Ardiansyah",
        judul_buku: "Laporan Kerja Praktik Pengembangan Frontend Modul Dashboard LetsGo Library di ITS",
        kategori: "Laporan Kerja Praktik",
        id_status: 6, // Ditolak
        link_repositori: "",
        tahun_terbit: 2026,
        jumlah_eksemplar: 1,
        riwayat: [
            {
                id: 103,
                tindakan: "tolak",
                catatan: "Format lembar pengesahan belum ditandatangani basah oleh pembimbing lapangan.",
                tanggal_perubahan_status: "2026-06-11T10:00:00Z",
                nik: "87654321",
                user: { nama_depan: "Budi", nama_belakang: "Santoso" },
                transisi: { statusAwal: "Entri Baru", statusTujuan: "Ditolak" }
            }
        ]
    }
];

const DEFAULT_AUDIT_LOGS = [
    {
        waktu: "2026-06-11T10:00:00Z",
        nik: "87654321",
        staff_nama: "Budi Santoso",
        staff_role: "admin entri data",
        buku_id: "BKB-004",
        buku_judul: "Laporan Kerja Praktik Pengembangan Frontend Modul Dashboard LetsGo Library di ITS",
        buku_pengarang: "Fikri Ardiansyah",
        tindakan: "tolak",
        catatan: "Format lembar pengesahan belum ditandatangani basah oleh pembimbing lapangan.",
        transisi: { statusAwal: "Entri Baru", statusTujuan: "Ditolak" }
    },
    {
        waktu: "2026-06-10T14:20:00Z",
        nik: "11223344",
        staff_nama: "Siti Rahma",
        staff_role: "staff verifikasi",
        buku_id: "BKB-003",
        buku_judul: "Penerapan Deep Learning Convolutional Neural Network untuk Klasifikasi Penyakit Daun Padi",
        buku_pengarang: "Dewi Lestari",
        tindakan: "terima",
        catatan: "File PDF utama telah disetujui. Silakan unggah ke repositori kampus.",
        transisi: { statusAwal: "Diperiksa Petugas", statusTujuan: "Menunggu Link Repositori" }
    },
    {
        waktu: "2026-06-01T09:00:00Z",
        nik: "12345678",
        staff_nama: "Grand Admin",
        staff_role: "grand admin",
        buku_id: "BKB-001",
        buku_judul: "Rancang Bangun Sistem Deteksi Plagiarisme Dokumen Menggunakan Cosine Similarity",
        buku_pengarang: "Ahmad Fauzi",
        tindakan: "terima",
        catatan: "Dokumen lengkap, nomor klasifikasi valid.",
        transisi: { statusAwal: "Entri Baru", statusTujuan: "Selesai" }
    }
];

const STATUS_MAP = {
    1: "Entri Baru",
    2: "Diperiksa Petugas",
    3: "Pemeriksaan Lanjut",
    4: "Menunggu Link Repositori",
    5: "Selesai",
    6: "Ditolak / Perbaikan"
};

// Inisialisasi Database
function initDb() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(DEFAULT_USERS));
    }
    if (!localStorage.getItem("books")) {
        localStorage.setItem("books", JSON.stringify(DEFAULT_BOOKS));
    }
    if (!localStorage.getItem("audit_logs")) {
        localStorage.setItem("audit_logs", JSON.stringify(DEFAULT_AUDIT_LOGS));
    }
}

// Session Helpers
function getCurrentUser() {
    const userStr = localStorage.getItem("current_user");
    return userStr ? JSON.parse(userStr) : null;
}

function login(email, password) {
    initDb();
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem("current_user", JSON.stringify(user));
        return { success: true, user };
    }
    return { success: false, message: "Email atau password salah." };
}

function logout() {
    localStorage.removeItem("current_user");
    window.location.href = "index.html";
}

function checkAuth(allowedRoles = []) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = "index.html";
        return null;
    }
    if (allowedRoles.length > 0 && !allowedRoles.includes(currentUser.role)) {
        alert("Anda tidak memiliki hak akses untuk halaman ini!");
        window.location.href = "dashboard.html";
        return null;
    }
    return currentUser;
}

// Buku Helpers
function getBooks() {
    initDb();
    return JSON.parse(localStorage.getItem("books"));
}

function saveBooks(books) {
    localStorage.setItem("books", JSON.stringify(books));
}

function getAuditLogs() {
    initDb();
    return JSON.parse(localStorage.getItem("audit_logs"));
}

function saveAuditLogs(logs) {
    localStorage.setItem("audit_logs", JSON.stringify(logs));
}

function getUsers() {
    initDb();
    return JSON.parse(localStorage.getItem("users"));
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Panggil inisialisasi awal
initDb();
