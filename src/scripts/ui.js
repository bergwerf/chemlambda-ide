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

function setupAtomToolbox()
{
	var atoms = [ 'L', 'A', 'FI', 'FO', 'FOE', 'Arrow', 'T', 'FRIN', 'FROUT' ];
	var toolbox = $('#atom-toolbox');
	for (var i = 0; i < atoms.length; i++)
	{
		var input = $('<input type="radio" name="topcoat" />')
		input.data('element', atoms[i])
		input.on('click', function() {
			molpad.setTool('atom', {
				element: $(this).data('element')
			});
		});
		$('<label class="topcoat-radio-button"></label>')
			.append(input)
			.append($('<div class="topcoat-radio-button__checkmark"></div>'))
			.append($('<span></span>').text(atoms[i]))
			.appendTo(toolbox)
	}
}
