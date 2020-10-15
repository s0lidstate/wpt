// META: script=resources/support.js
//
// Spec: https://wicg.github.io/cors-rfc1918/#integration-html
//
// This file covers only those tests that must execute in a secure context.
// Other tests are defined in: address-space.window.js
'use strict';

promise_test(t => {
  return append_child_frame(t, document, "resources/treat-as-public-address.https.html")
      .then(child => {
        return append_child_frame(t, child.contentDocument, "/common/blank.html");
      })
      .then(grandchild => {
        assert_equals(grandchild.contentDocument.addressSpace, "local");
      });
}, "Public-local grandchild iframe's addressSpace is local");
