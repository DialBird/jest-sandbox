import React from 'react';
import { connect } from 'react-redux';

import GuessedWords from './guessedWords';
import Congrats from './congrats';
import Input from './input';
import { getSecretWord } from '../actions';

export class UnconnectedApp extends React.Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  };
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;

  return { success, guessedWords, secretWord };
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
