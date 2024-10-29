// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group19Icon(props: Group19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.63 1.13c-.037.412-.292 1.81-1.948 2.604l-.08.037c-.397.18-.874.31-1.42.386l-.124-.094A5.32 5.32 0 010 3.297C0 1.391 1.165.628 1.725.376 2.25.134 2.734 0 3.083 0c.208 0 .288.047.306.061.135.094.295.488.24 1.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group19Icon;
/* prettier-ignore-end */
