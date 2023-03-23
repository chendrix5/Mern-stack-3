<?php
session_start();

include("db.php");

if($_SERVER['REQUEST_METHOD'] == "POST")
{
    $name = $_POST['name'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if(!empty($email) && !empty($password) && !is_numeric($email))
    {
        $query = "insert into form (name, username, password, email) values ('$name', ' $username','$email', '$password')";

        mysqli_query($con, $query);

        echo"<script type='text/javascript'> alert('Sucessfully Register')</script>";
    }
    else{
        echo"<script type='text/javascript'> alert('Please Enter Valid Information')</script>";
    }
}

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Sign Up</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="login.css">
        <!--Bootstrap link-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>

    <body>
        <!--bootstrap for javascript-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

        <!--SIGN UP FORMS START-->

        <h1>SIGNUP</h1>

        <form method = "POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
                <label for="username">Username</label>
                <input type="text" id="username" name="username">
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
                <input type="submit" name="" value="Submit">
            </div>
        </form>
        <p>Already have an account? <a href="login.php">Login</a></p>



    </body>
</html>