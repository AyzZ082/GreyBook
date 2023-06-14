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
    icon: icons.motivation,
  },
  {
    id: 2,
    name: 'Finance',
    icon: icons.finance,
  },
  {
    id: 3,
    name: 'Self Improvment',
    icon: icons.selfhelp,
  },
  {
    id: 4,
    name: 'Romance',
    icon: icons.romance,
  },
];
const all_categories = [
  {
    id: 1,
    name: 'Motivational',
    icon: icons.motivation,
  },
  {
    id: 2,
    name: 'Finance',
    icon: icons.finance,
  },
  {
    id: 3,
    name: 'Self Improvment',
    icon: icons.selfhelp,
  },
  {
    id: 4,
    name: 'Fiction',
    icon: icons.fiction,
  },
  {
    id: 5,
    name: 'Business',
    icon: icons.business,
  },
  {
    id: 6,
    name: 'Poetry',
    icon: icons.poetry,
  },
  {
    id: 7,
    name: 'Cooking',
    icon: icons.cooking,
  },
  {
    id: 8,
    name: 'Romance',
    icon: icons.romance,
  },
  {
    id: 9,
    name: 'Biography',
    icon: icons.biography,
  },
  {
    id: 10,
    name: 'History',
    icon: icons.history,
  },
  {
    id: 11,
    name: 'Children',
    icon: icons.kids,
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
  image: require('../assets/dummyData/111.jpg'),
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

const sizes = [
  {
      id: 1,
      label: '12"'
  },
  {
      id: 2,
      label: '14"'
  },
  {
      id: 3,
      label: '16"'
  },
  {
      id: 4,
      label: '18"'
  }
]

const myCart = [
  {
      ...hamburger,
      qty: 1
  },
  {
      ...hotTacos,
      qty: 1
  },
  {
      ...vegBiryani,
      qty: 1
  }
]

const myCards = [
  {
      id: 1,
      name: "Master Card",
      icon: require("../assets/icons/mastercard.png"),
      card_no: "1234"
  },
  {
      id: 2,
      name: "Google Pay",
      icon: require("../assets/icons/google.png"),
      card_no: "1234"
  },
]

const allCards = [
  {
      id: 1,
      name: "Apple Pay",
      icon: require("../assets/icons/apple.png")
  },
  {
      id: 2,
      name: "Visa",
      icon: require("../assets/icons/visa.png"),
  },
  {
      id: 3,
      name: "PayPal",
      icon: require("../assets/icons/paypal.png"),
  },
  {
      id: 4,
      name: "Google Pay",
      icon: require("../assets/icons/google.png"),
  },
  {
      id: 5,
      name: "Master Card",
      icon: require("../assets/icons/mastercard.png"),
  },
]


const fromLocs = [
  {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
  },
  {
      latitude: 1.556306570595712,
      longitude: 110.35504616746915,
  },
  {
      latitude: 1.5238753474714375,
      longitude: 110.34261833833622,
  },
  {
      latitude: 1.5578068150528928,
      longitude: 110.35482523764315,
  },
  {
      latitude: 1.558050496260768,
      longitude: 110.34743759630511,
  },
  {
      latitude: 1.5573478487252896,
      longitude: 110.35568783282145,
  }
]
export default {
  myProfile,
  categories,
  menu,
  wrapSandwich,
  hamburger,
  vegBiryani,
  hotTacos,
  sizes,
    myCart,
    myCards,
    allCards,
    fromLocs,
    all_categories,
};
