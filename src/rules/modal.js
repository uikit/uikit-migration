export default {
    name:'modal',
    messages: [
        {
            selector:'[data-uk-modal]',
            warning:'The attribute data-uk-modal is not needed any longer, use the uk-toggle attribute instead.'
        },
        {
            selector:'.uk-modal:not([uk-modal])',
            warning:'The class uk-modal has been changed. Use the attribute uk-modal instead.'
        },
        {
            selector:'.uk-modal-dialog:not(.uk-modal-body):not(.uk-modal-lightbox)',
            notice:'The class uk-modal-dialog has been changed. The content of the modal needs to be wrapped in a uk-modal-body class. If you don\'t have a uk-modal-dialog-title or uk-modal-dialog-footer you can just add the class uk-modal-body to the dialog itself.',
            example:`<div class="uk-modal-dialog">
    <div class="uk-modal-header">
        <h2>Headline</h2>
    </div>
    <div class="uk-modal-body">
        <p>Content</p>
    </div>
    <div class="uk-modal-footer">
        <button>Close</button>
    </div>
</div>`
        },
        {
            selector:'.uk-modal-close.uk-close-alt',
            warning:'The class uk-close-alt has been removed. Use the classes uk-modal-close-outside with the uk-close attribute instead.'
        },
        {
            selector:'.uk-close.uk-modal-close',
            warning:'The class uk-modal-close has been removed. Use the classes uk-modal-close-default with the uk-close attribute instead.'
        },
        {
            selector:'.uk-modal-dialog-lightbox',
            warning:'The class uk-modal-dialog-lightbox has been removed. Use the classes uk-modal-lightbox instead.'
        },
        {
            selector:'.uk-modal-dialog-blank',
            notice:'The class uk-modal-dialog-blank has been removed. If you want to achieve a fullscreen modal, add the class uk-modal-full to the element holding the uk-modal attribute.',
            example:`<div id="modalfullscreen" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <p> Content here </p>
    </div>
</div>`
        },
        {
            selector:'.uk-modal-dialog-large',
            warning:'The class uk-modal-dialog-large has been removed. Add the class uk-modal-container to the element holding the attribute uk-modal.'
        },
        {
            selector:'.uk-modal-spinner',
            warning:'The class uk-modal-spinner has been removed. Use the attribute uk-spinner instead.'
        }
    ]
};