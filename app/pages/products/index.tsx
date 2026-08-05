import { Component, For } from 'solid-js'

import { A } from '@solidjs/router'
import { PRODUCT, PRODUCTS } from 'shared/products'
import './style/products.scss'

const Products: Component = () => {
    const ProductCmp: Component<PRODUCT> = O => {
        return (
            <A href={O.href} class='product-cmp' style={{ '--c': O.color }}>
                <div class='product-img-container'>
                    <div class='product-img'>
                        <img
                            src={O.img}
                            alt={O.alt}
                            loading='lazy'
                            decoding='async'
                        />

                        <div class='overlay title_small'>{O.desc}</div>
                    </div>
                </div>

                <div class='product-info'>
                    <div class='product-title title_small'>
                        Pod Salt Bar X {O.name}
                    </div>
                    <div class='product-price title_hero2'>
                        £ {String(O.price).concat('.00')}
                    </div>

                    <button class='cta title_small'>Choose options</button>

                    <div class='flavours description'>
                        <For each={O.flavours}>
                            {f => (
                                <div class='flavour'>
                                    <p> {f}</p>
                                    <span class='divider'>,</span>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </A>
        )
    }

    return (
        <main class='products-page-container'>
            <div class='products-header'>
                <div class='section_title2'>E-Liquids</div>
                <p class='sub title'>
                    Explore the best E-Liquids available in the UK, in a variety
                    of nicotine strengths, including{' '}
                    <a href='https://podsaltuk.myshopify.com/collections/nicotine-free-e-liquid'>
                        nicotine-free E-Liquid
                    </a>{' '}
                    and flavours. Made from high-quality ingredients and
                    manufactured in the UK, stocked locally and worldwide. Pod
                    Salt’s range of{' '}
                    <a href='https://podsaltuk.myshopify.com/collections/nic-salt-e-liquids'>
                        Nic Salts
                    </a>{' '}
                    and{' '}
                    <a href='https://podsaltuk.myshopify.com/collections/shortfill-e-liquids'>
                        Shortfill
                    </a>{' '}
                    E-Liquids hit the spot for smokers who love flavour and
                    enjoy a smooth vape.
                </p>
            </div>

            <div class='products-container'>
                <div class='products-filters'></div>
                <div class='products-wrapper'>
                    <div class='products-sort'></div>
                    <div class='products-list'>
                        <For each={PRODUCTS}>{p => <ProductCmp {...p} />}</For>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products
