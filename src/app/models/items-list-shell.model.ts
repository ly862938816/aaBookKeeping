/* Moto shell 模型定义 */
export class MotoShellModel {
  image: string;
  title: string;
  description: string;
  thumbnail: string;
  price: string;
}

export class ItemsListShell {
  items: Array<MotoShellModel> = [
    new MotoShellModel(),
    new MotoShellModel(),
    new MotoShellModel()
  ];
  constructor(readonly isShell: boolean) {}
}
