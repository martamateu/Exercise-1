
let playlist = [
    {name: "First" },
    {name: "Second" },
    {name: "Third" },
    {name: "Fourth" },
    {name: "Fifth" },


];

const tomsIndex = playlist.findIndex(playlist => playlist.name == 'Third');
playlist.push(...playlist.splice(0, tomsIndex));

console.log(playlist) ;


    


