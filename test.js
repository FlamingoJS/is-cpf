import { expect } from 'chai';
import isCPF from './';

describe('isCPF', () => {
  it('should return true', () => {
    expect(isCPF('265.827.252-97')).to.be.true;
    expect(isCPF('242.193.353-66')).to.be.true;
    expect(isCPF('776.857.639-07')).to.be.true;
    expect(isCPF('22017437620')).to.be.true;
    expect(isCPF('77685763907')).to.be.true;
    expect(isCPF('41474486827')).to.be.true;
  });

  it('should return false', () => {
    expect(isCPF('123.456.789-01')).to.be.false;
    expect(isCPF('978.324.555-99')).to.be.false;
    expect(isCPF('45678968901')).to.be.false;
    expect(isCPF('11112222333')).to.be.false;
    expect(isCPF('00000000000')).to.be.false;
  });
});
