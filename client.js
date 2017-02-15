$(document).ready(function(){
  console.log('jQuery is ready to go');
  var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine']; //colors to use later

  for (var i = 0; i < colorArray.length; i++) {
    colorArray[i]
    //adding new block
    var newColorBlock = $('<div>'); //creates empty div
    newColorBlock.css('background-color', colorArray[i]); //adds color to empty div (ith color)
    newColorBlock.addClass('colorBlock'); //adds class to empty div - gives it height and width
    $('#colorBlockContainer').append(newColorBlock); //add div to DOM

  }

});
