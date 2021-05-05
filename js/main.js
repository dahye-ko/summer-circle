// song__info라는 id를 가진 문서 요소 선택
const songEl = document.getElementById("song__info")
// headset--on이라는 id를 가진 문서 요소 선택
const musicOnEl = document.getElementById("headset--on")
// headset--off이라는 id를 가진 문서 요소 선택
const musicOffEl = document.getElementById("headset--off")

// 오디오 생성
const audio = new Audio();
// 플레이리스트 배열
const playlists = [
    { 
        src: "./../audio/long_dream.mp3", 
        artist: "새소년", 
        song: "긴꿈"
    }
];

// 윈도우가 로드할 시 작동하는 익명의 함수
window.addEventListener("load", function(){
    playlists.map((el) => {
        audio.src = el.src
        songEl.innerHTML = `${el.artist}는 ${el.song}을(를) 부르고 있습니다`
    })
    // 오디오 자동재생
    audio.autoplay = 'true'
    // 오디오 묵음처리
    audio.muted = 'true'
    // 오디오 반복재생
    audio.loop = 'true'
})

// musicOnEl에 클릭 이벤트 발생할 시 작동하는 익명의 함수
musicOnEl.addEventListener("click", function(){
    musicOnEl.style.display = 'none'
    musicOffEl.style.display = 'flex'
    // 오디오 일시정지
    audio.pause()
})
// musicOffEl에 클릭 이벤트 발생할 시 작동하는 익명의 함수
musicOffEl.addEventListener("click", function(){
    musicOffEl.style.display = 'none'
    musicOnEl.style.display = 'flex'
    // 오디오 재생
    audio.play()
})


