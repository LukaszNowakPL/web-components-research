import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ln-header',
  styleUrl: 'ln-header.css',
})
export class LnHeader {

  @Prop() variant?: 'primary' | 'secondary' = 'primary';
  @Prop() level?: 2 | 3;

  render() {
    return (
      <div>
        {this.level === 2 ? <h2><slot /></h2> : <h3><slot /></h3>}
        <div class={'ln-header_underline-container'}>
          <ln-line variant={this.variant} />
        </div>
      </div>
    );
  }
}

