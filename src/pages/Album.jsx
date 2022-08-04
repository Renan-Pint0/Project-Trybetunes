import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
      albumName: '',
      musics: [],
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
    console.log(response);
  }

  favoriteSongs = async () => {
    const { musics } = this.state;
    this.setState({ loading: true });
    await addSong(musics);
    this.setState({ loading: false });
  }

  render() {
    const { artistName, albumName, musics, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <p data-testid="artist-name">{artistName}</p>
        <p data-testid="album-name">{albumName}</p>
        {
          musics.map((music) => (<MusicCard
            key={ music.trackId }
            Image={ music.artworkUrl100 }
            Name={ music.trackName }
            audioPreview={ music.previewUrl }
            id={ music.trackId }
            change={ this.favoriteSongs }
          />))
        }
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
