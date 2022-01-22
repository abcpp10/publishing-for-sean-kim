const lettersubmit = document.querySelector("#letterSubmit");

lettersubmit.addEventListener('click',xLetterSubmit,false);


function xLetterSubmit() {
    if(confirm('익명 제보를 보내시겠습니까?')) {
        //작성한 내용을 서버에 보내야 함
        location.href="index.html";
    }
}
