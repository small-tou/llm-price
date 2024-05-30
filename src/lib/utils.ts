import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility functions for managing the compare list in localStorage
export const compareListUtils = {
  addModelToCompare: (model) => {
    const compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
    if (!compareList.find((m) => m.model === model.model)) {
      compareList.push(model);
      localStorage.setItem('compareList', JSON.stringify(compareList));
    }
  },
  removeModelFromCompare: (model) => {
    let compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
    compareList = compareList.filter((m) => m.model !== model.model);
    localStorage.setItem('compareList', JSON.stringify(compareList));
  },
  isModelInCompare: (model) => {
    const compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
    return !!compareList.find((m) => m.model === model.model);
  },
};
