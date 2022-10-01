const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('test if function parameter is tuesday, 05:10-PM', () => {
    expect(getOpeningHours('Tuesday', '05:10-PM')).toEqual('The zoo is open');
  });

  it('test if function parameter is Monday, 12:30-PM', () => {
    expect(getOpeningHours('Monday', '12:30-PM')).toEqual('The zoo is closed');
  });

  it('test if function parameter is tuesday, 10', () => {
    expect(() => { getOpeningHours('Tuesday', '10'); }).toThrow();
  });

  it('test if function with no parameter', () => {
    expect(getOpeningHours()).toEqual({ Tuesday: { open: 8, close: 6 }, Wednesday: { open: 8, close: 6 }, Thursday: { open: 10, close: 8 }, Friday: { open: 10, close: 8 }, Saturday: { open: 8, close: 10 }, Sunday: { open: 8, close: 8 }, Monday: { open: 0, close: 0 } });
  });

  it('test if function parameter is tuesday, 05:10', () => {
    expect(() => { getOpeningHours('Tuesday', '05:10'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('test if function parameter minute is, 12:68-PM', () => {
    expect(() => { getOpeningHours('Tuesday', '12:68-PM'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });

  it('test if function parameter is Lovelace, 12:30-PM', () => {
    expect(() => { getOpeningHours('Lovelace', '12:30-PM'); }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });

  it('test if function parameter hour is, 15:30-AM', () => {
    expect(() => { getOpeningHours('Tuesday', '15:30-AM'); }).toThrowError(new Error('The hour must be between 0 and 12'));
  });
});
