export interface ItemType {
  id: number;
  name: string;
  nameEn: string;
  detail?: string;
  detailEn?: string;
  price: number;
  atMost: number;
  clickText?: string;
  clickTextEn?: string;
  info?: string;
  infoEn?: string;
}

export interface Category {
  title: string;
  titleEn: string;
  items: { [key: string]: ItemType };
}

export interface ItemData {
  [key: string]: Category;
}
