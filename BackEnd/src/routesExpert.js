import { Router } from "express";

import {
  createTableExpert,
  insertExpert,
  getExperts,
  getExpert,
  deleteExpert,
  updateExpert,
} from "./Model/Expert.js";

const routerExperts = Router();


routerExperts.get("/expert", async function (req, res) {
  let experts = await getExperts();
  res.json(experts);
});

routerExperts.get("/expert/:id", async function (req, res) {
  let experts = await getExpert(req.params.id);
  res.json(experts);
});

routerExperts.delete("/expert/:id", async function (req, res) {
  let experts = await deleteExpert(req.params.id);
  res.json(experts);
});

routerExperts.post("/expert", function (req, res) {
  insertExpert(req.body);
  res.json({
    statusCode: 200,
  });
});

routerExperts.put("/expert/:id", function (req, res) {
  updateExpert(req.body, req.params.id);
  res.json({
    statusCode: 200,
  });
});

export default routerExperts;
