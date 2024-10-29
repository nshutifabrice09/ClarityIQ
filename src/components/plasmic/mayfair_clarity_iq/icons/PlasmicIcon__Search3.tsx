// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Search3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Search3Icon(props: Search3IconProps) {
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
        d={
          "M20.571 20.571l-3.428-3.428m-6.857 0a6.857 6.857 0 100-13.715 6.857 6.857 0 000 13.715z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M6.857 10.286a3.429 3.429 0 013.429-3.429"}
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Search3Icon;
/* prettier-ignore-end */
