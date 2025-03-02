require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connetti MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connesso a MongoDB!"))
    .catch(err => console.error("❌ Errore di connessione:", err));

// Importa le route
const ticketRoutes = require("./routes/ticketRoutes");
app.use("/api/tickets", ticketRoutes);

// Avvia il server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`🚀 Server avviato su http://localhost:${PORT}`));
