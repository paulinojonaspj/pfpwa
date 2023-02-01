import { Router } from "express";
import cors from "cors";
import {
  createTableUser,
  insertUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  login,
  vEmail
} from "./Model/User.js";

const routerUsers = Router();
createTableUser();
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
routerUsers.use(cors(corsOptions));

routerUsers.get("/user", async function (req, res) {
  let users = await getUsers();
  res.json(users);
});

routerUsers.get("/user/:id", async function (req, res) {
  let users = await getUser(req.params.id);
  res.json(users);
});

routerUsers.delete("/user/:id", async function (req, res) {
  let users = await deleteUser(req.params.id);
  res.json(users);
});

routerUsers.get("/user/:email/:palavrapasse", async function (req, res) {
  let users = await login(req.params.email, req.params.palavrapasse);
  res.json(users);
});

routerUsers.get("/vemail/:email", async function (req, res) {
  let users = await vEmail(req.params.email);
  res.json(users);
}); 

routerUsers.post("/user", function (req, res) {
  insertUser(req.body);
  res.json({
    statusCode: 200,
  });
});

routerUsers.put("/user/:id", function (req, res) {
  updateUser(req.body, req.params.id);
  res.json({
    statusCode: 200,
  });
});

export default routerUsers;
