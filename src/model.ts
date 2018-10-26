
export class HomeModel {
    public description: string;
    public showContent: boolean = false;
    public places: PlaceModel[] = [];
}
export class PlaceModel {
    public id: string;
    public description: string;
    public name: string;
    public img: string;
    public active?: boolean = false;
    public dir?: string = '';
    public meta? :any = {};
}
export class IPlaceProp {
    public place: PlaceModel;
}