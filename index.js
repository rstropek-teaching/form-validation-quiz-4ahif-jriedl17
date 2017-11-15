proofSubmit();
//Function which proofs if a warning window has to be showen or not
function proof(elmID) {
    //getting the rigth element by the ID
    var elm = document.getElementById(elmID);
    if (elm == null) {
        throwError("illegal element ID '" + elmID + "'");
    }
    //proofing if element is an INPUT element
    if (elm.tagName == "INPUT") {
        //cast the element to an HTMLInputElement
        elm = elm;
        //getting the warning window of the element by id 
        var warningAlert = document.getElementById(elmID + "Mandatory");
        if (elmID == "email") {
            var news = document.getElementById("newsletter");
            if (news.checked && elm.value.length == 0) {
                if (warningAlert != null) {
                    setMandatoryTo(warningAlert, "visible");
                }
            }
            else {
                if (warningAlert != null) {
                    setMandatoryTo(warningAlert, "hidden");
                }
            }
        }
        else {
            //hide the warning widow if the value of the element bigger than zero and if it isn't null
            if (elm.value != null && elm.value.length > 0) {
                if (warningAlert != null) {
                    setMandatoryTo(warningAlert, "hidden");
                }
            }
            else if (elm.value != null && elm.value.length == 0) {
                if (warningAlert != null) {
                    setMandatoryTo(warningAlert, "visible");
                }
            }
        }
        //proofing if element is an SELECT element
    }
    else if (elm.tagName == "SELECT") {
        //cast the element to an HTMLSelectElement
        elm = elm;
        //getting the text box of the element by id 
        var text = document.getElementById("otherMediaChannel");
        //if value of the element equals "Other" the tex box has to be shown, otherwise it has to be hidden
        if (elm.value == "Other") {
            if (text == null) {
                throwError("illegal element ID for MediaChannel");
            }
            setMandatoryTo(text, "hidden");
        }
        else if (text.style.visibility == "hidden") {
            setMandatoryTo(text, "visible");
        }
    }
}
//throws given error message and exits the programm
function throwError(errormsg) {
    throw new Error(errormsg);
}
//Function which sets the elm with the option ("visible" or "hidden")
function setMandatoryTo(elm, option) {
    elm.style.visibility = option;
    proofSubmit();
}
//proofs if the submit button has to be showen or not
function proofSubmit() {
    var btn = document.getElementById("submitBtn");
    var fNameMandatory = document.getElementById("firstNameMandatory");
    var lNameMandatory = document.getElementById("lastNameMandatory");
    var emailMandatory = document.getElementById("emailMandatory");
    if (fNameMandatory.style.visibility == "hidden" && lNameMandatory.style.visibility == "hidden" && emailMandatory.style.visibility == "hidden") {
        btn.style.visibility = "visible";
    }
    else {
        btn.style.visibility = "hidden";
    }
}
