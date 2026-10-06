const themeToggle = document.getElementById("themeToggle");

// Switch between light and dark reading modes.
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const dark = document.body.classList.contains("dark");
  themeToggle.textContent = dark ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode"
  );
});

// Reveal practical examples when a wisdom card is selected.
const wisdomCards = document.querySelectorAll(".wisdom-card");

function toggleWisdomCard(card) {
  const isExpanded = card.classList.contains("expanded");

  wisdomCards.forEach((item) => {
    item.classList.remove("expanded");
    item.setAttribute("aria-expanded", "false");
  });

  if (!isExpanded) {
    card.classList.add("expanded");
    card.setAttribute("aria-expanded", "true");
  }
}

wisdomCards.forEach((card) => {
  card.addEventListener("click", () => toggleWisdomCard(card));

  card.addEventListener("keydown", (event) => {
    if (event.target !== card) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleWisdomCard(card);
    }
  });
});

// Educational thoughts: original messages inspired by the Kural's theme.
const wisdomMessages = [
  {
    title: "A thought to carry with you.",
    text: "The knowledge you gain today may become the answer you need tomorrow."
  },
  {
    title: "Marks are not the end of learning.",
    text: "A grade describes one performance. What you understand can help you long after the exam is over."
  },
  {
    title: "Never be ashamed to ask why.",
    text: "A thoughtful question is often the beginning of a powerful discovery."
  },
  {
    title: "Small lessons create great change.",
    text: "You do not need to learn everything at once. One concept understood deeply is real progress."
  },
  {
    title: "Knowledge becomes stronger when shared.",
    text: "When you teach someone what you understand, you help another person grow and strengthen your own understanding."
  },
  {
    title: "Your circumstances do not define your potential.",
    text: "Learning gives you new ways to understand challenges and discover possibilities you could not see before."
  },
  {
    title: "Keep your mind open.",
    text: "Wisdom includes recognising what you know, questioning what you believe, and remaining ready to learn."
  },
  {
    title: "Learn to understand, not only to remember.",
    text: "Facts may be forgotten, but deep understanding helps you connect ideas and learn them again."
  },
  {
    title: "Your mind travels with you.",
    text: "Wherever life takes you, the understanding you have developed can help you make sense of new situations."
  }
];

let previousIndex = 0;

const wisdomTitle = document.getElementById("wisdomTitle");
const wisdomText = document.getElementById("wisdomText");
const wisdomButton = document.getElementById("wisdomButton");
const wisdomCount = document.getElementById("wisdomCount");

wisdomButton.addEventListener("click", () => {
  let nextIndex;

  do {
    nextIndex = Math.floor(Math.random() * wisdomMessages.length);
  } while (nextIndex === previousIndex && wisdomMessages.length > 1);

  previousIndex = nextIndex;

  const message = wisdomMessages[nextIndex];

  wisdomTitle.textContent = message.title;
  wisdomText.textContent = message.text;
  wisdomCount.textContent =
    `THOUGHT ${nextIndex + 1} OF ${wisdomMessages.length} · KEEP LEARNING`;

  wisdomTitle.animate(
    [
      { opacity: 0, transform: "translateY(8px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 350, easing: "ease-out" }
  );

  wisdomText.animate(
    [
      { opacity: 0, transform: "translateY(5px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 450, easing: "ease-out" }
  );
});

// Keep the selected navigation link visually highlighted.
const navigationLinks = document.querySelectorAll(".navbar nav a");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigationLinks.forEach((item) => {
      item.style.color = "";
    });

    link.style.color = "var(--green)";
  });
});
