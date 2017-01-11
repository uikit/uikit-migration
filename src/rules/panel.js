export default {
    name: 'panel',
    docs: '@docs/panel',
    messages: [
        {
            selector:'.uk-panel.uk-panel-box:not(.uk-panel-box-primary):not(.uk-panel-box-secondary)',
            warning:'The uk-panel-box has been renamed into uk-card. Remove the class uk-panel and uk-panel-box and add uk-card and uk-card-default class instead.',
            check: function (ele) {
                if (!ele.querySelectorAll('div').length) {
                    return 'To add additional padding use the class uk-card-body';
                }
            }
        },
        {
            selector:'.uk-panel-box.uk-panel-box-primary',
            warning:'The uk-panel-box has been renamed into uk-card. Remove the classes uk-panel, uk-panel-box, uk-panel-box-primary and add uk-card and uk-card-primary classes instead.'
        },
        {
            selector:'.uk-panel-box.uk-panel-box-secondary',
            warning:'The uk-panel-box has been renamed into uk-card. Remove the classes uk-panel, uk-panel-box, uk-panel-box-secondary and add uk-card and uk-card-primary classes instead.'
        },
        {
            selector:'.uk-panel-box-hover',
            warning:'The uk-panel-box-hover has been renamed into uk-card-hover.'
        },
        {
            selector:'.uk-panel-box-primary-hover',
            warning:'There is no difference within the hover classes anymore. Use the uk-card-hover instead.'
        },
        {
            selector:'.uk-panel-box-secondary-hover',
            warning:'There is no difference within the hover classes anymore. Use the uk-card-hover instead.'
        },
        {
            selector:'.uk-panel-box .uk-panel-title',
            warning:'The class uk-panel-title has been removed. Use uk-card-title class instead.'
        },
        {
            selector:'.uk-panel-box .uk-panel-badge',
            warning:'The class uk-panel-badge has been removed. Use uk-card-badge class instead.'
        },
        {
            selector:'.uk-panel-body',
            warning:'The class uk-panel-body has been removed. Use uk-card-body class instead.'
        },
        {
            selector:'.uk-panel-box .uk-panel-teaser',
            warning:'The class uk-panel-teaser has been removed. Use uk-card-media-top class instead and wrap the content of the panel within an div element with the uk-card-body class.'
        },
        {
            selector:'.uk-panel:not(.uk-panel-box).uk-panel-hover',
            warning:'The class uk-panel-hover has been removed from the default uk-panel.'
        },
        {
            selector:'.uk-panel:not(.uk-panel-box) .uk-panel-title',
            warning:'The class uk-panel-title has been removed from the default uk-panel, use the text utility classes instead.'
        },
        {
            selector:'.uk-panel:not(.uk-panel-box) .uk-panel-badge',
            warning:'The class uk-panel-badge has been removed. You can use the position classes (e.g. uk-position-top-right ) instead to position a label or badge in the panel.'
        },
        {
            selector:'.uk-panel-header',
            warning:'The class uk-panel-header has been removed. Use a <hr> element between the title and content instead.'
        },
        {
            selector:'.uk-panel-divider',
            warning:'The class uk-panel-divider has been removed. Use a <hr> element between the panels instead.'
        },
        {
            selector:'.uk-panel-space',
            warning:'The class uk-panel-space has been removed. Use uk-padding-* classes instead (e.g. uk-padding-large).'
        },
        {
            selector:'a.uk-panel',
            warning:'The class uk-panel can\'t be used with the <a> element anylonger instead use a <div> element and add an <a> element with the class uk-position-cover.',
            example: `<div class="uk-panel uk-padding-small">
    <h3 class="uk-text-large">Title</h3>
    <p>Text Text Text Text Text Text Text Text</p>
    <a class="uk-position-cover" href="#"></a>
</div>`
        },
        {
            selector:'a.uk-card',
            warning:'The class uk-card can\'t be used with the <a> element anylonger instead use a <div> element and add an <a> element with the class uk-position-cover.',
            example: `<div class="uk-card uk-card-body">
    <h3 class="uk-card-title">Title</h3>
    <p>Text Text Text Text Text Text Text Text</p>
    <a class="uk-position-cover" href="#"></a>
</div>`
        }
    ]
};