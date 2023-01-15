import Switch from "react-switch";
import { useTheme } from "next-themes";
import { TbSun } from "react-icons/tb";
import { IoMoonOutline } from "react-icons/io5";

import * as S from "./styles";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <S.Container className="theme-switcher-container">
      <TbSun size={20} color="#fff" />
      <Switch
        onChange={handleSwitchTheme}
        checked={theme == "dark" ? true : false}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor="#3f3f3f"
        offColor="#fff"
        onHandleColor="#fff"
        offHandleColor="#3f3f3f"
        height={16}
        width={40}
        handleDiameter={12}
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      />
      <IoMoonOutline
        size={20}
        color="#fff"
        style={{
          transform: "rotate(270deg)",
        }}
      />
    </S.Container>
  );
};

export { ThemeSwitcher };
