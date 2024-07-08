/**
 * Extremamente Básico
 * @param { Array<number> } lines
 * @returns { string }
 */
export function challenge1001(lines) {
  const [a, b] = lines.map((num) => parseInt(num, 10));

  const x = a + b;
  const message = `X = ${x}`;

  console.log(message);

  return message;
}
