import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from './configuration.service';

@Component({
  selector: 'jhi-configuration',
  templateUrl: './configuration.component.html',
})
export class ConfigurationComponent implements OnInit {
  allConfiguration: any = null;
  filter: string;

  constructor(private configurationService: ConfigurationService) {
    this.filter = '';
  }

  ngOnInit(): void {
    this.configurationService.get().subscribe((configuration: any) => {
      this.allConfiguration = configuration;
    });
  }
}
