const total_project = [
  {
    type: "company",
    project_name: "제품 개발 - TACHYON Linux Security",
    period: "2021.03 ~ 2022.05",
    contribution: "10%",
    stack: [
      "java",
      "spring Framework",
      "H2",
      "svn",
      "MyBatis",
      "타임리프(Thymeleaf)",
      "JavaScript",
    ],
    position: "요구사항에 명시된 UI와 필요한 기능 구현",
    content: [
      "새로 개발을 시작하는 프로젝트에 기반이 다져진 상태로 투입되었습니다.",
      "맡은 부분의 UI를 타임리프를 사용하여 구현했습니다.",
      "MVC 패턴에 따라 뷰에서 요청을 보내면, 비즈니스 로직에서 적절한 응답값을 전송합니다.",
    ],
    result: [
      "처음 진행하는 프로젝트여서 매개변수가 다른 공통 함수에 대한 이해가 부족했지만, 개인 학습을 병행하며 진행했습니다.",
      "실수를 반복하지 않으려고 개인적으로 업무일지를 작성했습니다.",
    ],
  },
  {
    type: "company",
    project_name: "제품 개발 - TACHYON Total Security",
    period: "2022.06 ~ 2024.10",
    contribution: "40%",
    stack: [
      "HTML",
      "CSS",
      "less",
      "style-component",
      "TypeScript",
      "React",
      "recoil",
      "Ant Design",
      "Umi",
      "Figma",
      "git",
      "gerrit",
      "jest",
      "jenkins",
    ],
    position:
      "UI와 필요한 기능을 구현한 후, 개발된 기능의 개발자 테스트를 진행했습니다.",
    content: [
      "Figma를 사용하여 UI를 구성하였습니다.",
      "Recoil을 사용하여 프로젝트의 전역 상태를 관리했습니다.",
      ".less 파일을 활용하여 global{} 기능을 통해 Ant Design의 내부 디자인을 맞춤 설정했습니다",
      "미디어 쿼리를 이용하여 화면의 반응형 디자인을 구현했습니다.",
      "Swagger를 통해 백엔드 개발자분들과 협업하여 주어진 기능을 개발했습니다.",
      "Jest를 사용하여 작성한 코드의 테스트를 진행했습니다.",
    ],
    result: [
      "React의 장점을 살려 페이지별 공통 컴포넌트를 모듈화하여 유지보수를 용이하게 하고 코드 복잡성을 줄였습니다.",
      "Ant Design 컴포넌트를 공식 문서와 내부 인터페이스를 통해 파악하고, 요구사항에 맞춰 커스터마이징할 수 있게 되었습니다. ",
      "Jest를 통해 개발자 테스트를 진행함으로써 테스트 기간을 단축했습니다.",
      "Swagger API 명세를 바탕으로 백엔드와의 데이터 통신에 필요한 값들의 타입을 정확히 맞춰 개발했습니다.",
      "AntV React 차트 라이브러리를 이용하여 백엔드에서 전달받은 데이터를 차트로 시각화했습니다.",
    ],
  },
  {
    type: "side",
    project_name: "PWA 시작하기 (웹 기술로 앱을 만들자)",
    period: "2024.07 ~ 2024.09",
    stack: ["HTML", "CSS", "JavaScript"],
    content: [
      "웹 앱 매니페스트를 사용하여 웹 앱에 필요한 아이콘과 로딩 화면 등을 생성했습니다.",
      "PWA의 기본 개념을 이해했습니다.",
      "서비스 워커를 사용하여 오프라인 웹 앱을 제작했습니다.",
      "HTML, CSS, JavaScript 로 모바일 앱 생성했습니다.",
    ],
    result: [
      "서비스 워커를 활용하여 오프라인에서도 기능을 사용할 수 있는 웹 앱을 개발했습니다.",
    ],
    git: "https://github.com/jinsu009/inflearn_pwa001.git",
  },
  {
    type: "side",
    project_name: "Swift로 IOS 2D 아케이드 게임 만들기",
    period: "2024.05 ~ 2024.06",
    stack: ["Swift"],
    content: ["iOS 환경에서 Xcode를 사용하여 간단한 게임 앱을 개발했습니다."],
    result: [
      "a.iOS 앱 개발이 완료되기까지의 과정을 알아보았습니다.",
      "a-1. ios 앱 아이콘 생성",
      "a-2. 배포 방식 및 절차",
      "b. 게임 제작의 기본적인 개념을 이해했습니다.",
      "b-1. 끝나지 않는 배경(무한적인 무대설정)",
      "b-2. 물리효과 적용하여 점수에 반영",
    ],
    git: "https://github.com/jinsu009/FlappyBird.git",
  },
];
