import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Category } from "../../types";
import { AppContext } from "../../context";
import Row from "react-bootstrap/Row";
import { CenteringCol, ClickableIcon } from "../util";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export interface ItemCategoryProps {
  category: Category;
  children: React.ReactNode[];
  withLeftArrow?: boolean;
  withRightArrow?: boolean;
  onLeftArrowClick?: any;
  onRightArrowClick?: any;
}

function ItemCategory({
  category,
  children,
  withLeftArrow = false,
  withRightArrow = false,
  onLeftArrowClick = undefined,
  onRightArrowClick = undefined,
}: ItemCategoryProps) {
  const { lang } = useContext(AppContext);

  return (
    <ListGroup>
      <ListGroup.Item
        className="fst-italic fw-bold"
        style={{
          background:
            "linear-gradient(254deg, rgb(107,107,107) 20%, rgb(234,31,37) 100%)",
          color: "white",
        }}
      >
        <Row>
          <CenteringCol xs="auto">
            {withLeftArrow ? (
              <ClickableIcon onClick={onLeftArrowClick}>
                <HiOutlineArrowNarrowLeft size={25} />
              </ClickableIcon>
            ) : (
              <ClickableIcon disabled>
                <HiOutlineArrowNarrowLeft size={25} visibility="hidden" />
              </ClickableIcon>
            )}
          </CenteringCol>

          <CenteringCol>
            <div className="d-inline text-center">
              {lang === "tur" ? category.title : category.titleEn}
            </div>
          </CenteringCol>

          <CenteringCol xs="auto">
            {withRightArrow ? (
              <ClickableIcon onClick={onRightArrowClick}>
                <HiOutlineArrowNarrowRight size={25} />
              </ClickableIcon>
            ) : (
              <ClickableIcon disabled>
                <HiOutlineArrowNarrowRight size={25} visibility="hidden" />
              </ClickableIcon>
            )}
          </CenteringCol>
        </Row>
      </ListGroup.Item>
      {React.Children.map(children, (child, i) => (
        <ListGroup.Item key={i}>{child}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ItemCategory;
