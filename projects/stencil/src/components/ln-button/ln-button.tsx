import {Component, Prop, h, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'ln-button',
  styleUrl: 'ln-button.css',
})
export class LnButton {
  classPrefix:string = 'ln-button'

  @Prop() variant?: 'primary' | 'secondary' = 'primary';
  @Prop() disabled?: boolean;

  @Event({eventName: 'buttonClick', bubbles: false}) onClick: EventEmitter;

  // It's important to use a narrow function. Otherwise there are some errors.
  handleButtonClick = (ev) => {
    this.onClick.emit(ev);
  }

  classBasic:string = this.classPrefix;
  classVariant:string = `${this.classPrefix}--${this.variant}`

  buttonProps = {
    disabled: this.disabled,
    class: `${this.classBasic} ${this.classVariant}`,
    onClick: this.handleButtonClick
  }

  render() {
    return (
      <button {...this.buttonProps}><slot /></button>
    );
  }
}

