#!/usr/bin/env python3
"""
Simple local server to run the birthday website
Run this file to start the server, then visit http://localhost:8000 in your browser
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 8000
DIRECTORY = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

def run_server():
    os.chdir(DIRECTORY)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"\n🎉 Birthday Website Server Started!")
        print(f"📱 Open your browser and visit: {url}")
        print(f"🛑 Press Ctrl+C to stop the server\n")
        
        # Open browser automatically
        webbrowser.open(url)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n👋 Server stopped. See you next time!")

if __name__ == "__main__":
    run_server()
