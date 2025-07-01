import express from "express";
import { config } from "dotenv";
import catalog_router from "./src/routers/catalog.js";
import cart_router from "./src/routers/cart.js";
import main_router from "./src/routers/main.js";

config();
const port = process.env.PORT ?? 8000;
const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/templates");
app.use("/static", express.static("public"));
app.use("/cart", cart_router);
app.use("/catalog", catalog_router);
app.use("/", main_router);
app.use(express.static("public"));

app.listen(port, () => console.log(`http://localhost:${port}`));
