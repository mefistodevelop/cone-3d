export const getPoints = (height, radius, segmentsNumber) => {
  const A = [0, 0, height];

  const points = [];

  const calcPoints = (j) => {
    const i = j < segmentsNumber ? j : 0;
    const x = radius * Math.cos((2 * Math.PI * i) / segmentsNumber);
    const y = radius * Math.sin((2 * Math.PI * i) / segmentsNumber);
    return [x, y, 0];
  };

  for (let i = 0; i < segmentsNumber; i += 1) {
    const p1 = calcPoints(i);
    const p2 = calcPoints(i + 1);
    points.push(A, p1, p2);
  }

  return points;
};
