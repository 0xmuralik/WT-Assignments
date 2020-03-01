var arr;
function generate() {
	var from=document.getElementById("From").value;
	var to=document.getElementById("To").value;
	var limit=document.getElementById("LIMIT").value;
	arr=new Array(limit);
	//var text="";
	for(var i=0;i<limit;i++){
		arr.push(Math.floor(Math.random()*(+to - +from))+ +from);
		//text+=arr[i]+",";
	}
	document.theForm.numGenerated.value=arr;
}

function minimum(){
	var min=arr[0];
	for(i=1;i<arr.length;i++){
		if(min>arr[i]){
			min=arr[i];
		}
	}
	document.theForm.minResult.value=min;
}
function maximum(){
	var max=arr[0];
	for(i=1;i<arr.length;i++){
		if(max<arr[i]){
			max=arr[i];
		}
	}
	document.theForm.maxResult.value=max;
}
function average(){
	var sum=0;
	for(i=0;i<arr.length;i++){
		sum+=Number(arr[i]);
	}
	document.theForm.avgResult.value=sum/arr.length;
}