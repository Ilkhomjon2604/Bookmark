elQuestion = document.querySelectorAll('.qa-wrapper');
elAnswer = document.querySelector(".answer");


for(let i=0; i<= elQuestion; i++){
elQuestion.addEventListener('click', function(){
elAnswer.classList.toggle(".asnwer-active")
})
};
