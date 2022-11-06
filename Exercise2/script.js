var crnt;
var spltName;
var imgName;
var ind;

function Current() {
  //get name of current picture
  crnt = String(document.getElementById("activeImage").src);
  spltName=crnt.split("/");
  imgName = spltName[spltName.length - 1];

  //get index of the current picture
  ind=Number(imgName.split(".")[0]);

}
function next() {
  //if index is less than 6, go to the next picture
  if(ind<6)
  {
    ind=ind+1;
  }
  //if index is 6, go to the first picture
  else if(ind==6)
  {
    ind=1;
  }

  //display next image
  document.getElementById('activeImage').src= ind + ".jpg";
}

function previous() {
  //if index is greater than 1, go to the previous picture
  if(ind>1)
  {
    ind=ind-1;
  }
  //if index is 1, go to the last picture
  else if(ind==1)
  {
    ind=6;
  }
  //display next image
  document.getElementById('activeImage').src= ind + ".jpg";
}
