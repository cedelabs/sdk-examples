import { initExchange } from "../utils";
import { executeMethod } from "./getNetworksBetweenCex";

describe("getNetworksBetweenCex", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return networks between cex", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
