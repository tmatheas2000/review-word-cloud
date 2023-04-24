import { Component } from '@angular/core';
const keyword_extractor = require("keyword-extractor");
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';
import { Keyword, RatingBasedReviews, Review } from './models/models';
import { Data } from './constants/constants';
Chart.register(WordCloudController, WordElement);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-packages';
  keywords: Array<string> = [];
  cloudChart: any;
  colorCodes: Array<String> = Data.colorCode;

  reviewList: Array<Review> = Data.reviews;
  ratingBasedReviews!: RatingBasedReviews
  positiveMentions: Array<Keyword> = [];
  negativeMentions: Array<Keyword> = [];

  showAllPositive: boolean = false;
  showAllNegative: boolean = false;

  ngOnInit() {
    this.ratingBasedReviews = {
      rating_1: { list: this.reviewList.filter(review => review.rating == 1), keywords: [] },
      rating_2: { list: this.reviewList.filter(review => review.rating == 2), keywords: [] },
      rating_3: { list: this.reviewList.filter(review => review.rating == 3), keywords: [] },
      rating_4: { list: this.reviewList.filter(review => review.rating == 4), keywords: [] },
      rating_5: { list: this.reviewList.filter(review => review.rating == 5), keywords: [] }
    };

    this.ratingBasedReviews.rating_1.statement = this.getParagraph(this.ratingBasedReviews.rating_1.list);
    this.ratingBasedReviews.rating_2.statement = this.getParagraph(this.ratingBasedReviews.rating_2.list);
    this.ratingBasedReviews.rating_3.statement = this.getParagraph(this.ratingBasedReviews.rating_3.list);
    this.ratingBasedReviews.rating_4.statement = this.getParagraph(this.ratingBasedReviews.rating_4.list);
    this.ratingBasedReviews.rating_5.statement = this.getParagraph(this.ratingBasedReviews.rating_5.list);

    this.ratingBasedReviews.rating_1.keywords = this.omitSpecialCharacter(this.getKeywords(this.ratingBasedReviews.rating_1.statement));
    this.ratingBasedReviews.rating_2.keywords = this.omitSpecialCharacter(this.getKeywords(this.ratingBasedReviews.rating_2.statement));
    this.ratingBasedReviews.rating_3.keywords = this.omitSpecialCharacter(this.getKeywords(this.ratingBasedReviews.rating_3.statement));
    this.ratingBasedReviews.rating_4.keywords = this.omitSpecialCharacter(this.getKeywords(this.ratingBasedReviews.rating_4.statement));
    this.ratingBasedReviews.rating_5.keywords = this.omitSpecialCharacter(this.getKeywords(this.ratingBasedReviews.rating_5.statement));

    this.positiveMentions = this.getTopPositiveMentions();
    this.negativeMentions = this.getTopNegativeMentions();

    this.createPositiveChart();
    this.createNegativeChart();
  }

  getTopPositiveMentions(): Array<Keyword> {
    return this.getUniqueKeywords(this.ratingBasedReviews.rating_5.keywords.concat(this.ratingBasedReviews.rating_4.keywords).sort((a, b) => a.value - b.value).reverse()).slice(0, 40);
  }

  getTopNegativeMentions(): Array<Keyword> {
    return this.getUniqueKeywords(this.ratingBasedReviews.rating_1.keywords.concat(this.ratingBasedReviews.rating_2.keywords).concat(this.ratingBasedReviews.rating_3.keywords).sort((a, b) => a.value - b.value).reverse()).slice(0, 60);
  }

  createPositiveChart() {
    let data = this.getTopPositiveMentions();
    let colorList = this.getPostiveColorCodeList();

    let config = {
      // text
      labels: data.map((d) => d.key),
      datasets: [
        {
          label: '',
          // size in pixel
          data: data.map((d) => d.value / data[0].value * 50),
          color: colorList,
          hoverColor: 'gray'
        },
      ],
    };

    this.renderChart('positivecloud', config);
  }

  createNegativeChart() {
    let data = this.getTopNegativeMentions();
    let colorList = this.getNegativeColorCodeList();

    let config = {
      // text
      labels: data.map((d) => d.key),
      datasets: [
        {
          label: '',
          // size in pixel
          data: data.map((d) => d.value / data[0].value * 50),
          color: colorList,
          hoverColor: 'gray'
        },
      ],
    };

    this.renderChart('negativecloud', config);
  }

  renderChart(canvasId: string, data: any) {
    const ctx = <HTMLCanvasElement>document.getElementById(canvasId);
    if (ctx) {
      var context = ctx.getContext('2d');
      if (context) {
        new Chart(context, {
          type: "wordCloud",
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: false // <-- this option disables tooltips
              },
            }
          }
        });
      }
    }
  }

  randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // getCloudKeywords(): Array<Keyword> {
  //   let list: Array<Keyword> = [];
  //   list = list.concat(this.ratingBasedReviews.rating_5.keywords);
  //   list = list.concat(this.ratingBasedReviews.rating_4.keywords);
  //   list = list.concat(this.ratingBasedReviews.rating_3.keywords);
  //   list = list.concat(this.ratingBasedReviews.rating_2.keywords);
  //   list = list.concat(this.ratingBasedReviews.rating_1.keywords);
  //   return list;
  // }

  getUniqueKeywords(data: Array<Keyword>): Array<Keyword> {
    return [...new Map(data.reverse().map(v => [v.key, v])).values()].sort((a, b) => a.value - b.value).reverse();
  }

  getPostiveColorCodeList(): Array<string> {
    let list: Array<string> = [];
    list = list.concat(Array(this.ratingBasedReviews.rating_5.keywords.length).fill(this.colorCodes[0]));
    list = list.concat(Array(this.ratingBasedReviews.rating_4.keywords.length).fill(this.colorCodes[1]));
    return list;
  }

  getNegativeColorCodeList(): Array<string> {
    let list: Array<string> = [];
    list = list.concat(Array(this.ratingBasedReviews.rating_3.keywords.length).fill(this.colorCodes[2]));
    list = list.concat(Array(this.ratingBasedReviews.rating_2.keywords.length).fill(this.colorCodes[3]));
    list = list.concat(Array(this.ratingBasedReviews.rating_1.keywords.length).fill(this.colorCodes[4]));
    return list;
  }

  getKeywords(sentence: string) {
    let keywords = keyword_extractor.extract(sentence, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: false
    });

    var data: Array<any> = [];
    var temp: any = {};
    for (const word of keywords) {
      temp[word] = temp[word] ? temp[word] + 1 : 1;
    }
    for (const key in temp) {
      data.push({ key: key, value: temp[key] });
    }
    return data.sort((a, b) => a.value - b.value).reverse().slice(0, 20);
  }

  getParagraph(reviews: Array<Review>): string {
    let sentence = '';
    reviews.forEach(review => {
      sentence = sentence + review.reviewText;
    });
    return sentence;
  }

  omitSpecialCharacter(data: Array<Keyword>): Array<Keyword> {
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return data.filter(keyword => format.test(keyword.key) == false);
  }
}
