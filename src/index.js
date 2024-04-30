import app from "./app.js";
import  {connectDB}  from "./database.js";

connectDB();
app.listen(4000)
console.log('Conectado al puerto ', 4000)