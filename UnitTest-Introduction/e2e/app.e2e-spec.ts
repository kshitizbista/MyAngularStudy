import { UnitTestIntroductionPage } from './app.po';

describe('unit-test-introduction App', () => {
  let page: UnitTestIntroductionPage;

  beforeEach(() => {
    page = new UnitTestIntroductionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
