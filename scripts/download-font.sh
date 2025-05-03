#!/bin/bash

# Destination directory
FONT_DIR="src/assets/fonts"

# Font file name
FONT_FILE="ich1Q-hand-Regular.ttf"

# Download URL
URL="https://cloud.ich1q.one/s/YiAfAKScqFgMDHj/download/ich1Q-hand-Regular.ttf"

# Ensure the directory exists
mkdir -p "$FONT_DIR"

# Full path of the font file
FONT_PATH="$FONT_DIR/$FONT_FILE"

# Check if the font file already exists
if [ -f "$FONT_PATH" ]; then
  echo "Font already exists: $FONT_PATH"
  exit 0
fi

# Download the font file
curl -L -o "$FONT_PATH" "$URL"

# Verify download success
if [ $? -eq 0 ]; then
  echo "Font downloaded successfully to $FONT_PATH."
else
  echo "Failed to download the font." >&2
  exit 1
fi
