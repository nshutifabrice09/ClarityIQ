// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group22Icon(props: Group22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.14 16.862h6.735c0 2.156-1.777 3.905-3.968 3.905H0V5.059C0 2.265 2.302 0 5.14 0v16.862z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group22Icon;
/* prettier-ignore-end */
