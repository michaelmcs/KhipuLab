import { Component, Input, OnChanges } from '@angular/core';
import { QuipuService, QuipuNode } from '../../../services/quipu.service';

@Component({
  selector: 'app-quipu-viewer',
  templateUrl: './quipu-viewer.component.html',
  styleUrls: ['./quipu-viewer.component.css']
})
export class QuipuViewerComponent implements OnChanges {
  @Input() sampleId!: number;

  loading = false;
  error?: string;
  sampleCode = '';
  nodes: QuipuNode[] = [];

  constructor(private api: QuipuService) {}

  ngOnChanges(): void {
    if (!this.sampleId) return;

    this.loading = true;
    this.error = undefined;

    this.api.getQuipu(this.sampleId).subscribe({
      next: (res) => {
        this.sampleCode = res.sample?.code ?? `#${this.sampleId}`;
        this.nodes = res.nodes ?? [];
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudo cargar el quipu';
        this.loading = false;
      }
    });
  }
}
