export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Osaka' | 'Hokkaido' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Osaka: { kanji_name: '大阪', confirmed_cases: 1220 },
  Hokkaido: { kanji_name: '北海道', confirmed_cases: 900 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 28 },
};