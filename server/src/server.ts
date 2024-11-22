import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { Mongoose } from "mongoose";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const mongoose = new Mongoose();

app.get("/", (req, res) => {
  res.send("API is UP");
});

io.on("connection", () => {
  console.log("connect");
});

mongoose.connect("mongodb://localhost:27017/angular-trello").then(() => {
  console.log("connected to mongodb");
  httpServer.listen(4001, () => {
    console.log("APi is lissening on port 4001");
  });
});
