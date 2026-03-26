# TBCare Backend API

Backend untuk aplikasi mobile TBCare menggunakan arsitektur Microservices.

---

## Tech Stack

- **Runtime:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** JSON Web Token (JWT) & Blacklisted Token Mechanism
- **Arsitektur:** Microservices + API Gateway
- **Orchestration:** Docker & Docker Compose

---

## Struktur Folder
```text
tbcare-backend/
├── api-gateway/
│   ├── src/
│   │   ├── middleware/
│   │   │   └── auth-middleware.js
│   │   ├── routes/
│   │   │   └── routes.js
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
│
├── user-service/
│   ├── src/
│   │   ├── models/
│   │   │   ├── blacklisted-token.js
│   │   │   └── user.js
│   │   ├── controllers/
│   │   │   ├── auth-controller.js
│   │   │   └── profile-controller.js
│   │   ├── routes/
│   │   │   ├── auth-routes.js
│   │   │   └── profile-routes.js
│   │   ├── middleware/
│   │   │   └── auth-middleware.js
│   │   ├── utils/
│   │   │   └── response.js
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
│
├── reminder-medicine-service/
│   ├── src/
│   │   ├── models/
│   │   │   ├── medicine.js
│   │   │   └── medicine-history.js
│   │   ├── controllers/
│   │   │   ├── medicine-controller.js
│   │   │   ├── medicine-history-controller.js
│   │   │   └── schedule-controller.js
│   │   ├── routes/
│   │   │   ├── medicine-routes.js
│   │   │   ├── medicine-history-routes.js
│   │   │   └── schedule-routes.js
│   │   ├── middleware/
│   │   │   └── auth-middleware.js
│   │   ├── utils/
│   │   │   └── response.js
│   │   └── server.js
│   ├── .env
│   ├── Dockerfile
│   └── package.json
│
├── education-service/
│   ├── src/
│   │   ├── models/
│   │   │   └── content.js
│   │   ├── controllers/
│   │   │   └── content-controllers.js
│   │   ├── routes/
│   │   │   └── content-routes.js
│   │   ├── middleware/
│   │   │   ├── auth-middleware.js
│   │   │   ├── role-middleware.js
│   │   │   └── upload-middleware.js
│   │   ├── utils/
│   │   │   └── response.js
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
│
├── skrining-service/
│   ├── src/
│   │   ├── config/
│   │   │   └── risk-config.js
│   │   ├── controllers/
│   │   │   ├── question-controller.js
│   │   │   └── screening-controller.js
│   │   ├── middleware/
│   │   │   └── auth-middleware.js
│   │   ├── models/
│   │   │   ├── screening-detail.js
│   │   │   ├── screening-question.js
│   │   │   └── screening.js
│   │   ├── routes/
│   │   │   ├── question-routes.js
│   │   │   └── screening-routes.js
│   │   ├── seeders/
│   │   │   └── question-seeder.js
│   │   ├── utils/
│   │   │   ├── response.js
│   │   │   └── risk-classifier.js
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── docker-compose.prod.yml
├── .gitignore
├── .env.example
└── README.md
```

---

## API Endpoints

Semua request melalui **API Gateway** di `http://localhost:3000`.

> `-` = Publik (Tidak membutuhkan token)
> `🔒` = Membutuhkan header `Authorization: Bearer <token>`
> `🔐` = Membutuhkan header `Authorization: Bearer <token>` (Khusus **Admin**)

---

### Auth — `/api/auth`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/auth/register` | Registrasi akun baru | - |
| POST | `/auth/login` | Login dan dapatkan token | - |
| POST | `/auth/logout` | Logout akun (Blacklist token) | 🔒 |

---

### User — `/api/users`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/users/profile` | Ambil data profil | 🔒 |
| PUT | `/users/profile` | Update nama & no telepon | 🔒 |
| PUT | `/users/change-password` | Ganti password | 🔒 |

---

### Edukasi & Konten — `/api/konten`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/konten` | Ambil seluruh konten edukasi (mendukung filter query) | 🔒 |
| GET | `/konten/:id` | Ambil detail spesifik satu konten edukasi | 🔒 |
| POST | `/konten` | Tambah konten baru (Mendukung upload Video/Artikel) | 🔐 |
| PUT | `/konten/:id` | Update data atau file konten edukasi | 🔐 |
| DELETE | `/konten/:id` | Hapus konten dan hapus file fisik video terkait | 🔐 |

---

### Obat (Medicine) — `/api/obat`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/obat` | Ambil daftar obat milik user | 🔒 |
| POST | `/obat` | Tambah data obat baru ke daftar | 🔒 |
| GET | `/obat/:id` | Ambil detail informasi obat tertentu | 🔒 |
| PUT | `/obat/:id` | Update data obat | 🔒 |
| DELETE | `/obat/:id` | Hapus data obat dari daftar | 🔒 |

---

### Riwayat Minum Obat — `/api/riwayat-obat`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/riwayat-obat` | Ambil rekam riwayat kepatuhan minum obat user | 🔒 |
| POST | `/riwayat-obat` | Catat dan tandai bahwa obat telah diminum | 🔒 |

---

### Jadwal Pengingat — `/api/jadwal`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/jadwal/hari-ini` | Ambil jadwal pengingat minum obat hari ini | 🔒 |
| GET | `/jadwal` | Ambil seluruh jadwal pengingat minum obat user | 🔒 |
| POST | `/jadwal` | Buat jadwal pengingat minum obat baru | 🔒 |
| PUT | `/jadwal/:id` | Update waktu atau jadwal pengingat | 🔒 |
| DELETE | `/jadwal/:id` | Hapus jadwal pengingat | 🔒 |

---

### Skrining TBC — `/api/skrining`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/skrining/pertanyaan` | Ambil daftar pertanyaan aktif untuk skrining | 🔒 |
| POST | `/skrining` | Submit jawaban skrining dan kalkulasi tingkat risiko | 🔒 |
| GET | `/skrining` | Ambil riwayat hasil skrining user | 🔒 |
| GET | `/skrining/:id` | Ambil detail spesifik satu riwayat skrining beserta jawaban | 🔒 |