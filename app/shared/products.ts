export type PRODUCT = {
    name: string
    flavours: string[]
    desc: string
    img: string
    description: string
    href: string
    price: number
    alt?: string
}

// TODO: FIX THE HREFS OF PRODUCTS

export const CHERRY_COLA_ICE: PRODUCT = {
    name: 'Host Hybrid Cherry Cola Ice',
    flavours: ['Cherry', 'Cola', 'Ice'],
    desc: 'Bright cherry and classic cola sweetness finished with a crisp icy cool-down.',
    description:
        'A nostalgic cherry-cola profile built on juicy cherry notes, a rich cola base, and a clean cooling finish. The flavor blends caramel sweetness, vanilla, citrus zest, and gentle spice for a smooth, refreshing vape with a polished adult feel.',
    img: '/images/products/cherry-cola-ice.jpg',
    href: '/products/host-hybrid-cherry-cola-ice',
    price: 5,
    alt: 'Host Hybrid Cherry Cola Ice',
}

export const STRAWBERRY_ICE: PRODUCT = {
    name: 'Host Hybrid Strawberry Ice',
    flavours: ['Strawberry', 'Ice'],
    desc: 'Juicy ripe strawberries with a bright, refreshing icy finish.',
    description:
        'Fresh-picked strawberry flavor leads the profile with lush berry sweetness, a light tart edge, and a delicate floral tone. A clean cooling finish keeps it crisp, vibrant, and easy to enjoy from the first draw to the last.',
    img: '/images/products/strawberry-ice.jpg',
    href: '/products/host-hybrid-strawberry-ice',
    price: 5,
    alt: 'Host Hybrid Strawberry Ice',
}

export const PEACH_PUNCH_FIZZ: PRODUCT = {
    name: 'Host Hybrid Peach Punch Fizz',
    flavours: ['Peach', 'Punch', 'Fizz'],
    desc: 'Soft peach sweetness with lively citrus punch and sparkling fizz.',
    description:
        'This blend opens with sun-ripened peach and soft floral sweetness, then adds a bright mixed-fruit punch layer for extra lift. A fizzy soda-like finish gives it a sparkling, energetic character without overpowering the fruit.',
    img: '/images/products/peach-punch-fizz.jpg',
    href: '/products/host-hybrid-peach-punch-fizz',
    price: 5,
    alt: 'Host Hybrid Peach Punch Fizz',
}

export const TOBACCO_VANILLA_CARAMEL: PRODUCT = {
    name: 'Host Hybrid Tobacco Vanilla Caramel',
    flavours: ['Tobacco', 'Vanilla', 'Caramel'],
    desc: 'Warm tobacco wrapped in smooth vanilla and golden caramel.',
    description:
        'A rich tobacco blend with earthy, toasted depth is softened by creamy vanilla and finished with buttery caramel. The result is full-bodied, balanced, and dessert-like without losing the classic tobacco character.',
    img: '/images/products/tobacco-vanilla-caramel.jpg',
    href: '/products/host-hybrid-tobacco-vanilla-caramel',
    price: 5,
    alt: 'Host Hybrid Tobacco Vanilla Caramel',
}

export const SOUR_APPLE_ICE: PRODUCT = {
    name: 'Host Hybrid Sour Apple Ice',
    flavours: ['Green Apple', 'Sour', 'Ice'],
    desc: 'Sharp green apple tang with a cool icy finish.',
    description:
        'Crisp sour apple drives this flavor with tart skin, juicy flesh, and a lively acidic bite. A touch of sweetness smooths the edge, while the icy finish keeps every inhale bright and refreshing.',
    img: '/images/products/sour-apple-ice.jpg',
    href: '/products/host-hybrid-sour-apple-ice',
    price: 5,
    alt: 'Host Hybrid Sour Apple Ice',
}

export const GUMMY_BEARS: PRODUCT = {
    name: 'Host Hybrid Gummy Bears',
    flavours: ['Mixed Fruit', 'Candy', 'Gummy'],
    desc: 'A playful candy-style mix of juicy fruits and soft sweetness.',
    description:
        'This candy profile combines strawberry, orange, lemon, and cherry into a colorful gummy-bear blend. Sweet and nostalgic, it delivers a smooth fruit-candy character that stays bright without becoming heavy.',
    img: '/images/products/gummy-bears.jpg',
    href: '/products/host-hybrid-gummy-bears',
    price: 5,
    alt: 'Host Hybrid Gummy Bears',
}

