import { Assignment2Page } from './app.po';

describe('assignment-2 App', function() {
  let page: Assignment2Page;

  beforeEach(() => {
    page = new Assignment2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
