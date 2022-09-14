/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LnActionSection {
        "info"?: string;
    }
    interface LnButton {
        "disabled"?: boolean;
        "variant"?: 'primary' | 'secondary';
    }
    interface LnHeader {
        "level"?: 2 | 3;
        "variant"?: 'primary' | 'secondary';
    }
    interface LnLine {
        "variant"?: 'primary' | 'secondary';
    }
    interface LnText {
        "disabled"?: boolean;
        "value"?: string;
    }
}
export interface LnButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLnButtonElement;
}
export interface LnTextCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLnTextElement;
}
declare global {
    interface HTMLLnActionSectionElement extends Components.LnActionSection, HTMLStencilElement {
    }
    var HTMLLnActionSectionElement: {
        prototype: HTMLLnActionSectionElement;
        new (): HTMLLnActionSectionElement;
    };
    interface HTMLLnButtonElement extends Components.LnButton, HTMLStencilElement {
    }
    var HTMLLnButtonElement: {
        prototype: HTMLLnButtonElement;
        new (): HTMLLnButtonElement;
    };
    interface HTMLLnHeaderElement extends Components.LnHeader, HTMLStencilElement {
    }
    var HTMLLnHeaderElement: {
        prototype: HTMLLnHeaderElement;
        new (): HTMLLnHeaderElement;
    };
    interface HTMLLnLineElement extends Components.LnLine, HTMLStencilElement {
    }
    var HTMLLnLineElement: {
        prototype: HTMLLnLineElement;
        new (): HTMLLnLineElement;
    };
    interface HTMLLnTextElement extends Components.LnText, HTMLStencilElement {
    }
    var HTMLLnTextElement: {
        prototype: HTMLLnTextElement;
        new (): HTMLLnTextElement;
    };
    interface HTMLElementTagNameMap {
        "ln-action-section": HTMLLnActionSectionElement;
        "ln-button": HTMLLnButtonElement;
        "ln-header": HTMLLnHeaderElement;
        "ln-line": HTMLLnLineElement;
        "ln-text": HTMLLnTextElement;
    }
}
declare namespace LocalJSX {
    interface LnActionSection {
        "info"?: string;
    }
    interface LnButton {
        "disabled"?: boolean;
        "onButtonClick"?: (event: LnButtonCustomEvent<any>) => void;
        "variant"?: 'primary' | 'secondary';
    }
    interface LnHeader {
        "level"?: 2 | 3;
        "variant"?: 'primary' | 'secondary';
    }
    interface LnLine {
        "variant"?: 'primary' | 'secondary';
    }
    interface LnText {
        "disabled"?: boolean;
        "onValueChange"?: (event: LnTextCustomEvent<any>) => void;
        "value"?: string;
    }
    interface IntrinsicElements {
        "ln-action-section": LnActionSection;
        "ln-button": LnButton;
        "ln-header": LnHeader;
        "ln-line": LnLine;
        "ln-text": LnText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ln-action-section": LocalJSX.LnActionSection & JSXBase.HTMLAttributes<HTMLLnActionSectionElement>;
            "ln-button": LocalJSX.LnButton & JSXBase.HTMLAttributes<HTMLLnButtonElement>;
            "ln-header": LocalJSX.LnHeader & JSXBase.HTMLAttributes<HTMLLnHeaderElement>;
            "ln-line": LocalJSX.LnLine & JSXBase.HTMLAttributes<HTMLLnLineElement>;
            "ln-text": LocalJSX.LnText & JSXBase.HTMLAttributes<HTMLLnTextElement>;
        }
    }
}
