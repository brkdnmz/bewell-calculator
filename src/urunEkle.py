from collections import defaultdict
import json
import os

with open("./urunListesi.json", "r", encoding="utf-8") as urunDosyasi:
  urunListesi = json.load(urunDosyasi)
  urunSayisi = 0
  for kategori in urunListesi:
    urunSayisi += len(urunListesi[kategori]["urunler"])
  yeniUrun = dict({})
  yeniUrun["id"] = urunSayisi
  print("Kategoriler:")
  for kategori in urunListesi:
    print("\t" + kategori)
  print("Ürün kategorisini giriniz: ")
  yeniUrunKategori = input()
  print("Ürün kısa ismini giriniz: ")
  kisaIsim = input()
  print("Ürün tam ismini giriniz: ")
  yeniUrun["isim"] = input()
  print("Ürün fiyatını giriniz: ")
  yeniUrun["fiyat"] = int(input())
  print("Üründen en fazla kaç tane alınabilir?: ")
  yeniUrun["enFazla"] = int(input())
  urunListesi[yeniUrunKategori]["urunler"][kisaIsim] = yeniUrun
  guncelUrunListesi = json.dumps(urunListesi, indent=2,
                                 ensure_ascii=False)
  with open("./urunListesi.json", "w", encoding="utf-8") as f2:
    print(guncelUrunListesi)
    f2.write(guncelUrunListesi)
