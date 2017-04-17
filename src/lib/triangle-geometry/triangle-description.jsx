import React from 'react';

/**
 * Renders a text description of a triangle.
 * @memberof module:lib/triangle-geometry
 * @class
 */
const TriangleDescription = (props) =>
  (<div>
    <label>A Triangle with side lengths,</label>
    <span>ab</span>
    <span>bc</span>
    <span>cd</span>
  </div>);

TriangleDescription.defaultProps = {
  ab: 10,
  bc: 20,
  cd: 30,
};

/**
 * @memberOf module:lib/triangle-geometry.TriangleDescription
 * @type {Object}
 * @property {number} ab=4 - length of side ab
 * @property {number} bc=5 - length of side bc
 * @property {number} ca=6 - length of side ca
 */
TriangleDescription.propTypes = {
  ab: React.PropTypes.number,
  bc: React.PropTypes.number,
  cd: React.PropTypes.number,
};

export default TriangleDescription;
