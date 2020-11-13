import { Component, OnInit } from '@angular/core';

// 1. Import the UserService
import { ArticlesService } from '../articles.service';

// 2. Import the User Object/Schema
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  // 3. Create a users property of type user
  articles: Article[];

  // 4. Inject the UsersService into the constructor
  constructor(private articlesService: ArticlesService) { }

  // 6. Make a call to the service on initialization
  ngOnInit() {
    this.getArticles();
  }

  // 5. Create a local wrapper for
  getArticles(): void {
    void {
      this.articlesService.getArticles().subscribe(
        (response:any) => {
          this.articles = response.articles
        // console.log(this.articles)
      }
    );
  }
  