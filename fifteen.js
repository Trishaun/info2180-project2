//empty space
var xempty = 300;
var yempty = 300;

window.onload = function () {
  main();
};

function main()
{
	var puzzlearea = document.getElementById("puzzlearea");
	var blocks = puzzlearea.getElementsByTagName("div");
	var i = 0;
	var shuffle = document.getElementById("shufflebutton");
	
	//console.log (blocks);
	
	for (i = 0; i <= blocks.length-1;i++)
	{
		blocks[i].setAttribute("class","puzzlepiece");
		positionTile(blocks[i],i);
		set_Background(blocks[i],i);
		//blocks[i].onmouseover = function(){change_tile(this)}
		blocks[i].addEventListener("click", function () {move_Tile(this)});
		shuffle.addEventListener("click", function() {
			shuffletile(blocks)
		});
	}
}

function positionTile(element,i_position)
{
	var a = Math.floor(i_position /4);
	var g = i_position % 4;
	var x = a* (400 / 4);
	var y = g * (400 / 4);
	element.style.top = x + "px";
	element.style.left = y + "px";
	//setXY(i_position);
}

function shuffletile(element)
{
	var i= 0;
	var n = 0;
	
	while (n < 100)
	{
		move_Tile(element[i]);
		n++;
		i++;
		if (i == 15)
		{
			i = 0;
		}
	}	
	
}

function set_Background(element,i_position)
 {
	var a = Math.floor(i_position /4);
	var g = i_position % 4;
	var x = -a*(400 / 4) + "px";
	var y = -g*(400 / 4) + "px";
	element.style.backgroundPosition = y + " "+ x;
}
// highlight movablepieces
/*function change_tile(element)
{
	if (checkRight(element) == "True")
	{
		element.setAttribute("class","movablepiece;hover");
	}
	else if(checkLeft(element) == "True")
	{
		element.setAttribute("class","movablepiece:hover");
	}
	else if (checkTop(element) == "True")
	{
		element.setAttribute("class","movablepiece:hover");
	}
	else if (checkBottom(element) == "True")
	{
		element.setAttribute("class","movablepiece:hover");
	}

}*/

function move_Tile(element)
{
	//console.log(element.style.left);
	//Shift to the right
	if (checkRight(element) == "True")
	{
		$(element).animate({
			left: "+="+"100px"
		});
		console.log('Before move right, yempty:' + yempty);
		console.log('Before move right, ycolumn:' + element.style.left);
		
		var ytemp = yempty;
		yempty = parseInt(element.style.left);
		element.style.left = ytemp +"px";
		
		console.log("Move right:"+yempty);
		console.log('move right, ycolumn:' + element.style.left);
	}
	
	// Shift to the left
	else if (checkLeft(element) == "True")
	{
		//console.log(i);
		$(element).animate({
			left: "-="+"100px"
		});
		/*console.log("Before Move Left, yempty:"+yempty);
		console.log("Before Move Left, column:"+element.style.left);*/
		var ytemp = yempty;
		yempty = parseInt(element.style.left);
		element.style.left = ytemp +"px";
		
		/*console.log("Move Left, empty:"+yempty);
		console.log("Move Left, column:"+element.style.left);*/
	}
	
	// Shift to the Top
	else if (checkTop(element) == "True")
	{
		$(element).animate({
			top: "-="+"100px"
		});
		var xtemp = xempty;
		xempty = parseInt(element.style.top);
		element.style.top = xtemp + "px";
	}
	
	// Shift to the Bottom
	else if (checkBottom(element) == "True")
	{
		$(element).animate({
			top: "+="+"100px"
		});
		var xtemp = xempty;
		xempty = parseInt(element.style.top);
		element.style.top = xtemp + "px";
	}
	
}
function checkRight(i)
{
	var y = parseInt(i.style.left);
	
	if (y < yempty)
	{
		return "True";
	}
}
function checkLeft(i)
{
	var y = parseInt(i.style.left);

	if (y > yempty)
	{
		//console.log("True");
		return "True";
	}
}
function checkTop(i)
{
	var x = parseInt(i.style.top);
	console.log(x);
	
	if (x > xempty)
	{
		return "True";
	}
}
function checkBottom(i)
{
	var x = parseInt(i.style.top);
	console.log(x);
	
	if (x < xempty)
	{
		return "True";
	}
}
