import { Review } from './review';
export class Reviews {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}
