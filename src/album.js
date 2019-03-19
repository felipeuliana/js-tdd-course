export default function album () {
  return {
    getAlbum: id => this.request(`${this.apiURL}/album/${id}`),
    getAlbums: ids => this.request(`${this.apiURL}/albums/?ids=${ids}`),
    getTracks: id => this.request(`${this.apiURL}/tracks/${id}`)
  };
}
