function myFunction() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user == "") {
      document.getElementById("message").innerHTML = "Username is required";
      return false;
    }
    if (pass == "") {
      document.getElementById("message").innerHTML = "Password is required";
      return false;
    }

    if (pass === "Username@123") {
      // alert("Login successful.");
      swal("Good job!", "Login successful!", "success");
      document.getElementById("formData").reset();
    } else {
      // alert("Login failed, Please try again.");
      swal("Error", "Login failed, Please try again!", "error");
    }
  }