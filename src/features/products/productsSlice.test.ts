import { describe, expect, it } from 'vitest';
import reducer, { setSpecification, setType } from './productsSlice';

describe('productsSlice', () => {
  it('sets filters', () => {
    let state = reducer(undefined, setType('Monitors'));
    state = reducer(state, setSpecification('Moni I'));
    expect(state.type).toBe('Monitors');
    expect(state.specification).toBe('Moni I');
  });
});
