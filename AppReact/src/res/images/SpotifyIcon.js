import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SpotifyIcon({color, size}) {
  const vBox = `0 0 ${size * 2} ${size * 2}`;
  return (
    <Svg
      width={size}
      height={size}
      viewBox={vBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24ZM10.315 18.5c7.385-2.241 20.145-1.819 27.882 2.775a2.244 2.244 0 1 0 2.29-3.86c-8.905-5.287-22.998-5.784-31.476-3.21a2.246 2.246 0 0 0 1.304 4.295Zm25.054 10.196a1.871 1.871 0 0 0 1.958-3.188c-7.407-4.553-18.243-5.834-26.96-3.189a1.874 1.874 0 0 0-1.248 2.334 1.874 1.874 0 0 0 2.335 1.247c7.63-2.317 17.466-1.168 23.915 2.796Zm-.362 5.92a1.495 1.495 0 0 1-2.057.497c-5.636-3.444-12.73-4.222-21.084-2.314a1.495 1.495 0 1 1-.666-2.916c9.142-2.09 16.984-1.19 23.31 2.675.706.43.928 1.352.497 2.057Z"
        fill={color}
      />
    </Svg>
  );
}

export default SpotifyIcon;
