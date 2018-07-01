export interface IMusic {
    _id: string,
    name: string,
    cover: string,
    bio: string,
    albums: {
        albumId: string,
        title: string,
        year: number,
        cover: string,
        price: number 
    }
}