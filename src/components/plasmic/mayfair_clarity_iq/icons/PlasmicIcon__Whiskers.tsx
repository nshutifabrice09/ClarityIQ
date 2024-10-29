// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WhiskersIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WhiskersIcon(props: WhiskersIconProps) {
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
        d={"M12 21.429A9.429 9.429 0 1012 2.57a9.429 9.429 0 000 18.858z"}
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={
          "M8.143 12a1.286 1.286 0 100-2.571 1.286 1.286 0 000 2.571zm7.714 0a1.286 1.286 0 100-2.572 1.286 1.286 0 000 2.572zM5.143 16.286h4.714a1.285 1.285 0 100-2.572H7.714a2.736 2.736 0 00-2.571 2.572zm13.714 0h-4.714a1.285 1.285 0 110-2.572h2.143a2.737 2.737 0 012.571 2.572z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WhiskersIcon;
/* prettier-ignore-end */
