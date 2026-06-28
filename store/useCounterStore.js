import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
  doubleCount: () => set((state) => ({count: state.count * 2})),
  addCustomAmount: (amount) => set((state) => ({ count: state.count + amount }))
}));

export default useCounterStore;
