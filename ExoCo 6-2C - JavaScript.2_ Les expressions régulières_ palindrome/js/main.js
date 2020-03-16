const inverser = mot => {
    let motInverse = "";
  

    for (const lettre of mot) {
      motInverse = lettre + motInverse;
    }
    return motInverse;
  };

  const estPalindrome = mot => {
    return inverser(mot).toLowerCase() === mot.toLowerCase();
  };
  
  console.log(estPalindrome("php")); // true
  console.log(estPalindrome("Éric notre valet alla te laver ton ciré")); // false
  console.log(estPalindrome(" javascript ")); // false