const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  robotId: { type: String, required: true }, // ID del robot
  title: { type: String, required: true }, // Titolo del ticket
  description: { type: String, required: true }, // Descrizione del problema
  createdAt: { type: Date, default: Date.now }, // Data di creazione
  assignedAt: { type: Date }, // Data presa in carico
  closedAt: { type: Date } // Data chiusura
});

module.exports = mongoose.model("Ticket", TicketSchema);
