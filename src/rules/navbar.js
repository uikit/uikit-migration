export default {
    name:'navbar',
    docs:'@docs/navbar',
    messages: [
        {
            selector:'.uk-navbar',
            notice:'The content of the navbar needs to be wrapped into a container containing the float ( e.g. uk-navbar-left)',
            example:`<div class="uk-navbar">
    <div class="uk-navbar-left"></div>
    <div class="uk-navbar-center"></div>
    <div class="uk-navbar-right"></div>
</div>`
        },
        {
            selector:'.uk-navbar-flip',
            warning:'The class uk-navbar-flip has been renamed. Use the class uk-navbar-right instead. Make sure to wrap the navbar content which should be displayed on the left into a containter aswell.'
        },
        {
            selector:'.uk-navbar-content',
            warning:'The class uk-navbar-content has been renamed. Use the class uk-navbar-item instead.'
        },
        {
            selector:'.uk-navbar-brand',
            warning:'The class uk-navbar-brand has been removed. Use the classes uk-navbar-item and uk-logo instead.'
        },
        {
            selector:'.uk-navbar-toggle-alt',
            warning:'The class uk-navbar-toggle-alt has been removed. Remove this class and use the attribute uk-search-icon instead.'
        },
        {
            selector:'.uk-navbar-toggle:not([uk-search-icon]):not([uk-navbar-toggle-icon]):not(.uk-navbar-toggle-alt)',
            notice:'To get the burger menu you need the addition attribute uk-navbar-toggle-icon.'
        },
        {
            selector:'.uk-navbar-attached',
            warning:'The class uk-navbar-attached has been removed.'
        },
        {
            selector:'.uk-navbar-nav-subtitle',
            warning:'The class uk-navbar-nav-subtitle has been removed. You need to wrap the whole element in a div and add the class uk-navbar-subtitle to the div of the subtitle ( see example bellow ).',
            example:`<div>
    Item
    <div class="uk-navbar-subtitle">
        Subtitle
    </div>
</div>`
        }
    ]
};
