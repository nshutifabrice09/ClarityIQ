// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group9Icon(props: Group9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.056 25.188H0V0h4.056v25.188zm14.052-21.54H1.211V0h16.897v3.648zm-.564 10.715H1.21v-3.685h16.333v3.684zm.564 10.825H1.211v-3.685h16.897v3.685z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
