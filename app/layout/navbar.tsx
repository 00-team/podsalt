import { Component, createSignal, For } from 'solid-js'

import { A } from '@solidjs/router'
import { HoverInp } from 'components/hoverInp'
import { AccountIcon, CartIcon, SearchIcon } from 'icons/main'
import './style/navbar.scss'

const Navbar: Component = () => {
    const [query, setQuery] = createSignal('')

    const MobileNav: Component = () => {
        return <div class='mobile-nav-container'></div>
    }
    const DesktopNav: Component = () => {
        type LINK = {
            link: string
            text: string
        }
        const LINKS: LINK[] = [
            {
                link: '/',
                text: 'Home',
            },
            {
                text: 'E-Liquids',
                link: '/products',
            },
            {
                link: '/blog',
                text: 'Blog',
            },
        ]

        const Link: Component<LINK> = R => {
            return (
                <A
                    href={R.link}
                    end={R.link == '/'}
                    class='nav-link title_small'
                    inactiveClass=''
                >
                    {R.text}
                </A>
            )
        }

        return (
            <div class='desktop-nav-container'>
                <div class='nav-header'>
                    <img
                        src='/public/imgs/logo_white.webp'
                        class='logo'
                        alt='pod salt prime logo'
                    />

                    <div class='search-container'>
                        <HoverInp
                            Icon={null}
                            class='title_small'
                            holder='search'
                            acitve={!!query()}
                            onInp={v => setQuery(v)}
                            inpType='text'
                            value={query()}
                            showClear={!!query()}
                            onClear={() => setQuery('')}
                        />

                        <div class='search-cta icon'>
                            <SearchIcon />
                        </div>
                    </div>

                    <div class='navbar-ctas title_hero2'>
                        <a href='/account/login' class='link'>
                            <span class='header_login-cta'>Log in</span>
                            <AccountIcon />
                        </a>
                        <a href='/cart' class='link'>
                            <CartIcon />
                        </a>
                    </div>
                </div>
                <div class='nav-links'>
                    <For each={LINKS}>{link => <Link {...link} />}</For>
                </div>
            </div>
        )
    }

    return (
        <nav class='nav-container'>
            <DesktopNav />
            <MobileNav />
        </nav>
    )
}

export default Navbar
