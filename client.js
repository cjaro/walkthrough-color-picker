$(document).ready(function(){
  console.log('jQuery is ready to go');
  var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Blue', 'burlywood']; //colors to use later

  for (var i = 0; i < colorArray.length; i++) {
    colorArray[i]
    //adding new block
    var newColorBlock = $('<div>'); //creates empty div
    newColorBlock.css('background-color', colorArray[i]); //adds color to empty div (ith color)
    newColorBlock.addClass('colorBlock'); //adds class to empty div - gives it height and width
    newColorBlock.data('colorOfBlock', colorArray[i]); //adds info to DOM without showing it to user
    $('#colorBlockContainer').append(newColorBlock); //add div to DOM
  }

  $('#colorBlockContainer').on('click', '.colorBlock', function(){ //event listener for clicks
    console.log('$(this).data().colorOfBlock : ', $(this).data().colorOfBlock);
    var colorOfBlockSelected = $(this).data().colorOfBlock;
    if(randomColor == colorOfBlockSelected){
      $('#responseSection').text('You got it!');
    } else {
      $('#responseSection').text('Oh no! That is not right!');
    }
  });

  // select random color and add to DOM
  var randomNumberSelected = randomNumber(0, colorArray.length-1); //get random number 0 through 4 (in this case)
  var randomColor = colorArray[randomNumberSelected]; //uses randomNumberSelected(0-4) to pick a color from colorArray
  $('#userColorPrompt').text(randomColor);

});

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
