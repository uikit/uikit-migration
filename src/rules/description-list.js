export default {
    name:'description-list',
    docs:'@docs/description-list',
    messages: [
        {
            selector:'.uk-description-list-line',
            warning:'Class needs to be replaced by the new class uk-description-list-divider.'
        },
        {
            selector:'.uk-description-list-horizontal',
            warning:'Class doesn\'t exist anymore, needs to be build with the uk-grid classes',
            example:`<dl class="uk-description-list uk-child-width-1-2" uk-grid>
    <dt class="uk-margin-remove">Description lists</dt>
    <dd class="uk-margin-remove">A description list defines terms and their corresponding descriptions.</dd>
    <dt class="uk-margin-remove">Lorem ipsum</dt>
    <dd class="uk-margin-remove">Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt class="uk-margin-remove">A long term is truncated</dt>
    <dd class="uk-margin-remove">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
</dl>`
        }
    ]
};