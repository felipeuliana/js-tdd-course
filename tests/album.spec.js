/* global describe, afterEach, beforeEach, it */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';
import API_URL from '../src/config';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let ids;
  let spotify;
  let stubedFetch;

  afterEach(() => {
    stubedFetch.restore();
  });

  beforeEach(() => {
    ids = ['28sCbClwbAhHN6ovutizQg', '42QVkdlfEk9uaG0NboeKpq'];

    spotify = new SpotifyWrapper({
      token: 'foo'
    });

    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });

  describe('Smoke tests', () => {
    it(
      'should have getAlbum method',
      () => expect(spotify.album.getAlbum).to.exist
    );

    it(
      'should have getAlbums method',
      () => expect(spotify.album.getAlbums).to.exist
    );

    it(
      'should have getTracks method',
      () => expect(spotify.album.getTracks).to.exist
    );
  });

  describe('Testing getAlbum method', () => {
    it('should call fetch method', () => {
      spotify.album.getAlbum();

      return expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albumURL = `${API_URL}/album/`;

      ids.forEach((id) => {
        spotify.album.getAlbum(id);

        expect(stubedFetch).to.have.been.calledWith(`${albumURL}${id}`);
      });
    });

    it('should return the correct data from Promise', () => {
      ids.forEach((id) => {
        const album = spotify.album.getAlbum(id);

        album.then((data) => {
          expect(data).to.be.eql({ album: 'name' });
        });
      });
    });
  });

  describe('Testing getAlbums method', () => {
    it('should call fetch method', () => {
      spotify.album.getAlbums();

      return expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL\'s', () => {
      const albumsURL = `${API_URL}/albums/?ids=`;

      spotify.album.getAlbums(ids);

      expect(stubedFetch).to.have.been.calledWith(`${albumsURL}${ids}`);
    });

    it('should return the correct data from Promise', () => {
      const albums = spotify.album.getAlbums(ids);

      albums.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('Testing getTracks method', () => {
    it('should call fetch method', () => {
      spotify.album.getTracks();

      return expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracksURL = `${API_URL}/tracks/`;

      ids.forEach((id) => {
        spotify.album.getTracks(id);

        expect(stubedFetch).to.have.been.calledWith(`${tracksURL}${id}`);
      });
    });

    it('should return the correct data from Promise', () => {
      ids.forEach((id) => {
        const tracks = spotify.album.getTracks(id);

        tracks.then((data) => {
          expect(data).to.be.eql({ album: 'name' });
        });
      });
    });
  });
});
