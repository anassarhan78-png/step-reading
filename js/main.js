// إضافة حركات متقدمة للموقع
document.addEventListener('DOMContentLoaded', function() {
    
    // ================================================
    // 1. تأثير ظهور العناصر عند التمرير (Scroll Animation)
    // ================================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // إضافة تأثير إضافي للبطاقات
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // تطبيق التأثير على جميع العناصر المهمة
    document.querySelectorAll('.level-card, .passage-card, .stat-item, .feature-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });
    
    // ================================================
    // 2. تأثير كتابة تلقائي للعناوين (Typing Effect)
    // ================================================
    const titles = document.querySelectorAll('h1, h2, .animate-text');
    titles.forEach(title => {
        title.classList.add('animate-title');
        
        // تأثير كتابة للعناوين الرئيسية فقط
        if (title.tagName === 'H1') {
            const text = title.textContent;
            title.textContent = '';
            let i = 0;
            
            function typeWriter() {
                if (i < text.length) {
                    title.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            // تأخير بدء تأثير الكتابة
            setTimeout(typeWriter, 500);
        }
    });
    
    // ================================================
    // 3. تأثير مؤشر الماوس المخصص (Custom Cursor)
    // ================================================
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    // إضافة دائرة صغيرة داخل المؤشر
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    cursor.appendChild(cursorDot);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // تأثير عند المرور فوق العناصر القابلة للنقر
    document.querySelectorAll('a, button, .btn, .btn-small, .level-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
    
    // إخفاء المؤشر الافتراضي
    document.body.style.cursor = 'none';
    
    // ================================================
    // 4. تأثير تغيير لون الخلفية عند التمرير (Parallax Effect)
    // ================================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrolled / maxScroll) * 100;
        
        // تغيير لون الهيدر عند التمرير
        const header = document.querySelector('header');
        if (header) {
            if (scrolled > 100) {
                header.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
                header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.2)';
            } else {
                header.style.background = 'var(--gradient-1)';
                header.style.boxShadow = 'none';
            }
        }
        
        // تأثير اختفاء العناصر عند التمرير
        const fadeElements = document.querySelectorAll('.fade-on-scroll');
        fadeElements.forEach(el => {
            const distance = el.getBoundingClientRect().top;
            const opacity = 1 - (distance / window.innerHeight);
            if (opacity > 0 && opacity < 1) {
                el.style.opacity = opacity;
            }
        });
    });
    
    // ================================================
    // 5. تأثير النقر على الأزرار (Button Click Effect)
    // ================================================
    document.querySelectorAll('.btn, .btn-small, a').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // منع السلوك الافتراضي مؤقتاً
            e.preventDefault();
            
            // إضافة تأثير النقر
            this.classList.add('btn-click');
            
            // إنشاء تأثير تموج (Ripple Effect)
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            this.appendChild(ripple);
            
            // تحديد موقع النقرة
            const x = e.clientX - this.getBoundingClientRect().left;
            const y = e.clientY - this.getBoundingClientRect().top;
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            // إزالة التأثيرات بعد الانتهاء
            setTimeout(() => {
                this.classList.remove('btn-click');
                ripple.remove();
                
                // التنقل بعد التأثير إذا كان الرابط حقيقياً
                if (this.href && !this.href.includes('javascript')) {
                    window.location.href = this.href;
                }
            }, 300);
        });
    });
    
    // ================================================
    // 6. تأثير تحميل الصفحة (Page Load Effect)
    // ================================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // إضافة تأثير تحميل للصور
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.classList.add('fade-in');
        });
        
        // إخفاء شاشة التحميل إذا وجدت
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });
    
    // ================================================
    // 7. تأثير تحريك الخلفية (Floating Background)
    // ================================================
    function createFloatingElements() {
        const header = document.querySelector('header');
        if (!header) return;
        
        for (let i = 0; i < 10; i++) {
            const element = document.createElement('i');
            element.classList.add('floating-bg-element');
            element.style.left = Math.random() * 100 + '%';
            element.style.animationDelay = Math.random() * 5 + 's';
            element.style.animationDuration = (Math.random() * 10 + 10) + 's';
            element.innerHTML = ['📚', '✏️', '📖', '📝', '🎓', '⭐'][Math.floor(Math.random() * 6)];
            header.appendChild(element);
        }
    }
    createFloatingElements();
    
    // ================================================
    // 8. بيانات القطع (Passages Data)
    // ================================================
    const passagesData = {
        a1: { 
            name: 'المستوى المبتدئ A1', 
            count: 20, 
            color: '#27ae60',
            icon: '🌱',
            passages: [
                { id: 1, title: 'My Daily Routine', topic: 'daily life', difficulty: 'easy' },
                { id: 2, title: 'My Family', topic: 'family', difficulty: 'easy' },
                { id: 3, title: 'At the Supermarket', topic: 'shopping', difficulty: 'easy' },
                { id: 4, title: 'My Favorite Hobby', topic: 'hobbies', difficulty: 'easy' },
                { id: 5, title: 'A Day at the Park', topic: 'leisure', difficulty: 'easy' }
                // ... يمكن إضافة المزيد
            ]
        },
        a2: { 
            name: 'المستوى الأساسي A2', 
            count: 20, 
            color: '#f39c12',
            icon: '🌿',
            passages: [
                { id: 1, title: 'Healthy Eating Habits', topic: 'health', difficulty: 'easy' },
                { id: 2, title: 'Weekend Plans', topic: 'leisure', difficulty: 'easy' },
                { id: 3, title: 'My School Day', topic: 'education', difficulty: 'easy' }
                // ... يمكن إضافة المزيد
            ]
        },
        b1: { 
            name: 'المستوى المتوسط B1', 
            count: 20, 
            color: '#3498db',
            icon: '🌳',
            passages: [
                { id: 1, title: 'The Water Cycle', topic: 'science', difficulty: 'medium' },
                { id: 2, title: 'Climate Change', topic: 'environment', difficulty: 'medium' },
                { id: 3, title: 'Social Media Impact', topic: 'technology', difficulty: 'medium' }
                // ... يمكن إضافة المزيد
            ]
        },
        step: { 
            name: 'مستوى STEP', 
            count: 25, 
            color: '#e74c3c',
            icon: '🎯',
            passages: [
                { 
                    id: 1, 
                    title: 'The Impact of Screen Time on Adolescent Cognitive Development', 
                    topic: 'psychology', 
                    difficulty: 'hard',
                    author: 'Dr. Sarah Johnson',
                    date: '2024'
                },
                { 
                    id: 2, 
                    title: 'Artificial Intelligence in Modern Education', 
                    topic: 'technology', 
                    difficulty: 'hard' 
                },
                { 
                    id: 3, 
                    title: 'Renewable Energy Solutions', 
                    topic: 'environment', 
                    difficulty: 'hard' 
                }
                // ... يمكن إضافة المزيد
            ]
        }
    };
    
    // ================================================
    // 9. تحميل صفحات المستويات (Load Levels Page)
    // ================================================
    function loadLevelsPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const level = urlParams.get('level');
        
        if (level && passagesData[level]) {
            // تحديث عنوان الصفحة
            document.getElementById('level-name').textContent = passagesData[level].name;
            document.getElementById('passage-count').textContent = passagesData[level].count;
            document.getElementById('level-icon').textContent = passagesData[level].icon;
            
            // تغيير لون الهيدر حسب المستوى
            const header = document.querySelector('header');
            if (header) {
                header.style.background = `linear-gradient(135deg, ${passagesData[level].color}, ${adjustColor(passagesData[level].color, 20)})`;
            }
            
            const container = document.getElementById('passages-container');
            if (!container) return;
            
            // تنظيف الحاوية
            container.innerHTML = '';
            
            // إضافة القطع
            for (let i = 1; i <= passagesData[level].count; i++) {
                const passageCard = document.createElement('div');
                passageCard.className = 'passage-card';
                passageCard.style.animationDelay = (i * 0.05) + 's';
                
                const passage = passagesData[level].passages[i-1] || { 
                    title: `Passage ${i}`, 
                    topic: 'general',
                    difficulty: 'medium'
                };
                
                // تحديد أيقونة حسب الموضوع
                const topicIcons = {
                    'daily life': '🌅',
                    'family': '👨‍👩‍👧‍👦',
                    'health': '💪',
                    'education': '📚',
                    'science': '🔬',
                    'technology': '💻',
                    'environment': '🌍',
                    'psychology': '🧠',
                    'general': '📄'
                };
                
                const icon = topicIcons[passage.topic] || '📄';
                
                // تحديد شارة الصعوبة
                const difficultyBadge = {
                    'easy': '🟢 سهل',
                    'medium': '🟡 متوسط',
                    'hard': '🔴 متقدم'
                }[passage.difficulty] || '🟢 سهل';
                
                passageCard.innerHTML = `
                    <div class="passage-icon">${icon}</div>
                    <h3>${passage.title}</h3>
                    <div class="passage-meta">
                        <span class="passage-topic">${passage.topic}</span>
                        <span class="passage-difficulty ${passage.difficulty}">${difficultyBadge}</span>
                    </div>
                    <p class="passage-description">${passage.description || 'اقرأ القطعة وأجب عن الأسئلة'}</p>
                    <a href="passages/passage${i}.html?level=${level}" class="btn-small">
                        <i class="fas fa-book-open"></i>
                        قراءة
                    </a>
                `;
                
                container.appendChild(passageCard);
            }
        }
    }
    
    // ================================================
    // 10. تحميل صفحة القطعة (Load Passage Page)
    // ================================================
    function loadPassagePage() {
        const urlParams = new URLSearchParams(window.location.search);
        const level = urlParams.get('level');
        const passageId = window.location.pathname.match(/passage(\d+)\.html/)[1];
        
        if (level && passagesData[level]) {
            const passage = passagesData[level].passages[passageId - 1];
            
            // تحديث معلومات القطعة
            const titleElement = document.querySelector('.passage-title');
            if (titleElement && passage) {
                titleElement.textContent = passage.title;
            }
            
            // إضافة مؤشر تقدم القراءة
            createReadingProgressBar();
        }
    }
    
    // ================================================
    // 11. إنشاء شريط تقدم القراءة (Reading Progress Bar)
    // ================================================
    function createReadingProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    
    // ================================================
    // 12. دوال مساعدة (Helper Functions)
    // ================================================
    function adjustColor(color, amount) {
        // دالة لتعديل درجة اللون
        return color; // تبسيطاً، يمكن إضافة مكتبة لمعالجة الألوان
    }
    
    function showNotification(message, type = 'info') {
        // إظهار إشعار للمستخدم
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideDown 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // ================================================
    // 13. تحديد الصفحة الحالية وتشغيل الدالة المناسبة
    // ================================================
    const path = window.location.pathname;
    
    if (path.includes('levels.html')) {
        loadLevelsPage();
    } else if (path.includes('passage.html')) {
        loadPassagePage();
    }
    
    // ================================================
    // 14. إضافة تأثيرات للروابط الخارجية
    // ================================================
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', (e) => {
            showNotification('جاري فتح الرابط في نافذة جديدة', 'info');
        });
    });
    
    // ================================================
    // 15. تأثير البحث المباشر (Live Search)
    // ================================================
    const searchInput = document.getElementById('search-passages');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const passages = document.querySelectorAll('.passage-card');
            
            passages.forEach(passage => {
                const title = passage.querySelector('h3').textContent.toLowerCase();
                const topic = passage.querySelector('.passage-topic')?.textContent.toLowerCase() || '';
                
                if (title.includes(searchTerm) || topic.includes(searchTerm)) {
                    passage.style.display = 'block';
                    passage.style.animation = 'fadeIn 0.5s ease';
                } else {
                    passage.style.display = 'none';
                }
            });
        });
    }
    
    // ================================================
    // 16. حفظ آخر مستوى تم زيارته
    // ================================================
    const lastVisitedLevel = localStorage.getItem('lastVisitedLevel');
    if (lastVisitedLevel && path.includes('index.html')) {
        setTimeout(() => {
            showNotification(`آخر زيارة لك كانت للمستوى ${lastVisitedLevel.toUpperCase()}`, 'info');
        }, 2000);
    }
    
    // حفظ المستوى الحالي
    const currentLevel = new URLSearchParams(window.location.search).get('level');
    if (currentLevel) {
        localStorage.setItem('lastVisitedLevel', currentLevel);
    }
});

