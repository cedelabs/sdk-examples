import chalk from "chalk";
import fs from "fs";
import open from "open";
import path from "path";
import { createInterface } from "readline";
import { fileURLToPath } from "url";
import { CONFIG } from "./config";
import { executeMethod, getAvailableMethods } from "./executeMethod";
import { initializeSDK, SdkConfig } from "./initialize";
const PLAYGROUND_GITHUB_REPO = "https://github.com/cedelabs/sdk-examples";

export const sdkConfig: SdkConfig = {
  selectedMode: CONFIG.SDK_MODE,
  cedeSDK: null,
  exchanges: [],
  selectedExchange: CONFIG.SELECTED_EXCHANGE,
};

export const getPrompt = () =>
  `${chalk.green("Cede SDK ")} [${chalk.blue(sdkConfig.selectedMode)}] [${chalk.blue(sdkConfig.selectedExchange)}] > `;

export const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: getPrompt(),
});

function ensurePrivateSdkInstalled() {
  const __filename = fileURLToPath(import.meta.url);
  const sdkFile = fs.readFileSync(path.join(path.dirname(__filename), "sdk.ts"), "utf-8");
  if (!sdkFile.includes("@cedelabs-private/sdk")) {
    console.log(
      "  Private SDK is not available. Please run ./switchToProd.sh or install the package @cedelabs-private/sdk manually (check README.md).",
    );
    return false;
  }

  return true;
}

function showMenu() {
  console.log(`
    Choose an option:
    1. Execute a method (type 'method [methodName]')
    2. See available methods (type 'methods')
    3. Switch mode (type 'mode [demo|real]')
    3. Change an exchange (type 'exchange [setting]')
    4. See available exchanges (type 'exchanges')
    5. More details (type 'help')
    6. Exit (type 'exit')
    `);
  rl.prompt();
}

rl.on("line", async (line) => {
  const input = line.trim().split(" ");
  const command = input[0];
  const args = input.slice(1);

  switch (command) {
    case "mode":
      if (args[0] === "demo" || args[0] === "real") {
        if (sdkConfig.selectedMode === args[0]) {
          console.log(`  Already in ${args[0]} mode.`);
          showMenu();
          break;
        }

        // check if private sdk is available
        // read ./sdk file and make sure there's an import from package @cedelabs-private/sdk
        const installed = ensurePrivateSdkInstalled();
        if (!installed) {
          showMenu();
          break;
        }
        if (args[0] === "real") {
          if (CONFIG.CLIENT_ID !== "sdk-***") {
            console.log(`  Using client ID from config: ${CONFIG.CLIENT_ID}`);
            console.log("  Switching to real mode...");
            await initializeSDK(args[0], sdkConfig, CONFIG.CLIENT_ID);
            showMenu();
            break;
          } else {
            console.log("Please, provide the client ID:");
            await new Promise((r) => {
              rl.question("Client ID: ", async (clientId) => {
                console.log("  Switching to real mode...");
                await initializeSDK(args[0], sdkConfig, clientId);
                r("");
              });
            });
          }
        } else {
          console.log("  Switching to demo mode...");
          await initializeSDK(args[0], sdkConfig);
        }
        console.log(`  Switched to ${args[0]} mode.`);
        showMenu();
      } else {
        console.log('  Invalid mode. Use "demo" or "real".');
        rl.prompt();
      }
      break;
    case "method": {
      const methodName = args[0].trim();
      if (sdkConfig.cedeSDK === null) {
        console.log("SDK is not initialized.");
        showMenu();
        break;
      }
      await executeMethod(methodName, sdkConfig.cedeSDK, sdkConfig.selectedExchange);
      showMenu();

      break;
    }
    case "exchange": {
      const invalidExchange = () => {
        console.log("Invalid exchange id.");
        console.log("Supported exchanges:\n    -", sdkConfig.exchanges.join("\n    - "));
      };
      if (args.length) {
        const desiredExchange = args[0];
        if (!sdkConfig.exchanges.includes(desiredExchange)) {
          invalidExchange();
          rl.prompt();
          return;
        }
        sdkConfig.selectedExchange = desiredExchange;
      } else {
        invalidExchange();
      }
      rl.setPrompt(getPrompt());
      showMenu();
      break;
    }
    case "exit":
      rl.close();
      return;
    case "exchanges":
      console.log("Supported exchanges:\n    -", sdkConfig.exchanges.join("\n    - "));
      showMenu();
      break;
    case "methods": {
      const methods = getAvailableMethods();
      console.log("Available methods:");
      Object.entries(methods).forEach(([folder, files]) => {
        console.log(`  ${folder}:`);
        files.forEach((file) => console.log(`    - ${file}`));
      });
      showMenu();
      break;
    }
    case "help": {
      console.log(`  Opening ${PLAYGROUND_GITHUB_REPO}...`);
      open(PLAYGROUND_GITHUB_REPO).catch(() => {
        console.log(`  Failed to open your browser.\n`);
        console.log(`  Please, visit ${PLAYGROUND_GITHUB_REPO} for more details.`);
      });
      showMenu();
      break;
    }
    default:
      console.log("Unknown command.");
      showMenu();
  }
});

console.log("  Initializing...");
if (CONFIG.SDK_MODE === "real") {
  const installed = ensurePrivateSdkInstalled();
  if (!installed) {
    process.exit(1);
  }
}
initializeSDK(CONFIG.SDK_MODE, sdkConfig, CONFIG.CLIENT_ID).then(showMenu);
