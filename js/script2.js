window.onload=function(){
	document.selected=false;
	document.cells=document.getElementsByTagName("td");
	for(var i=0;i<document.cells.length;i++)
		document.cells[i].onclick=action;
	//alert(String.fromCharCode('D'.charCodeAt(0)));


}

function action(){
	reset(document.cells);
	if(document.selected&&(this.innerHTML!=document.selected.innerHTML)){
		this.innerHTML=document.selected.innerHTML;
		document.selected.innerHTML="";
		document.selected=null;
		return;
	}
	if(isFigure(this)){
		document.selected=this;
		this.style.cssText="opacity:.4;text-shadow:0 0 5px black";
		check(this);
	}else
		document.selected=null;
			
}

function check(obj){
	var id=obj.getAttribute("id");
	switch (obj.innerText) {
		case "pawn":
			if(side=="white"){
				if(!isFigure(document.getElementById(""+id[0]+(Number(id[1]+1)))))
					obj.style.cssText="background:#080";
				if(id[1]==2){
					alert();
				}
			}else{
			
			}
			break;
		case "rook":

			break;
		case "knight":

			break;
		case "bishop":

			break;
		case "queen":

			break;
		case "king":

			break;
		
	  }

}

function side(obj){
	if(obj.innerHTML.indexOf("white")>=0)
		return "white";
	else
		return "black";
}

function isFigure(obj){
	return(obj.innerHTML.indexOf("span")>=0);
}

function reset(cells){
	for(var i=0;i<cells.length;i++)
		cells[i].style.cssText="";
}