// ================================================
// STEP Reading - الملف الرئيسي
// جميع الحقوق محفوظة
// إجمالي القطع: 85 قطعة
// A1: 20 قطعة
// A2: 20 قطعة
// B1: 20 قطعة
// STEP: 25 قطعة
// ================================================

// بيانات القطع (Passages Data)
const passagesData = {
    a1: { 
        name: 'المستوى المبتدئ A1', 
        count: 20, 
        color: '#27ae60',
        icon: '🌱',
        description: 'للمبتدئين - مفردات أساسية وجمل بسيطة',
        passages: [
            { id: 1, title: 'My Daily Routine', topic: 'daily life', difficulty: 'easy', description: 'تعلم كيف تصف يومك بالانجليزية' },
            { id: 2, title: 'My Family', topic: 'family', difficulty: 'easy', description: 'مفردات العائلة بالانجليزية' },
            { id: 3, title: 'At the Supermarket', topic: 'shopping', difficulty: 'easy', description: 'التسوق والمشتريات' },
            { id: 4, title: 'My Favorite Hobby', topic: 'hobbies', difficulty: 'easy', description: 'الهوايات والاهتمامات' },
            { id: 5, title: 'A Day at the Park', topic: 'leisure', difficulty: 'easy', description: 'وقت الفراغ والترفيه' }
            // يمكن إضافة المزيد حتى 20 قطعة
        ]
    },
    a2: { 
        name: 'المستوى الأساسي A2', 
        count: 20, 
        color: '#f39c12',
        icon: '🌿',
        description: 'نصوص قصيرة عن مواضيع مألوفة',
        passages: [
            { id: 1, title: 'Healthy Eating Habits', topic: 'health', difficulty: 'easy', description: 'عادات الاكل الصحي' },
            { id: 2, title: 'Weekend Plans', topic: 'leisure', difficulty: 'easy', description: 'خطط نهاية الاسبوع' },
            { id: 3, title: 'My School Day', topic: 'education', difficulty: 'easy', description: 'يومي في المدرسة' },
            { id: 4, title: 'Favorite Foods', topic: 'food', difficulty: 'easy', description: 'الاطعمة المفضلة' },
            { id: 5, title: 'Daily Weather', topic: 'weather', difficulty: 'easy', description: 'الطقس والمناخ' }
            // يمكن إضافة المزيد حتى 20 قطعة
        ]
    },
    b1: { 
        name: 'المستوى المتوسط B1', 
        count: 20, 
        color: '#3498db',
        icon: '🌳',
        description: 'نصوص أطول مع مفردات أكثر تنوعاً',
        passages: [
            { id: 1, title: 'The Water Cycle', topic: 'science', difficulty: 'medium', description: 'دورة الماء في الطبيعة' },
            { id: 2, title: 'Climate Change', topic: 'environment', difficulty: 'medium', description: 'التغير المناخي وتأثيراته' },
            { id: 3, title: 'Social Media Impact', topic: 'technology', difficulty: 'medium', description: 'تأثير وسائل التواصل الاجتماعي' },
            { id: 4, title: 'Renewable Energy', topic: 'environment', difficulty: 'medium', description: 'الطاقة المتجددة' },
            { id: 5, title: 'Online Learning', topic: 'education', difficulty: 'medium', description: 'التعلم عن بعد' }
            // يمكن إضافة المزيد حتى 20 قطعة
        ]
    },
    step: { 
        name: 'مستوى STEP', 
        count: 25, 
        color: '#e74c3c',
        icon: '🎯',
        description: 'نصوص أكاديمية بمستوى الاختبار',
        passages: [
            { 
                id: 1, 
                title: 'The Impact of Screen Time on Adolescent Cognitive Development', 
                topic: 'psychology', 
                difficulty: 'hard',
                author: 'Dr. Sarah Johnson',
                date: '2024',
                description: 'تأثير الشاشات على تطور الدماغ عند المراهقين'
            },
            { 
                id: 2, 
                title: 'Artificial Intelligence in Modern Education', 
                topic: 'technology', 
                difficulty: 'hard',
                description: 'الذكاء الاصطناعي في التعليم الحديث'
            },
            { 
                id: 3, 
                title: 'Renewable Energy Solutions for the Future', 
                topic: 'environment', 
                difficulty: 'hard',
                description: 'حلول الطاقة المتجددة للمستقبل'
            },
            { 
                id: 4, 
                title: 'The Psychology of Memory and Learning', 
                topic: 'psychology', 
                difficulty: 'hard',
                description: 'سيكولوجية الذاكرة والتعلم'
            },
            { 
                id: 5, 
                title: 'Global Warming: Causes and Effects', 
                topic: 'environment', 
                difficulty: 'hard',
                description: 'الاحتباس الحراري: الاسباب والنتائج'
            }
            // يمكن إضافة المزيد حتى 25 قطعة
        ]
    }
};

