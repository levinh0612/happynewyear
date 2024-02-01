var app = document.getElementById("app");

  var currentDate = new Date();

var Typewriter = new Typewriter(app, {
    loop: false,
    delay: 75
})

var message1 = '<span style="color: white; font-size: 24px !important; font-family: Courier, monospace important"> 谢谢你在2023年出现，我为你的爱和我们的幸福而感到高兴。虽然我们经历了一些争执，但最终的理解和同情引导我们向前. 2024年是我的岁数，所以我祝愿你在我的身边幸福，永远健康、美丽、充满活力，并在事业上取得发展。我爱你，爱你的每一个快乐、悲伤、愤怒和不快的时刻。因此，让我们用一生去相爱吧。祝贺2024年新年，爱情永远05。</span>';

var message2 = '<span style="color: white; font-size: 24px !important; font-family: Courier, monospace important"> 一条来自爱情服务器的消息将于2024年2月10日发送给您 Trúc。 </span>'

Typewriter
    .pauseFor(100)
    .typeString( currentDate.getFullYear() === 2024 &&
        currentDate.getMonth() === 1 && 
        currentDate.getDate() === 10 ? message1 : message2)
    .start()

var wH = window.innerHeight;
var wW = window.innerWidth;
var generateStars = function generateStars(f) {
    for (var e = 0; e < f; e++) {
        var d = document.createElement("div");
        d.className = e % 20 == 0 ? "star star--big" : e % 9 == 0 ? "star star--medium" : "star";
        d.setAttribute("style", "top:" + Math.round(Math.random() * wH) + "px;left:" + Math.round(Math.random() * wW) + "px;animation-duration:" + (Math.round(Math.random() * 3000) + 3000) + "ms;animation-delay:" + Math.round(Math.random() * 3000) + "ms;");
        document.body.appendChild(d)
    }
};
generateStars(150);