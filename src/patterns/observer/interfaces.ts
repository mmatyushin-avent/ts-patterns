export interface IObserver {
  update: (lenta: string, tv: string, twitter: string) => void;
  display: () => void;
  detach: () => void;
}

export interface ISubject {
  observe: (observer: IObserver) => void;
  detach: (observer: IObserver) => void;
  setNews: (news: INewsBatch) => void;
  notify: () => void;
}

export interface INewsBatch {
  lenta: string;
  tv: string;
  twitter: string;
}
