import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KategoriSlider from "./KategoriSlider";
import { Urun, UrunListesi } from "../@types/urun";
import UrunKategorisi from "./UrunKategorisi";
import Item from "./Item";
import _urunListesi from "../urunListesi/urunListesi.json";

const urunListesi: UrunListesi = _urunListesi;

const urunById: { [key: number]: Urun } = {};

for (const kategori in urunListesi) {
  const curUrunler = urunListesi[kategori].urunler;
  for (const urunKey in curUrunler) {
    const urun = curUrunler[urunKey];
    urunById[urun.id] = urun;
  }
}

function Home() {
  const getSortedKategori = (kategori: string): Urun[] => {
    const urunler = urunListesi[kategori].urunler;
    const urunlerId = Object.keys(urunler).map((urun) => urunler[urun].id);
    urunlerId.sort((a, b) => urunById[a].fiyat - urunById[b].fiyat);
    const sortedKategori: Urun[] = [];
    urunlerId.forEach((id) => {
      sortedKategori.push(urunById[id]);
    });
    return sortedKategori;
  };

  const prepareKategoriElems = (): JSX.Element[] => {
    return Object.keys(urunListesi).map((kategori, i) => (
      <UrunKategorisi key={i} kategori={urunListesi[kategori]}>
        {getSortedKategori(kategori).map((urun) => (
          <Item key={urun.id} urun={urun} />
        ))}
      </UrunKategorisi>
    ));
  };

  return (
    <>
      <Row className="gy-3">
        <Col xs={12}>
          <KategoriSlider kategoriElems={prepareKategoriElems()} />
        </Col>
      </Row>
    </>
  );
}

export default Home;
