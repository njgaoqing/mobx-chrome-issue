An example Chrome extension that shows that mobx observables don't work across
views and mobx instances.

## Steps

### Install this unpacked extension

1. Visit chrome://extensions (via omnibox or menu -> Tools -> Extensions).
2. Enable Developer mode by ticking the checkbox in the upper-right corner.
3. Click on the "Load unpacked extension..." button.
4. Select this repository's cloned directory.

## Inspect the background view

* Select the "background page" from the inspect views list and open the console.
* Once a second, the state is changed, and autorun is executed.

## Open the Options

* Open the console for this page.
* autorun is only ran once
