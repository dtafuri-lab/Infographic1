#!/bin/bash
cd "$(dirname "$0")/.."
echo "Starting server at http://localhost:8000/bean-scores/"
echo "Press Ctrl+C to stop the server when done."
open "http://localhost:8000/bean-scores/"
python3 -m http.server 8000
