/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 配送包裹1756789455Svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 配送包裹1756789455Svg2Icon(
  props: 配送包裹1756789455Svg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m29.482 8.624-10-5.5a1 1 0 0 0-.964 0l-10 5.5a1 1 0 0 0 0 1.752L18 15.591V26.31l-3.036-1.67L14 26.391l4.518 2.485a1 1 0 0 0 .964 0l10-5.5A1 1 0 0 0 30 22.5v-13a1 1 0 0 0-.518-.876M19 5.142 26.925 9.5 19 13.858 11.075 9.5Zm9 16.767-8 4.4V15.59l8-4.4Z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={"M10 16H2v-2h8zm2 8H4v-2h8zm2-4H6v-2h8z"}
      ></path>
    </svg>
  );
}

export default 配送包裹1756789455Svg2Icon;
/* prettier-ignore-end */
