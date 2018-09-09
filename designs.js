// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('input[type="submit"]').click(function (event) {
	event.preventDefault();
	makeGrid();

});

function makeGrid() {
	console.log("makeGrid is working")
	height =$('#inputHeight').val();
	width =$('#inputWidth').val();
	canvas =$('#pixelCanvas');

	for( var i=0; i<= height; i++){
		canvas.append('<tr></tr>');
	}
	rows =$('tr');
	for(j=0;j<width;j++){
		rows.append('<td></td>');
	}
	cell =canvas.find('td');

	cell.click(function addColor(){
		console.log("addColor is working")
		color= $('#colorPicker').val();
		if($(this).attr('bgcolor')){
			console.log("color was removed from grid block")
			$(this).removeAttr('bgcolor');
		}else{
			console.log("color was added to grid block")
			$(this).attr('bgcolor',color);
		}
		

	});
}





