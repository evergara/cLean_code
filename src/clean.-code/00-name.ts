() => {
  //mal nombramiento: las variables no sa explican por si solas 
  const n = 53;
  const tx = 0.15;
  const cat = 'T-Shirts';
  const ddmmyy = new Date('August 15, 1965 00:00:00');

  //Buen nombramiento - las variables por si solas me explican su finalidad
  const numberOfUnits = 53;
  const txx = 0.15;
  const category = 'T-Shirts';
  const birthDate = new Date('August 15, 1965 00:00:00');


  // Ausencia de onformacion tecnica en los nombres
  //mal:
  class AbstractUser{};
  class UserMixin{};
  class UserImplemantation{};
  interface UserInterface{};

  //Buenos: porque ya esas palabras podemos deducirlas
  class User{}
  interface User{}
  
};
