import { VideoResult } from './video-result';
import { Language } from './languages';
import { Country } from './coutry';
import { Genre } from './genre';
import { Company } from './company';
export class Movie
  {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: boolean;
    budget: number;
    genres: Genre;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Company[];
    production_countries: Country[];
    release_date: string;
    revenue: number;
    runtime: 139;
    spoken_languages: Language[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    video_result: VideoResult;
  }


