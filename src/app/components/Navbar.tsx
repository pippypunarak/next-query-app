import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  { label: "Recent", key: "Recent" },
  { label: "Top", key: "Top" },
  { label: "Chill", key: "Chill" },
  { label: "R&B", key: "R&B" },
  { label: "Festival", key: "Festival" },
];

const Navbar: React.FC = () => {
  return (
    <Menu
      mode="horizontal"
      items={items}
      className="flex flex-row justify-center bg-transparent"
      theme="dark"
    />
  );
};

export default Navbar;
