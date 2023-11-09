declare module "numero-to-word" {
  /**
   * Función que elimina espacios duplicados en una cadena.
   * @param value - Cadena de entrada.
   * @returns Cadena con espacios duplicados eliminados.
   */
  export function Sanitizer(value: string): string;

  /**
   * Función que capitaliza la primera letra de una cadena y convierte las demás a minúsculas.
   * @param string - Cadena de entrada.
   * @returns Cadena con la primera letra en mayúscula y las demás en minúscula.
   */
  export function capitalizeFirstLetter(string: string): string;

  /**
   * Función principal que proporciona métodos encadenables para realizar operaciones en números y su representación en palabras.
   * @param num - Número a procesar.
   * @returns Objeto con métodos encadenables.
   */
  export function numero2word(num?: number | null): {
    /**
     * Convierte ciertos valores específicos a su forma femenina.
     * @returns Objeto con métodos encadenables.
     */
    FemaleValue(): {
      /**
       * Capitaliza la primera letra de la representación en palabras del número.
       * @returns Objeto con métodos encadenables.
       */
      Capitalize(): {
        /**
         * Objeto con métodos para configurar singular, plural, y otras opciones.
         */
        Config: {
          /**
           * Establece el valor singular.
           * @param singular - Valor singular.
           */
          _setSingular(singular: string): void;

          /**
           * Establece el valor plural.
           * @param plural - Valor plural.
           */
          _setPlural(plural: string): void;

          /**
           * Establece el valor singular para los centavos.
           * @param singular - Valor singular para los centavos.
           */
          _setCentsSingular(singular: string): void;

          /**
           * Establece el valor plural para los centavos.
           * @param plural - Valor plural para los centavos.
           */
          _setCentsPlural(plural: string): void;
        };

        /**
         * Restaura la configuración de singular, plural, y otras opciones a valores predeterminados.
         */
        clearConfig(): void;
      };

      /**
       * Devuelve la representación en palabras del número, con formato aplicado.
       * @returns Representación en palabras del número con formato.
       */
      toString(): string;
    };
  };
}
