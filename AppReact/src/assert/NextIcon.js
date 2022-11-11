import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const NextIcon = (props) => (
  <Svg width={props.size} height={props.size + 5} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-9-6h24v24H-9z" />
      <Path
        d="M.31.71a.996.996 0 0 0 0 1.41L4.19 6 .31 9.88a.996.996 0 1 0 1.41 1.41L6.31 6.7a.996.996 0 0 0 0-1.41L1.72.7C1.34.32.7.32.31.71Z"
        fill='#fff'
      />
    </G>
  </Svg>
)

export default NextIcon

