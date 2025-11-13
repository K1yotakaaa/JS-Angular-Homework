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
  logo: string;
  bgImg: string;
  check_duration?: string;
  favorite?: boolean;
}

export const movies = [
  {
    id: 1,
    name: 'TLOTR: The Return Of The King',
    genre: 'Action, Adventure, Sci-Fi',
    description:
      'The final battle for Middle-earth begins. Frodo and Sam, led by Gollum, continue their dangerous mission toward the fires of Mount Doom in order to destroy the One Ring.',
    director: 'Peter Jackson',
    country: 'United States',
    duration: 201,
    quality: 'HD',
    release: 2003,
    rating: 8.2,
    category: 1,
    link: 'https://ww4.fmovies.co/film/the-lord-of-the-rings-the-return-of-the-king-1874/',
    imgUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e410c71f-baa1-4fe5-bb29-aedb4662f49b/300x450',
    logo: './images/logo/the-return-of-the-king.png',
    bgImg: './images/logo/bg-the-return-of-the-king.jpeg',
  },
  {
    id: 2,
    name: '2012',
    genre: 'Action, Adventure, Sci-Fi',
    description:
      '2012 (Also Known As: 2012 - Das Ende der Welt) is an Action, Adventure, Sci-Fi film directed by Roland Emmerich and written by Harald Kloser. It was released on 13 November 2009 (USA).',
    director: 'Roland Emmerich',
    country: 'United States',
    duration: 158,
    quality: 'HD',
    release: 2009,
    rating: 5,
    category: 1,
    link: 'https://ww4.fmovies.co/film/2012-7779/',
    imgUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/437caa2a-b260-4f7e-b239-8f6634c4c31b/300x450',
    logo: './images/logo/the-2012.png',
    bgImg: './images/logo/bg-the-2012.jpeg',
  },
  {
    id: 3,
    name: 'Fast And Furious 7',
    genre: 'Action, Adventure, Drama',
    description:
      'After defeating Owen Shaw and his crew and securing amnesty for their past crimes, Dominic “Dom” Toretto, Brian O’Conner and the rest of their team have returned to the United States to live normal lives again.',
    director: 'James Wan',
    country: 'United States',
    duration: 2,
    quality: 'HD',
    release: 2015,
    rating: 8,
    category: 1,
    link: 'https://ww4.fmovies.co/film/fast-and-furious-7-1714/',
    imgUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/a594e007-e67b-4eab-ae03-b86192804531/300x450',
    logo: './images/logo/the-fast-and-furious.png',
    bgImg: './images/logo/bg-the-fast-and-furious.jpeg',
  },
  {
    id: 4,
    name: 'Interstellar',
    genre: 'Adventure, Sci-Fi',
    description:
      'Interstellar directed Christopher Nolan who is famous for making science fiction genre. His most successful films are The Dark Night and Inception.',
    director: 'Christopher Nolan',
    country: 'United States',
    duration: 169,
    quality: 'HD',
    release: 2014,
    rating: 8.7,
    category: 1,
    link: 'https://ww4.fmovies.co/film/interstellar-1655/',
    imgUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/300x450',
    logo: './images/logo/the-return-of-the-king.png',
    bgImg: './images/logo/bg-the-return-of-the-king.jpeg',
  },
  {
    id: 5,
    name: 'Batman: The Dark Knight',
    genre: 'Action, Sci-Fi, Thriller',
    description:
      'The lives of the residents of Gotham City turned upside down by a series of murders occur without finding the culprit.',
    director: 'Christopher Nolan',
    country: 'United States',
    duration: 152,
    quality: 'HD',
    release: 2008,
    rating: 9,
    category: 1,
    link: 'https://ww4.fmovies.co/film/batman-the-dark-knight-2070/',
    imgUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0fa5bf50-d5ad-446f-a599-b26d070c8b99/300x450',
    logo: './images/logo/the-return-of-the-king.png',
    bgImg: './images/logo/bg-the-return-of-the-king.jpeg',
  },
  {
    id: 6,
    name: 'Spirited Away',
    genre: 'Anime, Fantasy, Adventure',
    description:
      'Chihiro moves to a new house with her mom and dad. Having lost their way, they find themselves in a strange deserted city, where a magnificent feast awaits them.',
    director: 'Hayao Miyazaki',
    country: 'Japan',
    duration: 2,
    quality: 'HD',
    release: 2001,
    rating: 9.1,
    category: 2,
    link: 'https://io.gidonline.fun/film/unesyonnye-prizrakami/comment-page-2/',
    imgUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/ae3b699c-3db7-4196-a869-39b610bfe706/300x450',
    logo: './images/logo/the-return-of-the-king.png',
    bgImg: './images/logo/bg-the-return-of-the-king.jpeg',
  },
  {
    id: 7,
    name: 'Your Name',
    genre: 'Anime, Fantasy, Drama',
    description:
      "Tokyo boy Taki and provincial girl Mitsuha discover that there is a strange connection between them. In their dreams, they switch bodies and live each other's lives.",
    director: 'Makoto Shinkai',
    country: 'Japan',
    duration: 106,
    quality: 'HD',
    release: 2016,
    rating: 8,
    category: 2,
    link: 'https://io.gidonline.fun/129_Tvoei-imq/',
    imgUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/e849937d-99d7-418f-bbaa-0a7e7cfff385/300x450',
    logo: './images/logo/the-return-of-the-king.png',
    bgImg: './images/logo/bg-the-return-of-the-king.jpeg',
  },
  {
    id: 8,
    name: 'Princess Mononoke',
    genre: 'Action, Fantasy, Drama',
    description:
      'By killing a boar, the young prince Ashitaka brought a deadly curse upon himself. An old witch foretold that only he himself could change his fate, and the brave warrior set out on a dangerous journey.',
    director: 'Hayao Miyazaki',
    country: 'Japan',
    duration: 133,
    quality: 'HD',
    release: 1997,
    rating: 8,
    category: 2,
    link: 'https://io.gidonline.fun/517_Princessa-Mononoke/',
    imgUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/10671298/0f8a0f49-c2e4-4d9e-a0dc-d8972b7a619f/300x450',
    logo: './images/logo/the-return-of-the-king.png',
    bgImg: './images/logo/bg-the-return-of-the-king.jpeg',
  },
  {
    id: 9,
    name: 'Weathering with You',
    genre: 'Romance, Melodrama, Fantasy',
    description:
      '16-year-old Hodaka Morishima runs away from home to Tokyo, where he immediately runs out of money. Not only can he not find a job without documents, but it is also raining endlessly outside, and the sky is constantly covered with clouds.',
    director: 'Makoto Shinkai',
    country: 'Japan',
    duration: 2,
    quality: 'HD',
    release: 2019,
    rating: 8,
    category: 2,
    link: 'https://io.gidonline.fun/5646_Ditq-pogodu/',
    imgUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/10671298/29fba789-ebae-411d-8bec-ab7d62203b89/300x450',
    logo: './images/logo/the-return-of-the-king.png',
    bgImg: './images/logo/bg-the-return-of-the-king.jpeg',
  },
  {
    id: 10,
    name: 'Demon Slayer: Infinity Train',
    genre: 'Action, Shounen, Fantasy',
    description:
      'After completing their health training at the Butterfly House, Tanjiro and his friends set off on a new mission. Something strange is happening on the Infinite Train: over 40 people disappear overnight.',
    director: 'Haruo Sotozaki',
    country: 'Japan',
    duration: 2,
    quality: 'HD',
    release: 2020,
    rating: 8,
    category: 2,
    link: 'https://jut-su.net/16-klinok-rassekajuschij-demonov-beskonechnyj-poezd-f1.html',
    imgUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/9b395abc-e304-41ba-8816-3aab6db5541c/600x900',
    logo: './images/logo/the-return-of-the-king.png',
    bgImg: './images/logo/bg-the-return-of-the-king.jpeg',
  },
  {
    id: 11,
    name: 'The Little Mermaid',
    genre: 'Melodrama, Musical, Fantasy',
    description:
      "The little mermaid Ariel, one of the daughters of the sea king Triton, is terribly fascinated by humanity. Despite her father's disapproval, she rises to the surface and rescues the shipwrecked Prince Eric.",
    director: 'Rob Marshall',
    country: 'USA',
    duration: 2,
    quality: 'HD',
    release: 2023,
    rating: 6,
    category: 1,
    link: 'https://w.kinogo.fm/1293-rusalochka-film-2023.html',
    imgUrl: 'images/posters/the-little-mermaid.jpeg',
    logo: 'images/logo/the-little-mermaid-title.png',
    bgImg: 'images/background/bg-little-mermaid.jpg',
  },
  {
    id: 12,
    name: '65',
    genre: 'Action, Science fiction',
    description:
      "To earn money for his daughter's medical treatment, family man Mills from the planet Somaris undertakes a two-year reconnaissance mission. En route, his ship encounters an uncharted asteroid belt and crashes, breaking apart on an unknown planet. Mills discovers the sole survivor of the passengers in cryostasis.",
    director: 'Scott Beck',
    country: 'USA',
    duration: 90,
    quality: '4K',
    release: 2023,
    rating: 6,
    category: 1,
    link: 'https://w.kinogo.fm/1286-65-film-2023.html',
    imgUrl: 'images/posters/65.jpg',
    logo: 'images/logo/the-65-title.png',
    bgImg: 'images/background/bg-65.jpeg',
  },
  {
    id: 13,
    name: 'Translator',
    genre: 'Action, Thriller, War',
    description:
      "Afghanistan, March 2018. During a special operation to recover Taliban weapons, US Army Sergeant John Kinley's unit is ambushed. Only Kinley, who is wounded, and a local translator, Ahmed, who is collaborating with the Americans, survive. Waking up in his homeland, Kinley has no memory of his survival.",
    director: 'Guy Ritchie',
    country: 'USA',
    duration: 2,
    quality: '4K',
    release: 2022,
    rating: 8,
    category: 1,
    link: 'https://hd.kinopoisk.ru/ru-kz/film/5cf7ff4d15c94ba7b0d0bccf61fe45bd',
    imgUrl: 'images/posters/the-covenant.jpg',
    logo: 'images/logo/the-covenant-title.png',
    bgImg: 'images/background/bg-the-covenant.jpeg',
  },
  {
    id: 14,
    name: 'The Black Demon',
    genre: 'Action, Fantasy, Horror',
    description:
      'Paul and his family are planning a vacation in a coastal paradise. To their surprise, the picturesque and friendly village is abandoned and in ruins. According to Aztec legend, the local waters are home to the last megalodon—the Black Demon.',
    director: 'Adrian Grunberg',
    country: 'USA',
    duration: 100,
    quality: 'HD',
    release: 2023,
    rating: 6,
    category: 1,
    link: 'https://hd.kinopoisk.ru/ru-kz/film/ffa495df6f8048d3ba92d7f8ede3e279',
    imgUrl: 'images/posters/the-black-demon.jpg',
    logo: 'images/logo/the-black-demon-title.png',
    bgImg: 'images/background/bg-the-black-demon.jpeg',
  },
  {
    id: 15,
    name: 'The Thing',
    genre: 'Horror',
    description:
      "1978. After his mother's death, Ben, his wife, and their young daughter suddenly learn he's inherited a seaside home. They travel from California to Oregon to assess the property's potential. A cavern carved into the rock is discovered near the house, and while the family is busy putting the house in order, something awakens in the depths of the caves.",
    director: 'Scott Walker',
    country: 'New Zealand',
    duration: 100,
    quality: 'HD',
    release: 2023,
    rating: 5,
    category: 1,
    link: 'https://hd.kinopoisk.ru/ru-kz/film/0a9080aca58e4511ae07fa442d1f1bd8',
    imgUrl: 'images/posters/the-tank.jpeg',
    logo: 'images/logo/the-tank-title.png',
    bgImg: 'images/background/bg-the-tank.jpeg',
  },
];