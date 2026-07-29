import dotenv from "dotenv";
import connectDB from "./db/db.js";
import dns from "dns";
import { app } from "./app.js";
import { log } from "console";
dotenv.config({
  path: "./env",
});
dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server Is Running On Port :: ${process.env.PORT}`);
  });
});
