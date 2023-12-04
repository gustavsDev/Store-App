import { handler } from "./build/handler.js";
import dotenv from "dotenv"; dotenv.config();
import express from "express";

const PORT = process.env.PORT;

const app = express();

app.use(handler);

app.listen(PORT, () => console.log(`Port ${PORT} open.`));
