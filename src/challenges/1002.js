/**
 * Área do Círculo
 * @param { Array<number> } lines
 * @returns { string }
 */
export function challenge1002(lines) {
  const [ r ] = lines.map((num) => parseFloat(num, 10));

  const n = Math.PI.toFixed(5);

  const result = (n * (r ** 2)).toFixed(4);
  const message = `A=${result}`;

  console.log(message);

  return message;
}
