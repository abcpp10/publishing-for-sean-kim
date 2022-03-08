const boardField = document.querySelector("#boardField");
const boardSubmitButton = document.querySelector("#boardSubmitButton")


boardField.addEventListener('keyup',xTT,false);


function xTT() {

    if(boardField.value == "") {
        boardSubmitButton.className = "boardSubmitButtonDisabled"
    }
    else {
        boardSubmitButton.className = "boardSubmitButton"
    }

}

