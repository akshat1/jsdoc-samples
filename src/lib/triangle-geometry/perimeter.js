/**
 * The perimeter; the sum of all sides.
 *
 * @memberof module:lib/triangle-geometry
 * @param {number} a - length of one of the sides of the triangle
 * @param {number} b - length of another side of the triangle
 * @param {number} c - length of the last side of the triangle
 * @return {number} - the perimeter
 * @throws Will throw an error if any of the side-lengths is negative
 * @see https://www.mathsisfun.com/triangle.html
 */
function perimeterOfTriangle(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    throw new Error('Side length can not be negative');
  }
  return a + b + c;
}

export default perimeterOfTriangle;
