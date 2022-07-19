import PrismicDOM from 'prismic-dom';
import { Injectable } from '@angular/core';
import { LooseObject } from './prismic-graphql-util';
import { PrismicRichText } from './models/PrismicRichText.model';

@Injectable({
  providedIn: 'root',
})
export class PrismicUtils {
  Elements = PrismicDOM.RichText.Elements;
  constructor() {}

  convertTextAsHTML = (
    text: PrismicRichText[],
    htmlSerializer?: (...args) => string
  ) : string  => {
    try {
      return PrismicDOM.RichText.asHtml(text, null, htmlSerializer);
    } catch (e) {
      console.error('Error richText as HTML:', e);
      return '';
    }
  };

  convertHTMLAsText = (html: PrismicRichText[]) : string => {
    try {
      return PrismicDOM.RichText.asText(html, null);
    } catch (e) {
      console.error('Error richText as text:', e);
      return '';
    }
  };

  convertKeyNamesToCamelCase = (data: LooseObject) => {
    let newO: {};
    let origKey: string;
    let newKey: string;
    let value: any;

    if (data instanceof Array) {
      return data.map(valueInArray => {
        if (typeof valueInArray === 'object') {
          valueInArray = this.convertKeyNamesToCamelCase(valueInArray);
        }
        return valueInArray;
      });
    } else {
      newO = {};
      for (origKey in data) {
        if (data.hasOwnProperty(origKey)) {
          newKey = this.convertHyphensToCamelCase(origKey);
          value = data[origKey];
          if (
            value instanceof Array ||
            (value !== null && value.constructor === Object)
          ) {
            value = this.convertKeyNamesToCamelCase(value);
          }
          newO[newKey] = value;
        }
      }
    }
    return newO;
  };

  convertHyphensToCamelCase = (textWithHyphens: string): string => {
    return textWithHyphens.replace(/[-_]([a-z])/g, results => {
      return results[1].toUpperCase();
    });
  };
}
