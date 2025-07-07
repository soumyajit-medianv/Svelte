import { createLocalStorage, createSessionStorage, persist, persistBrowserSession, writable } from "@macfja/svelte-persistent-store";

// LocalStorage
// By default used localstorage
// export const name = writable("name", "John");

// persist(store, storageAdapter, key)
export const name = persist(writable("John"), createLocalStorage(), "name");


// SessionStorage
export const tempData = persist(writable("temp"), createSessionStorage(), "temp-key");

export const title = persistBrowserSession(writable("Unsaved"), "document-name")
