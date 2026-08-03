import { Component, createSignal, JSX } from 'solid-js'

import { A } from '@solidjs/router'
import { ArrowIcon } from 'icons/main'
import './style/home.scss'

const Home: Component = () => {
    const Hero: Component = () => {
        return (
            <section class='hero-section'>
                <div class='photos-slider'></div>
                <div class='dots'></div>
            </section>
        )
    }
    const NewProducts: Component = () => {
        return <></>
    }
    const BestSellers: Component = () => {
        return <></>
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
                    onclick={() => setIsOpen(s => !s)}
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

        return (
            <section class='faq-section'>
                <div class='faq-head'>
                    <div class='section_title2'>Frequently Asked Questions</div>
                    <div class='sub title_hero2'>
                        Here in our FAQ section you will find answers to many
                        questions to Pod Salt{' '}
                        <A href='/products'>Nicotine Salt E-Liquids.</A>
                    </div>
                </div>

                <div class='faqs-wrapper'>
                    <FaqItem
                        title='What is in Pod Salt E-liquid?'
                        content={
                            <>
                                <p class='light title_small'>
                                    The <A href='/'>Pod Salt</A> proprietary
                                    E-liquid formula is carefully developed by
                                    highly qualified and experienced in-house
                                    R&D and Flavourist departments at{' '}
                                    <a
                                        href='https://www.xyfil.com'
                                        target='_blank'
                                    >
                                        Xyfil Ltd
                                    </a>
                                    , a UK leading E-liquid manufacturer.
                                </p>

                                <p class='top light title_small'>
                                    Our ingredients include propylene glycol,
                                    vegetable glycerol, nicotine, salicylic acid
                                    and flavourings.
                                </p>

                                <ul class='title_small list'>
                                    <li>
                                        Propylene glycol and vegetable glycerol
                                        – used for creating vapour
                                    </li>
                                    <li>
                                        Nicotine – content is 11mg or 20mg
                                        dependent on strength chosen – TPD
                                        compliant
                                    </li>
                                    <li>
                                        Salicylic acid – naturally occurring
                                        acid in the tobacco plant, turns
                                        nicotine into a nicotine salt formula –
                                        provides satisfying experience
                                    </li>
                                    <li>
                                        Flavourings – we use a unique flavour
                                        blend, free from any problem
                                        ingredients, to create high quality
                                        flavours
                                    </li>
                                    <li>
                                        Nicotine content: 11mg (20mg total
                                        nicotine salt content) or 20mg (36mg
                                        total nicotine salt content)
                                    </li>
                                </ul>
                            </>
                        }
                    />
                    <FaqItem
                        title='What are nicotine salts?'
                        content={
                            <>
                                <p class='light title_small'>
                                    <A href='/products'>Nicotine salts</A> are
                                    made by mixing freebase nicotine with an
                                    acid that naturally occur in tobacco.
                                    Nicotine salts are absorbed into your
                                    bloodstream faster than freebase nicotine
                                    found in regular E-liquids, this allows
                                    users to get an improved nicotine hit
                                    similar to the hit provided by smoking a
                                    cigarette.
                                </p>

                                <p class='top light title_small'>
                                    In the <A href='/'>Pod Salt</A> E-liquids,
                                    we use salicylic acid to create a smooth
                                    vaping experience. Freebase nicotine has a
                                    high alkalinity so adding salicylic acid
                                    neutralises the PH level of the E-liquid. As
                                    a result, this creates a satisfying vaping
                                    experience with a faster-acting and
                                    longer-lasting nicotine hit.
                                </p>
                            </>
                        }
                    />
                    <FaqItem
                        title='Are Pod Salt E-liquids TPD compliant?'
                        content={
                            <>
                                <p class='light title_small'>
                                    Pod Salt E-liquids are{' '}
                                    <a
                                        href='https://www.gov.uk/guidance/e-cigarettes-regulations-for-consumer-products'
                                        target='_blank'
                                    >
                                        TPD
                                    </a>{' '}
                                    compliant and contain a maximum nicotine
                                    concentration of 20mg/ml, as per the TPD
                                    requirements. We also ensure that the bottle
                                    design, label and packaging meet TPD
                                    compliance expectations.
                                </p>

                                <p class='top light title_small'>
                                    At the time of manufacturing Pod Salt
                                    E-liquids, we consulted with{' '}
                                    <a href='https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency'>
                                        MHRA
                                    </a>{' '}
                                    to guarantee our E-liquids are compliant.
                                </p>
                                <p class='top light title_small'>
                                    We can provide full batch traceability for
                                    each and every E-liquid produced. For more
                                    information, please get in touch at{' '}
                                    <a href='mailto:online@podsalt.com'>
                                        online@podsalt.com
                                    </a>{' '}
                                    and we’ll be happy to help.
                                </p>
                            </>
                        }
                    />
                    <FaqItem
                        title='What strength are Pod Salt E-liquids?'
                        content={
                            <>
                                <p class='light title_small'>
                                    Pod Salt E-liquids are available in nicotine
                                    strengths of 11mg/ml or 20mg/ml to provide
                                    users with a choice to suit their needs.
                                </p>
                                <p class='top light title_small'>
                                    This equates to a total nicotine salt
                                    content of either 20mg/ml (with nicotine
                                    content of 11mg/ml) or 36mg/ml (with
                                    nicotine content of 20mg/ml). Nicotine salts
                                    provide an improved vaping experience
                                    compared to regular nicotine E-liquids.
                                </p>
                            </>
                        }
                    />
                    <FaqItem
                        title='What device should I use with Pod Salt E-liquids?'
                        content={
                            <>
                                <p class=' light title_small'>
                                    Pod Salt E-liquids are ideal for use with a
                                    low-wattage vape or pod device. The lower
                                    power of these devices compared to
                                    high-powered vape mod ensures a smooth and
                                    satisfying nicotine delivery with every use.
                                </p>
                            </>
                        }
                    />
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

            <Faq />

            <Sub />
        </main>
    )
}

export default Home
