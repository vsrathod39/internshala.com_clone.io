const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { versionKey: false, timestamps: true })

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) next();
    bcrypt.hash(this.password, 8, (err, hash) => {
        this.password = hash;
        return next();
    });
})

userSchema.methods.checkPassword = function (password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, function (err, res) {
            if (err) return reject(err);
            return resolve(res);
        });
    })
}

const User = model("user", userSchema);

module.exports = User;