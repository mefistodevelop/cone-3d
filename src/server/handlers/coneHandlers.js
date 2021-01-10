const getPointsCoordinates = (height, radius, segmentsNumber) => {
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

exports.getPoints = (req, res) => {
  const height = Number(req.query.height);
  const radius = Number(req.query.radius);
  const segments = Number(req.query.segments);

  const points = getPointsCoordinates(height, radius, segments);

  res.status(200).json({
    status: 'success',
    data: { points },
  });
};
