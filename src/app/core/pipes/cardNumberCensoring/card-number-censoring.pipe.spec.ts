import { CardNumberCensoringPipe } from './card-number-censoring.pipe';

describe('CardNumberCensoringPipe', () => {
  it('create an instance', () => {
    const pipe = new CardNumberCensoringPipe();
    expect(pipe).toBeTruthy();
  });
});
