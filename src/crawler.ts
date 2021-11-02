import { scrapeLinks } from "./utils/scraper";
import { Result } from "./utils/repository";
import eventEmitter from "./utils/eventEmitter";

const result = new Result();

export async function crawlUrls(
  paths: string[],
  depth: number,
  http: boolean
): Promise<string[]> {
  if (depth === 0) {
    return result.getLinks();
  }

  for (const path of paths) {
    const links = await scrapeLinks(path, false);
    await result.addEntry(path, links);
    eventEmitter.emit("crawl_finished", { path, links });
  }

  const nestedPaths = await result.getLinks();

  return crawlUrls(nestedPaths, depth - 1, http);
}
