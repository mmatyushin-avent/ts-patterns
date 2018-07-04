// tslint:disable:no-console
import { IObserver, ISubject } from '..';

export class TwitterWidget implements IObserver {

  protected subject: ISubject;
  protected twitter: string;

  constructor(subject: ISubject) {
    this.subject = subject;
    this.subject.observe(this);
  }

  public update(lenta: string, tv: string, twitter: string): void {
    this.twitter = twitter;
  }

  public display(): void {
    console.log(`Twitter: ${this.twitter}`);
  }

  public detach(): void {
    this.subject.detach(this);
  }

}
