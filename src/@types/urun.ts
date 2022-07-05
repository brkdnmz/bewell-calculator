export type Urun = {
  id: number;
  isim: string;
  isimEn: string;
  ayrinti?: string;
  ayrintiEn?: string;
  fiyat: number;
  enFazla: number;
  tiklamaYazisi?: string;
  tiklamaYazisiEn?: string;
  bilgi?: string;
  bilgiEn?: string;
};

export type Kategori = {
  baslik: string;
  baslikEn: string;
  urunler: { [key: string]: Urun };
};

export type UrunListesi = {
  [key: string]: Kategori;
};
