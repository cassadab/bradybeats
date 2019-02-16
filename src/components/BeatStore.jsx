import React from 'react';
import Track from "./Track";

function BeatStore(props) {
    return (
        <div id={"store"}>
            <h1>Beat Store</h1>
            <div className={"track-wrapper"}>
                <Track title={"After Dark"} scale={"Cm"} bpm={"129"} 
                    url={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572026407&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
                    download={""}/>
                <Track title={"Ice"} scale={"D#m"} bpm={"140"} 
                    url={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/570945447&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
                    download={""}/>
                <Track title={"Marked"} scale={"Cm"} bpm={"130"} 
                    url={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572034045&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'} 
                    download={"https://s3.amazonaws.com/brady-beats/march.wav"}/>
                <Track title={"Coroner"} scale={"D#"} bpm={"125"}
                    url={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572028822&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
                    download={''}/>
                <Track title={"Sunshine"} scale={"F#"} bpm={"88"}
                    url={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572029338&color=%2300beff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
                    download={''}/>
            </div>
        </div>
    )
}

export default BeatStore;