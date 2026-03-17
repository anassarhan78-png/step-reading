// بيانات القطع حسب المستوى
const passagesData = {
    a1: {
        name: 'المستوى المبتدئ A1',
        count: 20,
        passages: [
            { id: 1, title: 'My Daily Routine', topic: 'daily life' },
            { id: 2, title: 'My Family', topic: 'family' },
            // ... المزيد من القطع
        ]
    },
    a2: {
        name: 'المستوى الأساسي A2',
        count: 20,
        passages: [
            { id: 1, title: 'Healthy Eating Habits', topic: 'health' },
            // ... المزيد من القطع
        ]
    },
    b1: {
        name: 'المستوى المتوسط B1',
        count: 20,
        passages: [
            { id: 1, title: 'The Water Cycle', topic: 'science' },
            // ... المزيد من القطع
        ]
    },
    step: {
        name: 'مستوى STEP',
        count: 25,
        passages: [
            { id: 1, title: 'The Impact of Screen Time on Adolescent Cognitive Development', topic: 'psychology' },
            // ... المزيد من القطع
        ]
    }
};

// تحميل الصفحة المناسبة
document.addEventListener('DOMContentLoaded', function() {
    // تحديد الصفحة الحالية
    const path = window.location.pathname;
    
    if (path.includes('levels.html')) {
        loadLevelsPage();
    } else if (path.includes('passage.html')) {
        loadPassagePage();
    }
});

function loadLevelsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    
    if (level && passagesData[level]) {
        document.getElementById('level-name').textContent = passagesData[level].name;
        document.getElementById('passage-count').textContent = passagesData[level].count;
        
        const container = document.getElementById('passages-container');
        
        for (let i = 1; i <= passagesData[level].count; i++) {
            const passageCard = document.createElement('div');
            passageCard.className = 'passage-card';
            passageCard.innerHTML = `
                <h3>القطعة ${i}</h3>
                <p>${passagesData[level].passages[i-1]?.title || `Passage ${i}`}</p>
                <a href="passages/passage${i}.html?level=${level}" class="btn-small">قراءة</a>
            `;
            container.appendChild(passageCard);
        }
    }
}

function loadPassagePage() {
    // سيتم إضافة منطق عرض القطعة الواحدة
    console.log('Loading passage...');
}
