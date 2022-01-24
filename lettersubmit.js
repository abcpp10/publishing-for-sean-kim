const letterSubmit = document.querySelector("#letterSubmitButton");
const letterField = document.querySelector("#letterField");
const letterFieldErrorMessage = document.querySelector("#letterFieldErrorMessage");

letterSubmit.addEventListener('click',xLetterSubmit,false);
letterField.addEventListener('keydown',xLetterFieldNoError,false);

function xLetterSubmit() {

    const form = document.querySelector("#letterForm");
    
    if (letterField.value == "") {
        letterField.className = "letterFieldError";
        letterFieldErrorMessage.style.display = "block";
        return false;
    }
    else {
        if(confirm('익명 제보를 보내시겠습니까?')) {
            form.submit();
        }
        else {
            return false;
        }
    }
}

function xLetterFieldNoError() {
    if (letterField.className == "letterFieldError") {
        letterField.className = "letterField";
        letterFieldErrorMessage.style.display = "none";
    }
}
