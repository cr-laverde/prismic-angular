
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { environment } from 'src/environments/environment';
import { PrismicConfiguration } from 'src/prismic-graphql/prismic-configuration';
import * as introspectionQueryResultData from './fragmentTypes.json';

export const PRISMIC_CONFIG: PrismicConfiguration = {
  apiEndpoint: environment.prismicApi,
  // accessToken: environment.prismicToken,
  linkResolver() {
    return '/';
  },
  ref: environment.prismicRef,
  introspectionFragmentMatcher: new IntrospectionFragmentMatcher({
    introspectionQueryResultData: introspectionQueryResultData,
  }),
};
