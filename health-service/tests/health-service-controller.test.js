const healthController = require("../src/controllers/health-service-controller");

const HealthService = require("../src/models/health-service");

jest.mock("../src/models/health-service");

describe("Health Service Controller Test", () => {
  test("Berhasil mengambil layanan kesehatan", async () => {
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
    const mockData = [
      {
        nama_faskes: "RS TBC Lampung",
        jenis: "Rumah Sakit",
      },
    ];

    // mock database
    HealthService.find.mockReturnValue({
      select: jest.fn().mockReturnValue({
        sort: jest.fn().mockReturnValue({
          skip: jest.fn().mockReturnValue({
            limit: jest.fn().mockResolvedValue(mockData),
          }),
        }),
      }),
    });

    HealthService.countDocuments.mockResolvedValue(1);

    // jalankan controller
    await healthController.getAllHealthServices(req, res);

    // cek response
    expect(res.status).toHaveBeenCalled();
  });
  test("Berhasil search layanan kesehatan", async () => {
    const req = {
      query: {
        search: "TBC",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockData = [
      {
        nama_faskes: "Klinik TBC",
        jenis: "Klinik",
      },
    ];

    HealthService.find.mockReturnValue({
      select: jest.fn().mockReturnValue({
        sort: jest.fn().mockReturnValue({
          skip: jest.fn().mockReturnValue({
            limit: jest.fn().mockResolvedValue(mockData),
          }),
        }),
      }),
    });

    HealthService.countDocuments.mockResolvedValue(1);

    await healthController.getAllHealthServices(req, res);

    expect(res.status).toHaveBeenCalled();
  });
});
