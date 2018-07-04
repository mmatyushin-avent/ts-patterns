//

export abstract class DrinkBase {

  protected description: string = '';

  public getDescription(): string {
    return this.description;
  }

  public abstract getCost(): number;

}
