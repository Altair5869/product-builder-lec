// 디저트 추천 퀴즈 데이터
const questions = [
  {
    question: "오늘 기분이 어때요?",
    options: [
      { text: "기분 최고! 행복해요", icon: "😊", type: "happy" },
      { text: "좀 피곤하고 지쳐요", icon: "😴", type: "tired" },
      { text: "스트레스 받아요", icon: "😤", type: "stressed" },
      { text: "설레고 두근두근해요", icon: "💕", type: "excited" }
    ]
  },
  {
    question: "선호하는 맛은 무엇인가요?",
    options: [
      { text: "달콤한 맛", icon: "🍯", type: "sweet" },
      { text: "상큼한 맛", icon: "🍋", type: "fresh" },
      { text: "고소한 맛", icon: "🥜", type: "nutty" },
      { text: "쌉싸름한 맛", icon: "🍫", type: "bitter" }
    ]
  },
  {
    question: "디저트를 먹는 상황은?",
    options: [
      { text: "혼자 힐링 타임", icon: "🧘", type: "alone" },
      { text: "친구와 수다 타임", icon: "👯", type: "friends" },
      { text: "연인과 데이트", icon: "💑", type: "date" },
      { text: "가족과 함께", icon: "👨‍👩‍👧‍👦", type: "family" }
    ]
  },
  {
    question: "선호하는 온도는?",
    options: [
      { text: "차갑게 시원하게", icon: "🧊", type: "cold" },
      { text: "따뜻하게 포근하게", icon: "☕", type: "warm" },
      { text: "상온이 좋아요", icon: "🌡️", type: "room" },
      { text: "상관없어요", icon: "🤷", type: "any" }
    ]
  },
  {
    question: "식감 취향은?",
    options: [
      { text: "부드럽고 촉촉한", icon: "🍮", type: "soft" },
      { text: "바삭하고 크런치한", icon: "🥐", type: "crunchy" },
      { text: "쫀득쫀득한", icon: "🍡", type: "chewy" },
      { text: "크리미하고 진한", icon: "🍦", type: "creamy" }
    ]
  }
];

// 디저트 결과 데이터
const desserts = {
  tiramisu: {
    name: "티라미수",
    icon: "🍰",
    description: "부드러운 마스카포네 크림과 에스프레소의 조화가 완벽한 이탈리안 디저트예요. 달콤하면서도 커피의 쌉싸름함이 어우러져 어른의 맛을 선사합니다.",
    tags: ["#이탈리안", "#커피향", "#부드러움"],
    tip: "카페에서 아메리카노와 함께 즐기면 더욱 맛있어요!"
  },
  macaron: {
    name: "마카롱",
    icon: "🧁",
    description: "겉은 바삭하고 속은 촉촉한 프렌치 디저트의 정수! 다양한 맛과 예쁜 색감으로 눈과 입 모두 행복해지는 디저트예요.",
    tags: ["#프렌치", "#다채로운맛", "#선물용"],
    tip: "냉장 보관 후 상온에 10분 두고 먹으면 최상의 식감을 즐길 수 있어요!"
  },
  yakgwa: {
    name: "약과",
    icon: "🍯",
    description: "꿀과 참기름으로 만든 한국 전통 디저트가 MZ세대에게 재발견되고 있어요! 달콤하고 쫀득한 식감이 중독성 있는 요즘 대세 디저트예요.",
    tags: ["#한국전통", "#꿀맛", "#MZ핫템"],
    tip: "차가운 우유나 아메리카노와 함께하면 단맛이 중화되어 더 맛있어요!"
  },
  croffle: {
    name: "크로플",
    icon: "🧇",
    description: "크로와상의 바삭함과 와플의 식감이 만난 인기 디저트! 겉은 바삭하고 속은 촉촉한 매력에 빠져보세요.",
    tags: ["#바삭함", "#따뜻함", "#브런치"],
    tip: "바닐라 아이스크림을 올려 먹으면 따뜻함과 차가움의 조화가 환상이에요!"
  },
  cheesecake: {
    name: "바스크 치즈케이크",
    icon: "🧀",
    description: "겉은 캐러멜화되어 살짝 탄 듯하고, 속은 부드럽고 진한 치즈 맛이 일품이에요. 스페인 바스크 지방에서 유래한 디저트예요.",
    tags: ["#치즈러버", "#진한맛", "#부드러움"],
    tip: "차갑게 먹으면 더 진한 치즈 맛을, 상온에서는 부드러운 식감을 즐길 수 있어요!"
  },
  bingsu: {
    name: "팥빙수",
    icon: "🍧",
    description: "곱게 간 얼음 위에 달콤한 팥과 떡, 견과류를 올린 한국 대표 디저트예요. 시원하고 달콤해서 더운 날 최고의 선택이에요.",
    tags: ["#한국디저트", "#시원함", "#팥앙금"],
    tip: "인절미 토핑을 추가하면 고소함이 배가 돼요!"
  },
  dubaiChocolate: {
    name: "두바이 초콜릿",
    icon: "🍫",
    description: "피스타치오 카다이프가 듬뿍 들어간 두바이 초콜릿이에요! 바삭한 카다이프와 고소한 피스타치오, 달콤한 초콜릿의 조화가 환상적이에요.",
    tags: ["#두바이", "#피스타치오", "#SNS대세"],
    tip: "냉장 보관 후 먹으면 카다이프의 바삭함이 더 살아나요!"
  },
  saltBread: {
    name: "소금빵",
    icon: "🥐",
    description: "겉은 바삭하고 속은 촉촉한 빵 위에 소금이 톡톡! 버터의 풍미와 짭짤한 소금의 조화가 자꾸만 손이 가는 인기 빵이에요.",
    tags: ["#짭짤함", "#버터향", "#베이커리핫템"],
    tip: "오븐에 살짝 데워 먹으면 버터가 녹아 더 촉촉해져요!"
  },
  tanghulu: {
    name: "탕후루",
    icon: "🍡",
    description: "신선한 과일을 달콤한 설탕 코팅으로 감싼 바삭한 디저트예요! 딸기, 포도, 귤 등 다양한 과일로 즐길 수 있어요. 한입 베어물면 바삭! 상큼!",
    tags: ["#바삭함", "#과일", "#길거리간식"],
    tip: "만든 직후 바로 먹어야 바삭한 코팅을 제대로 즐길 수 있어요!"
  },
  donut: {
    name: "글레이즈드 도넛",
    icon: "🍩",
    description: "푹신한 도넛에 달콤한 글레이즈가 코팅된 클래식한 디저트예요. 심플하지만 누구나 좋아하는 맛이에요.",
    tags: ["#클래식", "#달콤함", "#간식"],
    tip: "커피와 함께하면 글레이즈의 단맛이 더 살아나요!"
  }
};

