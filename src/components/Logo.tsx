import LogoIcon from "@/assets/svgs/LogoIcon";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="text-2xl font-bold flex items-center gap-1 text-main fill-main hover:text-main-light hover:fill-main-light"
    >
      <LogoIcon />
      DevBlog
    </Link>
  );
}
