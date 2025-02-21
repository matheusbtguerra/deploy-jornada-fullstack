import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

const __dirname = path.resolve();

app.use(cors());

app.get("/api/", (request, response) => {
    response.send("Hello World!");
});

app.get("/api/artists", async(request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async(request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(express.static(path.join(__dirname, "../../front-end/dist")));
app.get("*", async(request, response) => {
    response.sendFile(path.join(__dirname, "../../front-end/dist/index.html"));
});