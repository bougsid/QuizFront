import { QuizFrontEndPage } from './app.po';

describe('quiz-front-end App', () => {
  let page: QuizFrontEndPage;

  beforeEach(() => {
    page = new QuizFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
