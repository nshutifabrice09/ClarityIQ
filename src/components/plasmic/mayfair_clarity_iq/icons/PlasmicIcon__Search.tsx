// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchIcon(props: SearchIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.143 17.143l-2.857-2.857m-5.715 0a5.714 5.714 0 100-11.429 5.714 5.714 0 000 11.429z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.714"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M5.714 8.571a2.857 2.857 0 012.857-2.857"}
        stroke={"currentColor"}
        strokeWidth={"1.714"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default SearchIcon;
/* prettier-ignore-end */
