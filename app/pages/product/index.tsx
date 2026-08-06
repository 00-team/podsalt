import { A, useNavigate, useParams } from '@solidjs/router'
import { Component, onMount, Show } from 'solid-js'

import { ArrowRight2Icon } from 'icons/main'
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
                <div class='product-infos'></div>
            </div>
        </main>
    )
}

export default Product
