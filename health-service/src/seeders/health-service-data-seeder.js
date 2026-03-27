'use strict';

/**
 * Seeder Data Fasilitas Kesehatan TBCare
 * Sumber: Data Dasar Fasyankes Provinsi Lampung (Update Nov-Des 2025)
 *
 * Struktur data dikelompokkan per kota agar mudah ditambah dari kota lain
 * di Provinsi Lampung tanpa mengubah logika upsert.
 *
 * Cara menambah kota baru:
 *   1. Buat objek kota baru di bawah (contoh: METRO, LAMPUNG_SELATAN, dst.)
 *   2. Isi array per jenis sesuai format { nama_faskes, jenis, alamat }
 *   3. Tambahkan ke array `allCities` di bagian bawah
 *
 * Cara menjalankan:
 *   node src/seeders/seed.js
 */

require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const mongoose = require('mongoose');
const HealthService = require('../models/health-service');

// ─────────────────────────────────────────────────────────────
// DATA — KOTA BANDAR LAMPUNG
// ─────────────────────────────────────────────────────────────

const BANDAR_LAMPUNG = {
  kota: 'Kota Bandar Lampung',
  provinsi: 'Lampung',

  // ── 1. UPTPAS ────────────────────────────────────────────────
  UPTPAS: [
    {
      nama_faskes: 'LAPAS KELAS I BANDAR LAMPUNG',
      jenis: 'UPTPAS',
      alamat: 'Jl. Pramuka No.12, Rajabasa, Langkapura, Kota Bandar Lampung, Lampung 35152',
    },
    {
      nama_faskes: 'LAPAS NARKOTIKA KELAS II A BANDAR LAMPUNG',
      jenis: 'UPTPAS',
      alamat: 'Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung',
    },
    {
      nama_faskes: 'LAPAS PEREMPUAN KELAS II A BANDAR LAMPUNG',
      jenis: 'UPTPAS',
      alamat: 'Jl. Ryacudu, Wayhui, Sukarame, Bandar Lampung',
    },
    {
      nama_faskes: 'RUTAN KELAS I BANDAR LAMPUNG',
      jenis: 'UPTPAS',
      alamat: 'Jalan Ryacudu Way Hui Sukarame Bandarlampung',
    },
  ],

  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP BIMU MEDIKA MUHAMMADIYAH',
      jenis: 'Klinik',
      alamat: 'Jl. Sentot Alibasya Pembangunan No. 1, Waydadi Sukarame Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK PRATAMA SEJAHTERA',
      jenis: 'Klinik',
      alamat: 'Jl. Teuku Umar No. 80 B Kedaton Bandar Lampung depan Korem Gatam',
    },
    {
      nama_faskes: 'KLINIK IMAM BONJOL',
      jenis: 'Klinik',
      alamat: 'Jalan Imam Bonjol No. 3 Pasir Gintung Tanjungkarang Pusat',
    },
    {
      nama_faskes: 'KLINIK UNILA',
      jenis: 'Klinik',
      alamat: 'Jl. Prof. Dr. Soemantri Brojonegoro Nomor 1 Rajabasa Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK KELUARGA',
      jenis: 'Klinik',
      alamat: 'Jl. P. Antasari No 137 B',
    },
    {
      nama_faskes: 'KLINIK KEDAMAIAN MEDIKA FARMA',
      jenis: 'Klinik',
      alamat: 'Jl. Putri Balau Ruko Kedamaian No 1-3 B',
    },
    {
      nama_faskes: 'KLINIK KEDATON MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Z. A. Pagar Alam No 77/79 Gedong Meneng Kecamatan Rajabasa Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK ARDHITO MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Rajabasa Raya Blok T. 21 Kelurahan Perumnas Way Halim, Kecamatan Kedaton',
    },
    {
      nama_faskes: 'KLINIK KRAKATAU',
      jenis: 'Klinik',
      alamat: 'Jl. Imam Bonjol No. 1000 a-b-c Langkapura, Kemiling, Bandar Lampung 35154',
    },
    {
      nama_faskes: 'KLINIK PRATAMA SARTIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Imam Bonjol No. 153',
    },
    {
      nama_faskes: 'KLINIK PRATAMA KOSASIH PALAPA',
      jenis: 'Klinik',
      alamat: 'Jl. Cut Nyak Dien No 62 C Palapa',
    },
    {
      nama_faskes: 'KLINIK SARI MARANATHA SEHAT',
      jenis: 'Klinik',
      alamat: 'Jl. Gajah Mada No.60/41 Kota Baru, Tanjung Karang Timur, Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK WEDE AR RACHMAN',
      jenis: 'Klinik',
      alamat: 'Jl. Danau Toba Gg. Saburai No 9 Gunung Sulah Way Halim Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK REGINA PUTRI HUSADA',
      jenis: 'Klinik',
      alamat: 'Jalan Pulau Batam IV No.9 Way Halim Permai Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK PRATAMA KOSASIH AMANAH',
      jenis: 'Klinik',
      alamat: 'Jl. Ikan Kembung No 70 A Teluk Betung',
    },
    {
      nama_faskes: 'KLINIK BIDDOKKES POLDA LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jl. Drs. Warsito No. 89 Kelurahan Talang Kecamatan Teluk Betung Selatan Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK GEMARI',
      jenis: 'Klinik',
      alamat: 'Jl. Ikan Bawal No 110, Kangkung, Kec. Bumi Waras',
    },
    {
      nama_faskes: 'KLINIK RAFFASYA SENTRA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Ratu Dibalau Gang Kenanga III RT 006 Kelurahan Way Kandis Kecamatan Tanjung Senang Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK AL HUSNA CITRA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Dr. Setiabudi/AMD No 47B RT/RW 001/000 Negeri Olok Gading',
    },
    {
      nama_faskes: 'KLINIK BP LANAL LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jl. Yos Sudarso Km. 10 Kel. Karang Maritim Kec. Panjang Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK TELKOMEDIKA HEALTH CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Sultan Agung No.1, Sepang Jaya, Kec. Kedaton, Kota Bandar Lampung, Lampung 35128',
    },
    {
      nama_faskes: 'KLINIK CAHAYA SEHAT',
      jenis: 'Klinik',
      alamat: 'Perum Bukit Kemiling Permai, Blok Q No 7, Kemiling Permai Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK NAFARAL MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Dewi RT 01 Pidada',
    },
    {
      nama_faskes: 'KLINIK SABILA',
      jenis: 'Klinik',
      alamat: 'Jln. Cut Nyak Dien No 27',
    },
    {
      nama_faskes: 'KLINIK UNTUNG MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Untung Suropati No. 31 Labuhan Ratu Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK GATAM KEDATON',
      jenis: 'Klinik',
      alamat: 'Jl. Zainal Abidin Pagar Alam No 448 Labuhan Ratu Kedaton Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK PRATAMA KOSASIH TELUK',
      jenis: 'Klinik',
      alamat: 'Jl. Ikan Salem No 05',
    },
    {
      nama_faskes: 'KLINIK PRATAMA KOSASIH TUGU',
      jenis: 'Klinik',
      alamat: 'Jl. Hayam Wuruk No 20',
    },
    {
      nama_faskes: 'KLINIK DIRA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jln. Amir Hamzah No.92/15 Gotong Royong',
    },
    {
      nama_faskes: 'KLINIK AZZURA',
      jenis: 'Klinik',
      alamat: 'Jl. Gajah Mada No 59C Kelurahan Kota Baru Kecamatan Tanjung Karang Timur Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK SIDOKKES POLRESTA BALAM',
      jenis: 'Klinik',
      alamat: 'Jl. Mayjen MT Haryono, Gotong Royong, Kec. Tj. Karang Pusat, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK MEDISKA TANJUNGKARANG',
      jenis: 'Klinik',
      alamat: 'Jl. Kota Raja No. 1',
    },
    {
      nama_faskes: 'KLINIK UMMI HC KEDATON',
      jenis: 'Klinik',
      alamat: 'Jl. Pagar Alam No 19 Gang PU Kedaton',
    },
    {
      nama_faskes: 'KLINIK BERSALIN UTAMA BUNDA KARTINI',
      jenis: 'Klinik',
      alamat: 'Jalan K.H. Mas Mansyur No 26 Rawa Laut, Enggal',
    },
    {
      nama_faskes: 'KLINIK RAWAT INAP KOSASIH URIP',
      jenis: 'Klinik',
      alamat: 'Jl. Urip Sumoharjo No 176',
    },
    {
      nama_faskes: 'KLINIK BINTANG KIMAJA',
      jenis: 'Klinik',
      alamat: 'Jalan Kimaja Nomor 61 Kedaton Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK PRATAMA MITRA ANDA',
      jenis: 'Klinik',
      alamat: 'Jl. Gemini No 14 RT 005 RW 000 Kelurahan Rajabasa Jaya Kecamatan Rajabasa',
    },
    {
      nama_faskes: 'KLINIK RAWAT INAP KOSASIH RAJABASA',
      jenis: 'Klinik',
      alamat: 'Jl. Kapten Badul Haq No 9/31',
    },
    {
      nama_faskes: 'KLINIK PRATAMA KOSASIH TIRTAYASA',
      jenis: 'Klinik',
      alamat: 'Jl. Pangeran Tirtayasa No 181',
    },
    {
      nama_faskes: 'KLINIK KEMILING SEHAT',
      jenis: 'Klinik',
      alamat: 'Jl. Imam Bonjol Ruko Griya Imam Bonjol No A2 A3 Langkapura Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK IDSA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Perum BKP No.01 Blok Y Kel. Kemiling Permai Kec. Kemiling',
    },
    {
      nama_faskes: 'KLINIK FLORA',
      jenis: 'Klinik',
      alamat: 'Jln. Pagar Alam (PU) Segala Mider',
    },
    {
      nama_faskes: 'KLINIK PRATAMA KIMIA FARMA',
      jenis: 'Klinik',
      alamat: 'Jl. Arif Rahman Hakim, Way Halim Permai, Kec. Sukarame, Kota Bandar Lampung, Lampung 35133',
    },
    {
      nama_faskes: 'KLINIK AL-FAYYADH',
      jenis: 'Klinik',
      alamat: 'Jl. Pagar Alam No.112, Segala Mider, Kec. Tj. Karang Barat, Kota Bandar Lampung, Lampung 35132',
    },
    {
      nama_faskes: 'KLINIK GMC',
      jenis: 'Klinik',
      alamat: 'Jl. Pagar Alam No.179, Langkapura, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK KOSASIH PANJANG',
      jenis: 'Klinik',
      alamat: 'Jl. Yos Sudarso No.175, Panjang Utara, Panjang, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK PELABUHAN PANJANG',
      jenis: 'Klinik',
      alamat: 'Jln. Yos Sudarso No.337, Panjang - Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK SUMBER MITRA',
      jenis: 'Klinik',
      alamat: 'Jl. Teluk Lampung No.28, Pidada, Kec. Panjang, Kota Bandar Lampung, Lampung 35241',
    },
    {
      nama_faskes: 'KLINIK KELUARGA PANJANG MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Teluk Ambon, Pidada, Kec. Panjang, Kota Bandar Lampung, Lampung 35241',
    },
    {
      nama_faskes: 'KLINIK KELUARGA KOTA BANDAR LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jl. P. Antasari No.137, Kedamaian, Kec. Tanjungkarang Timur, Kota Bandar Lampung, Lampung 35122',
    },
    {
      nama_faskes: 'KLINIK PRAMITRA BIOLAB',
      jenis: 'Klinik',
      alamat: 'Way Halim Permai, Kec. Way Halim, Kota Bandar Lampung, Lampung 35132',
    },
    {
      nama_faskes: 'KLINIK BRIMOB POLDA LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jl. KS. Tubun, Rawa Laut, Enggal, Kota Bandar Lampung, Lampung 35128',
    },
    {
      nama_faskes: 'KLINIK LABORATORIUM KIMIA FARMA',
      jenis: 'Klinik',
      alamat: 'Jl. Gajah Mada No.60, RW.41, Tj. Agung Raya, Kec. Tanjungkarang Timur, Kota Bandar Lampung, Lampung 35128',
    },
    {
      nama_faskes: 'KLINIK PAHOMAN',
      jenis: 'Klinik',
      alamat: 'Jalan Haji Juanda No.19, Pahoman, Teluk Betung Utara, Kota Bandar Lampung, Lampung 35228',
    },
    {
      nama_faskes: 'KLINIK HOSEA',
      jenis: 'Klinik',
      alamat: 'Jl. Way Sekampung No.50, Pahoman, Enggal, Kota Bandar Lampung, Lampung 35228',
    },
    {
      nama_faskes: 'KLINIK UTAMA RADIOLOGI DR. IRENE INDRIANA, SP.RAD',
      jenis: 'Klinik',
      alamat: 'Jl. Way Umpu No.35, Pahoman, Enggal, Kota Bandar Lampung, Lampung 35213',
    },
    {
      nama_faskes: 'KLINIK GRIYA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Ikan Kembung No.50, Pesawahan, Kec. Telukbetung Selatan, Kota Bandar Lampung, Lampung 35221',
    },
    {
      nama_faskes: 'KLINIK BRIMEDIKA',
      jenis: 'Klinik',
      alamat: 'Gg. Manyar, Pengajaran, Kec. Tlk. Betung Utara, Kota Bandar Lampung, Lampung 35214',
    },
    {
      nama_faskes: 'KLINIK PTPN 7',
      jenis: 'Klinik',
      alamat: 'Gg. Banten, Sidodadi, Kec. Kedaton, Kota Bandar Lampung, Lampung 35132',
    },
    {
      nama_faskes: 'KLINIK ADVENT',
      jenis: 'Klinik',
      alamat: 'Jl. Kelelawar, Sidodadi, Kec. Kedaton, Kota Bandar Lampung, Lampung 35132',
    },
    {
      nama_faskes: 'KLINIK AMONGS MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Bunga Sedap Malam Raya No.81, Perumnas Way Kandis, Kec. Tj. Senang, Kota Bandar Lampung, Lampung 35131',
    },
    {
      nama_faskes: 'KLINIK YAYASAN AULIA RAHMA',
      jenis: 'Klinik',
      alamat: 'Jl. Karet, RT.14/RW.Lk 01, Sumber Rejo, Kec. Kemiling, Kota Bandar Lampung, Lampung 35153',
    },
    {
      nama_faskes: 'KLINIK SURYA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Sultan Haji Gg. Mega No.8, Sepang Jaya, Kec. Kedaton, Kota Bandar Lampung, Lampung 35132',
    },
    {
      nama_faskes: 'KLINIK PRATAMA ALZARA',
      jenis: 'Klinik',
      alamat: 'Jl. Pajajaran Jagabaya II, Kota Bandar Lampung, Lampung',
    },
    {
      nama_faskes: 'KLINIK AZIZAH',
      jenis: 'Klinik',
      alamat: 'Jl. Pulau Bacan H LK II No.57, RT.001/RW.00, Jagabaya II, Kec. Way Halim, Kota Bandar Lampung, Lampung 35132',
    },
    {
      nama_faskes: 'KLINIK PATOLOGI',
      jenis: 'Klinik',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK PRATAMA BNN PROV LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jl. Ikan Bawal No.92 Teluk Betung, Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK RUMAH REHABILITASI / HOUSE OF SERENITY',
      jenis: 'Klinik',
      alamat: 'Jl. P. Sanama No.30, Way Halim Permai, Kec. Way Halim, Kota Bandar Lampung, Lampung',
    },
    {
      nama_faskes: 'KLINIK KILAU DENTAL',
      jenis: 'Klinik',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK DOKTER NUSANTARA',
      jenis: 'Klinik',
      alamat: 'Jln. Alimudir Umar Campang Raya',
    },
    {
      nama_faskes: 'KLINIK SATRIA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jln. Alimudir Umar Campang Raya',
    },
    {
      nama_faskes: 'KLINIK BIDAN LILIS SURYANI',
      jenis: 'Klinik',
      alamat: 'Campang Raya, Tanjung Karang Timur',
    },
    {
      nama_faskes: 'KLINIK BIDAN AYU YULIARINI',
      jenis: 'Klinik',
      alamat: 'Campang Raya, Tanjung Karang Timur',
    },
    {
      nama_faskes: 'KLINIK BIDAN WIDIASTUTI RANI YULIANTI',
      jenis: 'Klinik',
      alamat: 'Campang Raya, Tanjung Karang Timur',
    },
    {
      nama_faskes: 'KLINIK RUMAH SEHAT ANAKKU',
      jenis: 'Klinik',
      alamat: 'Jln. Mataram No 1 Enggal',
    },
    {
      nama_faskes: 'KLINIK LAMPUNG SEHAT',
      jenis: 'Klinik',
      alamat: 'Jln. Ikan Belida No 80 Pesawahan Teluk Betung Selatan',
    },
    {
      nama_faskes: 'KLINIK BADAN PEMERIKSA KEUANGAN (BPK)',
      jenis: 'Klinik',
      alamat: 'Jln. Pangeran Emir No. 11 B',
    },
    {
      nama_faskes: 'KLINIK BIDAN YUSMAINI',
      jenis: 'Klinik',
      alamat: 'Jln. RE Martadinata No 130',
    },
    {
      nama_faskes: 'KLINIK PAGAR ALAM',
      jenis: 'Klinik',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK BY PASS',
      jenis: 'Klinik',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK PRATAMA UIN RADEN INTAN LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jln. Lektol H. Endro Suratmin Sukarame',
    },
    {
      nama_faskes: 'KLINIK BENMARI',
      jenis: 'Klinik',
      alamat: 'Jl. Soekarno-Hatta (Bypass) Kp. Cikaung RT 01/01 No. 37 Panjang Selatan, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK BIDAN MEGAWATI',
      jenis: 'Klinik',
      alamat: 'Jln. Arif Rahman Hakim No 9 Tanjung Baru Kedamaian',
    },
    {
      nama_faskes: 'KLINIK BIDAN AMIRA',
      jenis: 'Klinik',
      alamat: 'Jln. Hayam Wuruk No 40 Tanjung Agung Raya Kec. Tanjung Karang Timur',
    },
    {
      nama_faskes: 'KLINIK ARVANDA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Ryacudu No.60, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK KABARA',
      jenis: 'Klinik',
      alamat: 'Jl. Pramuka No 27, Kemiling - Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK KELUARGA SEHAT BANDAR LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jl. Teuku Cik Ditiro No. 24 Ruko Wisma Mas, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK KIMIA FARMA WAY HALIM',
      jenis: 'Klinik',
      alamat: 'Jl. Arif Rahman Hakim Perum BTN III Blok TR No.2, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK KOSASIH TIRTAYASA',
      jenis: 'Klinik',
      alamat: 'Jl. Pangeran Tirtayasa No.8, Sukabumi, Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK LAB KIMIA FARMA GAJAH MADA',
      jenis: 'Klinik',
      alamat: 'Jl. Gajah Mada No.60, RW.41, Tj. Agung Raya, Kec. Tanjungkarang Timur, Kota Bandar Lampung, Lampung',
    },
    {
      nama_faskes: 'KLINIK MOROTAI PATOLOGI',
      jenis: 'Klinik',
      alamat: 'Jl. Morotai Jagabaya III, Kota Bandar Lampung, Lampung',
    },
    {
      nama_faskes: 'KLINIK POLDA BIDOKKES LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jalan Dokter Warsito, Kupang Kota, Kec. Tlk. Betung Utara, Kota Bandar Lampung, Lampung 35221',
    },
    {
      nama_faskes: 'KLINIK PRATAMA KOSASIH KEMILING',
      jenis: 'Klinik',
      alamat: 'Jl. Teuku Cik Ditiro Blok E No 4 Beringin Raya, Kemiling, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK PRATAMA LAMPUNG SEHAT',
      jenis: 'Klinik',
      alamat: 'Jl. Ikan Belida No 78/80 Pesawahan, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK PRATAMA PTPN7 KANTOR DIREKSI',
      jenis: 'Klinik',
      alamat: 'Jl. Teuku Umar No.300 Kedaton Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK PRATAMA REGINA PUTRI HUSADA',
      jenis: 'Klinik',
      alamat: 'Jl. P. Batam IV No.9, Way Halim Permai, Kec. Way Halim, Kota Bandar Lampung, Lampung 35133',
    },
    {
      nama_faskes: 'KLINIK RAGOM KENCANA',
      jenis: 'Klinik',
      alamat: 'Jl. Abdi Negara, Gulak Galik, Kec. Tlk. Betung Utara, Kota Bandar Lampung, Lampung 35211',
    },
    {
      nama_faskes: 'KLINIK ROMULYA MEDICAL CENTRE',
      jenis: 'Klinik',
      alamat: 'Jl. Ratu Dibalau No. 88 Way Kandis Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK RUTAN KELAS 1 BANDARLAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jalan Ryacudu Way Hui Sukarame Bandarlampung',
    },
    {
      nama_faskes: 'KLINIK SPN POLDA LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jl. Untung Suropati No.1, Beringin Raya, Kec. Kemiling, Kota Bandar Lampung, Lampung 35155',
    },
    {
      nama_faskes: 'KLINIK TELKOMEDIKA HEALTH CENTER LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jl. Sultan Agung No.1 Sepang Jaya, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK TELUK SEHAT MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. RE Martadinata, Keteguhan, Teluk Betung Timur, Bandar Lampung',
    },
    {
      nama_faskes: 'KLINIK UTAMA KEDAMAIAN MEDIKA FARMA',
      jenis: 'Klinik',
      alamat: 'Jl. Putri Balau Ruko No.1-3B, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'POLIKLINIK SATBRIMOB POLDA LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jl. KS. Tubun No.38 Bandar Lampung 35127',
    },
    {
      nama_faskes: 'KLINIK POLRESTA BANDAR LAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jl. Mayjen MT Haryono, Gotong Royong, Kec. Tj. Karang Pusat, Kota Bandar Lampung, Lampung 35119',
    },
  ],

  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'DPP DR. HENSEN TOVIC',
      jenis: 'PMD',
      alamat: 'Jl. A. Yani No 33',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER DR. BOY ZAGHLUL ZAINI, M.KES',
      jenis: 'PMD',
      alamat: 'Jl. Ki Maja Blok AA-7 Way Halim, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'DR. ERFIA AIDIANI',
      jenis: 'PMD',
      alamat: 'Jl. P. Legundi No.234A',
    },
    {
      nama_faskes: 'DR. MIRA INDRIYANI',
      jenis: 'PMD',
      alamat: 'Jl. Ryacudu Perum Korpri Blok',
    },
    {
      nama_faskes: 'DR. NILA KENTJANA SAHIR',
      jenis: 'PMD',
      alamat: 'Jl. Ryacudu No.33A',
    },
    {
      nama_faskes: 'DR. TRIA YUNE ERIARTASARI',
      jenis: 'PMD',
      alamat: 'Jl. Pulau Morotai No.38',
    },
    {
      nama_faskes: 'DR. VERA RUSMITA',
      jenis: 'PMD',
      alamat: 'Jl. Ryacudu No.3 LK II',
    },
    {
      nama_faskes: 'DR. EVI KURNIAWATI',
      jenis: 'PMD',
      alamat: 'Jl. Anggun Cik Tunggal No.02',
    },
    {
      nama_faskes: 'DR. ENI SUHESTI',
      jenis: 'PMD',
      alamat: 'Jl. Tamin Gg. Budiman II No 26',
    },
    {
      nama_faskes: 'DR. ARIF YULIZAR (APOTEK ALFARIZI)',
      jenis: 'PMD',
      alamat: 'Jl. Teuku Cik Ditiro, Perum Wismamas Blok E1 No. 9, Beringin Raya, Kec. Kemiling, Kota Bandar Lampung, Lampung 35155',
    },
    {
      nama_faskes: 'DR. ROBERT SIMANJUNTAK, S.PA (APOTIK CLARA)',
      jenis: 'PMD',
      alamat: 'Jl. Griya Makmur No.11, Way Halim Permai, Kec. Way Halim, Kota Bandar Lampung, Lampung 35131',
    },
    {
      nama_faskes: 'DR. ASTUTI (APOTIK SURYA HUSADA)',
      jenis: 'PMD',
      alamat: 'Jl. Imam Bonjol No.12, Langkapura, Kota Bandar Lampung',
    },
    {
      nama_faskes: 'DR. ABDULLAH',
      jenis: 'PMD',
      alamat: 'Jl. Yos Sudarso No. 4, Panjang Utara, Bandar Lampung',
    },
    {
      nama_faskes: 'DR. ADITYA',
      jenis: 'PMD',
      alamat: 'Jl. Yos Sudarso No.290 Panjang, Bandar Lampung',
    },
    {
      nama_faskes: 'DR. AMRAN',
      jenis: 'PMD',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'DR. ANDRIYAN SATYA, SP.PD (APOTEK ENGGAL)',
      jenis: 'PMD',
      alamat: 'Jl. Raden Intan No.122, Pelita, Enggal, Kota Bandar Lampung, Lampung 35213',
    },
    {
      nama_faskes: 'DR. CHANDRA TESSY',
      jenis: 'PMD',
      alamat: 'Jl. Yos Sudarso, RT.01, Tlk. Betung, Kec. Panjang, Kota Bandar Lampung, Lampung 35241',
    },
    {
      nama_faskes: 'DR. CIKA NAYA GUSNISA',
      jenis: 'PMD',
      alamat: 'Jl. Ikan Sebelah No.21 Pesawahan, Teluk Betung Selatan Bandar Lampung',
    },
    {
      nama_faskes: 'DR. DHINI',
      jenis: 'PMD',
      alamat: 'Jl. Imam Bonjol Gg. Sultan Anom No. 45A, Langkapura',
    },
    {
      nama_faskes: 'DR. DJOHAN LIUS',
      jenis: 'PMD',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'DR. HERY DJONI',
      jenis: 'PMD',
      alamat: 'Jl. Ikan Tongkol No.4, Pesawahan, Kec. Telukbetung Selatan, Kota Bandar Lampung, Lampung 35221',
    },
    {
      nama_faskes: 'DR. HINDUN',
      jenis: 'PMD',
      alamat: 'Jl. Hayam Wuruk No.122 Kelurahan Kebon Jeruk Kecamatan Tanjungkarang Timur Bandar Lampung',
    },
    {
      nama_faskes: 'DR. INDRA SARI AULIA',
      jenis: 'PMD',
      alamat: 'Jl. Sriwijaya Enggal',
    },
    {
      nama_faskes: 'DR. MARJOKO',
      jenis: 'PMD',
      alamat: 'Jl. Laksamana R.E. Martadinata No.1, Kota Karang, Tlk. Betung Barat, Kota Bandar Lampung, Lampung 35237',
    },
    {
      nama_faskes: 'DR. MAYANG RATNAPENI',
      jenis: 'PMD',
      alamat: 'Jl. Ryacudu Blok C, Korpri Raya, Kec. Sukarame, Kota Bandar Lampung, Lampung 35132',
    },
    {
      nama_faskes: 'DR. NOVA',
      jenis: 'PMD',
      alamat: 'Jl. Laksamana R.E. Martadinata No.6, Keteguhan, Tlk. Betung Barat, Kota Bandar Lampung, Lampung 35235',
    },
    {
      nama_faskes: 'DR. PAULUS',
      jenis: 'PMD',
      alamat: 'Jl. Komplek Bumi Asri Blok. 7 No.25 Bandar Lampung',
    },
    {
      nama_faskes: 'DR. SEPTY, M.KES.',
      jenis: 'PMD',
      alamat: 'Jl. Hayam Wuruk No.42/52 Kelurahan Kebon Jeruk Kec. Tanjungkarang Timur Bandar Lampung',
    },
    {
      nama_faskes: 'DR. SRI MARIA',
      jenis: 'PMD',
      alamat: 'Jl. Purnawirawan No.44 Gunung Terang, Langkapura',
    },
    {
      nama_faskes: 'DR. SYAHRUL',
      jenis: 'PMD',
      alamat: 'Tj. Raya, Kec. Tj. Karang Timur, Kota Bandar Lampung, Lampung 35227',
    },
    {
      nama_faskes: 'DR. THERA',
      jenis: 'PMD',
      alamat: 'Jalan Garuda, Pinang Jaya, Kec. Kemiling, Kota Bandar Lampung, Lampung 35153',
    },
    {
      nama_faskes: 'DR. WIDI PRABANTA (APOTEK ENGGAL)',
      jenis: 'PMD',
      alamat: 'Jl. Raden Intan No.122, Pelita, Enggal, Kota Bandar Lampung, Lampung 35213',
    },
    {
      nama_faskes: 'DR. Y. NATANAEL',
      jenis: 'PMD',
      alamat: 'Jl. Yos Sudarso No.38, Bumi Waras, Kec. Bumi Waras, Kota Bandar Lampung, Lampung 35226',
    },
    {
      nama_faskes: 'DR. YUDISTIRA',
      jenis: 'PMD',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'K24 ENDRO / DR. LIANA',
      jenis: 'PMD',
      alamat: 'Apotek K24 Endro Suratmin, Harapan Jaya, Kec. Sukarame, Kota Bandar Lampung, Lampung 35131',
    },
    {
      nama_faskes: 'DR. LENI',
      jenis: 'PMD',
      alamat: 'Jln. Tirtayasa No 89 A Sukabumi',
    },
    {
      nama_faskes: 'DR. RAHMI LISA',
      jenis: 'PMD',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'DR. DESMAYANTI BAHRI',
      jenis: 'PMD',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'DR. SILVIA MARISCHA',
      jenis: 'PMD',
      alamat: 'Jln. Ryacudu Blok D No 17 Korpri Raya Kec. Sukarame',
    },
    {
      nama_faskes: 'DR. SITI MILA',
      jenis: 'PMD',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'DR. GILDA',
      jenis: 'PMD',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'DR. LUSIA EMI ARSI',
      jenis: 'PMD',
      alamat: 'Jln. Teuku Cik Ditiro Perum Wisma Mas Blok E 1 No 9 Beringin Raya Kec. Kemiling',
    },
    {
      nama_faskes: 'DR. ENDANG ROSANTI',
      jenis: 'PMD',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'DR. PUTU',
      jenis: 'PMD',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'DR. RUDOLF SEMBIRING',
      jenis: 'PMD',
      alamat: 'Bandar Lampung',
    },
    {
      nama_faskes: 'DR. MELDA DASEPTA',
      jenis: 'PMD',
      alamat: 'Jl. Pulau Singkep Gg. Pujas 2',
    },
  ],

  // ── 4. BBKPM-BPKMB-P4 ───────────────────────────────────────
  'BBKPM-BPKMB-P4': [],
};