// ================================================
// تهيئة الموقع وإضافة الحركات
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    
    // تفعيل الحركات
    initAnimations();
    
    // تحميل الصفحة المناسبة
    loadCurrentPage();
    
    // إضافة تأثيرات إضافية
    addExtraEffects();
});

// ================================================
// دالة تهيئة جميع الحركات
// ================================================
function initAnimations() {
    
    // 1. تأثير ظهور العناصر عند التمرير
    initScrollAnimation();
    
    // 2. تأثير كتابة العناوين
    initTypingEffect();
    
    // 3. تأثير المؤشر المخصص (اختياري - يمكن تعطيله على الجوال)
    if (window.innerWidth > 768) {
        initCustomCursor();
    }
    
    // 4. تأثير التمرير على الهيدر
    initHeaderScroll();
    
    // 5. تأثير النقر على الأزرار
    initButtonEffects();
    
    // 6. تأثير تحميل الصفحة
    initPageLoad();
    
    // 7. تأثير الخلفية المتحركة
    initFloatingBackground();
    
    // 8. شريط تقدم القراءة
    initReadingProgress();
}

// ================================================
// 1. تأثير ظهور العناصر عند التمرير
// ================================================
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // تطبيق التأثير على العناصر
    const elements = document.querySelectorAll(
        '.level-card, .passage-card, .stat-item, .feature-box, .question, .option'
    );
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });
}

// ================================================
// 2. تأثير كتابة العناوين
// ================================================
function initTypingEffect() {
    const titles = document.querySelectorAll('h1, h2, .animate-text');
    
    titles.forEach(title => {
        // للعناوين الرئيسية فقط
        if (title.tagName === 'H1' && !title.hasAttribute('data-typed')) {
            title.setAttribute('data-typed', 'true');
            const text = title.textContent;
            
            // إذا كان النص قصيراً، طبق تأثير الكتابة
            if (text.length < 30) {
                title.textContent = '';
                let i = 0;
                
                function typeWriter() {
                    if (i < text.length) {
                        title.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    }
                }
                
                setTimeout(typeWriter, 500);
            }
        } else {
            title.classList.add('animate-title');
        }
    });
}

// ================================================
// 3. تأثير المؤشر المخصص (للأجهزة الكبيرة فقط)
// ================================================
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    // مؤشر داخلي
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    cursor.appendChild(cursorDot);
    
    // حركة المؤشر
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // تأثير عند المرور فوق العناصر القابلة للنقر
    const clickables = document.querySelectorAll('a, button, .btn, .btn-small, .level-card, .option');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
            cursorDot.style.backgroundColor = '#2980b9';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
            cursorDot.style.backgroundColor = 'var(--secondary-color)';
        });
    });
    
    // إخفاء المؤشر الافتراضي
    document.body.style.cursor = 'none';
}

// ================================================
// 4. تأثير تغيير لون الهيدر عند التمرير
// ================================================
function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        
        if (header) {
            if (scrolled > 100) {
                header.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
                header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.2)';
                header.style.padding = '2rem 1rem';
            } else {
                header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                header.style.boxShadow = 'none';
                header.style.padding = '4rem 1rem';
            }
        }
    });
}

// ================================================
// 5. تأثير النقر على الأزرار
// ================================================
function initButtonEffects() {
    document.querySelectorAll('.btn, .btn-small, a').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // للروابط الداخلية فقط
            if (this.href && !this.href.includes('javascript')) {
                e.preventDefault();
                
                // إضافة تأثير النقر
                this.classList.add('btn-click');
                
                // تأثير التموج
                const ripple = document.createElement('span');
                ripple.classList.add('ripple-effect');
                this.appendChild(ripple);
                
                // موقع النقرة
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                // الانتقال بعد التأثير
                setTimeout(() => {
                    window.location.href = this.href;
                }, 300);
            }
        });
    });
}

// ================================================
// 6. تأثير تحميل الصفحة
// ================================================
function initPageLoad() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // إخفاء شاشة التحميل إذا وجدت
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
        
        // عرض رسالة ترحيب
        showWelcomeMessage();
    });
}

// ================================================
// 7. تأثير الخلفية المتحركة
// ================================================
function initFloatingBackground() {
    const header = document.querySelector('header');
    if (!header) return;
    
    const icons = ['📚', '✏️', '📖', '📝', '🎓', '⭐', '💡', '🔍'];
    
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-bg-element');
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 5 + 's';
        element.style.animationDuration = (Math.random() * 10 + 15) + 's';
        element.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        element.textContent = icons[Math.floor(Math.random() * icons.length)];
        header.appendChild(element);
    }
}

