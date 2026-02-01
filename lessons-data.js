// ===== ALL COURSES =====
window.courses = [
    {
        id: 'mindfulness',
        title: 'Mindfulness',
        description: 'Cultivate awareness of the here and now',
        color: '#d97706',
        icon: '🌱',
        duration: '8 weeks',
        started: true
    },
    {
        id: 'stress',
        title: 'Stress Management',
        description: 'Tools to handle pressure and overwhelm',
        color: '#0e7490',
        icon: '🌊',
        duration: '6 weeks',
        started: false
    },
    {
        id: 'emotions',
        title: 'Emotional Regulation',
        description: 'Understand and manage your feelings',
        color: '#db2777',
        icon: '💖',
        duration: '6 weeks',
        started: false
    },
    {
        id: 'relationships',
        title: 'Healthy Relationships',
        description: 'Build meaningful connections',
        color: '#7c3aed',
        icon: '🤝',
        duration: '8 weeks',
        started: false
    },
    {
        id: 'self-compassion',
        title: 'Self-Compassion',
        description: 'Develop kindness toward yourself',
        color: '#f59e0b',
        icon: '💝',
        duration: '6 weeks',
        started: false
    },
    {
        id: 'focus',
        title: 'Focus & Productivity',
        description: 'Train your attention muscle',
        color: '#10b981',
        icon: '🎯',
        duration: '5 weeks',
        started: false
    },
    {
        id: 'sleep',
        title: 'Sleep & Relaxation',
        description: 'Improve sleep and unwind deeply',
        color: '#8b5cf6',
        icon: '😴',
        duration: '4 weeks',
        started: false
    },
    {
        id: 'resilience',
        title: 'Resilience Building',
        description: 'Bounce back from challenges',
        color: '#f97316',
        icon: '💪',
        duration: '8 weeks',
        started: false
    },
    {
        id: 'communication',
        title: 'Mindful Communication',
        description: 'Speak and listen with presence',
        color: '#06b6d4',
        icon: '🗣️',
        duration: '6 weeks',
        started: false
    },
    {
        id: 'anxiety',
        title: 'Anxiety Management',
        description: 'Tools for calming anxious thoughts',
        color: '#84cc16',
        icon: '🌀',
        duration: '7 weeks',
        started: false
    }
];

