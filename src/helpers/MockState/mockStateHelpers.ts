export function randomInteger(max: number) {
  const rand = 1 + Math.random() * (max);
  return Math.floor(rand);
}

export function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getTime();
}
