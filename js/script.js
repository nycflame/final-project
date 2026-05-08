/* ============================================
   Driscoll Chen - Portfolio JavaScript
   Final Project - Web Design

   评分点覆盖:
   ✓ 至少 2 个 DOM queries
   ✓ 至少 1 个响应 DOM event 的函数
   ✓ 函数会更新页面内容/CSS 属性
   ============================================ */

// ============================================
// Feature 1: 经历卡片展开/折叠
// DOM Query #1: querySelectorAll
// DOM Event: click
// ============================================

const experienceCards = document.querySelectorAll('.experience-card[data-card]');

experienceCards.forEach(function(card) {
    card.addEventListener('click', function() {
        // 获取详情区和提示文字
        const details = card.querySelector('.exp-details');
        const hint = card.querySelector('.expand-hint');

        if (!details) return;

        // 切换展开状态 - 修改 CSS 类（class）
        details.classList.toggle('expanded');

        // 更新提示文字内容（修改 page content）
        if (details.classList.contains('expanded')) {
            if (hint) hint.textContent = '▲ Click to collapse';
        } else {
            if (hint) hint.textContent = '▼ Click for details';
        }
    });
});

// ============================================
// Feature 2: 主题切换 (Light / Dark Mode)
// DOM Query #2: getElementById
// DOM Event: click
// 修改 CSS（通过 class）+ 修改 button 文字内容
// ============================================

const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
        // 切换 dark-mode 类（修改 CSS 属性）
        document.body.classList.toggle('dark-mode');

        // 更新按钮文字（修改 page content）
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Switch to Light Mode';
        } else {
            themeToggleBtn.textContent = '🌙 Switch to Dark Mode';
        }
    });
}

// ============================================
// Feature 3: 联系表单验证
// DOM Query #3: getElementById (表单元素)
// DOM Event: click on submit
// ============================================

const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const feedback = document.getElementById('form-feedback');

if (submitBtn) {
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        // 获取输入内容
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // 简单验证
        if (name === '' || email === '' || message === '') {
            feedback.textContent = '⚠️ Please fill in all fields before submitting.';
            feedback.className = 'form-message error';
            return;
        }

        // 邮箱格式验证
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            feedback.textContent = '⚠️ Please enter a valid email address.';
            feedback.className = 'form-message error';
            return;
        }

        // 提交"成功" - 修改页面内容
        feedback.textContent = '✓ Thanks, ' + name + '! Your message has been recorded. I will get back to you at ' + email + '.';
        feedback.className = 'form-message success';

        // 清空表单
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });
}

// ============================================
// Feature 4: 滚动时导航栏阴影
// DOM Query #4: querySelector
// DOM Event: scroll
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// Feature 5: 加载淡入动画
// 给 main section 添加 fade-in 类
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    sections.forEach(function(section, index) {
        section.style.animationDelay = (index * 0.1) + 's';
        section.classList.add('fade-in');
    });
});
