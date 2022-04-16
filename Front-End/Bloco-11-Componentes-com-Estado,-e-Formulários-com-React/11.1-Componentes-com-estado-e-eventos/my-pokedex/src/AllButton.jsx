import React from "react";

class AllButton extends React.Component {
  render() {
    const allButton = this.props.allButton
    return (
      <button onClick={allButton}>All</button>
    );
  }
}

export default AllButton;
