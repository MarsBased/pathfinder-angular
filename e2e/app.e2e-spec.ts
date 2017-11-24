import { PathfinderAngularPage } from './app.po';

describe('pathfinder-angular App', () => {
  let page: PathfinderAngularPage;

  beforeEach(() => {
    page = new PathfinderAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello World!');
  });
});
