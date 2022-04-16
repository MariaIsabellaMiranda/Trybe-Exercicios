import React from "react";

class Button extends React.Component {
  render() {
    const tipo = this.props.tipo;
    const filtraPoke = this.props.filtraPoke;
    return (
      <button name={tipo} onClick={filtraPoke}>{tipo}</button>
    );
  }
}

export default Button;
