const screeningController = require("../src/controllers/screening-controller");

const SkriningPertanyaan = require("../src/models/screening-question");
const Skrining = require("../src/models/screening");
const SkriningDetail = require("../src/models/screening-detail");

jest.mock("../src/models/screening-question");
jest.mock("../src/models/screening");
jest.mock("../src/models/screening-detail");

describe("Screening Controller Test", () => {
  test("Submit screening berhasil", async () => {
    // request palsu
    const req = {
      userId: "123",
      body: {
        jawaban: [
          {
            id_pertanyaan: "1",
            jawaban: "Ya",
          },
        ],
      },
    };

    // response palsu
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // mock pertanyaan aktif
    SkriningPertanyaan.find.mockResolvedValue([
      {
        _id: "1",
      },
    ]);

    // mock create screening
    Skrining.create.mockResolvedValue({
      _id: "skrining1",
      total_skor: 1,
      hasil_risiko: "Risiko Rendah",
      rekomendasi: "Tetap jaga kesehatan",
      tanggal_skrining: new Date(),
    });

    // mock insert detail
    SkriningDetail.insertMany.mockResolvedValue(true);

    // jalankan controller
    await screeningController.submitScreening(req, res);

    // cek response dipanggil
    expect(res.status).toHaveBeenCalled();
  });

  test("Gagal karena jawaban kosong", async () => {
    const req = {
      body: {
        jawaban: [],
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await screeningController.submitScreening(req, res);

    expect(res.status).toHaveBeenCalled();
  });
});
