// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Search2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Search2Icon(props: Search2IconProps) {
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
          "M13.714 13.714L11.43 11.43m-4.573-.001a4.571 4.571 0 100-9.143 4.571 4.571 0 000 9.143z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M4.571 6.857a2.286 2.286 0 012.286-2.286"}
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Search2Icon;
/* prettier-ignore-end */
