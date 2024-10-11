
---- How to use custom Slider ----
<ng-template #cardDesignOneRef>
  <div class="basic-card">
    <h3>{{ cardData[basicCurrentIndex].Title }}</h3>
    <p>{{ cardData[basicCurrentIndex].Description }}</p>
  </div>
</ng-template>

<ng-template #newCardDesignOneRef>
  <div class="new-basic-card">
    <h3>{{ newCardData[newCurrentIndex].Title }}</h3>
    <p>{{ newCardData[newCurrentIndex].Description }}</p>
  </div>
</ng-template>

<app-slider [data]="cardData" [cardTemplateRef]="cardDesignOneRef" (currentIndexChange)="getBasicCurrentIndex($event)"></app-slider>
<app-slider [data]="newCardData" [cardTemplateRef]="newCardDesignOneRef" (currentIndexChange)="getNewCurrentIndex($event)"></app-slider>
