
from flask import Flask,Response, request,jsonify,make_response,redirect ,session,render_template,url_for,send_from_directory
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

apiServer = "https://api.webdocedit.com"

CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
            
@app.route('/robots.txt')
def robots_txt():
    content = "User-agent: *\nDisallow:"
    return Response(content, mimetype='text/plain')

@app.before_request
async def before_request_func():
    if session.get("manifest") == None:
        session["manifest"] = {
            "title": "WebDocEdit",
            "tools":[
                {"merge_pdf":{"title":"Merge PDF","svg":"","description":"Combine PDFs in the order you want with the easiest PDF merger available.","new":True,"category":"ORGANIZE PDF" }},
                {"split_pdf":{"title":"Split PDF","svg":"","description":"Separate one page or a whole set for easy conversion into independent PDF files.","new":True,"category":"ORGANIZE PDF"}},
                {"remove_pages":{"title":"Remove Pages","svg":"","description":"Select and remove the PDF pages you don’t need. Get a new file without your deleted pages.","new":True,"category":"ORGANIZE PDF"}},
                {"organize_pdf":{"title":"Organize PDF","svg":"","description":"Sort, add and delete PDF pages.Drag and drop the page thumbnails and sort them in our PDF organizer.","new":True,"category":"ORGANIZE PDF"}},
                {"compress_pdf":{"title":"Compress PDF","svg":"","description":"Reduce file size while optimizing for maximal PDF quality.","new":True,"category":"OPTIMIZE PDF"}},
                {"repair_pdf":{"title":"Repair PDF","svg":"","description":"Upload a corrupt PDF and we will try to fix it.","new":True,"category":"OPTIMIZE PDF"}},
                {"ocr_pdf":{"title":"OCR PDF","svg":"","description":"Convert non-selectable PDF files into selectable and searchable PDF with high accuracy.","new":True,"category":"OPTIMIZE PDF"}},
                {"jpg_to_pdf":{"title":"JPG to PDF","svg":"","description":"Convert JPG images to PDF in seconds. Easily adjust orientation and margins.","new":True,"category":"CONVERT TO PDF"}},
                {"ppt_to_pdf":{"title":"PPT to PDF","svg":"","description":"Make PPT and PPTX slideshows easy to view by converting them to PDF.","new":True,"category":"CONVERT TO PDF"}},
                {"excel_to_pdf":{"title":"EXCEL to PDF","svg":"","description":"Convert Excel spreadsheets to PDF.","new":True,"category":"CONVERT TO PDF"}},
                {"html_to_pdf":{"title":"HTML to PDF","svg":"","description":"Convert HTML Web pages to PDF.","new":True,"category":"CONVERT TO PDF"}},
                {"pdf_to_jpg":{"title":"PDF to JPG","svg":"","description":"Convert each PDF page into a JPG or extract all images contained in a PDF.","new":True,"category":"CONVERT FROM PDF"}},
                {"pdf_to_word":{"title":"PDF to WORD","svg":"","description":"Convert your PDF to WORD documents with incredible accuracy.","new":True,"category":"CONVERT FROM PDF"}},
                {"pdf_to_ppt":{"title":"PDF to PPT","svg":"","description":"Convert your PDFs to POWERPOINT.","new":True,"category":"CONVERT FROM PDF"}},
                {"pdf_to_excel":{"title":"PDF to Excel","svg":"","description":"Convert your PDFs to Excel SpreadSheets.","new":True,"category":"CONVERT FROM PDF"}},
                {"rotate_pdf":{"title":"Rotate PDF","svg":"","description":"Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!","new":True,"category":"EDIT PDF"}},
                {"add_page_number":{"title":"Add PDF page numbers","svg":"","description":"Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.","new":True,"category":"EDIT PDF"}},
                {"add_watermark":{"title":"Add watermark into a PDF","svg":"","description":"Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position.","new":True,"category":"EDIT PDF"}},
                {"remove_watermark":{"title":"Remove Watermark from a PDF","svg":"","description":"Remove image over your PDF in seconds. Choose the typography, transparency and position.","new":True,"category":"EDIT PDF"}},
                {"edit_pdf":{"title":"Edit PDF","svg":"","description":"Edit PDF by adding text, shapes, comments and highlights. Your secure and simple tool to edit PDF.","new":True,"category":"EDIT PDF"}},
                {"compare_pdf":{"title":"Compare PDF","svg":"","description":"Easily display the differences between two similar files.","new":True,"category":"PDF SECURITY"}},
                {"redact_pdf":{"title":"Redact PDF","svg":"","description":"Remove sensitive content from PDFs","new":True,"category":"PDF SECURITY"}},
                {"sign_pdf":{"title":"Sign PDF","svg":"","description":"Your tool to eSign documents. Sign a document yourself or send a signature request to others.","new":True,"category":"PDF SECURITY"}},
                {"protect_pdf":{"title":"Encrypt PDF","svg":"","description":"Encrypt your PDF with a password to keep sensitive data confidential.","new":True,"category":"PDF SECURITY"}},
                {"unlock_pdf":{"title":"Decrypt PDF","svg":"","description":"Remove PDF password security, giving you the freedom to use your PDFs as you want.","new":True,"category":"PDF SECURITY"}}
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
        
@app.route("/libpdf/<string:id>/<path:file_dir>")
def webview_utils(id,file_dir):
    print(file_dir)
    file_dir = file_dir.replace(".map","")
    return send_from_directory("static/",path=file_dir)
    
@app.route("/libpdf/<string:id>/ui/index.html")
def webview(id):
    print(id)
    return render_template("webview/index.html",manifest=session['manifest'])

@app.route("/stripe/execute",methods=["POST"])
def stripe_pay():
    print(request.form)
    return jsonify({})

@app.route("/paypal/create",methods=["POST"])
def paypal_pay():
    print(request.form)
    return "EC-64F96244MB6033632"

@app.route("/problem/<string:tool>/<string:key>/")
@app.route("/problem/<string:tool>/<string:key>/<int:id>")
@app.route("/problem/<string:tool>/<string:key>/<int:id>/ServerError")
def error_merge(tool,key,id):
    return "An error occured during "+tool+"<a href='/'>Home</a>"


@app.route("/download/<int:id>/<string:key>")
def success_download(id,key):
    print("id",id)
    global apiServer
    return render_template("download.html",url_key=key,url_id=id,manifest=session["manifest"],apiServer=apiServer)

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
        return redirect(url_for("register"))
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
        return render_template("tools/"+found["tool"]+".html",manifest=session["manifest"],tool=found)
    return render_template("tool.html",manifest=session["manifest"],tool=found)


    


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8081))#host="0.0.0.0",
    app.run( port=port,debug=True )
