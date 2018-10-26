import CarnegieMesuemArtImg from './assets/carnegie_museum_art.jpg';
import MattressFactoryImg from './assets/mattress_factory.jpg';
import DuquesneInclineImg from './assets/duquesne_incline.jpg';
import ChurchBrewImg from './assets/church_brew.jpg';
import { PlaceModel } from './model';
export const PlacesData: PlaceModel[] = [
    {
        "id": '1',
        "name": "Carnegie Museum of Art",
        "description": "At CMOA, creativity is a defining human characteristic to which everyone should have access. CMOA collects, preserves, and presents artworks from around the world to inspire, sustain, and provoke discussion, and to engage and reflect multiple audiences.",
        "img": CarnegieMesuemArtImg,
        "meta": {
            "boxed": {
                "verb": "Founded In",
                "date": "1895",
                "people": "Andrew Carnegie",
                "address": "Oakland, 4400 Forbes Ave",
                "long": -79.949480,
                "lat": 40.443680
            }
        }
    },
    {
        "id": '2',
        "name": "Mattress Factory",
        "description": "It is a contemporary art museum and experimental lab featuring site-specific installations created by artists in residence from around the world. All the works at the Mattress Factory are conceived in the space you view them in. The museum consists of three buildings in the historic Mexican War Streets. The MF Café offers delicious fare from Coca Cafe in Lawrenceville. Museum admission is not required to shop or dine!",
        "img": MattressFactoryImg,
        "meta": {
            "boxed": {
                "verb": "Installed In",
                "date": "1975",
                "people": "Barbara Luderowski",
                "address": "Northside, 500 Sampsonia Way",
                "long": -80.012476,
                "lat": 40.457458, 
            }
        }
    },
    {
        "id": '3',
        "name": "Duquesne Incline",
        "description": "Scale Mount Washington in one of two original 1877 cable cars for a fun and unique ride and a breathtaking view of the Pittsburgh skyline when you reach the top of the 400-foot incline. Parking available across the street from our lower station at 1197 West Carson Street.",
        "img": DuquesneInclineImg,
        "meta": {
            "boxed": {
                "verb": "Designed In",
                "date": "1877",
                "people": "Samuel Diescher",
                "address": "South Side, Pittsburgh",
                "long": -80.017664,
                "lat": 40.440086
            }
        }
    },
    {
        "id": '4',
        "name": "The Church Brew Works",
        "description": "Former church is now a lofty space for house-brewed beers, plus a mix of pizza, pierogi & bratwurst. It's set up really beautifully inside with the stained glass windows, the vaulted ceilings and the original organ.",
        "img": ChurchBrewImg,
        "meta": {
            "boxed": {
                "verb": "Founded In",
                "date": "1996",
                "people": "Beezer Brothers",
                "address": "3525 Liberty Avenue",
                "long": -79.964438,
                "lat": 40.462220
            }
        }
    }
];

// MATTRESS FACTORY
// https://www.flickr.com/photos/cerbopoli/5696989911/in/photolist-9FqyBZ-SutSab-29Ha1cL-avfiYy-dFdSmC-dgDE92-XDke2A-88L4DR-bqWt12-26sbSLK-7ygZQC-btTA4P-8s4JJo-UyoAvX-GZun4s-muKZuP-9EpJQK-4HxScH-9wxPds-rP9HXm-pWo9oD-9FtvPA-VsFBJs-xpUwXj-9ELnGJ-wKqTx7-4bVkcS-xpT579-muJBkx-muLAwJ-9wuSCB-USsrzA-gySzyN-fiy91C-TYmBxj-muMbeo-eYKFAq-29e59z5-9wxP2d-6DDt8u-EnAKqa-AnF68E-9wxQ5j-oo6DMb-awvGG6-24ySmGW-4FqmXG-dnreEr-6Shv6-SLotKJ

// DUQUESNE INCLINE
// https://www.flickr.com/photos/brshafferphoto/43802559442/in/photolist-29JFyS7-V8GUKu-UB5eSf-oQKbiq-24Be7uF-iR2f-hr6fXb-XPnHF-QbatFC-8evEn7-7eb6xG-bmirQ7-58Tthx-eifhS3-apDGqg-VcPZui-6y95fh-5r2zNo-oScyHU-aAcjFA-HZPN5g-7CW37h-dvDAYX-bsZwth-kws5s7-u8HKb-28qWbqj-53B1ey-cCefxL-jw6tKD-oi7iV8-fGotG3-3K9FBR-9xYAJ4-apDGiD-6jAgxM-6jAgva-c29BqJ-YcsPq-7VPP4Q-66NLYk-6Qj6Hd-fqRssJ-6UdpUQ-285UR7j-bXG9NE-bmiyBQ-818bvP-zDZ2Q4-g7GQTQ

// CHRUCH BREW
// https://www.flickr.com/photos/theaterwiz/4259326095/in/photolist-7uoafP-6Nfwd