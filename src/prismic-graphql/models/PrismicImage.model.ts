import { PrismicImageDimensions } from './PrismicImageDimensions';
import { PrismicLink } from './PrismicLink.model';
export interface PrismicImage {
  dimensions: PrismicImageDimensions;
  alt: string;
  copyright: string;
  url: string;
  linkTo?: PrismicLink;
}
