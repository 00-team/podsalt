import { Component, For, JSX } from 'solid-js'

import { A } from '@solidjs/router'
import { FacebookIcon, InstagramIcon, XIcon } from 'icons/main'
import { Dynamic } from 'solid-js/web'
import './style/footer.scss'

const Footer: Component = () => {
    const Logos: Component = () => {
        interface SocialProps {
            Icon: JSX.Element
            link: string
        }
        const Social: Component<SocialProps> = R => (
            <A href={R.link} class='social-cmp'>
                {R.Icon}
            </A>
        )

        interface InfoProps {
            head: string
            sub: string
            link?: string
        }
        const Info: Component<InfoProps> = R => (
            <div class='info-cmp'>
                <div class='info-head title'>{R.head}</div>
                <Dynamic
                    component={R.link ? 'a' : 'div'}
                    class='info-sub title_hero'
                    href={R.link}
                >
                    {R.sub}
                </Dynamic>
            </div>
        )

        return (
            <div class='footer-logos'>
                <img src='/public/imgs/logo_white.webp' alt='' />
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
                <div class='contact-infos'>
                    <Info
                        head='Customer Care'
                        sub='020 37459067'
                        link='tel:02037459067'
                    />
                    <Info
                        head='Company email'
                        sub='online@podsalt.com'
                        link='mailto:online@podsalt.com'
                    />
                    <Info head='Business Inquiries' sub='01772 956414' />
                </div>

                <div class='awards'>
                    <img
                        src='/public/imgs/award1.webp'
                        loading='lazy'
                        decoding='async'
                    />
                    <img
                        src='/public/imgs/award2.webp'
                        loading='lazy'
                        decoding='async'
                    />
                </div>
            </div>
        )
    }
    const Links: Component = () => {
        type LINK = {
            title: string
            link: string
        }
        type SECTION = {
            head: string
            links: LINK[]
        }

        const sections: SECTION[] = [
            {
                head: 'My Account',
                links: [
                    { title: 'My Account', link: '/account' },
                    { title: 'Register', link: '/register' },
                    { title: 'Order History', link: '/orders' },
                    { title: 'Customer Service', link: '/support' },
                ],
            },
            {
                head: 'Let Us Help You',
                links: [
                    { title: 'Terms & Conditions', link: '/terms' },
                    { title: 'Refunds Policy', link: '/refunds' },
                    { title: 'Privacy Policy', link: '/privacy' },
                    { title: 'Delivery Information', link: '/delivery' },
                ],
            },
            {
                head: 'Get To Know Us',
                links: [
                    { title: 'Contact', link: '/contact' },
                    { title: 'About', link: '/about' },
                    { title: 'FAQs', link: '/faqs' },
                    { title: 'Awards', link: '/awards' },
                    { title: 'Worldwide Stockist', link: '/stockist' },
                ],
            },
            {
                head: 'Category',
                links: [
                    {
                        link: '/products',
                        title: 'Products',
                    },
                ],
            },
        ]

        return (
            <div class='footer-links'>
                <For each={sections}>
                    {sec => (
                        <div class='footer-section title'>
                            <div class='sec-head '>{sec.head}</div>

                            <div class='sec-links'>
                                <For each={sec.links}>
                                    {link => (
                                        <A
                                            href={link.link}
                                            class='sec-link'
                                            inactiveClass=''
                                        >
                                            {link.title}
                                        </A>
                                    )}
                                </For>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        )
    }

    return (
        <footer class='footer-container'>
            <div class='footer-head'>
                <Logos />
                <Links />
            </div>
            <div class='divider'></div>
            <div class='footer-body'>
                <div class='warning'>
                    <strong class='title_small'>
                        Age restricted products. Not for sale to minors.
                    </strong>

                    <p class='title_smaller'>
                        Warning: This product contains nicotine which is a
                        highly addictive substance. Pod Salt is intended for use
                        by adult smokers 18+. Keep out of reach of children.
                    </p>
                </div>

                <div class='ocs'>
                    <div class='oc title_smaller'>
                        © 2026, Pod Salt UK Pod Salt is a trading name of Xyfil
                        Limited, 15-19 Sedgwick Street, Preston, Lancs. PR1 1TP.
                        Company registered in England & Wales:
                    </div>
                    <div class='no title_smaller'>
                        09012568. VAT Reg. No: 194658851
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
