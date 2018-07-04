import { ISubject, IObserver, INewsBatch } from '..';

export class NewsAggregator implements ISubject {

  protected observers: IObserver[] = [];
  protected news: INewsBatch;

  public observe(observer: IObserver): void {
    this.observers.push(observer);
  }

  public detach(observer: IObserver): void {
    const index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public setNews(news: INewsBatch) {
    this.news = news;
    this.notify();
  }

  public notify(): void {
    const { lenta: lentaNews, tv: tvNews, twitter: twitterNews} = this.news;
    for (const observer of this.observers) {
      observer.update(lentaNews, tvNews, twitterNews);
      observer.display();
    }
  }

}
