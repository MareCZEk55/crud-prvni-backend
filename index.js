import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log("Databaze pripojena...");
} catch (error) {
    console.error("Chyba spojení DB\n");
    throw error;
}

app.use(cors());
app.use(express.json());
app.use("/products", productRoutes);

app.listen(5000, () => console.log("Server bezi na portu 5000"));


