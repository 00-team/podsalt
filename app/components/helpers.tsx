import { isMobile } from 'shared/tools'
import { Component, createSignal, JSX, onMount, Show } from 'solid-js'

type IsProps = {
    children: JSX.Element
    not?: true
    fallback?: JSX.Element
}

export const IsClient: Component<IsProps> = P => {
    const [is_client, setIsClient] = createSignal(false)

    onMount(() => {
        setIsClient(true)
    })

    return (
        <Show when={P.not ? !is_client() : is_client()} fallback={P.fallback}>
            {P.children}
        </Show>
    )
}

export const IsMobile: Component<IsProps> = P => {
    const [is_mobile, setIsMobile] = createSignal(false)

    onMount(() => {
        setIsMobile(isMobile())
    })

    return (
        <Show when={P.not ? !is_mobile() : is_mobile()} fallback={P.fallback}>
            {P.children}
        </Show>
    )
}
