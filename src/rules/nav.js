export default {
        name: 'nav',
        docs: '@docs/nav',
        messages: [
            {
                selector: '[data-uk-nav]',
                warning: 'The attribute data-uk-nav has been renamed. Use the attribute uk-nav instead.'
            },
            {
                selector: '.uk-nav-side',
                warning: 'The class uk-nav-side has been renamed. Use class uk-nav-default instead.'
            },
            {
                selector: '.uk-nav-dropdown',
                warning: 'The class uk-nav-dropdown has been renamed. Use class uk-dropdown-nav instead.'
            },
            {
                selector: '.uk-nav-navbar',
                warning: 'The class uk-nav-navbar has been renamed. Use class uk-navbar-dropdown-nav instead.'
            },
            {
                selector: '.uk-nav-offcanvas',
                warning: 'The class uk-nav-offcanvas has been removed. Use class uk-nav-default instead.'
            }
        ]
    };