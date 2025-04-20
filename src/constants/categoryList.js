import PhoneIcon from '@assets/Images/icons/48px/icon_phone.svg?react';
import WatchIcon from '@assets/Images/icons/48px/icon_watch.svg?react';
import CameraIcon from '@assets/Images/icons/48px/icon_camera.svg?react';
import HeadphoneIcon from '@assets/Images/icons/48px/icon_headphone.svg?react';
import ComputerIcon from '@assets/Images/icons/48px/icon_computer.svg?react';
import GamingIcon from '@assets/Images/icons/48px/icon_gaming.svg?react';

export const initialCategories = [
  { name: 'Phones', image: PhoneIcon, slug: 'phones' },
  { name: 'Smart Watches', image: WatchIcon, slug: 'watches' },
  { name: 'Cameras', image: CameraIcon, slug: 'cameras' },
  { name: 'Headphones', image: HeadphoneIcon, slug: 'headphones' },
  { name: 'Computers', image: ComputerIcon, slug: 'computers' },
  { name: 'Gaming', image: GamingIcon, slug: 'gaming' },
];

// api 응답 값에서 id, name, slug만 남기고 삭제
export const categories = [
  {
    id: 1,
    name: 'Clothes',
    slug: 'clothes',
  },
  {
    id: 2,
    name: 'Electronics',
    slug: 'electronics',
  },
  {
    id: 3,
    name: 'Furniture',
    slug: 'furniture',
  },
  {
    id: 4,
    name: 'Shoes',
    slug: 'shoes',
  },
  {
    id: 5,
    name: 'Miscellaneous',
    slug: 'miscellaneous',
  },
  {
    id: 8,
    name: 'Grosery',
    slug: 'grosery',
  },
];
