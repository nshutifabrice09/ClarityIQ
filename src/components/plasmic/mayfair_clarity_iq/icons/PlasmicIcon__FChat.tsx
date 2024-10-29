// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FChatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FChatIcon(props: FChatIconProps) {
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
          "M19.714 3.429H4.286c-.947 0-1.715.767-1.715 1.714v9.428c0 .948.768 1.715 1.715 1.715H8.57L12 20.57l3.429-4.285h4.285c.947 0 1.715-.767 1.715-1.715V5.143c0-.947-.768-1.714-1.715-1.714zm-12 4.285h8.572M7.714 12h5.143"
        }
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default FChatIcon;
/* prettier-ignore-end */
