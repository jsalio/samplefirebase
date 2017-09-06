import { Sample03Page } from './app.po';

describe('sample03 App', () => {
  let page: Sample03Page;

  beforeEach(() => {
    page = new Sample03Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
