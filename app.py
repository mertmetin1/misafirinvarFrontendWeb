from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    """Homepage with all sections"""
    return render_template('index.html')



@app.route("/hakkimizda")
def hakkimizda():
    return render_template("hakkimizda.html")


@app.route("/destek")
def destek():
    return render_template("destek.html")

@app.route("/iletisim")
def iletisim():
    return render_template("iletisim.html")

@app.route("/sss")
def sss():
    return render_template("sss.html")

@app.route("/temsilcilik")
def temsilcilik():
    return render_template("temsilcilik.html")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
