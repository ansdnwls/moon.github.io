<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spelling Bee Vocabulary Test 2024</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50">
    <div class="min-h-screen">
        <!-- 헤더 섹션 -->
        <header class="bg-yellow-400 text-gray-800 p-4 shadow-lg">
            <div class="container mx-auto text-center">
                <h1 class="text-4xl font-bold animate__animated animate__bounceIn">🐝 Spelling Bee Vocabulary Test 2024</h1>
                <p class="text-xl mt-2 animate__animated animate__fadeIn">신나게 단어공부해요! 🎉</p>
                <p id="userStatus" class="mt-2 text-lg">Welcome to Spelling Bee!</p>
                <button id="show-stats-button" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition transform hover:scale-105">
                    View Statistics 📊
                </button>
            </div>
        </header>

        <!-- 메인 콘텐츠 -->
        <main class="container mx-auto p-4">
            <!-- 초기 설정 섹션 -->
            <section id="initial-setup" class="mb-8">
                <div class="bg-white rounded-lg shadow-md p-6 text-center animate__animated animate__fadeIn">
                    <h2 class="text-2xl font-semibold mb-4">Let's Start Learning! 🚀</h2>
                    <button id="set-name-button" class="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition transform hover:scale-105">
                        Start with Voice Recognition 🎤
                    </button>
                    <p id="error-message" class="mt-4 text-red-500 hidden"></p>
                </div>
            </section>

            <!-- 학습 섹션 -->
            <section id="learning-section" class="grid md:grid-cols-2 gap-4" style="display: none;">
                <!-- 학습 카드 -->
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-semibold mb-4">Today's Words 📚</h2>
                    <div id="word-display" class="mb-6 p-4 bg-yellow-50 rounded-lg transform transition-all duration-300 hover:shadow-lg">
                        <div id="current-word" class="text-4xl font-bold text-yellow-600 mb-3">Word</div>
                        <div id="current-meaning" class="text-2xl text-gray-600 mb-4">Meaning</div>
                        <div id="current-sentence" class="text-lg text-gray-700 italic">"Example Sentence"</div>
                    </div>
                    <div class="flex gap-3 flex-wrap">
                        <button id="start-practice-button" class="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition transform hover:scale-105">
                            Start Learning 🎯
                        </button>
                        <button id="repeat-word-button" class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition transform hover:scale-105">
                            Repeat Word 🔄
                        </button>
                    </div>
                </div>

                <!-- 진도 현황 -->
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-semibold mb-4">Your Progress 📈</h2>
                    <div id="progress-display">
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="text-sm text-gray-600">Today's Progress</span>
                                <span id="daily-progress-text" class="text-sm font-semibold">0%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-4">
                                <div id="daily-progress-bar" class="bg-yellow-400 h-4 rounded-full transition-all duration-500" style="width: 0%"></div>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="text-sm text-gray-600">Total Progress</span>
                                <span id="total-progress-text" class="text-sm font-semibold">0%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-4">
                                <div id="total-progress-bar" class="bg-green-500 h-4 rounded-full transition-all duration-500" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<!-- 테스트 섹션 -->
            <section id="test-section" class="mt-8" style="display: none;">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-semibold mb-4">Test Time! ✍️</h2>
                    <div id="test-display" class="mb-6">
                        <div id="test-word" class="text-3xl font-bold mb-4 text-center animate__animated animate__fadeIn">Ready?</div>
                        <div id="test-sentence" class="text-lg text-gray-700 italic mb-4"></div>
                        <div id="test-instruction" class="text-sm text-gray-600 mb-4"></div>
                        <button id="start-recording" class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition transform hover:scale-105 mb-4" style="display: none;">
                            Start Speaking 🎤
                        </button>
                        <div id="test-result" class="mt-4 text-center animate__animated animate__fadeIn"></div>
                    </div>
                    <div class="text-center">
                        <button id="start-test-button" class="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition transform hover:scale-105">
                            Start Test 📝
                        </button>
                    </div>
                </div>
            </section>

            <!-- 복습 섹션 -->
            <section id="review-section" class="mt-8" style="display: none;">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-semibold mb-4">Review Time! 📖</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div class="bg-yellow-50 rounded-lg p-4 transform transition-all duration-300 hover:shadow-lg">
                            <h3 class="text-lg font-semibold mb-2">Daily Review</h3>
                            <p class="text-sm text-gray-600 mb-2">Words to review today: <span id="review-count">0</span></p>
                            <button id="start-review-button" class="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition transform hover:scale-105">
                                Start Review 🔄
                            </button>
                        </div>
                        <div class="bg-red-50 rounded-lg p-4 transform transition-all duration-300 hover:shadow-lg">
                            <h3 class="text-lg font-semibold mb-2">Mistake Review</h3>
                            <p class="text-sm text-gray-600 mb-2">Incorrect words: <span id="mistake-count">0</span></p>
                            <button id="review-mistakes-button" class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition transform hover:scale-105">
                                Review Mistakes ❌
                            </button>
                        </div>
                    </div>
                    <div id="review-status" class="mt-4 text-center text-gray-600"></div>
                </div>
            </section>
