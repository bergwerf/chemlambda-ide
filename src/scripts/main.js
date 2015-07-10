var ChemlambdaIDE = {
	init: function()
	{
		this.container = $('#chemlambda-view');
		this.stage = new Konva.Stage({
			container: 'chemlambda-view',
			width: this.container.width(),
			height: this.container.height()
		});
		var tween = null;

		function addStar(layer, stage)
		{
			var scale = Math.random();
			var star = new Konva.Star({
				x: Math.random() * stage.getWidth(),
				y: Math.random() * stage.getHeight(),
				numPoints: 5,
				innerRadius: 30,
				outerRadius: 50,
				fill: '#89b717',
				opacity: 0.8,
				draggable: true,
				scale: {
					x : scale,
					y : scale
				},
				rotation: Math.random() * 180,
				shadowColor: 'black',
				shadowBlur: 10,
				shadowOffset: {
					x : 5,
					y : 5
				},
				shadowOpacity: 0.6,
				// custom attribute
				startScale: scale
			});
			layer.add(star);
		}


		var layer = new Konva.Layer();
		var dragLayer = new Konva.Layer();

		for (var n = 0; n < 30; n++)
		{
			addStar(layer, this.stage);
		}

		this.stage.add(layer, dragLayer);

		this.stage.on('dragstart', function(evt) {
			var shape = evt.target;
			// moving to another layer will improve dragging performance
			shape.moveTo(dragLayer);
			ChemlambdaIDE.stage.draw();
			if (tween)
			{
				tween.pause();
			}
			shape.setAttrs({
				shadowOffset: {
					x: 15,
					y: 15
				},
				scale: {
					x: shape.getAttr('startScale') * 1.2,
					y: shape.getAttr('startScale') * 1.2
				}
			});
		});

		this.stage.on('dragend', function(evt) {
			var shape = evt.target;
			shape.moveTo(layer);
			ChemlambdaIDE.stage.draw();
			shape.to({
				duration: 0.5,
				easing: Konva.Easings.ElasticEaseOut,
				scaleX: shape.getAttr('startScale'),
				scaleY: shape.getAttr('startScale'),
				shadowOffsetX: 5,
				shadowOffsetY: 5
			});
		});
	},

	resize: function()
	{
		this.stage.size({
			width: this.container.width(),
			height: this.container.height()
		})
	}
}

$(window).on('resize', function()
{
	ChemlambdaIDE.resize();
});

$(document).on('ready', function()
{
	ChemlambdaIDE.init();
});
