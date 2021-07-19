class SoundPlayer {
    readonly audio: HTMLAudioElement;

    constructor() {
        this.audio = new Audio();
    }

    play(url: string) {
        this.audio.src = url;
        this.audio.load();
        this.audio.play();
    }
}

function init() {
    const player = new SoundPlayer();
    const links = document.getElementsByClassName("char-line-play");
    function handler(this: HTMLAnchorElement, event: Event) {
        player.play(this.href);
        event.preventDefault();
    }
    for (var i = 0; i < links.length; i++)
        links[i].addEventListener("click", handler);
}

init();