// ================================================
// 8. شريط تقدم القراءة
// ================================================
function initReadingProgress() {
    // فقط في صفحات القراءة
    if (!window.location.pathname.includes('passage')) return;
    
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
// 9. تحميل الصفحة الحالية
// ================================================
function loadCurrentPage() {
    const path = window.location.pathname;
    
    if (path.includes('levels.html')) {
        loadLevelsPage();
    } else if (path.includes('passage')) {
        loadPassagePage();
    } else if (path.includes('index.html') || path === '/' || path === '') {
        loadHomePage();
    }
}

// ================================================
// 10. تحميل الصفحة الرئيسية
// ================================================
function loadHomePage() {
    console.log('مرحباً بك في STEP Reading!');
    
    // إضافة إحصائيات سريعة
    const stats = document.createElement('div');
    stats.className = 'quick-stats';
    stats.innerHTML = `
        <div class="stat-badge">
            <span>📚 ${getTotalPassages()} قطعة</span>
            <span>🎯 4 مستويات</span>
            <span>⭐ تقييم 4.8</span>
        </div>
    `;
    
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(stats);
    }
}

// ================================================
// 11. تحميل صفحة المستويات
// ================================================
function loadLevelsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    
    if (level && passagesData[level]) {
        // تحديث معلومات المستوى
        updateLevelInfo(level);
        
        // عرض القطع
        displayPassages(level);
        
        // حفظ آخر زيارة
        localStorage.setItem('lastVisitedLevel', level);
    }
}

// ================================================
// 12. تحديث معلومات المستوى
// ================================================
function updateLevelInfo(level) {
    const data = passagesData[level];
    
    const levelNameEl = document.getElementById('level-name');
    const passageCountEl = document.getElementById('passage-count');
    const levelIconEl = document.getElementById('level-icon');
    const levelDescEl = document.getElementById('level-description');
    
    if (levelNameEl) levelNameEl.textContent = data.name;
    if (passageCountEl) passageCountEl.textContent = data.count;
    if (levelIconEl) levelIconEl.textContent = data.icon;
    if (levelDescEl) levelDescEl.textContent = data.description;
    
    // تغيير لون الهيدر
    const header = document.querySelector('header');
    if (header) {
        header.style.background = `linear-gradient(135deg, ${data.color}, ${adjustColor(data.color, 20)})`;
    }
}

// ================================================
// 13. عرض القطع
// ================================================
function displayPassages(level) {
    const container = document.getElementById('passages-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 1; i <= passagesData[level].count; i++) {
        const passage = passagesData[level].passages[i-1] || { 
            title: `قطعة ${i}`,
            topic: 'عام',
            difficulty: 'medium',
            description: 'قطعة قراءة للتدريب على اختبار STEP'
        };
        
        const card = createPassageCard(passage, i, level);
        container.appendChild(card);
    }
}

// ================================================
// 14. إنشاء بطاقة قطعة
// ================================================
function createPassageCard(passage, index, level) {
    const card = document.createElement('div');
    card.className = 'passage-card';
    card.style.animationDelay = (index * 0.05) + 's';
    
    // أيقونات حسب الموضوع
    const icons = {
        'daily life': '🌅', 'family': '👨‍👩‍👧‍👦', 'health': '💪',
        'education': '📚', 'science': '🔬', 'technology': '💻',
        'environment': '🌍', 'psychology': '🧠', 'food': '🍳',
        'weather': '☁️', 'shopping': '🛒', 'hobbies': '🎨',
        'leisure': '🏖️', 'عام': '📄'
    };
    
    const icon = icons[passage.topic] || '📄';
    
    // شارة الصعوبة
    const difficultyBadge = {
        'easy': '🟢 سهل',
        'medium': '🟡 متوسط',
        'hard': '🔴 متقدم'
    }[passage.difficulty] || '🟢 سهل';
    
    card.innerHTML = `
        <div class="passage-icon">${icon}</div>
        <h3>${passage.title}</h3>
        <div class="passage-meta">
            <span class="passage-topic">${passage.topic}</span>
            <span class="passage-difficulty ${passage.difficulty}">${difficultyBadge}</span>
        </div>
        <p class="passage-description">${passage.description}</p>
        <a href="passages/${level}passage${index}.html?level=${level}" class="btn-small">
            <i class="fas fa-book-open"></i>
            اقرأ القطعة
        </a>
    `;
    
    return card;
}

