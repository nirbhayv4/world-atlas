import footerContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    FaGithub: <FaGithub />,
    FaLinkedin: <FaLinkedin />,
  };
  return (
    <div className="bg-[#202020] sm:h-[76px]">
      <div className="max-w-7xl m-auto flex flex-col gap-3 sm:flex-row justify-between items-center px-3 py-5">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div key={index} className="flex gap-2">
              <div className="flex items-center text-xl text-blue-700">
                {footerIcon[icon]}
              </div>
              <div>
                <p className="text-sm">{title}</p>
                <p className="text-xs text-gray-500">{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
