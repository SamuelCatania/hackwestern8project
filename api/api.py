import time
from flask import Flask, json, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

@app.route('/api/time')
def get_current_time():
    return jsonify({"somethingelse": time.time()})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000)