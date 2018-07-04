// tslint:disable:no-console
import { IObserver, ISubject } from '..';

export class LentaWidget implements IObserver {

  protected subject: ISubject;
  protected lenta: string;

  constructor(subject: ISubject) {
    this.subject = subject;
    this.subject.observe(this);
  }

  public update(lenta: string, tv: string, twitter: string): void {
    this.lenta = lenta;
  }

  public display(): void {
    console.log(`Lenta: ${this.lenta}`);
  }

  public detach(): void {
    this.subject.detach(this);
  }

}
