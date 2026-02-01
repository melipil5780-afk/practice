// ===== ALL COURSE DATA =====
window.lessonsData = {
    mindfulness: {
        id: 'mindfulness',
        title: 'Mindfulness',
        description: 'Cultivate awareness of the here and now',
        color: '#d97706',
        icon: '🌱',
        duration: '8 weeks',
        started: true
    },
    stress: {
        id: 'stress',
        title: 'Stress Management',
        description: 'Tools to handle pressure and overwhelm',
        color: '#0e7490',
        icon: '🌊',
        duration: '6 weeks',
        started: false
    },
    // Add 18 more courses here...
    // emotions: { id: 'emotions', title: 'Emotional Regulation', ... },
    // relationships: { id: 'relationships', title: 'Healthy Relationships', ... },
};

// ===== ALL SKILL DATA =====
window.skillsData = {
    observe: {
        id: 'observe',
        courseId: 'mindfulness',
        name: 'OBSERVE',
        tagline: 'Watch thoughts like clouds',
        description: 'Notice thoughts, sensations, and emotions without getting caught in them.',
        icon: '👁️',
        color: '#0e7490',
        practiceDuration: 30,
        isSchedulable: true
    },
    describe: {
        id: 'describe',
        courseId: 'mindfulness',
        name: 'DESCRIBE',
        tagline: 'Facts over stories',
        description: 'Put words to what you observe using only facts, not interpretations.',
        icon: '📝',
        color: '#059669',
        practiceDuration: 30,
        isSchedulable: true
    },
    participate: {
        id: 'participate',
        courseId: 'mindfulness',
        name: 'PARTICIPATE',
        tagline: 'Be fully present',
        description: 'Engage completely in what you\'re doing. Drop self-consciousness.',
        icon: '🌿',
        color: '#0e7490',
        practiceDuration: 30,
        isSchedulable: true
    },
    nonjudge: {
        id: 'nonjudge',
        courseId: 'mindfulness',
        name: 'NON-JUDGMENT',
        tagline: 'Let things be as they are',
        description: 'Observe without labeling as good or bad.',
        icon: '⚖️',
        color: '#7c3aed',
        practiceDuration: 30,
        isSchedulable: true
    },
    // Add all other skills here...
};

// ===== ALL LESSON STEPS =====
window.lessonSteps = {
    observe: {
        title: 'OBSERVE',
        steps: [
            {
                title: 'The Thought Trap',
                content: `Right now... can you stop your thoughts? I mean completely halt the thinking process for the next 30 seconds? Try it. I'll wait...`
            },
            {
                title: 'The Challenge',
                content: `What happened? Most likely, thoughts kept appearing. A voice might have said, 'Am I doing this right?' or 'This is silly' or 'I wonder how long 30 seconds is...'`
            },
            {
                title: "The Brain's Secret",
                content: `Here's the realization: You can't stop your thoughts by force. Thinking happens automatically, like breathing or your heart beating.`
            },
            {
                title: 'Two Ways',
                content: `But you CAN observe thoughts. See the difference? Stopping vs. observing. One is impossible struggle. The other is peaceful awareness.`
            },
            {
                title: 'Practice Now',
                content: `For the next minute, simply notice thoughts as they arise. Don't engage, argue, or follow them. Just label: 'Thinking...' and return to watching.`
            },
            {
                title: 'Use It Today',
                content: `Every time you notice an emotion today, say one word: "Noticing." That's all. No judgment, no analysis. Just noticing.`
            }
        ]
    },
    describe: {
        title: 'DESCRIBE',
        steps: [
            {
                title: 'The Stories We Tell',
                content: `Notice the difference: "My heart is beating fast" (fact) vs. "I'm having a panic attack" (story).`
            },
            {
                title: 'Sticking to Facts',
                content: `Describe only what you can observe with your senses: see, hear, feel, smell, taste.`
            },
            {
                title: 'Practice: The 5 Senses',
                content: `Right now: Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste.`
            },
            {
                title: 'When Emotions Arise',
                content: `Instead of "I'm angry," try: "I notice tension in my jaw, heat in my face, thoughts about fairness."`
            }
        ]
    },
    participate: {
        title: 'PARTICIPATE',
        steps: [
            {
                title: 'Half-There Living',
                content: `How often are you physically present but mentally elsewhere?`
            },
            {
                title: 'The Art of Full Engagement',
                content: `Participate means: all of you, here, now. No audience in your head watching you.`
            },
            {
                title: 'Practice: One Activity',
                content: `Choose one routine activity (brushing teeth, washing dishes) and do it with 100% attention.`
            }
        ]
    },
    // Add lessons for all other skills...
    // nonjudge: { title: 'NON-JUDGMENT', steps: [...] },
    // effectively: { title: 'EFFECTIVELY', steps: [...] },
};

// ===== HELPER FUNCTIONS =====
function getCourseSkills(courseId) {
    return Object.values(window.skillsData).filter(skill => skill.courseId === courseId);
}

function getSkillLesson(skillId) {
    return window.lessonSteps[skillId];
}

function getAllCourses() {
    return Object.values(window.lessonsData);
}

function getAllSkills() {
    return Object.values(window.skillsData);
}
