import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const x = process.env.PORT;

app.listen(PORT,() => console.log('servidor rodando');