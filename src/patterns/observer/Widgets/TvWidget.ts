// tslint:disable:no-console
import { IObserver, ISubject } from '..';

export class TvWidget implements IObserver {

  protected subject: ISubject;
  protected tv: string;

  constructor(subject: ISubject) {
    this.subject = subject;
    this.subject.observe(this);
  }

  public update(lenta: string, tv: string, twitter: string): void {
    this.tv = tv;
  }

  public display(): void {
    console.log(`TV: ${this.tv}`);
  }

  public detach(): void {
    this.subject.detach(this);
  }

}
