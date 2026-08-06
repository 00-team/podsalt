import { A, useNavigate, useParams } from '@solidjs/router'
import { Component, onMount, Show } from 'solid-js'

import { ArrowDown2Icon, ArrowRight2Icon, AvailabilityIcon } from 'icons/main'
import { hasProductById, PRODUCT } from 'shared/products'
import { createStore } from 'solid-js/store'
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

    return (
        <main class='product-page-container'>
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
                <strong class='link'>
                    Pod Salt Bar X {state.product?.name}
                </strong>
            </div>

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
                                <option selected>20mg</option>
                            </select>
                            <div class='icon'>
                                <ArrowDown2Icon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Product
