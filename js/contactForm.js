function validateForm() {
    var fname = document.forms["contactForm"]["fname"].value;
    var lname = document.forms["contactForm"]["lname"].value;
    var validate = document.forms["contactForm"]["validate"].value;

    if (fname == null || fname == "") {
        alert("First name must be filled out");
        return false;
    } else if (lname == null || lname == "") {
        alert("Last name must be filled out");
        return false;
    } else if (validate != 4) {
        alert("You're bad at math, try again");
        return false;
    }
}