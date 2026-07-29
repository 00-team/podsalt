import { Route, Router } from '@solidjs/router'
import { render } from 'solid-js/web'

// import Alert from 'comps/alert'

import Home from 'pages/home'
import './style/base.scss'
import './style/base.scss'
import './style/theme.scss'

const Root = () => {
    return (
        <>
            <Router>
                <Route path='/' component={Home}></Route>
            </Router>
            {/* <Alert /> */}
        </>
    )
}

render(() => <Root />, document.getElementById('root')!)
