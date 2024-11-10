let input = document.querySelector("input.skgdFormSubmit");
input.type = 'button';
let img = document.getElementById("skin_Logo_2");
let urls = [img.src, "https://www.hlasujpro.cz/ncuploads/photos/54/3173/med_93e914f9387518852a832a2b149bcc2d_1647709034.jpg"];
input.onclick = () => {img.src = urls[+!urls.indexOf(img.src)]}
