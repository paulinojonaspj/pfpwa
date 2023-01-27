import { Router } from "express";
import {
  createTableSponsor,
  insertSponsor,
  getSponsors,
  getSponsor,
  deleteSponsor,
  updateSponsor,
} from "./Model/Sponsor.js";

const routerSponsors = Router();


routerSponsors.get("/sponsor", async function (req, res) {
  let sponsors = await getSponsors();
  res.json(sponsors);
});

routerSponsors.get("/sponsor/:id", async function (req, res) {
  let sponsors = await getSponsor(req.params.id);
  res.json(sponsors);
});

routerSponsors.delete("/sponsor/:id", async function (req, res) {
  let sponsors = await deleteSponsor(req.params.id);
  res.json(sponsors);
});

routerSponsors.post("/sponsor", function (req, res) {
  insertSponsor(req.body);
  res.json({
    statusCode: 200,
  });
});

routerSponsors.put("/sponsor/:id", function (req, res) {
  updateSponsor(req.body, req.params.id);
  res.json({
    statusCode: 200,
  });
});

export default routerSponsors;
