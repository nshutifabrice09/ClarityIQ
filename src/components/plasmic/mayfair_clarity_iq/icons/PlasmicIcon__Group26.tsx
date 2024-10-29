// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group26Icon(props: Group26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.622 15c4.21 0 7.622-3.358 7.622-7.5 0-4.142-3.412-7.5-7.622-7.5S0 3.358 0 7.5C0 11.642 3.413 15 7.622 15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group26Icon;
/* prettier-ignore-end */
