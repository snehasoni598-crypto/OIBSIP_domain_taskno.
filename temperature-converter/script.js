document.getElementById('convertBtn').addEventListener('click', function() {
  const tempInput = document.getElementById('tempInput').value;
  const unit = document.getElementById('unitSelect').value;
  const resultDiv = document.getElementById('result');

  if (tempInput === "" || isNaN(tempInput)) {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }

  let temp = parseFloat(tempInput);
  let c, f, k;

  if (unit === "c") {
    c = temp;
    f = (c * 9/5) + 32;
    k = c + 273.15;
  } else if (unit === "f") {
    f = temp;
    c = (f - 32) * 5/9;
    k = c + 273.15;
  } else if (unit === "k") {
    k = temp;
    c = k - 273.15;
    f = (c * 9/5) + 32;
  }

  resultDiv.innerHTML = `
    Celsius: ${c.toFixed(2)} °C <br>
    Fahrenheit: ${f.toFixed(2)} °F <br>
    Kelvin: ${k.toFixed(2)} K
  `;
});