export const RED_MOJITO: PRODUCT = {
    name: 'Host Hybrid Red Mojito',
    flavours: ['Mint', 'Lime', 'Red Berries', 'Mojito'],
    desc: 'Mint and lime mojito with a juicy red-berry twist.',
    description:
        'Fresh mint and zesty lime build the classic mojito base, then ripe red berries add a juicy layer of sweetness and tartness. The result is cool, vibrant, and cocktail-inspired with a clean finish.',
    img: '/images/products/red-mojito.jpg',
    href: '/products/host-hybrid-red-mojito',
    price: 5,
    alt: 'Host Hybrid Red Mojito',
}

export const NEW_YORK_CHEESECAKE: PRODUCT = {
    name: 'Host Hybrid New York Cheesecake',
    flavours: ['Cheesecake', 'Vanilla', 'Graham Cracker', 'Lemon'],
    desc: 'Creamy cheesecake with vanilla, graham crust, and a hint of citrus.',
    description:
        'A dense cheesecake base delivers rich creaminess, soft vanilla, and a subtle tang. Graham-cracker crust and a light lemon lift add depth and balance, creating a smooth dessert flavor with a refined finish.',
    img: '/images/products/new-york-cheesecake.jpg',
    href: '/products/host-hybrid-new-york-cheesecake',
    price: 5,
    alt: 'Host Hybrid New York Cheesecake',
}

export const FOREST_FRUIT_LEATHER: PRODUCT = {
    name: 'Host Hybrid Forest Fruit Leather',
    flavours: ['Blackberry', 'Raspberry', 'Blueberry', 'Blackcurrant'],
    desc: 'Deep mixed forest berries with a dense fruit-leather feel.',
    description:
        'Bold wild berries come together in a concentrated jammy blend of blackberry, raspberry, blueberry, and blackcurrant. A dried-fruit depth gives it a chewy fruit-leather character with a rich, slightly earthy finish.',
    img: '/images/products/forest-fruit-leather.jpg',
    href: '/products/host-hybrid-forest-fruit-leather',
    price: 5,
    alt: 'Host Hybrid Forest Fruit Leather',
}

export const CACTUS_ICE: PRODUCT = {
    name: 'Host Hybrid Cactus Ice',
    flavours: ['Cactus', 'Prickly Pear', 'Ice'],
    desc: 'Fresh cactus sweetness with a clean, cooling finish.',
    description:
        'Light cactus notes bring a watery green freshness, subtle floral tones, and gentle prickly-pear sweetness. The icy finish keeps it crisp and revitalizing, giving the flavor a clean spa-like feel.',
    img: '/images/products/cactus-ice.jpg',
    href: '/products/host-hybrid-cactus-ice',
    price: 5,
    alt: 'Host Hybrid Cactus Ice',
}

export const ORANGE_FIZZ: PRODUCT = {
    name: 'Host Hybrid Orange Fizz',
    flavours: ['Orange', 'Fizz'],
    desc: 'Bright orange citrus with a sparkling soda-style finish.',
    description:
        'Juicy orange leads with sweet citrus flesh, zest, and a lively tang that feels like sparkling orange soda. The fizzy finish adds a clean tingling sensation and keeps the profile light and refreshing.',
    img: '/images/products/orange-fizz.jpg',
    href: '/products/host-hybrid-orange-fizz',
    price: 5,
    alt: 'Host Hybrid Orange Fizz',
}

export const LEMON_LIME_ICE: PRODUCT = {
    name: 'Host Hybrid Lemon Lime Ice',
    flavours: ['Lemon', 'Lime', 'Ice'],
    desc: 'Sharp lemon-lime citrus with a refreshing icy chill.',
    description:
        'Tangy lemon zest and juicy lime create a crisp citrus profile with bright acidity and a clean sweetness. A cool icy finish rounds it out, making the blend sharp, refreshing, and easy to keep coming back to.',
    img: '/images/products/lemon-lime-ice.jpg',
    href: '/products/host-hybrid-lemon-lime-ice',
    price: 5,
    alt: 'Host Hybrid Lemon Lime Ice',
}

