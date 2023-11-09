/*MIT License
numeros_a_palabras
Copyright (c) 2023 Roberto Antonio Acevedo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

/**
 * Módulo que proporciona funciones para convertir números a palabras y realizar operaciones de formato.
 * @module numero2word
 */

const {
  NumeroALetras,
  setSingular,
  setPlural,
  getSingular,
  setCentsPlural,
  setCentsSingular,
} = require("./numero_to_word/index.js");

/**
 * Función que elimina espacios duplicados en una cadena.
 * @param {string} value - Cadena de entrada.
 * @returns {string} - Cadena con espacios duplicados eliminados.
 */
function Sanitizer(value) {
  return value.replace("  ", " ");
}

/**
 * Función que capitaliza la primera letra de una cadena y convierte las demás a minúsculas.
 * @param {string} string - Cadena de entrada.
 * @returns {string} - Cadena con la primera letra en mayúscula y las demás en minúscula.
 */
function capitalizeFirstLetter(string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Función principal que proporciona métodos encadenables para realizar operaciones en números y su representación en palabras.
 * @param {number} [num=null] - Número a procesar.
 * @returns {Object} - Objeto con métodos encadenables.
 * @property {Function} FemaleValue - Convierte ciertos valores específicos a su forma femenina.
 * @property {Function} Capitalize - Capitaliza la primera letra de la representación en palabras del número.
 * @property {Object} Config - Objeto con métodos para configurar singular, plural, y otras opciones.
 * @property {Function} clearConfig - Restaura la configuración de singular, plural, y otras opciones a valores predeterminados.
 * @property {Function} toString - Devuelve la representación en palabras del número, con formato aplicado.
 */
function numero2word(num = null) {
  let _value = null;

  // Obtener la representación en palabras del número y eliminar espacios innecesarios.
  let data = NumeroALetras(num).trim();
  _value = data;

  return {
    /**
     * Convierte ciertos valores específicos a su forma femenina.
     * @function
     * @returns {Object} - Objeto con métodos encadenables.
     */
    FemaleValue: function () {
      if (_value == "UN " + getSingular()) _value = "UNA " + getSingular();
      return this;
    },
    /**
     * Capitaliza la primera letra de la representación en palabras del número.
     * @function
     * @returns {Object} - Objeto con métodos encadenables.
     */
    Capitalize: function () {
      _value = capitalizeFirstLetter(_value);
      return this;
    },
    /**
     * Objeto con métodos para configurar singular, plural, y otras opciones.
     * @namespace
     */
    Config: {
      /**
       * Establece el valor singular.
       * @function
       * @param {string} singular - Valor singular.
       */
      _setSingular: function (singular) {
        setSingular(singular);
      },
      /**
       * Establece el valor plural.
       * @function
       * @param {string} plural - Valor plural.
       */
      _setPlural: function (plural) {
        setPlural(plural);
      },
      /**
       * Establece el valor singular para los centavos.
       * @function
       * @param {string} singular - Valor singular para los centavos.
       */
      _setCentsSingular: function (singular) {
        setCentsSingular(singular);
      },
      /**
       * Establece el valor plural para los centavos.
       * @function
       * @param {string} plural - Valor plural para los centavos.
       */
      _setCentsPlural: function (plural) {
        setCentsPlural(plural);
      },
    },
    /**
     * Restaura la configuración de singular, plural, y otras opciones a valores predeterminados.
     * @function
     */
    clearConfig: function () {
      setSingular("");
      setPlural("");
      setCentsSingular("");
      setCentsPlural("");
    },
    /**
     * Devuelve la representación en palabras del número, con formato aplicado.
     * @function
     * @returns {string} - Representación en palabras del número con formato.
     */
    toString: function () {
      return Sanitizer(_value);
    },
  };
}

// Exportar la función principal como parte de un objeto.
module.exports = {
  numero2word,
};
