export class Result {
  private items: Map<string, string[]> = new Map();

  public async getLinks(): Promise<string[]> {
    return [].concat(...this.items.values());
  }

  public async getPaths(): Promise<string[]> {
    return [...this.items.keys()];
  }

  public getEntries() {
    return this.items.entries();
  }

  public async addEntry(path: string, value: string[]): Promise<void> {
    this.items.set(path, value);
  }
}
