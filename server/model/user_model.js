const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    }
});

// HASHING PASSWORD BEFORE SAVING TO MONGODB
userSchema.pre('save', function (next) {
    // CHECK IF PASSWORD BEEN MODIFIED
    if(!this.isModified('password')) {
        return next();
    };
    
    // HASHING PASSWORD    
    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
        if(err) {
            return next(err);
        };
        this.password = hashedPassword;
        next();
    })
});

// COMPARING PASSWORD FOR USER LOGIN
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('user', userSchema);
module.exports = User;