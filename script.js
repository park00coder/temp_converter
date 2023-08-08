document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
  
    celsiusInput.addEventListener("input", convertCelsiusToFahrenheit);
    fahrenheitInput.addEventListener("input", convertFahrenheitToCelsius);
  
    function convertCelsiusToFahrenheit() {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2);
    }
  
    function convertFahrenheitToCelsius() {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = (fahrenheit - 32) * 5/9;
      celsiusInput.value = isNaN(celsius) ? "" : celsius.toFixed(2);
    }
  });
  
