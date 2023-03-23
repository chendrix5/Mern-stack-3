<?php
session_start();

include("db.php");

if($_SERVER['REQUEST_METHOD'] == "POST")
{
    $email = $_POST['email'];
    $password = $_POST['password'];

    if(!empty($email) && !empty($password) && !is_numeric($email)){
        $query = "select * from form where email = '$email' limit 1";
        $result = mysqli_query($con, $query);

        if($result)
        {
            if($result && mysqli_num_rows($result) > 0)
            {
                $user_data = mysqli_fetch_assoc($result);

                if($user_data['pass'] ==$password){
                    header("location: index.php");
                    die;
                }            
            }
        }
        echo "<script type='text/javascript'> alert('Wrong Username or Password')</script>";
    }
    else{
        echo "<script type='text/javascript'> alert('Wrong Username or Password')</script>";
    }
}

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Login</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="login.css">
        <!--Bootstrap link-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></script>
    </head>

    <body>
        <!--bootstrap for javascript-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

        <!--SIGN UP FORMS START-->

        <h1>LOGIN</h1>

        <form class="signup" method="POST">
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
            </div>
            <input type="submit" name="" value="Login">
        </form>
        <p>Don't have an account? <a href="signup.php">Sign up here</a></p>



    </body>
</html>