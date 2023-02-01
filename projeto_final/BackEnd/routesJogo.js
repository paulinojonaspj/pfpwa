import { Router } from "express";
import cors from "cors";
import {
  createTableJogo,
  insertJogo,
  getJogos,
  getJogo,
  deleteJogo,
  updateJogo,
} from "./Model/Jogo.js";

const routerJogos = Router();
createTableJogo();
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

};
routerJogos.use(cors(corsOptions));
 

routerJogos.get("/jogo", async function (req, res) {
  let jogos = await getJogos();
  res.json(jogos);
});

routerJogos.get("/jogo/:id", async function (req, res) {
  let jogos = await getJogo(req.params.id);
  res.json(jogos);
});

routerJogos.delete("/jogo/:id", async function (req, res) {
  let jogos = await deleteJogo(req.params.id);
  res.json(jogos);
});

routerJogos.post("/jogo", function (req, res) {
  insertJogo(req.body);
  res.json({
    statusCode: 200,
  });
});

routerJogos.put("/jogo/:id", function (req, res) {
  updateJogo(req.body, req.params.id);
  res.json({
    statusCode: 200,
  });
});

export default routerJogos;
