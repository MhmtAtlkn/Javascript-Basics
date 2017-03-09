var ArrayDropDowns=document.getElementsByTagName("select"); //getting dropdown dom objects into array
var divElement=document.getElementById("divId");

function changeFunction(){
    var style=this.id; //this keyword is in addEventListener so this is equlat to dropdown dom object  
    var value=this.value;

    divElement.style[style]=value;
}

for(var i=0;i<ArrayDropDowns.length;i++){   //iterates over dropdown dom objects
    ArrayDropDowns[i].addEventListener("change",changeFunction) // if value changes triggers changeFunc
}