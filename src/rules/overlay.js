export default {
    name:'overlay',
    docs:'@docs/overlay',
    messages: [
        {
            selector:'.uk-overlay:not([class*="uk-position-"])',
            warning:'The uk-overlay class has been reworked use uk-inline-clip instead.'
        },
        {
            selector:'.uk-overlay-panel',
            warning:'The class uk-overlay-panel has been removed. Use the class uk-overlay instead.',
            check: function (element) {

                if ( element.className.indexOf('uk-overlay-top') === -1 && element.className.indexOf('uk-overlay-bottom') === -1 && element.className.indexOf('uk-overlay-left') === -1 && element.className.indexOf('uk-overlay-right') === -1 ) {
                    return 'The positioning of the overlay has been changed, instead of using flex classes or overlay position classes us the uk-position classes instead ( e.g. uk-position-cover ).';
                }
            }
        },
        {
            selector:'.uk-overlay-background',
            warning:'The classes uk-overlay-background has been removed. Use the class uk-overlay-default instead.'
        },
        {
            selector:'.uk-overlay-top',
            warning:'The class uk-overlay-top has been removed. Use the class uk-position-top instead.'
        },
        {
            selector:'.uk-overlay-right',
            warning:'The class uk-overlay-right has been removed. Use the class uk-position-right instead.'
        },
        {
            selector:'.uk-overlay-bottom',
            warning:'The class uk-overlay-bottom has been removed. Use the class uk-position-bottom instead.'
        },
        {
            selector:'.uk-overlay-left',
            warning:'The class uk-overlay-left has been removed. Use the class uk-position-left instead.'
        },
        {
            selector:'.uk-overlay-hover',
            warning:'The class uk-overlay-hover has been removed. Use the class uk-transition-toggle instead.'
        },
        {
            selector:'.uk-overlay-slide-top:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-slide-top has been removed. Use the class uk-transition-slide-top instead.'
        },
        {
            selector:'.uk-overlay-slide-bottom:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-slide-bottom has been removed. Use the class uk-transition-slide-bottom instead.'
        },
        {
            selector:'.uk-overlay-slide-left:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-slide-left has been removed. Use the class uk-transition-slide-left instead.'
        },
        {
            selector:'.uk-overlay-slide-right:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-slide-right has been removed. Use the class uk-transition-slide-right instead.'
        },
        {
            selector:'.uk-overlay-fade:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-fade has been removed. Use the class uk-transition-fade instead.'
        },
        {
            selector:'.uk-overlay-scale:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-scale has been removed. Use the class uk-transition-scale-up instead.'
        },
        {
            selector:'.uk-overlay-spin',
            warning:'The class uk-overlay-spin has been removed. Use one of the other uk-transition classes instead (e.g. uk-transition-scale-up).'
        },
        {
            selector:'.uk-overlay-grayscale',
            warning:'The class uk-overlay-grayscale has been removed. Use one of the other uk-transition classes instead (e.g. uk-transition-scale-up).'
        },
        {
            selector:'.uk-overlay-icon:not([uk-overlay-icon])',
            warning:'The class uk-overlay-icon has been changed. Use a div with the uk-position-center class and in here use a span with the attribute uk-overlay-icon instead.',
            example:`<div class="uk-position-center">
    <span uk-overlay-icon>
    </span>
</div>`
        },
        {
            selector:'.uk-overlay-slide-top.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:`<div class="uk-position-center">
    <div class="uk-transition-slide-top">
        <span uk-overlay-icon>
        </span>
    </div>
</div>`
        },
        {
            selector:'.uk-overlay-slide-bottom.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:`<div class="uk-position-center">
    <div class="uk-transition-slide-bottom">
        <span uk-overlay-icon>
        </span>
    </div>
</div>`
        },
        {
            selector:'.uk-overlay-slide-left.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:`<div class="uk-position-center">
    <div class="uk-transition-slide-left">
        <span uk-overlay-icon>
        </span>
    </div>
</div>`
        },
        {
            selector:'.uk-overlay-slide-right.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:`<div class="uk-position-center">
    <div class="uk-transition-slide-right">
        <span uk-overlay-icon>
        </span>
    </div>
</div>`
        },
        {
            selector:'.uk-overlay-fade.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:`<div class="uk-position-center">
    <div class="uk-transition-fade">
        <span uk-overlay-icon>
        </span>
    </div>
</div>`
        },
        {
            selector:'.uk-overlay-scale.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:`<div class="uk-position-center">
    <div class="uk-transition-scale">
        <span uk-overlay-icon>
        </span>
    </div>
</div>`
        },
        {
            selector:'img.uk-overlay-scale',
            notice:'If you want to achieve a \'soft\' animation where the image is visible by default, use additionaly the class uk-transition-opaque.'
        },
        {
            selector:'.uk-overlay-image',
            warning:'The class uk-overlay-image has been removed. Remove the class uk-overlay / uk-overlay-panel and use the class uk-position-cover instead.'
        },
        {
            selector:'.uk-thumbnail',
            warning:'The class uk-thumbnail has been removed. You can try to rebuild this design with the uk-card classes.',
            docs:'@docs/card'
        }
    ]
};