/*
import {
  createTableSponsor,
  insertSponsor,
  getSponsors,
  getSponsor,
  deleteSponsor,
  updateSponsor,
} from "./Model/Sponsor.js";

import {
  createTableExpert,
  insertExpert,
  getExperts,
  getExpert,
  deleteExpert,
  updateExpert,
} from "./Model/Expert.js";
*/
import express from "express";
import routerSponsors from "./routesSponsor.js";
import routerExperts from "./routesExpert.js";
import routerUsers from "./routesUser.js";
import cors from "cors";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

};
app.use(cors(corsOptions));
app.use(routerSponsors);
app.use(routerExperts);
app.use(routerUsers);

app.listen(3000, () => console.log("API rodando"));
