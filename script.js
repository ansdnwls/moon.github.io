console.log("JavaScript is working.");

// 단어 리스트 (각 단어에 여러 예문 추가 가능)
const wordList = [
    // 나중에 추가할 단어 예시:
    // { word: "hat", sentences: ["She is wearing a hat.", "The hat is on the table."] },
    // { word: "cat", sentences: ["The cat is sleeping on the mat.", "A black cat crossed the road."] }
];

let currentWordIndex = 0; // 현재 연습 중인 단어 인덱스
let dayCount = 1; // 학습 날짜를 추적하여 종합 테스트에 사용
let learnedWords = []; // 학습한 단어 리스트
const dailyWordCount = 5; // 하루에 학습할 단어 수

// 음성 출력 함수
function sayText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

// 이름을 음성으로 설정하는 함수
function setNameWithVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Your browser does not support Speech Recognition.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    
    recognition.start();
    
    recognition.onresult = function(event) {
        const name = event.results[0][0].transcript;
        localStorage.setItem('userName', name);
        sayText(`Hello, ${name}! Let's start practicing.`);
        document.getElementById('start-practice-button').style.display = 'block';
        document.getElementById('start-test-button').style.display = 'block';
    };

    recognition.onerror = function(event) {
        sayText("I didn't catch that. Could you say your name again?");
    };
}

// 랜덤으로 문장을 선택하는 함수
function getRandomSentence(wordEntry) {
    const sentences = wordEntry.sentences;
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

// 하루에 5개 단어를 학습하는 함수
function startPractice() {
    const userName = localStorage.getItem('userName') || "friend";

    // 오늘 학습할 단어 리스트
    const dailyWords = wordList.slice(currentWordIndex, currentWordIndex + dailyWordCount);

    // 학습한 단어들을 learnedWords에 추가하고, currentWordIndex 업데이트
    learnedWords.push(...dailyWords);
    currentWordIndex += dailyWordCount;

    // 하루 학습: 5개 단어와 예문을 하나씩 음성으로 출력
    dailyWords.forEach((wordEntry, index) => {
        setTimeout(() => {
            const sentence = getRandomSentence(wordEntry);
            sayText(`${userName}, let's practice the word ${wordEntry.word}. ${sentence}`);
        }, index * 3000); // 각 단어 간격 조정 (3초 간격)
    });
// 음성 출력 함수
function sayText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';

    // 사용할 음성 선택
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => voice.lang === 'en-US' || voice.lang === 'en-GB');

    // 원어민 음성 설정
    if (englishVoice) {
        utterance.voice = englishVoice;
    } else {
        console.warn("English voice not found, using default voice.");
    }

    // 음성 출력
    speechSynthesis.speak(utterance);
}

// 페이지 로드 시 음성 목록을 로드하도록 설정
window.speechSynthesis.onvoiceschanged = () => {
    sayText("Hello! This is a test to check the native English voice.");
};

    // 학습 후 1분간 복습 시간을 제공
    setTimeout(() => sayText("Take a minute to review the words."), dailyWords.length * 3000);
}

// 테스트를 진행하는 함수
function startTest() {
    const userName = localStorage.getItem('userName') || "friend";
    const testWords = learnedWords.slice(-dailyWordCount * dayCount); // 오늘 학습한 단어 + 종합 테스트 단어

    // 테스트 시작
    testWords.forEach((wordEntry, index) => {
        setTimeout(() => {
            const sentence = getRandomSentence(wordEntry);
            sayText(`${wordEntry.word}. ${sentence}`);
        }, index * 4000); // 각 단어 간격 조정 (4초 간격)
    });

    dayCount++; // 다음날을 위한 학습량 증가
}

// 버튼 클릭 이벤트 연결
document.getElementById('set-name-button').addEventListener('click', setNameWithVoice);
document.getElementById('start-practice-button').addEventListener('click', startPractice);
document.getElementById('start-test-button').addEventListener('click', startTest);