<!-- 오답 노트 섹션 -->
            <section id="mistake-note-section" class="mt-8" style="display: none;">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-semibold mb-4">Mistake Notes 📝</h2>
                    <div class="overflow-x-auto">
                        <table class="min-w-full table-auto">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Word</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meaning</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mistakes</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Review</th>
                                </tr>
                            </thead>
                            <tbody id="mistake-note-body" class="bg-white divide-y divide-gray-200">
                                <!-- JavaScript will fill this -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <!-- 통계 섹션 -->
            <section id="stats-section" class="mt-8" style="display: none;">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-semibold mb-4">Learning Statistics 📊</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div class="bg-blue-50 rounded-lg p-4 transform transition-all duration-300 hover:shadow-lg">
                            <h3 class="text-sm font-medium text-gray-500">Total Words Learned</h3>
                            <p id="total-words-learned" class="text-2xl font-bold text-blue-600">0</p>
                        </div>
                        <div class="bg-green-50 rounded-lg p-4 transform transition-all duration-300 hover:shadow-lg">
                            <h3 class="text-sm font-medium text-gray-500">Overall Accuracy</h3>
                            <p id="overall-accuracy" class="text-2xl font-bold text-green-600">0%</p>
                        </div>
                        <div class="bg-purple-50 rounded-lg p-4 transform transition-all duration-300 hover:shadow-lg">
                            <h3 class="text-sm font-medium text-gray-500">Days Studied</h3>
                            <p id="days-studied" class="text-2xl font-bold text-purple-600">0</p>
                        </div>
                        <div class="bg-yellow-50 rounded-lg p-4 transform transition-all duration-300 hover:shadow-lg">
                            <h3 class="text-sm font-medium text-gray-500">Words to Review</h3>
                            <p id="words-to-review" class="text-2xl font-bold text-yellow-600">0</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg p-4 mb-6">
                        <h3 class="text-lg font-semibold mb-4">Learning Progress</h3>
                        <div class="h-48" id="learning-progress-chart"></div>
                    </div>

                    <div class="bg-white rounded-lg p-4">
                        <h3 class="text-lg font-semibold mb-4">Recent Activity</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full table-auto">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th class="px-4 py-2 text-left">Date</th>
                                        <th class="px-4 py-2 text-left">Words Studied</th>
                                        <th class="px-4 py-2 text-left">Accuracy</th>
                                        <th class="px-4 py-2 text-left">Time Spent</th>
                                    </tr>
                                </thead>
                                <tbody id="recent-activity-body">
                                    <!-- JavaScript will fill this -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="script.js"></script>
</body>
</html>
// 터치 이벤트 핸들러
function handleTouch(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    touch.target.dispatchEvent(clickEvent);
}

// 모바일 환경 체크
function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// 권한 요청
async function requestPermissions() {
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
        showError("마이크 권한이 필요합니다. 권한을 허용해주세요.");
    }
}

// 오류 표시 함수
function showError(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
    setTimeout(() => {
        errorElement.classList.add('hidden');
    }, 3000);
}

