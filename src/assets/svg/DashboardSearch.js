import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function DashboardSearch(props) {
    return (
        <Svg
            width={34}
            height={34}
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_187_175)">
                <Path
                    d="M25.544 23.54l6.068 6.067-2.005 2.005-6.066-6.068a12.693 12.693 0 01-7.957 2.79c-7.038 0-12.75-5.713-12.75-12.75 0-7.039 5.712-12.75 12.75-12.75s12.75 5.711 12.75 12.75c.004 2.892-.98 5.7-2.79 7.957zm-2.842-1.05a9.884 9.884 0 002.798-6.907 9.914 9.914 0 00-9.916-9.916 9.913 9.913 0 00-9.917 9.916 9.914 9.914 0 009.917 9.917c2.578.004 5.057-1 6.906-2.798l.212-.212z"
                    fill="#F5F5F5"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_187_175">
                    <Path fill="#fff" d="M0 0H34V34H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default DashboardSearch
