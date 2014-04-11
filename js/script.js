window.onload=function(){
	document.selected=false;
	document.cells=document.getElementsByTagName("span");
	cl(document.cells.length);
	var k=0;
	var field=new Array();
	for(var i=0;i<8;i++){
		field[i]=new Array();
		for(var j=0;j<8;j++)
			field[i][j]=document.cells[(56-i*8)+j];
	}
	
}

function cl(arg){
	console.log(arg);
}