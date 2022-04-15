toki! jan Nisula li lon.

# Lipu Wan Tomo

A silly functional wrapper around lit with a silly name. The name is toki pona for "Document Fragment Structure".

## Description

This library allows you to compose lit components out of functions which I personally prefer over using classes.

## Example

```javascript
import {compose, template, style } from 'lipu-wan-tomo';

customElements.define('n-p', 
    compose([
        template(html`<p><slot></slot></p>`),
        style(css`
            :host {
                font-weight: 300;
                font-size: 1rem;
            }
        `)
    ])
);
```

Here you can see that we've created a simple restyling of the paragraph element. There are other functions for additional complexity but this library excels at creating simple, functional components without any or much state.

## Functions

```javascript
LitElementMixinBuilder(mixin) => mixin

compose(LitElementMixinBuilder[]]) => mixin

// this goes into the render function
template(LitHTMLTemplate) => LitElementMixinBuilder
// this sets the css properties
style(LitCSSObject) => LitElementMixinBuilder
// adds some basic a11y properties and reflects them
a11y({ label, tabindex, role }) => LitElementMixinBuilder
// states that update the component
properties(LitElementPropertiesObject) => LitElementMixinBuilder
// how the component handles interactions or data communication
event(EventObject) => LitElementMixinBuilder
```

All the functions return the same function so you can chain them together

```javascript
template(/*a template*/)(
    style(/*a style*/)(
        properties(/*some properties*/)(LitElement)
    )
)
```

Or you can use compose like in the example above.

