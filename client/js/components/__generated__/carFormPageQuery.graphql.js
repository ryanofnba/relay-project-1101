/**
 * @flow
 * @relayHash 68694ca6720471d5ae1e4b21c764c557
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type carFormPageQueryResponse = {|
  +viewer: ?{|
    +id: string;
  |};
|};
*/


/*
query carFormPageQuery {
  viewer {
    id
    ...carFormHome_viewer
  }
}

fragment carFormHome_viewer on Viewer {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "carFormPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "FragmentSpread",
            "name": "carFormHome_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "carFormPageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "carFormPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query carFormPageQuery {\n  viewer {\n    id\n    ...carFormHome_viewer\n  }\n}\n\nfragment carFormHome_viewer on Viewer {\n  id\n}\n"
};

module.exports = batch;