// 상태 관리
let currentQuestion = 0;
let answers = [];

// DOM 요소
const screens = {
  start: document.getElementById('start-screen'),
  quiz: document.getElementById('quiz-screen'),
  result: document.getElementById('result-screen')
};

// 화면 전환 함수
function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

// 퀴즈 시작
function startQuiz() {
  currentQuestion = 0;
  answers = [];
  showScreen('quiz');
  displayQuestion();
}

// 질문 표시
function displayQuestion() {
  const question = questions[currentQuestion];
  document.getElementById('current-q').textContent = currentQuestion + 1;
  document.getElementById('total-q').textContent = questions.length;
  document.getElementById('question').textContent = question.question;

  // 진행바 업데이트
  const progress = ((currentQuestion) / questions.length) * 100;
  document.getElementById('progress').style.width = `${progress}%`;

  // 옵션 버튼 생성
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.innerHTML = `
      <span class="option-icon">${option.icon}</span>
      <span>${option.text}</span>
    `;
    button.onclick = () => selectAnswer(option.type);
    optionsContainer.appendChild(button);
  });
}

// 답변 선택
function selectAnswer(type) {
  answers.push(type);

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    showResult();
  }
}

// 결과 계산 및 표시
function showResult() {
  const dessert = calculateResult();

  document.getElementById('result-icon').textContent = dessert.icon;
  document.getElementById('result-name').textContent = dessert.name;
  document.getElementById('result-description').textContent = dessert.description;
  document.getElementById('result-tip').textContent = dessert.tip;

  // 태그 표시
  const tagsContainer = document.getElementById('result-tags');
  tagsContainer.innerHTML = dessert.tags.map(tag =>
    `<span class="tag">${tag}</span>`
  ).join('');

  // 진행바 완료
  document.getElementById('progress').style.width = '100%';

  showScreen('result');
}

// 결과 계산 로직
function calculateResult() {
  const [mood, taste, situation, temp, texture] = answers;

  // 조합에 따른 디저트 추천
  if (taste === 'bitter' && texture === 'soft') {
    return desserts.tiramisu;
  }
  if (taste === 'sweet' && texture === 'crunchy') {
    return desserts.macaron;
  }
  if (taste === 'sweet' && texture === 'chewy') {
    return desserts.yakgwa;
  }
  if (temp === 'warm' && texture === 'crunchy') {
    return desserts.croffle;
  }
  if (taste === 'nutty' && texture === 'soft') {
    return desserts.cheesecake;
  }
  if (temp === 'cold' && mood === 'tired') {
    return desserts.bingsu;
  }
  if (taste === 'nutty' && texture === 'crunchy') {
    return desserts.dubaiChocolate;
  }
  if (taste === 'fresh' && texture === 'crunchy') {
    return desserts.tanghulu;
  }
  if (temp === 'warm' && texture === 'soft') {
    return desserts.saltBread;
  }
  if (mood === 'happy' && taste === 'sweet') {
    return desserts.donut;
  }

  // 기본 추천 (가장 인기 있는 조합)
  if (mood === 'happy') return desserts.macaron;
  if (mood === 'tired') return desserts.yakgwa;
  if (mood === 'stressed') return desserts.dubaiChocolate;
  if (mood === 'excited') return desserts.tanghulu;

  // 최종 기본값
  return desserts.tiramisu;
}

// 다시 시작
function restartQuiz() {
  startQuiz();
}

// 결과 공유
function shareResult() {
  const resultName = document.getElementById('result-name').textContent;
  const shareText = `나에게 어울리는 디저트는 "${resultName}"이래요! 🍰\n당신의 디저트도 찾아보세요!`;

  if (navigator.share) {
    navigator.share({
      title: '오늘의 디저트 추천',
      text: shareText,
      url: window.location.href
    }).catch(() => {
      copyToClipboard(shareText);
    });
  } else {
    copyToClipboard(shareText);
  }
}

// 클립보드 복사
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('결과가 클립보드에 복사되었어요! 친구에게 공유해보세요 💕');
  }).catch(() => {
    alert('공유하기가 지원되지 않는 브라우저예요.');
  });
}