// ===== ALL SKILLS =====
window.skills = [
    // Mindfulness Skills
    {
        id: 'observe',
        courseId: 'mindfulness',
        name: 'OBSERVE',
        tagline: 'Watch thoughts like clouds',
        description: 'Notice thoughts, sensations, and emotions without getting caught in them.',
        icon: '👁️',
        color: '#0e7490',
        practiceDuration: 30
    },
    {
        id: 'describe',
        courseId: 'mindfulness',
        name: 'DESCRIBE',
        tagline: 'Facts over stories',
        description: 'Put words to what you observe using only facts, not interpretations.',
        icon: '📝',
        color: '#059669',
        practiceDuration: 30
    },
    {
        id: 'participate',
        courseId: 'mindfulness',
        name: 'PARTICIPATE',
        tagline: 'Be fully present',
        description: 'Engage completely in what you\'re doing. Drop self-consciousness.',
        icon: '🌿',
        color: '#0e7490',
        practiceDuration: 30
    },
    {
        id: 'nonjudge',
        courseId: 'mindfulness',
        name: 'NON-JUDGMENT',
        tagline: 'Let things be as they are',
        description: 'Observe without labeling as good or bad.',
        icon: '⚖️',
        color: '#7c3aed',
        practiceDuration: 30
    },
    {
        id: 'onemindfully',
        courseId: 'mindfulness',
        name: 'ONE-MINDFULLY',
        tagline: 'Do one thing at a time',
        description: 'Focus completely on the present activity.',
        icon: '🎯',
        color: '#d97706',
        practiceDuration: 30
    },
    
    // Stress Management Skills
    {
        id: 'breathing',
        courseId: 'stress',
        name: 'DEEP BREATHING',
        tagline: 'Calm your nervous system',
        description: 'Use breath to regulate stress response.',
        icon: '🌀',
        color: '#0e7490',
        practiceDuration: 30
    },
    {
        id: 'grounding',
        courseId: 'stress',
        name: 'GROUNDING',
        tagline: 'Return to the present',
        description: 'Use your senses to anchor in the here and now.',
        icon: '🌍',
        color: '#d97706',
        practiceDuration: 30
    },
    {
        id: 'perspective',
        courseId: 'stress',
        name: 'PERSPECTIVE TAKING',
        tagline: 'See the bigger picture',
        description: 'Step back from stressful thoughts.',
        icon: '🔭',
        color: '#7c3aed',
        practiceDuration: 30
    },
    
    // Emotional Regulation Skills
    {
        id: 'emotionawareness',
        courseId: 'emotions',
        name: 'EMOTION AWARENESS',
        tagline: 'Name it to tame it',
        description: 'Identify and label emotions as they arise.',
        icon: '🎭',
        color: '#db2777',
        practiceDuration: 30
    },
    {
        id: 'emotionsurfing',
        courseId: 'emotions',
        name: 'EMOTION SURFING',
        tagline: 'Ride the wave of emotion',
        description: 'Allow emotions to rise and fall without acting on them.',
        icon: '🏄',
        color: '#db2777',
        practiceDuration: 30
    },
    
    // Relationships Skills
    {
        id: 'activelistening',
        courseId: 'relationships',
        name: 'ACTIVE LISTENING',
        tagline: 'Listen with full presence',
        description: 'Give your complete attention when others speak.',
        icon: '👂',
        color: '#7c3aed',
        practiceDuration: 30
    },
    {
        id: 'compassionatecommunication',
        courseId: 'relationships',
        name: 'COMPASSIONATE COMMUNICATION',
        tagline: 'Speak from the heart',
        description: 'Express yourself with kindness and clarity.',
        icon: '💬',
        color: '#7c3aed',
        practiceDuration: 30
    }
];

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
            },
            {
                title: 'Your Practice Begins',
                content: `You now understand: Thoughts are automatic, but you can choose how to relate to them. The practice begins now.`
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
            },
            {
                title: 'Flow State',
                content: `When you lose track of time because you're so engaged, that's participation.`
            }
        ]
    },
    
    breathing: {
        title: 'DEEP BREATHING',
        steps: [
            {
                title: 'The Stress Response',
                content: `Stress triggers shallow, rapid breathing. This signals "danger" to your nervous system.`
            },
            {
                title: 'The Calming Breath',
                content: `Deep, slow breathing tells your body: "It's safe to relax."`
            },
            {
                title: '4-7-8 Technique',
                content: `Inhale for 4 counts, hold for 7, exhale for 8. This activates the parasympathetic nervous system.`
            },
            {
                title: 'Daily Practice',
                content: `Practice 5 deep breaths whenever you feel stressed.`
            }
        ]
    },
    
    emotionawareness: {
        title: 'EMOTION AWARENESS',
        steps: [
            {
                title: 'The Emotional Landscape',
                content: `Emotions are like weather - they come and go. You are the sky.`
            },
            {
                title: 'Naming Emotions',
                content: `Simply saying "This is anger" or "This is sadness" creates distance.`
            },
            {
                title: 'Emotion vs. Reaction',
                content: `You can feel anger without yelling. You can feel fear without running.`
            },
            {
                title: 'Daily Check-ins',
                content: `Pause 3 times daily and ask: "What am I feeling right now?"`
            }
        ]
    },
    
    activelistening: {
        title: 'ACTIVE LISTENING',
        steps: [
            {
                title: 'Listening vs. Waiting to Speak',
                content: `Most people aren't listening - they're preparing their response.`
            },
            {
                title: 'Full Attention',
                content: `Put away distractions. Make eye contact. Be fully present.`
            },
            {
                title: 'Reflective Listening',
                content: `Repeat back what you heard: "So what I'm hearing is..."`
            },
            {
                title: 'Practice with a Friend',
                content: `Spend 5 minutes just listening without interrupting or advising.`
            }
        ]
    }
};
