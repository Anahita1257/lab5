function styling() {
  //Access the tags:
  var borderRed = document.getElementById("b-red").value;
  var borderGreen = document.getElementById("b-green").value;
  var borderBlue = document.getElementById("b-blue").value;
  var borderWidth = document.getElementById("b-width").value;

  var bgRed = document.getElementById("bg-red").value;
  var bgGreen = document.getElementById("bg-green").value;
  var bgBlue = document.getElementById("bg-blue").value;

  //Change the style attributes
  document.getElementById("SE").style.backgroundColor = 'rgb(' + bgRed + ',' + bgGreen + ',' + bgBlue + ')';
  document.getElementById("SE").style.border = borderWidth + ' solid '+ 'rgb(' + borderRed + ',' + borderGreen + ',' + borderBlue + ')';
}