// 단어 리스트
  const wordList = [
{
    word: "capital",
    meaning: "수도",
    sentences: ["Seoul is the capital of Korea.", "The capital city is very big.", "I went to the capital last summer."]
},
{
    word: "special",
    meaning: "특별한",
    sentences: ["Today is a special day.", "This is my special book.", "Mom made a special cake."]
},
{
    word: "blink",
    meaning: "눈을 깜빡이다",
    sentences: ["The stars blink at night.", "Don't blink your eyes.", "The light will blink three times."]
},
{
    word: "cucumber",
    meaning: "오이",
    sentences: ["I like cucumber in my salad.", "The cucumber is green.", "Mom cut the cucumber."]
},
{
    word: "everywhere",
    meaning: "모든 곳",
    sentences: ["I looked everywhere for my toy.", "There are trees everywhere.", "The snow fell everywhere."]
},
{
    word: "growl",
    meaning: "으르렁거리다",
    sentences: ["The lion can growl.", "I heard a dog growl.", "Bears growl when angry."]
},
{
    word: "between",
    meaning: "~사이에",
    sentences: ["The ball is between two trees.", "I sit between Mom and Dad.", "Put the book between these boxes."]
},
{
    word: "minute",
    meaning: "분, 잠시",
    sentences: ["Wait a minute, please.", "I can run for one minute.", "Give me a minute to think."]
},
{
    word: "proud",
    meaning: "자랑스러운",
    sentences: ["I am proud of my drawing.", "Mom is proud of me.", "The proud lion stood tall."]
},
{
    word: "stout",
    meaning: "튼튼한",
    sentences: ["The stout tree is very old.", "He has a stout heart.", "The stout rope is strong."]
},
{
    word: "investigate",
    meaning: "조사하다",
    sentences: ["Let's investigate this box.", "Police investigate the case.", "We investigate the garden."]
},
{
    word: "author",
    meaning: "작가",
    sentences: ["The author wrote this book.", "I want to be an author.", "The author is very famous."]
},
{
    word: "always",
    meaning: "항상",
    sentences: ["I always brush my teeth.", "Mom always loves me.", "The sun always rises."]
},
{
    word: "subject",
    meaning: "과목",
    sentences: ["Math is my favorite subject.", "What subject do you like?", "This subject is fun."]
},
{
    word: "prawn",
    meaning: "새우",
    sentences: ["I like to eat prawn.", "The prawn is pink.", "Mom cooked some prawn."]
},
{
    word: "pumpkin",
    meaning: "호박",
    sentences: ["The pumpkin is orange.", "We carved a pumpkin.", "I see a big pumpkin."]
},
{
    word: "eighty",
    meaning: "80",
    sentences: ["Grandpa is eighty years old.", "I can count to eighty.", "There are eighty books."]
},
{
    word: "bathtub",
    meaning: "욕조",
    sentences: ["I play in the bathtub.", "The bathtub is full of water.", "Clean the bathtub, please."]
},
{
    word: "thousand",
    meaning: "1000",
    sentences: ["A thousand stars in the sky.", "I have a thousand blocks.", "Count to a thousand."]
},
{
    word: "September",
    meaning: "9월",
    sentences: ["School starts in September.", "September is coming soon.", "It's warm in September."]
},
{
    word: "sometimes",
    meaning: "때때로",
    sentences: ["I sometimes eat candy.", "It sometimes rains.", "Dad sometimes comes home late."]
},
{
    word: "surprised",
    meaning: "놀란",
    sentences: ["I was surprised by the noise.", "Mom looked surprised.", "The cat was surprised."]
},
{
    word: "conversation",
    meaning: "대화",
    sentences: ["I had a conversation with mom.", "The conversation was fun.", "Let's have a conversation."]
},
{
    word: "Wednesday",
    meaning: "수요일",
    sentences: ["Today is Wednesday.", "I have class on Wednesday.", "See you next Wednesday."]
},
{
    word: "imagine",
    meaning: "상상하다",
    sentences: ["I can imagine a dragon.", "Let's imagine we can fly.", "Imagine a blue elephant."]
},
{
    word: "ironing",
    meaning: "다림질",
    sentences: ["Mom is ironing my shirt.", "I watch dad ironing.", "The ironing is done."]
},
{
    word: "disagree",
    meaning: "동의하지 않다",
    sentences: ["I disagree with you.", "Friends sometimes disagree.", "It's okay to disagree."]
},
{
    word: "headache",
    meaning: "두통",
    sentences: ["I have a headache.", "Mom has a headache today.", "The headache is gone."]
},
{
    word: "information",
    meaning: "정보",
    sentences: ["I need more information.", "This information is helpful.", "Give me the information."]
},
{
    word: "milk carton",
    meaning: "우유 팩",
    sentences: ["The milk carton is empty.", "Open the milk carton.", "Put the milk carton away."]
},
{
    word: "refrigerator",
    meaning: "냉장고",
    sentences: ["Open the refrigerator.", "The refrigerator is cold.", "Put milk in the refrigerator."]
},
{
    word: "while",
    meaning: "~하는 동안",
    sentences: ["Read while I cook.", "Sing while you walk.", "Wait here for a while."]
},
{
    word: "concert",
    meaning: "콘서트",
    sentences: ["I went to a concert.", "The concert was fun.", "Let's go to the concert."]
},
{
    word: "toothache",
    meaning: "치통",
    sentences: ["I have a toothache.", "The toothache hurts.", "My toothache is gone."]
},
{
    word: "claw",
    meaning: "발톱",
    sentences: ["The cat has sharp claws.", "The claw is long.", "Watch out for the claw."]
},
{
    word: "prepare",
    meaning: "준비하다",
    sentences: ["Let's prepare dinner.", "I prepare for school.", "Help me prepare the table."]
},
{
    word: "hundred",
    meaning: "100",
    sentences: ["I can count to a hundred.", "There are a hundred balls.", "A hundred birds flew by."]
},
{
    word: "leaves",
    meaning: "나뭇잎",
    sentences: ["The leaves are green.", "Fall leaves are pretty.", "Pick up the leaves."]
},
{
    word: "autumn",
    meaning: "가을",
    sentences: ["Autumn is beautiful.", "I love autumn colors.", "It's autumn now."]
},
{
    word: "throat",
    meaning: "목구멍",
    sentences: ["My throat hurts.", "The throat is sore.", "Touch your throat."]
},
{
    word: "weekend",
    meaning: "주말",
    sentences: ["It's the weekend now.", "Have a nice weekend.", "I play on the weekend."]
},
{
    word: "vegetables",
    meaning: "채소",
    sentences: ["Eat your vegetables.", "The vegetables are fresh.", "I like vegetables."]
},
{
    word: "knowledge",
    meaning: "지식",
    sentences: ["Books give us knowledge.", "Share your knowledge.", "I have knowledge about animals."]
},
{
    word: "exciting",
    meaning: "신나는",
    sentences: ["The game is exciting.", "What exciting news!", "This is exciting."]
},
{
    word: "grumpy",
    meaning: "심술궂은",
    sentences: ["Don't be grumpy.", "The grumpy cat slept.", "He feels grumpy today."]
},
{
    word: "ceiling",
    meaning: "천장",
    sentences: ["Look at the ceiling.", "The ceiling is white.", "Paint the ceiling."]
},
{
    word: "beautiful",
    meaning: "아름다운",
    sentences: ["The flower is beautiful.", "What a beautiful day!", "Mom is beautiful."]
},
{
    word: "scarecrow",
    meaning: "허수아비",
    sentences: ["The scarecrow is in the field.", "Make a scarecrow.", "Birds fear the scarecrow."]
},
{
    word: "happen",
    meaning: "일어나다",
    sentences: ["What will happen next?", "It can happen to anyone.", "Something will happen."]
},
{
    word: "bottom",
    meaning: "바닥",
    sentences: ["Sit at the bottom.", "The bottom is dirty.", "Look at the bottom."]
},
{
    word: "centimeter",
    meaning: "센티미터",
    sentences: ["Measure in centimeter.", "One centimeter is small.", "Draw a centimeter line."]
},
{
    word: "because",
    meaning: "왜냐하면",
    sentences: ["I'm happy because it's sunny.", "Because I love you.", "Study because it's important."]
},
{
    word: "afraid",
    meaning: "두려운",
    sentences: ["Don't be afraid.", "I'm afraid of spiders.", "The mouse is afraid."]
},
{
    word: "smoothie",
    meaning: "스무디",
    sentences: ["I like banana smoothie.", "Make a smoothie.", "The smoothie is cold."]
},
{
    word: "understand",
    meaning: "이해하다",
    sentences: ["I understand now.", "Do you understand?", "Help me understand."]
},
{
    word: "country",
    meaning: "나라",
    sentences: ["Korea is my country.", "Visit another country.", "Which country are you from?"]
},
{
    word: "popular",
    meaning: "인기있는",
    sentences: ["This game is popular.", "She is very popular.", "The popular song plays."]
},
{
    word: "handshake",
    meaning: "악수",
    sentences: ["Give me a handshake.", "The handshake was firm.", "Let's handshake."]
},
{
    word: "sweatshirt",
    meaning: "운동복 상의",
    sentences: ["Wear your sweatshirt.", "The sweatshirt is warm.", "I like this sweatshirt."]
},
{
    word: "mountain",
    meaning: "산",
    sentences: ["The mountain is high.", "Climb the mountain.", "I see a mountain."]
},
{
    word: "tongue",
    meaning: "혀",
    sentences: ["Stick out your tongue.", "The tongue is pink.", "My tongue is hot."]
},
{
    word: "delicious",
    meaning: "맛있는",
    sentences: ["The cake is delicious.", "What delicious food!", "Mom makes delicious meals."]
},
{
    word: "daytime",
    meaning: "낮시간",
    sentences: ["I study in the daytime.", "The daytime is bright.", "Play in the daytime."]
},
{
    word: "monthly",
    meaning: "매월의",
    sentences: ["I get monthly tests.", "Pay the monthly rent.", "It's a monthly meeting."]
},
{
    word: "wonder",
    meaning: "궁금해하다",
    sentences: ["I wonder why.", "Do you wonder too?", "We all wonder about it."]
},
{
    word: "theater",
    meaning: "극장",
    sentences: ["Let's go to the theater.", "The theater is big.", "Watch movies at the theater."]
},
{
    word: "toward",
    meaning: "~쪽으로",
    sentences: ["Walk toward me.", "Run toward home.", "Look toward the sun."]
},
{
    word: "lollipop",
    meaning: "막대사탕",
    sentences: ["I like this lollipop.", "The lollipop is sweet.", "Give me a lollipop."]
},
{
    word: "stormy",
    meaning: "폭풍우의",
    sentences: ["It's a stormy day.", "The stormy weather is scary.", "Stay inside when stormy."]
},
{
    word: "scream",
    meaning: "비명을 지르다",
    sentences: ["Don't scream so loud.", "I heard a scream.", "We scream for ice cream."]
},
{
    word: "through",
    meaning: "~을 통해",
    sentences: ["Look through the window.", "Walk through the door.", "Go through the tunnel."]
},
{
    word: "stomachache",
    meaning: "복통",
    sentences: ["I have a stomachache.", "The stomachache is bad.", "My stomachache is gone."]
},
{
    word: "careful",
    meaning: "조심스러운",
    sentences: ["Be careful with glass.", "Walk careful steps.", "Please be careful."]
},
{
    word: "amusement park",
    meaning: "놀이공원",
    sentences: ["Visit the amusement park.", "The amusement park is fun.", "Let's go to the amusement park."]
},
{
    word: "museum",
    meaning: "박물관",
    sentences: ["The museum is closed.", "Visit the museum today.", "I love this museum."]
},
{
    word: "dangerous",
    meaning: "위험한",
    sentences: ["That's dangerous.", "Be safe, not dangerous.", "The dangerous road is closed."]
},
{
    word: "cracked",
    meaning: "금이 간",
    sentences: ["The egg is cracked.", "Fix the cracked window.", "The mirror is cracked."]
},
{
    word: "important",
    meaning: "중요한",
    sentences: ["This is important.", "Study is important.", "Remember important things."]
},
{
    word: "return",
    meaning: "돌아오다",
    sentences: ["Please return my book.", "When will you return?", "The birds return home."]
},
{
    word: "interesting",
    meaning: "재미있는",
    sentences: ["The book is interesting.", "What interesting news!", "Tell me something interesting."]
},
{
    word: "sore",
    meaning: "아픈",
    sentences: ["My leg is sore.", "The sore throat hurts.", "I feel sore today."]
},
{
    word: "iguana",
    meaning: "이구아나",
    sentences: ["The iguana is green.", "Look at the iguana.", "Feed the iguana."]
},
{
    word: "Tuesday",
    meaning: "화요일",
    sentences: ["Today is Tuesday.", "See you on Tuesday.", "I have class Tuesday."]
},
{
    word: "sneakers",
    meaning: "운동화",
    sentences: ["Wear your sneakers.", "The sneakers are new.", "Clean your sneakers."]
},
{
    word: "restaurant",
    meaning: "식당",
    sentences: ["Let's go to the restaurant.", "The restaurant is open.", "This restaurant is good."]
},
{
    word: "birthday",
    meaning: "생일",
    sentences: ["Happy birthday to you!", "It's my birthday today.", "Have a great birthday."]
},
{
    word: "laugh",
    meaning: "웃다",
    sentences: ["Make me laugh.", "We laugh together.", "The baby can laugh."]
},
{
    word: "whisper",
    meaning: "속삭이다",
    sentences: ["Please whisper quietly.", "I hear a whisper.", "Let's whisper now."]
},
{
    word: "different",
    meaning: "다른",
    sentences: ["We are all different.", "Try something different.", "The colors are different."]
},
{
    word: "stripes",
    meaning: "줄무늬",
    sentences: ["The tiger has stripes.", "I like blue stripes.", "Draw some stripes."]
}
 ];
