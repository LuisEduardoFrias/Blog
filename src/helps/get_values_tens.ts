
export default function getValuesTens(value: number): [number, number] {
  const lessTens = value - 10;
  return [lessTens, value];
}
