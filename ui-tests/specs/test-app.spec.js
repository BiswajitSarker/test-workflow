/* eslint-disable no-undef */
const assert = require("assert");

describe("Test App Main page", () => {
  before(() => {
    browser.url(`/`);
  });

  it("should have the correct title", () => {
    const title = browser.getTitle();
    assert.strictEqual(title, `React App`);
  });

  it("should show correct heading", () => {
    const header = $(".App-title");
    assert.equal(header.getText(), `Bish Test-App`);
  });

  it("should show Comment Text box", () => {
    const commentTextBox = $(".comment-box");
    assert.equal(commentTextBox.isDisplayedInViewport(), true);
  });

  it("should show Add Comment button", () => {
    const submitCommentButton = $(
      ".comment-box > div:nth-child(3) > button:nth-child(1)"
    );
    assert.equal(submitCommentButton.isDisplayedInViewport(), true);
  });
});
