#Platzom

Platzom es un idioma inventado para el [curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com).

## Descripción del idioma

- Si la palabra termina en con "ar" se le quitan esas dos letras.

- Si la palabra inicia con Z, se le añade "pe" al final.

- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio.

- Por último, si la pabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas.

`Esto solo es un ejemplo de como poner codigo en markdown`

##Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarpe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

## Créditos
- [Daniel Contreras](http://google.com)

## Licencia
[MIT](https://opensource.org/licenses/MIT)