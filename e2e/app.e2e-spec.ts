import { GentlemenBlackPage } from './app.po';

describe('gentlemen-black App', function() {
  let page: GentlemenBlackPage;

  beforeEach(() => {
    page = new GentlemenBlackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
