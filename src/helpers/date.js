import moment from 'moment';

export const isValidDate = (date) => {
  return date instanceof Date && !isNaN(date);
}

export const toInputTypeDateValue = (date) => {
  let dateObj = isValidDate(date) ? new Date(date) : new Date();
  return dateObj.toISOString().substr(0, 10);
}

export const toMomentFormat = (date, format) => {
  if(!isValidDate(date)) return '';
  let momentDate = moment(new Date(date));
  return momentDate.format(format);
}