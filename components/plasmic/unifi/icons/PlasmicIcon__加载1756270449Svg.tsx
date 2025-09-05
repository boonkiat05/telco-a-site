/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 加载1756270449SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 加载1756270449SvgIcon(props: 加载1756270449SvgIconProps) {
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

      <g
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"2"}
        data-swindex={"0"}
      >
        <path
          strokeDasharray={"60"}
          strokeDashoffset={"60"}
          strokeOpacity={".3"}
          d={"M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z"}
        >
          <animate
            fill={"freeze"}
            attributeName={"stroke-dashoffset"}
            dur={"1.3s"}
            values={"60;0"}
          ></animate>
        </path>

        <path
          strokeDasharray={"15"}
          strokeDashoffset={"15"}
          d={"M12 3a9 9 0 0 1 9 9"}
        >
          <animate
            fill={"freeze"}
            attributeName={"stroke-dashoffset"}
            dur={"0.3s"}
            values={"15;0"}
          ></animate>

          <animateTransform
            attributeName={"transform"}
            dur={"1.5s"}
            repeatCount={"indefinite"}
            type={"rotate"}
            values={"0 12 12;360 12 12"}
          ></animateTransform>
        </path>
      </g>
    </svg>
  );
}

export default 加载1756270449SvgIcon;
/* prettier-ignore-end */
