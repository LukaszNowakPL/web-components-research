import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'ln-action-section',
})
export class LnActionSection {
  @Prop() info?: string;

  render() {
    return (
      <div>
        {this.info && <p>{this.info}</p>}
        <div><slot /></div>
      </div>
    );
  }
}

