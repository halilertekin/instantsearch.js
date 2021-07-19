import instantsearch from '../index';

describe('instantsearch()', () => {
  it('includes a version', () => {
    expect(instantsearch.version).toMatch(
      /^(\d+\.)?(\d+\.)?(\*|\d+)(-beta.\d+)?$/
    );
  });

  it('includes the widget functions', () => {
    Object.values(instantsearch.widgets).forEach(widget => {
      expect(widget).toBeInstanceOf(Function);
    });
  });

  it('includes the connectors functions', () => {
    Object.values(instantsearch.connectors).forEach(connector => {
      expect(connector).toBeInstanceOf(Function);
    });
  });

  it('includes the helper functions', () => {
    expect(Object.keys(instantsearch)).toMatchInlineSnapshot(`
      Array [
        "version",
        "routers",
        "stateMappings",
        "connectors",
        "widgets",
        "middlewares",
        "createInfiniteHitsSessionStorageCache",
        "highlight",
        "reverseHighlight",
        "snippet",
        "reverseSnippet",
        "insights",
      ]
    `);
  });
});
