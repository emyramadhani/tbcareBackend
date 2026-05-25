const authController = require("../src/controllers/auth-controller");
const User = require("../src/models/user");

jest.mock("../src/models/user");

describe("Login Controller Test", () => {
  test("Login berhasil", async () => {
    // data request palsu
    const req = {
      body: {
        email: "emy@gmail.com",
        password: "123456",
      },
    };

    // response palsu
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // user palsu dari database
    const mockUser = {
      _id: "123",
      role: "user",
      comparePassword: jest.fn().mockResolvedValue(true),
    };

    // mock User.findOne()
    User.findOne.mockReturnValue({
      select: jest.fn().mockResolvedValue(mockUser),
    });

    // jalankan controller
    await authController.login(req, res);

    // cek apakah status dipanggil
    expect(res.status).toHaveBeenCalled();
  });

  test("Login gagal karena user tidak ditemukan", async () => {
    // request palsu
    const req = {
      body: {
        email: "salah@gmail.com",
        password: "123456",
      },
    };

    // response palsu
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // database mengembalikan null
    User.findOne.mockReturnValue({
      select: jest.fn().mockResolvedValue(null),
    });

    // jalankan controller
    await authController.login(req, res);

    // cek status dipanggil
    expect(res.status).toHaveBeenCalled();
  });
});
