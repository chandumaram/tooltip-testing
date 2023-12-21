# Tooltip for Angular
### forked from cm-angular-tooltip

The tooltip is a pop-up tip that appears when you hover over an item or click on it.

## Installation

Install the npm package.

    npm i cm-angular-tooltip

        
### `app.module.ts`
```ts
import { TooltipModule } from 'cm-angular-tooltip';
 
@NgModule({
    imports: [ TooltipModule ]
}) 
```

## Angular Compatibility

| Angular Version | cm-angular-tooltip |
|-----------------|--------------------|
| 14 | 1.0.0 |


## Usage
    
Options can be set in the directive tag, so they have the highest priority.

```html
<span tooltip="Tooltip" placement="top" showDelay="500">Tooltip on top</span>
```

You may pass as an object:

```html
<span tooltip="Tooltip" [options]="myOptions">Tooltip on left</span>
```
```ts
myOptions = {
    'placement': 'left',
    'showDelay': 500
}
```

You can pass HTML as content :

```html
<span tooltip="<p>Hello i'm a <strong>bold</strong> text!</p>">
  Tooltip with HTML content
</span>
```

```html
<ng-template #HtmlContent>
  <p>Hello i'm a <strong>bold</strong> text!</p>
</ng-template>

<span [tooltip]="HtmlContent" contentType="template">
  Tooltip with template content
</span>
```

## Set default values

Create a file with your settings, for example:
```ts
import { TooltipOptions } from 'cm-angular-tooltip';

export const MyDefaultTooltipOptions: TooltipOptions = {
  'show-delay': 500
}
```
    
And pass your parameters when importing the module:
```ts
import { TooltipModule, TooltipOptions } from 'cm-angular-tooltip';
import { MyDefaultTooltipOptions } from './my-default-options';
 
@NgModule({
    imports: [ 
      TooltipModule.forRoot(MyDefaultTooltipOptions as TooltipOptions)
    ]
})
```

## Properties
| name             | type                                | default | description |
|------------------|-------------------------------------|---------|-------------|
| placement        | "top", "bottom", "left", "right"    | "top"   | The position of the tooltip.                |
| autoPlacement    | boolean                             | true    | Place the tooltip so that it does not go beyond the borders of the browser window. |
| showDelay       | number                              | 0       | The delay in ms before showing the tooltip. |
| hideDelay       | number                              | 300     | The delay in ms before removing the tooltip. |
| hideDelayTouchscreen | number                          | 0       | Delay in milliseconds before hiding the tooltip (for mobile devices). |
| display          | boolean                             | true    | Tooltip availability for display.           |
| displayTouchscreen | boolean                           | true    | Display the tooltip on mobile devices.      |
| zIndex          | number                              | 0       | Z-index of the tooltip.                     |
| trigger          | "hover", "click"                    | "hover" | Specifies how the tooltip is triggered. Control the closing time with "hide-delay". |
| tooltipClass    | string                              |         | Classes to be passed to the tooltip.        |
| animationDuration | number                            | 300     | The duration controls how long the animation takes to run from start to finish. |
| theme            | "dark", "light"                     | "dark"  | Theme of tooltip background and text.       |
| shadow           | boolean                             | true    | Shadow of the tooltip.                      |
| offset           | number                              | 8       | Offset the tooltip relative to the item.    |
| width            | number                              | undefined | Width of the tooltip.                     |
| maxWidth        | number                              | 200     | Maximum width of the tooltip.               |
| contentType     | "string", "html', "template"        | "string" | The content type passed to the tooltip.    |
| hideDelayAfterClick | number                           | 2000    | Tooltip hiding delay for "click" trigger.   |
| pointerEvents    | "auto", "none"                      | "none"  | Defines whether or not an element reacts to pointer events. |
| position         | {top: number, left: number}         | undefined | The tooltip coordinates relative to the browser window. |

## Events

When you call events, the delays that are specified in the options in the directive are taken into account. Default delay before tooltip hiding is 300 milliseconds.

| Event                             | Description |
|-----------------------------------|-------------|
| {type: "show", position: DOMRect} | The event is called before the tooltip appears. |
| {type: "shown", position: DOMRect} | The event is called after the animation of the appearance of the tooltip. |
| {type: "hide", position: DOMRect} | The event is called before the tooltip is hidden. |
| {type: "hidden", position: DOMRect} | The event is called after the animation of the tooltip is hidden. |

## Methods

If you specified the directive options, they will be taken into account when calling methods. Including the delay before the appearance and hiding of the tooltip.

| Method | Description |
|--------|-------------|
| show() | Shows the tooltip |
| hide() | Hides the tooltip |


## License
MIT

## Author
- Maram Chandrasekhar Reddy [@chandumaram](https://github.com/chandumaram)
