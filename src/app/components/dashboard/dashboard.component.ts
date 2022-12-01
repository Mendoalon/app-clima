import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImagen: string = 'https://e7.pngegg.com/pngimages/377/815/png-clipart-computer-icons-weather-weather-heart-weather-forecasting.png'

  constructor(private _climaService: ClimaService) { }
  ciudad: string = '';
  nombreCiudad: string = '';
  temperatura: number = 0;
  humedad: number = 0;
  clima: string = '';
  query: boolean = false;
  loading: boolean = false;
  mostrarError: boolean = false;


  ngOnInit(): void {
  }


  optenertClima() {
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      console.log(data.name);

      this.loading = false;
      this.query = true;
      this.nombreCiudad = data.name;
      this.temperatura = data.main.temp - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
    }, error => {
      console.log(error);
      
      this.loading=false;
      this.error()
    })

  }


  error(){
    this.mostrarError = true;
    setTimeout(()=>{
      this.mostrarError=false;
      this.ciudad = '';
    },2000)

  }

}
