const exercises = [
  {
    id: 1,
    level: "basic",
    type: "mcq",
    tag: "Gradable",
    question: "This room is ______ cold. Can you close the window?",
    options: ["absolutely", "very", "completely"],
    answer: "very",
    feedback: "'Cold' là gradable adjective, nên dùng 'very cold', 'quite cold', 'a bit cold'."
  },
  {
    id: 2,
    level: "basic",
    type: "mcq",
    tag: "Non-gradable",
    question: "I was ______ exhausted after the long trip.",
    options: ["completely", "a bit", "very"],
    answer: "completely",
    feedback: "'Exhausted' đã mang nghĩa rất mạnh: kiệt sức. Ta thường dùng 'completely exhausted'."
  },
  {
    id: 3,
    level: "basic",
    type: "mcq",
    tag: "Comparative",
    question: "My new bag is ______ than my old one.",
    options: ["more cheap", "cheaper", "the cheapest"],
    answer: "cheaper",
    feedback: "'Cheap' là tính từ ngắn, so sánh hơn là 'cheaper than'."
  },
  {
    id: 4,
    level: "basic",
    type: "mcq",
    tag: "Superlative",
    question: "This is ______ question in the test.",
    options: ["the easiest", "easier", "more easy"],
    answer: "the easiest",
    feedback: "So sánh nhất cần 'the'. 'Easy' đổi y thành i rồi thêm -est: the easiest."
  },
  {
    id: 5,
    level: "basic",
    type: "mcq",
    tag: "as...as",
    question: "My phone is ______ expensive as yours.",
    options: ["so", "as", "than"],
    answer: "as",
    feedback: "Cấu trúc ngang bằng: as + adjective + as."
  },
  {
    id: 6,
    level: "basic",
    type: "fill",
    tag: "Comparative",
    question: "Complete: English is ______ than French for me. (easy)",
    answers: ["easier"],
    feedback: "'Easy' kết thúc bằng phụ âm + y, đổi y thành i rồi thêm -er: easier."
  },
  {
    id: 7,
    level: "basic",
    type: "fill",
    tag: "Superlative",
    question: "Complete: Nam is ______ student in my class. (tall)",
    answers: ["the tallest"],
    feedback: "So sánh nhất của 'tall' là 'the tallest'."
  },
  {
    id: 8,
    level: "basic",
    type: "fill",
    tag: "Non-gradable",
    question: "Complete: The kitchen is ______ spotless after cleaning.",
    answers: ["absolutely", "completely", "totally"],
    feedback: "'Spotless' nghĩa là sạch không tì vết, thường đi với absolutely/completely/totally."
  },
  {
    id: 9,
    level: "basic",
    type: "fill",
    tag: "as...as",
    question: "Complete: This exercise is not as ______ as yesterday's exercise. (difficult)",
    answers: ["difficult"],
    feedback: "Trong cấu trúc 'not as...as', tính từ giữ nguyên, không thêm -er."
  },
  {
    id: 10,
    level: "basic",
    type: "fill",
    tag: "Irregular",
    question: "Complete: This restaurant is ______ than the one near my school. (good)",
    answers: ["better"],
    feedback: "'Good' là bất quy tắc: good → better → the best."
  },
  {
    id: 11,
    level: "pet",
    type: "mcq",
    tag: "PET Choice",
    question: "Choose the best sentence for PET Writing.",
    prompt: "Bạn muốn nói: 'Thư viện yên tĩnh hơn căng tin.'",
    options: ["The library is more quiet than the canteen.", "The library is quieter than the canteen.", "The library is the quietest than the canteen."],
    answer: "The library is quieter than the canteen.",
    feedback: "'Quiet' có thể dùng 'quieter'. Khi so sánh 2 nơi, dùng comparative + than."
  },
  {
    id: 12,
    level: "pet",
    type: "mcq",
    tag: "PET Speaking",
    question: "Which sentence is best when comparing two pictures?",
    options: ["The first picture is not as crowded as the second one.", "The first picture is not as more crowded as the second one.", "The first picture is not crowded than the second one."],
    answer: "The first picture is not as crowded as the second one.",
    feedback: "Sau 'not as' dùng tính từ nguyên mẫu: not as crowded as."
  },
  {
    id: 13,
    level: "pet",
    type: "mcq",
    tag: "Quantifiers",
    question: "There are ______ students in my English class this year than last year.",
    options: ["less", "fewer", "much"],
    answer: "fewer",
    feedback: "'Students' là danh từ đếm được số nhiều, dùng 'fewer'."
  },
  {
    id: 14,
    level: "pet",
    type: "mcq",
    tag: "Quantifiers",
    question: "I have ______ free time than before because I have more homework.",
    options: ["fewer", "less", "the least"],
    answer: "less",
    feedback: "'Time' là danh từ không đếm được, dùng 'less'."
  },
  {
    id: 15,
    level: "pet",
    type: "fill",
    tag: "one of the",
    question: "Complete: It is one of ______ places in my city. (beautiful)",
    answers: ["the most beautiful"],
    feedback: "Cấu trúc: one of the + superlative + plural noun."
  },
  {
    id: 16,
    level: "pet",
    type: "fill",
    tag: "Comparative degree",
    question: "Complete: My new school is ______ bigger than my old school. (hơn nhiều)",
    answers: ["much", "a lot", "far"],
    feedback: "Có thể dùng 'much/a lot/far' trước comparative để nhấn mạnh 'hơn nhiều'."
  },
  {
    id: 17,
    level: "pet",
    type: "fill",
    tag: "Strong adjective",
    question: "Complete: The soup is ______ boiling, so wait a few minutes.",
    answers: ["absolutely"],
    feedback: "'Boiling' nghĩa là rất nóng, thường dùng 'absolutely boiling'."
  },
  {
    id: 18,
    level: "pet",
    type: "fill",
    tag: "Irregular",
    question: "Complete: That was ______ film I have seen this year. (bad)",
    answers: ["the worst"],
    feedback: "'Bad' là bất quy tắc: bad → worse → the worst."
  },
  {
    id: 19,
    level: "pet",
    type: "rewrite",
    tag: "Rewrite",
    question: "Rewrite: My room is smaller than my brother's room.",
    prompt: "Use: not as...as",
    answers: ["my room is not as big as my brother's room", "my room isn't as big as my brother's room"],
    sample: "My room is not as big as my brother's room.",
    feedback: "Khi đổi sang 'not as...as', dùng tính từ trái nghĩa 'big' và giữ nguyên dạng adjective."
  },
  {
    id: 20,
    level: "pet",
    type: "rewrite",
    tag: "Rewrite",
    question: "Rewrite: The book is more interesting than the film.",
    prompt: "Start with: The film...",
    answers: ["the film is not as interesting as the book", "the film isn't as interesting as the book"],
    sample: "The film is not as interesting as the book.",
    feedback: "Ý nghĩa: phim không thú vị bằng sách. Dùng 'not as interesting as'."
  },
  {
    id: 21,
    level: "pet",
    type: "rewrite",
    tag: "Rewrite",
    question: "Rewrite: No student in my class is taller than Nam.",
    prompt: "Start with: Nam...",
    answers: ["nam is the tallest student in my class"],
    sample: "Nam is the tallest student in my class.",
    feedback: "Câu 'No student... taller than' chuyển thành so sánh nhất: the tallest."
  },
  {
    id: 22,
    level: "pet",
    type: "rewrite",
    tag: "Rewrite",
    question: "Rewrite: My old school was not as modern as my new school.",
    prompt: "Start with: My new school...",
    answers: ["my new school was more modern than my old school", "my new school is more modern than my old school"],
    sample: "My new school was more modern than my old school.",
    feedback: "Nếu A không hiện đại bằng B, nghĩa là B hiện đại hơn A."
  },
  {
    id: 23,
    level: "writing",
    type: "mcq",
    tag: "Writing style",
    question: "Which sentence sounds most natural in a PET email?",
    options: ["The café is more better than the park.", "The café is better than the park because it is quieter.", "The café is the best than the park because it is more quiet."],
    answer: "The café is better than the park because it is quieter.",
    feedback: "Không dùng 'more better'. 'Good' → 'better'. Có thể thêm lý do bằng because."
  },
  {
    id: 24,
    level: "writing",
    type: "mcq",
    tag: "Writing style",
    question: "Choose the best sentence to recommend a place.",
    options: ["It is one of the most exciting places in our town.", "It is one of the most exciting place in our town.", "It is one of excitingest places in our town."],
    answer: "It is one of the most exciting places in our town.",
    feedback: "Sau 'one of the most...' cần danh từ số nhiều: places."
  },
  {
    id: 25,
    level: "writing",
    type: "fill",
    tag: "Writing sentence",
    question: "Complete: I think the museum is ______ educational than the shopping centre.",
    answers: ["more"],
    feedback: "'Educational' là tính từ dài, dùng 'more educational than'."
  },
  {
    id: 26,
    level: "writing",
    type: "fill",
    tag: "Writing sentence",
    question: "Complete: The train station is not as ______ as the airport. (busy)",
    answers: ["busy"],
    feedback: "Sau 'not as' dùng tính từ nguyên mẫu: busy, không dùng busier."
  },
  {
    id: 27,
    level: "writing",
    type: "rewrite",
    tag: "Writing rewrite",
    question: "Rewrite: The city centre is noisier than my village.",
    prompt: "Start with: My village...",
    answers: ["my village is not as noisy as the city centre", "my village isn't as noisy as the city centre"],
    sample: "My village is not as noisy as the city centre.",
    feedback: "Đổi chiều so sánh: làng của tôi không ồn ào bằng trung tâm thành phố."
  },
  {
    id: 28,
    level: "writing",
    type: "rewrite",
    tag: "Writing rewrite",
    question: "Rewrite: This is the most comfortable chair in the room.",
    prompt: "Use: No chair...",
    answers: ["no chair in the room is as comfortable as this one", "no chair in the room is more comfortable than this one"],
    sample: "No chair in the room is as comfortable as this one.",
    feedback: "So sánh nhất có thể đổi thành 'No + noun + is as...as...' hoặc 'No + noun + is more...than...'."
  },
  {
    id: 29,
    level: "basic",
    type: "mcq",
    tag: "Common mistakes",
    question: "Which phrase is correct?",
    options: ["the most easiest", "the easiest", "more easier"],
    answer: "the easiest",
    feedback: "Không dùng hai dạng so sánh cùng lúc. Chỉ dùng 'the easiest'."
  },
  {
    id: 30,
    level: "basic",
    type: "mcq",
    tag: "Common mistakes",
    question: "Which phrase is correct?",
    options: ["as bigger as", "as big as", "as more big as"],
    answer: "as big as",
    feedback: "Trong cấu trúc as...as, tính từ không chia so sánh hơn."
  },
  {
    id: 31,
    level: "pet",
    type: "mcq",
    tag: "PET Speaking",
    question: "Choose the best comparison for two activities.",
    options: ["Playing football is more tiring than reading.", "Playing football is more tired than reading.", "Playing football is the most tiring than reading."],
    answer: "Playing football is more tiring than reading.",
    feedback: "'Tiring' mô tả hoạt động gây mệt. So sánh 2 hoạt động dùng 'more tiring than'."
  },
  {
    id: 32,
    level: "writing",
    type: "fill",
    tag: "PET Writing",
    question: "Complete: The new sports centre is ______ than the old one because it has a swimming pool. (good)",
    answers: ["better"],
    feedback: "'Good' chuyển thành 'better' trong so sánh hơn."
  }
];

