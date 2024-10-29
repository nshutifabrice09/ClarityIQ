// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MailIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MailIcon(props: MailIconProps) {
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
        d={"M2.065 3.176L8 8.571l5.934-5.394"}
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M13.143 2.857H2.857c-.631 0-1.143.512-1.143 1.143v8c0 .631.512 1.143 1.143 1.143h10.286c.631 0 1.143-.512 1.143-1.143V4c0-.631-.512-1.143-1.143-1.143z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.371"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default MailIcon;
/* prettier-ignore-end */
