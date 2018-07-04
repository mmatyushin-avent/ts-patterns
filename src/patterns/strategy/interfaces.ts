export interface IDuck extends IFlyable, IQuackable {
  display: () => void;
  swim: () => void;
}

export interface IFlyable {
  fly: () => void;
}

export interface IQuackable {
  quack: () => void;
}
