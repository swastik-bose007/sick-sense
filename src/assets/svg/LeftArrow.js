import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeftArrow(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.5 12a.75.75 0 00-.75-.75H4.06l4.72-4.719A.75.75 0 007.72 5.469l-6 6a.75.75 0 000 1.062l6 6A.752.752 0 009 18a.751.751 0 00-.22-.531L4.06 12.75H21.75a.75.75 0 00.75-.75z"
                fill="#1F2022"
            />
        </Svg>
    )
}

export default LeftArrow
