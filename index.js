// lipu wan tomo
// Document Fragment Structurer

import { LitElement } from 'lit';

export const template = (html) => (c = LitElement) => {
    class b extends c {
        render() {
            return html;
        }
    };
    return b;
}

export const style = (css) => (c) => {
    class b extends c {
        static get styles() {
            const superStyles = c.styles;
            if (superStyles) return [...superStyles, css];
            return css;
        }
    }
    return b;
}

export const a11y = (options) => (c) =>  {
    class b extends c {
        static get properties() {
            return { ...c.properties,
                role: {type: String, attribute: true, reflect: true},
                label: {type: String, attribute: "aria-label", reflect: true},
                tabindex: {type: Number, attribute: true, reflect: true}
            }
        }

        connectedCallback() {
            super.connectedCallback();
            this.role = options.role;
            this.label = options.label;
            this.tabindex = options.tabindex;
        }
    }

    return b;
}

export const event = (options) => (c) => {
    class b extends c {
        connectedCallback() {
            super.connectedCallback();
            Object.entries(options).forEach(([key, func]) => {
                this.addEventListener(key, func.bind(this))
            })
        }
    }
    return b;
}

export const properties = (props) => (c) => {
    class b extends c {
        static get properties() {
            const oldProps = c.properties;
            return {
                ...oldProps,
                ...props
            }
        }
    }
    return b
}
export const compose = (arr) => {
    return arr.reduce((mixin, func) => func(mixin), LitElement)
}

/*

style = css`
    p {
        font-family: comic-sans
    }
`

func_comp('n-p', html`
    <p><slot></slot></p>
`, style);

*/