const { RISK_THRESHOLDS, RISK_RECOMMENDATIONS } = require('../config/risk-config');

const classifyRisk = (totalSkor) => {
  let hasil_risiko;

  if (totalSkor >= RISK_THRESHOLDS.TINGGI.min) {
    hasil_risiko = 'tinggi';
  } else if (totalSkor >= RISK_THRESHOLDS.SEDANG.min) {
    hasil_risiko = 'sedang';
  } else {
    hasil_risiko = 'rendah';
  }

  const rekomendasi = RISK_RECOMMENDATIONS[hasil_risiko];

  return { hasil_risiko, rekomendasi };
};

module.exports = { classifyRisk };