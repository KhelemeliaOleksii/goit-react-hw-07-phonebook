import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;


export default function Loader() {
    const override = css`
        margin: 0 auto;
        border-color: grey;
        `;
    return (

        <ClipLoader loading={true} css={override} size={15} />
    )
}