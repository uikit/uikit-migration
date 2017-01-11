var Migrate = function (rules) {

    var logs = {}, current_component, current_selector, color = {
        title: '#ee6666',
        warning: '#ffb24e',
        danger: '#e44e56',
        success: '#3dc372',
        link: '#4091D2',
    };

    function log(message, type) {
        logs[current_component][current_selector].messages.push({message, type});
    }

    /**
     * placeholder: @docs/componentname/#hash
     * @param placeholder
     */
    function createLink(placeholder) {
        var base = 'http://getuikit.com', parts = placeholder.split('/');
        if (placeholder === '@docs/home') {
            return base;
        }
        if (parts[0] === '@docs') {
            //todo fix links for UIkit3 site
            return `${base}/docs/${parts[1]}${(parts[2] || '')}`;
        } else {
            //external link
            return placeholder;
        }
    }

    function queryElements(selector) {
        try {
            return document.querySelectorAll(selector);
        } catch (ignore) {
            console.error(`Error in selector ${selector}`);
            return [];
        }
    }

    function doCheck() {
        var version = document.querySelector('html').dataset.uk_version;
        if (version) {
            console.message()
                .text(`UIkit version ${version} detected.`, {color: color.title, fontSize: 12})
                .line().print();
        }

        console.message()
            .text(`Starting migration helper`, {color: color.title, fontSize: 12})
            .line().print();

        rules.forEach(component => {
            current_component = component.name;
            logs[current_component] = {};

            component.messages.forEach(message => {
                var elements = queryElements(message.selector);
                //only add one group of messages per selector
                current_selector = message.selector;
                logs[current_component][current_selector] = {
                    warning: message.warning || '',
                    notice: message.notice || '',
                    messages: []
                };

                if (elements.length) {

                    //log messages
                    for (var index in elements) {
                        var ele = elements.index;
                        log(ele, 'element');
                        //check for additional messages
                        if (typeof message.check === 'function') {
                            var additionalMessage = message.check(ele);
                            if (additionalMessage) {
                                log(additionalMessage);
                            }

                        }
                    }
                    if (message.example) {
                        log(message.example, 'example');
                    }
                    //add link
                    log(message.docs || component.docs || '@docs/home', 'link');
                }
            });
        });
    }

    function doLog() {
        var components = Object.keys(logs), checkPassed = true;
        components.forEach((component_name) => {
            //always open the component group. Decide to print later.
            var component_logs = logs[component_name], selectors = Object.keys(component_logs),
                hasMessages = false,
                console_message = console.message()
                .group(true)
                .text(`Warnings found in component ${component_name}`, {color: color.danger, fontSize: 14})
                .line();

            selectors.forEach(selector => {
                var selector_log = component_logs[selector];
                if (selector_log.messages.length) {
                    hasMessages = true;
                    checkPassed = false;
                    //open selector group
                    console_message.group(false);
                    //set main notice/warning
                    if (selector_log.notice) {
                        console_message.text(`Notice: `, {color: color.warning, fontSize: 13})
                            .text(selector_log.notice, {fontSize: 12});
                    }
                    if (selector_log.warning) {
                        console_message.text(`Warning: `, {color: color.danger, fontSize: 13})
                            .text(selector_log.warning, {fontSize: 12});
                    }
                    console_message.line();
                    selector_log.messages.forEach(message => {
                        switch (message.type) {
                            case 'element':
                                console_message.element(message.message);
                                break;
                            case 'link':
                                console_message.text(`More info: ${createLink(message.message)}`, {color: color.link, fontSize: 12});
                                break;
                            case 'example':
                                console_message.text(message.message, {color: color.warning, fontSize: 12});
                                break;
                            default:
                                console_message.text(`Notice: `, {color: color.warning, fontSize: 12})
                                    .text(message.message, {fontSize: 12});
                                break;
                        }
                        console_message.line();
                    });
                    //end selector group
                    console_message.groupEnd();
                }
            });
            //end component group
            console_message.groupEnd();
            //only print component messages when messages are found
            if (hasMessages) {
                console_message.print();
            }
        });
        if (checkPassed) {
            console.message()
                .text('Bazinga! All code on this page is UIkit 3 proof!', {color: color.success, fontSize: 14})
                .print();
        }
    }

    return {
        check() {
            doCheck();
            doLog();
        }
    };

};

export default Migrate;
