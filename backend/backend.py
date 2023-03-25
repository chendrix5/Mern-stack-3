from flask import Flask, request, jsonify
import psycopg2

app = Flask(__name__)

# GET request to fetch all reviews from the database
@app.route('/reviews', methods=['GET'])
def get_reviews():
    conn = psycopg2.connect(
        dbname="bootcamp",
        user="postgres",
        password="Guitar04",
        host="localhost",
        port="5432"
    )
    cur = conn.cursor()
    cur.execute("SELECT * FROM bootcamp")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(rows)

# POST request to add a new review to the database
@app.route('/reviews', methods=['POST'])
def add_review():
    data = request.get_json()
    conn = psycopg2.connect(
        dbname="bootcamp",
        user="postgres",
        password="Guitar04",
        host="localhost",
        port="5432"
    )
    cur = conn.cursor()
    cur.execute("INSERT INTO reviews (rating, comment, name) VALUES (%s, %s, %s)", (data['rating'], data['comment'], data['name']))
    conn.commit()
    cur.close()
    conn.close()
    return "Review added successfully", 201

if __name__ == '__main__':
    app.run(debug=True)