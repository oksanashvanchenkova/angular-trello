import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { Mongoose } from "mongoose";
import * as usersController from "./controllers/users";
import bodyParser from "body-parser";
import { Request, Response } from "express";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const mongoose = new Mongoose();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is UP");
});

app.post("/api/users", usersController.register);

io.on("connection", () => {
  console.log("connect");
});

mongoose.connect("mongodb://localhost:27017/eltrello").then(() => {
  console.log("connected to mongodb");
  httpServer.listen(4001, () => {
    console.log(`API is listening on port 4001`);
  });
});
