import { crawlUrls } from "../crawler";
import { crawlSchema } from "../schemas/crawl.schema";

export class CrawlsController {
  public static crawl(req, res) {
    const { error } = crawlSchema.validate(req.body);

    if (error) {
      return res.status(400).json(error);
    }

    const { paths, depth, http } = req.body;

    // TODO: Add to queue and return jobId to return to the client
    crawlUrls(paths, depth, http);

    return res.status(202).send();
  }
}
