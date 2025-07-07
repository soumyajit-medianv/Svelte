import { derived, readable, writable } from "svelte/store";

export const count = writable(0);


export const time = readable(new Date(), (set) => {
    const interval = setInterval(() => {
        set(new Date())
    }, 1000)

    return () => clearInterval(interval);
});

const start = new Date();

export const elapsedTime = derived(time, (time) => {
    return Math.round((time.getTime() - start.getTime()) / 1000);
})


function createCount() {
    const { subscribe, update, set } = writable(0);

    return {
        subscribe,
        increment: (size = 1) => update((n) => n + size),
        decrement: (size = 1) => update((n) => n - size),
        reset: () => set(0),
    }
}

export const customCount = createCount();

