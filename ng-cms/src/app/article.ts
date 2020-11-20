import { DatePipe } from '@angular/common';

export class Article {
    _id: string;
    title: string;
    description: string;
    keywords: string;
    body: string;
    created: Date;
    modified: Date;
  }