import { Any } from "@cedelabs/demo-sdk";
import fs from "fs";
import path from "path";
import * as prettyjson from "prettyjson";
import { fileURLToPath } from "url";
import CedeSDK from "./sdk";
export type ExecuteMethodParams = {
  cedeSDK: CedeSDK;
  exchangeInstanceId: string;
  exchangeId: string;
};
export type ExecuteMethod = (params: ExecuteMethodParams) => Promise<Any>;

export const getAvailableMethods = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename) + "/methods";
  const folders = fs.readdirSync(__dirname, { withFileTypes: true });
  const methods: Record<string, string[]> = {};
  folders
    .filter((folder) => folder.isDirectory())
    .forEach((folder) => {
      const folderPath = path.join(__dirname, folder.name);
      const files = fs.readdirSync(folderPath);
      methods[folder.name] = files.map((file) => file.replace(".ts", ""));
    });
  return methods;
};

export async function executeMethod(methodName: string, cedeSDK: CedeSDK, selectedExchange: string) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename) + "/methods";
  const folders = fs.readdirSync(__dirname, { withFileTypes: true });
  // open each folder and find the path to the method
  let methodPath = "";
  folders
    .filter((folder) => folder.isDirectory())
    .forEach((folder) => {
      const folderPath = path.join(__dirname, folder.name);
      const files = fs.readdirSync(folderPath);
      const method = files.find((file) => file === `${methodName}.ts`);
      if (method) {
        methodPath = path.join(folderPath, method);
      }
    });

  if (!methodPath) {
    console.log(`Method not found: '${methodName}'`);
    return;
  }

  console.log(`  Executing...`);

  const { executeMethod }: { executeMethod: ExecuteMethod } = await import(methodPath + `?update=${Date.now()}`);

  let result: Any;
  try {
    result = await executeMethod({
      cedeSDK,
      exchangeInstanceId: selectedExchange,
      exchangeId: selectedExchange,
    });
  } catch (e: Any) {
    console.log("  Error:", e);
    return;
  }

  console.log(prettyjson.render(result));
}
