const skillArray = [
  {
    title: "HTML",
    image: "./images/icons/html.svg",
  },
  {
    title: "CSS",
    image: "./images/icons/css.svg",
  },
  {
    title: "jQuery",
    image: "./images/icons/jquery_icon.svg",
  },
  {
    title: "JavaScript",
    image: "./images/icons/javascript.svg",
  },
  {
    title: "TypeScript",
    image: "./images/icons/typescript.svg",
  },
  {
    title: "React",
    image: "./images/icons/react.svg",
  },
  {
    title: "react-testing-library",
    image: "./images/icons/react_testing_library.svg",
  },
  {
    title: "AntDesign",
    image: "./images/icons/ant_design.svg",
  },
  {
    title: "Umi Max",
    image: "./images/icons/umiMax.svg",
  },
  {
    title: "Jest",
    image: "./images/icons/jest.svg",
  },
  {
    title: "Git",
    image: "./images/icons/git_icon.svg",
  },
  {
    title: "svn",
    image: "./images/icons/svn_icon.svg",
  },
  {
    title: "node.js",
    image: "",
    hidden: true,
  },
  {
    title: "Java",
    image: "./images/icons/java.svg",
  },
  {
    title: "SQL",
    image: "./images/icons/sql.svg",
  },
  {
    title: "RestAPI",
    image: "",
    hidden: true,
  },
];

/**
 *  기술 정보 나열
 */
const selectSkill = () => {
  let titleTag;
  let imageTag;

  skillArray.map((item) => {
    if (!item.hidden) {
      const skillBox = document.createElement("div");
      skillBox.setAttribute("class", "skill_box");

      if (item.image !== "") {
        imageTag = document.createElement("img");
        imageTag.setAttribute("src", item.image);
        imageTag.setAttribute("class", "skill_icon");
        skillBox.append(imageTag);
      }

      titleTag = document.createElement("div");
      titleTag.setAttribute("class", "skill_item");
      titleTag.append(item.title);
      skillBox.append(titleTag);

      document.querySelector("#skills").append(skillBox);
    }
  });
};
selectSkill();

//-------------

/**
 * project 테이블을 아코디언 형식으로 출력
 */
const selectProjectData = () => {
  const windowWidth = window.innerWidth;

  // if (windowWidth < 768) {
  total_project.map((item) => {
    document
      .querySelector(".faq_container")
      .append(createProjectArcodian(item));
  });
  // } else {
  //   total_project.map((item) => {
  //     document
  //       .querySelector(".project_content")
  //       .append(createProjectTable(item));
  //   });
  // }
};

const createProjectArcodian = (item) => {
  let liTag;

  Object.keys(item).map((key) => {
    liTag = document.createElement("li");
    // liTag.setAttribute("class", "faq active");
    liTag.setAttribute("class", "faq");

    const titleWrap = document.createElement("div");
    titleWrap.setAttribute("class", "faq_question");

    const answerTag = document.createElement("div");
    answerTag.setAttribute("class", "faq_answer");

    const titleTag = document.createElement("h3");
    titleTag.setAttribute("class", "faq_title");
    titleTag.append(item["project_name"]);

    if (key == "project_name") {
    } else {
      answerTag.append(createProjectTable(item));
    }
    titleWrap.append(titleTag);

    liTag.append(titleWrap);
    liTag.append(answerTag);
    liTag.append(createArcodianBtn());
  });

  return liTag;
};

const createArcodianBtn = () => {
  const btnTag = document.createElement("button");
  btnTag.setAttribute("class", "faq_btn");
  const openTag = document.createElement("span");
  openTag.setAttribute("class", "faq_icon open");
  openTag.innerHTML = "+";
  const closeTag = document.createElement("span");
  closeTag.setAttribute("class", "faq_icon close");
  closeTag.innerHTML = "-";

  btnTag.append(openTag);
  btnTag.append(closeTag);

  return btnTag;
};

const createProjectTable = (item) => {
  let retTableTag;
  let tableClassName = "";

  if (item.type === "company") {
    tableClassName = "company_project";
  } else if (item.type === "side") {
    tableClassName = "side_project";
  }

  retTableTag = document.createElement("table");
  retTableTag.setAttribute("class", tableClassName);

  Object.keys(item).map((key) => {
    const trTag = document.createElement("tr");
    trTag.setAttribute("class", "project_tr_tag");
    const thTag = document.createElement("th");
    thTag.setAttribute("class", "project_th_tag");
    thTag.innerHTML = returnKeyText(key);

    const tdTag = document.createElement("td");
    tdTag.setAttribute("class", "project_td_tag");

    if (key === "content" || key === "result") {
      const contentReturnVal = exportArrayContent(item[key]);
      trTag.append(thTag);
      contentReturnVal.map((jtem) => {
        tdTag.innerHTML += jtem;
        trTag.append(tdTag);
      });
    } else {
      tdTag.innerHTML = item[key];
      trTag.append(thTag);
      trTag.append(tdTag);
    }

    retTableTag.append(trTag);
  });
  return retTableTag;
};

const returnKeyText = (data) => {
  switch (data) {
    case "project_name":
      return "프로젝트 명";
    case "period":
      return "기간";
    case "contribution":
      return "기여도";
    case "stack":
      return "사용된 기술";
    case "position":
      return "역할";
    case "content":
      return "내용";
    case "result":
      return "성과";
    default:
      return data;
  }
};

const exportArrayContent = (data) => {
  let returnArr = [];

  data.map((memo) => {
    const divTag = document.createElement("div");
    const pTag = document.createElement("p");
    pTag.append(" - " + memo);
    divTag.append(pTag);
    returnArr.push(divTag.innerHTML);
  });

  return returnArr;
};

selectProjectData();

//-------------

// const whiteStar = document.createElement("img");
// whiteStar.setAttribute("src", "./images/shooting_star_white.svg");
// whiteStar.setAttribute("alt", "shooting_star_white");
// whiteStar.setAttribute("id", "whiteStar");
// whiteStar.setAttribute("class", "footer_icon");

// const footerIcon = document.querySelector("#footerIcon");

// footerIcon.append(whiteStar);

// const anotherStar = document.createElement("img");
// anotherStar.setAttribute("src", "./images/shooting_star_another.svg");
// anotherStar.setAttribute("alt", "shooting_star_another");
// anotherStar.setAttribute("id", "anotherStar");
// anotherStar.setAttribute("class", "footer_icon");

// document.querySelector("#footerATag").addEventListener("mouseover", () => {
//   document.querySelector(".footer_a_tag").style.color = "#0000ff";
//   document.querySelector("#whiteStar").remove();
//   footerIcon.append(anotherStar);
// });

// document.querySelector("#footerATag").addEventListener("mouseout", () => {
//   document.querySelector(".footer_a_tag").style.color = "white";
//   document.querySelector("#anotherStar").remove();
//   footerIcon.append(whiteStar);
// });

//------

const btns = document.querySelectorAll(".faq_btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const faqItem = btn.parentNode;
    const isActive = faqItem.classList.contains("active");

    removeActiveClasses();

    if (!isActive) {
      faqItem.classList.add("active");
    }
  });
});

const removeActiveClasses = () => {
  btns.forEach((btn) => {
    btn.parentNode.classList.remove("active");
  });
};
