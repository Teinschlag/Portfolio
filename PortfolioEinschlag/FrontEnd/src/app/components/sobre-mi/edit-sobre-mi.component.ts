import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/Service/image.service';
import { PersonaService } from 'src/app/Service/persona.service';

@Component({
  selector: 'app-edit-sobre-mi',
  templateUrl: './edit-sobre-mi.component.html',
  styleUrls: ['./edit-sobre-mi.component.css']
})
export class EditSobreMiComponent implements OnInit {
  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data => {
      console.log(data);
      this.persona = data;
    })
   /* this.personaService.detail(id).subscribe(
      data => {
        console.log(data);
        this.persona = data;
      }, err => {
        alert("Error al modificar información");
        this.router.navigate(['']);
      }
    )*/
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url,
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
  

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
