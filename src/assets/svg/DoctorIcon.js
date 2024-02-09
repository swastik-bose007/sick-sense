import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DoctorIcon(props) {
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
                d="M15.833 11.667a2.5 2.5 0 110-5.001 2.5 2.5 0 010 5zm-9.166.833a5.006 5.006 0 01-5-5v-5a.833.833 0 01.833-.833h1.667a.833.833 0 110 1.666h-.834V7.5A3.333 3.333 0 0010 7.5V3.333h-.834a.833.833 0 110-1.666h1.667a.833.833 0 01.833.833v5a5.005 5.005 0 01-5 5z"
                fill="#ADD0CA"
            />
            <Path
                d="M15.834 11.667a2.472 2.472 0 01-.834-.154v1.404a3.75 3.75 0 01-7.5 0v-.492c-.55.1-1.115.1-1.667 0v.492a5.416 5.416 0 1010.834 0v-1.404a2.47 2.47 0 01-.834.154z"
                fill="#ADD0CA"
            />
        </Svg>
    )
}

export default DoctorIcon
