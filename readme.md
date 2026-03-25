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

Berikut adalah struktur direktori aplikasi yang telah terimplementasi:

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
├── docker-compose.yml
├── docker-compose.prod.yml
├── .gitignore
├── .env.example
└── README.md
```

---

## API Endpoints

Semua request melalui **API Gateway** di `http://localhost:3000` *(atau `5000` jika menggunakan default port dari docker-compose)*.

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

### Edukasi — `/api/education`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/education` | Ambil seluruh konten edukasi (mendukung filter query) | 🔒 |
| GET | `/education/:id` | Ambil detail spesifik satu konten edukasi | 🔒 |
| POST | `/education` | Tambah konten baru (Mendukung upload Video/Artikel) | 🔐 |
| PUT | `/education/:id` | Update data atau file konten edukasi | 🔐 |
| DELETE | `/education/:id` | Hapus konten dan hapus file fisik video terkait | 🔐 |

---

### Obat (Medicine) — `/api/medicine`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/medicine` | Ambil daftar obat milik user | 🔒 |
| POST | `/medicine` | Tambah data obat baru ke daftar | 🔒 |
| GET | `/medicine/:id` | Ambil detail informasi obat tertentu | 🔒 |
| PUT | `/medicine/:id` | Update data obat | 🔒 |
| DELETE | `/medicine/:id` | Hapus data obat dari daftar | 🔒 |

---

### Riwayat Minum Obat — `/api/medicine-history`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/medicine-history` | Ambil rekam riwayat kepatuhan minum obat user | 🔒 |
| POST | `/medicine-history` | Catat dan tandai bahwa obat telah diminum | 🔒 |

---

### Jadwal Pengingat — `/api/schedule`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/schedule` | Ambil seluruh jadwal pengingat minum obat user | 🔒 |
| POST | `/schedule` | Buat jadwal pengingat minum obat baru | 🔒 |
| PUT | `/schedule/:id` | Update waktu atau jadwal pengingat | 🔒 |
| DELETE | `/schedule/:id` | Hapus jadwal pengingat | 🔒 |

---