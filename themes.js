const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");
const btn = document.getElementById("toggler");


const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const themes = [
  {
    name: "Daylight",
    src:'icons/sun.svg',
    
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
  },

  {
    name: "Midnight",
    src:'icons/moon.svg',
    
    bg: "#333",
    bgPanel: "#434343",
    colorHeadings: "#ddd",
    colorText: "#b5b5b5",
  },

  {
    name: "Sunset",
    src:'icons/candle.svg',
    bg: "#ab5d1c",
    bgPanel: "#e7ca70",
    colorHeadings: "#3a1616",
    colorText: "#672008",
  },
];

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

let count = 0;
btn.addEventListener("click", () => {
  count++;
  if (count >= themes.length) count = 0;
  console.log(`Theme index ${count}: ${themes[count].name}`);
  changeColors(themes[count]);
  document.getElementById("theme-icon").src = themes[count].src;
  document.getElementById("theme-title").innerHTML = `${themes[count].name} Theme`
  
});