export const TRIPLE_BERRY_ICE: PRODUCT = {
    name: 'Host Hybrid Triple Berry Ice',
    flavours: ['Strawberry', 'Raspberry', 'Blueberry', 'Ice'],
    desc: 'A juicy berry trio finished with a fresh icy breeze.',
    description:
        'Ripe strawberry, tart raspberry, and sweet blueberry combine into a layered berry blend with both brightness and depth. The cooling finish keeps the profile crisp, smooth, and highly refreshing.',
    img: '/images/products/triple-berry-ice.jpg',
    href: '/products/host-hybrid-triple-berry-ice',
    price: 5,
    alt: 'Host Hybrid Triple Berry Ice',
}

export const CUCUMBER_LIME_ICE: PRODUCT = {
    name: 'Host Hybrid Cucumber Lime Ice',
    flavours: ['Cucumber', 'Lime', 'Ice'],
    desc: 'Cool cucumber freshness with bright lime and icy clarity.',
    description:
        'Fresh cucumber brings a clean, watery green note, while lime adds a sharp citrus lift. The icy finish makes the whole profile feel crisp, airy, and spa-like from start to finish.',
    img: '/images/products/cucumber-lime-ice.jpg',
    href: '/products/host-hybrid-cucumber-lime-ice',
    price: 5,
    alt: 'Host Hybrid Cucumber Lime Ice',
}

export const RED_WINE_ICE: PRODUCT = {
    name: 'Host Hybrid Red Wine Ice',
    flavours: ['Red Wine', 'Black Cherry', 'Plum', 'Ice'],
    desc: 'Dark fruit red wine notes softened by a cool icy finish.',
    description:
        'A sophisticated red-wine profile with black cherry, plum, and soft oak undertones delivers depth and richness. Cooling ice smooths the finish and keeps the flavor elegant, dry, and refreshing.',
    img: '/images/products/red-wine-ice.jpg',
    href: '/products/host-hybrid-red-wine-ice',
    price: 5,
    alt: 'Host Hybrid Red Wine Ice',
}

export const PINEAPPLE_ICE: PRODUCT = {
    name: 'Host Hybrid Pineapple Ice',
    flavours: ['Pineapple', 'Ice'],
    desc: 'Sweet tropical pineapple with a bright cooling finish.',
    description:
        'Sun-ripened pineapple brings juicy tropical sweetness, gentle tartness, and a fresh-cut feel. A clean icy finish adds brightness and makes the flavor feel lively, crisp, and refreshing.',
    img: '/images/products/pineapple-ice.jpg',
    href: '/products/host-hybrid-pineapple-ice',
    price: 5,
    alt: 'Host Hybrid Pineapple Ice',
}

export const PRODUCTS: PRODUCT[] = [
    CHERRY_COLA_ICE,
    STRAWBERRY_ICE,
    PEACH_PUNCH_FIZZ,
    TOBACCO_VANILLA_CARAMEL,
    SOUR_APPLE_ICE,
    GUMMY_BEARS,
    RED_MOJITO,
    NEW_YORK_CHEESECAKE,
    FOREST_FRUIT_LEATHER,
    CACTUS_ICE,
    ORANGE_FIZZ,
    LEMON_LIME_ICE,
    TRIPLE_BERRY_ICE,
    CUCUMBER_LIME_ICE,
    RED_WINE_ICE,
    PINEAPPLE_ICE,
]

export const NEW_ARRIVALS: PRODUCT[] = [
    CHERRY_COLA_ICE,
    STRAWBERRY_ICE,
    PEACH_PUNCH_FIZZ,
    TOBACCO_VANILLA_CARAMEL,
]

export const BEST_SELLERS: PRODUCT[] = [
    GUMMY_BEARS,
    RED_MOJITO,
    NEW_YORK_CHEESECAKE,
    FOREST_FRUIT_LEATHER,
]
