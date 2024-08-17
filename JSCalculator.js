let calculation = localStorage.getItem('calculation') || '';

  function updateCalculation (value) {

   calculation += value;
   console.log(calculation);

   localStorage.setItem('calculation', calculation);

  document.querySelector('.calculationSpace').innerHTML = `${calculation}`;

  }

  document.addEventListener('DOMContentLoaded', (event) => {
            document.querySelector('.calculationSpace').innerHTML = `${calculation}`;
        });

