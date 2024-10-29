// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Menu52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Menu52Icon(props: Menu52IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 44"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.8 25.3a3.3 3.3 0 100-6.6 3.3 3.3 0 000 6.6zm13.2 0a3.3 3.3 0 100-6.6 3.3 3.3 0 000 6.6zm13.2 0a3.3 3.3 0 100-6.6 3.3 3.3 0 000 6.6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.64"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Menu52Icon;
/* prettier-ignore-end */
