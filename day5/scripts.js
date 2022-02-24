// 在JavaScript中调用load()方法来重置媒体
const mediaElem = document.getElementById("my-media-element");
mediaElem.load();
// 音轨增删时间
// 通过AudioTrackList对象的addtrack时间，队音轨的增加做出响应
const mediaElem1 = document.querySelector("video");
mediaElem1.audioTracks.onaddTrack = function(event){
    audioTrackAdded(event.track);
}