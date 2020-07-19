<template>
    <nav class="navbar">
        <ul class="navbar-nav">
            <li class="logo">
                <nuxt-link no-prefetch exact to="/" class="nav-link">
                    <span class="link-text logo-text">Nuxtchan</span>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="angle-double-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                    >
                        <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                class="fa-secondary"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                class="fa-primary"
                            ></path>
                        </g>
                    </svg>
                </nuxt-link>
            </li>

            <li class="nav-item">
                <nuxt-link no-prefetch to="/b" class="nav-link">
                    <h1 class="link-title">/b</h1>
                    <span class="link-text">Бред</span>
                </nuxt-link>
            </li>

            <li class="nav-item">
                <nuxt-link no-prefetch to="/pr" class="nav-link">
                    <h1 class="link-title">/pr</h1>
                    <span class="link-text">Программирование</span>
                </nuxt-link>
            </li>

            <li class="nav-item">
                <nuxt-link no-prefetch to="/vg" class="nav-link">
                    <h1 class="link-title">/vg</h1>
                    <span class="link-text">Видеоигры</span>
                </nuxt-link>
            </li>

            <li class="nav-item">
                <a href="#" class="nav-link">
                    <h1 class="link-title">/po</h1>
                    <span class="link-text">Политика</span>
                </a>
            </li>

            <li class="nav-item" id="themeButton">
                <a href="#" class="nav-link">
                    <svg
                        id="lightIcon"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="moon-stars"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="theme-icon svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
                    >
                        <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                                class="fa-secondary"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                                class="fa-primary"
                            ></path>
                        </g>
                    </svg>
                    <svg
                        id="solarIcon"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="sun"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="theme-icon svg-inline--fa fa-sun fa-w-16 fa-7x"
                    >
                        <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                                class="fa-secondary"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                                class="fa-primary"
                            ></path>
                        </g>
                    </svg>
                    <svg
                        id="darkIcon"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="sunglasses"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="theme-icon svg-inline--fa fa-sunglasses fa-w-18 fa-7x"
                    >
                        <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z"
                                class="fa-secondary"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z"
                                class="fa-primary"
                            ></path>
                        </g>
                    </svg>
                    <span class="link-text">Themify</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="scss">
    :root {
        font-size: 16px;
        font-family: 'Open Sans';
        --text-primary: #b6b6b6;
        --text-secondary: #ececec;
        --bg-primary: #23232e;
        --bg-secondary: #141418;
        --transition-speed: 600ms;
    }

    body {
        color: black;
        background-color: white;
        margin: 0;
        padding: 0;
    }

    body::-webkit-scrollbar {
        width: 0.25rem;
    }

    body::-webkit-scrollbar-track {
        background: #1e1e24;
    }

    body::-webkit-scrollbar-thumb {
        background: #6649b8;
    }

    main {
        margin-left: 5rem;
        padding: 1rem;
    }

    .navbar {
        position: fixed;
        background-color: var(--bg-primary);
        transition: width 600ms ease;
        overflow: scroll;
    }

    .navbar-nav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }

    .nav-item {
        width: 100%;
    }

    .nav-item:last-child {
        margin-top: auto;
    }

    .nav-link {
        display: flex;
        align-items: center;
        height: 5rem;
        color: var(--text-primary);
        text-decoration: none;
        filter: grayscale(100%) opacity(0.7);
        transition: var(--transition-speed);
    }

    .nav-link:hover {
        filter: grayscale(0%) opacity(1);
        background: var(--bg-secondary);
        color: var(--text-secondary);
    }

    .link-title {
        margin: 0 1.5rem;
    }

    .link-text {
        display: none;
        margin-left: 1rem;
    }

    .nav-link svg {
        width: 2rem;
        min-width: 2rem;
        margin: 0 1.5rem;
    }

    .fa-primary {
        color: #ff7eee;
    }

    .fa-secondary {
        color: #df49a6;
    }

    .fa-primary,
    .fa-secondary {
        transition: var(--transition-speed);
    }

    .logo {
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 1rem;
        text-align: center;
        color: var(--text-secondary);
        background: var(--bg-secondary);
        font-size: 1.5rem;
        letter-spacing: 0.3ch;
        width: 100%;
    }

    .logo svg {
        transform: rotate(0deg);
        transition: var(--transition-speed);
    }

    .logo-text {
        display: inline;
        position: absolute;
        left: -999px;
        transition: var(--transition-speed);
    }

    .navbar:hover .logo svg {
        transform: rotate(-180deg);
    }

    /* Small screens */
    @media only screen and (max-width: 600px) {
        .navbar {
            bottom: 0;
            width: 100vw;
            height: 5rem;
        }

        .logo {
            display: none;
        }

        .navbar-nav {
            flex-direction: row;
        }

        .nav-link {
            justify-content: center;
        }

        main {
            margin: 0;
        }
    }

    /* Large screens */
    @media only screen and (min-width: 600px) {
        .navbar {
            top: 0;
            width: 5rem;
            height: 100vh;
        }

        .navbar:hover {
            width: 16rem;
        }

        .navbar:hover .link-text {
            display: inline;
        }

        .navbar:hover .logo svg {
            margin-left: 11rem;
        }

        .navbar:hover .logo-text {
            left: 0px;
        }
    }

    .dark {
        --text-primary: #b6b6b6;
        --text-secondary: #ececec;
        --bg-primary: #23232e;
        --bg-secondary: #141418;
    }

    .light {
        --text-primary: #1f1f1f;
        --text-secondary: #000000;
        --bg-primary: #ffffff;
        --bg-secondary: #e4e4e4;
    }

    .solar {
        --text-primary: #576e75;
        --text-secondary: #35535c;
        --bg-primary: #fdf6e3;
        --bg-secondary: #f5e5b8;
    }

    .theme-icon {
        display: none;
    }

    .dark #darkIcon {
        display: block;
    }

    .light #lightIcon {
        display: block;
    }

    .solar #solarIcon {
        display: block;
    }

</style>
