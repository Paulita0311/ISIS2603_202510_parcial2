import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../candidato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatos-list',
  templateUrl: './candidatos-list.component.html',
  styleUrls: ['./candidatos-list.component.css']
})
export class CandidatosListComponent implements OnInit {
  candidatos: any[] = [];
  papaSeleccionado: any;

  constructor(private candidatoService: CandidatoService, private router: Router) {}

  ngOnInit(): void {
    this.candidatoService.getCandidatos().subscribe(data => {
      this.candidatos = data;
      const randomIndex = Math.floor(Math.random() * data.length);
      this.papaSeleccionado = data[randomIndex];
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/candidatos', id]);
  }
}
