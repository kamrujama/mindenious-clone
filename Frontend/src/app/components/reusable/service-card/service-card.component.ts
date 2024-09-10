import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {

  @Input() ourServices = [
    {
      title: "Branding and Design",
      description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
      icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
      show: false,
      borderRadius: '30% 70% 70% 30% / 29% 31% 69% 71%'
    },
    {
      title: "Production Development",
      description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
      icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
      show: false,
      borderRadius: '77% 23% 19% 81% / 70% 50% 50% 30%'
    },
    {
      title: "Social Media & Marketing",
      description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
      icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
      show: false,
      borderRadius: '0% 100% 21% 79% / 26% 72% 28% 74% '
    },
    {
      title: "Our Mission",
      description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
      icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
      show: false,
      borderRadius: '72% 28% 41% 59% / 54% 72% 28% 46% '
    },

  ]
  @Input() width = "290px";
  @Input() bgColor = "var(--bg-dark)";
  @Input() title = "Our Services";
  @Input() description = "";
  @Input() borderRadius = "0% 100% 21% 79% / 26% 72% 28% 74% ";
  @Input() mainBorderRadius = "10px";

  ngOnInit() {}

  showMore(data: any) {
    data.show = !data.show
  }
}
