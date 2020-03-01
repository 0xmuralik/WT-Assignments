var arr;
function generate() {
	var from=document.getElementById("From").value;
	var to=document.getElementById("To").value;
	var size=document.getElementById("size").value;
	arr=new Array();
	for(var i=0;i<size*size;i++){
		arr.push(Math.floor(Math.random()*(+to - +from))+ +from);
	}
	GenerateTable();
}

function GenerateTable() {
        var table = document.createElement("table");
        table.border = "1";
        var x=0;
        for (var i = 0; i < size.value; i++) {
            var row = document.createElement("tr");
            for(var j=0;j<size.value;j++){
            	var element=document.createElement("td");
            	element.innerHTML=arr[x++];
            	element.class="grid-item";
            	row.appendChild(element);
            }
            table.appendChild(row);
        }
        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML ="";
        dvTable.appendChild(table);
    }