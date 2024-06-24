import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface LanguageStore {
  language: string;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'español',

      toggleLanguage: () =>
        set({ language: get().language === 'español' ? 'english' : 'español' }),
    }),
    {
      name: 'language',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        language: state.language,
      }),
    }
  )
);
