import { Component } from '@angular/core';

@Component({
  selector: 'app-ph-d',
  templateUrl: './ph-d.component.html',
  styleUrls: ['./ph-d.component.css']
})

export class PhDComponent {

  readonly studentMapping = {
    'yibin-zhang': 'Zhang, Y',
    'nischal-bhattarai': 'Bhattarai, N',
    // ... add other students here
  }

}

