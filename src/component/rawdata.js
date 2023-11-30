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
  count: [
    {
      label: "one",
      data: "123",
    },
    {
      label: "one",
      data: "123",
    },
    {
      label: "one",
      data: "123",
    },
    {
      label: "one",
      data: "123",
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
  heading: "Our app DrDoc",
  image: "https://thewatchdogonline.com/wp-content/uploads/2021/01/image.jpeg",
  details: [
    {
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dignissimos rem itaque ipsa eius dolorum commodi. Amet sunt labore eum sequi quo rem autem consequuntur nisi suscipit, consequaturadipisci. Tempore.",
    },
    {
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dignissimos rem itaque ipsa eius dolorum commodi. Amet sunt labore eum sequi quo rem autem consequuntur nisi suscipit, consequaturadipisci. Tempore.",
    },
    {
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dignissimos rem itaque ipsa eius dolorum commodi. Amet sunt labore eum sequi quo rem autem consequuntur nisi suscipit, consequaturadipisci. Tempore.",
    },
    {
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dignissimos rem itaque ipsa eius dolorum commodi. Amet sunt labore eum sequi quo rem autem consequuntur nisi suscipit, consequaturadipisci. Tempore.",
    },
    {
      data: `Lorem ipsum, dolor sit amet <strong>consectetur</strong> adipisicing elit. Tempora dignissimos rem itaque ipsa eius dolorum commodi. Amet sunt labore eum sequi quo rem autem consequuntur nisi suscipit, consequaturadipisci. Tempore.`,
    },
  ],
};
const FooterData = {
  About: {
    title: "About Us",
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

export {
  menuItems,
  HeroData,
  OfferData,
  PageNotFoundData,
  OurAppData,
  FooterData,
};
