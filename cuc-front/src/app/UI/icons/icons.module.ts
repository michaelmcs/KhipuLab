import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//libreria de iconos
// Add icons to the library for convenient access in other components
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//iconos para la libreria
import { faRightToBracket as  fasRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck as fasSquareCheck} from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation as fasTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare as fasPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan as fasTrashCan} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark as fasCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk as fasFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import { faXmark as fasXmark} from "@fortawesome/free-solid-svg-icons";
import { faCheck as fasCheck} from "@fortawesome/free-solid-svg-icons";
import { faSquareXmark as fasSquareXmark} from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft as fasAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { faAngleRight as fasAngleRight} from "@fortawesome/free-solid-svg-icons";
import { faPrint as fasPrint} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(
      fasRightToBracket,
      fasSquareCheck,
      fasTriangleExclamation,
      fasPenToSquare,
      fasTrashCan,
      fasCircleXmark,
      fasFloppyDisk,
      fasXmark,
      fasCheck,
      fasSquareXmark,
      fasAngleLeft,
      fasAngleRight,
      fasPrint
      );
  }
}
