import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('SpotifyWrapper', () => {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});

    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'blabla',
    });

    expect(spotify.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    const spotify = new SpotifyWrapper({});

    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo',
    });

    expect(spotify.token).to.be.equal('foo');
  });
});
