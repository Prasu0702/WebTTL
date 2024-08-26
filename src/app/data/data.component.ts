import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {
// The method to handle the button click
  navigateToLink() {
      window.open('https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftexastechuniversity-my.sharepoint.com%2F%3Af%3A%2Fg%2Fpersonal%2Fnischal_bhattarai_ttu_edu%2FEnWWOVjazoZLteU0JB0saWIBzj_LvztJhMUqxs7GDx4D7A%3Fe%3Drokba2&data=05%7C01%7Clvemula%40ttu.edu%7C69d0e07c8d9f463356cb08dbcf501ef3%7C178a51bf8b2049ffb65556245d5c173c%7C0%7C0%7C638331715239261595%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=gle7BVnV%2FM5iN32S9B43SDjETC3fk%2B3cLgEEtjGK2JE%3D&reserved=0', '_blank');
  }

}
