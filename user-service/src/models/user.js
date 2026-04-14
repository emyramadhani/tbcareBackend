const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        nama_lengkap: {
            type: String,
            required: [true, 'Nama lengkap wajib diisi'],
            trim: true,
            maxlength: [100, 'Nama maksimal 100 karakter'],
        },
        email: {
            type: String,
            required: [true, 'Email wajib diisi'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Password wajib diisi'],
            minlength: [6, 'Password minimal 6 karakter'],
        },
        no_telepon: {
            type: String,
            trim: true,
            default: null,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        resetPasswordToken: {
            type: String,
            default: null,
        },
        resetPasswordExpires: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);