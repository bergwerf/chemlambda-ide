/**
 * This file is part of the Chemlambda IDE
 * Copyright (c) 2015 Herman Bergwerf
 *
 * The Chemlambda IDE is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by the
 * Free Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 *
 * The Chemlambda IDE is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License
 * for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with the Chemlambda IDE.  If not, see <http://www.gnu.org/licenses/>.
 */

function View(containerId)
{
	this.container = $('#' + containerId)
	this.stage = new Konva.Stage({
		container: containerId,
		width: this.container.width(),
		height: this.container.height()
	});

	this.mainLayer = new Konva.Layer({
		draggable: true
	});
	this.trayLayer = new Konva.Layer();
	this.dragLayer = new Konva.Layer();
	this.stage.add(this.mainLayer, this.trayLayer, this.dragLayer);

	// Load nodes.
	this.tray = new Tray(this.trayLayer);

	// Bind events.
	var scope = this
	this.container.on('DOMMouseScroll mousewheel', function(e)
	{
		e.preventDefault();

		if(e.detail)
		{
			scope.onScroll(e.detail / 3, e);
		}
		else if(e.wheelDelta)
		{
			scope.onScroll(e.wheelDelta / 120, e);
		}
	});
}

View.prototype.onScroll = function(d, e)
{
	var scale = this.stage.getScaleX() * (1.0 + 0.1 * d);
	this.stage.scaleX(scale);
	this.stage.scaleY(scale);
	this.stage.draw();
}

View.prototype.resize = function(width, height)
{
	this.stage.size({
		width: this.container.width(),
		height: this.container.height()
	})
}
