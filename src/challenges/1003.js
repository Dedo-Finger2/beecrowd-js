/**
 * Soma Simples
 * @param { Array<number> } lines
 * @returns { string }
 */
export function challenge1003(lines) {
  const [ a, b ] = lines.map((num) => parseInt(num, 10));

  const result = a + b;

  const message = `SOMA = ${result}`;

  console.log(message);

  return message;
}
