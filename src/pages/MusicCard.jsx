import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { Image, Name, audioPreview, id, change } = this.props;
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
          <input
            type="checkbox"
            name={ id }
            data-testid={ `checkbox-music-${id}` }
            onChange={ change }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  Image: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  audioPreview: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default MusicCard;
