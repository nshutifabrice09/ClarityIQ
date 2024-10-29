// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group31Icon(props: Group31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 515 284"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 1h515M0 71.5h515M0 142h515M0 212.5h515M0 283h515"}
        stroke={"currentColor"}
        strokeDasharray={"6"}
      ></path>
    </svg>
  );
}

export default Group31Icon;
/* prettier-ignore-end */
