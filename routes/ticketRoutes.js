const express = require("express");
const Ticket = require("../models/Ticket"); // Assicurati che il file esista
const router = express.Router();

// Creazione di un ticket (POST /api/tickets)
router.post("/", async (req, res) => {
    try {
        const { robotId, title, description } = req.body;
        const newTicket = new Ticket({ robotId, title, description });
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(500).json({ error: "Errore nel creare il ticket" });
    }
});

// Leggi tutti i ticket (GET /api/tickets)
router.get("/", async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: "Errore nel recuperare i ticket" });
    }
});

module.exports = router;
