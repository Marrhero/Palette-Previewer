const color_window = document.querySelector("color_window");
const hexInput =  document.getElementById("hex_input");
const hexInput2 =  document.getElementById("hex_input2");
const rgbInput =  document.getElementById("rgb_input");
const rgbInput2 =  document.getElementById("rgb_input2");


const changeColorBtn =  document.getElementById("change_color_button");
const changeColorBtn2 =  document.getElementById("change_color_button2");

const titleText = document.querySelector(".sample_header");
const titleInput = document.getElementById("sample_title_input");
const titleButton = document.getElementById("title_button");

const bodyText = document.querySelector(".sample_text");
const bodyInput = document.getElementById("sample_body_input");
const bodyButton = document.getElementById("body_button");

//Button for inverting colors
const invertButton = document.getElementById("invert_button");

const rgbRadio = document.getElementById("rgb");
const hexRadio = document.getElementById("hex");

document.getElementById("hex_div").style.display = "none";
document.getElementById("rgb_div").style.display = "block";

var isHex = false;

rgbRadio.addEventListener("click", ()=>{

  console.log("rgb radio registered");
  isHex = false;
  document.getElementById("hex_div").style.display = "none";
  document.getElementById("rgb_div").style.display = "block";
})

hexRadio.addEventListener("click", ()=>{
  isHex = true;
  console.log("hex radio registered");
  document.getElementById("rgb_div").style.display = "none";
  document.getElementById("hex_div").style.display = "block";
})

changeColorBtn.addEventListener("click", ()=>{
  if(isHex)
  {
    const hexCode = "#" + hexInput.value;
    document.documentElement.style.setProperty("--text-color", hexCode);

    const hexCode2 = "#" + hexInput2.value;
    document.documentElement.style.setProperty("--bg-color", hexCode2);
  }
  else
  {
    const rgbCode = rgbInput.value;
    document.documentElement.style.setProperty("--text-color", rgbCode);

    const rgbCode2 = rgbInput2.value;
    document.documentElement.style.setProperty("--bg-color", rgbCode2);
  }
});

titleButton.addEventListener("click", ()=>{
    const text = titleInput.value;
    titleText.textContent = text;
});

bodyButton.addEventListener("click", ()=>{
    const text = bodyInput.value;
    bodyText.textContent = text;
    
    document.querySelector(".sample_text_second").textContent = "";
});

invertButton.addEventListener("click", ()=>{
    var color1 = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    var color2 = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');

    document.documentElement.style.setProperty('--text-color', color2);
    document.documentElement.style.setProperty("--bg-color", color1);
})

function changeFont(){
  const fontName = document.getElementById("font_input").value;

  //Create a <link> element to load the Google Font dynamically
  const fontLink = document.createElement("link");
  fontLink.href = 'https://fonts.googleapis.com/css?family=' + fontName;
  fontLink.rel = "stylesheet";
  
  //Append the <link> element to the document's head
  document.head.appendChild(fontLink);

  //Update the font-family CSS property
  fontLink.onload = function(){
    document.documentElement.style.setProperty("--font", fontName);  
  }
}