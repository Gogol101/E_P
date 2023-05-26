let block = document.querySelector('.block')

// <width>

let widthINP = document.getElementById('myRange1');
let widthSP = document.getElementById('widthSP');
let widthP = document.getElementById('widthSP2');
widthP.innerHTML = widthINP.value;
widthSP.innerHTML = widthINP.value;


widthINP.oninput = function(){
  widthP.innerHTML = this.value
  widthSP.innerHTML = this.value
  
  block.style.width = `${this.value}px`
}

// </width>



// <height>

let heightINP = document.getElementById('myRange2');
let heightSP = document.getElementById('heightSP');
let heightP = document.getElementById('heightSP2');
heightP.innerHTML = widthINP.value;
heightSP.innerHTML = widthINP.value;


heightINP.oninput = function(){
  heightP.innerHTML = this.value
  heightSP.innerHTML = this.value
  
  block.style.height = `${this.value}px`
}

// </height>



// <border>

let borderINP = document.getElementById('myRange3');
let borderSP = document.getElementById('borderSP');
let borderP = document.getElementById('borderSP2');
borderP.innerHTML = widthINP.value;
borderSP.innerHTML = widthINP.value;


borderINP.oninput = function(){
  borderP.innerHTML = this.value
  borderSP.innerHTML = `${this.value}px solid #000`
  
  block.style.border = `${this.value}px solid #000`
}

// </border>



// <borderRadius>

let borderRadiusINP = document.getElementById('myRange4');
let borderRadiusSP = document.getElementById('borderRadiusSP');
let borderRadiusP = document.getElementById('borderRadiusSP2');
borderRadiusP.innerHTML = widthINP.value;
borderRadiusSP.innerHTML = widthINP.value;


borderRadiusINP.oninput = function(){
  borderRadiusP.innerHTML = this.value
  borderRadiusSP.innerHTML = this.value
  
  block.style.borderRadius = `${this.value}px`
}

// </borderRadius>










// <colorSector>
let randomBTN = document.querySelector('.random')
let itogCol = document.querySelector('.itogCol')



let redINP = document.getElementById('myRange5');
let RedSP = document.getElementById('Red');
let RedP = document.getElementById('Red2');

let greenINP = document.getElementById('myRange6');
let GreenSP = document.getElementById('Green');
let GreenP = document.getElementById('Green2');

let blueINP = document.getElementById('myRange7');
let BlueSP = document.getElementById('Blue');
let BlueP = document.getElementById('Blue2');

let ReD = 255
let GrEeN = 255
let BlUe = 255

redINP.oninput = function(){
  RedP.innerHTML = this.value
  RedSP.innerHTML = this.value

  ReD = this.value
  block.style.backgroundColor = `rgb(${ReD}, ${GrEeN}, ${BlUe})`
  itogCol.style.backgroundColor = `rgb(${ReD}, ${GrEeN}, ${BlUe})`
}

greenINP.oninput = function(){
  GreenP.innerHTML = this.value
  GreenSP.innerHTML = this.value

  GrEeN = this.value
  block.style.backgroundColor = `rgb(${ReD}, ${GrEeN}, ${BlUe})`
  itogCol.style.backgroundColor = `rgb(${ReD}, ${GrEeN}, ${BlUe})`
}

blueINP.oninput = function(){
  BlueP.innerHTML = this.value
  BlueSP.innerHTML = this.value

  BlUe = this.value
  block.style.backgroundColor = `rgb(${ReD}, ${GrEeN}, ${BlUe})`
  itogCol.style.backgroundColor = `rgb(${ReD}, ${GrEeN}, ${BlUe})`
}






function randomRGB(){
  let randomCLR = Math.floor(Math.random() * 256)
  return randomCLR
}
randomBTN.addEventListener('click',function(){
  let randomRED = randomRGB()
  let randomGREEN = randomRGB()
  let randomBLUE = randomRGB()

  redINP.value = randomRED
  greenINP.value = randomGREEN
  blueINP.value = randomBLUE

  RedP.innerHTML = redINP.value
  RedSP.innerHTML = redINP.value
  GreenP.innerHTML = greenINP.value
  GreenSP.innerHTML = greenINP.value
  BlueP.innerHTML = blueINP.value
  BlueSP.innerHTML = blueINP.value

  block.style.backgroundColor = `rgb(${randomRED}, ${randomGREEN}, ${randomBLUE})`
  itogCol.style.backgroundColor = `rgb(${randomRED}, ${randomGREEN}, ${BlUe})`
})

// </colorSector>

// <saveCode>
let saveBTN = document.querySelector('.saveBTN')
let copyWindow = document.querySelector('.copyWindow')
let body = document.querySelector('body')

saveBTN.addEventListener('click', function(){
  let weelSave = `.box{width:${widthINP.value}px;height:${heightINP.value}px;border:${borderINP.value}px solid rgb(0,0,0);border-radius:${borderRadiusINP.value}px;bacground-color:rgb(${randomRED},${randomGREEN},${randomBLUE});}`
  navigator.clipboard.writeText(weelSave)
  body.append(copyWindow)
  copyWindow.style.animation = 'none'
  copyWindow.style.animation = 'proav2 3s linear'
})
