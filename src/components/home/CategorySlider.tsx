import React, {
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext, DataContext } from "../../context";
import ItemCategory, { ItemCategoryProps } from "./ItemCategory";
import { ItemType } from "../../types";
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
      <ItemCategory category={itemData[category]}>
        {getSortedCategory(category).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ItemCategory>
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
        <>
          {categoryElems.map((elem, i) => (
            <Col key={i} xs={12}>
              {elem}
            </Col>
          ))}
        </>
      )}
    </Row>
  );
}

export default CategorySlider;
