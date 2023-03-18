import psycopg2

try:
    # Establish a connection to the database
    conn = psycopg2.connect(
        dbname="bootcamp",
        user="postgres",
        password="Guitar04",
        host="localhost",
        port="5432"
    )
    print("Connection to PostgreSQL database successful")

    # Create a cursor object
    cur = conn.cursor()

    # Execute a SQL query
    cur.execute("SELECT * FROM reviews")
    rows = cur.fetchall()
    for row in rows:
        print(row)

except (Exception, psycopg2.Error) as error:
    print("Error connecting to PostgreSQL:", error)

finally:
    # Close the cursor and connection objects
    cur.close()
    conn.close()