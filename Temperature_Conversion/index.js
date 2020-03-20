function celTofar() {
  let userTemp = document.getElementById("temperature").value;
  userTemp = parseInt(userTemp);
  let fahrenheit = userTemp * 1.8 + 32;
  fahrenheit = fahrenheit.toFixed(2);
  document.getElementById("display").innerHTML = fahrenheit + "° F";
}

function farTocel() {
  let userTemp = document.getElementById("temperature").value;
  userTemp = parseInt(userTemp);
  let celsius = userTemp / 1.8 - 32;
  celsius = celsius.toFixed(2);
  document.getElementById("display").innerHTML = celsius + "° C";
}

function farTokel() {
  let userTemp = document.getElementById("temperature").value;
  userTemp = parseInt(userTemp);
  let kelvin = (userTemp - 32) * 1.8 + 273.15;
  kelvin = kelvin.toFixed(2);
  document.getElementById("display").innerHTML = kelvin + "° K";
}

function celTokel() {
  let userTemp = document.getElementById("temperature").value;
  userTemp = parseInt(userTemp);
  let kelvin = userTemp + 273.15;
  kelvin = kelvin.toFixed(2);
  document.getElementById("display").innerHTML = kelvin + "° K";
}

function kelTofar() {
  let userTemp = document.getElementById("temperature").value;
  userTemp = parseInt(userTemp);
  let fahrenheit = (userTemp - 273.15) * 1.8 + 32;
  fahrenheit = fahrenheit.toFixed(2);
  document.getElementById("display").innerHTML = fahrenheit + "° F";
}

function kelTocel() {
  let userTemp = document.getElementById("temperature").value;
  userTemp = parseInt(userTemp);
  let celsius = userTemp - 273.15;
  celsius = celsius.toFixed(2);
  document.getElementById("display").innerHTML = celsius + "° C";
}
