const readlineSync = require('readline-sync');

// function metersToCm (heightInMeters) {
//   const heightInCm = heightInMeters * 100;
//   return heightInCm;
// };

// const weight = 63;
// const height = 1.60;

function handleBMI (weight, height) {
  // console.log(`Weight: ${weight}, Height: ${height}`);
  return weight / height ** 2;
}

function bmiTable (bmi) {
  if (bmi < 18.5) {
    console.log(`Seu IMC é ${bmi}, e você está abaixo do peso.`)
  } else if (bmi > 18.5 && bmi < 24.9) {
    console.log(`Seu IMC é ${bmi}, e você está com o peso normal.`)
  } else if (bmi > 25 && bmi < 29.9) {
    console.log(`Seu IMC é ${bmi}, e você está em sobrepeso.`)
  } else if (bmi > 30 && bmi < 34.9) {
    console.log(`Seu IMC é ${bmi}, e você está com obesidade grau I.`)
  } else if (bmi > 35 && bmi < 39.9) {
    console.log(`Seu IMC é ${bmi}, e você está com obesidade grau II.`)
  } else {
    console.log(`Seu IMC é ${bmi}, e você está com obesidade grau III ou IV.`)
  }
}

function main (){
  const weight = readlineSync.questionFloat('What is your weight in kgs? ');
  const height = readlineSync.question('What is your height in meters? ');
  const bmi = handleBMI(weight, height);

  console.log(`BMI: ${bmi.toFixed(1)}`);
  console.log(bmiTable(bmi));
}

main();