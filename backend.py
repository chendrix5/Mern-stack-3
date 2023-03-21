import psycopg2

try:
    
    conn = psycopg2.connect(
        dbname="bootcamp",
        user="postgres",
        password="Guitar04",
        host="localhost",
        port="5432"
    )
    print("Connection to PostgreSQL database successful")

    
    cur = conn.cursor()

     
    cur.execute("ALTER TABLE bootcamp ALTER COLUMN bootcamp TYPE char")

    
    conn.commit()

    
    cur.execute("SELECT * FROM bootcamp")
    rows = cur.fetchall()
    for row in rows:
        print(row)

except (Exception, psycopg2.Error) as error:
    print("Error connecting to PostgreSQL:", error)

finally:
    
    cur.close()
    conn.close()
