import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-article',
  standalone: true,
  imports: [],
  templateUrl: './content-article.component.html',
  styleUrl: './content-article.component.scss'
})
export class ContentArticleComponent {
  @Input() title = '';
  @Input() content = '';
}
