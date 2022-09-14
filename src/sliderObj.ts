// import images for sliderObj
import img1 from "./assets/images/png/homeImg1.png";
import img2 from "./assets/images/png/homeImg2.png";
import img3 from "./assets/images/png/homeImg3.png";
import img4 from "./assets/images/png/homeImg4.png";
import img5 from "./assets/images/png/homeImg5.png";
import img6 from "./assets/images/png/homeImg6.png";
import img7 from "./assets/images/png/homeImg7.png";
import img8 from "./assets/images/png/homeImg8.jpg";
import img9 from "./assets/images/png/homeImg9.jpg";

interface IObj {
  image: string;
  city: string;
  country: string;
}

const arr: IObj[] = [
  {
    image: img1,
    city: "Barcelona",
    country: "Spain",
  },
  {
    image: img2,
    city: "Madrid",
    country: "Spain",
  },
  {
    image: img3,
    city: "Los Angeles",
    country: "USA",
  },
  {
    image: img4,
    city: "New York",
    country: "USA",
  },
  {
    image: img5,
    city: "London",
    country: "United Kingdom",
  },
  {
    image: img6,
    city: "Lisbon",
    country: "Portugal",
  },
  {
    image: img7,
    city: "Rome",
    country: "Italy",
  },
  {
    image: img8,
    city: "Athens",
    country: "Greece",
  },
  {
    image: img9,
    city: "Paris",
    country: "France",
  },
];

export default arr;
