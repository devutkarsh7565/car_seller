export function getRandomFloat(min: number, max: number, limit: number) {
  return (Math.random() * (max - min) + min) * limit;
}
