
var propertyType = document.querySelector(".ptype");
var comType=document.querySelector(".comtype");
var resType=document.querySelector(".restype");
var land=document.querySelector(".resland");
var landType=document.querySelector(".landselect");
var landChange=document.querySelector(".changes");
var landSize=document.querySelector(".landsize");

resType.style.display="none";


propertyType.addEventListener("change",function(){

	var ptype = propertyType.value
	if(ptype=="Residential")
	 {
            comType.style.display="none";
            resType.style.display="inline";
            landChange.style.display="inline";
            landSize.style.display="none";
   
            var ifLand = land.value;
	        if(ifLand =="Land")
	         { 
                landType.style.display="none";
	         }
	         else
	         {
	 	        landType.style.display="block";
	         }


	 }
	else if(ptype=="Commercial")
	 {
        resType.style.display="none";
        comType.style.display="inline";
        landType.style.display="block";
        landSize.style.display="none";
   	 }
})
 
land.addEventListener( "change" ,function(){

	var ifLand = land.value;
	if(ifLand =="Land")
	 { 
        landType.style.display="none";
        landChange.style.display="none";
        landSize.style.display="inline";        
	 }
	 else
	 {
	 	landType.style.display="block";
	 	landChange.style.display="inline";
	 	landSize.style.display="none";
	 }
})