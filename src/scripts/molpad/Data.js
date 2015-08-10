/**
 * This file is part of MolView (http://molview.org)
 * Copyright (c) 2014, 2015 Herman Bergwerf
 *
 * MolView is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * MolView is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with MolView.  If not, see <http://www.gnu.org/licenses/>.
 */

// in_col: #f6cf84
// out_col: #6ecae5
// red_col: #be66dd
// green_col: #ade747
// arrow_col: #f0bf26
// term_col: #222
var AtomColors = {
	"L":     "#be66dd",
	"A":     "#ade747",
	"FI":    "#be66dd",
	"FO":    "#ade747",
	"FOE":   "#f6cf84",
	"Arrow": "#f0bf26",
	"T":     "#222222",
	"FRIN":  "#f6cf84",
	"FROUT": "#6ecae5",
	"mi":    "#f6cf84",
	"mo":    "#6ecae5",
	"ri":    "#f6cf84",
	"ro":    "#6ecae5",
	"li":    "#f6cf84",
	"lo":    "#6ecae5"
};

var AtomPorts = {
	"L":     [ "mi", "lo", "ro" ],
	"A":     [ "li", "ri", "mo" ],
	"FI":    [ "li", "ri", "mo" ],
	"FO":    [ "mi", "lo", "ro" ],
	"FOE":   [ "mi", "lo", "ro" ],
	"Arrow": [ "mi", "mo" ],
	"T":     [ "mi" ],
	"FRIN":  [ "mo" ],
	"FROUT": [ "mi" ]
};

var AtomRadii = {
	"L":     3,
	"A":     3,
	"FI":    3,
	"FO":    3,
	"FOE":   3,
	"Arrow": 3,
	"T":     3,
	"FRIN":  3,
	"FROUT": 3,
	"mi":    1.5,
	"mo":    1.5,
	"ri":    1.5,
	"ro":    1.5,
	"li":    2,
	"lo":    2,
};
