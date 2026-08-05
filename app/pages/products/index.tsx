import { Component, createMemo, For, onMount } from 'solid-js'

import { A } from '@solidjs/router'
import { ArrowDown2Icon } from 'icons/main'
import { BEST_SELLERS, NEW_ARRIVALS, PRODUCT, PRODUCTS } from 'shared/products'
import { createStore } from 'solid-js/store'
import './style/products.scss'

const Products: Component = () => {
    type SORT_BY =
        | 'new-arrivals'
        | 'best-selling'
        | 'title-ascending'
        | 'title-descending'
        | 'price-ascending'
        | 'price-descending'
        | 'created-ascending'
        | 'most-relevant'

    type FILTER = {
        name: string
        count: number
    }

    type STATE = {
        filters: FILTER[]
        filtered: string
        sortBy: SORT_BY
    }

    const [state, setState] = createStore<STATE>({
        sortBy: 'most-relevant',
        filtered: '',
        filters: [],
    })

    onMount(() => {
        const flavourMap = new Map<string, number>()

        for (const product of PRODUCTS) {
            for (const flavour of product.flavours) {
                flavourMap.set(flavour, (flavourMap.get(flavour) ?? 0) + 1)
            }
        }

        setState(
            'filters',
            [...flavourMap.entries()].map(([name, count]) => ({
                name,
                count,
            }))
        )
    })

    const filteredItems = createMemo((): PRODUCT[] => {
        const items = [...PRODUCTS]
        if (!state.filtered) return items

        return items.filter(p => p.flavours.includes(state.filtered))
    })

    const sortedProducts = createMemo((): PRODUCT[] => {
        const items = [...filteredItems()]
        const sort = state.sortBy

        const byOrder = (list: PRODUCT[]) => {
            const order = new Map(list.map((p, i) => [p.name, i]))
            return [...items].sort((a, b) => {
                const aIndex = order.has(a.name) ? order.get(a.name)! : Infinity
                const bIndex = order.has(b.name) ? order.get(b.name)! : Infinity
                return aIndex - bIndex
            })
        }

        switch (sort) {
            case 'new-arrivals':
                return byOrder(NEW_ARRIVALS)

            case 'best-selling':
                return byOrder(BEST_SELLERS)

            case 'title-ascending':
                return items.sort((a, b) => a.name.localeCompare(b.name))

            case 'title-descending':
                return items.sort((a, b) => b.name.localeCompare(a.name))

            case 'price-ascending':
                return items.sort((a, b) => a.price - b.price)

            case 'price-descending':
                return items.sort((a, b) => b.price - a.price)

            case 'created-ascending':
                return items

            case 'most-relevant':
            default:
                return byOrder(NEW_ARRIVALS)
        }
    })

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
                                    <p>{f}</p>
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
                <div class='products-filters'>
                    <div class='filters-title title'>Flavours</div>

                    <For each={state.filters}>
                        {filter => (
                            <label class='filter-chip title_smaller'>
                                <input
                                    type='checkbox'
                                    name='flavour-filter'
                                    checked={state.filtered === filter.name}
                                    onChange={() => {
                                        if (state.filtered == filter.name) {
                                            setState('filtered', '')
                                        } else {
                                            setState('filtered', filter.name)
                                        }
                                    }}
                                />
                                <span>
                                    {filter.name} ({filter.count})
                                </span>
                            </label>
                        )}
                    </For>
                </div>

                <div class='products-wrapper'>
                    <div class='products-sort-container'>
                        <div class='products-sort'>
                            <div class='products-count title_smaller'>
                                {sortedProducts().length} products
                            </div>

                            <div class='sort-cta'>
                                <div class='holder title_smaller'>Sort By:</div>
                                <div class='select-wrapper'>
                                    <select
                                        class='select title_smaller'
                                        id='SortBy'
                                        value={state.sortBy}
                                        onChange={e =>
                                            setState(
                                                'sortBy',
                                                e.currentTarget.value as SORT_BY
                                            )
                                        }
                                    >
                                        <option value='most-relevant'>
                                            New Arrivals
                                        </option>
                                        <option value='new-arrivals'>
                                            New Arrivals (explicit)
                                        </option>
                                        <option value='best-selling'>
                                            Best selling
                                        </option>
                                        <option value='title-ascending'>
                                            Alphabetically, A-Z
                                        </option>
                                        <option value='title-descending'>
                                            Alphabetically, Z-A
                                        </option>
                                        <option value='price-ascending'>
                                            Price, low to high
                                        </option>
                                        <option value='price-descending'>
                                            Price, high to low
                                        </option>
                                        <option value='created-ascending'>
                                            Date, old to new
                                        </option>
                                    </select>

                                    <div class='icon'>
                                        <ArrowDown2Icon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='products-list'>
                        <For each={sortedProducts()}>
                            {p => <ProductCmp {...p} />}
                        </For>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products
