import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ln-line',
  styleUrl: 'ln-line.css',
})
export class LnLine {
  classPrefix:string = 'ln-line'

  @Prop() variant?: 'primary' | 'secondary' = 'primary';

  classBasic:string = this.classPrefix;
  classVariant:string = `${this.classPrefix}--${this.variant}`

  render() {
    return (
      <hr class={`${this.classBasic} ${this.classVariant}`} />
    );
  }
}

