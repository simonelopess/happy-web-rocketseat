import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer}from 'react-leaflet';

import mapMarkerimg from '../assets/images/Local.svg'

import "../styles/pages/orphanages-map.css";
import 'leaflet/dist/leaflet.css'


function OrphanagesMap(){
  return (
    <div id="page-map">
      <aside> 
        <header>
          <img src={mapMarkerimg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>
        <footer>
          <strong> Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </footer>
       
      </aside>
      <Map center={[-22.913885,-43.72619]}
          zoom={15}
          style={{width:'100%', height:'100%'}}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>
        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#FFF"/>
        </Link>
    </div>
  )
}

export default OrphanagesMap;