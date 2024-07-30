import Episode from "../dto/Episode.ts";
import {parseDate} from "./date.ts";

export default function parseRss(rss: string): Episode[] {

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rss, "text/xml");
    const itemList = xmlDoc.querySelectorAll('item');
    const episodes: Episode[] = [];

    itemList.forEach(item => {
        const title = (item.querySelector('title') as Element).innerHTML;
        const fullDescription = parseDescription((item.querySelector('description') as Element).innerHTML);
        const descriptionSplit = splitReferences(fullDescription);
        const description = descriptionSplit[0];
        const references = descriptionSplit[1];
        const date = parseDate((item.querySelector('pubDate') as Element).textContent as string);
        const mp3 = (item.querySelector('enclosure') as Element).getAttribute('url') as string;
        const duration = parseInt((item.getElementsByTagName('itunes:duration')[0] as Element).textContent as string);
        const season = (item.getElementsByTagName('itunes:season')[0] as Element).textContent as string;
        const episode = (item.getElementsByTagName('itunes:episode')[0] as Element).textContent as string;


        episodes.push(new Episode(title, description, references, mp3, duration, season, episode, date));
    });
    return episodes;
}


function parseDescription(description: string): string {
    return description.replace("<![CDATA[", "")
        .replace("]]>", "")
        .replaceAll('<a', '<a target="_blank"');
}

function splitReferences(description: string) {
    const referenceFormats = "Références?.*?</p>"
    const match = description.match(referenceFormats);
    if (match) {
        const parsedDescription = description.replace(match[0], "");
        return [parsedDescription.substring(0, match.index), parsedDescription.substring(match.index!)];
    }
    return [description, ""];
}