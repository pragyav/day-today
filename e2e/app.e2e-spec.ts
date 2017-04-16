import { DayTodayPage } from './app.po';

describe('day-today App', function() {
  let page: DayTodayPage;

  beforeEach(() => {
    page = new DayTodayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
