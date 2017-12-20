window.onload = function () {

	
		

	document.getElementById("newItem").addEventListener("submit", function(e){
		// javascript validation goes in the next few lines with e. prevent default
		// if (some condition) {
      	// e.preventDefault();
    	// } 
		

		//find mongoose entries, place in array*/

		console.log("In prevent dupes");
		/*for (var i=0; i<inputs.length; i++){
			if(entriesArray.indexOf(inputs[i].value)!=-1){
				alert("Duplicates Are Not Allowed!");
			}*/

	}); 
};

function deleteConfirm(){
		var x = (confirm ("Are you sure you want to permanently delete this from the list?"));
		console.log(x);
		return x;
	};