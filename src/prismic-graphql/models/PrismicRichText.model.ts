import { PrismicSpan } from './PrismicSpan.model';

export interface PrismicRichText {
  type: string;
  text: string;
  spans: PrismicSpan[];
}
