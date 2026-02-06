// Dados centralizados da plataforma com slugs SEO-friendly

export interface Artist {
  slug: string;
  name: string;
  image: string;
  coverImage: string;
  bio: string;
  genre: string;
  location: string;
  followers: string;
  monthlyListeners: string;
  verified: boolean;
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export interface Album {
  slug: string;
  title: string;
  artistSlug: string;
  artistName: string;
  year: number;
  genre: string;
  image: string;
  description: string;
  totalDuration: string;
  totalPlays: string;
  releaseDate: string;
  label: string;
}

export interface Track {
  slug: string;
  title: string;
  artistSlug: string;
  artistName: string;
  albumSlug: string;
  albumName: string;
  image: string;
  duration: string;
  durationSeconds: number;
  plays: string;
  likes: string;
  downloads: string;
  releaseDate: string;
  genre: string;
  bpm: number;
  key: string;
  fileSize: string;
  quality: string;
  lyrics?: string;
  badge?: {
    type: "new" | "trending" | "popular";
    label: string;
  };
}

// ========== ARTISTAS ==========
export const artists: Record<string, Artist> = {
  "anselmo-ralph": {
    slug: "anselmo-ralph",
    name: "Anselmo Ralph",
    image: "https://images.genius.com/7078f44a5abbc754ae3fdca99ea213db.1000x1000x1.jpg",
    coverImage: "https://i.scdn.co/image/ab67616d0000b2734d6b6a8a2846721946339ac6",
    bio: "Anselmo Ralph é um dos artistas mais influentes da música angolana contemporânea. Com uma carreira de mais de 15 anos, conquistou o coração de milhões de fãs com a sua voz única e letras profundas.",
    genre: "Kizomba / Semba",
    location: "Luanda, Angola",
    followers: "2.4M",
    monthlyListeners: "1.8M",
    verified: true,
    socialLinks: {
      instagram: "@anselmoralph",
      facebook: "Anselmo Ralph Oficial",
      youtube: "Anselmo Ralph"
    }
  },
  "gerilson-insrael": {
    slug: "gerilson-insrael",
    name: "Gerilson Insrael",
    image: "https://source.boomplaymusic.com/group10/M00/10/11/504f6958b10a468f8f3c7c2a854b253d_464_464.jpg",
    coverImage: "https://source.boomplaymusic.com/group10/M00/10/11/504f6958b10a468f8f3c7c2a854b253d_464_464.jpg",
    bio: "Gerilson Insrael é um talentoso cantor angolano conhecido pelas suas baladas românticas e voz emotiva.",
    genre: "Kizomba / R&B",
    location: "Luanda, Angola",
    followers: "1.8M",
    monthlyListeners: "1.2M",
    verified: true,
    socialLinks: {
      instagram: "@gerilsoninsrael",
      facebook: "Gerilson Insrael",
      youtube: "Gerilson Insrael"
    }
  },
  "matias-damasio": {
    slug: "matias-damasio",
    name: "Matias Damásio",
    image: "https://static.qobuz.com/images/covers/18/90/0886446009018_600.jpg",
    coverImage: "https://static.qobuz.com/images/covers/18/90/0886446009018_600.jpg",
    bio: "Matias Damásio é um dos artistas mais versáteis de Angola, transitando entre Kizomba, Semba e R&B com maestria.",
    genre: "Kizomba / Semba",
    location: "Luanda, Angola",
    followers: "2.1M",
    monthlyListeners: "1.5M",
    verified: true,
    socialLinks: {
      instagram: "@matiasdamasio",
      facebook: "Matias Damásio Oficial",
      youtube: "Matias Damásio"
    }
  },
  "c4-pedro": {
    slug: "c4-pedro",
    name: "C4 Pedro",
    image: "https://powerlist100.bantumen.com/wp-content/uploads/2022/12/C4-Pedro_Foto_RhoRho-Couture-e1670033903940.jpg",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    bio: "C4 Pedro é uma lenda viva da Kizomba angolana, conhecido internacionalmente pelos seus hits românticos.",
    genre: "Kizomba",
    location: "Luanda, Angola",
    followers: "3.2M",
    monthlyListeners: "2.5M",
    verified: true,
    socialLinks: {
      instagram: "@c4pedro",
      facebook: "C4 Pedro Oficial",
      youtube: "C4 Pedro"
    }
  },
  "yola-semedo": {
    slug: "yola-semedo",
    name: "Yola Semedo",
    image: "https://angorussia.com/wp-content/uploads/2024/11/snapinstaapp-429681788-18412743346025453-8334979068066199508-n-1080.jpg",
    coverImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    bio: "Yola Semedo é uma das vozes femininas mais poderosas de Angola, conhecida pelas suas interpretações emocionantes.",
    genre: "Kizomba / Semba",
    location: "Luanda, Angola",
    followers: "1.9M",
    monthlyListeners: "1.3M",
    verified: true,
    socialLinks: {
      instagram: "@yolasemedo",
      facebook: "Yola Semedo Oficial",
      youtube: "Yola Semedo"
    }
  },
  "diva-ay": {
    slug: "diva-ay",
    name: "Diva Ay",
    image: "https://tribunadeangola.org/wp-content/uploads/2021/08/Ary.jpg",
    coverImage: "https://tribunadeangola.org/wp-content/uploads/2021/08/Ary.jpg",
    bio: "Diva Ay é uma artista emergente da música angolana com um estilo único e cativante.",
    genre: "Afro Pop",
    location: "Luanda, Angola",
    followers: "800K",
    monthlyListeners: "600K",
    verified: false,
    socialLinks: {
      instagram: "@divaay",
      facebook: "Diva Ay",
      youtube: "Diva Ay"
    }
  },
  "noite-e-dia": {
    slug: "noite-e-dia",
    name: "Noite e Dia",
    image: "https://i.ytimg.com/vi/T9GPwaM0BRU/hq720.jpg",
    coverImage: "https://i.ytimg.com/vi/T9GPwaM0BRU/hq720.jpg",
    bio: "Noite e Dia é uma dupla musical angolana conhecida pelos seus hits energéticos e performances vibrantes.",
    genre: "Kuduro / Afro House",
    location: "Luanda, Angola",
    followers: "1.2M",
    monthlyListeners: "900K",
    verified: true,
    socialLinks: {
      instagram: "@noiteedia",
      facebook: "Noite e Dia",
      youtube: "Noite e Dia"
    }
  },
  "prodigio": {
    slug: "prodigio",
    name: "Prodígio",
    image: "https://cdn-images.dzcdn.net/images/cover/4d01b7876b07ee1b4f0bf4713e59536c/0x1900-000000-80-0-0.jpg",
    coverImage: "https://cdn-images.dzcdn.net/images/cover/4d01b7876b07ee1b4f0bf4713e59536c/0x1900-000000-80-0-0.jpg",
    bio: "Prodígio é um rapper angolano influente, conhecido por letras profundas e um estilo único.",
    genre: "Hip Hop / Rap",
    location: "Luanda, Angola",
    followers: "1.5M",
    monthlyListeners: "1.1M",
    verified: true,
    socialLinks: {
      instagram: "@prodigio",
      facebook: "Prodígio Oficial",
      youtube: "Prodígio"
    }
  }
};

// ========== ÁLBUNS ==========
export const albums: Record<string, Album> = {
  "a-dor-do-cupido": {
    slug: "a-dor-do-cupido",
    title: "A Dor do Cupido",
    artistSlug: "anselmo-ralph",
    artistName: "Anselmo Ralph",
    year: 2013,
    genre: "Kizomba",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/f3/c0/81/f3c081e1-438d-84ce-ce95-34ee30838a4f/888174640518.jpg/600x600bf-60.jpg",
    description: "O álbum 'A Dor do Cupido' representa a evolução artística de Anselmo Ralph, explorando temas profundos de amor, perda e esperança.",
    totalDuration: "48:32",
    totalPlays: "156.7M",
    releaseDate: "15 de Janeiro, 2013",
    label: "LS Republicano"
  },
  "amor-e-cego": {
    slug: "amor-e-cego",
    title: "Amor É Cego",
    artistSlug: "anselmo-ralph",
    artistName: "Anselmo Ralph",
    year: 2016,
    genre: "Kizomba",
    image: "https://i.scdn.co/image/ab67616d0000b2734d6b6a8a2846721946339ac6",
    description: "Álbum de grande sucesso com hits como 'Por Favor DJ' e 'Tem Cuidado'.",
    totalDuration: "52:18",
    totalPlays: "210.3M",
    releaseDate: "20 de Março, 2016",
    label: "LS Republicano"
  },
  "as-ultimas-historias-de-amor": {
    slug: "as-ultimas-historias-de-amor",
    title: "As Últimas Histórias De Amor",
    artistSlug: "anselmo-ralph",
    artistName: "Anselmo Ralph",
    year: 2007,
    genre: "Kizomba",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6b/6c/4e/6b6c4e64-ff85-fb9e-2d43-e2c3a1d20ba0/cover.jpg/600x600bf-60.jpg",
    description: "O álbum que lançou Anselmo Ralph para o estrelato.",
    totalDuration: "45:10",
    totalPlays: "98.5M",
    releaseDate: "10 de Junho, 2007",
    label: "LS Republicano"
  },
  "falhas-do-amor-album": {
    slug: "falhas-do-amor-album",
    title: "Falhas do Amor",
    artistSlug: "gerilson-insrael",
    artistName: "Gerilson Insrael",
    year: 2024,
    genre: "Kizomba",
    image: "https://source.boomplaymusic.com/group10/M00/10/11/504f6958b10a468f8f3c7c2a854b253d_464_464.jpg",
    description: "O mais recente trabalho de Gerilson Insrael.",
    totalDuration: "38:45",
    totalPlays: "45.2M",
    releaseDate: "5 de Janeiro, 2024",
    label: "Gerilson Music"
  }
};

// ========== MÚSICAS/TRACKS ==========
export const tracks: Record<string, Track> = {
  "por-favor-dj": {
    slug: "por-favor-dj",
    title: "Por Favor DJ",
    artistSlug: "anselmo-ralph",
    artistName: "Anselmo Ralph",
    albumSlug: "amor-e-cego",
    albumName: "Amor É Cego",
    image: "https://i.scdn.co/image/ab67616d0000b2734d6b6a8a2846721946339ac6",
    duration: "3:45",
    durationSeconds: 225,
    plays: "45.2M",
    likes: "2.1M",
    downloads: "890K",
    releaseDate: "15 de Janeiro, 2016",
    genre: "Kizomba",
    bpm: 98,
    key: "Am",
    fileSize: "8.4 MB",
    quality: "320kbps",
    badge: { type: "trending", label: "#1" },
    lyrics: `Estou na 'drena, estou no 'tchilo
Estou na via com os amigos
Andando convencido que eu já te esqueci
Até que o DJ, punha a nossa música
Mas o problema é que já não estamos mais

Eu quero já ligar pra ti
Eu quero ouvir tua voz
E convencer-te a voltares pra mim
Essa música faz-me lembrar
Momentos lindos entre nós dois
Então só me resta suplicar

Por favor DJ, troca esta música
Porque este som me faz pensar nela
Este som me faz pensar nela`
  },
  "falhas-do-amor": {
    slug: "falhas-do-amor",
    title: "Falhas do Amor",
    artistSlug: "gerilson-insrael",
    artistName: "Gerilson Insrael",
    albumSlug: "falhas-do-amor-album",
    albumName: "Falhas do Amor",
    image: "https://source.boomplaymusic.com/group10/M00/10/11/504f6958b10a468f8f3c7c2a854b253d_464_464.jpg",
    duration: "4:12",
    durationSeconds: 252,
    plays: "245K",
    likes: "18K",
    downloads: "45K",
    releaseDate: "5 de Janeiro, 2024",
    genre: "Kizomba",
    bpm: 92,
    key: "Gm",
    fileSize: "9.2 MB",
    quality: "320kbps",
    badge: { type: "new", label: "Novo" }
  },
  "tem-cuidado": {
    slug: "tem-cuidado",
    title: "Tem Cuidado",
    artistSlug: "anselmo-ralph",
    artistName: "Anselmo Ralph",
    albumSlug: "amor-e-cego",
    albumName: "Amor É Cego",
    image: "https://i.scdn.co/image/ab67616d0000b2734d6b6a8a2846721946339ac6",
    duration: "4:25",
    durationSeconds: 265,
    plays: "1.2M",
    likes: "85K",
    downloads: "210K",
    releaseDate: "20 de Março, 2016",
    genre: "Kizomba",
    bpm: 95,
    key: "Dm",
    fileSize: "9.8 MB",
    quality: "320kbps",
    badge: { type: "trending", label: "#1" }
  },
  "ta-amarado": {
    slug: "ta-amarado",
    title: "Tá Amarado",
    artistSlug: "diva-ay",
    artistName: "Diva Ay",
    albumSlug: "falhas-do-amor-album",
    albumName: "Singles",
    image: "https://tribunadeangola.org/wp-content/uploads/2021/08/Ary.jpg",
    duration: "3:38",
    durationSeconds: 218,
    plays: "890K",
    likes: "42K",
    downloads: "120K",
    releaseDate: "10 de Fevereiro, 2024",
    genre: "Afro Pop",
    bpm: 105,
    key: "Cm",
    fileSize: "8.1 MB",
    quality: "320kbps",
    badge: { type: "new", label: "Novo" }
  },
  "por-amor": {
    slug: "por-amor",
    title: "Por Amor",
    artistSlug: "matias-damasio",
    artistName: "Matias Damásio",
    albumSlug: "amor-e-cego",
    albumName: "Por Amor EP",
    image: "https://static.qobuz.com/images/covers/18/90/0886446009018_600.jpg",
    duration: "4:05",
    durationSeconds: 245,
    plays: "750K",
    likes: "38K",
    downloads: "95K",
    releaseDate: "15 de Dezembro, 2023",
    genre: "Kizomba",
    bpm: 90,
    key: "Fm",
    fileSize: "9.0 MB",
    quality: "320kbps",
    badge: { type: "popular", label: "Popular" }
  },
  "sanzaleira": {
    slug: "sanzaleira",
    title: "Sanzaleira",
    artistSlug: "noite-e-dia",
    artistName: "Noite e Dia",
    albumSlug: "falhas-do-amor-album",
    albumName: "Singles",
    image: "https://i.ytimg.com/vi/T9GPwaM0BRU/hq720.jpg",
    duration: "3:22",
    durationSeconds: 202,
    plays: "560K",
    likes: "29K",
    downloads: "78K",
    releaseDate: "1 de Março, 2024",
    genre: "Kuduro",
    bpm: 130,
    key: "Gm",
    fileSize: "7.5 MB",
    quality: "320kbps"
  },
  "castelo-de-areia": {
    slug: "castelo-de-areia",
    title: "Castelo de Areia",
    artistSlug: "prodigio",
    artistName: "Prodígio",
    albumSlug: "falhas-do-amor-album",
    albumName: "Singles",
    image: "https://cdn-images.dzcdn.net/images/cover/4d01b7876b07ee1b4f0bf4713e59536c/0x1900-000000-80-0-0.jpg",
    duration: "4:30",
    durationSeconds: 270,
    plays: "430K",
    likes: "22K",
    downloads: "55K",
    releaseDate: "20 de Janeiro, 2024",
    genre: "Hip Hop",
    bpm: 88,
    key: "Am",
    fileSize: "10.0 MB",
    quality: "320kbps",
    badge: { type: "trending", label: "Em Alta" }
  },
  "amor-perfeito": {
    slug: "amor-perfeito",
    title: "Amor Perfeito",
    artistSlug: "c4-pedro",
    artistName: "C4 Pedro",
    albumSlug: "amor-e-cego",
    albumName: "Amor Perfeito EP",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    duration: "3:55",
    durationSeconds: 235,
    plays: "1.8M",
    likes: "120K",
    downloads: "300K",
    releaseDate: "5 de Novembro, 2023",
    genre: "Kizomba",
    bpm: 94,
    key: "Dm",
    fileSize: "8.7 MB",
    quality: "320kbps",
    badge: { type: "trending", label: "#2" }
  },
  "nosso-amor": {
    slug: "nosso-amor",
    title: "Nosso Amor",
    artistSlug: "yola-semedo",
    artistName: "Yola Semedo",
    albumSlug: "amor-e-cego",
    albumName: "Singles",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
    duration: "4:18",
    durationSeconds: 258,
    plays: "920K",
    likes: "55K",
    downloads: "145K",
    releaseDate: "10 de Outubro, 2023",
    genre: "Kizomba",
    bpm: 96,
    key: "Em",
    fileSize: "9.5 MB",
    quality: "320kbps",
    badge: { type: "popular", label: "Popular" }
  }
};

// ========== FUNÇÕES AUXILIARES ==========

export const getArtist = (slug: string): Artist | undefined => artists[slug];
export const getAlbum = (slug: string): Album | undefined => albums[slug];
export const getTrack = (slug: string): Track | undefined => tracks[slug];

export const getAllArtists = (): Artist[] => Object.values(artists);
export const getAllAlbums = (): Album[] => Object.values(albums);
export const getAllTracks = (): Track[] => Object.values(tracks);

export const getTracksByArtist = (artistSlug: string): Track[] => 
  Object.values(tracks).filter(t => t.artistSlug === artistSlug);

export const getAlbumsByArtist = (artistSlug: string): Album[] => 
  Object.values(albums).filter(a => a.artistSlug === artistSlug);

export const getTracksByAlbum = (albumSlug: string): Track[] => 
  Object.values(tracks).filter(t => t.albumSlug === albumSlug);

export const getFeaturedTracks = (): Track[] => 
  Object.values(tracks).slice(0, 6);

// Função para gerar slug a partir de texto
export const generateSlug = (text: string): string => 
  text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
