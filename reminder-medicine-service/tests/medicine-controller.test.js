const medicineController = require("../src/controllers/medicine-controller");

const Obat = require("../src/models/medicine");

jest.mock("../src/models/medicine");

describe("Medicine Controller Test", () => {
  test("Berhasil mengambil data obat", async () => {
    // request palsu
    const req = {
      userId: "123",
    };

    // response palsu
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // data palsu
    const mockObat = [
      {
        nama_obat: "Rifampicin",
        dosis: "1x sehari",
      },
    ];

    // mock database
    Obat.find.mockReturnValue({
      sort: jest.fn().mockResolvedValue(mockObat),
    });

    // jalankan controller
    await medicineController.getAllObat(req, res);

    // cek response
    expect(res.status).toHaveBeenCalled();
  });

  test("Berhasil mengambil list obat user", async () => {
    const req = {
      userId: "999",
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockObat = [
      {
        nama_obat: "Isoniazid",
        dosis: "2x sehari",
      },
    ];

    Obat.find.mockReturnValue({
      sort: jest.fn().mockResolvedValue(mockObat),
    });

    await medicineController.getAllObat(req, res);

    expect(res.status).toHaveBeenCalled();
  });
});
