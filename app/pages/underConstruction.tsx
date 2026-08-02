import { Component } from 'solid-js'

import './style/underConstruction.scss'

const UnderConstruction: Component = () => {
    return (
        <main class='under-construction-container'>
            <img
                src='/public/imgs/logo.webp'
                class='logo'
                alt='pod salt prime logo'
            />

            <div class='titles'>
                <div class='head section_title'>
                    <span>Site Under Construction</span>
                </div>

                <div class='sub title_small'>
                    An all-new site is coming soon
                </div>
            </div>
        </main>
    )
}

export default UnderConstruction
