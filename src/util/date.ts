export function parseDate(date: string) {
    return new Date(Date.parse(date)).toLocaleString('fr-FR', {month: 'long', day: 'numeric', year: 'numeric'})
}

export function formatTime(time: number) {
    const hours = Math.floor((time / 3600));
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor((time % 60));

    const hoursLabel= hours > 0 ? hours + ":": "";
    const secondsLabel = seconds < 10 ? `0${seconds}` : seconds;

    return `${hoursLabel}${formatMinutesLabel(minutes)}:${secondsLabel}`;
}

function formatMinutesLabel(minutes: number): string {
    if (minutes == 0) {
        return "0";
    } else if (minutes <10) {
        return "0" + minutes;
    }
   return String(minutes);
}