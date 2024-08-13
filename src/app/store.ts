import { create } from 'zustand';
import { combine } from 'zustand/middleware';

interface MovieHighlightState {
    highlightMovies: number;
    getHighlightMovies: (value: number) => void;
    setHighlightMovies: (value: number) => void;
}

const useBearStore = create(
    combine({ bears: 0 }, (set) => ({
        increase: (by: number) => set((state) => ({ bears: state.bears + by })),
    }))
);

export default useBearStore;
