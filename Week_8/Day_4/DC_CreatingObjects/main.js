// 1
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    // 2
    watch() {
        console.log(`${this.uploader} watched all ${this.time}sec of "${this.title}"!`)
    }
}

// 3
const first_video = new Video('Fox sound', 'skreecher', 25);
first_video.watch();

// 4
const second_video = new Video('What is electricity?', 'JohnDoe', 45000);

// 5 BONUS
let video_datas = [
    {title: 'Strings in JS', uploader: 'JScream', time: 600000},
    {title: 'Monkey reads', uploader: "FunnyAnimals", time: 10000},
    {title: 'UFO is real!!!', uploader: 'ufo', time: 17000000},
    {title: 'UFO is not real', uploader: 'a51', time: 17000000},
    {title: 'Happy song', uploader: 'JonnieWalker', time: 15000},
]

let video_instances = video_datas.map(item => {
    let {title, uploader, time} = item;
    return new Video(title, uploader, time);
})  

// video_instances.forEach(item => item.watch());