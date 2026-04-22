require('dotenv').config();
const mongoose = require('mongoose');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3002';
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('ERROR: MONGO_URI tidak ditemukan di .env');
  process.exit(1);
}

async function migrate() {
  await mongoose.connect(MONGO_URI);
  console.log('MongoDB connected');

  const db = mongoose.connection.db;
  const collection = db.collection('konten_edukasi');

  const oldRecords = await collection.find({
    url_video: { $regex: '^/videos/' },
  }).toArray();

  if (oldRecords.length === 0) {
    console.log('Tidak ada data yang perlu dimigrasikan. Selesai.');
    await mongoose.disconnect();
    return;
  }

  console.log(`Ditemukan ${oldRecords.length} konten video yang perlu diupdate...`);

  let successCount = 0;
  let errorCount = 0;

  for (const record of oldRecords) {
    const oldUrl = record.url_video;
    const newUrl = `${BASE_URL}${oldUrl}`;

    try {
      await collection.updateOne(
        { _id: record._id },
        { $set: { url_video: newUrl } }
      );
      console.log(`  ✓ [${record._id}] ${oldUrl} → ${newUrl}`);
      successCount++;
    } catch (err) {
      console.error(`  ✗ [${record._id}] Gagal: ${err.message}`);
      errorCount++;
    }
  }

  console.log(`\nMigrasi selesai: ${successCount} berhasil, ${errorCount} gagal.`);
  await mongoose.disconnect();
}

migrate().catch((err) => {
  console.error('Migration error:', err);
  process.exit(1);
});
