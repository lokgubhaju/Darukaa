import React from 'react'
const CloseIcon = ({ ...props }) => {

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="Close-Icon"
            {...props}
        >
            <title id="Close-Icon">Close</title>
            <path
                d="M5.21967 17.7197C4.92678 18.0126 4.92678 18.4874 5.21967 18.7803C5.51256 19.0732 5.98744 19.0732 6.28033 18.7803L12 13.0607L17.7197 18.7803C18.0126 19.0732 18.4874 19.0732 18.7803 18.7803C19.0732 18.4874 19.0732 18.0126 18.7803 17.7197L13.0607 12L18.7803 6.28033C19.0732 5.98744 19.0732 5.51256 18.7803 5.21967C18.4874 4.92678 18.0126 4.92678 17.7197 5.21967L12 10.9393L6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L10.9393 12L5.21967 17.7197Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default CloseIcon
