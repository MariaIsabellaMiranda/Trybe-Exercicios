import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dog: '',
      loading: true,
    };
  }

  async fetchdog() {
    this.setState({
      loading: true
    }, async () =>  {
      const url = 'https://dog.ceo/api/breeds/image/random'
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        dog: data.message,
        loading: false,
      })
    })
  }
    
  async componentDidMount() {
    this.fetchdog();
  }

  // async shouldComponentUpdate() {
  //   const { dog } = this.state;
  //   const { dob } = dog;
  //   return dob.age < 50;
  // }

  render() {
    const load = <span>Loading...</span>;
    const { dog, loading } = this.state;
    const imagem = <img src={dog} alt={dog}></img>

    return (
      <div>
        { loading ? load : imagem }
      </div>
    );
  }
}

export default App;
