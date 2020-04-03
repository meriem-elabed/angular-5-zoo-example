import { Component, OnInit } from '@angular/core';
import { DragonService } from '../services/dragon.service';
import { LocationService } from '../services/location.service';
import { Location } from '../models/location.model';
import { Dragon } from '../models/dragon.model';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.css']
})
export class DragonComponent implements OnInit {

  dragons: Array<Dragon> = new Array<Dragon>();
  locations: Array<Location> = new Array<Location>();
  selectedLocation: Location;
  dragon: Dragon;
  showNew: Boolean = false;

  submitType: string = 'Save';

  selectedRow: number;

  constructor(private dragonService: DragonService,
    private locationService: LocationService) { }

  ngOnInit() {
    // Initialize dragon list.
    this.dragonService.getAll().subscribe(data => {
      this.dragons = data;
    });
    // Initialize location list.
    this.locationService.getAll().subscribe(data => {
      this.locations = data;
    });
  }

  onNew() {
    // Initiate new dragon.
    this.dragon = new Dragon();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display dragon form.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push dragon model object into list.
      this.dragonService.create(this.dragon).subscribe(success => {
        this.dragons.push(success)
      },
        errors => {
          console.log("errors", errors)
        });
    } else {

      // Update the existing properties values based on model.
      this.dragonService.update(this.dragon).subscribe(success => {
        this.dragons[this.selectedRow].id = success.id;
        this.dragons[this.selectedRow].name = success.name;
        this.dragons[this.selectedRow].age = success.age;
        this.dragons[this.selectedRow].colour = success.colour;
        this.dragons[this.selectedRow].location = success.location;
      },
        errors => {
          console.log("errors", errors)
        })



    }
    // Hide dragon form.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new dragon.
    this.dragon = new Dragon();
    // Retrieve selected dragon from list and assign to model.
    this.dragon = Object.assign({}, this.dragons[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display dragon form.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(id: string, index: number) {
    // Delete the corresponding dragon from the list.
    this.dragonService.remove(id).subscribe(success => {
      this.dragons.splice(index, 1);
    },
      errors => {
        console.log("errors", errors)
      });

  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }

  compareByLocationId(item1: Location, item2: Location): boolean {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
  trackByFn(index, item) {
    return item.id;
  }


}




