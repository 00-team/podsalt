import { A, useNavigate, useParams } from '@solidjs/router'
import {
    Component,
    createSignal,
    For,
    onCleanup,
    onMount,
    Show,
} from 'solid-js'

import {
    ArrowDown2Icon,
    ArrowRight2Icon,
    AvailabilityIcon,
    ClockIcon,
    DevliverIcon,
    RewardIcon,
} from 'icons/main'
import { hasProductById, PRODUCT } from 'shared/products'
import { createStore } from 'solid-js/store'
import { Dynamic } from 'solid-js/web'
import './style/product.scss'

const Product: Component = () => {
    const param = useParams()

    const nav = useNavigate()

    type STATE = {
        product: PRODUCT | null
    }
    const [state, setState] = createStore<STATE>({
        product: null,
    })

    onMount(() => {
        const id = param.id
        if (!id || !hasProductById(id))
            return nav('/not-found', { replace: true })

        setState('product', hasProductById(id))
    })

    const TopNav: Component = () => (
        <div class='top-nav title_smaller'>
            <A class='link' href='/'>
                Home
            </A>
            <div class='icon'>
                <ArrowRight2Icon />
            </div>
            <A class='link' href='/products'>
                E-Liquids
            </A>
            <div class='icon'>
                <ArrowRight2Icon />
            </div>
            <strong class='link'>Pod Salt Bar X {state.product?.name}</strong>
        </div>
    )

    const Product: Component = () => {
        return (
            <div class='product-info-container'>
                <div class='product-image'>
                    <Show when={state.product?.img}>
                        <img
                            src={state.product?.img}
                            fetchpriority='high'
                            decoding='async'
                        />
                        <div class='is-new title_smaller'>New</div>
                    </Show>
                </div>
                <div class='product-infos'>
                    <div class='info-header'>
                        <div class='sub title_hero2'>Pod Salt</div>
                        <div class='name section_title'>
                            Pod Salt Bar X {state.product?.name}
                        </div>
                        <div class='ava title_small'>
                            <div class='holder'>Availability:</div>
                            <div class='data'>
                                <AvailabilityIcon />
                                In stock
                            </div>
                        </div>
                    </div>
                    <div class='nic-strength'>
                        <p class='title_small'>Nicotine Strength</p>

                        <div class='select-wrapper'>
                            <select class='title_small'>
                                <option selected>25mg</option>
                                <option>50mg</option>
                            </select>
                            <div class='icon'>
                                <ArrowDown2Icon />
                            </div>
                        </div>
                    </div>
                    <div class='timelines title_smaller'>
                        <div class='timeline'>
                            <div class='icon'>
                                <ClockIcon />
                            </div>
                            <div class='field__label-text'>
                                Next Day delivery before 2pm
                            </div>
                        </div>

                        <div class='timeline'>
                            <div class='icon'>
                                <DevliverIcon />
                            </div>
                            <div class='field__label-text'>
                                Free Next Day Delivery over £30
                            </div>
                        </div>

                        <div class='timeline'>
                            <div class='icon'>
                                <RewardIcon />
                            </div>
                            <div class='field__label-text'>
                                Get Reward Points in Every Purchase.
                            </div>
                        </div>
                    </div>

                    <div class='price-container'>
                        <div class='section_title'>
                            £ {String(state.product?.price).concat('.00')}
                        </div>
                        <div class='taxes title_smaller'>Taxes included.</div>
                    </div>
                </div>
            </div>
        )
    }

    const Details: Component = () => {
        type ACTIVE = 'reviews' | 'about' | 'more'
        const [active, setActive] = createSignal<ACTIVE>('about')

        onCleanup(() => setActive('about'))

        const MoreInfo: Component = () => (
            <table class='info-table'>
                <tbody>
                    <tr>
                        <td class='holder title_small'>Flavour Category</td>
                        <td class='data title_small'>
                            <div class='flavours-wrapper'>
                                <For each={state.product?.flavours}>
                                    {f => (
                                        <span class='flavour'>
                                            <p> {f}</p>
                                            <span class='divider'>,</span>
                                        </span>
                                    )}
                                </For>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class='holder title_small'>PG/VG Ratio</td>
                        <td class='data title_small'>50VG/50PG</td>
                    </tr>

                    <tr>
                        <td class='holder title_small'>Nicotine Strength</td>
                        <td class='data title_small'>25mg, 50mg</td>
                    </tr>

                    <tr>
                        <td class='holder title_small'>Bottle Size</td>
                        <td class='data title_small'>30ml</td>
                    </tr>
                </tbody>
            </table>
        )

        const About: Component = () => {
            return (
                <div class='product-about '>
                    <p>{state.product?.description}</p>
                    <p>
                        Key Features:
                        <br />• Intensely sweet 'bar salt' flavour
                        <br />• 10ml nic salt e-liquid
                        <br />• Available in 5mg, 10mg &amp; 20mg
                        <br />• Smooth 50/50 VG/PG blend
                        <br />• UAE Market Compliant
                    </p>
                    <p>
                        Bold, intense 'bar salt' flavours you already love,
                        delivered on a nicotine hit so smooth its a pleasure to
                        vape. Sweet, seriously satisfying flavours are what Pod
                        Salt has been crafting for over 10 years, long before
                        disposables and 'bar salts' arrived. So while everyone
                        else chases the formula, we're still the original. The
                        authentic. That Something Extra? We Call It X.
                    </p>
                </div>
            )
        }

        const Reviews: Component = () => <></>

        const MAP: Record<ACTIVE, Component> = {
            about: About,
            more: MoreInfo,
            reviews: Reviews,
        }

        return (
            <div class='product-details'>
                <div class='detail-ctas title_small'>
                    <button
                        class='detail-cta'
                        classList={{ active: active() == 'about' }}
                        onclick={() => setActive('about')}
                    >
                        About Product
                    </button>
                    <button
                        class='detail-cta'
                        classList={{ active: active() == 'more' }}
                        onclick={() => setActive('more')}
                    >
                        More Information
                    </button>
                    <button
                        class='detail-cta'
                        classList={{ active: active() == 'reviews' }}
                        onclick={() => setActive('reviews')}
                    >
                        Reviews
                    </button>
                </div>

                <div class='product-detail-wrapper title_small'>
                    <Dynamic component={MAP[active()]} />
                </div>
            </div>
        )
    }

    return (
        <main class='product-page-container'>
            <TopNav />
            <Product />
            <Details />
        </main>
    )
}

export default Product
