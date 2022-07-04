export type Urun = {
    id: number;
    isim: string;
    ayrinti?: string;
    fiyat: number;
    enFazla: number;
    tiklamaYazisi?: string;
    bilgi?: string;
};

export type Kategori = {
    baslik: string;
    urunler: {[key: string] : Urun};
};

export type UrunListesi = {
    [key: string] : Kategori;
}