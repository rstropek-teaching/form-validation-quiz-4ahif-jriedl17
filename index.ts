proofSubmit();

//Function which proofs if a warning window has to be showen or not
function proof(elmID:string){
    //getting the rigth element by the ID
    let elm = document.getElementById(elmID);

    if(elm == null){
        throwError("illegal element ID '"+elmID+"'");
    }
    //proofing if element is an INPUT element
    if(elm.tagName == "INPUT"){
        //cast the element to an HTMLInputElement
        elm = <HTMLInputElement> elm;
        //getting the warning window of the element by id 
        const warningAlert = document.getElementById(elmID+"Mandatory");

        if(elmID=="email"){
            const news : HTMLInputElement = document.getElementById("newsletter");

            if(news.checked && elm.value.length == 0){
                if(warningAlert != null){
                    setMandatoryTo(warningAlert,"visible");
                }
            }else{
                if(warningAlert != null){
                    setMandatoryTo(warningAlert,"hidden");
                }
            }
        }else{
            
            //hide the warning widow if the value of the element bigger than zero and if it isn't null
            if(elm.value != null && elm.value.length > 0){
                if(warningAlert != null){
                  setMandatoryTo(warningAlert,"hidden");
                }
            }else if(elm.value != null && elm.value.length == 0){
                if(warningAlert != null){
                    setMandatoryTo(warningAlert,"visible");
                }
            }
        }
        
    //proofing if element is an SELECT element
    }else if(elm.tagName == "SELECT"){
        //cast the element to an HTMLSelectElement
        elm = <HTMLSelectElement> elm;
        //getting the text box of the element by id 
        const text : HTMLSelectElement = <HTMLSelectElement> document.getElementById("otherMediaChannel");
        
        //if value of the element equals "Other" the tex box has to be shown, otherwise it has to be hidden
        if(elm.value == "Other"){
            if(text == null){
                throwError("illegal element ID for MediaChannel");
            }
            setMandatoryTo(text,"hidden");
        }else if(text.style.visibility == "hidden"){
            setMandatoryTo(text,"visible");
        }
    }
}

//throws given error message and exits the programm
function throwError(errormsg: string){
    throw new Error(errormsg);
}

//Function which sets the elm with the option ("visible" or "hidden")
function setMandatoryTo(elm: HTMLElement, option: string){
    elm.style.visibility = option;
    proofSubmit();
}

//proofs if the submit button has to be showen or not
function proofSubmit(){
    const btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submitBtn");
    const fNameMandatory : HTMLInputElement = <HTMLInputElement> document.getElementById("firstNameMandatory");
    const lNameMandatory : HTMLInputElement = <HTMLInputElement> document.getElementById("lastNameMandatory");
    const emailMandatory : HTMLInputElement = <HTMLInputElement> document.getElementById("emailMandatory");
    
    if(fNameMandatory.style.visibility == "hidden" && lNameMandatory.style.visibility == "hidden" && emailMandatory.style.visibility == "hidden"){
        btn.style.visibility = "visible";
    }else{
        btn.style.visibility = "hidden";
    }
}