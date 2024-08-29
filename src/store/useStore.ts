import { create } from 'zustand'


interface StoreProps {
    items: string[],
    addItem: (item: string) => void,
    removeItem: (item: string) => void,
    clearItems: () => void
}

export const useStore = create<StoreProps>((set, get) => ({
    items: [],
    addItem: (item: string) => set((state) => ({items: [...state.items, item]})),
    removeItem: (item: string) => set((state) => ({items: [...state.items.filter(_item => _item !== item)]})),
    clearItems: () => set((state) => ({items: []}))
}))
