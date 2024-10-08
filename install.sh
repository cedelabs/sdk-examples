#!/bin/bash

REPO_URL="https://github.com/cedelabs/sdk-examples/archive/refs/heads/master.zip"
INSTALL_DIR="$HOME/.playground-sdk"
BIN_DIR="$HOME/.local/bin"
EXECUTABLE_NAME="playground-sdk"

mkdir -p "$INSTALL_DIR"
mkdir -p "$BIN_DIR"

echo "Downloading Playground SDK..."
curl -L -o sdk-examples.zip "$REPO_URL"

unzip sdk-examples.zip -d "$INSTALL_DIR"
mv "$INSTALL_DIR/sdk-examples-master"/* "$INSTALL_DIR/"
rm -rf "$INSTALL_DIR/sdk-examples-master"
rm sdk-examples.zip

cd "$INSTALL_DIR" || exit 1

echo "install dir: $INSTALL_DIR"

echo "Installing dependencies..."
yarn install

echo "Creating executable wrapper script..."
cat <<EOF > "$BIN_DIR/$EXECUTABLE_NAME"
#!/bin/bash
cd "$INSTALL_DIR"
yarn start
EOF

chmod +x "$BIN_DIR/$EXECUTABLE_NAME"
chmod +x "$INSTALL_DIR/switchToProd.sh"

echo "export PLAYGROUND_SDK_DIR=\"$INSTALL_DIR\"" >> "$HOME/.bashrc"

if ! echo "$PATH" | grep -q "$BIN_DIR"; then
  echo "export PATH=\"$BIN_DIR:\$PATH\"" >> "$HOME/.bashrc"
  echo "Added $BIN_DIR to PATH. Restart your terminal or run 'source ~/.bashrc' to apply."
fi

echo "Playground SDK installed successfully to "$BIN_DIR/$EXECUTABLE_NAME"."
echo "Run $EXECUTABLE_NAME to start using it."