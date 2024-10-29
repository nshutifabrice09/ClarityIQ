// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterListIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterListIcon(props: FilterListIconProps) {
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
          "M6.667 12h2.666v-1.333H6.667V12zM2 4v1.333h12V4H2zm2 4.667h8V7.333H4v1.334z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FilterListIcon;
/* prettier-ignore-end */
