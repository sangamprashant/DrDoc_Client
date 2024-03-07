import { Bag, Clock, Mobile, Secure } from "./Svgs";
import {
  logoSide,
  google,
  apple,
  home,
  mobileImage,
  global,
  mobileDownload,
} from "../assets";

const theme = "#503f9d";
const HeroData = {
  logoSide: logoSide,
  Heading: {
    first: "Dr",
    second: "Doc",
  },
  paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
  blanditiis fugit quas beatae animi omnis eos accusantium tempora,
  quos itaque, cum quis labore libero. Ab, vel nostrum! Atque,
  possimus quasi.`,
  image: home,
  icon: <Mobile height="20" />,
  mobile: [
    {
      logo: google,
    },
    {
      logo: apple,
    },
  ],
};
const OfferData = [
  {
    logo: <Secure height="50" stroke="#264653" />,
    label: "offer1",
    detail: "Brief explanation about the offer. Lorem ipsum dolor sit amet.",
  },
  {
    logo: <Clock height="50" stroke="#264653" />,
    label: "offer2",
    detail: "Brief explanation about the offer. Lorem ipsum dolor sit amet.",
  },
];
const OurAppData = {
  image: mobileImage,
  details: [
    {
      bg: theme,
      icon: <Bag height="30" stroke="white" />,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      title: "secure",
    },
    {
      bg: "gold",
      icon: <Bag height="30" stroke="white" />,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      title: "secure",
    },
    {
      bg: "maroon",
      icon: <Bag height="30" stroke="white" />,
      title: "secure",
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      bg: "red",
      icon: <Bag height="30" stroke="white" />,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      title: "secure",
    },
  ],
  download: {
    link: "https://github.com/sangamprashant",
    logo: <Bag height="30" />,
    content: "Download",
  },
};
const FooterData = {
  About: {
    title: "DrDoc",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  QuickLink: {
    title: "Quick Links",
    links: [
      {
        link: "/",
        lable: "Home",
      },
      {
        link: "/about",
        lable: "About",
      },
      {
        link: "/contact",
        lable: "Contact",
      },
    ],
  },
  Contact: {
    title: "Contact Us",
    data: [
      {
        label: "123 Main Street",
      },
      {
        label: "City, State 12345",
      },
      {
        label: "Email: info@example.com",
      },
      {
        label: "Phone: (123) 456-7890",
      },
    ],
  },
};
const PageNotFoundData = {
  heading: "Page Not Found",
  message: "Please check the url and go to home",
  button: "Go to Home",
};
const CommunityData = {
  image: global,
  heading: [
    { sp: "Join our ", st: "global community" },
    {
      sp: " and get access to a better way to ",
      st: "manage your medical records",
    },
  ],
  card: [
    {
      count: "10K+",
      label: "USER",
      color: "#e76f51",
    },
    {
      count: "100K+",
      label: "PRODUCTS",
      color: "#287271",
    },
    {
      count: "25K+",
      label: "INSTANCES",
      color: "maroon",
    },
  ],
};
const ContactInfo = [
  {
    title: "Contact Information",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet esse quidem laudantium quae",
  },
  {
    title: "Address",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet",
    className: "default-text",
  },
  { title: "Phone", content: "Lorem ipsum, dolor", className: "default-text" },
  {
    title: "Email",
    content: "Lorem ipsum, dolor sit amet",
    className: "default-text",
  },
];
const DownloadAppData = {
  image: mobileDownload,
};

export {
  theme,
  HeroData,
  OfferData,
  PageNotFoundData,
  OurAppData,
  FooterData,
  CommunityData,
  ContactInfo,
  DownloadAppData,
};
