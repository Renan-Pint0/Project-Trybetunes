import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import AlbumCard from './AlbumCard';

class Search extends Component {
  constructor() {
    super();

    this.buttonCondition = this.buttonCondition.bind(this);

    this.state = {
      disabledButton: true,
      artistAlbumName: '',
      nameToRender: '',
      loading: false,
      albuns: [],
    };
  }

  searchAlbumClick = async () => {
    const { artistAlbumName } = this.state;
    this.setState({ loading: true });
    const albuns = await searchAlbumsAPI(artistAlbumName);
    this.setState({ nameToRender: artistAlbumName });
    this.setState({ loading: false, albuns, artistAlbumName: '' });
    // console.log(albuns);
  }

  buttonCondition({ target }) {
    const minLength = 2;
    const condition = target.value.length < minLength;
    this.setState(
      {
        disabledButton: condition,
        [target.name]: target.value,
      },
    );
  }

  render() {
    const {
      disabledButton,
      artistAlbumName,
      loading,
      albuns,
      nameToRender,
    } = this.state;
    return (
      <div>
        <div data-testid="page-search">
          <Header />
        </div>
        <div>
          <input
            type="text"
            name="artistAlbumName"
            data-testid="search-artist-input"
            placeholder="Seu artista favorito"
            value={ artistAlbumName }
            onChange={ this.buttonCondition }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ disabledButton }
            onClick={ this.searchAlbumClick }
          >
            Pesquisar
          </button>
          {loading && <Loading /> }
          {
            !albuns.length ? 'Nenhum álbum foi encontrado'
              : (
                <p>
                  Resultado de álbuns de:
                  {` ${nameToRender}`}
                  {albuns.map((album) => (
                    <AlbumCard
                      key={ album.collectionId }
                      albumImage={ album.artworkUrl100 }
                      albumName={ album.collectionName }
                      id={ album.collectionId }
                    />
                  ))}
                </p>)
          }
        </div>
      </div>
    );
  }
}

export default Search;
