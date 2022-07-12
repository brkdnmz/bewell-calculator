import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import ClickableIcon from "./ClickableIcon";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Urun } from "../@types/urun";
import { AppContext } from "./App";
import Choices from "../@types/choices";

type UrunCopKutusuProps =
  | {
      urun: Urun;
      tumUrunler?: false;
      size?: number;
      color?: string;
    }
  | {
      urun?: Urun;
      tumUrunler: true;
      size?: number;
      color?: string;
    };

function UrunCopKutusu({
  urun,
  tumUrunler = false,
  size = 18,
  color = "#EA1F25",
}: UrunCopKutusuProps) {
  const { lang, choices, setChoices } = useContext(AppContext);
  const [deleted, setDeleted] = useState(false);
  const [uyariShow, setUyariShow] = useState(false);

  const onDelete = useCallback(
    () =>
      setChoices((prevChoices: Choices) => {
        let updatedChoices = { ...prevChoices };
        if (!tumUrunler) {
          delete updatedChoices[urun!.id];
        } else {
          updatedChoices = {};
        }
        return updatedChoices;
      }),
    [setChoices, tumUrunler, urun]
  );

  useEffect(() => {
    if (!deleted) return;
    const timeout = setTimeout(onDelete, 150);
    return () => clearTimeout(timeout);
  }, [deleted, onDelete]);

  return (
    <>
      <ClickableIcon onClick={() => setUyariShow(true)}>
        <FaTrash size={size} color={color} />
      </ClickableIcon>
      <Modal
        scrollable
        backdrop="static"
        show={uyariShow}
        onHide={() => setUyariShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {lang === "tur" ? "Emin misiniz?" : "Are you sure?"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: "pre-wrap" }}>
          {!tumUrunler && (
            <>
              {lang === "tur"
                ? "Şu ürün sepetinizden çıkarılacak:"
                : "The following item will be removed from the cart:"}
              <ul>
                <li>
                  {lang === "tur" || !urun!.isimEn ? urun!.isim : urun!.isimEn}
                  {` (x${choices[urun!.id]})`}
                </li>
              </ul>
            </>
          )}
          {tumUrunler && (
            <>
              {lang === "tur"
                ? "Tüm ürünler sepetinizden çıkarılacak."
                : "All items will be removed from the cart."}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#6b6b6b" }}
            onClick={() => setUyariShow(false)}
          >
            {lang === "tur" ? "İptal" : "Cancel"}
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setDeleted(true);
              setUyariShow(false);
            }}
          >
            {lang === "tur" ? "Sil" : "Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UrunCopKutusu;
