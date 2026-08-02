import { Route, Router, RouteSectionProps } from '@solidjs/router'
import { render } from 'solid-js/web'

// import Alert from 'comps/alert'

import Alerts from 'components/alert'
import Footer from 'layout/footer'
import Navbar from 'layout/navbar'
import { lazy } from 'solid-js'
import './style/base.scss'
import './style/theme.scss'

const Home = lazy(() => import('pages/home'))
const UnderConstruction = lazy(() => import('pages/underConstruction'))

const Rootlayout = (P: RouteSectionProps) => {
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

                <Route path='*' component={UnderConstruction} />
            </Router>

            <Alerts />
        </>
    )
}

render(() => <Root />, document.getElementById('root')!)
