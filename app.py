
from flask import Flask
from flask import request, redirect
from flask import render_template

app = Flask(__name__)


@app.route('/')
def index():
	Myauthor = "Me"
	Myname = "You"
	return render_template("index.html", author=Myauthor, name=Myname )

@app.route('/profile')
def profilePage():
    return render_template("profile.html")

@app.route('/formdemo')
def formDemo():
    return render_template("formDemo.html")

@app.route('/signup', methods = ['POST'])
def signup():
    email = request.form['email']
    print("the email address is '" + email + "'")
    return redirect('/')


@app.route('/flaskAngular')
def flaskAngular():
 	return redirect("http://127.0.0.1:3000", code=302)




if __name__ == '__main__':
    app.run(debug=True)
