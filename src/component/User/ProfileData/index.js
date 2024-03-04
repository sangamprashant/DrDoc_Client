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

export {  TableRow };
