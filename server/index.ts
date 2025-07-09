import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  getDonations,
  createDonation,
  getTotalRaised,
} from "./routes/donations";
import {
  getSupporterMessages,
  createSupporterMessage,
} from "./routes/supporters";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Arsenal Transfer Fund API routes
  app.get("/api/donations", getDonations);
  app.post("/api/donations", createDonation);
  app.get("/api/donations/total", getTotalRaised);

  app.get("/api/supporters", getSupporterMessages);
  app.post("/api/supporters", createSupporterMessage);

  return app;
}
