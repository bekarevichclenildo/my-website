document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = '点击我';
    button.addEventListener('click', function() {
        alert('你好，欢迎来到我的博客！');
    });
    document.body.appendChild(button);
});