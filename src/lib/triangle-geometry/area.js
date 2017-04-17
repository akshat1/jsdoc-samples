/**
 * Returns the area of a triangle calculated using Heron's formula.
 *
 * @memberof module:lib/triangle-geometry
 * @param {number} a - length of one of the sides of the triangle
 * @param {number} b - length of another side of the triangle
 * @param {number} c - length of the last side of the triangle
 * @return {number} - the area
 * @throws Will throw an error if any of the side-lengths is negative
 * @see https://www.mathsisfun.com/geometry/herons-formula.html
 */
function areaOfTriangle(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    throw new Error('Side length can not be negative');
  }
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

export default areaOfTriangle;
