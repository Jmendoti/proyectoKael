import app from "./app.js";
import { connectDB } from "./database.js";

// Rest API
app.get("/", (req, res) => {
    res.send("<h1>Bienvenidos Server Corriendo</h1>");
});
connectDB();
app.listen(4000)
console.log('Conectado al puerto ', 4000)