import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import uniqid from "uniqid";
import fs from "fs";

const productsRouter = express.Router();

// ------------------
const productsJSONPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "products.json"
);
console.log("Here v---------->", productsJSONPath);

const getProducts = () => JSON.parse(fs.readFileSync(productsJSONPath));

/* const writeProducts = (productsArray) =>
  fs.writeFileSync(productsJSONPath, JSON.stringify(productsArray)); */

// ------------------

productsRouter.post("/", (req, res) => {
  const newProduct = { ...req.body, createdAt: new Date(), id: uniqid() };
  const productsArray = getProducts();

  productsArray.push(newProduct);
  fs.writeFileSync(authorsJSONPath, JSON.stringify(productsArray));
  res.status(201).send({ id: newProduct.id });
});

productsRouter.get("/", (req, res) => {
  const productsArray = getProducts();
  console.log("----------->", productsArray);
  res.send(productsArray);
});

productsRouter.get("/:productId", (req, res) => {});

productsRouter.put("/:productId", (req, res) => {});

productsRouter.delete("/:productId", (req, res) => {});

export default productsRouter;
