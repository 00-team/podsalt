import { useNavigate, useParams } from '@solidjs/router'
import { Component, onMount } from 'solid-js'

import { hasProductById } from 'shared/products'
import { unwrap } from 'solid-js/store'
import './style/product.scss'

const Product: Component = () => {
    const param = useParams()

    const nav = useNavigate()

    onMount(() => {
        const id = param.id
        if (!id || !hasProductById(id))
            return nav('/not-found', { replace: true })

        console.log(unwrap(param))
    })

    return <main class='product-page-container'></main>
}

export default Product
