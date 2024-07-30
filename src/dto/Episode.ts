export default class Episode {
    title: string;
    description: string;
    references: string;
    mp3: string;
    duration: number;
    season: string;
    episode: string;
    date: string;

    constructor(title: string, description: string, references: string, mp3: string, duration: number, season: string, episode: string, date: string) {
        this.title = title;
        this.description = description;
        this.references = references;
        this.mp3 = mp3;
        this.duration = duration;
        this.season = season;
        this.episode = episode;
        this.date = date;
    }
}
