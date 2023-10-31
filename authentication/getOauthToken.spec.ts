import { initExchange } from "../utils";
import { executeMethod } from "./getOauthToken";

describe("getOAuthToken", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return accessToken, refreshToken and expiresAt", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      {
        "accessToken": "09i12easaokek2p1kmwd",
        "expiresAt": 123456,
        "refreshToken": "12dj21dwWD-kDw",
      }
    `);
  });
});