// ================================================
// 17. إضافة CSS إضافي عبر JavaScript
// ================================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translate(-50%, -100%);
            opacity: 0;
        }
        to {
            transform: translate(-50%, 0);
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            transform: translate(-50%, 0);
            opacity: 1;
        }
        to {
            transform: translate(-50%, -100%);
            opacity: 0;
        }
    }
    
    .reading-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #3498db, #2ecc71);
        z-index: 9999;
        transition: width 0.1s ease;
    }
    
    .floating-bg-element {
        position: absolute;
        font-size: 2rem;
        opacity: 0.1;
        animation: float 20s linear infinite;
        pointer-events: none;
    }
    
    .cursor-dot {
        width: 6px;
        height: 6px;
        background: var(--secondary-color);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .passage-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        font-size: 0.9rem;
    }
    
    .passage-topic {
        background: #f0f0f0;
        padding: 3px 10px;
        border-radius: 15px;
        color: #666;
    }
    
    .passage-difficulty {
        padding: 3px 10px;
        border-radius: 15px;
    }
    
    .passage-difficulty.easy {
        background: #d4edda;
        color: #155724;
    }
    
    .passage-difficulty.medium {
        background: #fff3cd;
        color: #856404;
    }
    
    .passage-difficulty.hard {
        background: #f8d7da;
        color: #721c24;
    }
    
    .passage-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        animation: bounce 2s infinite;
    }
`;

document.head.appendChild(style);
