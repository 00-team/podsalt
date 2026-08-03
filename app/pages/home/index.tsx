import {
    Component,
    createSignal,
    For,
    JSX,
    onCleanup,
    onMount,
    Show,
} from 'solid-js'

import { A } from '@solidjs/router'
import { ArrowIcon } from 'icons/main'
import './style/home.scss'

const Home: Component = () => {
    const Hero: Component = () => {
        const imgs = ['/imgs/banner1.webp', '/imgs/banner2.webp']

        const [active, setActive] = createSignal(0)

        let timer: number | undefined

        onMount(() => {
            timer = window.setInterval(() => {
                setActive(i => (i + 1) % imgs.length)
            }, 3000)
        })

        onCleanup(() => {
            if (timer) window.clearInterval(timer)
        })

        return (
            <section class='hero-section'>
                <div class='photos-slider'>
                    <Show keyed when={imgs[active()]}>
                        {src => <img src={src} alt='Hero banner' />}
                    </Show>
                </div>

                <div class='dots'>
                    <For each={imgs}>
                        {(_, i) => (
                            <button
                                class='dot'
                                type='button'
                                classList={{ active: active() === i() }}
                                onClick={() => setActive(i())}
                            />
                        )}
                    </For>
                </div>
            </section>
        )
    }
    const NewProducts: Component = () => {
        return <></>
    }
    const BestSellers: Component = () => {
        return <></>
    }
    const ShopByFlavour: Component = () => {
        interface FlavProps {
            title: string
            img: string
        }
        const Flav: Component<FlavProps> = R => {
            return (
                <A href='/products' class='flavour-cmp'>
                    <div class='texts'>
                        <div class='title_hero'>{R.title}</div>

                        <div class='now title_smaller'>Shop Now</div>
                    </div>

                    <img src={R.img} loading='lazy' decoding='async' />
                </A>
            )
        }
        return (
            <section class='shop-by-flavour'>
                <div class='flavours-wrapper'>
                    <div class='header'>
                        <div class='main section_title2'>Shop by Flavours</div>
                        <div class='sub title_small '>
                            Explore Our Wide Range of Flavours to Find Your
                            Perfect Vape
                        </div>
                    </div>

                    <div class='flavours'>
                        <Flav
                            img='/public/imgs/flavours/mint.webp'
                            title='Mint & Menthol'
                        />
                        <Flav
                            img='/public/imgs/flavours/tobacco.webp'
                            title='Tobacco'
                        />
                        <Flav
                            img='/public/imgs/flavours/beverage.webp'
                            title='Beverage'
                        />
                        <Flav
                            img='/public/imgs/flavours/dessert.webp'
                            title='Dessert'
                        />
                        <Flav
                            img='/public/imgs/flavours/fruit.webp'
                            title='Fruity'
                        />
                    </div>
                </div>
            </section>
        )
    }
    const Faq: Component = () => {
        interface FaqItemProps {
            title: string
            content: JSX.Element
        }

        const FaqItem: Component<FaqItemProps> = R => {
            const [isOpen, setIsOpen] = createSignal(false)

            return (
                <div
                    onClick={() => setIsOpen(s => !s)}
                    class='faq-item-cmp'
                    classList={{ active: isOpen() }}
                >
                    <button type='button' class='faq-head title_hero'>
                        {R.title}

                        <div class='icon'>
                            <ArrowIcon />
                        </div>
                    </button>

                    <div class='faq-body'>{R.content}</div>
                </div>
            )
        }

        const faqs: FaqItemProps[] = [
            {
                title: 'What makes Pod Salt Prime different from the Core, Nexus, Fusion, Bar X, and Origin ranges?',
                content: (
                    <>
                        <p class='light title_small'>
                            Pod Salt Prime is the newest and most refined
                            collection within the Pod Salt portfolio, developed
                            to deliver a premium flavour experience with a
                            stronger focus on flavour purity, precision, and
                            sophistication.
                        </p>

                        <p class='top light title_small'>
                            Each Pod Salt collection has been created with a
                            unique flavour identity:
                        </p>

                        <ul class='title_small list'>
                            <li>
                                <strong>Core:</strong> The original
                                award-winning Pod Salt range, known for its
                                smooth nicotine salt formula and classic fruit
                                and menthol flavours.
                            </li>
                            <li>
                                <strong>Nexus:</strong> A vibrant collection of
                                rich fruity blends, combining exotic fruits and
                                classic favourites into bold and satisfying
                                flavour combinations.
                            </li>
                            <li>
                                <strong>Fusion:</strong> A creative range
                                focused on innovative flavour combinations and
                                modern profiles designed for unique vaping
                                experiences.
                            </li>
                            <li>
                                <strong>Bar X:</strong> A bold flavour
                                collection inspired by the popular bar-style
                                flavour trend, delivering intense sweetness,
                                deeper flavour layers, and an exceptionally
                                smooth finish.
                            </li>
                            <li>
                                <strong>Origin:</strong> A tobacco-inspired
                                range created around rich, warm tobacco profiles
                                combined with Pod Salt’s smooth nicotine salt
                                technology.
                            </li>
                            <li>
                                <strong>Prime:</strong> The latest evolution of
                                Pod Salt, featuring distilled flavour extracts,
                                premium formulation techniques, and a cleaner
                                approach to flavour development. Prime focuses
                                on authentic flavour reproduction, advanced
                                flavour clarity, and a luxury vaping experience.
                            </li>
                        </ul>
                    </>
                ),
            },
            {
                title: 'What are distilled flavour extracts and why are they used in Pod Salt Prime?',
                content: (
                    <>
                        <p class='light title_small'>
                            Pod Salt Prime uses advanced distilled flavour
                            extracts to achieve a cleaner, more precise, and
                            more authentic flavour experience.
                        </p>

                        <p class='top light title_small'>
                            Through the distillation process, selected aromatic
                            compounds are refined to create clearer flavour
                            profiles with greater accuracy and balance.
                        </p>

                        <p class='top light title_small'>
                            This technology helps Prime deliver:
                        </p>

                        <ul class='title_small list'>
                            <li>Enhanced flavour clarity</li>
                            <li>More realistic flavour reproduction</li>
                            <li>Better separation between flavour notes</li>
                            <li>Smoother flavour performance</li>
                            <li>A refined and premium taste experience</li>
                        </ul>

                        <p class='top light title_small'>
                            Distilled flavour technology allows each Prime
                            flavour to express its intended character with
                            exceptional precision.
                        </p>
                    </>
                ),
            },
            {
                title: 'What makes Pod Salt Prime’s formulation different?',
                content: (
                    <>
                        <p class='light title_small'>
                            Pod Salt Prime has been developed with a cleaner
                            formulation philosophy, focusing on flavour quality
                            rather than excessive sweetness or unnecessary
                            additives.
                        </p>

                        <p class='top light title_small'>
                            Prime is created without:
                        </p>

                        <ul class='title_small list'>
                            <li>Artificial sweeteners</li>
                            <li>Thermal colouring agents</li>
                        </ul>

                        <p class='top light title_small'>
                            The range focuses on premium flavour ingredients and
                            carefully balanced formulations to allow the true
                            character of each flavour to stand out.
                        </p>

                        <p class='top light title_small'>
                            This creates a cleaner, smoother, and more refined
                            flavour experience compared with heavily sweetened
                            e-liquids.
                        </p>
                    </>
                ),
            },
            {
                title: 'Why do Pod Salt Prime flavours feel more bold and premium?',
                content: (
                    <>
                        <p class='light title_small'>
                            Pod Salt Prime achieves bold flavour through
                            precision, not simply by increasing sweetness.
                        </p>

                        <p class='top light title_small'>
                            Each flavour profile is carefully engineered with
                            multiple layers to create depth, balance, and
                            realism.
                        </p>

                        <p class='top light title_small'>
                            Prime flavours are designed to deliver:
                        </p>

                        <ul class='title_small list'>
                            <li>Rich and powerful flavour profiles</li>
                            <li>Greater flavour complexity</li>
                            <li>Clear separation of individual notes</li>
                            <li>
                                Authentic fruit, beverage, and dessert
                                characteristics
                            </li>
                            <li>A smooth and satisfying finish</li>
                        </ul>

                        <p class='top light title_small'>
                            The result is a more sophisticated flavour
                            experience where every element of the profile can be
                            appreciated.
                        </p>
                    </>
                ),
            },
            {
                title: 'Why choose Pod Salt Prime over traditional nicotine salts?',
                content: (
                    <>
                        <p class='light title_small'>
                            Pod Salt Prime represents the next generation of Pod
                            Salt nicotine salts, combining advanced flavour
                            technology with premium formulation standards.
                        </p>

                        <p class='top light title_small'>
                            Manufactured under licence from Pod Salt UK, Prime
                            is designed for those who want a more refined vaping
                            experience with:
                        </p>

                        <ul class='title_small list'>
                            <li>Distilled flavour technology</li>
                            <li>Premium flavour development</li>
                            <li>Cleaner flavour architecture</li>
                            <li>More authentic taste profiles</li>
                            <li>Luxury-level flavour performance</li>
                        </ul>

                        <p class='top light title_small'>
                            Pod Salt Prime brings together innovation,
                            craftsmanship, and flavour precision to create one
                            of the most advanced collections in the Pod Salt
                            family.
                        </p>

                        <p class='top light title_small'>
                            <strong>
                                Pod Salt Prime — Distilled Flavours. Refined
                                Taste. Premium Experience.
                            </strong>
                        </p>
                    </>
                ),
            },
        ]

        return (
            <section class='faq-section'>
                <div class='faq-header'>
                    <div class='section_title2'>Frequently Asked Questions</div>
                    <div class='sub title_hero2'>
                        Here in our FAQ section you will find answers to many
                        questions about <A href='/products'>Pod Salt Prime</A>.
                    </div>
                </div>

                <div class='faqs-wrapper'>
                    {faqs.map(item => (
                        <FaqItem title={item.title} content={item.content} />
                    ))}
                </div>
            </section>
        )
    }
    const Sub: Component = () => {
        return <></>
    }

    return (
        <main class='home-page-container'>
            <Hero />

            <NewProducts />

            <BestSellers />

            <ShopByFlavour />

            <Faq />

            <Sub />
        </main>
    )
}

export default Home
