import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wave-divider',
  standalone: true,
  templateUrl: './wave-divider.html',
  styles: [':host { display: block; line-height: 0; }']
})
export class WaveDivider {
  @Input() variant: 'down' | 'up' | 'organic' = 'down';
  @Input() fill: string = '#1e3a6e';
}
