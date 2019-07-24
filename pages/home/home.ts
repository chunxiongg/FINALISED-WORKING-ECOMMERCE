import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicApp } from 'ionic-angular';
import { MyworldService } from '../../app/myworld.service';
import { UniquePipe } from '../../app/unique.pipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
   providers: [MyworldService, UniquePipe]
})
export class HomePage {
  public formGroup: FormGroup;

  displayArr = [];

  constructor(private formBuilder: FormBuilder, private router: Router,
  public myWorld: MyworldService) { 

  }

  public ngOnInit() {
    this.formGroup = this.formBuilder.group({
      href: '',
    });

    this.formGroup.controls.href.valueChanges
      .subscribe((value) => this.router.navigate([value]));

    this.displayArr = this.myWorld.returnMe();

  }

  go(student) {
    console.log(student.cat_id);
    this.router.navigate(['/home-details/', student.cat_id])
  }

}
