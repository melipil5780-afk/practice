// ===== ALL COURSE AND LESSON DATA =====
window.coursesData = [
    {
        id: 'mindfulness',
        title: 'Mindfulness',
        description: 'Cultivate awareness of the here and now',
        color: '#d97706',
        icon: '🌱',
        
        skills: [
            {
                id: 'observe',
                name: 'OBSERVE',
                icon: '👁️',
                tagline: 'Watch thoughts like clouds',
                description: 'Notice sensations, thoughts, and emotions without getting caught in them.',
                practiceDuration: 30,
                practicePrompts: [
                    'Take a breath... settle in...',
                    'Notice what thoughts are here...',
                    'Label them gently... "thinking"...',
                    'Watch thoughts like clouds drifting...',
                    'No need to fight or fix...',
                    'Just watching... just noticing...',
                    'You\'re the sky, not the clouds...',
                    'Let them pass by...'
                ],
                
                steps: [
                    {
                        title: 'The Thought Trap',
                        content: `
                            <div class="card" style="padding:2rem;text-align:center;margin-bottom:1rem;background:linear-gradient(135deg,#0e7490,#d97706);">
                                <div style="font-size:4rem;margin-bottom:1rem">🌀</div>
                                <h2 style="color:white;font-size:1.75rem;font-weight:700;margin-bottom:1rem">Quick Question</h2>
                                <p style="color:rgba(255,255,255,0.95);font-size:1.125rem;line-height:1.6;margin-bottom:1.25rem">
                                    Right now, in this exact moment...
                                </p>
                                <p style="color:white;font-size:1.375rem;font-weight:600;line-height:1.6;margin-bottom:1.5rem">
                                    Can you stop your thoughts?
                                </p>
                                <p style="color:white;font-size:1.05rem;line-height:1.7;margin-bottom:1.5rem">
                                    Not "think less" or "think calmer."<br/>Completely. Stop. Thinking.
                                </p>
                                <p style="color:rgba(255,255,255,0.9);font-size:1rem;line-height:1.7;margin-bottom:1.5rem">
                                    Most people say "yes." But they've never actually tried...
                                </p>
                                <div style="background:rgba(14,116,144,0.18);border:1px solid rgba(14,116,144,0.35);padding:0.5rem 1rem;border-radius:2rem;font-size:0.875rem;color:rgb(165,243,252);font-weight:500;display:inline-block;margin-top:0.5rem">
                                    Discover a key insight
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'The Challenge',
                        content: `
                            <div class="card" style="padding:1.5rem;margin-bottom:1rem;background:linear-gradient(135deg,rgba(239,68,68,0.18),rgba(220,38,38,0.12));border:1px solid rgba(239,68,68,0.35)">
                                <div style="font-size:3rem;margin-bottom:0.75rem;text-align:center">⚠️</div>
                                <h2 style="color:white;font-size:1.5rem;font-weight:600;margin-bottom:1rem;text-align:center">The Challenge</h2>
                                <p style="color:white;text-align:center;font-size:1.05rem;line-height:1.7">
                                    For the next 30 seconds, your job is to <strong style="color:rgb(252,165,165)">completely stop thinking</strong>.
                                </p>
                            </div>
                            
                            <div class="card" style="padding:1.5rem;margin-bottom:1rem">
                                <p style="color:white;font-size:1.05rem;font-weight:600;margin-bottom:1.5rem">Here's what to do:</p>
                                <div>
                                    ${[
                                        'Close your eyes (or keep them softly focused)',
                                        'Make your mind go totally blank',
                                        'When a thought appears, <strong>fight it</strong>',
                                        'Push it away with mental force',
                                        'Don\'t let ANY thoughts in',
                                        'Use all your willpower to stop thinking'
                                    ].map((inst, i) => `
                                        <div style="display:flex;gap:1rem;margin-bottom:1.5rem;align-items:start">
                                            <div style="width:2.25rem;height:2.25rem;background:linear-gradient(135deg,#0e7490,#d97706);border-radius:0.5rem;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;flex-shrink:0;font-size:0.875rem">${i+1}</div>
                                            <p style="color:rgb(203,213,225);padding-top:0.375rem;line-height:1.6;font-size:1rem">${inst}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <div id="timerSection" class="card" style="padding:2rem;margin-bottom:1rem;text-align:center">
                                <div style="font-size:4rem;font-weight:700;background:linear-gradient(to right,#0e7490,#d97706);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1rem">30</div>
                                <p style="color:rgb(148,163,184);margin-bottom:1.5rem;font-size:1rem">Ready? Take a breath...</p>
                                <button onclick="startTimer(30)" style="width:100%;padding:1rem;border-radius:1rem;background:linear-gradient(to right,#0e7490,#d97706);color:white;font-weight:600;border:none;font-size:1.125rem;cursor:pointer">
                                    Start Challenge
                                </button>
                            </div>
                        `
                    },
                    {
                        title: "The Brain's Secret",
                        content: `
                            <div class="card" style="padding:2rem;margin-bottom:1rem;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.35)">
                                <div style="font-size:3.5rem;margin-bottom:1rem;text-align:center">🧠</div>
                                <h2 style="color:white;font-size:1.75rem;font-weight:700;text-align:center;margin-bottom:1rem">You Didn't Fail</h2>
                                <p style="color:rgb(134,239,172);text-align:center;font-size:1.125rem;font-weight:600">The challenge was impossible.</p>
                            </div>
                            
                            <div class="card" style="padding:1.75rem;margin-bottom:1rem">
                                <h3 style="color:white;font-weight:600;font-size:1.25rem;margin-bottom:1.75rem">Here's Why:</h3>
                                
                                <div style="margin-bottom:2rem">
                                    <div style="background:rgba(14,116,144,0.12);padding:1.25rem;border-radius:1rem;border-left:4px solid rgb(14,116,144);margin-bottom:1.25rem">
                                        <p style="color:rgb(165,243,252);font-weight:600;font-size:1.125rem;margin-bottom:0.75rem">Your brain produces 6,000+ thoughts per day</p>
                                        <p style="color:rgb(148,163,184);font-size:1rem">Automatically. Without your permission.</p>
                                    </div>
                                    
                                    <div style="background:rgba(217,119,6,0.12);padding:1.25rem;border-radius:1rem;border-left:4px solid rgb(217,119,6);margin-bottom:1.25rem">
                                        <p style="color:rgb(253,230,138);font-weight:600;font-size:1.125rem;margin-bottom:0.75rem">Trying to stop thoughts = trying to stop your heart</p>
                                        <p style="color:rgb(148,163,184);font-size:1rem">It's not under your conscious control.</p>
                                    </div>
                                    
                                    <div style="background:rgba(94,234,212,0.12);padding:1.25rem;border-radius:1rem;border-left:4px solid rgb(94,234,212)">
                                        <p style="color:rgb(165,243,252);font-weight:600;font-size:1.125rem;margin-bottom:0.75rem">The harder you fight → The stronger they become</p>
                                        <p style="color:rgb(148,163,184);font-size:1rem">This is called the "White Bear Effect"</p>
                                    </div>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Two Ways',
                        content: `
                            <div class="card" style="padding:1.5rem;margin-bottom:1rem;background:linear-gradient(135deg,#0e7490,#d97706);">
                                <h2 style="color:white;font-size:1.5rem;font-weight:700;text-align:center">Two Ways to Handle Thoughts</h2>
                            </div>
                            
                            <div class="card" style="padding:1.5rem;margin-bottom:1rem;border:2px solid rgba(239,68,68,0.45);background:rgba(239,68,68,0.08)">
                                <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.25rem">
                                    <div style="font-size:2rem">❌</div>
                                    <div>
                                        <h3 style="color:rgb(248,113,113);font-weight:600;font-size:1.25rem">FIGHTER MODE</h3>
                                        <p style="color:rgb(252,165,165);font-size:0.875rem;font-weight:500">The painful default</p>
                                    </div>
                                </div>
                                
                                <div style="margin-bottom:1.25rem">
                                    ${['Anxious thought appears', '"Stop thinking that!"', 'Try to suppress it', 'Thought gets stronger', 'Fight harder', 'Exhaustion + overwhelm'].map((step, i) => `
                                        <div style="display:flex;gap:0.75rem;margin-bottom:1rem">
                                            <div style="width:1.75rem;height:1.75rem;background:rgba(239,68,68,0.25);border-radius:50%;display:flex;align-items:center;justify-content:center;color:rgb(248,113,113);font-size:0.8125rem;font-weight:700;flex-shrink:0">${i+1}</div>
                                            <p style="color:rgb(203,213,225);padding-top:0.125rem;font-size:1rem">${step}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <div class="card" style="padding:1.5rem;margin-bottom:1rem;border:2px solid rgba(34,197,94,0.45);background:rgba(34,197,94,0.08)">
                                <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.25rem">
                                    <div style="font-size:2rem">✅</div>
                                    <div>
                                        <h3 style="color:rgb(134,239,172);font-weight:600;font-size:1.25rem">OBSERVER MODE</h3>
                                        <p style="color:rgb(74,222,128);font-size:0.875rem;font-weight:500">The skillful choice</p>
                                    </div>
                                </div>
                                
                                <div style="margin-bottom:1.25rem">
                                    ${['Anxious thought appears', '"Hmm, there\'s anxiety"', 'Watch it like a cloud', 'It drifts and fades', 'Return to now', 'Calm + spacious'].map((step, i) => `
                                        <div style="display:flex;gap:0.75rem;margin-bottom:1rem">
                                            <div style="width:1.75rem;height:1.75rem;background:rgba(34,197,94,0.25);border-radius:50%;display:flex;align-items:center;justify-content:center;color:rgb(134,239,172);font-size:0.8125rem;font-weight:700;flex-shrink:0">${i+1}</div>
                                            <p style="color:rgb(203,213,225);padding-top:0.125rem;font-size:1rem">${step}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Practice Now',
                        content: `
                            <div class="card" style="padding:1.75rem;margin-bottom:1rem;background:linear-gradient(135deg,#0e7490,#d97706);">
                                <div style="font-size:3rem;margin-bottom:0.75rem;text-align:center">🧘</div>
                                <h2 style="color:white;font-size:1.5rem;font-weight:700;text-align:center;margin-bottom:0.5rem">Now, Try the Right Way</h2>
                                <p style="color:rgba(255,255,255,0.9);text-align:center;font-size:1rem">60 seconds of Observer Mode</p>
                            </div>
                            
                            <div class="card" style="padding:1.5rem;margin-bottom:1rem">
                                <h3 style="color:white;font-weight:600;margin-bottom:1.25rem;font-size:1.125rem">This time, DON'T fight:</h3>
                                <div style="line-height:1.7">
                                    <p style="color:white;margin-bottom:1.25rem;font-size:1.05rem">Instead of fighting thoughts, just <strong style="color:rgb(165,243,252)">label them</strong> like this:</p>
                                    
                                    <div style="background:rgba(14,116,144,0.12);padding:1rem;border-radius:0.75rem;margin-bottom:1rem;border-left:3px solid rgb(14,116,144)">
                                        <p style="color:rgb(165,243,252);font-size:1rem">"Planning thought"</p>
                                    </div>
                                    
                                    <div style="background:rgba(217,119,6,0.12);padding:1rem;border-radius:0.75rem;margin-bottom:1rem;border-left:3px solid rgb(217,119,6)">
                                        <p style="color:rgb(253,230,138);font-size:1rem">"Worry thought"</p>
                                    </div>
                                    
                                    <div style="background:rgba(94,234,212,0.12);padding:1rem;border-radius:0.75rem;margin-bottom:1.5rem;border-left:3px solid rgb(94,234,212)">
                                        <p style="color:rgb(165,243,252);font-size:1rem">"Memory thought"</p>
                                    </div>
                                    
                                    <p style="color:white;font-size:1.05rem;margin-bottom:1rem">Then... <strong>let it drift away</strong>.</p>
                                    <p style="color:rgb(148,163,184);font-size:1rem">Like clouds passing in the sky.</p>
                                </div>
                            </div>
                            
                            <div class="card" style="padding:2rem;margin-bottom:1rem;text-align:center;background:linear-gradient(135deg,rgba(14,116,144,0.08),rgba(217,119,6,0.08))">
                                <div style="font-size:4rem;font-weight:700;background:linear-gradient(to right,#0e7490,#d97706);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1rem">60</div>
                                <div style="min-height:3.5rem;display:flex;align-items:center;justify-content:center;margin-bottom:1.5rem">
                                    <p style="color:rgb(165,243,252);font-style:italic;font-size:1.05rem;font-weight:500">Find a comfortable position...</p>
                                </div>
                                <button onclick="startPracticeTimer(60)" style="width:100%;padding:1rem;border-radius:1rem;background:linear-gradient(to right,#0e7490,#d97706);color:white;font-weight:600;border:none;font-size:1.125rem;cursor:pointer">
                                    Begin Practice
                                </button>
                            </div>
                        `
                    },
                    {
                        title: 'Use It Today',
                        content: `
                            <div class="card" style="padding:1.75rem;margin-bottom:1rem;background:linear-gradient(135deg,#0e7490,#d97706);">
                                <div style="font-size:3rem;margin-bottom:0.75rem;text-align:center">🎯</div>
                                <h2 style="color:white;font-size:1.5rem;font-weight:700;text-align:center;margin-bottom:0.5rem">Use It in Real Life</h2>
                                <p style="color:rgba(255,255,255,0.9);text-align:center;font-size:1rem">Your mission for today</p>
                            </div>
                            
                            <div class="card" style="padding:1.75rem;margin-bottom:1rem;background:linear-gradient(to right,rgba(251,191,36,0.12),rgba(245,158,11,0.12));border:2px solid rgba(251,191,36,0.4)">
                                <div style="text-align:center;margin-bottom:1.5rem">
                                    <div style="font-size:3rem;margin-bottom:0.75rem">📋</div>
                                    <h3 style="color:white;font-weight:600;font-size:1.25rem;margin-bottom:1rem">Your One-Word Tool</h3>
                                    <p style="color:rgb(253,224,71);font-size:1.05rem;line-height:1.7">Every time you notice an emotion today, say one word:</p>
                                </div>
                                
                                <div style="background:rgba(255,255,255,0.12);padding:1.5rem;border-radius:1rem;text-align:center;margin-bottom:1rem;border:1px solid rgba(255,255,255,0.15)">
                                    <p style="color:white;font-size:1.75rem;font-weight:700">"Noticing"</p>
                                </div>
                                
                                <p style="color:rgb(253,224,71);text-align:center;font-size:1rem;font-style:italic">That's it. Just that one word.</p>
                            </div>
                        `
                    },
                    {
                        title: 'Your Practice Begins',
                        content: `
                            <div class="card" style="padding:2rem;margin-bottom:1rem;text-align:center;background:linear-gradient(135deg,rgba(14,116,144,0.1),rgba(217,119,6,0.07));border:1px solid rgba(14,116,144,0.25)">
                                <div style="font-size:4rem;margin-bottom:1rem">🌤️</div>
                                <h2 style="color:white;font-size:1.5rem;font-weight:600;margin-bottom:1rem">The Understanding You've Gained</h2>
                                
                                <div style="margin-bottom:1.5rem;text-align:left">
                                    ${[
                                        '• Fighting thoughts makes them stronger',
                                        '• Observing creates space and calm', 
                                        '• You are the sky, not the clouds',
                                        '• "Noticing" is your new mindfulness tool'
                                    ].map(item => `
                                        <div style="display:flex;gap:1rem;margin-bottom:1rem;align-items:start">
                                            <span style="color:rgb(134,239,172);font-weight:700;margin-top:0.125rem;flex-shrink:0">✓</span>
                                            <span style="color:rgb(203,213,225);font-size:1rem">${item}</span>
                                        </div>
                                    `).join('')}
                                </div>
                                
                                <div style="font-style:italic;color:rgb(226,232,240);line-height:1.7;padding:1.5rem;background:rgba(30,41,59,0.4);border-radius:1rem;border-left:3px solid rgba(14,116,144,0.4);margin:1.5rem 0">
                                    "Observing thoughts is like watching clouds — they appear, they drift, they dissolve. You remain."
                                </div>
                            </div>
                        `,
                        journalQuestions: [
                            "What was the biggest difference you felt between fighting your thoughts (the 30-second challenge) and simply noticing them?"
                        ]
                    }
                ]
            },
            {
                id: 'describe',
                name: 'DESCRIBE',
                icon: '📝',
                tagline: 'Facts over stories',
                description: 'Put words to what you observe using only facts, not interpretations.',
                practiceDuration: 30,
                practicePrompts: [
                    'Notice what you can see...',
                    'Describe the colors, shapes...',
                    'What sounds are present?...',
                    'Just the facts, no stories...',
                    'Pure observation...'
                ],
                steps: [
                    {
                        title: 'Facts vs Stories',
                        content: `
                            <div class="card" style="padding:2rem;margin-bottom:1rem">
                                <h2 style="color:white;font-size:1.75rem;font-weight:700;margin-bottom:1.5rem;text-align:center">
                                    The Stories We Tell
                                </h2>
                                
                                <div style="background:rgba(239,68,68,0.1);padding:1.5rem;border-radius:1rem;border-left:4px solid rgb(239,68,68);margin-bottom:1.5rem">
                                    <p style="color:rgb(248,113,113);font-weight:600;margin-bottom:0.75rem">❌ Story (Interpretation):</p>
                                    <p style="color:rgb(203,213,225);font-size:1.125rem">"I'm having a panic attack"</p>
                                </div>
                                
                                <div style="background:rgba(34,197,94,0.1);padding:1.5rem;border-radius:1rem;border-left:4px solid rgb(34,197,94)">
                                    <p style="color:rgb(134,239,172);font-weight:600;margin-bottom:0.75rem">✅ Fact (Observable):</p>
                                    <p style="color:rgb(203,213,225);font-size:1.125rem">"My heart is beating fast"</p>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                id: 'participate',
                name: 'PARTICIPATE',
                icon: '🌿',
                tagline: 'Be fully present',
                description: 'Engage completely in what you\'re doing. Drop self-consciousness.',
                practiceDuration: 30,
                practicePrompts: [
                    'Be here now...',
                    'No audience in your head...',
                    'Just this moment...',
                    'Fully engaged...',
                    'Complete participation...'
                ],
                steps: [
                    {
                        title: 'Half-There Living',
                        content: `
                            <div class="card" style="padding:2rem;margin-bottom:1rem;text-align:center">
                                <div style="font-size:3.5rem;margin-bottom:1rem">🤖</div>
                                <h2 style="color:white;font-size:1.75rem;font-weight:700;margin-bottom:1.5rem">
                                    The Autopilot Problem
                                </h2>
                                <p style="color:rgb(203,213,225);font-size:1.125rem;line-height:1.7;margin-bottom:1.5rem">
                                    You're physically here...<br/>
                                    But mentally somewhere else.
                                </p>
                                <p style="color:white;font-size:1.05rem;line-height:1.6">
                                    Eating without tasting.<br/>
                                    Walking without seeing.<br/>
                                    Talking without listening.<br/>
                                    Living without being alive.
                                </p>
                            </div>
                        `
                    }
                ]
            },
            {
                id: 'nonjudgment',
                name: 'NONJUDGE',
                icon: '⚖️',
                tagline: 'Drop the labels',
                description: 'Let go of evaluating things as good/bad, right/wrong.',
                practiceDuration: 30,
                practicePrompts: [
                    'No good, no bad...',
                    'Just what is...',
                    'Let go of evaluation...',
                    'Pure acceptance...',
                    'Just noticing...'
                ],
                steps: [
                    {
                        title: 'The Judgment Habit',
                        content: `
                            <div class="card" style="padding:2rem;margin-bottom:1rem">
                                <h2 style="color:white;font-size:1.75rem;font-weight:700;margin-bottom:1.5rem;text-align:center">
                                    Good vs Bad
                                </h2>
                                <p style="color:rgb(203,213,225);font-size:1.125rem;text-align:center">
                                    Our minds constantly judge everything we experience.
                                </p>
                            </div>
                        `
                    }
                ]
            },
            {
                id: 'onemindfully',
                name: 'ONE-MINDFULLY',
                icon: '🎯',
                tagline: 'One thing at a time',
                description: 'Focus on one thing completely. When your mind wanders, gently bring it back.',
                practiceDuration: 30,
                practicePrompts: [
                    'Just this one thing...',
                    'Full attention here...',
                    'When mind wanders, gently return...',
                    'One task, completely...',
                    'Deep focus...'
                ],
                steps: [
                    {
                        title: 'The Myth of Multitasking',
                        content: `
                            <div class="card" style="padding:2rem;margin-bottom:1rem">
                                <h2 style="color:white;font-size:1.75rem;font-weight:700;margin-bottom:1.5rem;text-align:center">
                                    Doing Everything, Being Nowhere
                                </h2>
                                <p style="color:rgb(203,213,225);font-size:1.125rem;text-align:center">
                                    True presence means doing one thing with your whole being.
                                </p>
                            </div>
                        `
                    }
                ]
            },
            {
                id: 'effectively',
                name: 'EFFECTIVELY',
                icon: '✅',
                tagline: 'Do what works',
                description: 'Focus on what actually works, not what should work or what feels fair.',
                practiceDuration: 30,
                practicePrompts: [
                    'What works, not what\'s right...',
                    'Practical solutions...',
                    'Let go of "should"...',
                    'Effective action...',
                    'Wise response...'
                ],
                steps: [
                    {
                        title: 'Being Right vs Being Effective',
                        content: `
                            <div class="card" style="padding:2rem;margin-bottom:1rem">
                                <h2 style="color:white;font-size:1.75rem;font-weight:700;margin-bottom:1.5rem;text-align:center">
                                    The Effectiveness Principle
                                </h2>
                                <p style="color:rgb(203,213,225);font-size:1.125rem;text-align:center">
                                    Sometimes being "right" doesn\'t help. What actually helps?
                                </p>
                            </div>
                        `
                    }
                ]
            },
            {
                id: 'checkin',
                name: 'CHECK-IN',
                icon: '🧠',
                tagline: 'Know your state',
                description: 'Pause and notice your current emotional, mental, and physical state.',
                practiceDuration: 30,
                practicePrompts: [
                    'Pause and notice...',
                    'What\'s here right now?...',
                    'Body sensations...',
                    'Emotions present...',
                    'Thoughts passing through...'
                ],
                steps: [
                    {
                        title: 'The Pause',
                        content: `
                            <div class="card" style="padding:2rem;margin-bottom:1rem">
                                <h2 style="color:white;font-size:1.75rem;font-weight:700;margin-bottom:1.5rem;text-align:center">
                                    The Power of Pausing
                                </h2>
                                <p style="color:rgb(203,213,225);font-size:1.125rem;text-align:center">
                                    You can\'t choose differently if you don\'t know where you are.
                                </p>
                            </div>
                        `
                    }
                ]
            }
        ]
    },
    {
        id: 'emotions',
        title: 'Emotions Regulation',
        description: 'Understand and work skillfully with your emotions',
        color: '#dc2626',
        icon: '💖',
        skills: [
            {
                id: 'identify',
                name: 'IDENTIFY',
                icon: '🎯',
                tagline: 'Name what you feel',
                description: 'Recognize and label emotions accurately.',
                practiceDuration: 30,
                practicePrompts: [
                    'What emotion is here?...',
                    'Name it gently...',
                    'Just noticing feelings...',
                    'Emotional weather check...'
                ],
                steps: []
            }
        ]
    },
    {
        id: 'communication',
        title: 'Communication',
        description: 'Build meaningful connections with others',
        color: '#0891b2',
        icon: '💬',
        skills: [
            {
                id: 'listen',
                name: 'LISTEN',
                icon: '👂',
                tagline: 'Truly hear others',
                description: 'Listen without preparing your response.',
                practiceDuration: 30,
                practicePrompts: [
                    'Just listening...',
                    'No mental commentary...',
                    'Pure reception...',
                    'Understanding first...'
                ],
                steps: []
            }
        ]
    }
];

// Helper function for timer in lessons
function startTimer(seconds) {
    // This function would be implemented in the main app
    console.log(`Timer started for ${seconds} seconds`);
}

function startPracticeTimer(duration) {
    // This function would be implemented in the main app
    console.log(`Practice timer started for ${duration} seconds`);
}
