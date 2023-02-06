import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arcade } from 'src/app/models/arcade';
import { ArcadeService } from 'src/app/services/arcade.service';

@Component({
  selector: 'app-arcades-list',
  templateUrl: './arcades-list.component.html',
  styleUrls: ['./arcades-list.component.css']
})
export class ArcadesListComponent implements OnInit {

  title = 'ngArcadeArchives';

  arcades: Arcade[] = [];

  selected: null | Arcade = null;

  newArcade: Arcade = new Arcade();

  arcadesToBeDeleted: Arcade[] = [];

  constructor(private arcadeService: ArcadeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.reload();
    let idString = this.route.snapshot.paramMap.get('id');
    console.log('arcade ID' + idString);
    if(idString) {
      // let arcadeId = Number(idString);
      // let arcadeId = Number.parseInt(idString);
      let arcadeId = +idString;
      if (!isNaN(arcadeId)) {
        this.arcadeService.show(arcadeId).subscribe({
          next: (arcade) => {
            this.displayArcade(arcade);
          },
          error: (fail) => {
            console.log(fail);
            this.router.navigateByUrl('arcadeNotFound');
          }
        });
      } else {
        this.router.navigateByUrl('invalidArcadeId')
      }
    }

    this.reload();
   }

  reload() {
    this.arcadeService.index().subscribe({
      next: (arcadeList) => {
        this.arcades = arcadeList;
      },
      error: (err) => {
        console.error('Error loading arcades list');
        console.error(err);
      }
    });
  }
  // ...
  displayArcade(arcade: Arcade) {
    this.selected = arcade;
  }

  // ...
  displayTable() {
    this.selected = null;
  }
  createArcade: boolean = false;
  setAddArcade(): void {
    this.editArcade = Object.assign({}, this.selected);
  }

  addArcade(arcade: Arcade) {
    console.log(arcade);

    this.arcadeService.create(arcade).subscribe({
      next: (data) => {
        this.newArcade = new Arcade();
        this.reload();
      },
      error: (nojoy) => {
        console.error('ArcadeListComponent.addArcade: error creating arcade');
        console.error(nojoy);
      }
    });
    this.newArcade = new Arcade();
  }

  editArcade: Arcade | null = null;
  setEditArcade(): void {
    this.editArcade = Object.assign({}, this.selected);
  }

  updateArcade(arcade: Arcade, goToDetail = true): void {
    this.arcadeService.update(arcade).subscribe({
      next: (updatedArcade) => {
        if(goToDetail) {
          this.selected = updatedArcade;
        } else {
          this.selected = null;
        }
        this.editArcade = null;
        this.reload();
      },
      error: (toobad) => {
        console.error('ArcadeListComponent.updateArcade: error updating arcade');
        console.error(toobad);
      }
    })
  }

  deleteArcade(id: number): void {
    console.log(id);

    this.arcadeService.destroy(id).subscribe({
      // nothing to return in 'next' parenthesis because return is void
      next: () => {
        this.reload();
      },
      error: (fail) => {
        console.error('ArcadeListComponent.deleteArcade: error deleting arcade');
      }
    });
  }

  addArcadeToDelete(arcade: Arcade) {
    for(let i = 0; i < this.arcadesToBeDeleted.length; i++) {
      if(arcade.id === this.arcadesToBeDeleted[i].id) {
        this.arcadesToBeDeleted.splice(i, 1);
        return;
      }
    }
    this.arcadesToBeDeleted.push(arcade);
    console.log(arcade);
    console.log(this.arcadesToBeDeleted);


  }

  deleteArcades(): void {
    for(let i = 0; i < this.arcadesToBeDeleted.length; i++) {
      let id = this.arcadesToBeDeleted[i].id;
      this.deleteArcade(id);
    }
  }

}
