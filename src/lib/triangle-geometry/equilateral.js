import Triangle from './triangle';

/**
 * An equilateral Triangle. One where all the sides are of equal length
 * @memberof module:lib/triangle-geometry
 * @extends lib/triangle-geometry.Triangle
 */
class Equilateral extends Triangle {
  /**
   * @param {number} side - length of the side
   * @throws Will throw an error if the side-length is negative
   */
  constructor(side) {
    super(side, side, side);
    // Can't get JSDoc to document instance members in ES2015 classes
    /**
     * Length of the each side
     * @type {number}
     */
    this.side = side;
  }

  /**
   * @return {number} - the perimeter
   */
  getPerimeter() {
    return this.side * 3;
  }
}

export default Equilateral;
