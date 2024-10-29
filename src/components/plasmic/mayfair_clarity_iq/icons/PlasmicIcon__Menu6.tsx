// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Menu6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Menu6Icon(props: Menu6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6 6.857a.857.857 0 100-1.714.857.857 0 000 1.714zm-3.857 0a.857.857 0 100-1.714.857.857 0 000 1.714zm7.714 0a.857.857 0 100-1.714.857.857 0 000 1.714z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.029"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Menu6Icon;
/* prettier-ignore-end */