// ─────────────────────────────────────────────────────────────
// TEMPLATE KOTA BARU 
// ─────────────────────────────────────────────────────────────
//
// const METRO = {
//   kota: 'Kota Metro',
//   provinsi: 'Lampung',
//   UPTPAS: [],
//   Klinik: [],
//   PMD: [],
//   'BBKPM-BPKMB-P4': [],
// };
//
// const LAMPUNG_SELATAN = {
//   kota: 'Kabupaten Lampung Selatan',
//   provinsi: 'Lampung',
//   UPTPAS: [],
//   Klinik: [],
//   PMD: [],
//   'BBKPM-BPKMB-P4': [],
// };

// ─────────────────────────────────────────────────────────────
// DAFTAR SEMUA KOTA 
// ─────────────────────────────────────────────────────────────
const allCities = [
  BANDAR_LAMPUNG,
  // METRO,
  // LAMPUNG_SELATAN,
];

// ─────────────────────────────────────────────────────────────
// FUNGSI SEED UTAMA
// ─────────────────────────────────────────────────────────────
async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/tbcare');
    console.log('✅ Terhubung ke MongoDB');

    const jenisKeys = ['UPTPAS', 'Klinik', 'PMD', 'BBKPM-BPKMB-P4'];
    let totalUpserted = 0;
    let totalSkipped  = 0;

    for (const city of allCities) {
      console.log(`\n📍 Memproses: ${city.kota}, ${city.provinsi}`);

      for (const jenis of jenisKeys) {
        const records = city[jenis] ?? [];

        if (records.length === 0) {
          console.log(`   ⏭  ${jenis}: tidak ada data, dilewati`);
          continue;
        }

        let upserted = 0;
        let skipped  = 0;

        for (const item of records) {
          const filter = {
            nama_faskes: item.nama_faskes,
            jenis: item.jenis,
          };

          const update = {
            $setOnInsert: {
              nama_faskes: item.nama_faskes,
              jenis: item.jenis,
              alamat: item.alamat,
              jam_buka: '-',
              no_telepon: '-',
              gambar_url: null,
            },
          };

          const result = await HealthService.updateOne(filter, update, { upsert: true });

          if (result.upsertedCount > 0) {
            upserted++;
          } else {
            skipped++;
          }
        }

        totalUpserted += upserted;
        totalSkipped  += skipped;
        console.log(`   ✔  ${jenis}: ${upserted} ditambahkan, ${skipped} sudah ada (dilewati)`);
      }
    }

    console.log('\n─────────────────────────────────');
    console.log(`🎉 Seeder selesai!`);
    console.log(`   Total ditambahkan : ${totalUpserted}`);
    console.log(`   Total dilewati    : ${totalSkipped}`);
    console.log('─────────────────────────────────\n');
  } catch (err) {
    console.error('ERROR seed:', err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Koneksi MongoDB ditutup');
  }
}

seed();