import areaOfTriangle from './area';
import perimeterOfTriangle from './perimeter';

/**
 * A generic Triangle. It consists of 3 vertices (a, b, and c) and is therefore described by the
 * edges ab, bc, and ca.
 * @memberof module:lib/triangle-geometry
 * @class
 * @param {number} ab - length of the side ab
 * @param {number} bc - length of the side bc
 * @param {number} ca - length of the side ca
 * @throws Will throw an error if any of the side-lengths is negative
 */
function Triangle(ab, bc, ca) {
  if (ab < 0 || bc < 0 || cd < 0) {
    throw new Error('Side length can not be negative');
  }

  // JSDoc will recognize these as instance members
  /**
   * Length of the first side
   * @type {number}
   */
  this.ab = ab;
  /**
   * Length of the second side
   * @type {number}
   */
  this.bc = bc;
  /**
   * Length of the third side
   * @type {number}
   */
  this.ca = ca;
}

/**
 * @return {number} - the area of this triangle
 */
Triangle.prototype.getArea = function() {
  return areaOfTriangle(this.ab, this.bc, this.ca);
};

/**
 * @return {number} - the perimeter of this triangle
 */
Triangle.prototype.getPerimeter = function() {
  return perimeterOfTriangle(this.ab, this.bc, this.ca);
};

export default Triangle;
