from flask import request, jsonify
from config import app
from database.index import *
@app.route("/", methods=["POST"])
def login():
  data = jsonify(request.json)
  print(data)
  return "Hi"

if __name__ == "__main__":
    app.run(debug=True)