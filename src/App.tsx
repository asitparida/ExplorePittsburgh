import * as React from 'react';
import './App.css';

import carnegieArtImg from './assets/carnegie_museum_art.jpg'
import logo from './assets/explore@2x.png';

class App extends React.Component<any, any> {
  private currentIndex = -1;
  constructor(props: any) {
    super(props);
    this.state = {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      places: [
        { id: 1, name: 'Lorem Ipsum', description: 'Excepteur sint occaecat', img: carnegieArtImg },
        { id: 1, name: 'Lorem Ipsum', description: 'Excepteur sint occaecat', img: carnegieArtImg },
        { id: 1, name: 'Lorem Ipsum', description: 'Excepteur sint occaecat', img: carnegieArtImg },
        { id: 1, name: 'Lorem Ipsum', description: 'Excepteur sint occaecat', img: carnegieArtImg }
      ],
      showContent: false
    };
  }
  public onPlaceClick(index: number) {
    let dir = 'left';
    if (this.currentIndex > index) {
      dir = 'right';
    }
    this.currentIndex = index;
    // tslint:disable
    const places = this.state.places;
    places.forEach((place: any) => {
      place.active = false;
      place.dir = '';
    });
    places[index].active = true;
    places[index].dir = dir;
    this.setState({ showContent: true, places: places });
  }
  public onShowContent() {
    this.onPlaceClick(0);
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
    return (
      <div className="backdrop" id="backdrop">
        <div className="overlay">
          {!this.state.showContent &&
            <div className="content-width">
              <div className="logo-holder">
                <img src={logo} id="landing_img" />
              </div>
              <label className="logo-pitts">Pittsburgh</label>
              <div className="content-width">
                <p className="landing-description">{this.state.description}</p>
              </div>
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
            <div className="place-content">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>
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
