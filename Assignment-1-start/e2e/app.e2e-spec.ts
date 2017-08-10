import { MyAngularStudyPage } from './app.po';

describe('my-angular-study App', function() {
  let page: MyAngularStudyPage;

  beforeEach(() => {
    page = new MyAngularStudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
