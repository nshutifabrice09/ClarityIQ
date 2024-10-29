// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame3Icon(props: Frame3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 102"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 53.111l28.286 13.333 28.285-6.777L85.857 3l28.286 47.889 28.286-12.222 28.285 26.666L199 64.223"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Frame3Icon;
/* prettier-ignore-end */
