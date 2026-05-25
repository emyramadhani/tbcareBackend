const contentController = require("../src/controllers/content-controllers");
const Konten = require("../src/models/content");

jest.mock("../src/models/content");

describe("Content Controller Test", () => {
  test("Berhasil mengambil semua konten", async () => {
    // request palsu
    const req = {
      query: {},
    };

    // response palsu
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // data palsu
    const mockKonten = [
      {
        judul: "Bahaya TBC",
        tipe: "artikel",
      },
    ];

    // mock database
    Konten.find.mockReturnValue({
      select: jest.fn().mockReturnValue({
        sort: jest.fn().mockResolvedValue(mockKonten),
      }),
    });

    // jalankan controller
    await contentController.getAllKonten(req, res);

    // cek status dipanggil
    expect(res.status).toHaveBeenCalled();
  });

  test("Gagal karena kategori tidak valid", async () => {
    // request palsu
    const req = {
      query: {
        kategori: "salah",
      },
    };

    // response palsu
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // jalankan controller
    await contentController.getAllKonten(req, res);

    // cek status dipanggil
    expect(res.status).toHaveBeenCalled();
  });
});
