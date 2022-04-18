import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dog: '',
      loading: true,
      dogsSalvos: [],
      inputDog: '',
    };
    this.fetchdog = this.fetchdog.bind(this);
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
      }
    )
  }

  async componentDidMount() {
    await this.fetchdog();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.dog.includes('terrier')) {
      return false;
    } return true;
  }

  componentDidUpdate() {
    const { dog } = this.state;
    localStorage.setItem('urlImagemDog', dog);
    const raça = dog.split('/')[4];
    alert(raça);
  }

  render() {
    const load = <span>Loading...</span>;
    const { dog, loading } = this.state;
    const imagem = <img src={ dog } alt="doguinho"></img>

    return (
      <div>
        { loading ? load : imagem }
        <button type='button' onClick={ this.fetchdog }>Próximo Dog</button>
      </div>
    );
  }
}

export default App;
