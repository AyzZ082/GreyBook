import {icons, images} from './';

const myProfile = {
  name: 'GreyBooks',
  profile_image: images.profile,
  profile_image_bg: images.profile2,
  address: 'No. 88, Jln Padungan, Kuching',
};

const categories = [
  {
    id: 1,
    name: 'Motivational',
    icon: icons.burger,
  },
  {
    id: 2,
    name: 'Finance',
    icon: icons.cherry,
  },
  {
    id: 3,
    name: 'Self Improvment',
    icon: icons.rice,
  },
];

const hamburger = {
  id: 1,
  name: 'Rich Dad Poor Dad',
  description: 'Great Motivation for Career Making',
  categories: [1, 2],
  price: 399.99,
  calories: 78,
  isFavourite: true,
  image: require('../assets/dummyData/richdad.png'),
};

const hotTacos = {
  id: 2,
  name: 'Atomic Habits',
  description: 'Habits of Successfull People',
  categories: [1, 3],
  price: 599.99,
  calories: 78,
  isFavourite: false,
  image: require('../assets/dummyData/atomic.png'),
};

const vegBiryani = {
  id: 3,
  name: 'React Native Mastery',
  description: 'Zero to Master in React Native Course',
  categories: [1, 2, 3],
  price: 299.99,
  calories: 78,
  isFavourite: true,
  image: require('../assets/dummyData/reactnative.png'),
};

const wrapSandwich = {
  id: 4,
  name: 'Rich Dad Poor Dad',
  description: 'Habits of Successfull People',
  categories: [1, 2],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('../assets/dummyData/richdad.png'),
};

const menu = [
  {
    id: 1,
    name: 'Featured',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: 'Nearby you',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: 'Popular',
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: 'Newest',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: 'Trending',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: 'Recommended',
    list: [hamburger, hotTacos, wrapSandwich],
  },
];

export default {
  myProfile,
  categories,
  menu,
  wrapSandwich,
  hamburger,
  vegBiryani,
  hotTacos,
};
