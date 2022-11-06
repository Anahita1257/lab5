
  function ValidationPassword() {
    var p1 = document.getElementById("password_1").value;
    var p2 = document.getElementById("password_2").value;
    if(p1!=p2)
    {
      alert("The passwords don't match");
    }
    else if(p1.length < 8)
    {
      alert("The passwords are too short! It should be at least 8 characters!");
    }
    else if(p1 == p2)
    {
      alert("The password is valid!");
    }
  }
