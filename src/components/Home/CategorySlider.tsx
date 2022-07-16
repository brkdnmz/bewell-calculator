import React, {
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "../../context/AppContext";
import ItemCategory, { ItemCategoryProps } from "./ItemCategory";
import DataContext from "../../context/DataContext";
import { ItemType } from "../../types/item";
import Item from "./Item";

function CategorySlider() {
  const { displayDirection } = useContext(AppContext);
  const { itemData, itemById } = useContext(DataContext);

  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };
  const goPrev = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  const getSortedCategory = useCallback(
    (category: string): ItemType[] => {
      const items = itemData[category].items;
      const itemIds = Object.keys(items).map((item) => items[item].id);
      itemIds.sort((a, b) => itemById[a].price - itemById[b].price);

      const sortedCategory: ItemType[] = [];
      itemIds.forEach((id) => {
        sortedCategory.push(itemById[id]);
      });

      return sortedCategory;
    },
    [itemById, itemData]
  );

  const categoryElems = useMemo((): ReactElement<ItemCategoryProps>[] => {
    return Object.keys(itemData).map((category) => (
      <Col key={category} xs="12">
        <ItemCategory category={itemData[category]}>
          {getSortedCategory(category).map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ItemCategory>
      </Col>
    ));
  }, [getSortedCategory, itemData]);

  return (
    <Row className="gy-3">
      {displayDirection === "horizontal" ? (
        <Col>
          {React.cloneElement(categoryElems[index], {
            withLeftArrow: index > 0,
            withRightArrow: index + 1 < categoryElems.length,
            onLeftArrowClick: goPrev,
            onRightArrowClick: goNext,
          })}
        </Col>
      ) : (
        // displayDirection === "vertical"
        categoryElems
      )}
    </Row>
  );
}

export default CategorySlider;