// DataManager 클래스
class DataManager {
    constructor() {
        this.progress = {
            currentWordIndex: 0,
            dayCount: 1,
            learnedWords: []
        };
        this.testResults = [];
        this.statistics = {
            totalWordsLearned: 0,
            correctAnswers: 0,
            totalAttempts: 0,
            studyDays: new Set(),
            dailyStats: [],
            studyTime: 0,
            lastStudyStart: null
        };
        this.mistakeNotes = new Map();
        this.reviewSchedule = new Set();
        
        this.loadSavedData();
    }
loadSavedData() {
        try {
            const savedProgress = localStorage.getItem('progress');
            if (savedProgress) {
                this.progress = JSON.parse(savedProgress);
            }

            const savedStats = localStorage.getItem('statistics');
            if (savedStats) {
                const stats = JSON.parse(savedStats);
                this.statistics = {
                    ...stats,
                    studyDays: new Set(stats.studyDays)
                };
            }

            const savedMistakes = localStorage.getItem('mistakeNotes');
            if (savedMistakes) {
                this.mistakeNotes = new Map(JSON.parse(savedMistakes));
            }

            const savedReview = localStorage.getItem('reviewSchedule');
            if (savedReview) {
                this.reviewSchedule = new Set(JSON.parse(savedReview));
            }
        } catch (error) {
            console.error('Error loading saved data:', error);
            showError('데이터 로딩 중 오류가 발생했습니다.');
        }
    }

