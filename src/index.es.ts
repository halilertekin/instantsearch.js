import InstantSearch, { InstantSearchOptions } from './lib/InstantSearch';
import version from './lib/version';
import {
  snippet,
  reverseSnippet,
  highlight,
  reverseHighlight,
  insights,
  getInsightsAnonymousUserToken,
} from './helpers';
import { createInfiniteHitsSessionStorageCache } from './lib/infiniteHitsCache';
import { deprecate } from './lib/utils';

const instantsearch = (options: InstantSearchOptions): InstantSearch =>
  new InstantSearch(options);

instantsearch.version = version;

// @major remove this in favour of the exports
instantsearch.createInfiniteHitsSessionStorageCache = deprecate(
  createInfiniteHitsSessionStorageCache,
  "import { createInfiniteHitsSessionStorageCache } from 'instantsearch.js/es/'"
);
instantsearch.highlight = deprecate(
  highlight,
  "import { highlight } from 'instantsearch.js/es/'"
);
instantsearch.reverseHighlight = deprecate(
  reverseHighlight,
  "import { reverseHighlight } from 'instantsearch.js/es/'"
);
instantsearch.snippet = deprecate(
  snippet,
  "import { snippet } from 'instantsearch.js/es/'"
);
instantsearch.reverseSnippet = deprecate(
  reverseSnippet,
  "import { reverseSnippet } from 'instantsearch.js/es/'"
);
instantsearch.insights = insights;
instantsearch.getInsightsAnonymousUserToken = getInsightsAnonymousUserToken;

export {
  snippet,
  reverseSnippet,
  highlight,
  reverseHighlight,
  createInfiniteHitsSessionStorageCache,
};

Object.defineProperty(instantsearch, 'widgets', {
  get() {
    throw new ReferenceError(
      `"instantsearch.widgets" are not available from the ES build.

To import the widgets:

import { searchBox } from 'instantsearch.js/es/widgets'`
    );
  },
});

Object.defineProperty(instantsearch, 'connectors', {
  get() {
    throw new ReferenceError(
      `"instantsearch.connectors" are not available from the ES build.

To import the connectors:

import { connectSearchBox } from 'instantsearch.js/es/connectors'`
    );
  },
});

export default instantsearch;
