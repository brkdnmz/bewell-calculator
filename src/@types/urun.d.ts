export interface Urun {
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
}

export interface Kategori {
  baslik: string;
  baslikEn: string;
  urunler: { [key: string]: Urun };
}

export interface UrunListesi {
  [key: string]: Kategori;
}
