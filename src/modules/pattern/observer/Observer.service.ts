import { Injectable } from '@nestjs/common';

import { ISubject, NewsAggregator, LentaWidget, TvWidget, TwitterWidget, IObserver, INewsBatch } from 'patterns/observer';

@Injectable()
export class ObserverService {

  protected subject: ISubject = new NewsAggregator();
  protected observers: IObserver[] = [];

  constructor() {
    this.observers.push(new LentaWidget(this.subject));
    this.observers.push(new TvWidget(this.subject));
    this.observers.push(new TwitterWidget(this.subject));
  }

  public root(): string {
    return 'Hello from Observer';
  }

  public runObserving(): void {
    for (let i = 0; i < 4; i++) {
      this.subject.setNews(this.generateNews());
      // tslint:disable-next-line:no-console
      console.log(`-----------`);
      this.observers[i] ? this.observers[i].detach() : null;
    }
  }

  protected generateNews(): INewsBatch {
    const [lentaNews, tvNews, twitterNews] = Array
      .apply(null, { length: 3 })
      .map(() => {
        return `here is about ${Math.floor(Math.random() * 10)} news`;
      });

    return {
      lenta: lentaNews,
      tv: tvNews,
      twitter: twitterNews,
    };
  }

}
