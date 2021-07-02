import { addDays } from 'date-fns';

export const getAddDay = (date: Date): Date => {
  return addDays(date, 1);
};
