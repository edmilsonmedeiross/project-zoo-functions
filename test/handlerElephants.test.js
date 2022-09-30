const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('test if function return quantity of elephant', () => {
    expect(handlerElephants('count')).toEqual(4);
    /* expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']); */
  });
  it('test if function return array witch names of elephants', () => {
    /* expect(handlerElephants('count')).toEqual(4); */
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('test if function return averageAge of elephants', () => {
    /* expect(handlerElephants('count')).toEqual(4); */
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('test if function return location of elephants', () => {
    /* expect(handlerElephants('count')).toEqual(4); */
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('test if function return popularity', () => {
    /* expect(handlerElephants('count')).toEqual(4); */
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('test if function return availability', () => {
    /* expect(handlerElephants('count')).toEqual(4); */
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('test if function is case sensitive', () => {
    /* expect(handlerElephants('count')).toEqual(4); */
    expect(handlerElephants('availABilIty')).toEqual(null);
  });
  it('test if function return array witch names jeferson', () => {
    /* expect(handlerElephants('count')).toEqual(4); */
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('test if function param undefined return undefined', () => {
    /* expect(handlerElephants('count')).toEqual(4); */
    expect(handlerElephants(undefined)).toBe(undefined);
  });
  it('test if function param null return message', () => {
    /* expect(handlerElephants('count')).toEqual(4); */
    expect(handlerElephants(null)).toEqual('Parâmetro inválido, é necessário uma string');
  });
});
