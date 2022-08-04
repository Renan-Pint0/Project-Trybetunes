import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends Component {
  render() {
    const { albumImage, albumName, id } = this.props;
    return (
      <div>
        <img src={ albumImage } alt={ albumName } />
        <p>{ albumName }</p>
        <Link to={ `/album/${id}` } data-testid={ `link-to-album-${id}` }>
          Acessar esse album
        </Link>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  albumImage: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default AlbumCard;
