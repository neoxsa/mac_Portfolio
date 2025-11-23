import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer"


const useWindowStore = create(immer((set) => ({
    windows: WINDOW_CONFIG,  // Initial state of window config
    nextZIndex: INITIAL_Z_INDEX + 1, // Plus one to the initial state value

    openWindow: (windowKey, data = null) =>
        set((state) => {
            const win = state.windows[windowKey];

            // Defensive : if the windowKey is invalid, do nothing.
            if (!win) return;

            win.isOpen = true;
            win.zIndex = state.nextZIndex;
            win.data = data ?? win.data;
            state.nextZIndex++;  //to place top of the existing window
        }),
    closeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;   
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
    }),
    focusWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
    }),
})),
);


export default useWindowStore;