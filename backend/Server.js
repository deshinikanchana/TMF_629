require("dotenv").config();
const express = require("express");
const axios = require('axios');
const mongoose = require("mongoose");
const cors = require("cors");

const customerRoutes = require("./routes/CustomerRoute");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("Mongo Error:", err));

app.use("/tmf-api/customerManagement/v5/customer", customerRoutes);

app.get('/', async (_req, res) => {
    res.send('TMF-629 Running')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
