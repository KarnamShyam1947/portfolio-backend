const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { swaggerUi, swaggerSpec } = require("./swagger");

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/users.routes");
const skillRouter = require("./routes/skill.routes");
const uploadRouter = require("./routes/upload.routes");
const projectRouter = require("./routes/project.routes");
const educationRouter = require("./routes/education.routes");
const experienceRouter = require("./routes/experience.routes");
const publicationRouter = require("./routes/publication.routes");
const certificateRouter = require("./routes/certificate.routes");
const homeSectionRouter = require("./routes/homeSection.routes");

const createAdminUserIfNotExists = require("./utils/auth.utils");

const app = express();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000;

if (!DB_URL) {
    console.error("Error: DB_URL is not defined in environment variables.");
    process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
    res.status(200).json({ "hello": "world" });
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/skill", skillRouter);
app.use("/api/v1/upload", uploadRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/education", educationRouter);
app.use("/api/v1/experience", experienceRouter);
app.use("/api/v1/publication", publicationRouter);
app.use("/api/v1/certificate", certificateRouter);
app.use("/api/v1/home-section", homeSectionRouter);

mongoose.connect(DB_URL)
    .then(async () => {
        console.log("Successfully connected to MongoDB");

        await createAdminUserIfNotExists();
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });


