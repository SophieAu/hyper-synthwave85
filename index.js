"use strict";

const black = "#262335";
const magenta = "#ff7edb";
const cyan = "#36f9f6";
const pink = "#f825a4";
const gray = "#b6b1b1";
const white = "#f2ebe0";
const green = "#72f1b8";
const orange = "#ff8b39";
const red = "#fe4450";

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor: black,
    foregroundColor: white,
    borderColor: black,
    cursorColor: pink,
    colors: {
      black: black,
      red: red,
      green: green,
      yellow: orange,
      blue: cyan,
      magenta,
      cyan,
      gray,

      // light
      lightBlack: pink,
      lightRed: pink,
      lightGreen: green,
      lightYellow: orange,
      lightBlue: cyan,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: white,
    },
    css: `
			${config.css || ""}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${black};
			}

			.tab_active:before {
				border-color: rgb(68, 71, 90);
			}
		`
  });
};
