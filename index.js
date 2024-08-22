import express from "express";
import bodyParser from "bodyParser";
import axios from "axios";

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));