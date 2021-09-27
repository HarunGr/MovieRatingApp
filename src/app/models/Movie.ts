export interface Movie  
{
    id: number,
    title: string,
    poster: string,
    actors: string,
    date: Date,
    description: string,
    rating: number
}
export interface RatingVote
{
    movieId?: number,
    value?: number
}