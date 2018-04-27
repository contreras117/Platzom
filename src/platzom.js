// sin el default se importaria import {platzom} from 'platzom'
// con la palabra default no son necesarias las llaves {}: import platzom from 'platzom'


export default function platzom(str) {
  let translation = str;

  //Si la palabra original es un palindromo, ninguna regla anterior cuenta
  //y se devuelve la misma palabra intercalando mayusculas y minusculas.

  const reverse = str => str.split('').reverse().join('');
  const minMay = str => str.split('').map( (char, index) => 
    index % 2 == 0 ? char.toUpperCase() : char.toLowerCase()).join('');

  if (str == reverse(str)){
    return minMay(str);
  }

  //Si la palabra termina en "ar", se le quitan esos dos caracteres.
  if (translation.toLowerCase().endsWith("ar")){
    /* Corta los ultimos dos caracteres de la cadena */
    translation = translation.slice(0, -2);
  }

  //Si la palabra inicia con z, se le añade "pe" al final.
  if (translation.toLowerCase().startsWith("z")){
    translation += "pe";
  }

  //Si la palabra traducida tiene mas 10 o mas letras, se parte a la mitad
  // y se une con un guion medio.
  const length = translation.length;
  if (length >= 10){
    const firstHalf = translation.slice(0, Math.round(length/2));
    const secondHalf = translation.slice(Math.round(length/2));

    translation = `${firstHalf}-${secondHalf}`;
  }

  return translation;
}
