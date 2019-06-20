/* 商品列表类型定义 */
import { ItemDescription } from './item-description';

export class ItemsListItem {
  items: Array<ItemDescription> = [
    new ItemDescription(),
    new ItemDescription(),
    new ItemDescription()
  ];
  constructor(readonly isShell: boolean) {}
}
