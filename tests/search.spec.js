import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';
import API_URL from '../src/config';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let names;
  let spotify;

  afterEach(() => {
    fetchedStub.restore();
  });

  beforeEach(() => {
    names = ['Deftones', 'Queen'];

    spotify = new SpotifyWrapper({
      token: 'foo',
    });

    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => {} });
  });

  describe('smoke tests', () => {
    it('should exist the spotify.search.albums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist the spotify.search.artists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the spotify.search.playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    });

    it('should exist the spotify.search.tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });
  });

  describe('Testing spotify.search.albums', () => {
    it('should call fetch function', () => {
      spotify.search.albums();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      let albumURL;

      names.forEach((name) => {
        albumURL = `${API_URL}/search?q=${name}&type=album`;

        spotify.search.albums(name);

        expect(fetchedStub).to.have.been.calledWith(albumURL);
      });
    });
  });

  describe('Testing spotify.search.artists', () => {
    it('should call fetch function', () => {
      spotify.search.artists();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      let artistURL;

      names.forEach((name) => {
        artistURL = `${API_URL}/search?q=${name}&type=artist`;

        spotify.search.artists(name);

        expect(fetchedStub).to.have.been.calledWith(artistURL);
      });
    });
  });

  describe('Testing spotify.search.playlists', () => {
    it('should call fetch function', () => {
      spotify.search.playlists();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      let playlistURL;

      names.forEach((name) => {
        playlistURL = `${API_URL}/search?q=${name}&type=playlist`;

        spotify.search.playlists(name);

        expect(fetchedStub).to.have.been.calledWith(playlistURL);
      });
    });
  });

  describe('Testing spotify.search.tracks', () => {
    it('should call fetch function', () => {
      spotify.search.tracks();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      let trackURL;

      names.forEach((name) => {
        trackURL = `${API_URL}/search?q=${name}&type=track`;

        spotify.search.tracks(name);

        expect(fetchedStub).to.have.been.calledWith(trackURL);
      });
    });
  });
});