const state = {
  answers: {},
  checked: {},
  currentFilter: "all"
};

const exerciseList = document.getElementById("exerciseList");
const scoreText = document.getElementById("scoreText");
const progressBar = document.getElementById("progressBar");
const toast = document.getElementById("toast");
const studentName = document.getElementById("studentName");

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[.!?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isCorrect(exercise, value) {
  if (exercise.type === "mcq") return normalize(value) === normalize(exercise.answer);
  return exercise.answers.some(answer => normalize(answer) === normalize(value));
}

function getStored() {
  try {
    return JSON.parse(localStorage.getItem("petGrammarLab") || "{}");
  } catch {
    return {};
  }
}

function saveStored() {
  localStorage.setItem("petGrammarLab", JSON.stringify({
    name: studentName.value,
    answers: state.answers,
    checked: state.checked,
    theme: document.documentElement.dataset.theme || "light"
  }));
}

function loadStored() {
  const stored = getStored();
  if (stored.name) studentName.value = stored.name;
  if (stored.answers) state.answers = stored.answers;
  if (stored.checked) state.checked = stored.checked;
  if (stored.theme === "dark") document.documentElement.dataset.theme = "dark";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function renderExercises() {
  const filtered = exercises.filter(ex => state.currentFilter === "all" || ex.level === state.currentFilter);
  exerciseList.innerHTML = filtered.map(ex => exerciseTemplate(ex)).join("");
  bindExerciseEvents();
  updateFeedbackDisplay();
  updateScore();
}

function exerciseTemplate(ex) {
  const savedAnswer = state.answers[ex.id] || "";
  const sample = ex.sample || (ex.answer || (ex.answers ? ex.answers[0] : ""));
  const inputArea = ex.type === "mcq"
    ? `<div class="options">${ex.options.map(option => `
        <label class="option">
          <input type="radio" name="q${ex.id}" value="${escapeHtml(option)}" ${normalize(savedAnswer) === normalize(option) ? "checked" : ""}>
          <span>${escapeHtml(option)}</span>
        </label>
      `).join("")}</div>`
    : `<div class="answer-row"><input type="text" data-input="${ex.id}" value="${escapeHtml(savedAnswer)}" placeholder="Nhập câu trả lời của em..." /></div>`;

  return `
    <article class="exercise-card" data-id="${ex.id}" data-level="${ex.level}">
      <div class="exercise-head">
        <div>
          <p class="question">${ex.id}. ${escapeHtml(ex.question)}</p>
          ${ex.prompt ? `<p class="prompt">${escapeHtml(ex.prompt)}</p>` : ""}
        </div>
        <span class="badge">${escapeHtml(ex.tag)} · ${ex.level.toUpperCase()}</span>
      </div>
      ${inputArea}
      <div class="answer-row">
        <button class="btn primary small check-btn" type="button" data-check="${ex.id}">Kiểm tra</button>
        <button class="btn ghost small sample-btn" type="button" data-sample="${ex.id}">Đáp án mẫu</button>
      </div>
      <div class="feedback" id="feedback-${ex.id}"></div>
      <div class="answer-sample" id="sample-${ex.id}"><strong>Đáp án mẫu:</strong> ${escapeHtml(sample)}</div>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function bindExerciseEvents() {
  document.querySelectorAll("input[type='radio']").forEach(input => {
    input.addEventListener("change", event => {
      const id = Number(event.target.name.replace("q", ""));
      state.answers[id] = event.target.value;
      saveStored();
    });
  });

  document.querySelectorAll("[data-input]").forEach(input => {
    input.addEventListener("input", event => {
      const id = Number(event.target.dataset.input);
      state.answers[id] = event.target.value;
      saveStored();
    });
  });

  document.querySelectorAll("[data-check]").forEach(button => {
    button.addEventListener("click", event => checkExercise(Number(event.target.dataset.check)));
  });

  document.querySelectorAll("[data-sample]").forEach(button => {
    button.addEventListener("click", event => {
      document.getElementById(`sample-${event.target.dataset.sample}`).classList.toggle("show");
    });
  });
}

function checkExercise(id) {
  const ex = exercises.find(item => item.id === id);
  const value = state.answers[id] || getCurrentInputValue(id, ex.type);
  state.answers[id] = value;
  state.checked[id] = true;
  const correct = isCorrect(ex, value);
  const feedbackBox = document.getElementById(`feedback-${id}`);
  feedbackBox.className = `feedback ${correct ? "good" : "bad"}`;
  feedbackBox.innerHTML = correct
    ? `✅ Đúng. ${escapeHtml(ex.feedback)}`
    : `❌ Chưa đúng. ${escapeHtml(ex.feedback)} ${ex.sample || ex.answer || ex.answers ? `<br><strong>Gợi ý đáp án:</strong> ${escapeHtml(ex.sample || ex.answer || ex.answers[0])}` : ""}`;
  updateScore();
  saveStored();
}

function getCurrentInputValue(id, type) {
  if (type === "mcq") {
    const checked = document.querySelector(`input[name='q${id}']:checked`);
    return checked ? checked.value : "";
  }
  const input = document.querySelector(`[data-input='${id}']`);
  return input ? input.value : "";
}

function updateFeedbackDisplay() {
  Object.keys(state.checked).forEach(id => {
    if (state.checked[id]) {
      const feedbackBox = document.getElementById(`feedback-${id}`);
      const ex = exercises.find(item => item.id === Number(id));
      if (!feedbackBox || !ex) return;
      const correct = isCorrect(ex, state.answers[id]);
      feedbackBox.className = `feedback ${correct ? "good" : "bad"}`;
      feedbackBox.innerHTML = correct
        ? `✅ Đúng. ${escapeHtml(ex.feedback)}`
        : `❌ Chưa đúng. ${escapeHtml(ex.feedback)}<br><strong>Gợi ý đáp án:</strong> ${escapeHtml(ex.sample || ex.answer || ex.answers[0])}`;
    }
  });
}

function updateScore() {
  const checkedIds = exercises.filter(ex => state.checked[ex.id]);
  const correctCount = exercises.filter(ex => state.checked[ex.id] && isCorrect(ex, state.answers[ex.id])).length;
  scoreText.textContent = `${correctCount}/${exercises.length}`;
  progressBar.style.width = `${Math.round((correctCount / exercises.length) * 100)}%`;
  return { correctCount, checkedCount: checkedIds.length };
}

function checkAll() {
  const visibleCards = document.querySelectorAll(".exercise-card");
  visibleCards.forEach(card => checkExercise(Number(card.dataset.id)));
  showToast("Đã kiểm tra các câu đang hiển thị.");
}

function copyReport() {
  const { correctCount, checkedCount } = updateScore();
  const name = studentName.value.trim() || "Chưa nhập tên";
  const wrongItems = exercises
    .filter(ex => state.checked[ex.id] && !isCorrect(ex, state.answers[ex.id]))
    .map(ex => `Câu ${ex.id}: ${ex.question} | Trả lời: ${state.answers[ex.id] || "(trống)"} | Đáp án mẫu: ${ex.sample || ex.answer || ex.answers[0]}`)
    .join("\n");

  const report = [
    "PET Grammar Lab - Kết quả bài làm",
    `Học sinh: ${name}`,
    `Ngày làm: ${new Date().toLocaleString("vi-VN")}`,
    `Điểm: ${correctCount}/${exercises.length}`,
    `Số câu đã kiểm tra: ${checkedCount}/${exercises.length}`,
    wrongItems ? "\nCác câu cần sửa:\n" + wrongItems : "\nKhông có câu sai trong các câu đã kiểm tra."
  ].join("\n");

  navigator.clipboard.writeText(report)
    .then(() => showToast("Đã copy kết quả. Học sinh có thể gửi cho giáo viên."))
    .catch(() => {
      window.prompt("Không copy tự động được. Hãy copy nội dung này:", report);
    });
}

function showAllAnswers() {
  document.querySelectorAll(".answer-sample").forEach(item => item.classList.add("show"));
  showToast("Đã hiện đáp án mẫu cho các câu đang hiển thị.");
}

function resetAll() {
  if (!confirm("Bạn có chắc muốn xóa toàn bộ câu trả lời và điểm không?")) return;
  state.answers = {};
  state.checked = {};
  localStorage.removeItem("petGrammarLab");
  renderExercises();
  showToast("Đã làm lại toàn bộ bài tập.");
}

function setupUi() {
  document.querySelectorAll(".accordion-trigger").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".accordion-item");
      const icon = button.querySelector(".icon");
      item.classList.toggle("open");
      icon.textContent = item.classList.contains("open") ? "−" : "+";
    });
  });

  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
      tab.classList.add("active");
      state.currentFilter = tab.dataset.filter;
      renderExercises();
    });
  });

  document.querySelectorAll(".reveal-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById(button.dataset.target).classList.toggle("show");
    });
  });

  document.getElementById("checkAllBtn").addEventListener("click", checkAll);
  document.getElementById("copyReportBtn").addEventListener("click", copyReport);
  document.getElementById("showAnswersBtn").addEventListener("click", showAllAnswers);
  document.getElementById("resetBtn").addEventListener("click", resetAll);
  document.getElementById("saveNameBtn").addEventListener("click", () => {
    saveStored();
    showToast("Đã lưu tên học sinh trên thiết bị này.");
  });
  studentName.addEventListener("input", saveStored);

  document.getElementById("themeToggle").addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = isDark ? "light" : "dark";
    document.getElementById("themeToggle").textContent = isDark ? "🌙" : "☀️";
    saveStored();
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

loadStored();
setupUi();
renderExercises();
