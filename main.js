let localStream;
let remoteStream;
let peerConnection;
const  video1 =  document.getElementById("user1") 
let init = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
        if ("srcObject" in video1) {
            video1.srcObject = stream;
          } else {
            video1.src = window.URL.createObjectURL(stream);
          }
          video1.onloadedmetadata = function(e) {
            video1.play();
          };
      });

}
let createOffer = async () => {
    peerConnection = RTCPeerConnection();
    remoteStream = new MediaStream();
    document.getElementById("user2").srcObject = remoteStream;
}
init()