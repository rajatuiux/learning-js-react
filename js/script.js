const content = document.getElementById("content");
const tocList = document.getElementById("toc");
const searchBox = document.getElementById("searchBox");

const courseModules = [
  {
    name: "week-1",
    weekName: "Week 1: Introduction to JavaScript",
    folderPath: "material-days/week-1/",
    files: [
      "day0.md",
      "day1.md",
      "day2.md",
      "day3.md",
      "day4.md",
      "day5.md",
      "day6.md",
      "day7.md",
    ],
  },
  {
    name: "week-2",
    weekName: "Week 2: Data Types & Operators",
    folderPath: "material-days/week-2/",
    files: [
      "day8.md",
      "day9.md",
      "day10.md",
      "day11.md",
      "day12.md",
      "day13.md",
      "day14.md",
    ],
  },
  {
    name: "week-3",
    weekName: "Week 3: Functions & Scope",
    folderPath: "material-days/week-3/",
    files: [
      "day15.md",
      "day16.md",
      "day17.md",
      "day18.md",
      "day19.md",
      "day20.md",
      "day21.md",
    ],
  },
  {
    name: "week-4",
    weekName: "Week 4: Functions Deep Dive & Reusability",
    folderPath: "material-days/week-4/",
    files: [
      "day22.md",
      "day23.md",
      "day24.md",
      "day25.md",
      "day26.md",
      "day27.md",
      "day28.md",
    ],
  },
  {
    name: "week-5",
    weekName: "Week 5: DOM Forms, Inputs, and Basic Validation",
    folderPath: "material-days/week-5/",
    files: [
      "day29.md",
      "day30.md",
      "day31.md",
      "day32.md",
      "day33.md",
      "day34.md",
      "day35.md",
    ],
  },
  {
    name: "week-6",
    weekName: "Week 6: DOM Projects & JavaScript Structure",
    folderPath: "material-days/week-6/",
    files: ["day36.md", "day37.md", "day38.md", "day39.md", "day40.md"],
  },
  {
    name: "week-7",
    weekName: "Week 7: Arrays, Objects & Array Methods",
    folderPath: "material-days/week-7/",
    files: [
      "day41.md",
      "day42.md",
      "day43.md",
      "day44.md",
      "day45.md",
      "day46.md",
      "day47.md",
      "day48.md",
    ],
  },
  {
    name: "week-8",
    weekName: "Week 8: Basics & Setup for React",
    folderPath: "material-days/week-8/",
    files: ["day49.md", "day50.md", "day51.md", "day52.md", "day53.md"],
  },
  {
    name: "week-9",
    weekName: "Week 9: Rendering & Forms",
    folderPath: "material-days/week-9/",
    files: ["day54.md", "day55.md", "day56.md", "day57.md", "day58.md"],
  },
  {
    name: "week-10",
    weekName: "Week 10: State Management & Styling",
    folderPath: "material-days/week-10/",
    files: ["day59.md", "day60.md", "day61.md", "day62.md", "day63.md"],
  },
  {
    name: "week-11",
    weekName: "Week 11: Advanced Features & Deployment",
    folderPath: "material-days/week-11/",
    files: ["day64.md", "day65.md", "day66.md", "day67.md", "day68.md"],
  },
];

let tocItems = [];

async function loadMarkdownFiles() {
  // content.innerHTML = "<p>Loading course content…</p>";
  tocList.innerHTML = "";

  for (const week of courseModules) {
    const weekId = `week-${week.weekName.replace(/\s+/g, "-").toLowerCase()}`;
    content.insertAdjacentHTML(
      "beforeend",
      `<h1 id="${weekId}">${week.weekName}</h1>`
    );

    const weekLi = document.createElement("li");
    const weekToggle = document.createElement("details");
    weekToggle.open = true;
    const summary = document.createElement("summary");
    summary.textContent = week.weekName;
    weekToggle.appendChild(summary);
    const dayUl = document.createElement("ul");

    for (const file of week.files) {
      const url = week.folderPath + file;
      try {
        const res = await fetch(url);
        const mdText = await res.text();

        const dayTitle =
          mdText
            .split("\n")
            .find((line) => line.startsWith("# "))
            ?.replace("# ", "") || file.replace(".md", "");
        const dayId = `${file.replace(".md", "")}`;
        const html = marked.parse(mdText);
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;

        const subtopics = tempDiv.querySelectorAll("h3");
        subtopics.forEach((sub) => {
          const subId = `${dayId}-${sub.textContent
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")}`;
          sub.id = subId;
        });

        const wrappedHtml = `<div class="day-block" id="block-${dayId}">${tempDiv.innerHTML}</div>`;
        content.insertAdjacentHTML("beforeend", wrappedHtml);

        const dayLi = document.createElement("li");
        const dayA = document.createElement("p");
        dayA.classList.add("day-number");
        // dayA.href = `#${dayId}`;
        dayA.textContent = dayTitle;
        dayLi.appendChild(dayA);
        tocItems.push({ text: dayTitle.toLowerCase(), element: dayLi });

        const subUl = document.createElement("ul");
        subtopics.forEach((sub) => {
          const subId = sub.id;
          const subLi = document.createElement("li");
          const subA = document.createElement("a");
          subA.href = `#${subId}`;
          subA.textContent = sub.textContent;
          subLi.appendChild(subA);
          subUl.appendChild(subLi);
          tocItems.push({
            text: sub.textContent.toLowerCase(),
            element: subLi,
          });
        });

        dayLi.appendChild(subUl);
        dayUl.appendChild(dayLi);
      } catch (err) {
        console.error("Error loading", file);
      }
    }

    weekToggle.appendChild(dayUl);
    weekLi.appendChild(weekToggle);
    tocList.appendChild(weekLi);
  }

  Prism.highlightAll();
}

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();

  document.querySelectorAll("#toc details").forEach((details) => {
    details.style.display = "none";
    details.open = false;
  });

  tocItems.forEach(({ text, element }) => {
    const match = text.includes(query);
    element.style.display = match ? "" : "none";

    if (match) {
      let parent = element.parentElement;
      while (parent && parent.id !== "toc") {
        if (parent.tagName === "DETAILS") {
          parent.style.display = "";
          parent.open = true;
        } else if (parent.tagName === "LI" || parent.tagName === "UL") {
          parent.style.display = "";
        }
        parent = parent.parentElement;
      }
    }
  });
});

window.addEventListener("scroll", () => {
  let current;
  document.querySelectorAll("main h3").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100) current = section.id;
  });

  document.querySelectorAll(".sidebar a").forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

loadMarkdownFiles();
