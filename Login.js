document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        Swal.fire({
            icon: 'success',
            title: '登入成功',
            text: '歡迎回來！',
        });
    });
});
document.querySelectorAll(".user-img").forEach(img => {
    const original = img.src;
    const hover = img.getAttribute("data-hover");

    // 鼠標滑過 → 切換圖片
    img.addEventListener("mouseenter", () => {
        img.src = hover;
    });

    // 鼠標移出 → 回到原本圖片
    img.addEventListener("mouseleave", () => {
        img.src = original;
    });
});