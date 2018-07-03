// tslint:disable:no-console

export class Car {

  protected name: string = '';
  protected engine: string = 'Diesel';
  protected paintColor: string = 'White';
  protected wheels: string = '16 inch';
  protected body: string = 'Caravan';

  public configure(): void {
    // tslint:disable:max-line-length
    console.log(
      `Configuring ${this.name}:\n  > Engine: ${this.engine}\n  > Body: ${this.body}\n  > Paint Color:  ${this.paintColor}\n  > Wheels: ${this.wheels}`,
    );
  }

  public assembleBody(): void {
    console.log(`Body is assembled`);
  }

  public installEngine(): void {
    console.log(`Engine is in its place`);
  }

  public paint(): void {
    console.log(`Car is painted`);
  }

  public installWheels(): void {
    console.log(`Wheels are in its place`);
  }

}
