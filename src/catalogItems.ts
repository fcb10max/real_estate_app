// home images
import homeImg1 from "./assets/images/png/homeImg1.png";
import homeImg2 from "./assets/images/png/homeImg2.png";
import homeImg3 from "./assets/images/png/homeImg3.png";
import homeImg4 from "./assets/images/png/homeImg4.png";
import homeImg5 from "./assets/images/png/homeImg5.png";
import homeImg6 from "./assets/images/png/homeImg6.png";
import homeImg7 from "./assets/images/png/homeImg7.png";
import homeImg8 from "./assets/images/png/homeImg8.jpg";
import homeImg9 from "./assets/images/png/homeImg9.jpg";

// room images
import roomImg1L from "./assets/images/png/room1L.jpg";
import roomImg1S from "./assets/images/png/room1s.jpg";
import roomImg2L from "./assets/images/png/room2L.jpg";
import roomImg2S from "./assets/images/png/room2S.jpg";
import roomImg3L from "./assets/images/png/room3L.jpg";
import roomImg3S from "./assets/images/png/room3S.jpg";
import roomImg4L from "./assets/images/png/room4L.jpg";
import roomImg4S from "./assets/images/png/room4S.jpg";
import roomImg5L from "./assets/images/png/room5L.jpg";
import roomImg5S from "./assets/images/png/room5S.jpg";
import roomImg6L from "./assets/images/png/room6L.jpg";
import roomImg6S from "./assets/images/png/room6S.jpg";

// fetaures icons

import elevator from "./assets/images/svg/elevatorIcon.svg";
import balcony from "./assets/images/svg/balconyIcon.svg";
import closet from "./assets/images/svg/closetIcon.svg";
import firePlace from "./assets/images/svg/fireIcon.svg";
import garden from "./assets/images/svg/gardenIcon.svg";
import laundry from "./assets/images/svg/laundryServiceIocn.svg";

export interface IObj {
  houseType: string;
  homeImgs: string[];
  price: number;
  area: number;
  rooms: {
    bedrooms: number;
    bathrooms: number;
  };
  roomImgs: {
    l: string;
    s: string;
  }[];
  features?: {
    name: string;
    img: string;
  }[];
}

