var Time = (function () {
	var mod = {};

	var face = [
		"gixyTENHALFTc",//0
		"GhwTWENTYTlhh",//1
		"OFONEyPxFOURp",//2
		"OIkjlaASIXoee",//3
		"DFFIVESEVENer",//4
		"oTeneaToEIGHT",//5
		"TENyAMMORNING",//6
		"WELEVENxNIGHT",//7
		"ONINEtyPMlmao" //8
	// 0123456789012
	// cell_row_column
	];

	// hours
	var One = ["cell_2_2", "cell_2_3", "cell_2_4"];
	var Two = ["cell_6_0", "cell_7_0", "cell_8_0"];
	var Three = ["cell_0_11", "cell_1_11", "cell_2_11", "cell_3_11", "cell_4_11"];
	var Four = ["cell_2_8", "cell_2_9", "cell_2_10", "cell_2_11"];
	var Five = ["cell_4_2", "cell_4_3", "cell_4_4", "cell_4_5"];
	var Six = ["cell_3_7", "cell_3_8", "cell_3_9"];
	var Seven = ["cell_4_6", "cell_4_7", "cell_4_8", "cell_4_9", "cell_4_10"];
	var Eight = ["cell_5_8", "cell_5_9", "cell_5_10", "cell_5_11", "cell_5_12"];
	var Nine = ["cell_8_1", "cell_8_2", "cell_8_3", "cell_8_4"];
	var Ten = ["cell_6_0", "cell_6_1", "cell_6_2"];
	var Eleven = ["cell_7_1", "cell_7_2", "cell_7_3", "cell_7_4", "cell_7_5", "cell_7_6"];
	var Twelve = ["cell_0_4", "cell_1_4", "cell_2_4", "cell_3_4", "cell_4_4", "cell_5_4"];

	// minutes
	var No_minutes = [];
	var Five_minutes = ["cell_2_8", "cell_3_8", "cell_4_8", "cell_5_8"];
	var Ten_minutes = ["cell_0_4", "cell_0_5", "cell_0_6"];
	var Fifteen_minutes = ["cell_2_1", "cell_3_1", "cell_4_1", "cell_5_1", "cell_6_1", "cell_7_1", "cell_8_1"];
	var Twenty_minutes = ["cell_1_3", "cell_1_4", "cell_1_5", "cell_1_6", "cell_1_7", "cell_1_8"];
	var Twentyfive_minutes = ["cell_2_8", "cell_3_8", "cell_4_8", "cell_5_8", "cell_1_3", "cell_1_4", "cell_1_5", "cell_1_6", "cell_1_7", "cell_1_8"];
	var Half = ["cell_0_7", "cell_0_8", "cell_0_9", "cell_0_10"];

	// misc
	var Good = ["cell_1_0", "cell_2_0", "cell_3_0", "cell_4_0"];
	var Morning = ["cell_6_6", "cell_6_7", "cell_6_8", "cell_6_9", "cell_6_10", "cell_6_11", "cell_6_12"];
	var Night = ["cell_7_8", "cell_7_9", "cell_7_10", "cell_7_11", "cell_7_12"];
	var AM = ["cell_6_4", "cell_6_5"];
	var PM = ["cell_8_7", "cell_8_8"];
	var Past = ["cell_2_6","cell_3_6","cell_4_6","cell_5_6"];
	var To = ["cell_1_9", "cell_2_9"];

	mod.init = function () {
		var element = document.getElementById("the_clock");
		var table = document.createElement("table");
		table.id = "clock_face";
		for (var i = 0; i < 9; i++) {
			var line = create_line(face[i], i);
			table.appendChild(line);
		}
		element.appendChild(table);

		start_time();
	}

	function start_time() {
		deactivate_all_the_things();
		set_time(new Date());
		window.setTimeout(start_time, 10000);
	}

	function set_time(date) {
		var real_minutes = date.getMinutes();
		var to_past = as_to_past(real_minutes);
		var hours = real_minutes >= 32 ? as_hours((date.getHours() + 1) % 24) : as_hours(date.getHours());
		var minutes = as_minutes(real_minutes);
		var am_pm = hours < 12 ? AM : PM;

		window.setTimeout(function(){ activate_number(minutes); }, 2500);
		window.setTimeout(function(){ activate_message(to_past); }, 3500);
		window.setTimeout(function(){ activate_number(hours); }, 4500);
		window.setTimeout(function(){ activate_message(am_pm); }, 5500);
	}

	function as_to_past(minutes) {
		if (minutes > 57 || minutes < 3) {
			return No_minutes;
		}
		return minutes >= 32 ? To : Past;
	}

	// 0 - 59
	// -2 <-> +2 = no_minutes
	// +3 <-> +7 = five_minutes
	// etc
	function as_minutes(minutes) {
		switch(minutes) {
			case 0: return No_minutes;
			case 1: return No_minutes;
			case 2: return No_minutes;
			case 3: return Five_minutes;
			case 4: return Five_minutes;
			case 5: return Five_minutes;
			case 6: return Five_minutes;
			case 7: return Five_minutes;
			case 8: return Ten_minutes;
			case 9: return Ten_minutes;
			case 10: return Ten_minutes;
			case 11: return Ten_minutes;
			case 12: return Ten_minutes;
			case 13: return Fifteen_minutes;
			case 14: return Fifteen_minutes;
			case 15: return Fifteen_minutes;
			case 16: return Fifteen_minutes;
			case 17: return Fifteen_minutes;
			case 18: return Twenty_minutes;
			case 19: return Twenty_minutes;
			case 20: return Twenty_minutes;
			case 21: return Twenty_minutes;
			case 22: return Twenty_minutes;
			case 23: return Twentyfive_minutes;
			case 24: return Twentyfive_minutes;
			case 25: return Twentyfive_minutes;
			case 26: return Twentyfive_minutes;
			case 27: return Twentyfive_minutes;
			case 28: return Half;
			case 29: return Half;
			case 30: return Half;
			case 31: return Half;
			case 32: return Half;
			case 33: return Twentyfive_minutes;
			case 34: return Twentyfive_minutes;
			case 35: return Twentyfive_minutes;
			case 36: return Twentyfive_minutes;
			case 37: return Twentyfive_minutes;
			case 38: return Twenty_minutes;
			case 39: return Twenty_minutes;
			case 40: return Twenty_minutes;
			case 41: return Twenty_minutes;
			case 42: return Twenty_minutes;
			case 43: return Fifteen_minutes;
			case 44: return Fifteen_minutes;
			case 45: return Fifteen_minutes;
			case 46: return Fifteen_minutes;
			case 47: return Fifteen_minutes;
			case 48: return Ten_minutes;
			case 49: return Ten_minutes;
			case 50: return Ten_minutes;
			case 51: return Ten_minutes;
			case 52: return Ten_minutes;
			case 53: return Five_minutes;
			case 54: return Five_minutes;
			case 55: return Five_minutes;
			case 56: return Five_minutes;
			case 57: return Five_minutes;
			case 58: return No_minutes;
			case 59: return No_minutes;
			default: return No_minutes;
		}
	}

	mod.tst_hours = function(h) { activate_number(as_hours(h)); return as_hours(h); }
	mod.tst_min = function(m) { activate_number(as_minutes(m)); return as_minutes(m); }
	mod.tst=function() {activate_message(Half);}

	// 0 - 23
	function as_hours(hours) {
		switch(hours) {
			case 0:
			case 12:
				return Twelve;
			case 1:
			case 13:
				return One;
			case 2:
			case 14:
				return Two;
			case 3:
			case 15:
				return Three;
			case 4:
			case 16:
				return Four;
			case 5:
			case 17:
				return Five;
			case 6:
			case 18:
				return Six;
			case 7:
			case 19:
				return Seven;
			case 8:
			case 20:
				return Eight;
			case 9:
			case 21:
				return Nine;
			case 10:
			case 22:
				return Ten;
			case 11:
			case 23:
				return Eleven;
			default:
				return No_minutes;
		}
	}

	function create_line(line, line_number) {
		var row = document.createElement("tr");
		for (var i = 0; i < 13; i++) {
			var cell = create_cell(line[i], line_number, i);
			row.appendChild(cell);
		}
		return row;
	}

	function create_cell(character, line_number, column_number) {
		var cell = document.createElement("td");
		cell.id = "cell_" + line_number + "_" + column_number;
		cell.classList.add("inactive");
		cell.classList.add("clock_element");
		var text = document.createTextNode(character);
		cell.appendChild(text);
		return cell;
	}

	function deactivate_all_the_things() {
		deactivate(One);
		deactivate(Two);
		deactivate(Three);
		deactivate(Four);
		deactivate(Five);
		deactivate(Six);
		deactivate(Seven);
		deactivate(Eight);
		deactivate(Nine);
		deactivate(Ten);
		deactivate(Eleven);
		deactivate(Twelve);
		deactivate(Five_minutes);
		deactivate(Ten_minutes);
		deactivate(Fifteen_minutes);
		deactivate(Twenty_minutes);
		deactivate(Twentyfive_minutes);
		deactivate(Half);
		deactivate(AM);
		deactivate(PM);
		deactivate(Good);
		deactivate(Morning);
		deactivate(Night);
		deactivate(To);
		deactivate(Past);
	} 

	function deactivate(array) {
		for (var i = 0; i < array.length; i++) {
			var cell = document.getElementById(array[i]);
			cell.classList.add("inactive");
			cell.classList.remove("active_message");
			cell.classList.remove("active_time");
		}
	}

	function activate_message(array) {
		for (var i = 0; i < array.length; i++) {
			var cell = document.getElementById(array[i]);
			cell.classList.remove("inactive");
			cell.classList.add("active_message");
		}
	}

	function activate_number(array) {
		for (var i = 0; i < array.length; i++) {
			var cell = document.getElementById(array[i]);
			cell.classList.remove("inactive");
			cell.classList.add("active_time");
		}
	}

	return mod;
})();