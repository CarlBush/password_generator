// Assignment Code
var number = [1,2,3,4,5,6,7,8,9,0]
var lowerAbc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAbc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", "<", "=", ">", "@"]
var selected;
var charcterLength;

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  replacePassword = writePassword();
  document.getElementById("password").placeholder = replacePassword;
});

// Write password to the #password input
function writePassword() {
  var charcterLength = window.prompt("Choose a length of at least 8 characters and no more than 128 characters");
  console.log(charcterLength);
    if(!charcterLength){
    }

    else if(charcterLength < 8 || charcterLength > 128){
      window.alert("Please make a valid selection.")
      }
    
    else{
      var characterLowercase = window.confirm("Would you like to include lowercase?");
      console.log(characterLowercase);
      var characterUppercase = window.confirm("Would you like to include uppercase?");
      console.log(upperAbc);
      var characterNumber = window.confirm("Would you like to include numeric?");
      console.log(characterNumber);
      var characterSpecial = window.confirm("Would you like to include special charcters?");
      console.log(characterSpecial);
    };
  
    //All four NO
    if(!characterLowercase && !characterUppercase && !characterNumber && !characterSpecial){
      window.alert("Please make a valid selection.")
    }
    //All four YES
    else if(characterLowercase && characterUppercase && characterNumber && characterSpecial){
      selected = lowerAbc.concat(special, upperAbc, number);
    }
    
    //LOWERCASE CRITERIA
    else if(characterLowercase && characterUppercase && characterSpecial){
      selected = lowerAbc.concat(upperAbc, special);
    }
    else if(characterLowercase && characterUppercase && characterNumber){
      selected = lowerAbc.concat(upperAbc, number);
    }
    else if(characterLowercase && characterNumber && characterSpecial){
      selected = lowerAbc.concat(number, special);
    }
    else if(characterLowercase && characterNumber){
      selected = lowerAbc.concat(number);
    }
    else if(characterLowercase && characterSpecial){
      selected = lowerAbc.concat(special);
    }
    else if(characterLowercase && characterUppercase){
      selected = lowerAbc.concat(upperAbc);
    }
    else if(characterLowercase){
      selected = lowerAbc;
    }

  //UPPERCASE CRITERIA
  else if(characterUppercase && characterLowercase && characterSpecial){
    selected = upperAbc.concat(lowerAbc, special);
  }
  else if(characterUppercase && characterLowercase && characterNumber){
    selected = upperAbc.concat(lowerAbc, number);
  }
  else if(characterUppercase && characterNumber && characterSpecial){
    selected = upperAbc.concat(number, special);
  }
  else if(characterUppercase && characterNumber){
    selected = upperAbc.concat(number);
  }
  else if(characterUppercase && characterSpecial){
    selected = upperAbc.concat(special);
  }
  else if(characterUppercase && characterLowercase){
    selected = upperAbc.concat(lowerAbc);
  }
  else if(characterUppercase){
    selected = upperAbc;
  }

  //NUMBER CRITERIA
  else if(characterNumber && characterLowercase && characterSpecial){
    selected = number.concat(lowerAbc, special);
  }
  else if(characterNumber && characterLowercase && characterUppercase){
    selected = number.concat(lowerAbc, upperAbc);
  }
  else if(characterNumber && characterUppercase && characterSpecial){
    selected = number.concat(upperAbc, special);
  }
  else if(characterNumber && characterUppercase){
    selected = number.concat(upperAbc);
  }
  else if(characterNumber && characterSpecial){
    selected = number.concat(special);
  }
  else if(characterNumber && characterLowercase){
    selected = number.concat(lowerAbc);
  }
  else if(characterNumber){
    selected = number;
  }

  //SPECIAL CRITERIA
  else if(characterSpecial && characterLowercase && characterNumber){
    selected = special.concat(lowerAbc, number);
  }
  else if(characterSpecial && characterLowercase && characterUppercase){
    selected = special.concat(lowerAbc, upperAbc);
  }
  else if(characterSpecial && characterUppercase && characterNumber){
    selected = special.concat(upperAbc, number);
  }
  else if(characterSpecial && characterUppercase){
    selected = special.concat(upperAbc);
  }
  else if(characterSpecial && characterNumber){
    selected = special.concat(number);
  }
  else if(characterSpecial && characterLowercase){
    selected = special.concat(lowerAbc);
  }
  else if(characterSpecial){
    selected = special;
  };

    var password = [];

  for(var i = 0; i < charcterLength; i++){
    var passwordSelected = selected[Math.floor(Math.random() * selected.length)];
    password.push(passwordSelected);
    console.log(passwordSelected);
    }

  var replacePassword = password.join("");
    console.log(replacePassword);
    UserInput(replacePassword);
    return replacePassword;
}

function UserInput(replacePassword) {
  document.getElementById("password").textContent = replacePassword};