const arr: IObj[] = [
  {
    houseType: "studio",
    homeImgs: [
      homeImg1,
      homeImg2,
      homeImg3,
      homeImg4,
      homeImg5,
      homeImg6,
      homeImg7,
      homeImg8,
      homeImg9,
    ],
    price: 100000,
    area: 535,
    rooms: {
      bedrooms: 1,
      bathrooms: 1,
    },
    roomImgs: [
      {
        l: roomImg1L,
        s: roomImg1S,
      },
      {
        l: roomImg2L,
        s: roomImg2S,
      },
      {
        l: roomImg3L,
        s: roomImg3S,
      },
      {
        l: roomImg4L,
        s: roomImg4S,
      },
      {
        l: roomImg5L,
        s: roomImg5S,
      },

      {
        l: roomImg6L,
        s: roomImg6S,
      },
    ],
    features: [
      {
        name: "elevator",
        img: elevator,
      },
      {
        name: "laundry facilities",
        img: laundry,
      },
      {
        name: "walk in closet",
        img: closet,
      },
      {
        name: "fireplace",
        img: firePlace,
      },
      {
        name: "balcony",
        img: balcony,
      },
      {
        name: "garden",
        img: garden,
      },
    ],
  },
  {
    houseType: "2 bedrooms",
    homeImgs: [
      homeImg2,
      homeImg1,
      homeImg3,
      homeImg4,
      homeImg5,
      homeImg6,
      homeImg7,
      homeImg8,
      homeImg9,
    ],
    price: 390000,
    area: 1000,
    rooms: {
      bedrooms: 2,
      bathrooms: 3,
    },
    roomImgs: [
      {
        l: roomImg1L,
        s: roomImg1S,
      },
      {
        l: roomImg2L,
        s: roomImg2S,
      },
      {
        l: roomImg3L,
        s: roomImg3S,
      },
      {
        l: roomImg4L,
        s: roomImg4S,
      },
      {
        l: roomImg5L,
        s: roomImg5S,
      },

      {
        l: roomImg6L,
        s: roomImg6S,
      },
    ],
    features: [
      {
        name: "elevator",
        img: elevator,
      },
      {
        name: "laundry facilities",
        img: laundry,
      },
      {
        name: "walk in closet",
        img: closet,
      },
      {
        name: "fireplace",
        img: firePlace,
      },
      {
        name: "balcony",
        img: balcony,
      },
      {
        name: "garden",
        img: garden,
      },
    ],
  },
  {
    houseType: "1 bedroom",
    homeImgs: [
      homeImg3,
      homeImg1,
      homeImg2,
      homeImg4,
      homeImg5,
      homeImg6,
      homeImg7,
      homeImg8,
      homeImg9,
    ],
    price: 143000,
    area: 535,
    rooms: {
      bedrooms: 1,
      bathrooms: 1,
    },
    roomImgs: [
      {
        l: roomImg1L,
        s: roomImg1S,
      },
      {
        l: roomImg2L,
        s: roomImg2S,
      },
      {
        l: roomImg3L,
        s: roomImg3S,
      },
      {
        l: roomImg4L,
        s: roomImg4S,
      },
      {
        l: roomImg5L,
        s: roomImg5S,
      },

      {
        l: roomImg6L,
        s: roomImg6S,
      },
    ],
    features: [
      {
        name: "elevator",
        img: elevator,
      },
      {
        name: "laundry facilities",
        img: laundry,
      },
      {
        name: "walk in closet",
        img: closet,
      },
      {
        name: "fireplace",
        img: firePlace,
      },
      {
        name: "balcony",
        img: balcony,
      },
      {
        name: "garden",
        img: garden,
      },
    ],
  },
  {
    houseType: "1 bedroom",
    homeImgs: [
      homeImg4,
      homeImg1,
      homeImg2,
      homeImg3,
      homeImg5,
      homeImg6,
      homeImg7,
      homeImg8,
      homeImg9,
    ],
    price: 211200,
    area: 535,
    rooms: {
      bedrooms: 1,
      bathrooms: 1,
    },
    roomImgs: [
      {
        l: roomImg1L,
        s: roomImg1S,
      },
      {
        l: roomImg2L,
        s: roomImg2S,
      },
      {
        l: roomImg3L,
        s: roomImg3S,
      },
      {
        l: roomImg4L,
        s: roomImg4S,
      },
      {
        l: roomImg5L,
        s: roomImg5S,
      },

      {
        l: roomImg6L,
        s: roomImg6S,
      },
    ],
    features: [
      {
        name: "elevator",
        img: elevator,
      },
      {
        name: "laundry facilities",
        img: laundry,
      },
      {
        name: "walk in closet",
        img: closet,
      },
      {
        name: "fireplace",
        img: firePlace,
      },
      {
        name: "balcony",
        img: balcony,
      },
      {
        name: "garden",
        img: garden,
      },
    ],
  },
  {
    houseType: "1 bedroom",
    homeImgs: [
      homeImg5,
      homeImg1,
      homeImg2,
      homeImg3,
      homeImg4,
      homeImg6,
      homeImg7,
      homeImg8,
      homeImg9,
    ],
    price: 132000,
    area: 535,
    rooms: {
      bedrooms: 1,
      bathrooms: 1,
    },
    roomImgs: [
      {
        l: roomImg1L,
        s: roomImg1S,
      },
      {
        l: roomImg2L,
        s: roomImg2S,
      },
      {
        l: roomImg3L,
        s: roomImg3S,
      },
      {
        l: roomImg4L,
        s: roomImg4S,
      },
      {
        l: roomImg5L,
        s: roomImg5S,
      },

      {
        l: roomImg6L,
        s: roomImg6S,
      },
    ],
    features: [
      {
        name: "elevator",
        img: elevator,
      },
      {
        name: "laundry facilities",
        img: laundry,
      },
      {
        name: "walk in closet",
        img: closet,
      },
      {
        name: "fireplace",
        img: firePlace,
      },
      {
        name: "balcony",
        img: balcony,
      },
      {
        name: "garden",
        img: garden,
      },
    ],
  },
  {
    houseType: "2 bedrooms",
    homeImgs: [
      homeImg6,
      homeImg1,
      homeImg2,
      homeImg3,
      homeImg4,
      homeImg5,
      homeImg7,
      homeImg8,
      homeImg9,
    ],
    price: 190400,
    area: 535,
    rooms: {
      bedrooms: 2,
      bathrooms: 1,
    },
    roomImgs: [
      {
        l: roomImg1L,
        s: roomImg1S,
      },
      {
        l: roomImg2L,
        s: roomImg2S,
      },
      {
        l: roomImg3L,
        s: roomImg3S,
      },
      {
        l: roomImg4L,
        s: roomImg4S,
      },
      {
        l: roomImg5L,
        s: roomImg5S,
      },

      {
        l: roomImg6L,
        s: roomImg6S,
      },
    ],
    features: [
      {
        name: "elevator",
        img: elevator,
      },
      {
        name: "laundry facilities",
        img: laundry,
      },
      {
        name: "walk in closet",
        img: closet,
      },
      {
        name: "fireplace",
        img: firePlace,
      },
      {
        name: "balcony",
        img: balcony,
      },
      {
        name: "garden",
        img: garden,
      },
    ],
  },
  {
    houseType: "2 bedrooms",
    homeImgs: [
      homeImg7,
      homeImg1,
      homeImg2,
      homeImg3,
      homeImg4,
      homeImg5,
      homeImg6,
      homeImg8,
      homeImg9,
    ],
    price: 190400,
    area: 535,
    rooms: {
      bedrooms: 2,
      bathrooms: 1,
    },
    roomImgs: [
      {
        l: roomImg1L,
        s: roomImg1S,
      },
      {
        l: roomImg2L,
        s: roomImg2S,
      },
      {
        l: roomImg3L,
        s: roomImg3S,
      },
      {
        l: roomImg4L,
        s: roomImg4S,
      },
      {
        l: roomImg5L,
        s: roomImg5S,
      },

      {
        l: roomImg6L,
        s: roomImg6S,
      },
    ],
    features: [
      {
        name: "elevator",
        img: elevator,
      },
      {
        name: "laundry facilities",
        img: laundry,
      },
      {
        name: "walk in closet",
        img: closet,
      },
      {
        name: "fireplace",
        img: firePlace,
      },
      {
        name: "balcony",
        img: balcony,
      },
      {
        name: "garden",
        img: garden,
      },
    ],
  },
  {
    houseType: "2 bedrooms",
    homeImgs: [
      homeImg8,
      homeImg1,
      homeImg2,
      homeImg3,
      homeImg4,
      homeImg5,
      homeImg6,
      homeImg7,
      homeImg9,
    ],
    price: 190400,
    area: 535,
    rooms: {
      bedrooms: 2,
      bathrooms: 1,
    },
    roomImgs: [
      {
        l: roomImg1L,
        s: roomImg1S,
      },
      {
        l: roomImg2L,
        s: roomImg2S,
      },
      {
        l: roomImg3L,
        s: roomImg3S,
      },
      {
        l: roomImg4L,
        s: roomImg4S,
      },
      {
        l: roomImg5L,
        s: roomImg5S,
      },

      {
        l: roomImg6L,
        s: roomImg6S,
      },
    ],
    features: [
      {
        name: "elevator",
        img: elevator,
      },
      {
        name: "laundry facilities",
        img: laundry,
      },
      {
        name: "walk in closet",
        img: closet,
      },
      {
        name: "fireplace",
        img: firePlace,
      },
      {
        name: "balcony",
        img: balcony,
      },
      {
        name: "garden",
        img: garden,
      },
    ],
  },
  {
    houseType: "2 bedrooms",
    homeImgs: [
      homeImg9,
      homeImg1,
      homeImg2,
      homeImg3,
      homeImg4,
      homeImg5,
      homeImg6,
      homeImg7,
      homeImg8,
    ],
    price: 190400,
    area: 535,
    rooms: {
      bedrooms: 2,
      bathrooms: 1,
    },
    roomImgs: [
      {
        l: roomImg1L,
        s: roomImg1S,
      },
      {
        l: roomImg2L,
        s: roomImg2S,
      },
      {
        l: roomImg3L,
        s: roomImg3S,
      },
      {
        l: roomImg4L,
        s: roomImg4S,
      },
      {
        l: roomImg5L,
        s: roomImg5S,
      },

      {
        l: roomImg6L,
        s: roomImg6S,
      },
    ],
    features: [
      {
        name: "elevator",
        img: elevator,
      },
      {
        name: "laundry facilities",
        img: laundry,
      },
      {
        name: "walk in closet",
        img: closet,
      },
      {
        name: "fireplace",
        img: firePlace,
      },
      {
        name: "balcony",
        img: balcony,
      },
      {
        name: "garden",
        img: garden,
      },
    ],
  },
];

export default arr;
