import { create } from 'zustand'

type Model = 'tiny' | 'small' | 'medium'

interface S {
  hotkey: string
  setHotkey: (v: string) => void

  model: Model
  setModel: (m: Model) => void

  cloudPolish: boolean
  setCloudPolish: (v: boolean) => void

  apiKey: string
  setApiKey: (k: string) => void

  devMode: boolean
  setDevMode: (v: boolean) => void
}

export const useStore = create<S>((set) => ({
  hotkey: 'Fn',
  setHotkey: (v) => set({ hotkey: v }),

  model: 'small',
  setModel: (m) => set({ model: m }),

  cloudPolish: false,
  setCloudPolish: (v) => set({ cloudPolish: v }),

  apiKey: '',
  setApiKey: (k) => set({ apiKey: k }),

  devMode: false,
  setDevMode: (v) => set({ devMode: v }),
}))
