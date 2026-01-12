const User = require("../models/users.model")
require("dotenv").config();

async function createAdminUserIfNotExists() {
    try {
        const adminEmail = process.env.DEFAULT_ADMIN_EMAIL || "admin@example.com";
        const adminUsername = process.env.DEFAULT_ADMIN_USERNAME || "admin";
        const adminPassword = process.env.DEFAULT_ADMIN_PASSWORD || "admin123";

        if(!adminEmail || !adminUsername || !adminPassword) {
            console.error("ERROR: admin credentials not configured");
        }

        const existingAdmin = await User.findOne({
            $or: [
                { username: adminUsername },
                { email: adminEmail }
            ],
        });

        if (existingAdmin) {
            console.log("Admin user already exists");
            return;
        }

        const newAdmin = new User({
            username: adminUsername,
            email: adminEmail,
            password: adminPassword,
            role: "ADMIN",
        });

        await newAdmin.save();
        console.log("Admin user created successfully!");

    } catch (err) {
        console.error("Error creating admin user", err);
    }
}

module.exports = createAdminUserIfNotExists;
