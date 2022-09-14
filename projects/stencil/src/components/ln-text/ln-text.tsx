import {Component, Prop, h, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'ln-text',
  styleUrl: 'ln-text.css',
})
export class LnText {
  @Prop() value?: string = '';
  @Prop() disabled?: boolean;

  @Event({eventName: 'valueChange', bubbles: false}) onChange: EventEmitter;

  // It's important to use a narrow function. Otherwise there are some errors.
  handleInputChange = (ev) => {
    this.onChange.emit(ev.target.value);
  }

  inputProps = {
    value: this.value,
    disabled: this.disabled,
    class: 'ln-text',
    oninput: this.handleInputChange
  }

  render() {
    return (
      <input type='text' {...this.inputProps} />
    );
  }
}

