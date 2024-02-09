import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowIcon(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M6 15l5-5-5-5 1-2 7 7-7 7-1-2z" fill="#000" />
        </Svg>
    )
}

export default ArrowIcon
