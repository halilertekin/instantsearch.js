import InstantSearch, { InstantSearchOptions } from './lib/InstantSearch';
import version from './lib/version';

import * as connectors from './connectors/index';
import * as widgets from './widgets/index';
import * as helpers from './helpers/index';
import * as middlewares from './middlewares/index';

import * as routers from './lib/routers/index';
import * as stateMappings from './lib/stateMappings/index';
import { createInfiniteHitsSessionStorageCache } from './lib/infiniteHitsCache/index';

/**
 * InstantSearch is the main component of InstantSearch.js. This object
 * manages the widget and lets you add new ones.
 *
 * Two parameters are required to get you started with InstantSearch.js:
 *  - `indexName`: the main index that you will use for your new search UI
 *  - `searchClient`: the search client to plug to InstantSearch.js
 *
 * The [search client provided by Algolia](https://github.com/algolia/algoliasearch-client-javascript)
 * needs an `appId` and an `apiKey`. Those parameters can be found in your
 * [Algolia dashboard](https://www.algolia.com/api-keys).
 *
 * If you want to get up and running quickly with InstantSearch.js, have a
 * look at the [getting started](getting-started.html).
 * @function instantsearch
 * @param {InstantSearchOptions} options The options
 */
const instantsearch = (options: InstantSearchOptions) =>
  new InstantSearch(options);

instantsearch.version = version;

instantsearch.routers = routers;
instantsearch.stateMappings = stateMappings;
instantsearch.connectors = connectors;
instantsearch.widgets = widgets;
instantsearch.middlewares = middlewares;

instantsearch.createInfiniteHitsSessionStorageCache = createInfiniteHitsSessionStorageCache;
instantsearch.highlight = helpers.highlight;
instantsearch.reverseHighlight = helpers.reverseHighlight;
instantsearch.snippet = helpers.snippet;
instantsearch.reverseSnippet = helpers.reverseSnippet;
instantsearch.insights = helpers.insights;

export default instantsearch;
