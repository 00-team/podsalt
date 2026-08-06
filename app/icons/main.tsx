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
    <svg fill='none' stroke='currentColor' class='' viewBox='0 0 18 18'>
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

export const WarningIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 24 24'
        fill='none'
    >
        <path
            d='M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        ></path>
        <path
            d='M12 9V13.5'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        ></path>
        <path
            d='M12 16.9922V17.0022'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        ></path>
    </svg>
)

export const CloseIcon = () => (
    <svg
        class='close-svg'
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
    >
        <path d='M18 6 6 18' />
        <path d='m6 6 12 12' />
    </svg>
)

export const Check2Icon = () => (
    <svg
        stroke='currentColor'
        fill='currentColor'
        stroke-width='0'
        viewBox='0 0 512 512'
        height={25}
        width={25}
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fill='none'
            stroke-linecap='square'
            stroke-miterlimit='10'
            stroke-width='44'
            d='M416 128 192 384l-96-96'
        ></path>
    </svg>
)

export const FacebookIcon = () => (
    <svg viewBox='0 0 20 20'>
        <path
            fill='currentColor'
            d='M18 10.049C18 5.603 14.419 2 10 2s-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951'
        ></path>
    </svg>
)
export const InstagramIcon = () => (
    <svg class='' viewBox='0 0 20 20'>
        <path
            fill='currentColor'
            fill-rule='evenodd'
            d='M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.4 2.4 0 0 0-.912.593 2.5 2.5 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23s.01 2.39.046 3.229c.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046s2.39-.01 3.23-.046c.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23s-.01-2.39-.055-3.229c-.027-.784-.164-1.204-.274-1.495a2.4 2.4 0 0 0-.593-.913 2.6 2.6 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045a63 63 0 0 1 3.302.045c.664.014 1.321.14 1.943.374a4 4 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.9 3.9 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.15 4.15 0 0 1-1.414-.922 4.1 4.1 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.4 4.4 0 0 1 .92-1.414 4.2 4.2 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805m1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93m5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355'
            clip-rule='evenodd'
        ></path>
    </svg>
)
export const XIcon = () => (
    <svg class='' viewBox='0 0 20 20'>
        <path
            fill='currentColor'
            fill-rule='evenodd'
            d='M7.273 2.8 10.8 7.822 15.218 2.8h1.768l-5.4 6.139 5.799 8.254h-4.658l-3.73-5.31-4.671 5.31H2.558l5.654-6.427L2.615 2.8zm6.242 13.125L5.07 4.109h1.405l8.446 11.816z'
            clip-rule='evenodd'
        ></path>
    </svg>
)

export const ArrowIcon = () => (
    <svg class='' viewBox='0 0 12 12'>
        <g fill='currentColor' class='nc-icon-wrapper'>
            <path
                d='M11.5,2H.5a.5.5,0,0,0-.412.783l5.5,8a.5.5,0,0,0,.824,0l5.5-8A.5.5,0,0,0,11.5,2Z'
                fill='currentColor'
            ></path>
        </g>
    </svg>
)

export const ArrowRightIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        class='icon icon-arrow'
        viewBox='0 0 14 10'
    >
        <path
            fill='currentColor'
            fill-rule='evenodd'
            d='M8.537.808a.5.5 0 0 1 .817-.162l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L11.793 5.5H1a.5.5 0 0 1 0-1h10.793L8.646 1.354a.5.5 0 0 1-.109-.546'
            clip-rule='evenodd'
        ></path>
    </svg>
)

export const MenuIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        class='icon icon-hamburger'
        viewBox='0 0 18 16'
    >
        <path
            fill='currentColor'
            d='M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5'
        ></path>
    </svg>
)

export const ArrowDown2Icon = () => (
    <svg class='icon icon-caret' viewBox='0 0 12 12'>
        <g fill='currentColor' class='nc-icon-wrapper'>
            <path
                d='M11.5,2H.5a.5.5,0,0,0-.412.783l5.5,8a.5.5,0,0,0,.824,0l5.5-8A.5.5,0,0,0,11.5,2Z'
                fill='currentColor'
            ></path>
        </g>
    </svg>
)

export const FiltersIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        class='icon icon-filter'
        viewBox='0 0 20 20'
    >
        <path
            fill='currentColor'
            fill-rule='evenodd'
            d='M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0M4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0m11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0M13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2'
        ></path>
    </svg>
)

export const ArrowRight2Icon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 12 12'
    >
        <g fill='currentColor'>
            <polyline
                points='3.5 0.5 9.5 6 3.5 11.5'
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
            ></polyline>
        </g>
    </svg>
)
