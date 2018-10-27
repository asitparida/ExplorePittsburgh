import * as React from 'react';
import './App.css';
import logo from './assets/explore@2x.png';
import { PlacesData, AddVideo } from './data';
import { HomeModel, PlaceModel } from './model';
import Place from './Place/Place';
import { timingSafeEqual } from 'crypto';

class App extends React.Component<any, HomeModel> {
  private currentIndex = -1;
  private selectedPlace: PlaceModel;
  private videoAdded = false;
  constructor(props: any) {
    super(props);
    this.state = {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      places: PlacesData,
      showContent: false
    };
  }
  public onPlaceClick(index: number) {
    const elem = document.querySelector('.place-content');
    if (elem) {
      elem.classList.remove('left');
      elem.classList.remove('right');
    }
    let dir = 'left';
    if (this.currentIndex > index) {
      dir = 'right';
    }
    this.currentIndex = index;
    const places = this.state.places;
    places.forEach((place: any) => {
      place.active = false;
      place.dir = '';
    });
    places[index].active = true;
    places[index].dir = dir;
    this.selectedPlace = places[index];
    this.setState({ showContent: true, places: places });
  }
  public onShowContent() {
    this.onPlaceClick(0);
  }
  public backToMain() {
    this.setState({ showContent: false });
  }
  public render() {
    const places = (this.state.places as any).map((place: any, i: number) => {
      const name = `place ${(place.active ? 'active' : '')} ${place.dir}`;
      return (<div className={name} key={i} style={{ backgroundImage: "url(" + place.img + ")" }} onClick={() => { this.onPlaceClick(i) }}>
        <div className="place-wrapper">
          <div className="place-overlay" />
          <label>{place.name}</label>
        </div>
      </div>)
    });
    if (!this.videoAdded) {
      setTimeout(() => {
        AddVideo();
      }, 100);
      this.videoAdded = true;
    } else {
      setTimeout(() => {
        if (typeof window['AdjustOverlay'] === 'function') {
          window['AdjustOverlay']();
        }
      }, 100);
    }
    const overlayClassName = `overlay ${ window['OVERLAY_ADJUST'] || false ? 'adjust': ''}`;
    return (
      <div className="backdrop" id="backdrop">
        <div className="video" id="video_wrapper">
          <div id="ytplayer" />
        </div>
        <div className={overlayClassName} id="content-overlay">
          {
            this.state.showContent &&
            <div className="show-toggle back-to-main" onClick={() => { this.backToMain() }}>
              <i className="material-icons">keyboard_arrow_up</i>
            </div>
          }
          {!this.state.showContent &&
            <div className="content-width">
              <div className="logo-holder">
                <img src={logo} id="landing_img" />
              </div>
              <label className="logo-pitts" id="logo">Pittsburgh</label>
            </div>
          }
          {this.state.showContent &&
            <div className="landing-content">
              <div className="landing-places">
                {places}
              </div>
            </div>
          }
          {
            this.state.showContent &&
            <Place place={this.selectedPlace} />
          }
          {!this.state.showContent &&
            <div className="show-toggle" onClick={() => { this.onShowContent() }}>
              <i className="material-icons">keyboard_arrow_down</i>
            </div>
          }
        </div>
      </div >
    );
  }
}

export default App;
