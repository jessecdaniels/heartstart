function validateForm() {
    var fname = document.forms["contactForm"]["fname"].value;
    var lname = document.forms["contactForm"]["lname"].value;
    var validate = document.forms["contactForm"]["validate"].value;


    if (fname == null || fname == "") {
        alert("First name must be filled out"); // alert user if first name field is missing 
        return false;
    } else if (lname == null || lname == "") { 
        alert("Last name must be filled out"); // alert user if last name field is missing 
        return false;
    } else if (validate != 4) { 
        alert("Maybe math is not your strong suit? Please try again."); // if user gives any answer other than 4 they give an alert message
        return false;
    }
}