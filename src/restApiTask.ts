import express from "express";
import { CrawlsController } from "./controllers/crawl.controller";

const app = express();
const router = express.Router();

app.use(express.json());

app.get("/heatlh", function (_, res) {
  res.status(200).send("Healthy");
});

router.post("/crawl", CrawlsController.crawl);

app.use("/api", router);

app.listen(3000, () =>
  console.log("\x1b[32m", "Running on port 3000", "\x1b[0m")
);
