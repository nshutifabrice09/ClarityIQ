// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group27Icon(props: Group27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 33"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 12.75C0 5.708 5.801 0 12.957 0v20.25C12.957 27.292 7.157 33 0 33V12.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group27Icon;
/* prettier-ignore-end */
