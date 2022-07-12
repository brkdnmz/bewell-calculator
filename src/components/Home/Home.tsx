import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategorySlider from "./CategorySlider";
import { ItemType } from "../../@types/item";
import ItemCategory from "./ItemCategory";
import Item from "./Item";
import { AppContext } from "../App";

function Home() {
  const { itemData, itemById } = useContext(AppContext);

  const getSortedCategory = (category: string): ItemType[] => {
    const items = itemData[category].items;
    const itemIds = Object.keys(items).map((item) => items[item].id);
    itemIds.sort((a, b) => itemById[a].price - itemById[b].price);

    const sortedCategory: ItemType[] = [];
    itemIds.forEach((id) => {
      sortedCategory.push(itemById[id]);
    });

    return sortedCategory;
  };

  const prepareCategoryElems = (): JSX.Element[] => {
    return Object.keys(itemData).map((category, i) => (
      <ItemCategory key={i} category={itemData[category]}>
        {getSortedCategory(category).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ItemCategory>
    ));
  };

  return (
    <>
      <Row className="gy-3">
        <Col xs={12}>
          <CategorySlider categoryElems={prepareCategoryElems()} />
        </Col>
      </Row>
    </>
  );
}

export default Home;
