import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import ClickableIcon from "./ClickableIcon";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Urun } from "../@types/urun";
import { AppContext } from "./App";
import Choices from "../@types/choices";

interface UrunCopKutusuProps {
  urun: Urun;
}

function UrunCopKutusu({ urun }: UrunCopKutusuProps) {
  const { lang, choices, setChoices } = useContext(AppContext);
  const [deleted, setDeleted] = useState(false);
  const [uyariShow, setUyariShow] = useState(false);

  useEffect(() => {
    if (!deleted) return;
    const timeout = setTimeout(
      () =>
        setChoices((prevChoices: Choices) => {
          const updatedChoices = { ...prevChoices };
          delete updatedChoices[urun.id];
          return updatedChoices;
        }),
      150
    );
    return () => clearTimeout(timeout);
  }, [deleted]);

  return (
    <>
      <ClickableIcon onClick={() => setUyariShow(true)}>
        <span>
          <FaTrash size={18} color="#EA1F25" />
        </span>
      </ClickableIcon>
      <Modal
        scrollable
        // backdrop="static"
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
          {lang === "tur"
            ? "Şu ürün sepetinizden silinecek:"
            : "The following item will be deleted:"}
          <ul>
            <li>
              {lang === "tur" || !urun.isimEn ? urun.isim : urun.isimEn}
              {` (x${choices[urun.id]})`}
            </li>
          </ul>
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
