import React from "react";

function LoadingSpinner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{
        margin: "auto",
        background: "0 0"
      }}
      width={100}
      height={100}
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      display='block'
      {...props}
    >
      <g transform='matrix(.7 0 0 .7 50 50)'>
        <circle r={50} fill='#82bbe4' />
        <circle cy={-28} r={15} fill='#a3d9ef'>
          <animateTransform
            attributeName='transform'
            type='rotate'
            dur='0.9345794392523364s'
            repeatCount='indefinite'
            keyTimes='0;1'
            values='0 0 0;360 0 0'
          />
        </circle>
      </g>
    </svg>
  );
}

export default LoadingSpinner;
