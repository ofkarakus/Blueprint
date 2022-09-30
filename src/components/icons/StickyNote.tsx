import { SVGProps } from "react";

const SvgStickyNote = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 5v22h15.406l.313-.281 6-6 .281-.313V5Zm2 2h18v12h-6v6H7Zm14 14h2.563L21 23.563Z" />
  </svg>
);

export default SvgStickyNote;
