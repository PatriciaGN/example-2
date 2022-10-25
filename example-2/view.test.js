/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });
});

describe('addParagraph', () => {
  it('adds a third paragraph', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new View();
    const paragraph =
      'This paragraph has been dynamically added by JavaScript!';
    view.addParagraph(paragraph);
    expect(document.querySelectorAll('p').length).toBe(3);
  });
});

describe('clearParagraphs', () => {
  it('clears all paragraphs and returns an empty array', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new View();
    view.clearParagraphs();
    expect(document.querySelectorAll('p').length).toBe(0);
  });
});
