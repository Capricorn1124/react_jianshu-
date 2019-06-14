import {createGlobalStyle} from 'styled-components';
//对样式进行统一,这是全局的
export const GlobalStyle=createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1554810894403'); /* IE9 */
  src: url('./iconfont.eot?t=1554810894403#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQUAAsAAAAACGgAAAPIAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqECINRATYCJAMUCwwABCAFhG0HRRtaB1FULxJkPwrcPUVYRofGpi03/wZ44T/gpqkIvt/vdc+Fl5f7A6wA0GPHV1VVoYpqhYmtImnqTMJGdP/3++2LlrTTv3kSw5L2K7tPfG/Y6bRMKhAihMZhHjVpFl0LSVb2yX4J7e3z/Jb7w/1MFwU6y2ff5pJVFA04GvCAunF0qQd6B3InyjeMXdAS7xNoFvVU3p3vHqGtMJcF4jbwFLQzWqWhMPRCV7G3iN+qPv1M38Cv4OfjDU6DJ6mZufb9t5OF7SP/nINH/o/46KHwpjODHSJjHyjE90rrrVoU3VfT1L+ruwSaXpIe+UerR9/nHElCEx5I3qx/eGRJEUTHzB8BlyhWeOQdhMyjFULi0Reh8JzDf5ZHKmiYBP7iHuHnx4WkKcvTWsoypghZ6zBSRjyvo9SvzJ4Jcy8gaeRlyryYtUGPJBdkCx+o+JG9fElY8wnRShBoka2lz4tR2rlhTVwjig3pL14QFRgpdz63n1TQakbSaVYHKcnvJoe2Xj3rSPfvuHHBQU2RKmcr1ivl5q03Vdyqn1N6RWkeQBEp3mxzj9AoY6PBmcHk7EEYOaQ0fwehcA7uVqyonA/YbFMaGgLmN7N8bmZ95WxPcVZs+r2CdliWMTeXWbZYHss9tw4upsbErFsHN/4cManm8bY7T1bjNRiauW1cworWpoyF/7T+IddnvLcP7znGjVkpe473cb0c5uKDxyBVi3kzwavXu1cWOwimimY7YslWRUa6412yqOPa6IkJZOL5GvyvpaYa9VQdblbFPbWPflqpKn2KEupC0wgXWVYbKsr8CW3vuOfvhmQjXJsdaK1KoVJSeOC7ItZx30Dnj6HNJxtT8AcAIN3B13AIpV7E53BiQMI383//HeUPsE+xWvA3XkkGAMCrZ4dUYZU0olog3/HzZDrz/jKvY1fRBKauFqXW4Srk6pgXiQ01/FvnlL9p7LMgMYee8yAkQxYg662jC34fqoFz6PQuoNlzOTwwjdVEGcauTwBhwhckY/5BNuEHXfC/UM35h85EYGg+hNaZA5tR241iUkIW9QcGJkudbZBuWHhP3kusOC0IKM/EZRDAsat7PnGhlHiKDeWrNxFx6DhL8AweozjOMOcsJCMDXyTfDN2qql5oYLIEum4woghiIe0DChiZlPMGi27h++8Rz4uYwg11VeZnhJWC0dHYwKgD+iJNO9XdyjOlV54JIRzksEwCnYGZxFY0g/LqWSFiiAF/QDi3MUT9XFfpYHl58o7lXmIDc3ONFDlK1Oj0P/IgvfKti2Y7KTZ+tSyoRigA') format('woff2'),
  url('./iconfont.woff?t=1554810894403') format('woff'),
  url('./iconfont.ttf?t=1554810894403') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1554810894403#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;