// 01 - Lanchonete da Trybe

function optionsMenu(number){
    switch(number){
        case 1:
            return "1 - Trybe Lanche Feliz";
        
        case 2:
            return "2 - McTrybe";

        case 3:
            return "3 - TrybeWooper";

        case 4:
            return "4 - X-Trybe";

        case 5:
            return "5 - Triplo Trybe com JS";

        default:
            return "Não temos esta opção ainda :("
    }
  }

  console.log(optionsMenu(6));
  module.exports = optionsMenu;

// 06 - Taxa Metabólica Basal
// Escreva um algoritmo que recebe os dados a seguir:
// * age: número maior que 0
// * sex: M ou F
// * weight: Em (kg) com número maior que 0
// * height: Em (cm) com número maior que 0
// Fórmula para homens:
// * (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
// Fórmula para mulheres:
// * (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161

function basalMetabolicRate(age, sex, weight, height){
    if(age > 0 && sex === 'M' && weight > 0 && height > 0){
        return "A taxa metabólica basal é: " + ((height * 6.25) + (weight * 9.99) - (age * 4.92) + 5) + " Kcal." ;
    }else if(age > 0 && sex === 'F' && weight > 0 && height > 0){
        return "A taxa metabólica basal é: " + ((height * 6.25) + (weight * 9.99) - (age * 4.92) - 161) + " Kcal." ;
    }else{
        return "Erro. uwu"
    }
  }
console.log(basalMetabolicRate(32, 'M', 70, 165));
  
  module.exports = basalMetabolicRate;

  /*
08 - Descubra a idade mínima
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais 
jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------
*/

function findYoungerPerson(marinaAge, silviaAge, izaAge){
    if(marinaAge < silviaAge && marinaAge < izaAge){
        return `Marina é a pessoa mais jovem e possui ${marinaAge} anos de idade.`
    }else if(silviaAge < marinaAge && silviaAge < izaAge){
        return `Silvia é a pessoa mais jovem e possui ${silviaAge} anos de idade.`
    }else if(izaAge < marinaAge && izaAge < silviaAge){
        return `Iza é a pessoa mais jovem e possui ${izaAge} anos de idade.`
    }
  }
  
  console.log(findYoungerPerson(42, 52, 94));

  module.exports = findYoungerPerson;