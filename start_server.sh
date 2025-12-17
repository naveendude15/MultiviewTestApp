#!/bin/bash
# Simple HTTP server to serve the HTML files for testing
# Run this on your local machine before deploying the WGT to the device

cd "$(dirname "$0")"

echo "=========================================="
echo "Starting HTTP server for Multi-View App"
echo "=========================================="
echo ""
echo "Server will run on port 8000"
echo ""
echo "Your machine's IP addresses:"
hostname -I
echo ""
echo "Access the app at:"
echo "  http://<your-ip>:8000/index-SHAKA.html"
echo ""
echo "Example: http://192.168.1.100:8000/index-SHAKA.html"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=========================================="
echo ""

# Start Python HTTP server
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "Error: Python is not installed!"
    echo "Please install Python to run the HTTP server"
    exit 1
fi
