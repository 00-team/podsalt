import { CloseCircleIcon, EyeIcon, EyeShutIcon, ResetIcon } from 'icons/main'
import {
    Component,
    createMemo,
    createSignal,
    JSX,
    onCleanup,
    onMount,
    Show,
} from 'solid-js'

import './style/hoverinp.scss'

type hoverInpProps = {
    ref?: (el: HTMLInputElement) => void
    holder: string
    acitve: boolean
    Icon: JSX.Element

    class?: string
    id?: string

    max?: number
    min?: number

    disable?: boolean
    format?: boolean
    name?: string

    max_length?: number

    inpType: 'text' | 'password' | 'number' | 'username'
    value: string
    onInp(e: string): void

    autoCmp?: string
    showReset?: boolean
    showClear?: boolean

    onReset?(): void
    onClear?(): void
    onEnter?(): void

    dir?: 'rtl' | 'ltr'
}

function sanitizeNumber(s: string) {
    // remove everything except digits, dot and minus
    let out = (s ?? '').toString()

    // keep only the first dot
    const parts = out.split('.')
    out = parts.shift() ?? ''
    if (parts.length) out += '.' + parts.join('')

    // handle minus: remove all minus then re-add a single leading minus
    const hadLeadingMinus = /^\s*-/.test(s)
    out = out.replace(/-/g, '')
    if (hadLeadingMinus) out = '-' + out

    return out
}
function unformatNumber(s: string) {
    // keep digits, dot and minus (if you want negatives/decimals)
    return (s ?? '').toString()
}
function formatNumber(raw: string) {
    if (!raw) return ''
    const n = Number(unformatNumber(raw))
    if (!isFinite(n)) return raw
    return n.toLocaleString()
}

export const HoverInp: Component<hoverInpProps> = P => {
    let inputEl: HTMLInputElement | undefined

    const [show, setShow] = createSignal(false)

    onMount(() => {
        if (!P.onEnter) return

        const ac = new AbortController()

        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Enter' || (e as any).keyCode === 13) {
                e.preventDefault()
                P.onEnter!()
            }
        }
        inputEl?.addEventListener('keydown', handler, { signal: ac.signal })

        onCleanup(() => ac.abort())
    })

    const inpType = createMemo(() => {
        if (P.format) return 'text'
        if (P.inpType == 'number') return 'number'
        if (!show() && P.inpType == 'password') return 'password'
        return 'text'
    })

    const dir = createMemo(() => {
        if (P.dir) return P.dir
        if (P.inpType == 'password' || P.inpType == 'username') return 'ltr'

        return 'auto'
    })

    // displayed value (formatted if requested)
    const displayed = createMemo(() => {
        if (P.format) {
            return formatNumber(P.value)
        }
        return P.value
    })

    return (
        <div
            class={`hover-inp `}
            id={`${P.id || ''}`}
            classList={{
                active: P.acitve,
                disabled: P.disable,
                [P.class || '']: true,
            }}
        >
            <div class='holder title_smaller'>
                {P.Icon}
                {P.holder}
            </div>

            <input
                ref={el => {
                    inputEl = el as HTMLInputElement
                    P.ref?.(el)
                }}
                type={inpType() == 'number' ? 'text' : inpType()}
                inputmode={inpType() == 'number' ? 'numeric' : 'text'}
                class='title_small'
                classList={{ username: P.inpType == 'username' }}
                autocomplete={!P.autoCmp ? 'new-password' : P.autoCmp}
                value={displayed()}
                maxLength={P.max_length || undefined}
                max={P.max}
                min={P.min}
                oninput={e => {
                    const el = e.currentTarget as HTMLInputElement

                    if (P.format) {
                        // current displayed string user typed (may contain commas)
                        const rawTyped = el.value
                        // previous raw value (unformatted) from props
                        const prevRaw = P.value ?? ''
                        const prevFormatted = formatNumber(prevRaw)
                        const newRaw = unformatNumber(rawTyped) // what we will store
                        // call parent with unformatted numeric string
                        P.onInp(newRaw)

                        // Adjust caret: schedule after render so formatted value has been applied
                        const caretBefore = el.selectionStart ?? rawTyped.length
                        // compute how many separators before caret in prev vs next formatted
                        const nextFormatted = formatNumber(newRaw)
                        const prevCommasBefore = (
                            prevFormatted.slice(0, caretBefore).match(/,/g) ||
                            []
                        ).length
                        const nextCommasBefore = (
                            nextFormatted.slice(0, caretBefore).match(/,/g) ||
                            []
                        ).length
                        const diff = nextCommasBefore - prevCommasBefore
                        const desired = Math.max(0, caretBefore + diff)

                        // after next tick the input value will be re-rendered to the formatted version.
                        // use setTimeout 0 to move caret after DOM update.
                        setTimeout(() => {
                            try {
                                inputEl?.setSelectionRange(desired, desired)
                            } catch {}
                        }, 0)

                        return
                    }

                    if (P.inpType === 'number') {
                        const raw = el.value
                        const caretBefore = el.selectionStart ?? raw.length

                        const sanitized = sanitizeNumber(raw)

                        if (sanitized !== raw) {
                            // update the input value and try to preserve caret
                            el.value = sanitized
                            try {
                                const newPos = Math.max(
                                    0,
                                    caretBefore -
                                        (raw.length - sanitized.length)
                                )
                                el.setSelectionRange(newPos, newPos)
                            } catch {}
                        }
                    }

                    if (
                        P.max_length &&
                        e.currentTarget.value.length > P.max_length
                    )
                        e.currentTarget.value = P.value

                    let val = e.currentTarget.value

                    P.onInp(val)
                }}
                name={P.name}
                dir={dir()}
                // @ts-ignore
                style={{ direction: dir() }}
                disabled={P.disable}
                onwheel={e => e.currentTarget.blur()}
                onkeydown={e => {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                        e.preventDefault()
                    }
                }}
            />

            <Show when={P.inpType == 'password'}>
                <button
                    type='button'
                    class='eye-icon icon'
                    onclick={() => {
                        setShow(s => !s)
                    }}
                    tabIndex={-1}
                >
                    <Show when={show()} fallback={<EyeIcon />}>
                        <EyeShutIcon />
                    </Show>
                </button>
            </Show>

            <button
                type='button'
                class='reset-icon icon'
                name='reset'
                onclick={() => {
                    P.onReset && P.onReset()
                    inputEl?.blur()
                }}
                tabIndex={-1}
                classList={{ active: P.showReset }}
            >
                <ResetIcon />
            </button>
            <button
                type='button'
                class='clear-icon icon'
                name='clear'
                onclick={() => {
                    P.onClear && P.onClear()
                    inputEl?.blur()
                }}
                tabIndex={-1}
                classList={{ active: P.showClear }}
            >
                <CloseCircleIcon />
            </button>
        </div>
    )
}
