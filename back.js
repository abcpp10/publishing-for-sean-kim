const backbutton = document.querySelector("#backButton");

backbutton.addEventListener('click',xGoBack,false);


function xGoBack() {
    history.go(-1);
}
