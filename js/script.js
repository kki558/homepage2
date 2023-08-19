fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
        const hitokoto = document.querySelector('#hitokoto_text')
        const creator = document.querySelector('#creator')
        // hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
        hitokoto.innerText = data.hitokoto
        var who = data.from_who
        creator.innerText = data.from_who
        if (who == null) {
            creator.innerText = "未知"
        }
    })
    .catch(console.error)
// 检测是否浏览
window.onblur = function () {
    console.log("in")
}
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        document.title = "别走啊w(ﾟДﾟ)w"
        console.log("out");
    }
    else {
        document.title = "你来了呀ヾ(≧▽≦*)o"
    }
});