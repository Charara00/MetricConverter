const celsiusInput=document.querySelector('#input-celsius')
const fahrenheitInput=document.querySelector('#input-fahrenheit')
const kelvinInput=document.querySelector('#input-kelvin')

const meterInput=document.querySelector('#input-meter')
const footInput=document.querySelector('#input-foot')
const incheInput=document.querySelector('#input-inche')

const kilogramInput=document.querySelector('#input-kilogram')
const poundInput=document.querySelector('#input-pound')

const literInput=document.querySelector('#input-liter')
const gallonInput=document.querySelector('#input-gallon')

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;


const roundToTwoDP = (num) => {
    return num.toFixed(2);
};

const celsiusToFaAndKe = () => {
    const celsiusTemp = parseFloat(celsiusInput.value);
    const fahrenheitTemp = (celsiusTemp * 1.8) + 32;
    const kelvinTemp = celsiusTemp + 273.15;
  
    fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
    kelvinInput.value = roundToTwoDP(kelvinTemp);
};
  
  
const fahrenheitToCeAndKe = () => {
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
    const kelvinTemp = (fahrenheitTemp + 459.67) * (5 / 9);
  
    celsiusInput.value = roundToTwoDP(celsiusTemp);
    kelvinInput.value = roundToTwoDP(kelvinTemp);
};
  
const kelvinToCeAndFa = () => {
    const kelvinTemp = parseFloat(kelvinInput.value);
    const celsiusTemp = kelvinTemp - 273;
    const fahrenheitTemp =  1.8 * (kelvinTemp - 273) + 32;
  
    celsiusInput.value = roundToTwoDP(celsiusTemp);
    fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
};

const meterToFoAndIn = () => {
    const meterTemp = parseFloat(meterInput.value);
    const footTemp = meterTemp*3.28;
    const incheTemp = meterTemp*39.37;
  
    footInput.value = roundToTwoDP(footTemp);
    incheInput.value = roundToTwoDP(incheTemp);
};
  
  
const footToMeAndIn = () => {
    const footTemp = parseFloat(footInput.value);
    const meterTemp = footTemp/3.28;
    const incheTemp = footTemp*12;
  
    meterInput.value = roundToTwoDP(meterTemp);
    incheInput.value = roundToTwoDP(incheTemp);
};
  
const incheToMeAndFo = () => {
    const incheTemp = parseFloat(incheInput.value);
    const meterTemp = incheTemp/39.37;
    const footTemp =incheTemp/12;
  
    meterInput.value = roundToTwoDP(meterTemp);
    footInput.value = roundToTwoDP(footTemp);
};

const kilogramToPo = () => {
    const kilogramTemp = parseFloat(kilogramInput.value);
    const poundTemp = kilogramTemp*2.2;
  
    poundInput.value = roundToTwoDP(poundTemp);
};
  
  
const poundToKg = () => {
    const poundTemp = parseFloat(poundInput.value);
    const kilogramTemp = poundTemp/2.2;
  
    kilogramInput.value = roundToTwoDP(kilogramTemp);
};
  
  
const literToGa = () => {
    const literTemp = parseFloat(literInput.value);
    const gallonTemp = literTemp*0.264;

    gallonInput.value = roundToTwoDP(gallonTemp);
};

const gallonToLi = () => {
    const gallonTemp = parseFloat(gallonInput.value);
    const literTemp = gallonTemp/0.264;
  
    literInput.value = roundToTwoDP(literTemp);
};


function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    };
};

const main = () => {
    window.onscroll = function() {myFunction()};

    celsiusInput.addEventListener('input', celsiusToFaAndKe);
    fahrenheitInput.addEventListener('input', fahrenheitToCeAndKe);
    kelvinInput.addEventListener('input', kelvinToCeAndFa);

    meterInput.addEventListener('input', meterToFoAndIn);
    footInput.addEventListener('input', footToMeAndIn);
    incheInput.addEventListener('input', incheToMeAndFo);

    kilogramInput.addEventListener('input', kilogramToPo);
    poundInput.addEventListener('input', poundToKg);

    literInput.addEventListener('input', literToGa);
    gallonInput.addEventListener('input', gallonToLi);
};

main();