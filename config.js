/*
 * THE TWENTY EDITION — personalise everything here.
 * Put private images and music in assets/ (they are never uploaded anywhere).
 * Leave musicPath empty to hide the music button. Use a path relative to index.html.
 */
window.BIRTHDAY_CONFIG = {
  person: { name: "金琦", displayName: "JIN QI", age: 20, birthday: "11.20", year: "2026" },
  accessCode: "1120",
  cover: {
    image: "assets/jinqi-cover.jpg", // e.g. "assets/cover.jpg"
    alt: "Jin Qi"
  },
  portraits: [
    { image: "assets/jinqi-01.jpg", title: "Edition I", alt: "Jin Qi" },
    { image: "assets/jinqi-02.jpg", title: "Edition II", alt: "Jin Qi" },
    { image: "assets/jinqi-03.jpg", title: "Edition III", alt: "Jin Qi" },
    { image: "assets/jinqi-04.jpg", title: "Edition IV", alt: "Jin Qi" },
    { image: "assets/jinqi-05.jpg", title: "Edition V", alt: "Jin Qi" }
  ],
  note: {
    paragraphs: [
      "有些缘分很奇妙。",
      "认识了很久，中间也曾隔了好些年没有联系。很高兴今年夏天，我们又重新有了交集。",
      "二十岁是一个值得期待的新开始。愿你继续做自己喜欢的事，去想去的地方，遇见更多美好的人和事。",
      "生日快乐，金琦。"
    ],
    signature: "— With warm wishes"
  },
  wishes: [
    { title: "A LITTLE JOY", text: "愿你在平凡的日子里，也能发现许多值得开心的小事。" },
    { title: "A BEAUTIFUL JOURNEY", text: "愿你拥有选择自己喜欢的生活的底气，也有奔赴远方的自由。" },
    { title: "A WISH FOR YOU", text: "愿新的一岁，有新的惊喜，也有一直陪伴你的美好。" }
  ],
  music: {
    // Add a local MP3 here when you have one, e.g. "assets/birthday-music.mp3".
    // With no file, the site plays the built-in, user-started ambient loop instead.
    path: "",
    useAmbientFallback: true,
    autoplayOnOpen: true
  }
};
