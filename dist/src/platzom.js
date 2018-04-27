'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
// sin el default se importaria import {platzom} from 'platzom'
// con la palabra default no son necesarias las llaves {}: import platzom from 'platzom'


function platzom(str) {
  var translation = str;

  //Si la palabra original es un palindromo, ninguna regla anterior cuenta
  //y se devuelve la misma palabra intercalando mayusculas y minusculas.

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  var minMay = function minMay(str) {
    return str.split('').map(function (char, index) {
      return index % 2 == 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
  };

  if (str == reverse(str)) {
    return minMay(str);
  }

  //Si la palabra termina en "ar", se le quitan esos dos caracteres.
  if (translation.toLowerCase().endsWith("ar")) {
    /* Corta los ultimos dos caracteres de la cadena */
    translation = translation.slice(0, -2);
  }

  //Si la palabra termina con z, se le añade "pe" al final.
  if (translation.toLowerCase().startsWith("z")) {
    translation += "pe";
  }

  //Si la palabra traducida tiene mas 10 o mas letras, se parte a la mitad
  // y se une con un guion medio.
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));

    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
}