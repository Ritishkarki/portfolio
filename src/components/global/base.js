import {css} from 'styled-components';

const base = css`
// importing the font
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600');

$theme-color: #1565ea;

// reset css 
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, sub, sup, tt, var,
 u, i, center,
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
  font-size:1rem;
  color:#343a40;
  font-family: 'Open Sans', sans-serif;
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

div,p,span,h1,h2,h3,button{
  box-sizing:border-box;
}
// global font styles
html{
  font-size:16px;
}
h1,h2,h3,h4,h5,h6{
  font-weight:bold;
}
h1 { font-size: 3rem; line-height:1.3;}
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

// utility classes
.uppercase{
  text-transform:uppercase;
}
.theme-color{
  color: #1565ea;
}
.grey-color{
  color: #a0a0a0;
}

// buttons
.button{
  display:inline-block;
  text-align:center;
  white-space:nowrap;
  padding: 12px 20px;
  border: 2px solid;
  letter-spacing: 0;
  outline: none;
  font-size: 1rem;
  line-height: 1.2;
  cursor:pointer;
  color:white;
  &-round{
    border-radius:30px;
  }
}

// animated gradient
.animated-gradient{
  background: linear-gradient(270deg, #8e2de2, #1565ea, #252ed2, #1565ea, #8e2de2);
  background-size: 1000% 1000%;
  -webkit-animation: AnimationName 14s ease infinite;
  -moz-animation: AnimationName 14s ease infinite;
  -o-animation: AnimationName 14s ease infinite;
  animation: AnimationName 14s ease infinite;

  @-webkit-keyframes AnimationName {
      0%{background-position:0% 51%}
      50%{background-position:100% 50%}
      100%{background-position:0% 51%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:0% 51%}
      50%{background-position:100% 50%}
      100%{background-position:0% 51%}
  }
  @-o-keyframes AnimationName {
      0%{background-position:0% 51%}
      50%{background-position:100% 50%}
      100%{background-position:0% 51%}
  }
  @keyframes AnimationName { 
      0%{background-position:0% 51%}
      50%{background-position:100% 50%}
      100%{background-position:0% 51%}
  }
}
`;

export default base;