import React from "react";

class Fieldset extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Formulário no React</legend>
          <label htmlFor="name">
            Nome:
            <input type="text" name="name" maxLength={40}/>
          </label>

        </fieldset>
      </form>
    );
  }
}

export default Fieldset;
