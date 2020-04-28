function CustomCSSBorder(Width,Length,Height,Color,Spacing){
	
	var Div = document.createElement("span");
	
	Div.style.textAlign="center";
	
	var lines = [];
	
	var SpacingEach = (parseInt(Width)/parseInt(Length));
	
	var prevI;
	for(var i=0;i<parseInt(Width);prevI=i,i+=((parseInt(Width)/parseInt(Length) +parseInt(Length) )) ){
		var b = document.createElement("div");
		b.style.display="inline-block";
	
		if(i==0){
			//i+=(parseInt(Length))/2
			//b.style.marginLeft = (parseInt(Length)/2) + "px";
		}
		
		b.style.background=Color;
		b.style.height=Height;
		
		//console.log(parseInt(Width))
		console.log(((parseInt(Width)/parseInt(Length))-parseInt(SpacingEach)))
		
		//b.style.width=((parseInt(Width)/parseInt(Length))-parseInt(Spacing))+"px";
		
		b.style.width=(100*parseFloat(Length)/parseFloat(Width)) + "%";
		
		if(i+(parseInt(Width)/parseInt(Length) +parseInt(Length) )<parseInt(Width)){
			b.style.marginRight=(parseInt(SpacingEach))+"px";
			Div.appendChild(b);
		}
		else{
			
			//var LastDiff = window.innerWidth - i + parseInt(Length);
			
			Div.children[Div.children.length-1].style.marginRight="0px";
			
			//Div.children[0].style.marginLeft = (SpacingEach)+"px";
			
			/*
			if((LastDiff-parseInt(Length))>0)
				Div.children[0].style.marginLeft = (LastDiff)+"px";
			else{
				//Div.children[0].style.marginLeft = "100px";
			}
			*/
			
			//Div.appendChild(b);
			
			break;
			
		}
		
	}
	
	return Div;
}
