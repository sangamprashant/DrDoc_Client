import { Clock, Secure } from "./Svgs";

const menuItems = [
  { label: "Orders", path: "/orders" },
  { label: "Products", path: "/products" },
  { label: "Customers", path: "/customers" },
];

const HeroData = {
  Heading: {
    first: "Dr",
    second: "Doc",
  },
  paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
  blanditiis fugit quas beatae animi omnis eos accusantium tempora,
  quos itaque, cum quis labore libero. Ab, vel nostrum! Atque,
  possimus quasi.`,
  image: "https://github.com/sangamprashant.png",
};
const OfferData = [
  {
    logo: <Secure height="50" stroke="#264653"/>,
    label: "offer1",
    detail: "Brief explanation about the offer. Lorem ipsum dolor sit amet.",
  },
  {
    logo: <Clock height="50" stroke="#264653"/>,
    label: "offer2",
    detail: "Brief explanation about the offer. Lorem ipsum dolor sit amet.",
  },
];

const PageNotFoundData = {
  heading: "Page Not Found",
  message: "Please check the url and go to home",
  button: "Go to Home",
};

export { menuItems, HeroData, OfferData, PageNotFoundData };
