import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

const cn = (...classes) => {
  return twMerge(classNames(...classes));
};
export default cn;
