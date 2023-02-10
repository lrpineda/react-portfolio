import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Props = {
  dark: boolean;
  title: string;
  setDark: any;
};

export default function SubMenu({ dark, title, setDark }: Props) {
  const { ref, inView } = useInView({ threshold: 0.7 });
  if (inView && dark) {
    setDark(true);
  }
  if (inView && !dark) {
    setDark(false);
  }
  return (
    <div
      ref={ref}
      className={`${dark ? "bg-[#232425] text-white" : "bg-slate-50"
        } md:h-screen  w-screen snap-center flex justify-center md:items-end  py-16 md:py-0`}
    >
      {/* <motion.img
        id={title}
        src={require(`../assets/sub-titles/${title}.svg`)}
        alt={title+' page'}
        className="w-96 md:w-full max-w-2xl md:max-w-7xl "
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        
      /> */}
      <motion.svg
        id={title}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1508 179"
        className="w-96 md:w-full max-w-2xl md:max-w-7xl py-9"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title === "about" && (
          <>
            <g filter="url(#filter0_bi_96_85)">
              <path d="M123.725 175H166.6L108.29 3.49999H58.31L0 175H42.875L51.45 148.05H115.15L123.725 175ZM63.21 111.3L83.3 48.335L103.39 111.3H63.21ZM334.103 86.065C343.413 77.98 349.048 66.71 349.048 52.5C349.048 22.855 324.793 3.49999 294.903 3.49999H227.773V175H299.803C330.428 175 355.173 155.155 355.173 124.775C355.173 107.38 346.843 94.15 334.103 86.065ZM294.903 40.25C303.968 40.25 309.848 46.62 309.848 55.44C309.848 64.26 303.723 70.63 294.903 70.63H266.973V40.25H294.903ZM299.803 138.25H266.973V105.42H299.803C309.603 105.42 315.973 112.28 315.973 121.835C315.973 131.39 309.603 138.25 299.803 138.25ZM503.058 178.43C552.303 178.43 592.238 139.72 592.238 89.25C592.238 38.78 552.303 0.0699887 503.058 0.0699887C453.813 0.0699887 413.878 38.78 413.878 89.25C413.878 139.72 453.813 178.43 503.058 178.43ZM503.058 140.21C475.128 140.21 453.078 119.875 453.078 89.25C453.078 58.625 475.128 38.29 503.058 38.29C530.988 38.29 553.038 58.625 553.038 89.25C553.038 119.875 530.988 140.21 503.058 140.21ZM724.588 178.43C762.318 178.43 790.738 156.38 790.738 119.63V3.49999H751.538V116.2C751.538 129.185 745.413 140.21 724.588 140.21C703.763 140.21 697.638 129.185 697.638 116.2V3.49999H658.438V119.63C658.438 156.38 686.858 178.43 724.588 178.43ZM980.708 3.49999H853.308V41.23H897.408V175H936.608V41.23H980.708V3.49999ZM1323.72 3.49999H1284.52L1237.97 79.695L1191.42 3.49999H1152.22V175H1191.42V75.285L1235.76 148.05H1240.17L1284.52 75.285V175H1323.72V3.49999ZM1438.94 137.27V106.89H1500.19V69.65H1438.94V41.23H1506.32V3.49999H1399.74V175H1507.54V137.27H1438.94Z" fill="white" />
            </g>
            <defs>
              <filter id="filter0_bi_96_85" x="-4" y="-3.92993" width="1515.54" height="186.36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_96_85" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_96_85" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="11" dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_96_85" />
              </filter>
            </defs>
          </>
        )}

        {title === "projects" && (
          <>
            <g filter="url(#filter0_bi_116_20)">
              <path d="M65.625 3.49999H0.700001V175H39.9V121.1H65.625C99.435 121.1 125.65 94.885 125.65 62.3C125.65 29.715 99.435 3.49999 65.625 3.49999ZM65.625 84.35H39.9V40.25H65.625C77.63 40.25 86.45 49.805 86.45 62.3C86.45 74.795 77.63 84.35 65.625 84.35ZM281.922 175H324.062L287.557 112.035C306.422 102.48 319.162 83.37 319.162 62.3C319.162 29.715 292.947 3.49999 260.362 3.49999H191.762V175H230.962V118.65H249.582L281.922 175ZM230.962 40.25H260.362C271.142 40.25 279.962 49.805 279.962 62.3C279.962 74.795 271.142 84.35 260.362 84.35H230.962V40.25ZM468.482 178.43C517.727 178.43 557.662 139.72 557.662 89.25C557.662 38.78 517.727 0.0699887 468.482 0.0699887C419.237 0.0699887 379.302 38.78 379.302 89.25C379.302 139.72 419.237 178.43 468.482 178.43ZM468.482 140.21C440.552 140.21 418.502 119.875 418.502 89.25C418.502 58.625 440.552 38.29 468.482 38.29C496.412 38.29 518.462 58.625 518.462 89.25C518.462 119.875 496.412 140.21 468.482 140.21ZM659.771 178.43C695.051 178.43 721.511 157.605 721.511 119.875V3.49999H682.311V119.875C682.311 130.41 677.166 140.21 660.016 140.21C646.786 140.21 641.151 135.065 635.761 125.51L601.706 145.11C612.976 166.915 632.576 178.43 659.771 178.43ZM835.49 137.27V106.89H896.74V69.65H835.49V41.23H902.865V3.49999H796.29V175H904.09V137.27H835.49ZM1053.39 178.43C1084.75 178.43 1112.19 162.995 1126.89 138.74L1093.08 119.14C1085.73 132.37 1070.79 140.21 1053.39 140.21C1023.01 140.21 1003.41 119.875 1003.41 89.25C1003.41 58.625 1023.01 38.29 1053.39 38.29C1070.79 38.29 1085.49 46.13 1093.08 59.36L1126.89 39.76C1111.95 15.505 1084.51 0.0699887 1053.39 0.0699887C1001.7 0.0699887 964.21 38.78 964.21 89.25C964.21 139.72 1001.7 178.43 1053.39 178.43ZM1306.96 3.49999H1179.56V41.23H1223.66V175H1262.86V41.23H1306.96V3.49999ZM1425.91 178.43C1463.15 178.43 1489.61 158.83 1489.61 125.755C1489.61 89.495 1460.46 80.43 1434.49 72.59C1407.78 64.505 1403.62 59.115 1403.62 51.275C1403.62 44.415 1409.74 38.29 1421.99 38.29C1437.67 38.29 1445.76 45.885 1451.64 58.135L1484.71 38.78C1472.22 13.545 1450.17 0.0699887 1421.99 0.0699887C1392.35 0.0699887 1364.42 19.18 1364.42 52.255C1364.42 85.085 1389.41 97.335 1414.89 104.44C1440.61 111.545 1450.41 115.71 1450.41 126.245C1450.41 132.86 1445.76 140.21 1427.14 140.21C1407.78 140.21 1397.25 130.655 1391.12 116.445L1357.31 136.045C1366.87 161.28 1389.9 178.43 1425.91 178.43Z" fill="#3A3A3A" />
            </g>
            <defs>
              <filter id="filter0_bi_116_20" x="-3.30005" y="-3.93018" width="1496.91" height="186.36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_116_20" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_116_20" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="11" dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_116_20" />
              </filter>
            </defs>
          </>
        )}


      </motion.svg>

    </div>
  );
}
