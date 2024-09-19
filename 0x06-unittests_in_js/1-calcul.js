function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedB - roundedA;
    case 'DIVIDE':
      return roundedA / roundedB;
    default:
      throw new Error('Invalid type');
  }
}

module.exports = calculateNumber;
