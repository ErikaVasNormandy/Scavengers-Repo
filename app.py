
from flask import Flask
from flask import request, redirect
from flask import render_template

app = Flask(__name__)



@app.route('/')
def index():
    return redirect("http://scavengers-repo.com")

    #return redirect("http://ec2-54-153-124-128.us-west-1.compute.amazonaws.com:8081", code=302)



@app.route('/flaskAngular')
def flaskAngular():
    return redirect("http://ec2-54-153-124-128.us-west-1.compute.amazonaws.com:3000", code=302)

@app.route('/flaskAngularlocal')
def flaskAngularLocal():
    return redirect("http://localhost:3000", code=302)

@app.route('/reactive-local')
def ReactiveFlask():
    return redirect("http://localhost:8081", code=302)



#	Myauthor = "Me"
#	Myname = "You"
#	return render_template("index.html", author=Myauthor, name=Myname )

@app.route('/profile')
def profilePage():
    return render_template("reactIndex.html")

@app.route('/formdemo')
def formDemo():
    return render_template("formDemo.html")

@app.route('/signup', methods = ['POST'])
def signup():
    email = request.form['email']
    print("the email address is '" + email + "'")
    return redirect('/')




if __name__ == '__main__':
    app.run(debug=True)
