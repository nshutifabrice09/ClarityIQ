// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Menu51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Menu51Icon(props: Menu51IconProps) {
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
          "M12 13.714a1.714 1.714 0 100-3.428 1.714 1.714 0 000 3.428zm-7.714 0a1.714 1.714 0 100-3.428 1.714 1.714 0 000 3.428zm15.428 0a1.714 1.714 0 100-3.428 1.714 1.714 0 000 3.428z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.057"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Menu51Icon;
/* prettier-ignore-end */
