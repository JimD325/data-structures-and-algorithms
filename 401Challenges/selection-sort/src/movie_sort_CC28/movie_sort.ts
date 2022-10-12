import { Movie } from "./movies";



export function sortYear(movies: Movie[]): Movie[] {
  return movies.sort(compareYear);
}

export function sortTitle(movies: Movie[]): Movie[] {
  return movies.sort(compareTitle);
}

export function inGenre(movies: Movie[], genre: string): Movie[] {
  return movies.filter(movie =>(compareGenre(movie, genre)));
  
}


// comparitor functions
export function compareYear(a: Movie, b: Movie){
  return a.year-b.year
}

export function compareTitle(a: Movie, b: Movie){
    return a.title.replace("The ", "").localeCompare(b.title.replace("The ", ""));
}

export function compareGenre(movie: Movie, genre: string){
  return movie.genres.includes(genre)
}