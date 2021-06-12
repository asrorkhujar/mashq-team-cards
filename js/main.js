var elsToggleButton = document.querySelectorAll('.team__button');
elsToggleButton.forEach(function(button){
  button.addEventListener('click', function(){
    button.closest('.team__card-box').classList.toggle('team-member__card--rotated');
  });
});