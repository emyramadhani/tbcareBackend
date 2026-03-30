'use strict';

/**
 * Seeder Data Fasilitas Kesehatan TBCare
 * Sumber: Data Dasar Fasyankes Provinsi Lampung (Update Nov-Des 2025)

 * Cara menjalankan:
 * node src/seeders/seed.js
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
      nama_faskes: 'LAPAS PEREMPUAN KELAS II A BANDAR LAMPUNG',
      jenis: 'UPTPAS',
      alamat: 'Jl. Ryacudu, Wayhui, Sukarame, Bandar Lampung',
    },
    {
      nama_faskes: 'RUTAN KELAS I BANDAR LAMPUNG',
      jenis: 'UPTPAS',
      alamat: 'Jalan Ryacudu Way Hui Sukarame Bandarlampung',
    },
    {
      nama_faskes: 'LAPAS NARKOTIKA KELAS II A BANDAR LAMPUNG',
      jenis: 'UPTPAS',
      alamat: '"Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung Kota Bandar Lampung Prov. Lampung"',
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
// DATA — KOTA METRO
// ─────────────────────────────────────────────────────────────

const METRO = {
  kota: 'Kota Metro',
  provinsi: 'Lampung',

  // ── 1. UPTPAS ────────────────────────────────────────────────
  UPTPAS: [
    {
      nama_faskes: 'LAPAS KELAS II A METRO',
      jenis: 'UPTPAS',
      alamat: 'Jl. Ahmad Yani No.199, Iringmulyo, Kec. Metro Timur, Kota Metro, Lampung',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],

  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'KLINIK MUHAMMADIYAH UAD',
      jenis: 'Klinik',
      alamat: 'Jl. Budi Utomo No. 42 Margorejo, Metro Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SANTA MARIA',
      jenis: 'Klinik',
      alamat: 'Jl. Sosrosudarmo No. 2, Kel. Imopuro, Kec. Metro Pusat',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'MUHAMMADIYAH HADIMULYO',
      jenis: 'Klinik',
      alamat: 'Jalan Imam Bonjol No. 102, Kel. Hadimulyo Barat, Kec. Metro Pusat, Kota Metro',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'HADI WIJAYA',
      jenis: 'Klinik',
      alamat: 'Jl. Diponegoro No. 22, Hadimulyo Timur, Metro Pusat, Lampung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK GLOBAL MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Veteran No. 27, RT 007/RW 01, Kel. Hadimulyo Barat, Kec. Metro Pusat, Lampung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK LAODIKIA',
      jenis: 'Klinik',
      alamat: 'Jl. Banteng No. 47, Kelurahan Hadimulyo Timur, Metro Pusat, Kota Metro',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'POLKES 02.10.08/METRO',
      jenis: 'Klinik',
      alamat: 'Jl. Imam Bonjol No. 89/22, Hadimulyo Barat, Metro Pusat',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK GRIYA SEHAT TERPADU',
      jenis: 'Klinik',
      alamat: 'Jalan Hassanudin No. 5, Kelurahan Imopuro',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BHAYANGKARA POLRES METRO',
      jenis: 'Klinik',
      alamat: 'Jalan Raden Intan No. 26, Kel. Imopuro',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'METRO MEDICAL CENTRE',
      jenis: 'Klinik',
      alamat: 'Jl. AH. Nasution No. 63, RT/RW 012/004, Yosorejo',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK MUHAMMADIYAH METRO TIMUR',
      jenis: 'Klinik',
      alamat: 'Jl. KH. Dewantara No. 52, Iringmulyo, Kec. Metro Timur, Kota Metro, Lampung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK CIKO',
      jenis: 'Klinik',
      alamat: 'Jl. Soekarno Hatta No. 76-78, Kel. Mulyojati, Metro Barat',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK GRIYA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Nunggal Sari RT 15 RW 04, Kel. Sumbersari Bantul',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],

  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'PRAKTEK MANDIRI DOKTER ANDREAS INFIANTO, MM., SP.P(K)., FISR',
      jenis: 'PMD',
      alamat: 'Jl. Brigjend Sutiyoso No. 38 B/C, Kota Metro',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTEK MANDIRI DR. RIA PUTRIONO',
      jenis: 'PMD',
      alamat: 'Jl. TPA RT 34 RW 09, Kelurahan Karangrejo, Kecamatan Metro Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. LUKMAN HAKIM WIDJAYA',
      jenis: 'PMD',
      alamat: 'Jl. Mayjend. Ryacudu Blok C',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. ADE KURNIAWAN',
      jenis: 'PMD',
      alamat: 'Jl. Khairbras No. 21',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],

  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};

// ─────────────────────────────────────────────────────────────
// DATA — LAMPUNG SELATAN
// ─────────────────────────────────────────────────────────────

const LAMPUNG_SELATAN = {
  kota: 'Kabupaten Lampung Selatan',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  // Catatan: sheet UPTPAS berisi data seluruh Lampung, hanya
  // LAPAS KELAS II A KALIANDA yang berasal dari Lampung Selatan.
  UPTPAS: [
    {
      nama_faskes: 'LAPAS KELAS II A KALIANDA',
      jenis: 'UPTPAS',
      alamat: 'Jl. Lintas Sumatera No. KM 05, Negeri Pandan, Kec. Kalianda, Kabupaten Lampung Selatan, Lampung',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'KLINIK RAHMAWATI SEHAT ABADI',
      jenis: 'Klinik',
      alamat: 'Dusun Tanjung Waras RT 04 RW 01, Merak Batin, Natar, Lampung Selatan, Lampung 35362',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK ANGGATRA',
      jenis: 'Klinik',
      alamat: 'Jl. P. Senopati Gg. Tamin, Jatimulyo, Jati Agung, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BHAYANGKARA POLRES LAMPUNG SELATAN',
      jenis: 'Klinik',
      alamat: 'Jl. Z.A. Pagar Alam No. 142, Kalianda 35513',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK CHOIRIAH',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Talang Jawa, Bangun Rahayu RT 001/RW 003, Desa Neglasari, Kec. Katibung, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK DR BAGUS PERDANA',
      jenis: 'Klinik',
      alamat: 'Dusun Bangun Rejo, Desa Neglasari, Kec. Katibung, Kab. Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK DUA PUTRI JAYA',
      jenis: 'Klinik',
      alamat: 'Jl. Ir. Sutami KM 30, Desa Malangsari, Kec. Tanjung Sari, Kab. Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA PERMATAHATI',
      jenis: 'Klinik',
      alamat: 'Jl. Simpang Bayur, Desa Tanjungan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK MUBARAK',
      jenis: 'Klinik',
      alamat: 'Jln. Candimas 2 Gg. Sepakat No. 096 RT 17/RW 007',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT JALAN DOA IBU',
      jenis: 'Klinik',
      alamat: 'Perumnas Bumi Way Urang Blok B 12, Kalianda, Kabupaten Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK INDAI BUNDA',
      jenis: 'Klinik',
      alamat: 'Desa Penengahan RT/RW 002/002, Kecamatan Penengahan, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SYIFA KASIH MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Budi Santoso, Dusun Sidodadi RT/RW 001/007, Desa Jati Baru, Kec. Tanjung Bintang, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLININ SUMBERSION',
      jenis: 'Klinik',
      alamat: 'Desa Sumber Jaya, Kec. Jati Agung, Kab. Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SEANA',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Sumatera, Desa Rangai Tri Tunggal, Kecamatan Katibung, Kabupaten Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK AL-IKHLAS',
      jenis: 'Klinik',
      alamat: 'Jl. Nusa Indah No. 1217, Dusun Sukamaju, Desa Natar',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'BINA HUSADA LAM SEL',
      jenis: 'Klinik',
      alamat: 'Dusun 2 Bulok RT 004 RW 002, Desa Bulok, Kecamatan Kalianda, Kab. Lampung Selatan 35551',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA SIDOMARI',
      jenis: 'Klinik',
      alamat: 'Dusun Tri Rejo, Desa Sinar Rejeki',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK LOKA REHABILITASI BNN KALIANDA',
      jenis: 'Klinik',
      alamat: 'Jalan Stadion Jati Rukun, Kelurahan Waylubuk',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK CENDANA',
      jenis: 'Klinik',
      alamat: 'Jl. Cendana II No. 5, Jatimulyo, Jati Agung, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SUMBER SEHAT',
      jenis: 'Klinik',
      alamat: 'Dusun 4, Desa Sidoharjo, Kecamatan Way Panji, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SYIFA KASIH KARANG PUCUNG',
      jenis: 'Klinik',
      alamat: 'Jl. Atma Wikarta, Dusun Sukadamai, Desa Karang Pucung, Kec. Way Sulan, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINKIK PRATAMA AISHA',
      jenis: 'Klinik',
      alamat: 'Perumnas Mustika Raya 1 Blok D1 No. 4',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK KASIH IBU NURLAILA KOMALA DEWI',
      jenis: 'Klinik',
      alamat: 'Way Gelam RT/RW 002/001',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK YUSRON',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Kecapi RT 09 RW 05, Desa Kecapi, Kecamatan Kalianda, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA AZZAHRA HUSADA',
      jenis: 'Klinik',
      alamat: 'Pardasuka II RT 001 RW 002, Desa Pardasuka',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK GRAHA PURI HUSADA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Bumi Sari No. 217, Desa Bumi Sari',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RESTU PIRNAWAT',
      jenis: 'Klinik',
      alamat: 'Dusun 5, Desa Sidoharjo, Kecamatan Way Panji, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RI MITRA SEHAT MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Dusun Cinta Jaya RT/RW 01/01, Kelurahan Wawasan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KARUNIA SEHAT',
      jenis: 'Klinik',
      alamat: 'Jati Bening RT/RW 002/007, Desa Pasuruan, Kecamatan Penengahan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK CITRA',
      jenis: 'Klinik',
      alamat: 'Serdang 3 RT 004 RW 003, Tanjung Bintang, Lampung Selatan 35361',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'ASSALAM MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Pemanggilan, Umbul Thoif, Kecamatan Natar, Kab. Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SUMBERSION WAWASAN',
      jenis: 'Klinik',
      alamat: 'Desa Wawasan, Kecamatan Tanjung Sari, Kabupaten Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK ANUGRAH MEDICA',
      jenis: 'Klinik',
      alamat: 'Desa Sidoasri RT/RW 001/001, Kecamatan Candipuro, Kabupaten Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK DARA PETAK',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Branti KM. 18, Desa Bumisari, Natar, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA JASMINE MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Soekarno Hatta, Desa Babatan, Kecamatan Katibung, Kabupaten Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK DOKTER KITA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Sidomulyo, Desa Seloretno, Kec. Sidomulyo, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK KHAYLA ALMEERA',
      jenis: 'Klinik',
      alamat: 'Jl. Trans Ketapang, Bangunrejo, Kecamatan Ketapang, Kabupaten Lampung Selatan 35596',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK DR. IDO AKBAR',
      jenis: 'Klinik',
      alamat: 'Jl. Trans Ketapang RT/RW 015/003, Desa Sripendowo, Kec. Ketapang, Kab. Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RAFFASYA SENTRA MEDIKA KARANG ANYAR',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Karang Anyar, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BHAKTI KASIH',
      jenis: 'Klinik',
      alamat: 'Dusun III, Marga Agung, Kecamatan Jati Agung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA NUGRAHA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Palas, Desa Bangunan RT/RW 004/003, Kode Pos 35593',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SURYA CANDI MEDIKA',
      jenis: 'Klinik',
      alamat: 'Titiwangi, Candipuro, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA CENTRO',
      jenis: 'Klinik',
      alamat: 'Jl. Ir. Sutami KM. 20, Purwodadi Simpang, Tanjung Bintang, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK UTAMA SERDANG',
      jenis: 'Klinik',
      alamat: 'Dusun 4, Desa Serdang, Jl. Pulau Batam Raya No. 29',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK DR. NORA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Katibung No. 45 RT/RW 003/001, Desa Tanjung Ratu, Kecamatan Katibung, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'LEMATANG MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Ir. Sutami No. 153, Desa Lematang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BUNDA TIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Desa Pamulihan No. 22, Dusun Tegalsari RT 001 RW 002, Kec. Way Sulan, Lampung Selatan 35452',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'POSKES 02.10.15 LAMPUNG SELATAN',
      jenis: 'Klinik',
      alamat: 'Jl. Trans Sumatra KM. 54, Kelurahan Kedaton, Kecamatan Kalianda, Kabupaten Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK NGUDI WALUYO',
      jenis: 'Klinik',
      alamat: 'Jalan Sri Bungur, Desa Jatibaru',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'ASY SYIFA KASIH',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Suka Damai, Dusun 9, Desa Sukadamai, Kecamatan Natar, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA AN NISSA',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Timur, Desa Pematang Pasir, Kec. Ketapang, Kab. Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RAIHANA',
      jenis: 'Klinik',
      alamat: 'Jl. Trans Sumatera, Wai Lubuk Kamal RT 001 Lingkungan 03, Kecamatan Kalianda, Kabupaten Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RESTU',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Sumatera No. 197, Desa Merak Batin, Kec. Natar, Kab. Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA WAREN',
      jenis: 'Klinik',
      alamat: 'Jalan Raya Sidomakmur No. 235 RT/RW 02/04, Sidomakmur, Kecamatan Way Panji, Kabupaten Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK MEDISTRA RAYA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Suban, Simpang Way Laga RT/RW 002/011, Desa Tanjung Baru, Kec. Merbau Mataram, Kab. Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK KALIANDA SEHAT',
      jenis: 'Klinik',
      alamat: 'Jl. Raden Intan No. 25, Kelurahan Way Urang, Kec. Kalianda, Kab. Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK KENANGA',
      jenis: 'Klinik',
      alamat: 'Jalan Kenanga RT 15, Dusun IV, Sarirejo, Natar',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'TONKES YONIF 143/TWEJ',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Timur Sumatera',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'PRAKTEK MANDIRI DOKTER DJOHARDI',
      jenis: 'PMD',
      alamat: 'Desa Belambangan, Kecamatan Penengahan, Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER CLARA YULIA WASKITO',
      jenis: 'PMD',
      alamat: 'Dusun 2A, Desa Sumber Jaya, RT 001 RW 003',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK DOKTER DARUL ASWAN',
      jenis: 'PMD',
      alamat: 'Jl. Lintas Sumatera, Desa Tanjungsari 4',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER DR. ARI INDRA KUSWARA',
      jenis: 'PMD',
      alamat: 'Dsn. Sumber Sari II RT 013 RW 004, Desa Mandah',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DR. RENI ZURAIDA, M.SI., SP.KKLP',
      jenis: 'PMD',
      alamat: 'Jln. Padat Karya No. 282 RT 06/RW 02, Dusun Tanjung Waras, Desa Merak Batin, Kecamatan Natar, Kab. Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. SUTJI S.I. MENDROFA',
      jenis: 'PMD',
      alamat: 'Jl. Raya Lintas Timur KM 0,5 B',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. HENI AFRIDAH',
      jenis: 'PMD',
      alamat: 'Candimas, Kec. Natar',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. NOVY SUGIARTI',
      jenis: 'PMD',
      alamat: 'Jl. Branti Raya No. 24',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. TRI RAHAYU',
      jenis: 'PMD',
      alamat: 'Jl. Desa Suka Pura',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. DIAH ANJARINI',
      jenis: 'PMD',
      alamat: 'Jl. Sidoharjo',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. SUSLINA',
      jenis: 'PMD',
      alamat: 'Jl. Karang Anyar',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. GILDA PUTRI ANGGRAINI',
      jenis: 'PMD',
      alamat: 'Jl. Ryacudu, Komplek Lapas',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. DEWI SINTAWATI',
      jenis: 'PMD',
      alamat: 'Jl. Raya Suban No. 111',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. YUYUN ERNAWATI',
      jenis: 'PMD',
      alamat: 'Jl. Raya Sukadamai No. 25',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. LIESTYA RISNAWATI',
      jenis: 'PMD',
      alamat: 'Desa Belambangan RT 01/RW 01, Desa Belambangan, Kec. Penengahan, Kab. Lampung Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};

// ─────────────────────────────────────────────────────────────
// DATA — KABUPATEN LAMPUNG TIMUR
// ─────────────────────────────────────────────────────────────
 
const LAMPUNG_TIMUR = {
  kota: 'Kabupaten Lampung Timur',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  // Catatan: sheet UPTPAS berisi data seluruh Lampung, hanya
  // RUTAN KELAS II B SUKADANA yang berasal dari Lampung Timur.
  UPTPAS: [
    {
      nama_faskes: 'RUTAN KELAS II B SUKADANA',
      jenis: 'UPTPAS',
      alamat: 'Ps. Sukadana, Sukadana, Kabupaten Lampung Timur, Lampung',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'KLINIK HATIMAN',
      jenis: 'Klinik',
      alamat: 'Jl. Joyo Ganjar, Taman Bogo, Kec. Purbolinggo, Kab. Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SEKAMPUNG MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Sekampung, Desa Giri Klopomulyo RT 001/RW 001, Kecamatan Sekampung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK NAHDLATUL ULAMA',
      jenis: 'Klinik',
      alamat: 'Dusun II, Desa Tanjung Kesuma',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP CEMPAKA MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Dusun 3 RT 001, Desa Braja Harjosari',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RAWAT INAP AHMAD YANI',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Timur RT 005/RW 002, Desa Purworejo, Kec. Pasir Sakti, Kab. Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK NUR AZIZAH',
      jenis: 'Klinik',
      alamat: 'Dusun III RT 010 RW 007, Desa Kota Raman, Kec. Raman Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'ESHA MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Dusun V RT 018 RW 009, Desa Sriminosari, Kecamatan Labuhan Maringgai, Kab. Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK WALUYO HUSODO',
      jenis: 'Klinik',
      alamat: 'Desa Taman Asri, Dusun IV',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: "KLINIK AS'SYIFA",
      jenis: 'Klinik',
      alamat: 'RT/RW 007/004, Dusun IV, Desa Bumi Ayu, Kecamatan Sukadana, Kabupaten Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK TAKHIR',
      jenis: 'Klinik',
      alamat: 'Dusun IV, Desa Mataram Baru, Pos 34199',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK VITA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Desa Mataram Baru, Kecamatan Mataram Baru, Kabupaten Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK MARDI WALUYO GUNUNG PASIR JAYA',
      jenis: 'Klinik',
      alamat: 'Jalan Ir. Sutami KM 39, Desa Gunung Pasir Jaya, Kecamatan Sekampung Udik, Kabupaten Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK ENGGAL WARAS',
      jenis: 'Klinik',
      alamat: 'Dusun II Sripendowo RT/RW 05/03, Kec. Bandar Sribhawono, Kab. Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DEVA MEDICA',
      jenis: 'Klinik',
      alamat: 'Jl. Ir. Sutami KM 46, Dusun Rejo Makmur RT 10 RW 03, Desa Sidorejo, Kecamatan Sekampung Udik, Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK HANIFA',
      jenis: 'Klinik',
      alamat: 'Dusun II RT 004 RW 002, Desa Raman Endra, Kecamatan Raman Utara, Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PERMATA KELUARGA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Panjang Sribhawono, Dusun VI RT/RW 028/011, Gg. Kanguru, Desa Sribhawono, Kec. Bandar Sribhawono, Kab. Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK POLRES LAMPUNG TIMUR',
      jenis: 'Klinik',
      alamat: 'Jl. Letnan Adnan Sanjaya No. 9',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'SKS (SINAR KELUARGA SEHAT)',
      jenis: 'Klinik',
      alamat: 'Dusun IV Karang Tengah RT 017/RW 006, Desa Braja Luhur, Kec. Braja Selebah',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK MWC NAHDATUL ULAMA',
      jenis: 'Klinik',
      alamat: 'Desa Sidorejo, Kecamatan Sekampung Udik, Kabupaten Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK MITRA KELUARGA SEHAT',
      jenis: 'Klinik',
      alamat: 'Dusun 3, Desa Sadar Sriwijaya, Kecamatan Bandar Sribhawono, Kabupaten Lampung Timur 34389',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SINA MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'RT 29 RW 10, Dusun VI, Desa Srimenanti',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK ADITYA PUTRI',
      jenis: 'Klinik',
      alamat: 'Dusun Cerlang RT/RW 001/005, Desa Sukaraja Tiga, Kecamatan Marga Tiga, Kabupaten Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK KLIMER MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Dusun VI RT 032 RW 006, Desa Mulyosari, Kecamatan Pasir Sakti, Kabupaten Lampung Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK MUARA JAYA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'DR. HARIYANTI SUBAGIO',
      jenis: 'PMD',
      alamat: 'Jl. Gunung Terang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. SATYA PURNA NUGRAHA',
      jenis: 'PMD',
      alamat: 'Jl. Letkol Arifin RI',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. MOHD TAUFAN PERMANA',
      jenis: 'PMD',
      alamat: 'Kuala',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. PUTRI WISATARI',
      jenis: 'PMD',
      alamat: 'Jl. Merdeka No. 14',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. ERWAN YULIANTO',
      jenis: 'PMD',
      alamat: 'PT Fermentech Indonesia',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. LIA FEBRIYANI',
      jenis: 'PMD',
      alamat: 'Lintas Timur Sumatera, Dusun V',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. SANGGAM MANIHAR S',
      jenis: 'PMD',
      alamat: 'Gunung Mekar',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. IRA IRAWAN',
      jenis: 'PMD',
      alamat: 'Jl. Batanghari No. 141, Dusun V',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. FEBBY FELITA HARSONO',
      jenis: 'PMD',
      alamat: 'Jl. Soekarno-Hatta No. 101',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. EKA FAJAR SUMIRAT',
      jenis: 'PMD',
      alamat: 'Jl. Raya Sukaraja Nuban, Dusun',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. DEVI ARIA LUTHFIANA',
      jenis: 'PMD',
      alamat: 'Jalan Hasanudin',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. MELI FITRIYANI',
      jenis: 'PMD',
      alamat: 'Tulung Balak',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. DEDI MULYADI',
      jenis: 'PMD',
      alamat: 'Jl. Lintas Timur',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. DESNA DAMAYANTI',
      jenis: 'PMD',
      alamat: 'Dusun Sawojajar',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. YUKI ARVINA',
      jenis: 'PMD',
      alamat: 'Sekampung Udik',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};

// ─────────────────────────────────────────────────────────────
// DATA — KABUPATEN MESUJI
// ─────────────────────────────────────────────────────────────
 
const MESUJI = {
  kota: 'Kabupaten Mesuji',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  // Tidak ada data UPTPAS untuk Kabupaten Mesuji.
  UPTPAS: [],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'KLINIK AWAN MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. ZA. Pagar Alam, Desa Brabasan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK ASA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Desa Simpang Pematang, Kec. Simpang Pematang, Kab. Mesuji',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SENTOSA',
      jenis: 'Klinik',
      alamat: 'Jl. ZA. Pagar Alam, Simpang Mesuji, Kec. Simpang Pematang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BUNDA BALQIES',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Rawa Jitu, Desa Sidang Gunung Tiga RT 013/RW 003',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA BUNDA DARA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Poros Rawajitu, Desa Sidang Gunung Tiga RT 12 RK 02, Kec. Rawajitu Utara, Kab. Mesuji',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PURI KRISNA HUSADA',
      jenis: 'Klinik',
      alamat: 'Desa Bukoposo',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA POLRES MESUJI',
      jenis: 'Klinik',
      alamat: 'Desa Agung Batin, Kec. Simpang Pematang',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER HARIZAL HASNI',
      jenis: 'PMD',
      alamat: 'Desa Bukoposo',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. ANGGA WAHYU TRIWIBOWO',
      jenis: 'PMD',
      alamat: 'Jl. ZA. Pagar Alam No. 195',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. HARIZAL HASNI',
      jenis: 'PMD',
      alamat: 'Jl. Gajah Mada',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};

// ─────────────────────────────────────────────────────────────
// DATA — KABUPATEN PESAWARAN
// ─────────────────────────────────────────────────────────────
 
const PESAWARAN = {
  kota: 'Kabupaten Pesawaran',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  // Tidak ada data UPTPAS untuk Kabupaten Pesawaran.
  UPTPAS: [],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'KLINIK MARINIR PIABUNG',
      jenis: 'Klinik',
      alamat: 'Jl. Way Ratai, Desa Sanggi, Kec. Padang Cermin, Kab. Pesawaran',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT JALAN POLRES PESAWARAN',
      jenis: 'Klinik',
      alamat: 'Jl. Jend. A. Yani No. 17, Desa Gedong Tataan, Kecamatan Gedong Tataan, Kabupaten Pesawaran',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BERKAH BUNDA',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Sumatra KM 36, Desa Kunyayan No. 09, Kelurahan Bumi Agung, Kabupaten Pesawaran',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK ASA IBU MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Pasar Srijeki, Bangunsari, Negeri Katon, Lampung 35353',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP HIKMAH HUSADA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Sidomulyo, Desa Sidomulyo',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP AS-SHOFFA',
      jenis: 'Klinik',
      alamat: 'Jl. Jend. A. Yani No. 662, Kebagusan, Gedong Tataan, Pesawaran',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RAWAT INAP PRATAMA RIDHO HUSADA',
      jenis: 'Klinik',
      alamat: 'Jl. Sendang No. 91, Desa Bagelen, Kec. Gedong Tataan, Kab. Pesawaran',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RAWAT INAP PRATAMA RIDHO HUSADA II',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Kedondong, Desa Way Harong, Kec. Way Lima, Kab. Pesawaran',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP DEBORA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Way Ratai, Desa Sinar Harapan, Kec. Kedondong, Kab. Pesawaran',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP BERLIAN HUSADA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Kedondong, Desa Tanjung Kerta RT 001 RW 001, Kecamatan Way Khilau, Kabupaten Pesawaran',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT JALAN AZZAHRA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Pasar Baru, Kecamatan Kedondong, Kabupaten Pesawaran',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK ALFATIH MEDICAL CENTRE',
      jenis: 'Klinik',
      alamat: 'Dusun Taman Sari, Desa Mulyosari, Kec. Way Ratai, Kab. Pesawaran, Lampung',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER NUNING ERNA NINGSIH',
      jenis: 'PMD',
      alamat: 'Jl. Pasar Trisnomaju RT/RW 002/001, Desa Trisnomaju, Kec. Negeri Katon',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER DR. NENG AYU RATI PURWANI',
      jenis: 'PMD',
      alamat: 'Jl. Raya Way Ratai, Gg. Impres, RT 01 RW 01, Dusun Kecapi, Desa Padang Cermin, Kecamatan Padang Cermin, Kabupaten Pesawaran',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. SARADIAH MARIANA N',
      jenis: 'PMD',
      alamat: 'Jl. Sungai Langka, Dusun Sidoas',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};

// ─────────────────────────────────────────────────────────────
// DATA — KABUPATEN PRINGSEWU
// ─────────────────────────────────────────────────────────────
 
const PRINGSEWU = {
  kota: 'Kabupaten Pringsewu',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  // Tidak ada data UPTPAS untuk Kabupaten Pringsewu.
  UPTPAS: [],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'WELAS ASIH',
      jenis: 'Klinik',
      alamat: 'Jalan HM. Ghardi No. 95B, Ambarawa',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BAITURRAHMAH',
      jenis: 'Klinik',
      alamat: 'Jl. Desa Ambarawa KM. 02, Pekon Waluyojati, Kec. Pringsewu, Kab. Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'MAHARAJA MEDICAL CENTRE',
      jenis: 'Klinik',
      alamat: 'Jl. A. Yani Gang Rawa 2, Desa Sidoharjo, Kelurahan Sidoharjo',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'CAHAYA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jalan Joyo Dirjo No. 76, Sumber Agung, Kec. Ambarawa, Kab. Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BINA HUSADA',
      jenis: 'Klinik',
      alamat: 'Jl. Cempaka No. 94, Desa Patoman',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'SARAS MEDICA',
      jenis: 'Klinik',
      alamat: 'Dusun Sinar Lewah RT 06 RW 02, Kelurahan Adiluwih, Kecamatan Adiluwih',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK INARA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Batas, Komplek Tugu Batas, Kec. Adiluwih, Kab. Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK HARUM MELATI',
      jenis: 'Klinik',
      alamat: 'Jl. A. Yani, Desa Wates RT 001 RW 001, Kec. Gading Rejo, Pringsewu, Lampung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BHAKTI KELUARGA HUSADA',
      jenis: 'Klinik',
      alamat: 'Jl. Lingkar Utara RT 006/RW 001, Podorejo, Rejosari, Kec. Pringsewu, Kab. Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RAWAT INAP PRATAMA BANDUNG MITRA INSANI',
      jenis: 'Klinik',
      alamat: 'Jalan Lingkar, Pekon Bandungbaru, Kecamatan Adiluwih, Kabupaten Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP WILUJENG',
      jenis: 'Klinik',
      alamat: 'Jln. Patimura, Pekon Sukoharjo 2 RT/RW 04/02, Kec. Sukoharjo, Kab. Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BANYUMAS MEDICAL CENTRE (BMC)',
      jenis: 'Klinik',
      alamat: 'Jl. Krama Sentana RT 006 RW 002, Pekon Banyumas',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RAWAT INAP SILIWANGI',
      jenis: 'Klinik',
      alamat: 'Jln. Padjajaran, Pekon Siliwangi',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK AGUNG MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jln. Raya Bandar Agung, Pekon Pardasuka, Kec. Pardasuka, Kab. Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'BHAKTI MAKHGA HUSADA',
      jenis: 'Klinik',
      alamat: 'Jalan Raya Tanjung Rusia, Kec. Pardasuka, Kab. Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP SAE WARAS',
      jenis: 'Klinik',
      alamat: 'Sukoyoso RT/RW 007/004, Kecamatan Sukoharjo, Kabupaten Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA AISYAH MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Ahmad Yani No. 1A, Tambahrejo, Gadingrejo, Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SHELLA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Tambah Sari RT 003 RW 002, Pekon Tambahrejo Barat, Kec. Gadingrejo, Kab. Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RAWAT INAP PRATAMA SARASATI',
      jenis: 'Klinik',
      alamat: 'Jl. KH. Ahmad Ghardi No. 27, Ambarawa, Kecamatan Ambarawa, Kabupaten Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK AQIL MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Sukosari Gg. Mushola RT 008 RW 003, Pekon Sukoharum',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'BAKTI ANANDA',
      jenis: 'Klinik',
      alamat: 'Bandungbaru RT/RW 013/005, Kec. Adiluwih, Kab. Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA DOKTER ULINNOHA',
      jenis: 'Klinik',
      alamat: 'Jl. Ahmad Yani, Sidoharjo No. 10, Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RAWAT INAP DR. PRATIWI',
      jenis: 'Klinik',
      alamat: 'Jl. Ahmad Yani, Sidoharjo No. 10, Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP PKU MUHAMMADIYAH PRINGSEWU',
      jenis: 'Klinik',
      alamat: 'Jl. KH. Gholib Raya, Pringsewu Barat, Kecamatan Pringsewu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK RAWAT INAP SUMBER WARAS',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Wonokarto, Dusun Wonodadi, Gadingrejo',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'DR. CATUR ARIWIBOWO',
      jenis: 'PMD',
      alamat: 'Dusun Margorejo',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. SANDY SAPUTRA',
      jenis: 'PMD',
      alamat: 'Jl. Panglima Polim',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};

// ─────────────────────────────────────────────────────────────
// DATA — KABUPATEN TANGGAMUS
// ─────────────────────────────────────────────────────────────
 
const TANGGAMUS = {
  kota: 'Kabupaten Tanggamus',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  UPTPAS: [
    {
      nama_faskes: 'LAPAS KELAS II B KOTA AGUNG',
      jenis: 'UPTPAS',
      alamat: 'Way Gelang, Agung Barat, Way Gelang, Tanggamus, Kabupaten Tanggamus, Lampung 35384',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'RUTAN KELAS II B KOTA AGUNG',
      jenis: 'UPTPAS',
      alamat: 'Way Gelang, Agung Barat, Way Gelang, Tanggamus, Kabupaten Tanggamus, Lampung 35384',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'ANUGERAH BUNDA',
      jenis: 'Klinik',
      alamat: 'Jl. Raden Intan No. 58B, Pekon Sukabumi, Kec. Talangpadang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT JALAN GUNUNG SARI SEHAT',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Gunung Sari, Pekon Gunung Sari',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SOBAD HUSADA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Ciherang RT 001 RW 001 No. 33, Desa Ciherang, Kec. Gunung Alip, Kab. Tanggamus',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'ARRAHMAH',
      jenis: 'Klinik',
      alamat: 'Jln. Anshor, Dusun 3, Sinar Semendo, Kecamatan Talangpadang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA WONOSOBO',
      jenis: 'Klinik',
      alamat: 'Pekon Tanjung Kurung, Kecamatan Wonosobo, Kabupaten Tanggamus',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'ULU BELU MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Dusun Mulya Sari RT/RW 001/001, Pekon Ngarip, Kecamatan Ulu Belu, Kabupaten Tanggamus',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP HUSADA',
      jenis: 'Klinik',
      alamat: 'Jl. Raden Intan No. 3, Talang Padang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK ALHAFA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Ir. H. Juanda, Way Tuba, Kel. Kuripan, Kec. Kota Agung, Kabupaten Tanggamus',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SABILA NISA',
      jenis: 'Klinik',
      alamat: 'Jalan Raya Tekad No. 422 Blok III, Kel. Tekad',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA POLRES TANGGAMUS',
      jenis: 'Klinik',
      alamat: 'Jalan Jenderal Sudirman No. 1',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'WAHYU MEDIKA',
      jenis: 'Klinik',
      alamat: 'Pekon Lengkukai',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SEHATI',
      jenis: 'Klinik',
      alamat: 'Klinik Sehati No. 17, Kec. Gisting, Kab. Tanggamus, Lampung 35378',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK NABIL HUSADA',
      jenis: 'Klinik',
      alamat: 'Dusun Gunung Batu, Kel. Margoyoso, Kec. Sumberejo',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'ALHAFA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Ir. H. Juanda, Way Tuba, Kel. Kuripan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'POSKES 02.10.17 TANGGAMUS',
      jenis: 'Klinik',
      alamat: 'Jl. Ir. H. Juanda, Waisem, Pekon Kota Agung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK UTAMA ENGGAL WARAS',
      jenis: 'Klinik',
      alamat: 'Jln. Raya Lintas Barat No. 662, Desa Gisting Bawah, Kecamatan Gisting, Kabupaten Tanggamus',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA AN NAFII',
      jenis: 'Klinik',
      alamat: 'Pekon Kacamarga No. 372, Kec. Cukuh Balak, Kab. Tanggamus, Kode Pos 35383',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK DR. THERESIA HUTABARAT',
      jenis: 'Klinik',
      alamat: 'Jalan Raya Pasar Wonosobo, Kecamatan Wonosobo, Kabupaten Tanggamus',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK ZIYA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Banjar Negri Blok 3, Pekon Banjar Negri',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA BUNDA MARGA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Tanjung Heran No. 119, Pugung, Tanggamus',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'DOKTER PRAKTEK PERORANGAN DR. THERESIA HUTABARAT',
      jenis: 'PMD',
      alamat: 'Jalan Raya Pasar Wonosobo, Kecamatan Wonosobo, Kabupaten Tanggamus, Provinsi Lampung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. ENDANG TRIANA',
      jenis: 'PMD',
      alamat: 'Jl. Raya Gisting Bawah',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. DEASY OKTIAN',
      jenis: 'PMD',
      alamat: 'Jl. Raya Pulau Panggung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. INTEN KUMALASARI',
      jenis: 'PMD',
      alamat: 'Jl. Djamal',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. DESI OKTARIA',
      jenis: 'PMD',
      alamat: 'Jl. Ir. H. Juanda No. 79, Pekon Kota Agung',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};


// ─────────────────────────────────────────────────────────────
// DATA — KABUPATEN TULANG BAWANG BARAT (TUBABA)
// ─────────────────────────────────────────────────────────────
 
const TULANG_BAWANG_BARAT = {
  kota: 'Kabupaten Tulang Bawang Barat',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  // Tidak ada data UPTPAS untuk Kabupaten Tulang Bawang Barat.
  UPTPAS: [],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'KLINIK MITRA KELUARGA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Marga Kencana RT 012 RW 003, Kec. Tulang Bawang Udik, Kab. Tulang Bawang Barat',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DANISH MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Ratu Pengadilan No. 287, Daya Murni',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK DOKTER EDI',
      jenis: 'Klinik',
      alamat: 'Jl. Jenderal Sudirman, Daya Asri RK 05 RT 01',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'ZEBE BEATA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Pulung Kencana, Kec. Tulang Bawang Tengah, Kab. Tulang Bawang Barat',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK LOKA HUSADA',
      jenis: 'Klinik',
      alamat: 'Tiyuh Tirta Makmur RT/RW 017/005',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'BUNDA ASIH MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Timur KM 161 RT 11 RW 03, Tiyuh Indraloka Jaya',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PANARAGAN JAYA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jln. Brawijaya RK 1/RT 005, Panaragan Jaya, Kec. Tulang Bawang Tengah, Kab. Tulang Bawang Barat',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'AN NUR HUSADA',
      jenis: 'Klinik',
      alamat: 'Kelurahan Daya Murni Lingkungan 01 RT 2 RW 3, Kecamatan Tumijajar, Kabupaten Tulang Bawang Barat',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK JASA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Kibang Budi Jaya RT/RW 021/007, Kec. Lambu Kibang, Kab. Tulang Bawang Barat',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK AR RAUDAH MEDIKA',
      jenis: 'Klinik',
      alamat: 'Marga Kencana RT/RW 001/001',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK & RUMAH SUNAT TUBABA',
      jenis: 'Klinik',
      alamat: 'Desa Pulung Kencana RT 003 RW 002, Kec. Tulang Bawang Tengah, Kab. Tulang Bawang Barat',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'ZASKYA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Kagungan Ratu RT/RW 002/004, Kel. Kagungan Ratu, Kec. Tulang Bawang Udik',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'DR. WIWID DIDIK ANGGARA',
      jenis: 'PMD',
      alamat: 'Jalan Majemuk',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. SULISTIANI',
      jenis: 'PMD',
      alamat: 'Jl. Simpang Sulawesi No. 118',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. MAMI NARWATI',
      jenis: 'PMD',
      alamat: 'Jl. Poros Balam Jaya No. 115',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};

// ─────────────────────────────────────────────────────────────
// DATA — KABUPATEN TULANG BAWANG
// ─────────────────────────────────────────────────────────────
 
const TULANG_BAWANG = {
  kota: 'Kabupaten Tulang Bawang',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  // Catatan: sheet UPTPAS berisi data seluruh Lampung, hanya
  // RUTAN KELAS II B MENGGALA yang berasal dari Tulang Bawang.
  UPTPAS: [
    {
      nama_faskes: 'RUTAN KELAS II B MENGGALA',
      jenis: 'UPTPAS',
      alamat: 'Jl. Pengayoman Bawang Latak, Menggala Tengah, Menggala, Kabupaten Tulangbawang, Lampung',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'POSKESDIM 0426/TULANG BAWANG',
      jenis: 'Klinik',
      alamat: 'Jl. V Lebuh Dalem, Kelurahan Menggala Tengah, Kecamatan Menggala, Kabupaten Tulang Bawang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWA JITU MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Anggrek RT/RW 003/004, Kelurahan Gedung Karya Jitu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'MEDICAL CLINIC PT. SWEET INDOLAMPUNG',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Menggala KM 100, Site PT. SIL KM 19, Kode Pos 34597',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK MENGGALA MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Timur Sumatera, Menggala, Tulang Bawang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'MEDICAL CLINIC PT. INDOLAMPUNG PERKASA',
      jenis: 'Klinik',
      alamat: 'PT. Indolampung Perkasa KM 43',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP WIRA BHAKTI HUSADA',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Rawa Jitu, Desa Suka Bhakti RK 3 RT 13, Kec. Gedung Aji Baru, Kab. Tulang Bawang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK LANUD P.M. BUN YAMIN',
      jenis: 'Klinik',
      alamat: 'Lanud Pangeran M. Bun Yamin, Jl. Lintas Sumatera, Desa Astra Ksetra, Kecamatan Menggala, Kabupaten Tulang Bawang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'POLIKLINIK POLRES TULANG BAWANG',
      jenis: 'Klinik',
      alamat: 'Jalan Lintas Timur KM 130, Kel. Lebuh Dalem, Kec. Menggala Timur, Kab. Tulang Bawang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK NASHEHA',
      jenis: 'Klinik',
      alamat: 'Jl. Dahlia RT 12 RK 003, Kp. Sidoharjo',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA PRIMA HUSADA',
      jenis: 'Klinik',
      alamat: 'Jln. Lintas Rawa Jitu, Kampung Sidoharjo, Kec. Penawartama, Kab. Tulang Bawang',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'DPM DR. ANTONI',
      jenis: 'PMD',
      alamat: 'Kampung Paduan Rajawali, Kec. Meraksa Aji, Kab. Tulang Bawang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DPM DR. EFFRILIYA',
      jenis: 'PMD',
      alamat: 'Perumdis Puskesmas Rawa Jitu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DPM DR. DESI DWI NURYANTI',
      jenis: 'PMD',
      alamat: 'Jl. Kahuripan Jaya, Depan SDN 1 Kahuripan Jaya, Banjar Baru',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DPM DR. LELLY SEMBODO',
      jenis: 'PMD',
      alamat: 'Jl. Poros Rawa Jitu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DPM DR. LUSIANA PUTRI',
      jenis: 'PMD',
      alamat: 'Komplek Pemkab Menggala, Kab. Tulang Bawang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DPM DR. NI WY. ARYANTI',
      jenis: 'PMD',
      alamat: 'Jaya RT/RW 003/003, Kec. Banjar Baru',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DPM DR. VENY YUNISCHA',
      jenis: 'PMD',
      alamat: 'Jl. Makmur, Kab. Tulang Bawang',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};


// ─────────────────────────────────────────────────────────────
// DATA — KABUPATEN WAY KANAN
// ─────────────────────────────────────────────────────────────
 
const WAY_KANAN = {
  kota: 'Kabupaten Way Kanan',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  // Catatan: sheet UPTPAS berisi data seluruh Lampung, hanya
  // LAPAS KELAS II B WAYKANAN yang berasal dari Way Kanan.
  UPTPAS: [
    {
      nama_faskes: 'LAPAS KELAS II B WAYKANAN',
      jenis: 'UPTPAS',
      alamat: 'Negeri Bumi Putra, Blambangan Umpu, Kabupaten Way Kanan, Lampung 34764',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'KLINIK DOKTER KITA',
      jenis: 'Klinik',
      alamat: 'Jl. Sardjito No. 02, Pasar SP2B',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK AMMAR MEDIKA CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Sumatera No. 404, Kampung Negeri Baru RT 002 RW 003, Bedeng Sirap, Kecamatan Blambangan Umpu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PTPN7 TULUNGBUYUT',
      jenis: 'Klinik',
      alamat: 'Kampung Kalipapan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BENMARI',
      jenis: 'Klinik',
      alamat: 'Dusun Sumber Mulyo RT 002 RW 004, Kelurahan Pisang Indah, Kecamatan Bumi Agung, Kabupaten Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA POLRES WAY KANAN',
      jenis: 'Klinik',
      alamat: 'Jln. Mayjend Ryacudu No. 48, Kec. Blambangan Umpu, Kab. Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'HANDOKO HEALTH CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Pangeran Sampurna, Kampung Tanjung Rajasakti RT 01 RW 01, Kecamatan Blambangan Umpu, Kabupaten Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA MEDICAL CENTRE',
      jenis: 'Klinik',
      alamat: 'Kp. Gunung Waras, Kec. Pakuan Ratu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK TRANS MEDIKA',
      jenis: 'Klinik',
      alamat: 'Kp. Bandar Sari, Jl. Bukit Gemuruh, Kec. Way Tuba, Kab. Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK ARTIKA',
      jenis: 'Klinik',
      alamat: 'Jalan Lintas Sumatera, Bumi Ratu, Kabupaten Way Kanan, Lampung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA GUSNA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jln. Lintas Sumatera No. 355, Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BULAN MEDICAL CENTRE',
      jenis: 'Klinik',
      alamat: 'Jl. Raya NB No. 9, Serupa Indah, Pakuan Ratu, Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK KELUARGA SEHAT',
      jenis: 'Klinik',
      alamat: 'Bali Sadar Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA BNN KABUPATEN WAY KANAN',
      jenis: 'Klinik',
      alamat: 'Jl. Radin Jambat No. 04, Blambangan Umpu, Kecamatan Blambangan Umpu, Kabupaten Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK AS SYIFA PISANG BARU',
      jenis: 'Klinik',
      alamat: 'Jl. Protokol Pisang Baru, Kecamatan Bumi Agung, Kabupaten Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'RAMIK RAGOM',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Sumatra, Kampung Bumi',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'POSKES DIM 0427 WAYKANAN',
      jenis: 'Klinik',
      alamat: 'Kp. Umpu Bhakti',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK SRIKANDI',
      jenis: 'Klinik',
      alamat: 'Blambangan Umpu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK POKESDIM',
      jenis: 'Klinik',
      alamat: 'Blambangan Umpu',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER NANIK TURISIAH',
      jenis: 'PMD',
      alamat: 'Jalan Lintas Sumatera No. 201, Dusun 02 RT 01, Kampung Way Pisang, Kecamatan Way Tuba, Kabupaten Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER RIZKY EKA PUTRA',
      jenis: 'PMD',
      alamat: 'Jl. Radin Jambat, Blambangan Umpu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER NI MADE DWI ADNYANI, S.KED',
      jenis: 'PMD',
      alamat: 'Jl. AK. Gani RT 001 RW 003, Kel. Pasar Banjit, Kec. Banjit, Kab. Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER YENI ALITA',
      jenis: 'PMD',
      alamat: 'Jl. Lintas Sumatra RT 002 RW 004, Kelurahan Tiuh Balak, Kecamatan Baradatu, Kabupaten Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DR. FRIDA',
      jenis: 'PMD',
      alamat: 'Jl. Lintas Sumatera, Desa Bumi Ratu',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTEK DOKTER PUJI',
      jenis: 'PMD',
      alamat: 'Sukabumi, Buay Bahuga',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER HAMDANI. AD',
      jenis: 'PMD',
      alamat: 'Jl. Serunting No. 3, Tiuh Baru, Kec. Negeri Besar, Kab. Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER DWI SUNARJADI, MKM.',
      jenis: 'PMD',
      alamat: 'Jalan Datu No. 598, Tiuh Balak Pasar, Baradatu, Way Kanan 34761',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK DOKTER UMUM MANDIRI DR. DIAN OKTA SARI',
      jenis: 'PMD',
      alamat: 'Jln. Lintas Sumatera KM 192 No. 29, Sidoarjo RT/RW 002/003',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DR. MELANIA DESSY SAVITRI',
      jenis: 'PMD',
      alamat: 'Jl. Datu No. 598, Tiuh Balak Pasar',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DR. RAHMAT MULIA',
      jenis: 'PMD',
      alamat: 'Jl. Jend. Sudirman No. 182 RT 002 RW 001, Kelurahan/Kecamatan Blambangan Umpu, Kabupaten Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK UMUM DR. ELIAWATI',
      jenis: 'PMD',
      alamat: 'Jln. Jend. Sudirman No. 188, Kec. Blambangan Umpu, Kab. Way Kanan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER DR. WAYAN HERI SUSANTE',
      jenis: 'PMD',
      alamat: 'Jl. Lintas Pakuan Ratu, Kampung Pakuan Sakti RT 002 RW 004',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. HENDRA YUARFAN',
      jenis: 'PMD',
      alamat: 'Jl. Pramuka No. 207',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. MOHAMMAD RUSLI',
      jenis: 'PMD',
      alamat: 'Jl. Jati No. 2',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. AYU SULUNG NARIRATRI',
      jenis: 'PMD',
      alamat: 'Kampung Argomulyo',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. BAKTI FAHLEVI',
      jenis: 'PMD',
      alamat: 'Kp. Lebung Lawe No. 36',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. NOVI AYU PUTRI',
      jenis: 'PMD',
      alamat: 'Jl. Letnan Jenderal Soeprapto',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. EKA SISWANTINI',
      jenis: 'PMD',
      alamat: 'Jl. KS. Tubun No. 457',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};

// ─────────────────────────────────────────────────────────────
// DATA — KABUPATEN LAMPUNG BARAT
// ─────────────────────────────────────────────────────────────
 
const LAMPUNG_BARAT = {
  kota: 'Kabupaten Lampung Barat',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  // Tidak ada data UPTPAS untuk Kabupaten Lampung Barat.
  UPTPAS: [],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'KLINIK ASSHAFA',
      jenis: 'Klinik',
      alamat: 'Jl. Raden Intan No. 50, Ds. Sukamaju, Kel. Way Mengaku, Kec. Balik Bukit, Kab. Lampung Barat',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK BHAYANGKARA POLRES LAMPUNG BARAT',
      jenis: 'Klinik',
      alamat: 'Jl. Jenderal Sudirman No. 1',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK MITRA SEHAT',
      jenis: 'Klinik',
      alamat: 'Jl. Raden Intan No. 36A, Lingkungan Sukajadi 1, Kel. Way Mengaku, Kec. Balik Bukit',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK KODIM 0422/LAMPUNG BARAT',
      jenis: 'Klinik',
      alamat: 'Jl. Raden Intan, Way Mengaku, Balik Bukit',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'SUOH MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Bandar Agung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA H. AMIR',
      jenis: 'Klinik',
      alamat: 'Jl. Wisata Danau Ranau',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'DR. NOFANNY FELICIA',
      jenis: 'PMD',
      alamat: 'Jl. Raden Intan No. 99, Kelurahan Way Mengaku',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. FERINA AMBARSARI',
      jenis: 'PMD',
      alamat: 'Liwa, Balik Bukit',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. GUNANZAR GESANG',
      jenis: 'PMD',
      alamat: 'Jl. Lintas Liwa Betung, Sukosari, Sekincau',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. HENDI IRAWAN',
      jenis: 'PMD',
      alamat: 'Jl. Lintas Liwa Sanyir, Tambak Jaya, Kecamatan Way Tenong',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. JEFRI RAHMAT PHALEPI',
      jenis: 'PMD',
      alamat: 'Jl. Lintas Bungin Agung Raya',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. YONANDA ADITYO',
      jenis: 'PMD',
      alamat: 'Jl. Pasar Sukajadi',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};

// ─────────────────────────────────────────────────────────────
// DATA — KABUPATEN LAMPUNG UTARA
// ─────────────────────────────────────────────────────────────
 
const LAMPUNG_UTARA = {
  kota: 'Kabupaten Lampung Utara',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  // Catatan: sheet UPTPAS berisi data seluruh Lampung, hanya
  // LAPAS & RUTAN KOTABUMI yang berasal dari Lampung Utara.
  UPTPAS: [
    {
      nama_faskes: 'LAPAS KELAS II A KOTABUMI',
      jenis: 'UPTPAS',
      alamat: 'Jl. Permasyarakatan No. 215, Tj. Harapan, Kec. Kotabumi Selatan, Kabupaten Lampung Utara, Lampung 34514',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'RUTAN KELAS II B KOTABUMI',
      jenis: 'UPTPAS',
      alamat: 'Klp. Tujuh, Kec. Kotabumi Selatan, Kabupaten Lampung Utara, Lampung 34511',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'POS KESEHATAN 02.10.09 DIM 412/IU',
      jenis: 'Klinik',
      alamat: 'Jalan Perintis Kemerdekaan No. 11, Kotabumi, Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA SURYA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Candimas No. 02 RT 001 RW 001, Desa Candimas, Kecamatan Abung Selatan, Kabupaten Lampung Utara 34581',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA SRI MURNIATI MEDIKA',
      jenis: 'Klinik',
      alamat: 'Desa Bumi Restu RW 01 RT 02, Kec. Abung Surakarta, Kab. Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP ENGGAL WARAS HUSADA',
      jenis: 'Klinik',
      alamat: 'Desa Bandar Sakti',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP RAFAATAR MEDIKA',
      jenis: 'Klinik',
      alamat: 'Desa Bangun Sari No. 287 RT/RW 03/02, Kec. Abung Surakarta, Kab. Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA ADHYAKSA LAMPUNG UTARA',
      jenis: 'Klinik',
      alamat: 'Jln. Alamsyah RPN No. 13, Kelapa Tujuh, Kotabumi Selatan, Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA M. FIQRI',
      jenis: 'Klinik',
      alamat: 'Jl. Kapten Mustofa No. 02, Kel. Tanjung Harapan, Kec. Kotabumi Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA DISTRIK BUNGA MAYANG',
      jenis: 'Klinik',
      alamat: 'Jln. Jembatan Merah No. 1, Desa Negara Tulang Bawang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT JALAN DR. SITI JOHAN',
      jenis: 'Klinik',
      alamat: 'Jl. Yos Sudarso No. 170, Madukoro, Kecamatan Kotabumi Utara, Kode Pos 34511',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA KIMIA FARMA HANDAYANI GROUP KOTABUMI',
      jenis: 'Klinik',
      alamat: 'Jl. Raya Candimas RT/RW 06/01, Kelurahan Candimas, Kecamatan Abung Selatan, Kabupaten Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA MEDISKA KOTABUMI (PT. KAI)',
      jenis: 'Klinik',
      alamat: 'Jl. Stasiun No. 1, Kelurahan Cempedak, Kecamatan Kotabumi, Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP SIDOWARAS',
      jenis: 'Klinik',
      alamat: 'Jalan Trans AU, Desa Sukamaju, Kecamatan Abung Semuli, Kabupaten Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'SARAH MEDIKA',
      jenis: 'Klinik',
      alamat: 'RT 005 RW 002, Desa Semui Raya',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP GONDO MULYO',
      jenis: 'Klinik',
      alamat: 'Jalan Lintas Sumatera No. 049, Desa Ogan Lima, Kecamatan Abung Barat, Kabupaten Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA ARSY MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Jenderal Sudirman No. 266, Kaliumban, Kotabumi',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA ASIH',
      jenis: 'Klinik',
      alamat: 'Wonojoyo RT/RW 006/006, Trimoda',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK HARAPAN KELUARGA',
      jenis: 'Klinik',
      alamat: 'Desa Kemalo Abung, Kec. Abung Selatan, Kab. Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA TANJUNG BARU MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Sumber Jaya No. 33, Bukit Kemuning, Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK UTAMA INDRA HUSADA',
      jenis: 'Klinik',
      alamat: 'Jl. Ahmad Akuan No. 64, Rejosari, Kotabumi',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA MAHARANI',
      jenis: 'Klinik',
      alamat: 'Jl. Jend. Sudirman No. 332, Kotabumi, Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA BHAKTI AMPERA',
      jenis: 'Klinik',
      alamat: 'Jalan Kadora No. 21 Lingkungan VI, Kaduronyok, Kelurahan Bukit Kemuning',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP HANDAYANI',
      jenis: 'Klinik',
      alamat: 'Jl. Merpati No. 269 RT/RW 01/01, Kelurahan Tanjung Aman, Kotabumi Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA UMMY MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Lintas Sumatera No. 159, Desa Ogan Lima, Kecamatan Abung Barat, Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP SAHABAT MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jln. Baturaja LK VIII RT 02 RW 12, Kelurahan Bukit Kemuning',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA AL-RAYYA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Anggrek No. 52, Kota Gapura',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP KARYA HUSADA',
      jenis: 'Klinik',
      alamat: 'Jalan Raya Kembang Tanjung No. 12 KM 09, Kecamatan Abung Selatan, Kabupaten Lampung Utara 34581',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA AL AFIAH',
      jenis: 'Klinik',
      alamat: 'Jl. Jenderal Sudirman No. 118, Kotabumi',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK POLRES LAMPUNG UTARA',
      jenis: 'Klinik',
      alamat: 'Jl. Tjoekoel Soebroto No. 1 RT 001 RW 001, Kelurahan Kelapa Tujuh',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA RAWAT INAP KAIRA MEDICAL CENTER',
      jenis: 'Klinik',
      alamat: 'Jl. Protokol Baru Raharja, Kec. Sungkai Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA ALAYA MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Jenderal Sudirman No. 407, Kel. Tanjung Aman, Kec. Kotabumi Selatan',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK PRATAMA SILOAM',
      jenis: 'Klinik',
      alamat: 'Jl. Jenderal Sudirman No. 123B',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER DR. DYAH ISTIYANI',
      jenis: 'PMD',
      alamat: 'Jalan Jagad Buana 10 No. 14 RT 02 RK 01, Desa Negara Tulang Bawang',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'PRAKTIK MANDIRI DOKTER DR. PEBRIAN PRAMANA PUTRA',
      jenis: 'PMD',
      alamat: 'Jl. Kantor Pos No. 18 RT/RW 001/003, Kotabumi Udik, Kotabumi, Lampung Utara',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. RIKA SEPTICIA HASAN',
      jenis: 'PMD',
      alamat: 'Jl. Sungkai No. 34',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. BAYU TIRTA KUSUMA',
      jenis: 'PMD',
      alamat: 'Jl. Lada No. 82, Kebun Empat',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. RIMI NOFALIA',
      jenis: 'PMD',
      alamat: 'Jl. Raya Sri Menanti No. 79',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. LINDA FEBRIKA',
      jenis: 'PMD',
      alamat: 'Jl. KI. Mashur I No. 326',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. DIOBA FICHA PUTRI UTAMI',
      jenis: 'PMD',
      alamat: 'Jalan Taman Wisata Way Rarem',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. ALEF ADLIA RAHMANI',
      jenis: 'PMD',
      alamat: 'Jln. Serma Peturun No. 33, Tanjung',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. WAWAN RIDWAN',
      jenis: 'PMD',
      alamat: 'Jalan Lintas Sumatera, Dusun Baru',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. SRI DIASTUTI',
      jenis: 'PMD',
      alamat: 'Jln. Lintas Sumatera',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. ARTYCA WAHYU UTAMI',
      jenis: 'PMD',
      alamat: 'Jl. Soekarno Hatta No. 177B',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};


// ─────────────────────────────────────────────────────────────
// DATA — KABUPATEN PESISIR BARAT
// Sumber: Data Dasar Fasyankes Prov. Lampung (Update Nov-Des 2025)
// Total: 7 faskes (UPTPAS: 1, Klinik: 2, PMD: 4, BBKPM-BKPM-BP4: 0)
// ─────────────────────────────────────────────────────────────
 
const PESISIR_BARAT = {
  kota: 'Kabupaten Pesisir Barat',
  provinsi: 'Lampung',
 
  // ── 1. UPTPAS ────────────────────────────────────────────────
  // Catatan: sheet UPTPAS berisi data seluruh Lampung, hanya
  // RUTAN KELAS II B KRUI yang berasal dari Pesisir Barat.
  UPTPAS: [
    {
      nama_faskes: 'RUTAN KELAS II B KRUI',
      jenis: 'UPTPAS',
      alamat: 'Ps. Krui, Pesisir Tengah, Kabupaten Pesisir Barat, Lampung 34874',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 2. KLINIK ────────────────────────────────────────────────
  Klinik: [
    {
      nama_faskes: 'KLINIK ALFATHAN MEDIKA',
      jenis: 'Klinik',
      alamat: 'Jl. Merdeka, Kelurahan Pasar Kota, Kecamatan Pesisir Tengah',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'KLINIK UTAMA DR. TAN',
      jenis: 'Klinik',
      alamat: 'Jl. Raden Anom Pemangku, Sumber Sari, Pekon Rawas',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 3. PMD (Praktik Mandiri Dokter) ─────────────────────────
  PMD: [
    {
      nama_faskes: 'DR. EDWIN HARYADI MA\'AS',
      jenis: 'PMD',
      alamat: 'Jl. Jaya Wijaya No. 121',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. ALI SYAHRI',
      jenis: 'PMD',
      alamat: 'Kesuma Pasar Baru, Pasar Mulia',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. EVI EMILIA',
      jenis: 'PMD',
      alamat: 'Pasar Ulu 1',
      no_telepon: '-',
      jam_buka: '-',
    },
    {
      nama_faskes: 'DR. RINA ARYANI ARLAN',
      jenis: 'PMD',
      alamat: 'Jl. Lintas Barat, Gunung Sari',
      no_telepon: '-',
      jam_buka: '-',
    },
  ],
 
  // ── 4. BBKPM-BKPM-BP4 ───────────────────────────────────────
  'BBKPM-BKPM-BP4': [],
};

// ─────────────────────────────────────────────────────────────
// DAFTAR SEMUA KOTA 
// ─────────────────────────────────────────────────────────────
const allCities = [
  BANDAR_LAMPUNG,
  METRO,
  LAMPUNG_SELATAN,
  LAMPUNG_TIMUR,
  MESUJI,
  PESAWARAN,
  PRINGSEWU,
  TANGGAMUS,
  TULANG_BAWANG_BARAT,
  TULANG_BAWANG,
  WAY_KANAN,
  LAMPUNG_BARAT,
  LAMPUNG_UTARA,
  PESISIR_BARAT,
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