let elsTabTitle = document.querySelectorAll(".features-list-title");
let elsTabPanel = document.querySelectorAll(".js-features-item");
let elsTabLink = document.querySelectorAll(".js-tab-link");

let elsQuestionWrapper = document.querySelectorAll(".qa-wrapper");
let elAnswerOpener = document.querySelector('.show_answer');

function DeactivateTabItem () {
  elsTabTitle.forEach( function(elTabTitle){
    elTabTitle.classList.remove("list-title-active")
  });
};

function DeactivateTabPanel () {
  elsTabPanel.forEach( function(elTabPanel){
    elTabPanel.classList.remove("features-list-item-active")
  });
};

elsTabLink.forEach( function (elTabLink) {
  elTabLink.addEventListener('click', function(evt){
    // Prevent page move?
    evt.preventDefault();

    // Remove item ACtive class from features-list-title
    DeactivateTabItem();

    // Add active class to current item title
    elTabLink.parentElement.classList.add("list-title-active");

    // Deactivate feature panel
    DeactivateTabPanel ();

    //Add activation class to current panel

    let elTabTarget = document.querySelector(elTabLink.dataset.tabTarget);
    elTabTarget.classList.add("features-list-item-active");


  });
});

elsQuestionWrapper.forEach(function (questionWrapper){
  questionWrapper.addEventListener('click', function(){
    questionWrapper.classList.toggle('show_answer');
  });
});