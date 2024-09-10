import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta, private title: Title) { }

  setMetaInformation(title: string, description: string) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
  }
}
