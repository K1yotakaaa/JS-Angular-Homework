export interface Movie {
  id: number;
  name: string;
  genre: string;
  description: string;
  director: string;
  country: string;
  duration: number;
  quality: string;
  release: number;
  rating: number;
  category: number;
  link: string;
  imgUrl: string;
  check_duration?: string;
  favorite?: boolean;
}
