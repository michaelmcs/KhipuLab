import { Component, OnInit } from '@angular/core';
import { LabSampleService } from '../services/lab-sample.service'; 

@Component({
  selector: 'app-lab-sample',
  templateUrl: './lab-sample.component.html',
  styleUrls: ['./lab-sample.component.scss']
})
export class LabSampleComponent implements OnInit {

  samples: any[] = []; 
  newSample: any = { code: '', specimenType: '' }; 

  constructor(private labSampleService: LabSampleService) { }

  ngOnInit(): void {

    this.labSampleService.getSamples().subscribe(
      (data: any[]) => {
        this.samples = data;
      },
      (error) => {
        console.error('Error al obtener las muestras', error);
      }
    );
  }
  addNewSample(): void {
    console.log('Agregar nueva muestra', this.newSample);
    this.labSampleService.createSample(this.newSample).subscribe(
      (response) => {
        console.log('Muestra añadida', response);

        this.samples.push(response);
        // Limpiar el formulario
        this.newSample = { code: '', specimenType: '' };
      },
      (error) => {
        console.error('Error al añadir muestra', error);
      }
    );
  }

  // Método para añadir un evento a una muestra
  addEvent(sampleId: string, event: any): void {
    this.labSampleService.addEvent(sampleId, event).subscribe(
      (response) => {
        console.log('Evento añadido con éxito:', response);
      },
      (error) => {
        console.error('Error al añadir evento:', error);
      }
    );
  }

  verifySampleChain(sampleId: string): void {
    this.labSampleService.verifyChain(sampleId).subscribe(
      (response) => {
        console.log('Verificación de cadena exitosa:', response);
      },
      (error) => {
        console.error('Error al verificar la cadena:', error);
      }
    );
  }

  getSampleQuipu(sampleId: string): void {
    this.labSampleService.getQuipu(sampleId).subscribe(
      (response) => {
        console.log('Quipu obtenido:', response);
      },
      (error) => {
        console.error('Error al obtener el quipu:', error);
      }
    );
  }
}
