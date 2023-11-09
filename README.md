# numeros_a_palabras

numeros_a_palabras es una libreria Javascript para convertir numeros a letras.

## Instalación

```bash
npm install numeros_a_palabras
```

## Uso

```javascript
const numeros = require("numeros_a_palabras");

numeros.numero2word().Config._setSingular("DOLAR");
numeros.numero2word().Config._setPlural("DOLARES");
numeros.numero2word().Config._setCentsSingular("CENTAVO");
numeros.numero2word().Config._setCentsPlural("CENTAVOS");

//returns CIENTO VEINTITRES DOLARES CON CUATRO CENTAVOS
console.log(numeros.numero2word(123.04).toString());

//returns Un millon quinientos mil cuatrocientos cincuenta dolares con cuatro centavos
console.log(numeros.numero2word(1500450.04).Capitalize().toString());

//returns UN DOLAR CON CINCUENTA CENTAVOS
console.log(numeros.numero2word(1.5).toString());

numeros.numero2word().Config._setSingular("vez al día");
numeros.numero2word().Config._setPlural("veces al día");
//Configuración veces
//returns Una vez al día
console.log(numeros.numero2word(1).FemaleValue().Capitalize().toString());

numeros.numero2word().Config._setSingular("hora al día");
numeros.numero2word().Config._setPlural("horas al día");
numeros.numero2word().Config._setCentsSingular("minuto");
numeros.numero2word().Config._setCentsPlural("minutos");
//Configuración horas
//returns Veinticuatro horas al día
console.log(numeros.numero2word(24).Capitalize().toString());

//returns Un hora al día con treinta minutos
console.log(numeros.numero2word(1.3).Capitalize().toString());
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Creado por
Roberto Antonio Acevedo
Comentarios realizados por ChatGPT.


## Créditos:
Richard Jesus Aguirre Perez.(https://www.npmjs.com/package/numeros_to_words)
Implementación basada en NumeroALetra.js