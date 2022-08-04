import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { Image, Name, audioPreview } = this.props;
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
      </div>
    );
  }
}

MusicCard.propTypes = {
  Image: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  audioPreview: PropTypes.string.isRequired,
};

export default MusicCard;
