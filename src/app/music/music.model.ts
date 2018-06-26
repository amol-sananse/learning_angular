export interface IMusic {
    _id: string,
    artistName: string,
    artistCover: string,
    artistBio: string,
    albums: {
        albumId: string,
        albumTitle: string,
        albumYear: number,
        albumCover: string,
        albumPrice: number 
    }
}