# misafirinvar - Flask Bootstrap Web Application

A modern Turkish university platform website built with **Python Flask**, **Bootstrap 5**, **JavaScript**, **CSS**, and **HTML**. Designed for university students to connect, share resources, and access campus services.

## 🚀 Technologies Used

- **Python Flask** - Backend web framework
- **Bootstrap 5** - Frontend CSS framework
- **JavaScript** - Interactive functionality
- **HTML5** - Semantic markup via Jinja2 templates
- **CSS3** - Custom styling and animations
- **Font Awesome** - Professional icons

## 🎯 Features

### 🏠 **Homepage**

- **Responsive Navigation** with Bootstrap navbar
- **Hero Section** with animated elements and call-to-action
- **Featured Apps Grid** showcasing platform services
- **Interactive Elements** with hover effects and animations

### 📱 **Featured Applications**

- **Misafirlik** - University student hosting platform
- **Etkinlikler** - Campus events and social activities
- **UniSpot** - Campus map and location sharing
- **Tanıtım Videosu** - Promotional video section

### 📄 **Additional Pages**

- **Temsilcilik Sistemi** - Representative system information
- **SSS** - FAQ with Bootstrap accordion
- **Destek** - Support center with contact form

### 🎨 **Design Features**

- **Orange Gradient Theme** (#FF6B35 to #FF8A47)
- **Bootstrap Components** - Cards, buttons, forms, modals
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - CSS transitions and JavaScript effects
- **Interactive Elements** - Hover effects, form validation

## 📋 Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

## 🛠️ Installation & Setup

1. **Create project directory**:

   ```bash
   mkdir misafirinvar-flask
   cd misafirinvar-flask
   ```

2. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**:

   ```bash
   python app.py
   ```

4. **Access the website**:
   ```
   http://localhost:5000
   ```

## 📁 Project Structure

```
misafirinvar-flask/
├── app.py                    # Main Flask application
├── requirements.txt          # Python dependencies
├── README.md                # Documentation
├── templates/               # Jinja2 HTML templates
│   ├── base.html           # Base template with Bootstrap
│   ├── index.html          # Homepage
│   ├── temsilcilik.html    # Representative system
│   ├── sss.html            # FAQ page
│   └── destek.html         # Support page
└── static/                 # Static assets
    ├── css/
    │   └── custom.css      # Custom CSS styling
    └── js/
        └── main.js         # JavaScript functionality
```

## 🎨 Bootstrap Components Used

### **Layout & Grid**

- `container`, `row`, `col-*` for responsive layout
- `d-flex`, `justify-content-*`, `align-items-*` for flexbox

### **Navigation**

- `navbar`, `nav-link`, `navbar-toggler` for responsive navigation
- `navbar-brand` with logo and text

### **UI Components**

- `card`, `card-body`, `card-header` for content sections
- `btn`, `btn-*` for buttons with various styles
- `badge` for app labels
- `accordion` for FAQ section
- `modal` for video popup
- `toast` for notifications

### **Forms**

- `form-control`, `form-select`, `form-label` for form elements
- `was-validated`, `is-invalid` for validation states

## 🎯 Custom CSS Features

### **Color Scheme**

```css
:root {
  --orange-primary: #ff6b35;
  --orange-secondary: #ff8a47;
  --orange-light: #fff3f0;
}
```

### **Custom Classes**

- `.bg-orange-gradient` - Orange gradient backgrounds
- `.text-orange` - Orange text color
- `.btn-orange` - Orange styled buttons
- `.hero-circle` - Animated hero section visual
- `.app-card` - Enhanced card styling with hover effects

### **Animations**

- Floating animation for hero visual
- Fade-in effects for sections
- Hover transforms for cards
- Smooth scrolling navigation

## 🔧 JavaScript Features

### **Interactive Elements**

- Smooth scrolling navigation
- Mobile menu auto-close
- Form validation with Bootstrap
- Dynamic modal creation
- Toast notifications

### **API Integration**

- `/api/apps` endpoint for dynamic app data
- Async data loading with fetch API

### **Utility Functions**

- Debounce for performance optimization
- Viewport detection
- Scroll position tracking

## 📱 Responsive Design

### **Breakpoints**

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

### **Responsive Features**

- Collapsible navigation menu
- Fluid grid system
- Responsive typography
- Touch-friendly buttons
- Optimized images

## 🚀 Deployment

### **Development**

```bash
python app.py
# Runs on http://localhost:5000 with debug mode
```

### **Production**

```bash
pip install gunicorn
gunicorn app:app
```

### **Environment Variables**

```bash
export FLASK_ENV=production
export FLASK_DEBUG=0
```

## 🔒 Security Features

- Form validation (client and server-side)
- CSRF protection capability
- Input sanitization
- Secure headers support

## 🎯 Future Enhancements

- [ ] User authentication system
- [ ] Database integration (PostgreSQL/MySQL)
- [ ] Admin dashboard
- [ ] API endpoints for mobile app
- [ ] Multi-language support
- [ ] Real-time chat functionality
- [ ] Push notifications

## 🛠️ Development Tips

### **Adding New Pages**

1. Create new HTML template in `templates/`
2. Add route in `app.py`
3. Update navigation in `base.html`

### **Customizing Styles**

1. Add custom CSS in `static/css/custom.css`
2. Use Bootstrap utilities when possible
3. Follow mobile-first approach

### **JavaScript Development**

1. Add new functions to `static/js/main.js`
2. Use Bootstrap's JavaScript API
3. Follow async/await patterns

## 📞 Support

For technical support or questions:

- **Email**: destek@misafirinvar.com
- **Documentation**: This README file
- **Issues**: Check browser console for errors

## 📄 License

This project is built for educational and demonstration purposes.

---

**Built with ❤️ using Flask, Bootstrap, and modern web technologies**

### Quick Start Commands

```bash
# Clone/download project files
mkdir misafirinvar-flask && cd misafirinvar-flask

# Install dependencies
pip install flask

# Run the application
python app.py

# Open browser
open http://localhost:5000
```
