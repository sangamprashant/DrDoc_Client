import { Link } from "react-router-dom";
import { EditIcon, FileUploadIcon } from "../../ReactIcons";
import { SettingOutlined } from "@ant-design/icons";
import { Icons } from "../../../assets/icons";
// Define TableRow component
const TableRow = ({ title, content }) => {
  return (
    <>
      {content ? (
        <tr>
          <td>
            <b>{title}:</b>
          </td>
          <td>{content}</td>
        </tr>
      ) : null}
    </>
  );
};

const MenuItems = [
  {
    label: <Link to="/edit" className=" text-decoration-none">Edit</Link>,
    key: "edit",
    icon: <EditIcon />,
  },
  {
    label: <Link to="/upload" className=" text-decoration-none">Upload Reports</Link>,
    key: "upload",
    icon: <FileUploadIcon />,
  },
  {

    label: "Setting",
    key: "Setting",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Switch account ",
        children: [
          {
            label: (
              <Link to="/accountSwitch?query=user" className=" text-decoration-none">
                <FileUploadIcon /> User 
              </Link>
            ),
            key: "user",
          },
          {
            label: (
              <Link to="/accountSwitch?query=doctor" className=" text-decoration-none">
                {Icons.LocalHospitalIcon} Doctor
              </Link>
            ),
            key: "doctor",
          },
          {
            label: (
              <Link to="/accountSwitch?query=delivery" className=" text-decoration-none">
               {Icons.LocalShippingIcon} Delivery
              </Link>
            ),
            key: "delivery",
          },
          {
            label: (
              <Link to="/accountSwitch?query=seller" className=" text-decoration-none">
                {Icons.StoreIcon} Seller
              </Link>
            ),
            key: "seller",
          },
        ],
      },
    ],
  },
];

export { MenuItems, TableRow };
