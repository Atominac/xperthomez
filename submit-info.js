
var propertyType = document.querySelector(".ptype");
var comType=document.querySelector(".comtype");
var resType=document.querySelector(".restype");

resType.style.display="none";

propertyType.addEventListener("change",function(){

	var ptype = propertyType.value
	if(ptype=="Residential")
	 {
        comType.style.display="none";
        resType.style.display="inline";
	 }
	else if(ptype=="Commercial")
	 {
        resType.style.display="none";
        comType.style.display="inline";
	 }
})