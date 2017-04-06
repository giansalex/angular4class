import { Ang4tutorialPage } from './app.po';

describe('ang4tutorial App', () => {
  let page: Ang4tutorialPage;

  beforeEach(() => {
    page = new Ang4tutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
