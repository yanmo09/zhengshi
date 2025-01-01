function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    const statusAnimation = document.querySelector('.login-status-animation');
    const button = document.querySelector('button');
    
    // 显示加载动画
    statusAnimation.classList.add('show');
    button.disabled = true;
    
    // 模拟登录验证过程
    setTimeout(() => {
        if (username === 'yanmo' && password === '090812') {
            // 登录成功
            statusAnimation.innerHTML = `
                <div class="success-animation">
                    <div class="success-icon"></div>
                    <span class="status-text">登录成功，即将跳转...</span>
                </div>
            `;
            
            // 添加页面过渡效果
            setTimeout(() => {
                // 创建过渡层
                const transition = document.createElement('div');
                transition.className = 'page-transition';
                document.body.appendChild(transition);
                
                // 触发过渡动画
                setTimeout(() => {
                    transition.classList.add('active');
                    
                    // 动画结束后跳转
                    setTimeout(() => {
                        window.location.href = 'billiards.html';
                    }, 800);
                }, 50);
            }, 1500);
        } else {
            // 登录失败
            statusAnimation.innerHTML = `
                <div class="error-animation">
                    <div class="error-icon"></div>
                    <span class="status-text">用户名或密码错误</span>
                </div>
            `;
            setTimeout(() => {
                statusAnimation.classList.remove('show');
                button.disabled = false;
                statusAnimation.innerHTML = '<div class="loading-spinner"></div>';
            }, 2000);
        }
    }, 1000);
}

// 添加注册链接点击处理
document.getElementById('registerLink').addEventListener('click', function(e) {
    e.preventDefault();
    const statusAnimation = document.querySelector('.login-status-animation');
    const button = document.querySelector('button');
    
    statusAnimation.classList.add('show');
    button.disabled = true;
    
    statusAnimation.innerHTML = `
        <div class="error-animation">
            <div class="error-icon"></div>
            <span class="status-text">测试版本暂不支持注册</span>
        </div>
    `;
    
    setTimeout(() => {
        statusAnimation.classList.remove('show');
        button.disabled = false;
        statusAnimation.innerHTML = '<div class="loading-spinner"></div>';
    }, 2000);
});

// 添加忘记密码链接点击处理
document.getElementById('forgotLink').addEventListener('click', function(e) {
    e.preventDefault();
    const statusAnimation = document.querySelector('.login-status-animation');
    const button = document.querySelector('button');
    
    statusAnimation.classList.add('show');
    button.disabled = true;
    
    statusAnimation.innerHTML = `
        <div class="error-animation">
            <div class="error-icon"></div>
            <span class="status-text">无法注册账户你哪来的密码？</span>
        </div>
    `;
    
    setTimeout(() => {
        statusAnimation.classList.remove('show');
        button.disabled = false;
        statusAnimation.innerHTML = '<div class="loading-spinner"></div>';
    }, 2000);
}); 