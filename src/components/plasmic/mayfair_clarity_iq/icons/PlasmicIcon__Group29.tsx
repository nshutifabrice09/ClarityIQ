// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group29Icon(props: Group29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 173 83"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 0h172.38l-25.857 82.68H25.857L0 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group29Icon;
/* prettier-ignore-end */
