var path = null;
var circles = [];

// Mouse tool state
var isDrawing = false;
var draggingIndex = -1;

function onMouseDrag(event)
{
	// Maybe hit test to see if we are on top of a circle
	if(!isDrawing && circles.length > 0)
	{
		for(var ix = 0; ix < circles.length; ix++)
		{
			if(circles[ix].contains(event.point))
			{
				draggingIndex = ix;
				break;
			}
		}
	}

	// Should we be dragging something?
	if(draggingIndex > -1)
	{
		circles[draggingIndex].position = event.point;
	}
	else
	{
		// We are drawing
		path = new Path.Circle({
		center: event.downPoint,
		radius: (event.downPoint - event.point).length,
			fillColor: null,
			strokeColor: 'black',
			strokeWidth: 10
		});
		path.removeOnDrag();
		isDrawing = true;
	}
}

function onMouseUp(event)
{
	if (isDrawing) {
		circles.push(path);
	}
	// Reset the tool state
	isDrawing = false;
	draggingIndex = -1;
}
