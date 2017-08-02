import { TaxCalcyPage } from './app.po';

describe('tax-calcy App', () => {
  let page: TaxCalcyPage;

  beforeEach(() => {
    page = new TaxCalcyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
