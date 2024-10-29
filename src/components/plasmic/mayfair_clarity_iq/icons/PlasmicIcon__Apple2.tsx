// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Apple2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Apple2Icon(props: Apple2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.429 13.874c-.352.778-.52 1.125-.973 1.814-.63.96-1.52 2.157-2.623 2.167-.98.01-1.232-.637-2.562-.63-1.329.007-1.607.641-2.587.632-1.103-.01-1.945-1.09-2.577-2.051-1.764-2.687-1.948-5.84-.86-7.516.774-1.191 1.994-1.888 3.142-1.888 1.169 0 1.903.64 2.87.64.937 0 1.508-.64 2.859-.64 1.021 0 2.103.555 2.874 1.516-2.526 1.384-2.116 4.99.437 5.956z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.714"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={
          "M12.214 3.893c.465-.596.817-1.437.689-2.296-.759.052-1.644.534-2.162 1.163-.47.57-.858 1.416-.707 2.24.827.025 1.683-.47 2.18-1.107z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Apple2Icon;
/* prettier-ignore-end */
