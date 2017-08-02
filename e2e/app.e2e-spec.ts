import { NgrxDemoPage } from './app.po';

describe('ngrx-demo App', () => {
  let page: NgrxDemoPage;

  beforeEach(() => {
    page = new NgrxDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
