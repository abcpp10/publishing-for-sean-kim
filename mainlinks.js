const letterbutton = document.querySelector("#letterButton");
const noticebutton = document.querySelector("#noticeButton");
const boardbutton = document.querySelector("#boardButton");
const myroombutton = document.querySelector("#myroomButton");


letterbutton.addEventListener('click', xGoLetter,false);
noticebutton.addEventListener('click', xGoNotice, false);
boardbutton.addEventListener('click', xGoBoard, false);
myroombutton.addEventListener('click', xGoMyroom, false);


function xGoLetter() {
    location.href="letter.html";
    }
function xGoNotice() {
    alert('아직 준비 중입니다.');
    //location.href="notice.html";        
    }
    function xGoBoard() {
    alert('아직 준비 중입니다.');
    //location.href="board.html";        
    }    
    function xGoMyroom() {
    alert('아직 준비 중입니다.');
    //location.href="myroom.html";        
    }

