import React from "react";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight:{value: val}, averageWeight:{measurementUnit: kg}, image } = this.props.poke;
    return (
      <>
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{`Average Weight: ${val}${kg}`}</p>
        </div>
        <img src={image} alt={name} />
      </>
    );
  }
};

export default Pokemon;