    saveProgress(data) {
        this.progress = { ...data };
        localStorage.setItem('progress', JSON.stringify(this.progress));
        this.updateUI();
    }

    getProgress() {
        return this.progress;
    }

    saveMistakeNote(word, isCorrect) {
        if (!isCorrect) {
            const note = this.mistakeNotes.get(word) || {
                word: word,
                meaning: wordList.find(w => w.word === word).meaning,
                mistakeCount: 0,
                lastReview: new Date().toISOString()
            };
            
            note.mistakeCount++;
            note.lastReview = new Date().toISOString();
            this.mistakeNotes.set(word, note);
            this.reviewSchedule.add(word);
            
            this.saveToLocalStorage();
            this.updateMistakeNotesUI();
        }
    }

    updateStatistics(testResult) {
        const today = new Date().toISOString().split('T')[0];
        this.statistics.studyDays.add(today);
        this.statistics.correctAnswers += testResult.score;
        this.statistics.totalAttempts += testResult.total;
        this.statistics.totalWordsLearned = this.progress.currentWordIndex;
        
        const timeSpent = this.statistics.lastStudyStart ? 
            Math.round((Date.now() - this.statistics.lastStudyStart) / 1000) : 0;

        this.statistics.dailyStats.push({
            date: today,
            wordsStudied: testResult.total,
            accuracy: (testResult.score / testResult.total) * 100,
            timeSpent
        });

        if (this.statistics.dailyStats.length > 7) {
            this.statistics.dailyStats.shift();
        }

        this.saveToLocalStorage();
        this.updateStatisticsUI();
    }

