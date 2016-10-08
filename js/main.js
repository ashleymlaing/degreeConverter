// //Event Listner
// document.getElementById("convertButtonToF").onclick=convertToF;
// //Function that does the Conversion
//   function convertToF(){
// 	//Pulls value from input
//   var degreeC = document.getElementById("a").value;
//   //Converts Value
//   var degreeF = (degreeC * 1.8) + 32;
//   //Displays Value back to user
//   document.getElementById("convert").innerHTML = degreeF;
// }


//Eventlistner
document.getElementById("buttonConvertToF").onclick=convertToF;
//function to make the Conversion
   function convertToF(){
 	//Pulls value from input
   var degC = document.getElementById("degreeC").value;
   //Converts Value
   var degF = (degC * 1.8) + 32;
   //Displays Value back to user
   document.getElementById("answerF").innerHTML = degF;
 }

 //Eventlistner
 document.getElementById("buttonConvertToC").onclick=convertToC;
 //function to make the Conversion
    function convertToC(){
  	//Pulls value from input
    var Cel = document.getElementById("degreeF").value;
    //Converts Value
    var  Fah = (Cel-32) * (5 / 9) ;
    //Displays Value back to user
    document.getElementById("answerC").innerHTML = Fah;
  }
