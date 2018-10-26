import * as React from 'react';
import './Place.css';
import { IPlaceProp } from '../model';

class Place extends React.Component<IPlaceProp, any> {
    private firstMount = true;
    private map: any;
    constructor(props: any) {
        super(props);
        this.state = {
            showMap: false
        };
    }
    public componentDidMount() {
        setTimeout(() => {
            this.firstMount = false;
        }, 100);
    }
    public toggleMap() {
        this.setState({
            showMap: !this.state.showMap
        });
    }
    public render() {
        const place = this.props.place;
        const divClassName = `place-content ${this.firstMount ? 'first-in' : ''} ${this.firstMount ? '' : place.dir} ${this.state.showMap ? 'hidden' : 'shown'}`;
        setTimeout(() => {
            const elem = document.querySelector('.place-content');
            if (elem) {
                place.dir = place.dir || '';
                elem.classList.add(place.dir);
            }
        });
        if (!this.map) {
            setTimeout(() => {
                this.map = AddPlace(place.id, place.meta.boxed.long, place.meta.boxed.lat, place.name);
            }, 1000);
        } else {
            ChangePlace(this.map, place.id, place.meta.boxed.long, place.meta.boxed.lat, place.name);
        }
        const mapClassName = `map-contaner ${this.state.showMap ? 'shown' : 'hidden'}`;
        return (
            <div className="place-content-details">
                <div className={divClassName}>
                    <div className="details-left">
                        <label className="verb">{place.meta.boxed.verb}</label>
                        <label className="date">{place.meta.boxed.date}</label>
                        <label className="people">{place.meta.boxed.people}</label>
                        <label className="address">{place.meta.boxed.address}</label>
                    </div>
                    <div className="details-right">
                        <p className="place-description">{place.description}</p>
                    </div>
                    <label onClick={() => { this.toggleMap() }} className="see-details-content expand"><i className="material-icons">keyboard_arrow_up</i>Expand Map</label>
                </div>
                <div className={mapClassName}>
                    <div id="map" />
                    <label onClick={() => { this.toggleMap() }} className="see-details-content">Collapse Map <i className="material-icons">keyboard_arrow_down</i></label>
                </div>
            </div >
        );
    }
}

function GetMapStore(long: any, lat: any, name: any) {
    const Store = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [
                        long,
                        lat
                    ]
                },
                'properties': {
                    'name': name
                }
            }
        ]
    };
    return Store;
}

function AddPlace(id: any, long: any, lat: any, name: any) {
    const map = new window['mapboxgl'].Map({
        container: 'map',
        style: 'mapbox://styles/asitparida/cjnqfx5870qol2sphu711dp0a',
        center: [-79.949480, 40.443680],
        zoom: 14,
        interactive: false
    });
    const store: any = GetMapStore(long, lat, name);
    store.features.forEach((marker: any) => {
        const markerContent =
            `<div class='img'></div><label>${marker.properties.name}</label>
      `;
        const el = document.createElement('div');
        el.className = 'marker hub';
        el.innerHTML = markerContent;
        new window['mapboxgl'].Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });
    map.on('load', () => {
        map.flyTo({ center: [long, lat] });
        if (!map.getSource(id)) {
            map.addSource(id, {
                type: 'geojson',
                data: store
            });
        }
    });
    return map;
}

function ChangePlace(map: any, id: any, long: any, lat: any, name: any) {
    map.flyTo({ center: [long, lat] });
    if (!map.getSource(id)) {
        const store: any = GetMapStore(long, lat, name);
        store.features.forEach((marker: any) => {
            const markerContent =
                `<div class='img'></div><label>${marker.properties.name}</label>
      `;
            const el = document.createElement('div');
            el.className = 'marker hub';
            el.innerHTML = markerContent;
            new window['mapboxgl'].Marker(el, { offset: [0, -23] })
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });
        map.addSource(id, {
            type: 'geojson',
            data: store
        });
    }
    return map;
}

export default Place;