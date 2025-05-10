const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const scrapeRoutes = require("./routes/scrape");
const email = require("./routes/email");
require("dotenv").config();

const app = express();
const corsOptions = {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());


if(!process.env.MONGODB_URI || !process.env.db_name) {
    console.log("MongoDB URI or database name not defined in .env file");
    process.exit(1);
}
app.get("/", (req, res) => {
res.send("Hello World!");
})
mongoose.connect(`${process.env.MONGODB_URI}/${process.env.db_name}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));


// Routes
app.use("/api/scrape", scrapeRoutes);
app.use("/api/save", email);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));