// ================================================
// 15. تحميل صفحة القطعة
// ================================================
function loadPassagePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    
    // استخراج رقم القطعة من مسار الملف (يدعم أسماء مثل a2passage1.html أو passage1.html)
    const match = window.location.pathname.match(/(?:[a-z]+)?passage(\d+)\.html/i);
    if (!match) return;
    const passageId = match[1];
    
    if (level && passagesData[level] && passagesData[level].passages[passageId - 1]) {
        const passage = passagesData[level].passages[passageId - 1];
        
        // تحديث عنوان القطعة
        const titleEl = document.querySelector('.passage-title');
        if (titleEl) titleEl.textContent = passage.title;
        
        // تحديث معلومات القطعة
        const infoEl = document.querySelector('.passage-info');
        if (infoEl) {
            infoEl.innerHTML = `
                <span>📖 ${passage.topic}</span>
                <span>⚡ ${passage.difficulty === 'hard' ? 'متقدم' : passage.difficulty === 'medium' ? 'متوسط' : 'مبتدئ'}</span>
                ${passage.author ? `<span>✍️ ${passage.author}</span>` : ''}
            `;
        }
    }
}

// ================================================
// 16. تأثيرات إضافية
// ================================================
function addExtraEffects() {
    
    // تأثير تحريك البطاقات
    const cards = document.querySelectorAll('.level-card, .passage-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // تأثير البحث المباشر
    const searchInput = document.getElementById('search-passages');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const term = e.target.value.toLowerCase();
            const passages = document.querySelectorAll('.passage-card');
            
            passages.forEach(p => {
                const title = p.querySelector('h3').textContent.toLowerCase();
                const topic = p.querySelector('.passage-topic')?.textContent.toLowerCase() || '';
                
                if (title.includes(term) || topic.includes(term)) {
                    p.style.display = 'block';
                } else {
                    p.style.display = 'none';
                }
            });
        });
    }
}

// ================================================
// 17. دوال مساعدة
// ================================================

// تعديل درجة اللون
function adjustColor(color, percent) {
    // هذه دالة مبسطة - في المشروع الحقيقي يمكن استخدام مكتبة
    return color;
}

// عرض رسالة ترحيب
function showWelcomeMessage() {
    const hours = new Date().getHours();
    let greeting = '';
    
    if (hours < 12) greeting = 'صباح الخير';
    else if (hours < 18) greeting = 'مساء الخير';
    else greeting = 'مساء الخير';
    
    console.log(`${greeting}! مرحباً بك في STEP Reading`);
}

// حساب إجمالي القطع
function getTotalPassages() {
    return passagesData.a1.count + 
           passagesData.a2.count + 
           passagesData.b1.count + 
           passagesData.step.count;
}

// عرض إشعار
function showNotification(message, type = 'info') {
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
        padding: 12px 24px;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideDown 0.3s ease;
        direction: rtl;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ================================================
// 18. إضافة CSS إضافي
// ================================================
const style = document.createElement('style');
style.textContent = `
    /* حركات مخصصة */
    @keyframes slideDown {
        from { transform: translate(-50%, -100%); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
    
    @keyframes slideUp {
        from { transform: translate(-50%, 0); opacity: 1; }
        to { transform: translate(-50%, -100%); opacity: 0; }
    }
    
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(-100px) rotate(360deg); }
    }
    
    /* شريط تقدم القراءة */
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
    
    /* المؤشر المخصص */
    .custom-cursor {
        width: 30px;
        height: 30px;
        border: 2px solid #3498db;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease, transform 0.2s ease, background 0.2s ease;
        transform: translate(-50%, -50%);
    }
    
    .cursor-dot {
        width: 6px;
        height: 6px;
        background: #3498db;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.2s ease;
    }
    
    /* تأثير التموج */
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
    }
    
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
    
    /* الخلفية المتحركة */
    .floating-bg-element {
        position: absolute;
        opacity: 0.1;
        animation: float 20s linear infinite;
        pointer-events: none;
        z-index: 0;
    }
    
    /* معلومات القطعة */
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
    
    /* إحصائيات سريعة */
    .quick-stats {
        margin-top: 2rem;
    }
    
    .stat-badge {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    
    .stat-badge span {
        background: rgba(255,255,255,0.2);
        padding: 0.5rem 1.5rem;
        border-radius: 50px;
        backdrop-filter: blur(5px);
        font-size: 1.1rem;
    }
    
    /* تأثيرات إضافية */
    .btn-click {
        transform: scale(0.95) !important;
        opacity: 0.8;
    }
    
    .animate-title {
        animation: fadeIn 1s ease;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-20px); }
        60% { transform: translateY(-10px); }
    }
    
    /* للجوال - إخفاء المؤشر المخصص */
    @media (max-width: 768px) {
        .custom-cursor {
            display: none;
        }
        body {
            cursor: auto !important;
        }
        .stat-badge {
            flex-direction: column;
            align-items: center;
        }
    }
`;

document.head.appendChild(style);

// ================================================
// تصدير الدوال للاستخدام العام
// ================================================
window.STEPReading = {
    passagesData: passagesData,
    showNotification: showNotification,
    getTotalPassages: getTotalPassages
};
