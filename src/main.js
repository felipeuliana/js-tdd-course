import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('Deftones');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('5LEXck3kfixFaA3CqVE7bC');
const albumInfo = document.getElementById('album-info');

albums.then((data) => renderAlbums(data.albums.items, albumList));
album.then((data) => renderAlbumInfo(data, albumInfo));
