import { PathfinderAngularPage } from './app.po';

describe('pathfinder-angular App', () => {
  let page: PathfinderAngularPage;

  beforeEach(() => {
    page = new PathfinderAngularPage();
  });

  it('should display main page text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Main Page');
  });
});
