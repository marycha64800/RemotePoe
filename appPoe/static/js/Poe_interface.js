

function changTextButton(){
  
  var posBoutton = document.querySelector("button")
  var legendText = document.querySelector("em")

    if (posBoutton.innerText != "ON") {
        posBoutton.textContent = "ON";
        legendText.textContent = "On espère qu'elle s'allume";
        posBoutton.style.backgroundColor = "red";
    } else {
        posBoutton.textContent = "OFF";
        posBoutton.style.backgroundColor = "yellow";
        legendText.textContent = "Et la lumière fut";
    }
}

let b1 = document.querySelector("button");
b1.addEventListener('click',changTextButton);