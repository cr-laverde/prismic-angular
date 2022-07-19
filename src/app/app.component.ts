import { Component, OnInit } from '@angular/core';
import { PrismicRichText } from 'src/prismic-graphql/models/PrismicRichText.model';
import { PrismicGraphqlService } from 'src/prismic-graphql/prismic-graphql.service';
import { PrismicUtils } from 'src/prismic-graphql/prismic-utils';
import { ContenidoCardDTO } from './prismic/dto/contenido-card-dto';
import { PRISMIC_CONFIG } from './prismic/PrismicConfig';
import { ContenidoHomeService } from './prismic/services/contenido-card.service';
import * as PrismicDOM from 'prismic-dom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prismic-angular';
  cardContent: ContenidoCardDTO;

  constructor(
    private prismicGraphqlService: PrismicGraphqlService,
    private contenidoHomeService: ContenidoHomeService,
    private readonly prismicUtil: PrismicUtils
  ) {
    this.prismicGraphqlService.setConfigPrismic(PRISMIC_CONFIG);
  }

  ngOnInit(): void {
    this.contenidoHomeService.getContenidoCard()
      .subscribe( (response: ContenidoCardDTO) => {
        console.log(response);
        this.cardContent = response;
      });
  }

  convertRichTextAsHTML(textToConvert: PrismicRichText[], htmlSerializer?) {
    return this.prismicUtil.convertTextAsHTML(textToConvert, htmlSerializer);
  }

  convertHTMLAsText(textToConvert: PrismicRichText[]) {
    return this.prismicUtil.convertHTMLAsText(textToConvert);
  }

  getSerializer(type, element, content, children) {
    switch (type) {
      case PrismicDOM.RichText.Elements.paragraph:
        return (
          '<p class="test">' +
          children.join('') +
          '</p>'
        );
      default:
        return null;
    }
  }
}
