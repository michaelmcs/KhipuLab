import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabSampleService {

  private apiUrl = 'http://localhost:8000/api/lab_samples'; 

  constructor(private http: HttpClient) { }
  createSample(sample: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, sample);  
  }
  addEvent(sampleId: string, event: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${sampleId}/events`, event); 
  }

  verifyChain(sampleId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${sampleId}/verify`);
  }
 getQuipu(sampleId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${sampleId}/quipu`);  
  }
  getSampleByCode(code: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/by-code/${code}`);  
  }
  getSamples(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}

