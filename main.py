
from flask import Flask, request,jsonify,make_response,redirect ,session,render_template,url_for,send_from_directory
import os
from flask_cors import CORS
#from modules import *
#from models import * 
from datetime import datetime,timedelta,timezone
#from controllers import *
import json
#from daraja import *
from werkzeug.utils import secure_filename
app = Flask(__name__)

UPLOAD_FOLDER = os.path.join(os.getcwd(), 'static', 'uploads')
ALLOWED_EXTENSIONS = {'pdf'}

app.secret_key = 'ussd'

CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.before_request
async def before_request_func():
    if session.get("manifest") == None:
        session["manifest"] = {
            "title": "WebDocEdit",
            "tools":[
                {"merge_pdf":{"title":"Merge PDF","svg":"","description":"Combine PDFs in the order you want with the easiest PDF merger available.","new":True,"category":"ORGANIZE PDF" }},
                {"split_pdf":{"title":"Split PDF","svg":"","description":"","new":True,"category":"ORGANIZE PDF"}}
            ],
            "categories":["ORGANIZE PDF","OPTIMIZE PDF","CONVERT TO PDF","CONVERT FROM PDF","EDIT PDF","PDF SECURITY"]
        }
    if session.get("user") == None:
        session["manifest"]["user"] = None
    else:
        session["manifest"]["user"] = session.get("user")

@app.route('/static/uploads/<path:filename>')
def serve_static(filename):
    try:
        response = make_response(send_from_directory('static/uploads', filename))
        response.headers['Content-Type'] = 'application/pdf'
        response.headers['Content-Disposition'] = 'inline; filename=' + filename
        return response
    except FileNotFoundError:
        abort(404)
    
@app.route("/v1/upload",methods=["POST"])
def uploader():
    file = request.files['file']
    print(file)
    thumb = secure_filename(request.form['name'])
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], thumb))
    return jsonify({"server_filename":"/static/uploads/"+thumb})

@app.route("/stripe/execute",methods=["POST"])
def stripe_pay():
    print(request.form)
    return jsonify({})

@app.route("/paypal/create",methods=["POST"])
def paypal_pay():
    print(request.form)
    return "EC-64F96244MB6033632"

@app.route("/problem/<string:tool>/<string:key>/<int:id>/ServerError")
def error_merge(tool,key,id):
    return "An error occured during "+tool+"<a href='/'>Home</a>"


@app.route("/download/<string:key>/<int:id>")
def success_download(key,id):
    print("id",id)
    return render_template("download.html",key=key,id=id,manifest=session["manifest"],apiServer="http://localhost")

@app.route("/")
def index():
    return render_template("index.html",manifest=session["manifest"])

@app.route("/user",methods=["GET","POST"])
def user():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("user.html",manifest=session["manifest"])

@app.route("/user/premium")
def user_premium():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("premium.html",manifest=session["manifest"]) 

@app.route("/user/security")
def user_security():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("security.html",manifest=session["manifest"]) 

@app.route("/user/team")
def user_team():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("team.html",manifest=session["manifest"]) 

@app.route("/user/history")
def user_history():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("history.html",manifest=session["manifest"]) 

@app.route("/user/signatures")
def user_signatures():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("signatures.html",manifest=session["manifest"]) 
@app.route("/user/signatures/requests")
def user_signatures_request():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("signatures_request.html",manifest=session["manifest"]) 

@app.route("/user/signatures/pending")
def user_signatures_pending():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("signatures_pending.html",manifest=session["manifest"]) 

@app.route("/user/signatures/signed")
def user_signatures_signed():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("signatures_signed.html",manifest=session["manifest"]) 

@app.route("/user/signatures/templates")
def user_signatures_templates():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("signatures_templates.html",manifest=session["manifest"]) 

@app.route("/user/signatures/settings")
def user_signature_settings():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("signatures_settings.html",manifest=session["manifest"]) 

@app.route("/user/contacts")
def user_contacts():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("contacts.html",manifest=session["manifest"]) 

@app.route("/user/plan")
def user_plan():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("plan.html",manifest=session["manifest"]) 

@app.route("/user/business")
def user_business():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("user_business.html",manifest=session["manifest"]) 

@app.route("/user/invoices")
def user_invoices():
    if session["manifest"].get("user") == None:
        return redirect(url_for("logout"))
    return render_template("user_invoices.html",manifest=session["manifest"]) 

@app.route("/pricing")
def pricing():
    return render_template("pricing.html",manifest=session["manifest"])

@app.route("/business")
def business():
    return render_template("business.html",manifest=session["manifest"])

@app.route("/education")
def education():
    return render_template("education.html",manifest=session["manifest"])

@app.route("/features")
def features():
    return render_template("features.html",manifest=session["manifest"])

@app.route("/desktop")
def desktop():
    return render_template("desktop.html",manifest=session["manifest"])

@app.route("/mobile")
def mobile():
    return render_template("mobile.html",manifest=session["manifest"])

@app.route("/contact",methods=['GET','POST'])
def contact():
    return render_template("contact.html",manifest=session["manifest"])

@app.route("/logout")
def logout():
    session["user"] = None
    session["manifest"] = None
    return redirect(url_for("index"))

@app.route("/login",methods=["GET","POST"])
def login():
    if request.method == "POST":
        print(request.form)
        session["user"] = {"name":"Bradone Etole","email":"omwitsa@gmail.com","plan":0,"premium":False,"country":"KE"}
        return redirect(url_for("index"))
    return render_template("login.html",manifest=session["manifest"])

@app.route("/register",methods=["GET","POST"])
def register():
    return render_template("register.html",manifest=session["manifest"])

@app.route("/templates/<string:name>")
def load_template(name):
    return render_template("template/"+name+".html",manifest=session["manifest"])

@app.route("/templates/<string:name>/<string:name_n>")
def load_template_n(name,name_n):
    return render_template("template/"+name+"/"+name_n+".html",manifest=session["manifest"])
@app.route("/<string:title>")
def function(title):
    found = None
    if title:
        for tool in session["manifest"]["tools"]:
            for key in tool.keys():
                if key == title:
                    print("tool",tool)
                    found = tool[key]
                    found["tool"] = key
    if found != None:
        return render_template("tool.html",manifest=session["manifest"],tool=found)
    return render_template("tool.html",manifest=session["manifest"],tool=found)


    


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host="0.0.0.0", port=port,debug=True )
