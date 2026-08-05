import { Route, Router, RouteSectionProps, useLocation } from '@solidjs/router'
import { render } from 'solid-js/web'

// import Alert from 'comps/alert'

import Alerts from 'components/alert'
import Footer from 'layout/footer'
import Navbar from 'layout/navbar'
import { createRenderEffect, lazy, on } from 'solid-js'
import './style/base.scss'
import './style/theme.scss'

const Home = lazy(() => import('pages/home'))
const Products = lazy(() => import('pages/products'))
const UnderConstruction = lazy(() => import('pages/underConstruction'))

const Rootlayout = (P: RouteSectionProps) => {
    let loc = useLocation()

    createRenderEffect(
        on(
            () => loc.pathname,
            () => {
                const root = document.getElementById('root')
                if (!root) return

                root?.scrollTo({
                    top: 0,
                    behavior: 'instant',
                })
            }
        )
    )
    return (
        <>
            <Navbar />

            {P.children}

            <Footer />
        </>
    )
}

const Root = () => {
    return (
        <>
            <Router base='/' root={Rootlayout}>
                <Route path={'/'} component={Home}></Route>
                <Route path={'/products'} component={Products}></Route>

                <Route path='*' component={UnderConstruction} />
            </Router>

            <Alerts />
        </>
    )
}

render(() => <Root />, document.getElementById('root')!)
