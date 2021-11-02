import { crawlUrls } from "./crawler";
import config from "./utils/config";
import eventEmitter from "./utils/eventEmitter";

const depth = Math.min(config.depth, config.maxDepth);

async function crawl(paths: string[], http: boolean) {
  const links = await crawlUrls(paths, depth, http);
  console.log("links:", links);
}

crawl(["htmls/1.html"], false).then(() =>
  crawl(["htmls/2.html", "htmls/3.html"], false)
);

eventEmitter.addListener("crawl_finished", ({ path, links }) => {
  console.log(
    "\x1b[34m", // Blue
    "Crawler has finished for the",
    "\x1b[30m\x1b[42m", // Black with green background
    path,
    "\x1b[0m\x1b[34m", // Reset color to blue
    "path",
    "\x1b[0m", // Reset color
    { links }
  );
});
