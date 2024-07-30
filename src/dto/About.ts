export default class About {
    name: string;
    title: string;
    primaryDescription: string;
    secondaryDescription: string;
    image: string;


    constructor(name: string, title: string, primaryDescription: string, secondaryDescription: string, image: string) {
        this.name = name;
        this.title = title;
        this.primaryDescription = primaryDescription;
        this.secondaryDescription = secondaryDescription;
        this.image = image;
    }
}