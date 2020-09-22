import { Season } from './season';
import { Company } from './../movie-models/company';
import { Network } from './network';
import { Genre } from './../movie-models/genre';
import { Created } from './created-by';
import { LastEpi } from './last-epi';

export class Tv {
  backdrop_path: string;
  created_by: Created[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: true;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpi;
  name: string;
  next_episode_to_air: null;
  networks: Network[];
  number_of_episodes: 67;
  number_of_seasons: 7;
  origin_country: [];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: 53.516;
  poster_path: string;
  production_companies: Company[];
  seasons: Season[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
