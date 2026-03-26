const RISK_THRESHOLDS = {
  RENDAH: { min: 0, max: 2 },
  SEDANG: { min: 3, max: 4 },
  TINGGI: { min: 5, max: 6 },
};


const RISK_RECOMMENDATIONS = {
  rendah: [
    'Pertahankan gaya hidup sehat Anda',
    'Tetap waspada terhadap gejala TBC',
    'Lakukan pemeriksaan kesehatan rutin',
    'Hindari kontak dengan penderita TBC',
  ],
  sedang: [
    'Konsultasikan gejala Anda dengan dokter',
    'Perhatikan perkembangan gejala Anda',
    'Jaga pola hidup sehat dan istirahat cukup',
    'Tingkatkan daya tahan tubuh dengan nutrisi baik',
  ],
  tinggi: [
    'Segera konsultasikan dengan dokter atau tenaga medis',
    'Lakukan pemeriksaan dahak dan rontgen dada',
    'Hindari kontak dekat dengan orang lain',
    'Gunakan masker saat berada di tempat umum',
  ],
};

module.exports = { RISK_THRESHOLDS, RISK_RECOMMENDATIONS };