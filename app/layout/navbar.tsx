import { Component, createSignal, For, JSX, Show } from 'solid-js'

import { A } from '@solidjs/router'
import { HoverInp } from 'components/hoverInp'
import {
    AccountIcon,
    CartIcon,
    CloseIcon,
    FacebookIcon,
    InstagramIcon,
    MenuIcon,
    SearchIcon,
    XIcon,
} from 'icons/main'
import './style/navbar.scss'

const Navbar: Component = () => {
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
        {
            link: '/#faq',
            text: 'Faq',
        },
        {
            link: '/contact',
            text: 'Get In Touch',
        },
        {
            link: '/products',
            text: 'shop by flavour',
        },
    ]

    interface LinkProps extends LINK {
        onClick?(): void
    }
    const Link: Component<LinkProps> = R => {
        return (
            <A
                onclick={R.onClick}
                href={R.link}
                end={R.link == '/'}
                class='nav-link title'
                classList={{ [R.text]: true }}
                inactiveClass=''
            >
                {R.text}
            </A>
        )
    }

    const MobileNav: Component = () => {
        const [show, setShow] = createSignal(false)

        interface SocialProps {
            Icon: JSX.Element
            link: string
        }
        const Social: Component<SocialProps> = R => (
            <A href={R.link} class='social-cmp'>
                {R.Icon}
            </A>
        )

        return (
            <>
                <div class='mobile-nav-container'>
                    <button
                        class='open-nav icon'
                        onclick={() => setShow(s => !s)}
                    >
                        <Show when={show()} fallback={<MenuIcon />}>
                            <CloseIcon />
                        </Show>
                    </button>

                    <img
                        onclick={() => (location.href = '/')}
                        src='/public/imgs/logo_white.webp'
                        class='logo'
                        alt='pod salt prime logo'
                        fetchpriority='high'
                    />

                    <div class='ctas'>
                        <A class='icon' inactiveClass='' href='/products'>
                            <SearchIcon />
                        </A>
                        <A class='icon' inactiveClass='' href='/products'>
                            <CartIcon />
                        </A>
                    </div>
                </div>
                <div class='mobile-nav-links' classList={{ active: show() }}>
                    <For each={LINKS}>
                        {link => (
                            <Link onClick={() => setShow(false)} {...link} />
                        )}
                    </For>
                    <div class='socials'>
                        <Social
                            link='https://www.facebook.com/people/Pod-Salt/100064751330102/'
                            Icon={<FacebookIcon />}
                        />
                        <Social
                            link='https://www.instagram.com/podsaltofficial/'
                            Icon={<InstagramIcon />}
                        />
                        <Social
                            link='https://twitter.com/podsalt'
                            Icon={<XIcon />}
                        />
                    </div>
                </div>
            </>
        )
    }
    const DesktopNav: Component = () => {
        const [query, setQuery] = createSignal('')

        return (
            <div class='desktop-nav-container'>
                <div class='nav-header'>
                    <img
                        src='/public/imgs/logo_white.webp'
                        class='logo'
                        alt='pod salt prime logo'
                        fetchpriority='high'
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

                        <button class='search-cta icon'>
                            <SearchIcon />
                        </button>
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

    const PromotionBar: Component = () => {
        interface PromProps {
            title: string
            subtitle: string
            img: string
        }
        const Prom: Component<PromProps> = R => {
            return (
                <div class='prom-cmp '>
                    <img src={R.img} fetchpriority='high' decoding='async' />

                    <div class='holders title_small'>
                        <div class='main '>{R.title}</div>
                        <div class='sub '>{R.subtitle}</div>
                    </div>
                </div>
            )
        }

        return (
            <div class='promotion-bar-container'>
                <div class='promotion-bar-wrapper'>
                    <Prom
                        title='Free & Fast Shipping.'
                        subtitle='Free On all orders over £30'
                        img='/public/imgs/delivery.webp'
                    />
                    <Prom
                        title='Excellent Customer Service.'
                        subtitle='Get in touch, we’re here to help'
                        img='/public/imgs/support.webp'
                    />
                    <Prom
                        title='Great Savings.'
                        subtitle='Great deals on our bundles'
                        img='/public/imgs/save.webp'
                    />

                    <div class='exc-bar'>
                        <img
                            draggable={false}
                            src='/public/imgs/trust.png'
                            fetchpriority='high'
                            decoding='async'
                        />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <MobileNav />
            <nav class='nav-container'>
                <DesktopNav />
                <PromotionBar />
            </nav>
        </>
    )
}

export default Navbar
