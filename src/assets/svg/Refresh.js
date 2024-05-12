import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Refresh(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.5 3.333V10M2.5 10v6.667M17.5 10A7.5 7.5 0 004.603 4.792M2.5 10a7.5 7.5 0 0012.708 5.397"
                stroke="#333"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Refresh
