const SkriningPertanyaan = require('../models/screening-question');

const PERTANYAAN_SKRINING = [
  {
    urutan: 1,
    bobot_skor: 1,
    pertanyaan:
      'Apakah Anda mengalami batuk terus-menerus selama lebih dari 2 minggu?',
  },
  {
    urutan: 2,
    bobot_skor: 1,
    pertanyaan:
      'Apakah Anda mengalami batuk yang disertai dahak atau kadang bercampur darah?',
  },
  {
    urutan: 3,
    bobot_skor: 1,
    pertanyaan:
      'Apakah Anda sering mengalami demam ringan atau meriang tanpa sebab yang jelas?',
  },
  {
    urutan: 4,
    bobot_skor: 1,
    pertanyaan:
      'Apakah Anda sering berkeringat di malam hari meskipun tidak melakukan aktivitas berat?',
  },
  {
    urutan: 5,
    bobot_skor: 1,
    pertanyaan:
      'Apakah Anda mengalami penurunan berat badan tanpa sebab yang jelas dalam beberapa waktu terakhir?',
  },
  {
    urutan: 6,
    bobot_skor: 1,
    pertanyaan:
      'Apakah Anda sering merasa lemas, cepat lelah, atau kehilangan nafsu makan?',
  },
];

const seedQuestions = async () => {
  try {
    const existingCount = await SkriningPertanyaan.countDocuments();

    if (existingCount > 0) {
      console.log('Seeder: pertanyaan sudah ada, skip seeder');
      return;
    }

    await SkriningPertanyaan.insertMany(PERTANYAAN_SKRINING);
    console.log('Seeder: 6 pertanyaan berhasil ditambahkan');
  } catch (err) {
    console.error('ERROR seedQuestions:', err);
  }
};

module.exports = { seedQuestions };