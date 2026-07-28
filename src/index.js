import dotenv from "dotenv";
import connectDB from "./db/db.js";
import dns from "dns";
dotenv.config({
  path: "./env",
});
dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectDB();
