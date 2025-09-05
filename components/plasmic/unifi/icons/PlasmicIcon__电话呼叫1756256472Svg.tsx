/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 电话呼叫1756256472SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 电话呼叫1756256472SvgIcon(
  props: 电话呼叫1756256472SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"#fff"}
        strokeDasharray={"64"}
        strokeDashoffset={"64"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M8 3c.5 0 2.5 4.5 2.5 5 0 1-1.5 2-2 3s.5 2 1.5 3c.394.394 2 2 3 1.5s2-2 3-2c.5 0 5 2 5 2.5 0 2-1.5 3.5-3 4s-2.5.5-4.5 0-3.5-1-6-3.5-3-4-3.5-6-.5-3 0-4.5 2-3 4-3"
        }
        data-swindex={"0"}
      >
        <animate
          fill={"freeze"}
          attributeName={"stroke-dashoffset"}
          dur={"0.6s"}
          values={"64;0"}
        ></animate>

        <animateTransform
          attributeName={"transform"}
          begin={"0.6s;a.begin+2.6s"}
          dur={"0.5s"}
          type={"rotate"}
          values={
            "0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"
          }
        ></animateTransform>
      </path>
    </svg>
  );
}

export default 电话呼叫1756256472SvgIcon;
/* prettier-ignore-end */
