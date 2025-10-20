// 获取选项卡和表单元素
        const tabs = document.querySelectorAll('.tab');
        const forms = document.querySelectorAll('.login-form');

        // 为每个选项卡添加点击事件
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // 移除所有选项卡的active类
                tabs.forEach(t => t.classList.remove('active'));
                // 给当前点击的选项卡添加active类
                tab.classList.add('active');

                // 获取目标表单ID
                const targetForm = tab.getAttribute('data-tab') + '-form';
                
                // 隐藏所有表单
                forms.forEach(form => form.classList.remove('active'));
                // 显示目标表单
                document.getElementById(targetForm).classList.add('active');
            });
        });

        // 短信登录切换功能
        const phoneLogin = document.querySelector('.phone-login');
        phoneLogin.addEventListener('click', () => {
            alert('切换到短信登录模式');
            // 实际应用中可以在这里切换到短信登录表单
        });

        // 刷新二维码功能
        const qrRefresh = document.querySelector('.qr-refresh');
        qrRefresh.addEventListener('click', () => {
            // 模拟刷新二维码的效果
            const qrImg = document.querySelector('.qr-code img');
            qrImg.style.opacity = '0.5';
            setTimeout(() => {
                qrImg.style.opacity = '1';
            }, 500);
        });

        // 登录按钮点击事件
        const loginBtn = document.querySelector('.btn-login');
        loginBtn.addEventListener('click', () => {
            const username = document.querySelector('input[placeholder="请输入用户名"]').value;
            const password = document.querySelector('input[placeholder="请输入密码"]').value;
            
            if (!username || !password) {
                alert('请输入用户名和密码');
                return;
            }
            
            // 实际应用中这里会发送登录请求
            alert('登录成功！');
        });