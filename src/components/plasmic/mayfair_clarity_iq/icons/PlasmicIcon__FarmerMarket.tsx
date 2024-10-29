// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FarmerMarketIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FarmerMarketIcon(props: FarmerMarketIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M8.571 21.429a1.714 1.714 0 100-3.429 1.714 1.714 0 000 3.429z"}
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M6.857 19.714H3.43V15.43h18v6"}
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M10.286 19.714h11.143"}
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M5.143 12.857v-6m13.714 6v-6m1.714 0H3.43L5.143 3.43h13.714l1.714 3.428z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={
          "M8.571 3.429l-.857 3.428M12 3.429v3.428m3.429-3.428l.857 3.428m-.857 2.572H12v3.428h3.429V9.43zm-3.429 0H8.571v3.428H12V9.43z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default FarmerMarketIcon;
/* prettier-ignore-end */
