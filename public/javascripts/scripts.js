function deleteConfirm(){
	var x = (confirm ("Are you sure you want to permanently delete this from the list?"));
	console.log(x);
	return x;
};

/*document.getElementById("newItem").addEventListener("submit", function(e){
	e.preventDefault();
	var entriesArray= [];
	console.log("In prevent dupes");
	for (var i=0; i<inputs.length; i++){
		if(entriesArray.indexOf(inputs[i].value)!=-1){

		}

}; */