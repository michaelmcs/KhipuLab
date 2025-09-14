import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TraceEvent } from '../models/trace-event.model'; // Importación del modelo

@Injectable({
  providedIn: 'root'
})
export class TraceEventService {

  private apiUrl = 'http://localhost:8000/api'; // URL base del backend

  constructor(private http: HttpClient) {}


  getAllEvents(): Observable<TraceEvent[]> {
    return this.http.get<TraceEvent[]>(`${this.apiUrl}/trace-events`);
  }

  /**

   * @param sampleId 
   * @param event
   */
  createEvent(sampleId: number, event: TraceEvent): Observable<TraceEvent> {
    return this.http.post<TraceEvent>(`${this.apiUrl}/lab_samples/${sampleId}/trace_events`, event);
  }

  /**

   * @param eventId 
   */
  verifyEvent(eventId: number): Observable<{ status: string }> {
    return this.http.get<{ status: string }>(`${this.apiUrl}/trace_events/${eventId}/verify`);
  }

  /**
   
   * @param sampleId 
   */
  getEventsBySample(sampleId: number): Observable<TraceEvent[]> {
    return this.http.get<TraceEvent[]>(`${this.apiUrl}/lab_samples/${sampleId}/trace_events`);
  }


}