    startStudySession() {
        this.statistics.lastStudyStart = Date.now();
    }

    updateUI() {
        const dailyProgress = (this.progress.learnedWords.length % dailyWordCount) / dailyWordCount * 100;
        const totalProgress = (this.progress.currentWordIndex / wordList.length) * 100;

        const dailyProgressBar = document.getElementById('daily-progress-bar');
        const totalProgressBar = document.getElementById('total-progress-bar');
        const dailyProgressText = document.getElementById('daily-progress-text');
        const totalProgressText = document.getElementById('total-progress-text');

        if (dailyProgressBar) dailyProgressBar.style.width = `${dailyProgress}%`;
        if (totalProgressBar) totalProgressBar.style.width = `${totalProgress}%`;
        if (dailyProgressText) dailyProgressText.textContent = `${Math.round(dailyProgress)}%`;
        if (totalProgressText) totalProgressText.textContent = `${Math.round(totalProgress)}%`;
    }

    updateStatisticsUI() {
        document.getElementById('total-words-learned').textContent = 
            this.statistics.totalWordsLearned;
        
        const accuracy = this.statistics.totalAttempts === 0 ? 0 :
            Math.round((this.statistics.correctAnswers / this.statistics.totalAttempts) * 100);
        document.getElementById('overall-accuracy').textContent = `${accuracy}%`;
        
        document.getElementById('days-studied').textContent = 
            this.statistics.studyDays.size;
        
        document.getElementById('words-to-review').textContent = 
            this.reviewSchedule.size;

        this.updateRecentActivity();
        this.updateLearningProgressChart();
    }

    // ... DataManager의 나머지 메서드들은 다음 부분에서 계속됩니다.
updateMistakeNotesUI() {
        const tbody = document.getElementById('mistake-note-body');
        if (!tbody) return;

        tbody.innerHTML = '';
        this.mistakeNotes.forEach(note => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="text-sm font-medium text-gray-900">${note.word}</div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${note.meaning}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        ${note.mistakeCount}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${new Date(note.lastReview).toLocaleDateString()}
                </td>
            `;
            tbody.appendChild(row);
        });

        const mistakeCount = document.getElementById('mistake-count');
        if (mistakeCount) {
            mistakeCount.textContent = this.mistakeNotes.size;
        }
    }

    updateRecentActivity() {
        const tbody = document.getElementById('recent-activity-body');
        if (tbody) {
            tbody.innerHTML = '';
            this.statistics.dailyStats.slice().reverse().forEach(stat => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="px-4 py-2">${new Date(stat.date).toLocaleDateString()}</td>
                    <td class="px-4 py-2">${stat.wordsStudied}</td>
                    <td class="px-4 py-2">${Math.round(stat.accuracy)}%</td>
                    <td class="px-4 py-2">${Math.floor(stat.timeSpent / 60)}m ${stat.timeSpent % 60}s</td>
                `;
                tbody.appendChild(row);
            });
        }
    }

    updateLearningProgressChart() {
        const ctx = document.getElementById('learning-progress-chart');
        if (!ctx) return;

        if (window.learningChart) {
            window.learningChart.destroy();
        }

        window.learningChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.statistics.dailyStats.map(stat => 
                    new Date(stat.date).toLocaleDateString()),
                datasets: [{
                    label: 'Accuracy (%)',
                    data: this.statistics.dailyStats.map(stat => stat.accuracy),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }

    saveToLocalStorage() {
        try {
            localStorage.setItem('progress', JSON.stringify(this.progress));
            localStorage.setItem('statistics', JSON.stringify({
                ...this.statistics,
                studyDays: Array.from(this.statistics.studyDays)
            }));
            localStorage.setItem('mistakeNotes', JSON.stringify([...this.mistakeNotes]));
            localStorage.setItem('reviewSchedule', JSON.stringify([...this.reviewSchedule]));
        } catch (error) {
            console.error('Error saving data:', error);
            showError('데이터 저장 중 오류가 발생했습니다.');
        }
    }
}

// 전역 변수 설정
const dataManager = new DataManager();
let currentWordIndex = 0;
let dayCount = 1;
let learnedWords = [];
const dailyWordCount = 5;

// 음성 출력 함수
function sayText(text) {
    return new Promise((resolve, reject) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';

        const voices = speechSynthesis.getVoices();
        const nativeVoice = voices.find(voice => 
            voice.lang.startsWith('en') && voice.localService === false
        );

        if (nativeVoice) {
            utterance.voice = nativeVoice;
        }

        utterance.onend = resolve;
        utterance.onerror = reject;
        speechSynthesis.speak(utterance);
    });
}

