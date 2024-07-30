export async function episodesLoader() {
    return await fetch('https://feeds.buzzsprout.com/1434400.rss');
}