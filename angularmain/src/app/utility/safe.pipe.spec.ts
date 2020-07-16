import { SafePipe } from '@src/app/utility/safe.pipe';

describe('SafePipe', () => {
  it('create an instance', () => {
    const pipe = new SafePipe(this.safe);
    expect(pipe).toBeTruthy();
  });
});
