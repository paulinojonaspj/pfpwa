import express from "express";

import routerUsers from "./routesUser.js";
import cors from "cors";
import routerJogos from "./routesJogo.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

app.use(routerUsers);
app.use(routerJogos);

app.listen(3000, () => console.log("API rodando na porta 3000"));
