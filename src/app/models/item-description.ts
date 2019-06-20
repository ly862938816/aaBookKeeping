/* 商品详细信息类型定义： */
import { Image } from './image';

export class ItemDescription {
    id: string;
    name: string;
    title: string;
    sku: number; //  库存数
    maxItems: number; // 允许最大下单数
    weight: number;
    length: number;
    height: number;
    width: number;
    depth: number;
    output: number;
    color: string[];
    slug: string;
    count: number; // 订单项数量
    image: Image;
    images: Image[];
    thumbnail: string;
    productBrief: string;
    productDetail: string;
    trackInventory: boolean;
    price: number;  // 销售价格
    displayPrice: number; // 列表价格
    costPrice: number; // 成本价格
    priceAfterDiscount: number; // 经过优惠后的价格
    sellingPrice: number; // 经过调整后的，最终成交价格
    optionValues: string[];
    totalOnhand: number; // 现货数量
    optionsText: string;
    inStock: boolean;
    isBackorderable: boolean;
    isDestroyed: boolean;
    isOrderable: boolean;
    isMaster?: boolean;
}
