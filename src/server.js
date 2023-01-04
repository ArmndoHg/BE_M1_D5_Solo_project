import express from "express";
import listEndpoints from "express-list-endpoints";
import authorsRouter from "./api/authors/index.js";
import productsRouter from "./api/products/index.js";

const server = express();

const port = 3001;

server.use(express.json());

//---End Points---

server.use("/authors", authorsRouter);
server.use("/products", productsRouter);

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log("Server is running on port: ", port);
});
