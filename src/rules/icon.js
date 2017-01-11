export default {
    name: 'icon',
    docs: '@docs/icon',
    messages: [
        {
            selector:'*[class^="uk-icon-"]:not([uk-icon])',
            warning:'There are no icons via classes any longer ( e.g. uk-icon-file ) use the JavaScript parameter \'icon\' for the uk-icon attribute (e.g. uk-icon="icon:file").'
        },
        {
            selector:'.uk-icon-small',
            warning:'The class uk-icon-small doesn\'t exist anymore. Use the class JavaScript ratio parameter instead (e.g. uk-icon=\'ratio: 1\').'
        },
        {
            selector:'.uk-icon-medium',
            warning:'The class uk-icon-medium doesn\'t exist anymore. Use the class JavaScript ratio parameter instead (e.g. uk-icon=\'ratio: 2\').'
        },
        {
            selector:'.uk-icon-large',
            warning:'The class uk-icon-large doesn\'t exist anymore. Use the class JavaScript ratio parameter instead (e.g. uk-icon=\'ratio: 3\').'
        },
        {
            selector:'.uk-icon-spin',
            warning:'The class uk-icon-spin doesn\'t exist anymore.'
        },
        {
            selector:'.uk-icon-justify',
            warning:'The class uk-icon-justify doesn\'t exist anymore.'
        },
        {
            selector:'.uk-icon-hover',
            warning:'The class uk-icon-hover has been renamed please use uk-icon-link class instead.'
        }
    ]
};