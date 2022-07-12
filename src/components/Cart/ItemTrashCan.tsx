import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import ClickableIcon from "../util/ClickableIcon";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ItemType } from "../../@types/item";
import { AppContext } from "../App";
import Choices from "../../@types/choices";

type ItemTrashCanProps =
  | {
      item: ItemType;
      allItems?: false;
      size?: number;
      color?: string;
    }
  | {
      item?: ItemType;
      allItems: true;
      size?: number;
      color?: string;
    };

function ItemTrashCan({
  item,
  allItems = false,
  size = 18,
  color = "#EA1F25",
}: ItemTrashCanProps) {
  const { lang, choices, setChoices } = useContext(AppContext);
  const [deleted, setDeleted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const onDelete = useCallback(
    () =>
      setChoices((prevChoices: Choices) => {
        let updatedChoices = { ...prevChoices };
        if (!allItems) {
          delete updatedChoices[item!.id];
        } else {
          updatedChoices = {};
        }
        return updatedChoices;
      }),
    [setChoices, allItems, item]
  );

  useEffect(() => {
    if (!deleted) return;
    const timeout = setTimeout(onDelete, 150);
    return () => clearTimeout(timeout);
  }, [deleted, onDelete]);

  return (
    <>
      <ClickableIcon onClick={() => setShowWarning(true)}>
        <FaTrash size={size} color={color} />
      </ClickableIcon>
      <Modal
        scrollable
        backdrop="static"
        show={showWarning}
        onHide={() => setShowWarning(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {lang === "tur" ? "Emin misiniz?" : "Are you sure?"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: "pre-wrap" }}>
          {!allItems && (
            <>
              {lang === "tur"
                ? "Şu ürün sepetinizden çıkarılacak:"
                : "The following item will be removed from the cart:"}
              <ul>
                <li>
                  {lang === "tur" || !item!.nameEn ? item!.name : item!.nameEn}
                  {` (x${choices[item!.id]})`}
                </li>
              </ul>
            </>
          )}
          {allItems && (
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
            onClick={() => setShowWarning(false)}
          >
            {lang === "tur" ? "İptal" : "Cancel"}
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setDeleted(true);
              setShowWarning(false);
            }}
          >
            {lang === "tur" ? "Sil" : "Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemTrashCan;
