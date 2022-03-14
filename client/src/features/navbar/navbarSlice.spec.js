import navbarReducer, { toggleVisible } from './navbarSlice';

describe('navbar reducer', () => {
    const initialState = {
        visibility: true
    }
    it('should handle initialState', () => {
        expect(navbarReducer(undefined, { type: 'unknown'})).toEqual({
            visibility: true
        });
    });
    it('should change visibility to reverse boolean', () => {
        const actual = navbarReducer(initialState, toggleVisible());
        expect(actual.visibility).toEqual(false);
    })
});