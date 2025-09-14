import { Component, OnInit } from '@angular/core';
import { TraceEventService } from '../services/trace-event.service';

@Component({
  selector: 'app-quipu-visualization',
  templateUrl: './quipu-visualization.component.html',
  styleUrls: ['./quipu-visualization.component.scss']
})
export class QuipuVisualizationComponent implements OnInit {
  events: any[] = [];
  loading = true;

  constructor(private traceEventService: TraceEventService) {}

  ngOnInit(): void {

    this.traceEventService.getEventsBySample(1).subscribe(
      (data) => {
        this.events = data; 
        this.loading = false; 
      },
      (error) => {
        console.error('Error al cargar los eventos', error);
        this.loading = false; 
      }
    );
  }
}
