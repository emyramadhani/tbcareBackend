# TBCare Backend API

Backend untuk aplikasi mobile TBCare menggunakan arsitektur Microservices.

---

## Tech Stack

- **Runtime:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** JSON Web Token (JWT)
- **Arsitektur:** Microservices + API Gateway

---

## Struktur Folder
```
tbcare-backend/
├── api-gateway/
│   ├── src/
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── routes/
│   │   │   └── proxy.js
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── user-service/
│   ├── src/
│   │   ├── models/
│   │   │   └── User.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── profileController.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── profileRoutes.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── utils/
│   │   │   └── response.js
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── reminder-service/
│   ├── src/
│   │   ├── models/
│   │   │   ├── Obat.js
│   │   │   ├── RiwayatMinum.js
│   │   │   └── Notifikasi.js
│   │   ├── controllers/
│   │   │   ├── obatController.js
│   │   │   ├── riwayatController.js
│   │   │   └── notifikasiController.js
│   │   ├── routes/
│   │   │   ├── obatRoutes.js
│   │   │   ├── riwayatRoutes.js
│   │   │   └── notifikasiRoutes.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── utils/
│   │   │   └── response.js
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── skrining-service/
│   ├── src/
│   │   ├── models/
│   │   │   ├── Pertanyaan.js
│   │   │   └── Skrining.js
│   │   ├── controllers/
│   │   │   ├── pertanyaanController.js
│   │   │   └── skriningController.js
│   │   ├── routes/
│   │   │   ├── pertanyaanRoutes.js
│   │   │   └── skriningRoutes.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── utils/
│   │   │   ├── response.js
│   │   │   └── risikoClassifier.js
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── edukasi-service/
│   ├── src/
│   │   ├── models/
│   │   │   └── Konten.js
│   │   ├── controllers/
│   │   │   └── kontenController.js
│   │   ├── routes/
│   │   │   └── kontenRoutes.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── utils/
│   │   │   └── response.js
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── chatbot-service/
│   ├── src/
│   │   ├── models/
│   │   │   └── ChatHistory.js
│   │   ├── controllers/
│   │   │   └── chatController.js
│   │   ├── routes/
│   │   │   └── chatRoutes.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── utils/
│   │   │   └── response.js
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── layanan-kesehatan-service/
│   ├── src/
│   │   ├── models/
│   │   │   └── Layanan.js
│   │   ├── controllers/
│   │   │   └── layananController.js
│   │   ├── routes/
│   │   │   └── layananRoutes.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── utils/
│   │   │   └── response.js
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── .gitignore
├── .env.example
└── README.md
```

---

## API Endpoints

Semua request melalui **API Gateway** di `http://localhost:3000`.

> `🔒` = Membutuhkan header `Authorization: Bearer <token>`

---

### Auth — `/api/auth`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/auth/register` | Registrasi akun baru | - |
| POST | `/auth/login` | Login dan dapatkan token | - |

---

### User — `/api/users`

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| GET | `/users/profile` | Ambil data profil | 🔒 |
| PUT | `/users/profile` | Update nama & no telepon | 🔒 |
| PUT | `/users/change-password` | Ganti password | 🔒 |

---