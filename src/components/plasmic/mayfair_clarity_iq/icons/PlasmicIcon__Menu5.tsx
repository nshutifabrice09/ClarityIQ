// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Menu5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Menu5Icon(props: Menu5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 9.143a1.143 1.143 0 100-2.286 1.143 1.143 0 000 2.286zm-5.143 0a1.143 1.143 0 100-2.286 1.143 1.143 0 000 2.286zm10.286 0a1.143 1.143 0 100-2.286 1.143 1.143 0 000 2.286z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Menu5Icon;
/* prettier-ignore-end */
