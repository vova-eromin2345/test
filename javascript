let input = document.querySelector("input.skgdFormSubmit");
input.type = 'button';
let img = document.getElementById("skin_Logo_2");
let urls = [img.src, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Anarchist_flag.svg/768px-Anarchist_flag.svg.png"];
input.onclick = () => {img.src = urls[+!urls.indexOf(img.src)]}
