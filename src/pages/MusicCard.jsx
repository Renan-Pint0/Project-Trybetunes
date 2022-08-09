import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }

  favoriteSongs = async ({ target }) => {
    this.setState({ loading: true });
    await addSong(target.name);
    this.setState({ loading: false });
  }

  render() {
    const { Image, Name, audioPreview, id, favMusics } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <img src={ Image } alt={ Name } />
        <p>{ Name }</p>
        <audio data-testid="audio-component" src={ audioPreview } controls>
          <track
            kind="captions"
          />
          O seu navegador não suporta o elemento
          {' '}
          <code>
            audio
          </code>
        </audio>
        <label htmlFor={ id }>
          Favorita
          { favMusics.includes(id) ? <input
            type="checkbox"
            name={ id }
            data-testid={ `checkbox-music-${id}` }
            onChange={ this.favoriteSongs }
            checked
          /> : <input
            type="checkbox"
            name={ id }
            data-testid={ `checkbox-music-${id}` }
            onChange={ this.favoriteSongs }
          /> }
        </label>
        {loading && <Loading />}
      </div>
    );
  }
}

MusicCard.propTypes = {
  Image: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  audioPreview: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  favMusics: PropTypes.number.isRequired,
};

export default MusicCard;
