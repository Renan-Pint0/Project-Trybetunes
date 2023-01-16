import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';
import Loading from './Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
      albumName: '',
      musics: [],
      favMusics: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const response = await getMusics(id);
    this.setState({
      artistName: response[0].artistName,
      albumName: response[0].collectionName,
    });
    response.forEach((resposta, i) => {
      if (i >= 1) {
        this.setState(({ musics }) => ({
          musics: [...musics, resposta],
        }));
      }
    });
    const favSongs = await getFavoriteSongs();
    this.setState({
      favMusics: favSongs.map((favSong) => parseInt(favSong, 10)),
    });
  }

  render() {
    const { artistName, albumName, musics, loading } = this.state;
    const { favMusics } = this.state;
    console.log(favMusics);
    return (
      <div data-testid="page-album">
        <Header />
        <p data-testid="artist-name" className="album">{artistName}</p>
        <p data-testid="album-name">{albumName}</p>
        <div>
          {
            musics.map((music) => (<MusicCard
              key={ music.trackId }
              Image={ music.artworkUrl100 }
              Name={ music.trackName }
              audioPreview={ music.previewUrl }
              id={ music.trackId }
              favMusics={ favMusics }
            />))
          }
        </div>
        {loading && <Loading />}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
