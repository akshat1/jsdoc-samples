import React from 'react';

/**
 * Renders a text description of a triangle. This time with a different syntax.
 * @memberof module:lib/triangle-geometry
 * @extends React.Component
 * @param {Object} props
 * @param {number} props.ab=0 - length of side ab
 * @param {number} props.bc=0 - length of side bc
 * @param {number} props.ca=0 - length of side ca
 */
class TriangleDescriptionStyleTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ab, bc, ca } = this.props;

    return (<div>
      <label>A Triangle with side lengths,</label>
      <span>ab</span>
      <span>bc</span>
      <span>cd</span>
    </div>);
  }
}

TriangleDescriptionStyleTwo.defaultProps = {
  ab: 0,
  bc: 0,
  cd: 0,
};

TriangleDescriptionStyleTwo.propTypes = {
  ab: React.PropTypes.number,
  bc: React.PropTypes.number,
  cd: React.PropTypes.number,
};

export default TriangleDescriptionStyleTwo;
