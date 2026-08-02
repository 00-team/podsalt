import { Component } from 'solid-js'

export const ResetIcon: Component = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        width={25}
        height={25}
    >
        <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
        <path d='M3 3v5h5' />
    </svg>
)

export const SearchIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
    >
        <g fill='currentColor' stroke-linecap='round' stroke-linejoin='round'>
            <line
                x1='22'
                y1='22'
                x2='15.656'
                y2='15.656'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
            ></line>
            <circle
                cx='10'
                cy='10'
                r='8'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
            ></circle>
        </g>
    </svg>
)

export const CloseCircleIcon = () => (
    <svg
        fill='none'
        stroke='currentColor'
        class='icon icon-close'
        viewBox='0 0 18 18'
    >
        <circle cx='9' cy='9' r='8.5' stroke-opacity='.2'></circle>
        <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M11.83 11.83 6.172 6.17M6.229 11.885l5.544-5.77'
        ></path>
    </svg>
)

export const EyeIcon = () => (
    <svg
        stroke='currentColor'
        fill='currentColor'
        stroke-width='0'
        viewBox='0 0 512 512'
        height='25'
        width='25'
        xmlns='http://www.w3.org/2000/svg'
    >
        <circle cx='256' cy='256' r='64'></circle>
        <path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z'></path>
    </svg>
)
export const EyeShutIcon = () => (
    <svg
        stroke='currentColor'
        fill='currentColor'
        stroke-width='0'
        viewBox='0 0 512 512'
        height='25'
        width='25'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448zM248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69 64.11 64.11 0 0 0 53.49 53.49 2 2 0 0 0 1.69-3.39zm16-119.7L315.87 248a2 2 0 0 0 3.4-1.69 64.13 64.13 0 0 0-53.55-53.55 2 2 0 0 0-1.72 3.39z'></path>
        <path d='M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 0 0-71.82 11.79 4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05 96 96 0 0 1 116 116 4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24 343.81 343.81 0 0 0 67.24-77.4zM256 352a96 96 0 0 1-93.3-118.63 4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0 0 72.64-11.55 4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352z'></path>
    </svg>
)

export const CartIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>
        <g
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke='currentColor'
            stroke-width='2'
        >
            <circle cx='8' cy='28' r='3'></circle>
            <circle cx='27' cy='28' r='3'></circle>
            <path d='M5.706 7H30l-2.492 11.629A3 3 0 0 1 24.575 21H9.715a3 3 0 0 1-2.985-2.701L5 1H1'></path>
        </g>
    </svg>
)

export const AccountIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>
        <g
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke='currentColor'
            stroke-width='2'
        >
            <circle cx='16' cy='8' r='6'></circle>
            <path d='M28.475 30c-.264-6.67-5.74-12-12.475-12S3.79 23.33 3.525 30h24.95Z'></path>
        </g>
    </svg>
)