// 랜덤 문장 선택 함수
function getRandomSentence(wordEntry) {
    const sentences = wordEntry.sentences;
    return sentences[Math.floor(Math.random() * sentences.length)];
}

// 이름 설정 함수
async function setNameWithVoice() {
    try {
        await requestPermissions();
        
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            showError("이 브라우저에서는 음성 인식이 지원되지 않습니다. Chrome 브라우저를 사용해주세요.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.start();

        recognition.onresult = async function(event) {
            const name = event.results[0][0].transcript;
            localStorage.setItem('userName', name);
            document.getElementById('userStatus').textContent = `Welcome, ${name}!`;
            await sayText(`Hello, ${name}! Let's start practicing.`);
            document.getElementById('learning-section').style.display = 'grid';
            document.getElementById('test-section').style.display = 'block';
            document.getElementById('initial-setup').style.display = 'none';
            document.getElementById('review-section').style.display = 'block';
        };

        recognition.onerror = function(event) {
            showError("음성 인식 중 오류가 발생했습니다: " + event.error);
        };
    } catch (err) {
        showError("마이크 권한이 필요합니다. 권한을 허용해주세요.");
    }
}

// 학습 시작 함수
async function startPractice() {
    try {
        const dailyWords = wordList.slice(currentWordIndex, currentWordIndex + dailyWordCount);
        dataManager.startStudySession();
        
        for (const wordEntry of dailyWords) {
            const sentence = getRandomSentence(wordEntry);
            
            document.getElementById('current-word').textContent = wordEntry.word;
            document.getElementById('current-meaning').textContent = wordEntry.meaning;
            document.getElementById('current-sentence').textContent = sentence;

            await sayText(`${wordEntry.word}. ${sentence}`);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        learnedWords.push(...dailyWords);
        currentWordIndex += dailyWordCount;
        dataManager.saveProgress({
            currentWordIndex,
            dayCount,
            learnedWords
        });

        document.getElementById('test-section').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('학습 중 오류 발생:', error);
        showError('학습 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
}

// 테스트 시작 함수
async function startTest() {
    try {
        const testWords = learnedWords.slice(-dailyWordCount * dayCount);
        let score = 0;
        const studentName = localStorage.getItem('userName') || "friend";

        for (const wordEntry of testWords) {
            const sentence = getRandomSentence(wordEntry);
            
            document.getElementById('test-word').textContent = wordEntry.word;
            document.getElementById('test-sentence').textContent = sentence;
            document.getElementById('test-instruction').textContent = 
                `Please say: ${wordEntry.word}, spell it, and say it again.`;
            
            // 단어와 문장 읽어주기
            await sayText(`${wordEntry.word}. ${sentence}`);

            // 학생의 답변 기다리기
            document.getElementById('start-recording').style.display = 'block';
            
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = 'en-US';

            const response = await new Promise((resolve) => {
                recognition.onresult = (event) => {
                    const answer = event.results[0][0].transcript.toLowerCase();
                    resolve(answer);
                };
                recognition.onerror = () => {
                    resolve('');
                };
                recognition.start();
            });

            document.getElementById('start-recording').style.display = 'none';

            // 답변 형식 체크 및 평가
            const expectedFormat = `${wordEntry.word.toLowerCase()}. ${wordEntry.word.split('').join('-')}. ${wordEntry.word.toLowerCase()}`;
            const isCorrect = response.replace(/\s+/g, ' ').trim() === expectedFormat;

            if (isCorrect) {
                score++;
                await sayText(studentName);
                await new Promise(resolve => setTimeout(resolve, 1000));

                const praises = [
                    "Excellent pronunciation! 🌟",
                    "Perfect spelling! You're doing great! ⭐",
                    "Amazing job! Keep it up! 🎉",
                    "Wonderful! You're becoming a spelling expert! 👏",
                    "That's exactly right! You're so smart! 🏆"
                ];
                const praise = praises[Math.floor(Math.random() * praises.length)];
                await sayText(praise);
                
                document.getElementById('test-result').innerHTML = `
                    <div class="text-green-600 animate__animated animate__bounceIn">
                        ${studentName}... ${praise}
                    </div>
                `;
            } else {
                await sayText(studentName);
                await new Promise(resolve => setTimeout(resolve, 1000));

                const corrections = [
                    "Good try! Let's practice together:",
                    "Almost there! Remember to say it like this:",
                    "You're getting better! Here's how to say it:",
                    "Nice effort! Let's try it one more time:"
                ];
                const correction = corrections[Math.floor(Math.random() * corrections.length)];
                await sayText(correction);
                
                document.getElementById('test-result').innerHTML = `
                    <div class="text-blue-600 animate__animated animate__fadeIn">
                        ${studentName}... ${correction}<br>
                        <span class="font-bold">${wordEntry.word}. ${wordEntry.word.split('').join('-')}. ${wordEntry.word}</span>
                    </div>
                    <div class="mt-2 text-gray-600">Don't worry! Practice makes perfect! 💪</div>
                `;

                await new Promise(resolve => setTimeout(resolve, 1000));
                await sayText(`${wordEntry.word}. ${wordEntry.word.split('').join('-')}. ${wordEntry.word}`);
            }

            dataManager.saveMistakeNote(wordEntry.word, isCorrect);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        // 최종 결과 표시
        await sayText(studentName);
        await new Promise(resolve => setTimeout(resolve, 1000));

        const finalMessage = score === testWords.length ? 
            "Perfect score! You're amazing! 🌟🎉" :
            `Great effort! You got ${score} out of ${testWords.length} correct! Let's practice the tricky ones together! 💪`;
        
        await sayText(finalMessage);
        
        document.getElementById('test-result').innerHTML = `
            <div class="text-lg font-bold ${score === testWords.length ? 'text-green-600' : 'text-blue-600'} animate__animated animate__bounceIn">
                ${studentName}... ${finalMessage}
            </div>
        `;

        dataManager.updateStatistics({
            score,
            total: testWords.length
        });

        dayCount++;
        dataManager.saveProgress({
            currentWordIndex,
            dayCount,
            learnedWords
        });

        document.getElementById('review-section').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('테스트 중 오류 발생:', error);
        showError('테스트 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
}

// 단어 반복 함수
function repeatCurrentWord() {
    const currentWord = document.getElementById('current-word').textContent;
    if (currentWord !== 'Word') {
        sayText(currentWord);
    }
}

// 모바일 환경 처리
if (isMobile()) {
    document.querySelector('.container').style.padding = '10px';
    document.addEventListener('touchstart', handleTouch);
}

// 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    // 주요 버튼 이벤트 리스너
    document.getElementById('set-name-button').addEventListener('click', setNameWithVoice);
    document.getElementById('start-practice-button').addEventListener('click', startPractice);
    document.getElementById('start-test-button').addEventListener('click', startTest);
    document.getElementById('repeat-word-button').addEventListener('click', repeatCurrentWord);

    // 복습 및 오답 노트 버튼
    document.getElementById('start-review-button')?.addEventListener('click', startPractice);
    document.getElementById('review-mistakes-button')?.addEventListener('click', () => {
        const mistakeNoteSection = document.getElementById('mistake-note-section');
        if (mistakeNoteSection) {
            mistakeNoteSection.style.display = 
                mistakeNoteSection.style.display === 'none' ? 'block' : 'none';
            if (mistakeNoteSection.style.display === 'block') {
                dataManager.updateMistakeNotesUI();
                mistakeNoteSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // 통계 버튼
    document.getElementById('show-stats-button')?.addEventListener('click', () => {
        const statsSection = document.getElementById('stats-section');
        if (statsSection) {
            statsSection.style.display = 
                statsSection.style.display === 'none' ? 'block' : 'none';
            if (statsSection.style.display === 'block') {
                dataManager.updateStatisticsUI();
                statsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // 음성 목록 로드
    window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        console.log('Available voices loaded:', voices.length);
    };

    // 저장된 데이터 로드
    dataManager.loadSavedData();
});
