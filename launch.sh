#!/bin/bash

# Birthday Website Launcher
# This script launches the birthday website in your browser

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo "🎉 Starting Birthday Website..."
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 server.py
else
    echo "❌ Python 3 is required but not found."
    echo "Please install Python 3 from https://www.python.org/downloads/"
    exit 1
fi
