// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group21Icon(props: Group21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 128 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"8"} cy={"8"} r={"8"} fill={"currentColor"}></circle>

      <circle
        cx={"45"}
        cy={"8"}
        r={"8"}
        fill={"currentColor"}
        fillOpacity={".4"}
      ></circle>

      <circle
        cx={"83"}
        cy={"8"}
        r={"8"}
        fill={"currentColor"}
        fillOpacity={".4"}
      ></circle>

      <circle
        cx={"120"}
        cy={"8"}
        r={"8"}
        fill={"currentColor"}
        fillOpacity={".4"}
      ></circle>
    </svg>
  );
}

export default Group21Icon;
/* prettier-ignore-end */
