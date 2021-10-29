import { UdemyCourseAppPage } from './app.po';

describe('udemy-course-app App', () => {
  let page: UdemyCourseAppPage;

  beforeEach(() => {
    page = new UdemyCourseAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
