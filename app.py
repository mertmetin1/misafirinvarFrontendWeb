from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    """Homepage with all sections"""
    return render_template('index.html')

@app.route('/temsilcilik')
def temsilcilik():
    """Representative system page"""
    return render_template('temsilcilik.html')

@app.route('/sss')
def sss():
    """FAQ page"""
    return render_template('sss.html')

@app.route('/destek')
def destek():
    """Support page"""
    return render_template('destek.html')

@app.route('/api/apps')
def get_apps():
    """API endpoint for featured apps"""
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
    return jsonify(apps)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
