from flask import Flask, render_template, send_from_directory, request, jsonify
import os
import time
import threading

from flask_cors import CORS

app = Flask(__name__,static_folder='frontend1/src/services',template_folder='frontend1/src/templates')
CORS(app, resources={r"/*": {"origins": "*"}}) 

def display_notification(title, message):
    os.system(f'osascript -e \'display notification "{message}" with title "{title}"\'')

def send_notifications(title, message, interval, repetitions):
    for i in range(repetitions):
        display_notification(title, message)
        print(f"Notification {i + 1}/{repetitions} sent.")
        if i < repetitions - 1:
            time.sleep(interval)

@app.route('/')
def index():
    return render_template('index.html')  

@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)

@app.route('/send_notifications', methods=['POST'])
def send_notifications_api():
    print("Received request at /send_notifications")
    data = request.json
    print(f"Request data: {data}")

    title = data.get('title', 'Rest Reminder')
    message = data.get('message', 'Take a break! You’ve worked hard.')
    interval = int(data.get('interval', 5))
    repetitions = int(data.get('repetitions', 3))
    
    thread = threading.Thread(target=send_notifications, args=(title, message, interval, repetitions))
    thread.start()

    return jsonify({'status': 'success', 'message': 'Notifications started'})
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
