import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoService } from '../candidato.service';

@Component({
  selector: 'app-candidatos-detail',
  templateUrl: './candidatos-detail.component.html',
  styleUrls: ['./candidatos-detail.component.css']
})
export class CandidatosDetailComponent implements OnInit {
  candidato: any;

  constructor(private route: ActivatedRoute, private candidatoService: CandidatoService, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.candidatoService.getCandidato(id).subscribe(data => this.candidato = data);
  }
  

  volver(): void {
    this.router.navigate(['/candidatos']);
  }
}
