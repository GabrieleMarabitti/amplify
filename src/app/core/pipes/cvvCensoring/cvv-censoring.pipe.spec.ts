import { CvvCensoringPipe } from './cvv-censoring.pipe';

describe('CvvCensoringPipe', () => {
  it('create an instance', () => {
    const pipe = new CvvCensoringPipe();
    expect(pipe).toBeTruthy();
  });
});
