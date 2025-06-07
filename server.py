#!/usr/bin/env python3
import http.server
import socketserver
import os
import json
from urllib.parse import urlparse, parse_qs

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=".", **kwargs)
    
    def do_GET(self):
        # Parse the URL
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        # API endpoint for apps
        if path == '/api/apps':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            apps = [
                {
                    'id': 1,
                    'name': 'Misafirlik',
                    'description': 'Üniversite öğrencileri için misafirlik platformu',
                    'icon': 'fas fa-users',
                    'badge': 'Misafirlik App'
                },
                {
                    'id': 2,
                    'name': 'Etkinlikler', 
                    'description': 'Kampüs etkinlikleri ve sosyal aktiviteler',
                    'icon': 'fas fa-calendar-alt',
                    'badge': 'Etkinlikler'
                },
                {
                    'id': 3,
                    'name': 'UniSpot',
                    'description': 'Kampüs haritası ve konum paylaşımı', 
                    'icon': 'fas fa-map-marker-alt',
                    'badge': 'UniSpot'
                }
            ]
            self.wfile.write(json.dumps(apps).encode())
            return
        
        # Route handling
        if path == '/' or path == '/index.html':
            self.serve_template('index.html')
        elif path == '/temsilcilik':
            self.serve_template('temsilcilik.html')
        elif path == '/sss':
            self.serve_template('sss.html')
        elif path == '/destek':
            self.serve_template('destek.html')
        else:
            # Serve static files
            super().do_GET()
    
    def serve_template(self, template_name):
        try:
            # Read the template file
            template_path = os.path.join('templates', template_name)
            if os.path.exists(template_path):
                with open(template_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Simple template processing (replace Flask url_for)
                content = content.replace("{{ url_for('static', filename='css/custom.css') }}", "/static/css/custom.css")
                content = content.replace("{{ url_for('static', filename='js/main.js') }}", "/static/js/main.js")
                content = content.replace("{{ url_for('static', filename='images/student-placeholder.svg') }}", "/static/images/student-placeholder.svg")
                
                self.send_response(200)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.end_headers()
                self.wfile.write(content.encode('utf-8'))
            else:
                self.send_error(404, "Template not found")
        except Exception as e:
            self.send_error(500, f"Error serving template: {str(e)}")

def run_server(port=5000):
    handler = MyHTTPRequestHandler
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"Server running at http://localhost:{port}/")
        print("Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    run_server(5000)
