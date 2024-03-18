// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const btnCalculate = document.getElementById("btn_calculate");
    const btnClear = document.getElementById("btn_clear_f");
  
    btnCalculate.addEventListener("click", function() {
      const f1Int = parseFloat(document.getElementById("f1_int").value) || 0;
      const f1Num = parseFloat(document.getElementById("f1_num").value) || 0;
      const f1Den = parseFloat(document.getElementById("f1_den").value) || 1;
  
      const f2Int = parseFloat(document.getElementById("f2_int").value) || 0;
      const f2Num = parseFloat(document.getElementById("f2_num").value) || 0;
      const f2Den = parseFloat(document.getElementById("f2_den").value) || 1;
  
      const operation = document.getElementById("op_fr").value;
  
      let resultInt, resultNum, resultDen;
  
      switch(operation) {
        case "+":
          resultInt = f1Int + f2Int;
          resultNum = f1Num * f2Den + f2Num * f1Den;
          resultDen = f1Den * f2Den;
          break;
        case "-":
          resultInt = f1Int - f2Int;
          resultNum = f1Num * f2Den - f2Num * f1Den;
          resultDen = f1Den * f2Den;
          break;
        case "*":
          resultInt = 0;
          resultNum = (f1Int * f1Den + f1Num) * (f2Int * f2Den + f2Num);
          resultDen = f1Den * f2Den;
          break;
        case "/":
          resultInt = 0;
          resultNum = (f1Int * f1Den + f1Num) * f2Den;
          resultDen = (f2Int * f2Den + f2Num) * f1Den;
          break;
      }
  
      const gcd = function(a, b) {
        return b ? gcd(b, a % b) : a;
      };
  
      const commonDivisor = gcd(resultNum, resultDen);
  
      resultInt += Math.floor(resultNum / resultDen);
      resultNum %= resultDen;
      const divisor = gcd(resultNum, resultDen);
      resultNum /= divisor;
      resultDen /= divisor;
  
      const frSign1 = resultInt < 0 ? "−" : "";
      const frSign2 = resultNum < 0 ? "−" : "";
  
      document.getElementById("fr_sign3").innerText = resultInt !== 0 ? frSign1 : frSign2;
      document.getElementById("div_f3").style.display = resultInt !== 0 ? "block" : "none";
      document.getElementById("f3_int").value = Math.abs(resultInt);
      document.getElementById("f3_num").value = Math.abs(resultNum);
      document.getElementById("f3_den").value = Math.abs(resultDen);
    });
  
    btnClear.addEventListener("click", function() {
      document.querySelectorAll(".val_fraction").forEach(function(input) {
        input.value = "";
      });
    });
  });
  