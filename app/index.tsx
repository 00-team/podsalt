import { Route, Router, RouteSectionProps } from '@solidjs/router'
import { Component } from 'solid-js'
import { render } from 'solid-js/web'

// import Alert from 'comps/alert'

import './style/index.scss'

const App: Component<RouteSectionProps> = () => {
    return <div>hi from pod</div>
}

const Root = () => {
    return (
        <>
            <Router>
                <Route path='/' component={App}>
                    <Route
                        path='*'
                        component={() => (
                            <span id='select-tab' class='title_small'>
                                بخش مورد نظر خود را انتخاب کنید
                            </span>
                        )}
                    />
                </Route>
            </Router>
            {/* <Alert /> */}
        </>
    )
}

render(() => <Root />, document.getElementById('root')!)
