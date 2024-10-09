#!/bin/bash

echo "Logging in to AWS CodeArtifact to download the SDK package..."

aws codeartifact login --tool npm --repository cedelabs-private --domain cedelabs-private --domain-owner 343260416470 --region eu-west-1 --namespace @cedelabs-private

if [ $? -ne 0 ]; then
  echo "Failed to authenticate on AWS CodeArtifact."
  exit 1
fi

echo "Downloading the SDK package..."
yarn add @cedelabs-private/sdk

if [ $? -ne 0 ]; then
  echo "Failed to add the package."
  exit 1
fi

echo "Updating the playgroung environment..."

sed -i '' 's|import CedeSDK from "@cedelabs/demo-sdk";|import CedeSDK from "@cedelabs-private/sdk";|' ./sdk.ts

if [ $? -ne 0 ]; then
  echo "Failed to update the import statement in sdk.ts."
  exit 1
fi

echo "Switched to the production environment successfully."
