export const decisionQuestions = [
    {
        id: 1,
        category: "🚦 Traffic Rules",
        description: "Let’s see how sharp you are on the road! 🚗💨",
        questions: [
            {
                id: 1,
                question: "You notice a car trying to overtake you. What’s the best move?",
                options: [
                    { text: "Speed up so they can’t pass", feedback: "😬 Not a safe idea! That could cause a risky situation." },
                    { text: "Slow down a little and let them go", feedback: "👍 Correct! Being calm and giving way keeps everyone safe." },
                    { text: "Honk loudly at them", feedback: "😅 Not really helpful unless there’s actual danger." },
                    { text: "Move to the middle of the road", feedback: "🚫 Nope! That just makes things more dangerous." }
                ]
            },
            {
                id: 2,
                question: "The traffic light just turned yellow. What should you do?",
                options: [
                    { text: "Step on the gas and rush through", feedback: "😵 Whoa, risky! That’s how accidents happen." },
                    { text: "Slow down and stop if it’s safe", feedback: "✅ Exactly! Yellow means get ready to stop, not speed up." },
                    { text: "Ignore it and keep driving", feedback: "🚫 That’s basically running a red light. Not cool." },
                    { text: "Turn on hazard lights and keep going", feedback: "🤔 That’s not what hazard lights are for. Save those for emergencies." }
                ]
            },
            {
                id: 3,
                question: "You’re at a stop sign with no other cars around. What should you do?",
                options: [
                    { text: "Roll through slowly", feedback: "🚫 Nope! A full stop is required, even if nobody’s there." },
                    { text: "Stop fully, then go when safe", feedback: "👍 Correct! That’s how you follow the rules properly." },
                    { text: "Ignore it since the road is empty", feedback: "😅 Not smart. Rules apply even if the road is empty." },
                    { text: "Honk and then drive through", feedback: "🙃 That’s not how stop signs work." }
                ]
            },
            {
                id: 4,
                question: "You see pedestrians waiting to cross at a zebra crossing. What do you do?",
                options: [
                    { text: "Slow down and let them cross", feedback: "👏 Yes! Pedestrians always get the right of way." },
                    { text: "Speed past before they step onto the road", feedback: "😬 Dangerous! Always give way." },
                    { text: "Stop only if they’ve already stepped on the road", feedback: "🤔 Not enough. You should stop as soon as they’re about to cross." },
                    { text: "Flash your headlights to tell them to wait", feedback: "🚫 That’s not how it works. Let them go first." }
                ]
            },
            {
                id: 5,
                question: "When driving in heavy rain, what should you do?",
                options: [
                    { text: "Turn on high beam headlights", feedback: "🚫 Nope! High beams make it harder for others to see." },
                    { text: "Turn on low beam headlights", feedback: "👌 Correct! Low beams help visibility without blinding others." },
                    { text: "Drive faster to get home sooner", feedback: "😅 That’s risky. Wet roads need more caution, not speed." },
                    { text: "Turn off your lights completely", feedback: "😬 Definitely unsafe! Others won’t see you." }
                ]
            },
            {
                id: 6,
                question: "You’re approaching a school zone. What should you do?",
                options: [
                    { text: "Maintain your current speed", feedback: "🚫 Too fast! Kids may suddenly cross the road." },
                    { text: "Slow down and stay alert", feedback: "👏 Correct! Safety comes first in school zones." },
                    { text: "Honk to warn kids", feedback: "😅 Not really necessary unless there’s danger." },
                    { text: "Switch lanes quickly", feedback: "🙃 Not a good move. Stay in control, not unpredictable." }
                ]
            },
            {
                id: 7,
                question: "What’s the safe following distance between you and the car in front?",
                options: [
                    { text: "One car length", feedback: "😬 Too close. You’ll have no time to react." },
                    { text: "Two seconds behind", feedback: "👍 Correct! The 2-second rule keeps you safe." },
                    { text: "As close as possible to save time", feedback: "🚫 That’s tailgating and dangerous." },
                    { text: "Five meters, no matter the speed", feedback: "🤔 Not reliable. Distance depends on speed." }
                ]
            },
            {
                id: 8,
                question: "You hear a siren and see flashing lights behind you. What’s the right move?",
                options: [
                    { text: "Speed up to get out of the way", feedback: "🚫 Not safe! You may block them further." },
                    { text: "Pull over safely to the side", feedback: "👏 Yes! Always give way to emergency vehicles." },
                    { text: "Stop immediately in the middle of the road", feedback: "😅 Not safe. Pull over, don’t block traffic." },
                    { text: "Ignore and continue driving", feedback: "🚫 Not acceptable. Emergency vehicles always get priority." }
                ]
            },
            {
                id: 9,
                question: "You’re entering a roundabout. Who has the right of way?",
                options: [
                    { text: "Cars already in the roundabout", feedback: "👍 Correct! Yield to cars already inside." },
                    { text: "Cars entering at the same time", feedback: "🚫 Nope. They wait for those inside." },
                    { text: "Whoever honks first", feedback: "😅 That’s not how rules work." },
                    { text: "Bigger vehicles like trucks", feedback: "🤔 Not always. Rules are the same for all." }
                ]
            },
            {
                id: 10,
                question: "You’re driving at night and another car approaches with high beams on. What should you do?",
                options: [
                    { text: "Flash your lights briefly", feedback: "👌 Correct! That signals them to lower their beams." },
                    { text: "Turn on your high beams too", feedback: "😬 That just blinds both of you." },
                    { text: "Close your eyes briefly", feedback: "🚫 Very unsafe!" },
                    { text: "Drive faster to pass them quickly", feedback: "🤔 Not smart. Stay safe, don’t speed." }
                ]
            },
            {
                id: 11,
                question: "What should you do when driving through fog?",
                options: [
                    { text: "Use high beams", feedback: "🚫 Nope! High beams reflect back and blind you." },
                    { text: "Use fog lights or low beams", feedback: "👍 Correct! That’s the safest choice." },
                    { text: "Drive super fast to get through quicker", feedback: "😅 That’s dangerous in low visibility." },
                    { text: "Turn off lights to save battery", feedback: "🚫 Not at all safe." }
                ]
            },
            {
                id: 12,
                question: "At a railway crossing with no barrier, what should you do?",
                options: [
                    { text: "Stop, look both ways, then cross", feedback: "👏 Yes! Always double-check before crossing." },
                    { text: "Drive straight through if no train is visible", feedback: "😬 Risky. Always stop first." },
                    { text: "Honk and keep driving", feedback: "🙃 That won’t stop a train." },
                    { text: "Wait until another car crosses safely", feedback: "🤔 Not reliable. You need to check yourself." }
                ]
            },
            {
                id: 13,
                question: "When should you use your turn signal?",
                options: [
                    { text: "Only when someone’s behind you", feedback: "😅 Not enough. Always signal before turning." },
                    { text: "Every time you turn or change lanes", feedback: "👏 Correct! Signals help everyone stay safe." },
                    { text: "Only at night", feedback: "🚫 Nope! Daytime turns need signals too." },
                    { text: "Never, it’s optional", feedback: "😬 That’s not true. It’s mandatory." }
                ]
            },
            {
                id: 14,
                question: "If you’re drowsy while driving, what should you do?",
                options: [
                    { text: "Drink coffee and push through", feedback: "😅 Might help briefly, but still risky." },
                    { text: "Pull over and rest", feedback: "👏 Best choice! Safety first." },
                    { text: "Roll down the window for fresh air", feedback: "🤔 Helps a little, but doesn’t fix drowsiness." },
                    { text: "Blast loud music", feedback: "🙃 That won’t stop you from dozing off." }
                ]
            },
            {
                id: 15,
                question: "You’re driving in a residential area and see a ball roll onto the road. What should you expect?",
                options: [
                    { text: "A child might run after it", feedback: "👏 Yes! Always be ready to stop immediately." },
                    { text: "It’s just a ball, keep driving", feedback: "🚫 Nope! Safety first, always expect someone chasing it." },
                    { text: "Honk and speed past", feedback: "😬 Dangerous move." },
                    { text: "Ignore it, it won’t matter", feedback: "🚫 Not safe at all." }
                ]
            },
            {
                id: 16,
                question: "What’s the correct hand position on the steering wheel?",
                options: [
                    { text: "10 and 2 o’clock", feedback: "👍 Traditional method, but…" },
                    { text: "9 and 3 o’clock", feedback: "👏 Correct! Safer with airbags." },
                    { text: "One hand at 12 o’clock", feedback: "😅 Not stable or safe." },
                    { text: "Whichever feels comfy", feedback: "🚫 Not recommended for safety." }
                ]
            },
            {
                id: 17,
                question: "When should you overtake another vehicle?",
                options: [
                    { text: "On curves and blind spots", feedback: "🚫 Too dangerous! Never there." },
                    { text: "When the road markings allow and it’s safe", feedback: "👏 Exactly! Safety and rules first." },
                    { text: "Whenever you feel like", feedback: "😅 Not smart or safe." },
                    { text: "In heavy traffic jams", feedback: "🤔 Not possible or safe." }
                ]
            },
            {
                id: 18,
                question: "What should you do if your tire bursts while driving?",
                options: [
                    { text: "Brake hard immediately", feedback: "🚫 Not safe! That can cause skidding." },
                    { text: "Hold steering firm, slow down gradually", feedback: "👏 Correct! Stay calm and controlled." },
                    { text: "Accelerate quickly", feedback: "😅 That makes it worse." },
                    { text: "Jump out of the car", feedback: "🙃 Definitely not!" }
                ]
            },
            {
                id: 19,
                question: "When should you use your car’s horn?",
                options: [
                    { text: "To greet a friend", feedback: "😅 Not the purpose of a horn." },
                    { text: "Only to warn of danger", feedback: "👏 Correct! Horns are for safety, not noise." },
                    { text: "Whenever you’re frustrated", feedback: "🚫 Nope! That just adds stress." },
                    { text: "At traffic lights to hurry others", feedback: "🙃 Not polite or safe." }
                ]
            },
            {
                id: 20,
                question: "If you miss your highway exit, what’s the safest thing to do?",
                options: [
                    { text: "Reverse back on the highway", feedback: "🚫 Super dangerous!" },
                    { text: "Stop and wait for a gap", feedback: "😬 Not safe at all." },
                    { text: "Take the next exit", feedback: "👏 Correct! Always take the next safe turn." },
                    { text: "Make a U-turn immediately", feedback: "🙃 Highways aren’t made for U-turns." }
                ]
            }
        ]
    },
    {
        id: 2,
        category: "🧠 Behavioral Decisions",
        description: "Everyday choices that show how you think, react, and connect with others 🤝",
        questions: [
            {
                id: 1,
                question: "A colleague takes credit for your idea in a meeting. How do you respond?",
                options: [
                    { text: "Confront them angrily in front of everyone", feedback: "😬 That might escalate things unnecessarily." },
                    { text: "Stay quiet and let it go", feedback: "🤔 Not the best. Your contributions matter." },
                    { text: "Politely clarify that it was your idea", feedback: "👏 Perfect! Assertive but respectful." },
                    { text: "Report them to HR right away", feedback: "😅 Maybe later, but first try handling it directly." }
                ]
            },
            {
                id: 2,
                question: "You’re running late for a meeting because of traffic. What do you do?",
                options: [
                    { text: "Say nothing and arrive late", feedback: "🙃 That’s not professional." },
                    { text: "Call ahead and let them know", feedback: "👍 Yes! Communication shows respect for others’ time." },
                    { text: "Blame traffic as soon as you arrive", feedback: "😅 Excuses don’t make a good impression." },
                    { text: "Cancel the meeting completely", feedback: "😬 Way too extreme." }
                ]
            },
            {
                id: 3,
                question: "Your friend seems upset but hasn’t said anything. What should you do?",
                options: [
                    { text: "Ignore it and hope it passes", feedback: "😬 Not very supportive." },
                    { text: "Check in gently and ask if they’re okay", feedback: "💙 Correct! Showing care matters." },
                    { text: "Make jokes about their mood", feedback: "😅 Might make it worse." },
                    { text: "Tell them to toughen up", feedback: "🚫 That’s not empathetic." }
                ]
            },
            {
                id: 4,
                question: "You made a mistake at work. What’s the best reaction?",
                options: [
                    { text: "Deny it and blame someone else", feedback: "🚫 That damages trust." },
                    { text: "Admit it, fix it, and learn from it", feedback: "👏 Yes! That builds respect and growth." },
                    { text: "Hide it and hope nobody notices", feedback: "😬 Risky and dishonest." },
                    { text: "Quit immediately", feedback: "🤔 Too extreme. Everyone makes mistakes." }
                ]
            },
            {
                id: 5,
                question: "A team member is struggling with their workload. What should you do?",
                options: [
                    { text: "Offer to help or share tips", feedback: "👏 Correct! Teamwork makes the dream work." },
                    { text: "Laugh at their struggle", feedback: "🚫 Definitely not kind." },
                    { text: "Ignore it, not your problem", feedback: "😬 That’s not collaborative." },
                    { text: "Report them to the boss immediately", feedback: "🤔 Maybe later, but first offer support." }
                ]
            },
            {
                id: 6,
                question: "Someone cuts in front of you in a queue. How do you react?",
                options: [
                    { text: "Yell at them angrily", feedback: "😬 That just escalates things." },
                    { text: "Politely point out the line", feedback: "👍 Assertive but respectful." },
                    { text: "Let it slide if it’s not a big deal", feedback: "👌 Sometimes choosing peace is okay too." },
                    { text: "Push them back physically", feedback: "🚫 That’s aggressive." }
                ]
            },
            {
                id: 7,
                question: "You get negative feedback from your manager. What’s the best response?",
                options: [
                    { text: "Get defensive and argue", feedback: "😬 That closes the door to improvement." },
                    { text: "Listen, reflect, and ask how to improve", feedback: "👏 Great! That shows maturity." },
                    { text: "Ignore it and keep doing the same thing", feedback: "🚫 That’s not growth." },
                    { text: "Complain about it to colleagues", feedback: "😅 Gossip won’t help." }
                ]
            },
            {
                id: 8,
                question: "You’re feeling overwhelmed with tasks. What should you do?",
                options: [
                    { text: "Push through silently and burn out", feedback: "😬 Not sustainable." },
                    { text: "Prioritize and ask for help", feedback: "👏 Smart! That’s effective time management." },
                    { text: "Quit everything immediately", feedback: "😅 Too drastic." },
                    { text: "Scroll on your phone instead", feedback: "🙃 Not the best way to handle it." }
                ]
            },
            {
                id: 9,
                question: "Your friend forgot your birthday. How do you feel/respond?",
                options: [
                    { text: "End the friendship immediately", feedback: "😬 That’s extreme." },
                    { text: "Mention it jokingly but kindly", feedback: "👏 Good choice! Keeps it lighthearted." },
                    { text: "Stay upset and silent", feedback: "🤔 That might harm the friendship." },
                    { text: "Post angry rants online", feedback: "🚫 Not mature." }
                ]
            },
            {
                id: 10,
                question: "Someone gives you constructive criticism. What’s the right mindset?",
                options: [
                    { text: "See it as an attack", feedback: "😬 That blocks growth." },
                    { text: "Thank them and improve", feedback: "👏 Correct! Feedback = growth." },
                    { text: "Ignore it completely", feedback: "🚫 Missed opportunity." },
                    { text: "Feel sad and unworthy", feedback: "🤔 That’s too negative." }
                ]
            },
            {
                id: 11,
                question: "A stranger needs directions, but you’re in a rush. What do you do?",
                options: [
                    { text: "Help quickly if possible", feedback: "👏 Yes! Kindness doesn’t take long." },
                    { text: "Ignore them rudely", feedback: "😬 Not necessary." },
                    { text: "Give wrong directions for fun", feedback: "🚫 Very unkind." },
                    { text: "Say sorry and explain you’re in a rush", feedback: "👌 Polite and honest if you can’t help." }
                ]
            },
            {
                id: 12,
                question: "You see someone being bullied. What should you do?",
                options: [
                    { text: "Join the bully", feedback: "🚫 Never okay!" },
                    { text: "Ignore it and walk away", feedback: "😬 That’s not supportive." },
                    { text: "Stand up for the person or get help", feedback: "👏 Correct! Be an ally." },
                    { text: "Record it for social media", feedback: "🚫 That’s not helpful." }
                ]
            },
            {
                id: 13,
                question: "You get invited to a party but feel tired. What do you do?",
                options: [
                    { text: "Force yourself to go anyway", feedback: "🤔 Might drain you more." },
                    { text: "Say no politely and rest", feedback: "👏 Listening to your body is smart." },
                    { text: "Say nothing and just don’t show up", feedback: "😬 That’s rude." },
                    { text: "Lie with an excuse", feedback: "🙃 Not honest." }
                ]
            },
            {
                id: 14,
                question: "A cashier gives you extra change by mistake. What should you do?",
                options: [
                    { text: "Keep it quietly", feedback: "🚫 That’s dishonest." },
                    { text: "Return it immediately", feedback: "👏 Correct! Integrity counts." },
                    { text: "Tell a friend and laugh about it", feedback: "🙃 Not great." },
                    { text: "Ignore it completely", feedback: "😬 Not ethical." }
                ]
            },
            {
                id: 15,
                question: "Your teammate is always late to meetings. What’s your best move?",
                options: [
                    { text: "Yell at them in front of everyone", feedback: "🚫 That embarrasses them." },
                    { text: "Have a private chat", feedback: "👏 Good choice! Respectful and direct." },
                    { text: "Ignore it forever", feedback: "😅 That won’t solve anything." },
                    { text: "Complain secretly to the boss", feedback: "🤔 Better to talk first." }
                ]
            },
            {
                id: 16,
                question: "Your close friend cancels plans last minute. What’s a good reaction?",
                options: [
                    { text: "Get really mad and block them", feedback: "😬 Too extreme." },
                    { text: "Be flexible and reschedule", feedback: "👏 Correct! Life happens." },
                    { text: "Never make plans again", feedback: "😅 That’s over the top." },
                    { text: "Complain about them to others", feedback: "🚫 That’s gossip." }
                ]
            },
            {
                id: 17,
                question: "You see a coworker breaking a small office rule (like eating at desk). What should you do?",
                options: [
                    { text: "Snitch immediately to the boss", feedback: "😬 That’s unnecessary for small things." },
                    { text: "Mind your own business", feedback: "👏 Correct! Not everything needs policing." },
                    { text: "Join them in breaking the rule", feedback: "🙃 Not ideal." },
                    { text: "Lecture them loudly", feedback: "🚫 Not respectful." }
                ]
            },
            {
                id: 18,
                question: "Your friend shares a personal problem with you. What’s the right approach?",
                options: [
                    { text: "Listen patiently and support", feedback: "👏 Yes! Sometimes listening is enough." },
                    { text: "Change the subject quickly", feedback: "😬 That’s dismissive." },
                    { text: "Tell everyone about it", feedback: "🚫 Breaking trust is never okay." },
                    { text: "Say ‘just get over it’", feedback: "🙃 Not empathetic." }
                ]
            },
            {
                id: 19,
                question: "You’re assigned to work with someone you dislike. What’s the best mindset?",
                options: [
                    { text: "Complain constantly", feedback: "🚫 Not productive." },
                    { text: "Stay professional and cooperate", feedback: "👏 Correct! Focus on the work." },
                    { text: "Ignore them completely", feedback: "😬 That’s awkward." },
                    { text: "Sabotage the project", feedback: "🚫 Definitely wrong." }
                ]
            },
            {
                id: 20,
                question: "You overhear gossip about a coworker. What’s a good move?",
                options: [
                    { text: "Join the gossip", feedback: "🚫 That spreads negativity." },
                    { text: "Ignore and walk away", feedback: "👏 Correct! Don’t fuel rumors." },
                    { text: "Spread it further", feedback: "😬 Definitely not good." },
                    { text: "Confront everyone aggressively", feedback: "🤔 Not necessary." }
                ]
            },
            {
                id: 21,
                question: "Your sibling borrows your stuff without asking. How do you react?",
                options: [
                    { text: "Yell at them angrily", feedback: "😬 Might escalate." },
                    { text: "Talk calmly about boundaries", feedback: "👏 Correct! Communication works." },
                    { text: "Hide all your things forever", feedback: "😅 A bit too much." },
                    { text: "Take their things in revenge", feedback: "🚫 Not the best solution." }
                ]
            },
            {
                id: 22,
                question: "A waiter brings you the wrong order at a restaurant. What should you do?",
                options: [
                    { text: "Yell at them angrily", feedback: "🚫 Not kind." },
                    { text: "Politely explain the mistake", feedback: "👏 Correct! Respect goes a long way." },
                    { text: "Eat it anyway unhappily", feedback: "🤔 You deserve what you ordered." },
                    { text: "Refuse to pay and storm out", feedback: "😬 Too extreme." }
                ]
            },
            {
                id: 23,
                question: "You lend money to a friend and they don’t return it. What’s a good response?",
                options: [
                    { text: "Cut them off immediately", feedback: "😬 Too harsh." },
                    { text: "Remind them politely", feedback: "👏 Correct! Gentle honesty helps." },
                    { text: "Post about it online", feedback: "😅 Not the best way." },
                    { text: "Never lend money again", feedback: "🤔 Not always necessary." }
                ]
            },
            {
                id: 24,
                question: "Your boss praises someone else for work you did. How do you react?",
                options: [
                    { text: "Correct them politely", feedback: "👏 Good move! Speak up respectfully." },
                    { text: "Stay silent and feel bitter", feedback: "😬 Not helpful." },
                    { text: "Complain to colleagues behind their back", feedback: "🚫 Gossip doesn’t help." },
                    { text: "Quit your job immediately", feedback: "😅 Too extreme." }
                ]
            },
            {
                id: 25,
                question: "You accidentally spill coffee on someone’s shirt. What should you do?",
                options: [
                    { text: "Apologize and offer help", feedback: "👏 Correct! Accidents happen, kindness fixes it." },
                    { text: "Run away quickly", feedback: "😬 Not responsible." },
                    { text: "Laugh about it", feedback: "🚫 Not respectful." },
                    { text: "Blame them for standing there", feedback: "🤔 That’s unfair." }
                ]
            },
            {
                id: 26,
                question: "Your group project member isn’t contributing. What do you do?",
                options: [
                    { text: "Do all the work silently", feedback: "😬 Unfair to you." },
                    { text: "Talk to them and set expectations", feedback: "👏 Correct! Communication first." },
                    { text: "Tell the teacher/boss immediately", feedback: "🤔 Try talking first." },
                    { text: "Exclude them completely", feedback: "🚫 Not collaborative." }
                ]
            },
            {
                id: 27,
                question: "Your neighbor plays loud music at night. How should you handle it?",
                options: [
                    { text: "Bang on their door angrily", feedback: "😬 That could escalate." },
                    { text: "Ask politely to lower the volume", feedback: "👏 Correct! Respectful approach first." },
                    { text: "Blast your own music louder", feedback: "🚫 That just makes it worse." },
                    { text: "Call authorities right away", feedback: "🤔 Try talking first unless it’s constant." }
                ]
            },
            {
                id: 28,
                question: "You forgot an important deadline. What should you do?",
                options: [
                    { text: "Hide it and hope nobody notices", feedback: "😬 Not wise." },
                    { text: "Admit it, apologize, and fix it", feedback: "👏 Correct! Honesty and action matter." },
                    { text: "Blame others for distracting you", feedback: "🚫 Not responsible." },
                    { text: "Pretend it wasn’t important", feedback: "😅 That won’t work." }
                ]
            },
            {
                id: 29,
                question: "Your friend disagrees with you strongly. What’s a healthy response?",
                options: [
                    { text: "Yell and argue louder", feedback: "🚫 Not constructive." },
                    { text: "Listen and respect their view", feedback: "👏 Correct! Differences are normal." },
                    { text: "End the friendship immediately", feedback: "😬 Too extreme." },
                    { text: "Ignore them forever", feedback: "🤔 Not healthy communication." }
                ]
            },
            {
                id: 30,
                question: "You see someone drop their wallet. What should you do?",
                options: [
                    { text: "Keep it quietly", feedback: "🚫 That’s stealing." },
                    { text: "Return it to them", feedback: "👏 Correct! Honesty always wins." },
                    { text: "Take the cash and leave the wallet", feedback: "😬 Still wrong." },
                    { text: "Ignore it completely", feedback: "🤔 Not the best choice." }
                ]
            }
        ]
    },
    {
        id: 3,
        category: "🎓 Student Life",
        description: "Decisions every student faces — from studies to friendships to exams! 📚✏️",
        questions: [
            {
                id: 1,
                question: "You have an exam tomorrow but your friends invite you to a late-night movie. What do you do?",
                options: [
                    { text: "Go to the movie and study later", feedback: "😅 Fun now, stress later — risky choice!" },
                    { text: "Politely say no and revise", feedback: "✅ Smart! Priorities first, fun later." },
                    { text: "Go for a short time and leave early", feedback: "🙂 Balanced, but you might still lose focus." },
                    { text: "Ignore studying completely", feedback: "🚫 Dangerous move — exams don’t forgive!" }
                ]
            },
            {
                id: 2,
                question: "A classmate asks for your notes but they never share theirs. What will you do?",
                options: [
                    { text: "Keep sharing anyway", feedback: "💙 Kind of you, but don’t let it be one-sided forever." },
                    { text: "Say no because they don’t share", feedback: "😐 Fair, but maybe explain your reason politely." },
                    { text: "Ask them to exchange notes this time", feedback: "✅ Perfect! Mutual support works best." },
                    { text: "Complain to the teacher", feedback: "😅 Might be extreme unless it’s a big issue." }
                ]
            },
            {
                id: 3,
                question: "You forgot your homework and the teacher asks for it. What’s your response?",
                options: [
                    { text: "Make an excuse", feedback: "🚫 Not great — honesty usually works better." },
                    { text: "Admit you forgot and apologize", feedback: "✅ Honest and responsible answer!" },
                    { text: "Blame a classmate", feedback: "😓 Not cool, it could hurt your reputation." },
                    { text: "Stay silent", feedback: "😅 Awkward — honesty is still the better move." }
                ]
            },
            {
                id: 4,
                question: "Your friend is being bullied in school. What do you do?",
                options: [
                    { text: "Stand up for them", feedback: "✅ Brave and supportive choice!" },
                    { text: "Tell a teacher", feedback: "👍 Good — adults can help resolve it." },
                    { text: "Stay quiet", feedback: "😔 Not ideal, silence can make it worse." },
                    { text: "Join the bullies", feedback: "🚫 Absolutely wrong — don’t add to the harm." }
                ]
            },
            {
                id: 5,
                question: "You’re feeling sleepy in class. What’s your move?",
                options: [
                    { text: "Doze off on the desk", feedback: "😅 Tempting, but you’ll miss important stuff." },
                    { text: "Drink some water and sit upright", feedback: "✅ Good — small things help you stay alert." },
                    { text: "Scroll your phone secretly", feedback: "🚫 Bad idea, you’ll get distracted (and caught)." },
                    { text: "Ask permission for a short break", feedback: "👍 Smart — stretching helps." }
                ]
            },
            {
                id: 6,
                question: "A group project is due soon but your team isn’t helping. What do you do?",
                options: [
                    { text: "Do all the work alone", feedback: "😔 Noble, but unfair on you." },
                    { text: "Talk to the team and divide tasks", feedback: "✅ Best! Communication solves most issues." },
                    { text: "Complain to the teacher immediately", feedback: "🙂 Could help, but try solving it first." },
                    { text: "Ignore the project", feedback: "🚫 Not a wise move — grades matter!" }
                ]
            },
            {
                id: 7,
                question: "You studied hard but still scored low. What’s your reaction?",
                options: [
                    { text: "Give up completely", feedback: "😢 Don’t quit — one test doesn’t define you." },
                    { text: "Figure out what went wrong", feedback: "✅ Smart — learning from mistakes helps growth." },
                    { text: "Blame the teacher", feedback: "🚫 Not productive, focus on yourself." },
                    { text: "Compare yourself harshly to toppers", feedback: "😕 Comparing too much only adds stress." }
                ]
            },
            {
                id: 8,
                question: "Your best friend skips class. They ask you to cover for them. What do you do?",
                options: [
                    { text: "Lie to the teacher", feedback: "😬 Risky, and honesty matters more." },
                    { text: "Tell them you can’t cover lies", feedback: "✅ Honest and responsible choice." },
                    { text: "Cover once but warn them", feedback: "🙂 Balanced, but don’t make it a habit." },
                    { text: "Ignore their request completely", feedback: "😅 Might hurt your friendship." }
                ]
            },
            {
                id: 9,
                question: "You see someone cheating in an exam. What’s your response?",
                options: [
                    { text: "Join them", feedback: "🚫 Wrong — cheating helps no one." },
                    { text: "Ignore it", feedback: "😕 Neutral, but it doesn’t solve the problem." },
                    { text: "Tell the teacher", feedback: "✅ Honest, though it may upset classmates." },
                    { text: "Confront them quietly", feedback: "👍 Good — it shows courage." }
                ]
            },
            {
                id: 10,
                question: "You forgot to bring lunch. What’s your plan?",
                options: [
                    { text: "Borrow money to buy food", feedback: "🙂 Okay, but remember to repay." },
                    { text: "Ask a friend to share", feedback: "✅ Sharing is caring!" },
                    { text: "Skip lunch", feedback: "😔 Not healthy, you need energy." },
                    { text: "Sneak food from someone’s bag", feedback: "🚫 Not acceptable — that’s stealing." }
                ]
            },
            {
                id: 11,
                question: "You’re running late for class. Do you…?",
                options: [
                    { text: "Rush and disturb the class", feedback: "😬 Distracts everyone." },
                    { text: "Enter quietly and apologize", feedback: "✅ Respectful and mature choice." },
                    { text: "Skip class entirely", feedback: "😕 One missed class adds up quickly." },
                    { text: "Make an excuse later", feedback: "🚫 Excuses pile up fast." }
                ]
            },
            {
                id: 12,
                question: "You have to give a presentation. You feel nervous. What do you do?",
                options: [
                    { text: "Avoid presenting", feedback: "😔 Won’t help you improve." },
                    { text: "Practice and prepare well", feedback: "✅ Best! Preparation builds confidence." },
                    { text: "Copy someone else’s slides", feedback: "🚫 Dishonest and risky." },
                    { text: "Ask a friend to present for you", feedback: "😅 You’ll miss a growth opportunity." }
                ]
            },
            {
                id: 13,
                question: "A classmate always disturbs the teacher. How do you react?",
                options: [
                    { text: "Laugh along", feedback: "😅 Fun maybe, but disrespectful." },
                    { text: "Tell them to stop politely", feedback: "✅ Good! Respect for the class matters." },
                    { text: "Complain to the teacher", feedback: "🙂 Works, but might hurt your friendship." },
                    { text: "Ignore it", feedback: "😕 Silence doesn’t fix the issue." }
                ]
            },
            {
                id: 14,
                question: "Your parents ask you to study but you want to play. What do you choose?",
                options: [
                    { text: "Play first, study later", feedback: "😅 Fun, but you risk losing focus." },
                    { text: "Study first, then play", feedback: "✅ Perfect balance!" },
                    { text: "Do both at the same time", feedback: "😬 Divided attention doesn’t work well." },
                    { text: "Ignore studying completely", feedback: "🚫 Not a good long-term move." }
                ]
            },
            {
                id: 15,
                question: "You forgot your school supplies. What do you do?",
                options: [
                    { text: "Borrow politely from a classmate", feedback: "✅ Nice, but don’t forget to return!" },
                    { text: "Sit idle and do nothing", feedback: "😕 Wastes learning time." },
                    { text: "Blame someone for losing it", feedback: "🚫 Not fair at all." },
                    { text: "Ask teacher for help", feedback: "👍 Teachers usually understand." }
                ]
            },
            {
                id: 16,
                question: "You have two assignments due the same day. How do you handle it?",
                options: [
                    { text: "Do one and skip the other", feedback: "😕 Not ideal, both matter." },
                    { text: "Manage time and finish both", feedback: "✅ Best — time management saves you!" },
                    { text: "Copy one from a friend", feedback: "🚫 That’s dishonest." },
                    { text: "Ask teacher for an extension", feedback: "👍 Works if you genuinely need it." }
                ]
            },
            {
                id: 17,
                question: "Your teacher praises another student a lot. What do you feel?",
                options: [
                    { text: "Get jealous", feedback: "😔 Comparison only hurts you." },
                    { text: "Feel motivated to do better", feedback: "✅ Great mindset!" },
                    { text: "Ignore it", feedback: "🙂 Neutral but not inspiring." },
                    { text: "Complain it’s unfair", feedback: "🚫 Not the best response." }
                ]
            },
            {
                id: 18,
                question: "A friend asks for answers during a test. What do you do?",
                options: [
                    { text: "Share your paper", feedback: "🚫 Risky for both of you." },
                    { text: "Refuse politely", feedback: "✅ Honest and right choice." },
                    { text: "Give one or two answers", feedback: "😕 Still cheating." },
                    { text: "Distract the teacher for them", feedback: "🚫 That makes it worse." }
                ]
            },
            {
                id: 19,
                question: "You’re struggling in a subject. What’s your move?",
                options: [
                    { text: "Give up entirely", feedback: "😢 Don’t quit — you can improve." },
                    { text: "Ask teacher for extra help", feedback: "✅ Smart and proactive." },
                    { text: "Rely only on friends’ notes", feedback: "😕 Might not be enough." },
                    { text: "Search YouTube/online resources", feedback: "👍 Great way to learn differently." }
                ]
            },
            {
                id: 20,
                question: "You’re asked to join a new club in school. What do you do?",
                options: [
                    { text: "Say no without trying", feedback: "😕 You might miss a chance." },
                    { text: "Join and explore", feedback: "✅ Good! You may find new interests." },
                    { text: "Join only because friends are in it", feedback: "🙂 Okay, but do it for yourself too." },
                    { text: "Ignore completely", feedback: "😔 Missed opportunity to grow." }
                ]
            },
            {
                id: 21,
                question: "Your teacher makes a mistake while teaching. What do you do?",
                options: [
                    { text: "Correct them politely", feedback: "✅ Respectful and helpful!" },
                    { text: "Laugh with classmates", feedback: "😬 Disrespectful." },
                    { text: "Ignore it", feedback: "🙂 Okay, but missed chance to clarify." },
                    { text: "Tell them later privately", feedback: "👍 Great — saves embarrassment." }
                ]
            },
            {
                id: 22,
                question: "Your school announces a surprise test. How do you react?",
                options: [
                    { text: "Panic", feedback: "😬 Not helpful at all." },
                    { text: "Stay calm and write what you know", feedback: "✅ Best approach!" },
                    { text: "Complain it’s unfair", feedback: "😕 Doesn’t change the situation." },
                    { text: "Try to cheat", feedback: "🚫 Wrong path." }
                ]
            },
            {
                id: 23,
                question: "You have free time in school. What do you do?",
                options: [
                    { text: "Play games", feedback: "🙂 Fun, but use time wisely." },
                    { text: "Revise or finish homework", feedback: "✅ Smart use of time." },
                    { text: "Gossip with friends", feedback: "😅 Fun, but not productive." },
                    { text: "Sit quietly and relax", feedback: "👍 Rest is also important sometimes." }
                ]
            },
            {
                id: 24,
                question: "You’re asked to represent your class in a competition. What do you do?",
                options: [
                    { text: "Say yes confidently", feedback: "✅ Great! Shows leadership." },
                    { text: "Say no out of fear", feedback: "😢 Missed growth opportunity." },
                    { text: "Accept only if a friend joins", feedback: "🙂 Okay, but be confident solo too." },
                    { text: "Run away from responsibility", feedback: "🚫 Not ideal." }
                ]
            },
            {
                id: 25,
                question: "Your phone rings in class. How do you handle it?",
                options: [
                    { text: "Answer quickly", feedback: "🚫 Not respectful." },
                    { text: "Turn it off silently", feedback: "✅ Perfect response!" },
                    { text: "Ignore it and let it ring", feedback: "😬 Disturbs everyone." },
                    { text: "Blame someone else", feedback: "🚫 Dishonest." }
                ]
            },
            {
                id: 26,
                question: "You see a new student looking lost. What do you do?",
                options: [
                    { text: "Ignore them", feedback: "😔 Not kind." },
                    { text: "Help them find their way", feedback: "✅ Lovely gesture!" },
                    { text: "Make fun of them", feedback: "🚫 Hurtful and wrong." },
                    { text: "Wait for someone else to help", feedback: "🙂 But you could step up." }
                ]
            },
            {
                id: 27,
                question: "You have to choose between sports day or a debate competition. What do you pick?",
                options: [
                    { text: "Sports day", feedback: "✅ Great if you love athletics!" },
                    { text: "Debate competition", feedback: "✅ Awesome if you love speaking." },
                    { text: "Skip both", feedback: "😕 Missed chance." },
                    { text: "Wait for friends to decide", feedback: "🙂 Okay, but follow your own interest too." }
                ]
            },
            {
                id: 28,
                question: "Your sibling asks for help with homework but you have your own work. What do you do?",
                options: [
                    { text: "Help them first", feedback: "💙 Kind, but don’t forget your own work." },
                    { text: "Say no immediately", feedback: "😕 Maybe too harsh." },
                    { text: "Finish yours then help", feedback: "✅ Balanced approach!" },
                    { text: "Do both half-heartedly", feedback: "🚫 Neither gets done well." }
                ]
            },
            {
                id: 29,
                question: "You’re given a chance to be class monitor. What do you do?",
                options: [
                    { text: "Accept happily", feedback: "✅ Shows leadership spirit!" },
                    { text: "Refuse because it’s extra work", feedback: "🙂 Fair, but you miss responsibility experience." },
                    { text: "Accept only for power", feedback: "😕 That’s not the right reason." },
                    { text: "Let someone else take it", feedback: "Okay, but you could shine here!" }
                ]
            },
            {
                id: 30,
                question: "You are nervous about report card day. What do you do?",
                options: [
                    { text: "Hide it from parents", feedback: "🚫 Not healthy long-term." },
                    { text: "Show it honestly and discuss", feedback: "✅ Best! Transparency builds trust." },
                    { text: "Blame teacher for marks", feedback: "😕 Doesn’t help improvement." },
                    { text: "Ignore it and play all day", feedback: "😅 Fun now, but reality will hit later." }
                ]
            }
        ]
    },
    {
        id: 4,
        category: "💼 Workplace Ethics",
        description: "Make thoughtful decisions at work — professionalism, honesty, and teamwork matter! 🧑‍💼🤝",
        questions: [
            {
                id: 1,
                question: "A colleague takes credit for your work. What do you do?",
                options: [
                    { text: "Confront them aggressively 😡", feedback: "🚫 Not professional — could escalate conflict." },
                    { text: "Talk to them privately 🤝", feedback: "✅ Best approach — honest and calm." },
                    { text: "Complain immediately to the boss 🧑‍🏫", feedback: "🙂 Could help, but try resolving first." },
                    { text: "Ignore it 😐", feedback: "😕 Might feel easier, but unfair to you." }
                ]
            },
            {
                id: 2,
                question: "You notice a coworker breaking office rules. What’s your response?",
                options: [
                    { text: "Report immediately 🚨", feedback: "👍 Good if it affects safety or ethics." },
                    { text: "Confront them politely 🗣️", feedback: "✅ Professional and proactive." },
                    { text: "Join them 😬", feedback: "🚫 Wrong choice — could harm your reputation." },
                    { text: "Ignore it 😶", feedback: "😕 Not responsible." }
                ]
            },
            {
                id: 3,
                question: "You’re asked to work overtime but you have prior commitments. What do you do?",
                options: [
                    { text: "Say no respectfully 🙅", feedback: "✅ Good — balance is important." },
                    { text: "Agree even if stressed 😓", feedback: "😅 Helpful, but might burn you out." },
                    { text: "Lie about being busy 😬", feedback: "🚫 Not ethical." },
                    { text: "Do only part of the work ⏳", feedback: "😕 Partial effort may not be appreciated." }
                ]
            },
            {
                id: 4,
                question: "You see a coworker struggling. What do you do?",
                options: [
                    { text: "Offer help 🤝", feedback: "✅ Shows teamwork and kindness." },
                    { text: "Ignore it 😶", feedback: "😕 Missed opportunity to support." },
                    { text: "Report them as incompetent 😬", feedback: "🚫 Harsh and unprofessional." },
                    { text: "Do their work secretly 😅", feedback: "😬 Might cause misunderstandings." }
                ]
            },
            {
                id: 5,
                question: "A client asks you to do something unethical. What’s your response?",
                options: [
                    { text: "Politely refuse ✅", feedback: "👏 Correct — maintain integrity." },
                    { text: "Do it to please them 😬", feedback: "🚫 Could get you in trouble." },
                    { text: "Discuss alternatives 🗣️", feedback: "✅ Smart, shows professionalism." },
                    { text: "Ignore and hope for the best 😅", feedback: "😕 Not responsible." }
                ]
            },
            {
                id: 6,
                question: "You make a mistake at work. What do you do?",
                options: [
                    { text: "Admit it honestly 🙏", feedback: "✅ Transparency builds trust." },
                    { text: "Blame someone else 😬", feedback: "🚫 Not ethical." },
                    { text: "Ignore it and hope no one notices 😅", feedback: "😕 Risky — mistakes usually surface." },
                    { text: "Fix it quietly without telling anyone 🛠️", feedback: "🙂 Good initiative, but disclosure is also important." }
                ]
            },
            {
                id: 7,
                question: "You receive confidential information. What do you do?",
                options: [
                    { text: "Keep it secret ✅", feedback: "👏 Correct — confidentiality is key." },
                    { text: "Share with friends 😬", feedback: "🚫 Breach of trust." },
                    { text: "Use it for personal gain 💰", feedback: "🚫 Unethical." },
                    { text: "Forget about it 😅", feedback: "🙂 Ignoring may lead to mistakes." }
                ]
            },
            {
                id: 8,
                question: "Your manager asks for a report urgently. You’re busy. What do you do?",
                options: [
                    { text: "Prioritize and complete it 📄", feedback: "✅ Good time management." },
                    { text: "Delay without explanation 😬", feedback: "🚫 Not professional." },
                    { text: "Complain loudly 😡", feedback: "😅 Unprofessional behavior." },
                    { text: "Delegate to someone else without permission 🙃", feedback: "😕 Risky move." }
                ]
            },
            {
                id: 9,
                question: "A colleague asks you to lie for them. What do you do?",
                options: [
                    { text: "Refuse politely 🙅", feedback: "✅ Correct — maintain honesty." },
                    { text: "Agree to help 😬", feedback: "🚫 Wrong choice — unethical." },
                    { text: "Change the subject 😅", feedback: "🙂 Avoiding conflict, but honesty is better." },
                    { text: "Do part of it 🤷", feedback: "😕 Half measures often fail." }
                ]
            },
            {
                id: 10,
                question: "You have extra office supplies. A coworker asks for some. What do you do?",
                options: [
                    { text: "Share generously 🤝", feedback: "✅ Shows teamwork." },
                    { text: "Refuse 😐", feedback: "😕 Not helpful." },
                    { text: "Take credit for providing them 😬", feedback: "🚫 Not ethical." },
                    { text: "Ignore the request 😶", feedback: "😕 Missed opportunity to cooperate." }
                ]
            },
            {
                id: 11,
                question: "You notice someone being harassed at work. What’s your action?",
                options: [
                    { text: "Report to HR 🧑‍💼", feedback: "✅ Correct step." },
                    { text: "Confront the harasser aggressively 😡", feedback: "🚫 Could escalate conflict." },
                    { text: "Ignore it 😶", feedback: "😕 Not responsible." },
                    { text: "Discuss privately with the victim 🤝", feedback: "👍 Good support, but HR involvement may still be needed." }
                ]
            },
            {
                id: 12,
                question: "You’re asked to take on a project outside your expertise. What do you do?",
                options: [
                    { text: "Accept and learn 📝", feedback: "✅ Growth mindset!" },
                    { text: "Decline outright 🙅", feedback: "😕 Missed opportunity to grow." },
                    { text: "Pretend you know everything 😬", feedback: "🚫 Risky and unprofessional." },
                    { text: "Ask for guidance from others 🤝", feedback: "👍 Smart and collaborative." }
                ]
            },
            {
                id: 13,
                question: "You find an error in a report already submitted. What do you do?",
                options: [
                    { text: "Inform manager immediately 🧑‍💼", feedback: "✅ Honest and professional." },
                    { text: "Ignore it 😶", feedback: "😕 Could create bigger problems." },
                    { text: "Fix it secretly 🛠️", feedback: "🙂 Initiative is good, but disclosure matters." },
                    { text: "Blame someone else 😬", feedback: "🚫 Unethical." }
                ]
            },
            {
                id: 14,
                question: "A new policy seems unfair. How do you respond?",
                options: [
                    { text: "Discuss concerns professionally 🗣️", feedback: "✅ Smart approach." },
                    { text: "Complain to coworkers 😬", feedback: "😕 Unprofessional gossip." },
                    { text: "Ignore it 😶", feedback: "🙂 Could lead to frustration." },
                    { text: "Break the policy 🙃", feedback: "🚫 Never a good idea." }
                ]
            },
            {
                id: 15,
                question: "You’re asked to work on a weekend. How do you react?",
                options: [
                    { text: "Evaluate urgency and agree if needed ✅", feedback: "👍 Professional and balanced." },
                    { text: "Refuse angrily 😡", feedback: "🚫 Unprofessional." },
                    { text: "Ignore request 😶", feedback: "😕 Could create tension." },
                    { text: "Delegate without permission 🙃", feedback: "😬 Not appropriate." }
                ]
            },
            {
                id: 16,
                question: "You overhear sensitive company information. What do you do?",
                options: [
                    { text: "Keep it confidential ✅", feedback: "👏 Correct — trust matters." },
                    { text: "Share with friends 😬", feedback: "🚫 Unethical." },
                    { text: "Discuss casually at lunch 🥪", feedback: "😕 Risky behavior." },
                    { text: "Ignore completely 😅", feedback: "🙂 Safe, but also avoid spreading rumors." }
                ]
            },
            {
                id: 17,
                question: "You receive a bonus by mistake. What do you do?",
                options: [
                    { text: "Report it ✅", feedback: "👏 Honest and ethical!" },
                    { text: "Keep it 😬", feedback: "🚫 Not right." },
                    { text: "Share with colleagues 🤝", feedback: "🙂 Could help, but should report first." },
                    { text: "Ignore and hope no one notices 😅", feedback: "😕 Risky." }
                ]
            },
            {
                id: 18,
                question: "You need a recommendation from a manager you don’t know well. What do you do?",
                options: [
                    { text: "Request politely and provide info 📝", feedback: "✅ Professional approach." },
                    { text: "Demand it 😬", feedback: "🚫 Not appropriate." },
                    { text: "Ask a closer colleague instead 🤝", feedback: "🙂 Works, but original source better." },
                    { text: "Fake recommendation 😅", feedback: "🚫 Unethical." }
                ]
            },
            {
                id: 19,
                question: "You’re assigned a team leader role. What’s your approach?",
                options: [
                    { text: "Lead with fairness and respect ✅", feedback: "👏 Excellent leadership!" },
                    { text: "Take all credit 😬", feedback: "🚫 Poor team ethics." },
                    { text: "Ignore team issues 😶", feedback: "😕 Missed leadership opportunity." },
                    { text: "Delegate everything 🙃", feedback: "😅 Not effective." }
                ]
            },
            {
                id: 20,
                question: "A coworker is not contributing equally. What do you do?",
                options: [
                    { text: "Discuss and divide tasks fairly 🗣️", feedback: "✅ Professional approach." },
                    { text: "Do all work yourself 😓", feedback: "😕 Could cause burnout." },
                    { text: "Complain to manager immediately 🧑‍💼", feedback: "🙂 Consider communication first." },
                    { text: "Ignore and let it slide 😶", feedback: "😕 Not ideal." }
                ]
            },
            {
                id: 21,
                question: "You see favoritism in your team. How do you respond?",
                options: [
                    { text: "Focus on your work ✅", feedback: "👍 Keep professionalism first." },
                    { text: "Confront manager angrily 😡", feedback: "🚫 Not productive." },
                    { text: "Complain to coworkers 😬", feedback: "😕 Gossip isn’t helpful." },
                    { text: "Leave team quietly 😅", feedback: "🙂 Could work, but solution is better." }
                ]
            },
            {
                id: 22,
                question: "You’re asked to cover a colleague’s mistake. What do you do?",
                options: [
                    { text: "Assess and help ethically ✅", feedback: "👏 Shows teamwork." },
                    { text: "Cover blindly 😬", feedback: "🚫 Risky." },
                    { text: "Blame someone else 🙃", feedback: "😕 Unethical." },
                    { text: "Ignore it 😶", feedback: "😬 Could create issues." }
                ]
            },
            {
                id: 23,
                question: "You find a discrepancy in financial records. What’s your action?",
                options: [
                    { text: "Report immediately ✅", feedback: "👏 Ethical and responsible." },
                    { text: "Ignore 😶", feedback: "😕 Risky." },
                    { text: "Adjust numbers secretly 😬", feedback: "🚫 Not acceptable." },
                    { text: "Ask colleague to fix 🤝", feedback: "🙂 Only if transparent." }
                ]
            },
            {
                id: 24,
                question: "You’re asked to multitask beyond capacity. What do you do?",
                options: [
                    { text: "Communicate limits clearly 🗣️", feedback: "✅ Professional approach." },
                    { text: "Overwork silently 😓", feedback: "😕 Could lead to mistakes." },
                    { text: "Delegate without approval 🙃", feedback: "🚫 Unprofessional." },
                    { text: "Ignore some tasks 😬", feedback: "😕 Not responsible." }
                ]
            },
            {
                id: 25,
                question: "A new policy requires extra documentation. How do you handle it?",
                options: [
                    { text: "Follow the policy ✅", feedback: "👏 Correct and professional." },
                    { text: "Avoid it 😬", feedback: "🚫 Risky and unprofessional." },
                    { text: "Do partially 🤷", feedback: "😕 Not recommended." },
                    { text: "Complain without trying 😅", feedback: "😬 Could create tension." }
                ]
            }
        ]
    },
    {
        id: 5,
        category: "💪 Health & Fitness",
        description: "Everyday choices for a healthier body and mind — make wellness fun and easy! 🥗🏃‍♂️🧘‍♀️",
        questions: [
            {
                id: 1,
                question: "You’re feeling tired in the morning. What’s your first move?",
                options: [
                    { text: "Hit the snooze button 😴", feedback: "😅 Temporary rest, but may disrupt routine." },
                    { text: "Get up and stretch 🧘‍♂️", feedback: "✅ Excellent start — energizes your body!" },
                    { text: "Skip breakfast 🥱", feedback: "😕 Not good for energy and metabolism." },
                    { text: "Drink coffee immediately ☕", feedback: "🙂 Okay, but balance with hydration." }
                ]
            },
            {
                id: 2,
                question: "You need to choose a snack. Options:",
                options: [
                    { text: "Fruits 🍎", feedback: "✅ Nutritious and refreshing!" },
                    { text: "Chips 🍟", feedback: "😬 Tasty but unhealthy." },
                    { text: "Yogurt 🥛", feedback: "👍 Good choice for protein and probiotics." },
                    { text: "Candy 🍬", feedback: "🚫 High sugar, low nutrition." }
                ]
            },
            {
                id: 3,
                question: "You have the option to take stairs or elevator. What do you pick?",
                options: [
                    { text: "Take stairs 🏃‍♀️", feedback: "✅ Great for fitness!" },
                    { text: "Take elevator 🛗", feedback: "😬 Faster but less active." },
                    { text: "Alternate both 🔄", feedback: "👍 Balanced approach." },
                    { text: "Depends on mood 🤷‍♂️", feedback: "🙂 Flexibility is fine occasionally." }
                ]
            },
            {
                id: 4,
                question: "You feel stressed. What’s your choice?",
                options: [
                    { text: "Meditate 🧘‍♀️", feedback: "✅ Excellent for mind and body." },
                    { text: "Eat comfort food 🍩", feedback: "😬 Temporary relief, not healthy." },
                    { text: "Go for a walk 🚶‍♂️", feedback: "👍 Good way to relax." },
                    { text: "Scroll social media 📱", feedback: "😕 May increase stress instead of reducing it." }
                ]
            },
            {
                id: 5,
                question: "It’s time for lunch. Your plate should include:",
                options: [
                    { text: "Vegetables 🥦, protein 🍗, and carbs 🍚", feedback: "✅ Balanced meal!" },
                    { text: "Only carbs 🍞", feedback: "😬 Missing nutrients." },
                    { text: "Fried food 🍟", feedback: "🚫 Not healthy choice." },
                    { text: "Skip lunch 🥱", feedback: "😕 Lowers energy and metabolism." }
                ]
            },
            {
                id: 6,
                question: "You’re feeling dehydrated. What do you do?",
                options: [
                    { text: "Drink water 💧", feedback: "✅ Perfect and essential!" },
                    { text: "Drink soda 🥤", feedback: "😬 Not hydrating effectively." },
                    { text: "Ignore it 😐", feedback: "😕 Risky for health." },
                    { text: "Drink coffee ☕", feedback: "🙂 Mildly hydrating, but water is better." }
                ]
            },
            {
                id: 7,
                question: "You want to start exercising. What’s your approach?",
                options: [
                    { text: "Start small with daily walks 🚶", feedback: "✅ Smart and sustainable." },
                    { text: "Intense workout immediately 🏋️‍♂️", feedback: "😬 Could cause burnout or injury." },
                    { text: "Exercise once a week 🗓️", feedback: "🙂 Better than nothing, consistency matters." },
                    { text: "Ignore fitness 😅", feedback: "🚫 Not good for health long-term." }
                ]
            },
            {
                id: 8,
                question: "You’re offered sugary drinks after workout. What do you choose?",
                options: [
                    { text: "Water 💧", feedback: "✅ Hydration first!" },
                    { text: "Energy drinks 🥤", feedback: "😬 Occasional okay, too much is harmful." },
                    { text: "Protein shake 🥛", feedback: "👍 Great for recovery if needed." },
                    { text: "Soda 🍹", feedback: "🚫 Not healthy." }
                ]
            },
            {
                id: 9,
                question: "You skipped sleep last night. What do you do today?",
                options: [
                    { text: "Take short naps 😴", feedback: "✅ Helps recharge." },
                    { text: "Drink lots of coffee ☕", feedback: "😬 Temporary boost, not long-term solution." },
                    { text: "Ignore tiredness 😅", feedback: "😕 Can affect productivity and health." },
                    { text: "Sleep early tonight 🛏️", feedback: "👍 Good recovery plan." }
                ]
            },
            {
                id: 10,
                question: "You’re tempted by junk food at work. What do you do?",
                options: [
                    { text: "Choose fruit or nuts 🍎🥜", feedback: "✅ Healthy and satisfying." },
                    { text: "Eat chips or cookies 🍪", feedback: "😬 Tastey but unhealthy." },
                    { text: "Skip snack 🍽️", feedback: "🙂 Okay if not hungry." },
                    { text: "Order pizza 🍕", feedback: "🚫 Not the healthiest choice." }
                ]
            },
            {
                id: 11,
                question: "You feel stiff after sitting for hours. What do you do?",
                options: [
                    { text: "Stretch for 5–10 mins 🧘‍♂️", feedback: "✅ Helps posture and circulation." },
                    { text: "Continue sitting 😐", feedback: "😬 Could cause discomfort or pain." },
                    { text: "Take a short walk 🚶‍♀️", feedback: "👍 Excellent choice!" },
                    { text: "Drink coffee ☕", feedback: "🙂 Doesn’t relieve stiffness." }
                ]
            },
            {
                id: 12,
                question: "You need to choose a workout plan. Options:",
                options: [
                    { text: "Balanced cardio + strength 🏋️‍♂️", feedback: "✅ Best for overall fitness!" },
                    { text: "Only cardio 🏃", feedback: "🙂 Good for heart health but strength is also important." },
                    { text: "Only weights 🏋️", feedback: "🙂 Good for strength but cardio matters." },
                    { text: "No plan 😅", feedback: "🚫 Hard to stay consistent without direction." }
                ]
            },
            {
                id: 13,
                question: "You want to improve mental health. What do you do?",
                options: [
                    { text: "Meditate daily 🧘‍♀️", feedback: "✅ Great for stress reduction!" },
                    { text: "Scroll social media endlessly 📱", feedback: "😬 Could increase anxiety." },
                    { text: "Talk to a friend 🤝", feedback: "👍 Good emotional support." },
                    { text: "Ignore feelings 😶", feedback: "😕 Not healthy long-term." }
                ]
            },
            {
                id: 14,
                question: "You’re tempted by fast food late at night. What’s your choice?",
                options: [
                    { text: "Eat healthy snack 🥗", feedback: "✅ Better for digestion and sleep." },
                    { text: "Order fast food 🍔", feedback: "😬 Unhealthy for sleep and metabolism." },
                    { text: "Skip snack 🥱", feedback: "🙂 Okay if not hungry." },
                    { text: "Eat dessert 🍰", feedback: "😅 Occasional treat fine, moderation is key." }
                ]
            },
            {
                id: 15,
                question: "You’re feeling stressed at work. How do you manage it?",
                options: [
                    { text: "Take a short walk 🚶", feedback: "✅ Helps relieve stress." },
                    { text: "Eat chocolate 🍫", feedback: "😬 Temporary relief, not solution." },
                    { text: "Meditate 🧘‍♂️", feedback: "👍 Excellent choice." },
                    { text: "Ignore stress 😶", feedback: "😕 Not healthy." }
                ]
            },
            {
                id: 16,
                question: "You’re choosing breakfast. Options:",
                options: [
                    { text: "Oatmeal with fruits 🥣🍓", feedback: "✅ Nutritious and filling!" },
                    { text: "Sugary cereal 🥣", feedback: "😬 Quick energy but not sustainable." },
                    { text: "Skip breakfast 🥱", feedback: "😕 Lowers energy for morning." },
                    { text: "Toast with butter 🍞", feedback: "🙂 Okay in moderation." }
                ]
            },
            {
                id: 17,
                question: "You want to improve posture. What do you do?",
                options: [
                    { text: "Stretch and strengthen back muscles 🏋️‍♂️", feedback: "✅ Excellent!" },
                    { text: "Sit longer 😐", feedback: "😬 Bad for posture." },
                    { text: "Use ergonomic chair 🪑", feedback: "👍 Helpful." },
                    { text: "Ignore it 😅", feedback: "😕 Could cause pain later." }
                ]
            },
            {
                id: 18,
                question: "You’re choosing hydration during workouts:",
                options: [
                    { text: "Water 💧", feedback: "✅ Essential!" },
                    { text: "Soda 🥤", feedback: "😬 Not good for workouts." },
                    { text: "Energy drink ⚡", feedback: "🙂 Only occasionally if needed." },
                    { text: "Juice 🍹", feedback: "👍 Natural but sugar content matters." }
                ]
            },
            {
                id: 19,
                question: "You feel fatigued mid-day. Best approach?",
                options: [
                    { text: "Short walk 🚶‍♀️", feedback: "✅ Refreshes and energizes." },
                    { text: "Coffee ☕", feedback: "🙂 Temporary boost." },
                    { text: "Snack on chocolate 🍫", feedback: "😬 Quick sugar rush, not ideal." },
                    { text: "Keep working 😅", feedback: "😕 Productivity may drop." }
                ]
            },
            {
                id: 20,
                question: "You’re planning a workout routine. Best option?",
                options: [
                    { text: "Mix cardio, strength, flexibility 🏋️‍♂️🏃🧘", feedback: "✅ Balanced and effective!" },
                    { text: "Only cardio 🏃", feedback: "🙂 Good for heart but not complete." },
                    { text: "Only strength 🏋️", feedback: "🙂 Builds muscle but limited fitness." },
                    { text: "No plan 😅", feedback: "🚫 Hard to be consistent." }
                ]
            },
            {
                id: 21,
                question: "You’re choosing snacks for kids. What do you pick?",
                options: [
                    { text: "Fruits and nuts 🍎🥜", feedback: "✅ Healthy and tasty!" },
                    { text: "Chocolates 🍫", feedback: "😬 Treat, not daily snack." },
                    { text: "Chips 🍟", feedback: "🚫 Not ideal." },
                    { text: "Yogurt 🥛", feedback: "👍 Good option for protein." }
                ]
            },
            {
                id: 22,
                question: "You want to improve sleep quality. What’s your choice?",
                options: [
                    { text: "Sleep 7–8 hours 🛏️", feedback: "✅ Essential for health." },
                    { text: "Scroll phone before bed 📱", feedback: "😬 Could disrupt sleep." },
                    { text: "Drink caffeine late ☕", feedback: "🚫 Avoid for better rest." },
                    { text: "Go to bed irregularly 😅", feedback: "😕 Bad for circadian rhythm." }
                ]
            },
            {
                id: 23,
                question: "You want to reduce sugar intake. Best approach?",
                options: [
                    { text: "Choose natural sweeteners 🍯", feedback: "✅ Smart choice!" },
                    { text: "Eat sugar freely 😬", feedback: "🚫 Not healthy." },
                    { text: "Gradually reduce sugar intake 🥗", feedback: "👍 Sustainable approach." },
                    { text: "Ignore it 😅", feedback: "😕 Could affect health." }
                ]
            },
            {
                id: 24,
                question: "You feel pain after exercise. What do you do?",
                options: [
                    { text: "Rest and stretch 🧘‍♂️", feedback: "✅ Correct — prevents injury." },
                    { text: "Push through pain 😬", feedback: "🚫 Risky." },
                    { text: "Take painkillers 💊", feedback: "🙂 Only if necessary, not a habit." },
                    { text: "Ignore it 😅", feedback: "😕 Could worsen condition." }
                ]
            },
            {
                id: 25,
                question: "You’re choosing morning beverage. Options:",
                options: [
                    { text: "Water 💧", feedback: "✅ Hydration first!" },
                    { text: "Coffee ☕", feedback: "🙂 Okay but hydrate too." },
                    { text: "Soda 🥤", feedback: "🚫 Not ideal." },
                    { text: "Smoothie 🍓", feedback: "👍 Healthy if natural." }
                ]
            },
            {
                id: 26,
                question: "You want to build endurance. Best activity?",
                options: [
                    { text: "Running 🏃‍♂️", feedback: "✅ Excellent for stamina!" },
                    { text: "Weightlifting 🏋️", feedback: "🙂 Strength focus." },
                    { text: "Yoga 🧘‍♀️", feedback: "👍 Helps flexibility, not endurance." },
                    { text: "Watching TV 😅", feedback: "🚫 Not effective." }
                ]
            },
            {
                id: 27,
                question: "You’re trying to reduce sedentary time. What do you do?",
                options: [
                    { text: "Take standing breaks 🧍‍♂️", feedback: "✅ Good habit!" },
                    { text: "Sit longer 😐", feedback: "😬 Risky for health." },
                    { text: "Stretch regularly 🧘", feedback: "👍 Excellent!" },
                    { text: "Ignore 😅", feedback: "😕 Bad for long-term health." }
                ]
            },
            {
                id: 28,
                question: "You want to improve immunity. What’s your approach?",
                options: [
                    { text: "Balanced diet + exercise 🥗🏋️‍♂️", feedback: "✅ Perfect choice!" },
                    { text: "Supplements only 💊", feedback: "🙂 Helps but not enough alone." },
                    { text: "Ignore diet 😅", feedback: "😬 Weakens immunity." },
                    { text: "Stress heavily 😓", feedback: "🚫 Reduces immunity." }
                ]
            },
            {
                id: 29,
                question: "You’re tempted by late-night snacks. Best approach?",
                options: [
                    { text: "Eat fruits 🍎", feedback: "✅ Healthy and light." },
                    { text: "Pizza 🍕", feedback: "😬 Not ideal before sleep." },
                    { text: "Skip snack 🥱", feedback: "🙂 Works if not hungry." },
                    { text: "Ice cream 🍨", feedback: "😅 Occasional treat okay." }
                ]
            },
            {
                id: 30,
                question: "You feel unmotivated to exercise today. What do you do?",
                options: [
                    { text: "Do a short workout 🏃‍♀️", feedback: "✅ Keeps consistency." },
                    { text: "Skip completely 😬", feedback: "😕 Breaks routine." },
                    { text: "Stretch lightly 🧘‍♂️", feedback: "👍 Better than nothing." },
                    { text: "Procrastinate 😅", feedback: "😬 Not helpful." }
                ]
            }
        ]
    },
    {
        id: 6,
        category: "🌍 Travel Decisions",
        description: "Make smart and safe choices while exploring the world! 🧳✈️",
        questions: [
            {
                id: 1,
                question: "You’re planning a trip. How do you decide the destination?",
                options: [
                    { text: "Research online and read reviews 🌐", feedback: "✅ Good choice! Planning ensures a smooth experience." },
                    { text: "Go wherever friends suggest 👯", feedback: "🙂 Fun, but might not suit your preferences." },
                    { text: "Pick randomly 🎲", feedback: "😬 Could lead to unexpected challenges." },
                    { text: "Choose the cheapest option 💰", feedback: "👍 Budget-friendly but consider safety and comfort." }
                ]
            },
            {
                id: 2,
                question: "You’re booking accommodation. What matters most?",
                options: [
                    { text: "Safety and location 🏨", feedback: "✅ Prioritizing safety makes your trip worry-free." },
                    { text: "Only price 💵", feedback: "😬 Cheap isn’t always safe or convenient." },
                    { text: "Photos look nice 📸", feedback: "🙂 Looks appealing, but details matter too." },
                    { text: "Popularity ⭐", feedback: "👍 Can help, but verify reviews carefully." }
                ]
            },
            {
                id: 3,
                question: "Packing for a trip. What’s your strategy?",
                options: [
                    { text: "Pack essentials and plan outfits 🧳", feedback: "✅ Smart packing avoids overloading and forgetfulness." },
                    { text: "Pack everything you own 😅", feedback: "😬 Heavy bags make travel uncomfortable." },
                    { text: "Only take a backpack 🎒", feedback: "🙂 Minimalist approach works for short trips." },
                    { text: "Buy items during travel 🛍️", feedback: "👍 Convenient but may be expensive." }
                ]
            },
            {
                id: 4,
                question: "You’re traveling to a new city. How do you navigate?",
                options: [
                    { text: "Use maps and apps 🗺️", feedback: "✅ Helps prevent getting lost and saves time." },
                    { text: "Ask locals for directions 🗣️", feedback: "👍 Great for discovering hidden gems." },
                    { text: "Wander randomly 😅", feedback: "😬 Fun but risky in unfamiliar areas." },
                    { text: "Follow tour guides only 🚶‍♂️", feedback: "🙂 Safe but may miss spontaneous experiences." }
                ]
            },
            {
                id: 5,
                question: "You’re choosing transportation. Which is best?",
                options: [
                    { text: "Public transport 🚌", feedback: "✅ Cost-effective and environmentally friendly." },
                    { text: "Taxi 🚕", feedback: "🙂 Convenient but can be costly." },
                    { text: "Rent a car 🚗", feedback: "👍 Gives flexibility but driving stress may occur." },
                    { text: "Walk 🚶‍♂️", feedback: "✅ Healthy and lets you explore slowly." }
                ]
            },
            {
                id: 6,
                question: "You’re deciding whether to buy travel insurance. What do you do?",
                options: [
                    { text: "Purchase it ✅", feedback: "✅ Protects you from unexpected emergencies abroad." },
                    { text: "Skip it 😬", feedback: "😕 Risky — emergencies can be expensive." },
                    { text: "Only for expensive trips 💵", feedback: "👍 Partial coverage better than nothing." },
                    { text: "Ask friends if they use it 🤷", feedback: "🙂 Advice helps, but verify details yourself." }
                ]
            },
            {
                id: 7,
                question: "You notice local laws differ from home. What do you do?",
                options: [
                    { text: "Learn rules before visiting 📖", feedback: "✅ Helps avoid fines and legal issues." },
                    { text: "Ignore and act normally 😬", feedback: "🚫 Can get you in trouble." },
                    { text: "Ask locals for tips 🗣️", feedback: "👍 Good for practical insights." },
                    { text: "Rely on tour guide only 🚶", feedback: "🙂 Somewhat safe, but knowledge helps personally." }
                ]
            },
            {
                id: 8,
                question: "You’re trying local food for the first time. How do you proceed?",
                options: [
                    { text: "Check hygiene and reviews ✅", feedback: "✅ Safe approach keeps you healthy." },
                    { text: "Eat without checking 😬", feedback: "😕 Risk of stomach issues or allergies." },
                    { text: "Ask locals for suggestions 🗣️", feedback: "👍 Great way to try authentic food." },
                    { text: "Stick to familiar cuisine 🍔", feedback: "🙂 Safe but may miss unique experience." }
                ]
            },
            {
                id: 9,
                question: "You’re traveling with limited budget. How do you save money?",
                options: [
                    { text: "Use public transport and budget accommodations 🚌", feedback: "✅ Maximizes savings and experience." },
                    { text: "Cut meals and skip essentials 😬", feedback: "😕 Unsafe and unhealthy approach." },
                    { text: "Look for discounts and deals 🏷️", feedback: "👍 Smart and effective." },
                    { text: "Borrow money from friends 💵", feedback: "🙂 Temporary solution, not ideal." }
                ]
            },
            {
                id: 10,
                question: "You’re taking photos during travel. Best approach?",
                options: [
                    { text: "Respect privacy and rules 📸", feedback: "✅ Keeps experiences positive and respectful." },
                    { text: "Take photos anywhere 😬", feedback: "😕 Could offend or break rules." },
                    { text: "Only selfie everywhere 🤳", feedback: "🙂 Fun but limits scenic capture." },
                    { text: "Avoid photos completely 😅", feedback: "😬 Missed memories, but focuses on presence." }
                ]
            },
            {
                id: 11,
                question: "You want to reduce environmental impact while traveling. What do you do?",
                options: [
                    { text: "Use public transport and reusable items ♻️", feedback: "✅ Smart, eco-friendly choices." },
                    { text: "Ignore environmental concerns 😬", feedback: "😕 Contributes to pollution." },
                    { text: "Buy souvenirs from local artisans 🛍️", feedback: "👍 Supports local economy sustainably." },
                    { text: "Leave trash behind 😅", feedback: "🚫 Harmful and irresponsible." }
                ]
            },
            {
                id: 12,
                question: "You’re exploring a city at night. What’s your approach?",
                options: [
                    { text: "Stay in well-lit, safe areas ✅", feedback: "✅ Minimizes risk and ensures safety." },
                    { text: "Wander unknown areas 😬", feedback: "😕 Risky and unsafe." },
                    { text: "Go with friends 👫", feedback: "👍 Safer and fun experience." },
                    { text: "Ignore safety advice 😅", feedback: "🚫 Could lead to trouble." }
                ]
            },
            {
                id: 13,
                question: "You’re traveling internationally. How do you manage money?",
                options: [
                    { text: "Carry small cash and cards 💳", feedback: "✅ Safer and convenient approach." },
                    { text: "Carry all money in wallet 😬", feedback: "😕 Risky if lost or stolen." },
                    { text: "Rely on friends only 🤷", feedback: "🙂 Not reliable alone." },
                    { text: "Use only cash 🏧", feedback: "👍 Sometimes okay, but cards add security." }
                ]
            },
            {
                id: 14,
                question: "You’re faced with a flight delay. How do you react?",
                options: [
                    { text: "Stay calm and check alternatives 😌", feedback: "✅ Planning prevents unnecessary stress." },
                    { text: "Get angry with staff 😡", feedback: "😬 Unproductive and stressful." },
                    { text: "Leave airport immediately 🏃", feedback: "🙂 Might miss updates and options." },
                    { text: "Panic 😅", feedback: "🚫 Makes situation harder to manage." }
                ]
            },
            {
                id: 15,
                question: "You’re traveling to a country with different language. What do you do?",
                options: [
                    { text: "Learn basic phrases 🗣️", feedback: "✅ Helps communication and shows respect." },
                    { text: "Use translation app 📱", feedback: "👍 Practical and easy solution." },
                    { text: "Rely on gestures only 🤷", feedback: "😕 May cause misunderstandings." },
                    { text: "Ignore and hope for help 😅", feedback: "😬 Risky approach." }
                ]
            },
            {
                id: 16,
                question: "You’re visiting a nature reserve. How do you behave?",
                options: [
                    { text: "Follow rules and stay on trails ✅", feedback: "✅ Protects wildlife and environment." },
                    { text: "Go off-path 😬", feedback: "😕 Could damage ecosystem." },
                    { text: "Take litter with you ♻️", feedback: "👍 Responsible and eco-friendly." },
                    { text: "Ignore signs 😅", feedback: "🚫 Unsafe and harmful." }
                ]
            },
            {
                id: 17,
                question: "You’re choosing souvenirs. What do you pick?",
                options: [
                    { text: "Local handmade items 🛍️", feedback: "✅ Supports community and sustainable tourism." },
                    { text: "Mass-produced cheap items 😬", feedback: "😕 Not environmentally friendly." },
                    { text: "Food products 🍫", feedback: "🙂 Can be nice, check expiration." },
                    { text: "Nothing 😅", feedback: "👍 Minimalist approach, reduces clutter." }
                ]
            },
            {
                id: 18,
                question: "You’re navigating crowded areas. What’s best?",
                options: [
                    { text: "Stay aware and polite ✅", feedback: "✅ Keeps you safe and avoids conflict." },
                    { text: "Push through 😬", feedback: "😕 Risky and rude to others." },
                    { text: "Stick to group 👥", feedback: "👍 Safer in numbers." },
                    { text: "Ignore crowd 😅", feedback: "😬 Could get lost or delayed." }
                ]
            },
            {
                id: 19,
                question: "You’re choosing travel dates. What’s your approach?",
                options: [
                    { text: "Consider weather and local events ✅", feedback: "✅ Ensures comfortable and enjoyable trip." },
                    { text: "Choose randomly 😬", feedback: "😕 May face bad weather or crowds." },
                    { text: "Go on peak season only 🏖️", feedback: "🙂 Fun but expensive and crowded." },
                    { text: "Only off-season ❄️", feedback: "👍 Quieter but check availability and weather." }
                ]
            },
            {
                id: 20,
                question: "You’re traveling solo. What’s your safety plan?",
                options: [
                    { text: "Share itinerary and stay alert ✅", feedback: "✅ Essential for safety and peace of mind." },
                    { text: "Do not inform anyone 😬", feedback: "😕 Risky in emergencies." },
                    { text: "Follow locals blindly 🗺️", feedback: "🙂 Good guidance but verify personally." },
                    { text: "Ignore risks 😅", feedback: "🚫 Could be dangerous." }
                ]
            },
            {
                id: 21,
                question: "You’re booking flights. What’s important?",
                options: [
                    { text: "Compare prices and airlines ✅", feedback: "✅ Ensures affordability and safety." },
                    { text: "Book last minute 😬", feedback: "😕 Often more expensive and stressful." },
                    { text: "Choose only fastest flight 🛫", feedback: "🙂 Good but check costs and convenience." },
                    { text: "Go with friend’s advice blindly 🤷", feedback: "😅 May not suit your needs." }
                ]
            },
            {
                id: 22,
                question: "You’re deciding travel insurance coverage. Best option?",
                options: [
                    { text: "Full coverage including health ✅", feedback: "✅ Protects against unexpected emergencies abroad." },
                    { text: "Minimal coverage 😬", feedback: "😕 Might save money but risky in emergencies." },
                    { text: "Skip insurance completely 😅", feedback: "🚫 Very risky choice." },
                    { text: "Ask friends for advice 🤝", feedback: "🙂 Helpful, but verify yourself." }
                ]
            },
            {
                id: 23,
                question: "You’re in a foreign city and lost. What’s your move?",
                options: [
                    { text: "Use maps or navigation apps 🗺️", feedback: "✅ Efficient and safe solution." },
                    { text: "Ask locals politely 🗣️", feedback: "👍 Friendly way to get directions." },
                    { text: "Wander randomly 😬", feedback: "😕 Could waste time or be unsafe." },
                    { text: "Panic 😅", feedback: "🚫 Not helpful, stay calm." }
                ]
            },
            {
                id: 24,
                question: "You want to experience local culture. How?",
                options: [
                    { text: "Attend local events and festivals 🎉", feedback: "✅ Immersive and authentic experience." },
                    { text: "Stay only in tourist spots 😬", feedback: "😕 Misses real local vibe." },
                    { text: "Try local food 🥘", feedback: "👍 Great way to connect with culture." },
                    { text: "Follow social media tips only 📱", feedback: "🙂 May not reflect reality fully." }
                ]
            },
            {
                id: 25,
                question: "You’re buying souvenirs. What should you consider?",
                options: [
                    { text: "Locally-made, ethical items ✅", feedback: "✅ Supports local communities and sustainability." },
                    { text: "Cheap imported items 😬", feedback: "😕 Not eco-friendly or meaningful." },
                    { text: "Overpriced touristy items 💸", feedback: "🙂 Fun, but check value." },
                    { text: "Nothing 😅", feedback: "👍 Minimalist choice reduces clutter." }
                ]
            }
        ]
    },
    {
        id: 7,
        category: "🐶 Pet & Animal Care",
        description: "Make thoughtful decisions to keep your pets and animals happy and healthy! 🐾❤️",
        questions: [
            {
                id: 1,
                question: "You adopt a pet. What’s your first step?",
                options: [
                    { text: "Research its needs thoroughly 📚", feedback: "✅ Ensures you’re prepared for proper care." },
                    { text: "Buy supplies immediately 🛒", feedback: "🙂 Helpful but understanding needs first is better." },
                    { text: "Take it home without preparation 😬", feedback: "😕 Could lead to stress for pet and you." },
                    { text: "Ask friends for advice 🤝", feedback: "👍 Useful, but verify information personally." }
                ]
            },
            {
                id: 2,
                question: "Your pet looks lethargic. What do you do?",
                options: [
                    { text: "Consult a vet immediately 🩺", feedback: "✅ Correct, health issues need prompt attention." },
                    { text: "Ignore it 😬", feedback: "😕 Could worsen the condition." },
                    { text: "Give extra food 🍗", feedback: "🙂 Might not address the actual problem." },
                    { text: "Play with it vigorously 🐕", feedback: "😅 Could stress the pet further." }
                ]
            },
            {
                id: 3,
                question: "You’re choosing food for your pet. What’s your approach?",
                options: [
                    { text: "Pick nutritious, vet-recommended food 🥩", feedback: "✅ Promotes long-term health and wellbeing." },
                    { text: "Feed leftovers from your plate 😬", feedback: "😕 Could be unhealthy or harmful." },
                    { text: "Give treats frequently 🍪", feedback: "🙂 Fine occasionally, not a staple." },
                    { text: "Use cheapest food available 💵", feedback: "😬 Quality matters for health." }
                ]
            },
            {
                id: 4,
                question: "Your pet shows behavioral problems. How do you respond?",
                options: [
                    { text: "Consult a trainer or vet 🐾", feedback: "✅ Professional guidance ensures effective correction." },
                    { text: "Punish them aggressively 😡", feedback: "🚫 Can cause fear and worsen behavior." },
                    { text: "Ignore it 😶", feedback: "😕 Behavior may escalate." },
                    { text: "Try random solutions 😅", feedback: "😬 Could confuse the pet and worsen problems." }
                ]
            },
            {
                id: 5,
                question: "You notice your pet is overweight. Best approach?",
                options: [
                    { text: "Adjust diet and exercise 🥗🏃", feedback: "✅ Healthy and sustainable weight management." },
                    { text: "Ignore it 😬", feedback: "😕 Health risks increase over time." },
                    { text: "Limit food drastically 🚫", feedback: "😬 Can harm health and cause stress." },
                    { text: "Use treats as rewards only 🍪", feedback: "👍 Helps maintain motivation while controlling diet." }
                ]
            },
            {
                id: 6,
                question: "Your pet needs regular grooming. How do you proceed?",
                options: [
                    { text: "Set up a grooming schedule ✂️", feedback: "✅ Keeps pet healthy and comfortable." },
                    { text: "Groom only when dirty 😅", feedback: "😕 Less effective, may cause skin issues." },
                    { text: "Ignore grooming 😬", feedback: "🚫 Can lead to infections or discomfort." },
                    { text: "DIY occasionally 🧴", feedback: "🙂 Helpful, but professional grooming may still be needed." }
                ]
            },
            {
                id: 7,
                question: "You’re introducing your pet to a new animal. Best way?",
                options: [
                    { text: "Supervised gradual introduction 🐾", feedback: "✅ Reduces stress and prevents fights." },
                    { text: "Leave them together immediately 😬", feedback: "😕 Could cause conflict or fear." },
                    { text: "Avoid interaction completely 😶", feedback: "🙂 Misses opportunity for socialization." },
                    { text: "Use treats and distractions 🍖", feedback: "👍 Helps create positive associations safely." }
                ]
            },
            {
                id: 8,
                question: "You’re traveling with a pet. What do you do?",
                options: [
                    { text: "Check pet-friendly accommodations and transport 🏨🚗", feedback: "✅ Ensures comfort and safety for your pet." },
                    { text: "Leave them home alone 😬", feedback: "😕 Could cause anxiety or neglect." },
                    { text: "Bring without preparation 😅", feedback: "😬 May stress both you and your pet." },
                    { text: "Rely on friends to care for them 🤝", feedback: "🙂 Fine if trusted and experienced." }
                ]
            },
            {
                id: 9,
                question: "You notice strange behavior in a wild animal nearby. What do you do?",
                options: [
                    { text: "Observe safely from a distance 👀", feedback: "✅ Avoids danger and stress to animal." },
                    { text: "Try to touch or feed 😬", feedback: "🚫 Can be harmful to both you and the animal." },
                    { text: "Call local wildlife authorities 📞", feedback: "👍 Professional help ensures safety." },
                    { text: "Ignore completely 😅", feedback: "🙂 Sometimes fine, but risk remains." }
                ]
            },
            {
                id: 10,
                question: "Your pet needs medication. How do you proceed?",
                options: [
                    { text: "Follow vet instructions precisely 🩺", feedback: "✅ Ensures effective treatment and safety." },
                    { text: "Give guess doses 😬", feedback: "🚫 Dangerous for pet’s health." },
                    { text: "Skip if they resist 😅", feedback: "😕 Could worsen condition." },
                    { text: "Use human medications without vet advice 💊", feedback: "🚫 Very risky." }
                ]
            },
            {
                id: 11,
                question: "Your pet shows signs of anxiety. What’s the best approach?",
                options: [
                    { text: "Provide comfort and safe space 🏡", feedback: "✅ Helps them feel secure and calm." },
                    { text: "Ignore it 😶", feedback: "😕 Anxiety may worsen over time." },
                    { text: "Use loud commands 😬", feedback: "🚫 Could increase stress." },
                    { text: "Distract with treats 🍖", feedback: "👍 Helps, but underlying issues still need attention." }
                ]
            },
            {
                id: 12,
                question: "You’re selecting a pet for your family. How do you decide?",
                options: [
                    { text: "Consider space, time, and temperament 🏡", feedback: "✅ Ensures a compatible and happy pet." },
                    { text: "Pick by looks only 😬", feedback: "😕 Cute doesn’t mean suitable." },
                    { text: "Follow trends 🐶", feedback: "🙂 Popular choice might not suit lifestyle." },
                    { text: "Ask kids what they want 🤝", feedback: "👍 Involve family, but research needs too." }
                ]
            },
            {
                id: 13,
                question: "You’re dealing with stray animals. How do you act?",
                options: [
                    { text: "Provide food and contact local shelter 🐾", feedback: "✅ Safe and responsible approach." },
                    { text: "Ignore them 😶", feedback: "😕 Missed chance to help." },
                    { text: "Feed indiscriminately 🍖", feedback: "😬 Could cause dependency or health issues." },
                    { text: "Try to catch them 😬", feedback: "🚫 Can be dangerous for both parties." }
                ]
            },
            {
                id: 14,
                question: "You notice your pet’s nails are too long. What’s the best step?",
                options: [
                    { text: "Trim carefully or seek professional ✂️", feedback: "✅ Maintains comfort and prevents injury." },
                    { text: "Ignore 😅", feedback: "😕 Could cause pain or mobility issues." },
                    { text: "Let them wear down naturally 🐾", feedback: "🙂 Sometimes works, not always effective." },
                    { text: "Use sharp objects unsafely 😬", feedback: "🚫 Dangerous and risky." }
                ]
            },
            {
                id: 15,
                question: "You want to train your pet. How do you proceed?",
                options: [
                    { text: "Use positive reinforcement rewards 🍖", feedback: "✅ Encourages good behavior effectively." },
                    { text: "Punish mistakes harshly 😡", feedback: "🚫 Could create fear and aggression." },
                    { text: "Ignore training 😅", feedback: "😕 Pet may develop bad habits." },
                    { text: "Random training sessions 😬", feedback: "😕 Inconsistent results likely." }
                ]
            },
            {
                id: 16,
                question: "You notice your pet is chewing things excessively. What’s your action?",
                options: [
                    { text: "Provide chew toys and supervision 🧸", feedback: "✅ Redirects behavior safely." },
                    { text: "Punish them 😡", feedback: "🚫 Could cause fear and stress." },
                    { text: "Ignore it 😅", feedback: "😕 Destruction may continue." },
                    { text: "Restrict access to all rooms 🚪", feedback: "🙂 Helps temporarily but not long-term solution." }
                ]
            },
            {
                id: 17,
                question: "Your pet is scared during fireworks. What do you do?",
                options: [
                    { text: "Provide safe hiding space 🏡", feedback: "✅ Reduces anxiety effectively." },
                    { text: "Hold them and comfort 🐾", feedback: "👍 Helps them feel secure." },
                    { text: "Leave them alone 😶", feedback: "😕 Anxiety may worsen." },
                    { text: "Try loud noises to scare fear away 😬", feedback: "🚫 Harmful and ineffective." }
                ]
            },
            {
                id: 18,
                question: "You’re traveling with pets by car. Best practice?",
                options: [
                    { text: "Use carrier or seatbelt harness 🚗", feedback: "✅ Ensures safety and comfort." },
                    { text: "Let them roam freely 😬", feedback: "🚫 Risky for both pet and driver." },
                    { text: "Drive fast to shorten trip 🏎️", feedback: "😕 Could stress the animal." },
                    { text: "Stop often for breaks 🛑", feedback: "👍 Good for pet’s comfort and hydration." }
                ]
            },
            {
                id: 19,
                question: "You notice signs of fleas on your pet. Action?",
                options: [
                    { text: "Consult vet for treatment 🩺", feedback: "✅ Ensures safe and effective care." },
                    { text: "Use home remedies randomly 😬", feedback: "😕 Could harm pet or be ineffective." },
                    { text: "Ignore it 😅", feedback: "🚫 Problem may worsen." },
                    { text: "Use over-the-counter products blindly 💊", feedback: "😬 Risk of side effects." }
                ]
            },
            {
                id: 20,
                question: "You want to socialize your pet. Best way?",
                options: [
                    { text: "Gradual exposure to other pets 🐕", feedback: "✅ Encourages safe social behavior." },
                    { text: "Throw them into groups immediately 😬", feedback: "😕 Could cause fear or aggression." },
                    { text: "Avoid socialization 😶", feedback: "🙂 May limit social skills." },
                    { text: "Use treats for positive interaction 🍖", feedback: "👍 Effective reinforcement method." }
                ]
            },
            {
                id: 21,
                question: "You notice your pet is drinking little water. What do you do?",
                options: [
                    { text: "Encourage hydration with fresh water 💧", feedback: "✅ Maintains health and prevents dehydration." },
                    { text: "Ignore 😬", feedback: "😕 Could lead to serious health issues." },
                    { text: "Add flavors randomly 😅", feedback: "🙂 Sometimes works, but monitor safety." },
                    { text: "Force them to drink 💦", feedback: "🚫 Could stress or harm pet." }
                ]
            },
            {
                id: 22,
                question: "You’re choosing toys for your pet. Criteria?",
                options: [
                    { text: "Safe, durable, and appropriate for size 🧸", feedback: "✅ Ensures fun without harm." },
                    { text: "Cheap plastic toys 😬", feedback: "😕 May break or be unsafe." },
                    { text: "No toys 😶", feedback: "🙂 Less stimulation, may cause boredom." },
                    { text: "Random household items 😅", feedback: "😬 Could be dangerous." }
                ]
            },
            {
                id: 23,
                question: "You notice your pet scratches excessively. Best step?",
                options: [
                    { text: "Check for allergies or parasites 🐾", feedback: "✅ Addresses root cause effectively." },
                    { text: "Ignore it 😬", feedback: "😕 Could worsen discomfort." },
                    { text: "Use random sprays 😅", feedback: "😬 May be harmful or ineffective." },
                    { text: "Shave fur immediately ✂️", feedback: "🙂 Sometimes needed but not first solution." }
                ]
            },
            {
                id: 24,
                question: "Your pet seems anxious when you leave. How do you manage?",
                options: [
                    { text: "Provide toys and safe space 🧸", feedback: "✅ Helps reduce separation anxiety." },
                    { text: "Ignore and leave 😬", feedback: "😕 Anxiety may worsen." },
                    { text: "Take them everywhere 😅", feedback: "🙂 Practical sometimes, but not always feasible." },
                    { text: "Scold them 😡", feedback: "🚫 Increases fear and stress." }
                ]
            },
            {
                id: 25,
                question: "You want your pet to exercise regularly. Approach?",
                options: [
                    { text: "Set daily walks or playtime 🐕", feedback: "✅ Maintains health and happiness." },
                    { text: "Occasional exercise only 😬", feedback: "😕 Could lead to weight gain or boredom." },
                    { text: "Leave them to self-exercise 😅", feedback: "🙂 May be insufficient." },
                    { text: "Use treats excessively as motivation 🍖", feedback: "😬 Overfeeding can cause health issues." }
                ]
            },
            {
                id: 26,
                question: "Your pet is sick and needs medication. How do you proceed?",
                options: [
                    { text: "Follow vet guidance strictly 🩺", feedback: "✅ Ensures proper and safe recovery." },
                    { text: "Skip doses randomly 😬", feedback: "😕 Could delay or worsen recovery." },
                    { text: "Use home remedies only 🏡", feedback: "😬 May be unsafe or ineffective." },
                    { text: "Give human medication 💊", feedback: "🚫 Dangerous and not recommended." }
                ]
            },
            {
                id: 27,
                question: "You’re introducing a new diet for your pet. Best approach?",
                options: [
                    { text: "Gradually mix with old diet 🥗", feedback: "✅ Reduces digestive issues and stress." },
                    { text: "Switch immediately 😬", feedback: "😕 May upset stomach and cause problems." },
                    { text: "Ignore nutrition balance 😅", feedback: "😬 Could lead to deficiencies." },
                    { text: "Feed only treats 🍖", feedback: "🚫 Not healthy long-term." }
                ]
            },
            {
                id: 28,
                question: "Your pet chews furniture. How to manage?",
                options: [
                    { text: "Provide chew toys and redirection 🧸", feedback: "✅ Safe way to redirect energy." },
                    { text: "Punish them 😡", feedback: "🚫 Creates fear and stress." },
                    { text: "Ignore behavior 😅", feedback: "😕 Likely to continue." },
                    { text: "Restrict access to all rooms 🚪", feedback: "🙂 Short-term solution, not training." }
                ]
            },
            {
                id: 29,
                question: "You’re traveling abroad with your pet. Key preparation?",
                options: [
                    { text: "Check vaccinations, documents, and rules 🩺✈️", feedback: "✅ Ensures safe and smooth travel." },
                    { text: "Ignore requirements 😬", feedback: "😕 Could face fines or quarantine." },
                    { text: "Rely on airline staff only ✈️", feedback: "🙂 Some help, but preparation is yours." },
                    { text: "Travel without vet visit 😅", feedback: "🚫 Risky and unsafe." }
                ]
            },
            {
                id: 30,
                question: "Your pet is aging and less active. How do you respond?",
                options: [
                    { text: "Adjust diet and gentle exercise 🐾", feedback: "✅ Supports health and comfort in senior years." },
                    { text: "Ignore aging 😬", feedback: "😕 Could harm quality of life." },
                    { text: "Force intense play 😅", feedback: "🚫 Stressful and unsafe." },
                    { text: "Provide comfort and attention 🏡", feedback: "👍 Great for emotional wellbeing." }
                ]
            }
        ]
    },
    {
        id: 8,
        category: "🗣️ Social Situations",
        description: "Navigate friendships, networking, and daily interactions wisely! 💬🤝",
        questions: [
            {
                id: 1,
                question: "You meet someone new at a party. How do you greet them?",
                options: [
                    { text: "Smile and shake hands 😊🤝", feedback: "✅ Friendly approach creates a good first impression." },
                    { text: "Ignore them 😶", feedback: "😕 Could seem rude or uninterested." },
                    { text: "Give a casual nod 😅", feedback: "🙂 Polite but not engaging." },
                    { text: "Make a joke immediately 😬", feedback: "😕 Could backfire if timing is off." }
                ]
            },
            {
                id: 2,
                question: "A friend is upset. How do you respond?",
                options: [
                    { text: "Listen actively and empathize ❤️", feedback: "✅ Shows support and strengthens friendship." },
                    { text: "Offer advice immediately 🤓", feedback: "🙂 Sometimes helpful, sometimes premature." },
                    { text: "Ignore their feelings 😶", feedback: "😕 Could hurt your relationship." },
                    { text: "Make them laugh quickly 😅", feedback: "👍 Lightens mood but may miss their emotions." }
                ]
            },
            {
                id: 3,
                question: "You disagree with someone in a discussion. What’s the best approach?",
                options: [
                    { text: "Respectfully state your point 🗣️", feedback: "✅ Maintains dialogue without conflict." },
                    { text: "Interrupt and argue 😡", feedback: "🚫 Could escalate tensions." },
                    { text: "Stay silent 😶", feedback: "🙂 Avoids conflict but leaves ideas unheard." },
                    { text: "Use humor to counter 😅", feedback: "👍 Lightens mood but may not clarify opinion." }
                ]
            },
            {
                id: 4,
                question: "You’re at a networking event. How do you approach people?",
                options: [
                    { text: "Introduce yourself confidently 🤝", feedback: "✅ Positive impression and connections are made." },
                    { text: "Stick to people you know 😬", feedback: "😕 Limits networking opportunities." },
                    { text: "Avoid conversations 😅", feedback: "😕 Missed chance to grow connections." },
                    { text: "Only talk about yourself 😶", feedback: "🚫 Can come across as self-centered." }
                ]
            },
            {
                id: 5,
                question: "You receive criticism at work. How do you react?",
                options: [
                    { text: "Listen carefully and learn 📝", feedback: "✅ Constructive response helps growth." },
                    { text: "Defend yourself immediately 😬", feedback: "😕 Could seem defensive and closed-minded." },
                    { text: "Ignore it 😶", feedback: "😕 Misses chance to improve." },
                    { text: "Get upset 😡", feedback: "🚫 Not productive." }
                ]
            },
            {
                id: 6,
                question: "A stranger asks for help in public. What do you do?",
                options: [
                    { text: "Offer assistance if safe ✅", feedback: "✅ Shows kindness while staying cautious." },
                    { text: "Ignore them 😶", feedback: "😕 Missed opportunity to help." },
                    { text: "Ask someone else 😬", feedback: "🙂 Delegates responsibility safely." },
                    { text: "Laugh it off 😅", feedback: "😕 Not helpful or considerate." }
                ]
            },
            {
                id: 7,
                question: "You’re in a group conversation and someone is dominating. What’s your approach?",
                options: [
                    { text: "Politely share your thoughts 🗣️", feedback: "✅ Ensures everyone’s voice is heard." },
                    { text: "Stay quiet 😶", feedback: "😕 Your ideas remain unheard." },
                    { text: "Interrupt aggressively 😡", feedback: "🚫 Could create conflict." },
                    { text: "Use humor to interject 😅", feedback: "👍 Light and effective if done tactfully." }
                ]
            },
            {
                id: 8,
                question: "You see someone being treated unfairly. What do you do?",
                options: [
                    { text: "Support them calmly 🤝", feedback: "✅ Shows empathy and courage without escalating." },
                    { text: "Ignore 😶", feedback: "😕 Avoids confrontation but may feel guilty later." },
                    { text: "Confront aggressively 😡", feedback: "🚫 Can create conflict or danger." },
                    { text: "Talk privately with them later 🗣️", feedback: "👍 Thoughtful and effective approach." }
                ]
            },
            {
                id: 9,
                question: "You meet someone from a different culture. How do you interact?",
                options: [
                    { text: "Learn and respect their customs 🌏", feedback: "✅ Encourages mutual respect and understanding." },
                    { text: "Ignore cultural differences 😶", feedback: "😕 Could unintentionally offend." },
                    { text: "Make jokes about it 😬", feedback: "🚫 Could be disrespectful." },
                    { text: "Ask questions politely 🗣️", feedback: "👍 Shows curiosity and respect." }
                ]
            },
            {
                id: 10,
                question: "You’re attending a formal event. How do you behave?",
                options: [
                    { text: "Dress appropriately and be courteous 👔", feedback: "✅ Professionalism creates good impression." },
                    { text: "Dress casually 😅", feedback: "🙂 May seem unprepared." },
                    { text: "Interrupt conversations 😬", feedback: "🚫 Rude and disrespectful." },
                    { text: "Stay on your phone 😶", feedback: "😕 Missed social opportunities." }
                ]
            },
            {
                id: 11,
                question: "Someone cancels plans last minute. How do you react?",
                options: [
                    { text: "Be understanding and reschedule 😊", feedback: "✅ Shows empathy and maintains relationship." },
                    { text: "Get angry 😡", feedback: "😕 Could strain relationship unnecessarily." },
                    { text: "Ignore and feel disappointed 😶", feedback: "🙂 Natural but doesn’t address situation." },
                    { text: "Overreact publicly 😬", feedback: "🚫 May embarrass both parties." }
                ]
            },
            {
                id: 12,
                question: "A friend shares personal news. What’s your response?",
                options: [
                    { text: "Listen attentively and react thoughtfully 👂", feedback: "✅ Builds trust and strengthens bonds." },
                    { text: "Change topic quickly 😅", feedback: "😕 Could feel dismissive." },
                    { text: "Judge their choices 😬", feedback: "🚫 Could harm your relationship." },
                    { text: "Share your own stories immediately 😶", feedback: "🙂 Fair but balance is key." }
                ]
            },
            {
                id: 13,
                question: "You’re in a disagreement online. Best approach?",
                options: [
                    { text: "Respond respectfully and calmly 💬", feedback: "✅ Encourages healthy online communication." },
                    { text: "Argue aggressively 😡", feedback: "🚫 Could escalate tensions quickly." },
                    { text: "Ignore comments 😶", feedback: "🙂 Avoids conflict but limits dialogue." },
                    { text: "Use sarcasm 😅", feedback: "😬 Could be misinterpreted negatively." }
                ]
            },
            {
                id: 14,
                question: "Someone gives you a gift you don’t like. How do you respond?",
                options: [
                    { text: "Thank them sincerely 😊", feedback: "✅ Shows appreciation and politeness." },
                    { text: "Pretend to like it 😬", feedback: "🙂 Safe but slightly dishonest." },
                    { text: "Reject it outright 😡", feedback: "🚫 Could hurt feelings." },
                    { text: "Ignore and say nothing 😶", feedback: "😕 Could seem rude." }
                ]
            },
            {
                id: 15,
                question: "You meet someone shy. How do you approach?",
                options: [
                    { text: "Be patient and friendly 😊", feedback: "✅ Helps them feel comfortable." },
                    { text: "Ignore them 😶", feedback: "😕 Could make them feel excluded." },
                    { text: "Tease to get a reaction 😬", feedback: "🚫 Could backfire." },
                    { text: "Talk loudly about yourself 😅", feedback: "😕 May intimidate them." }
                ]
            },
            {
                id: 16,
                question: "You notice someone struggling in a group project. How do you help?",
                options: [
                    { text: "Offer guidance and support 🤝", feedback: "✅ Encourages teamwork and success." },
                    { text: "Do their work for them 😬", feedback: "😕 Short-term solution, doesn’t help learning." },
                    { text: "Ignore their struggle 😶", feedback: "😕 May create resentment or failure." },
                    { text: "Criticize publicly 😡", feedback: "🚫 Could harm confidence and morale." }
                ]
            },
            {
                id: 17,
                question: "You’re at a social event and feel awkward. Best approach?",
                options: [
                    { text: "Find someone to talk to 🤝", feedback: "✅ Engaging helps you feel comfortable." },
                    { text: "Stay in the corner 😶", feedback: "😕 Missed opportunity to connect." },
                    { text: "Check your phone constantly 😅", feedback: "😕 Appears disengaged." },
                    { text: "Leave early 😬", feedback: "🙂 Sometimes okay, but may miss fun moments." }
                ]
            },
            {
                id: 18,
                question: "You’re giving feedback to a colleague. How do you proceed?",
                options: [
                    { text: "Be constructive and polite 🗣️", feedback: "✅ Encourages improvement and cooperation." },
                    { text: "Criticize harshly 😡", feedback: "🚫 Could create resentment." },
                    { text: "Avoid giving feedback 😶", feedback: "😕 Misses chance for growth." },
                    { text: "Use vague comments 😅", feedback: "😕 Not helpful." }
                ]
            },
            {
                id: 19,
                question: "Someone invites you to a social gathering you don’t want to attend. Response?",
                options: [
                    { text: "Politely decline and explain 😊", feedback: "✅ Maintains respect and honesty." },
                    { text: "Make excuses 😬", feedback: "🙂 Works temporarily but may seem evasive." },
                    { text: "Ignore the invitation 😶", feedback: "😕 Could hurt the inviter’s feelings." },
                    { text: "Cancel last minute 😅", feedback: "😬 Inconvenient and inconsiderate." }
                ]
            },
            {
                id: 20,
                question: "You witness someone being praised unfairly. What’s your approach?",
                options: [
                    { text: "Stay professional and focus on own work ✅", feedback: "✅ Maintains composure and integrity." },
                    { text: "Complain to others 😬", feedback: "😕 Could spread negativity." },
                    { text: "Confront publicly 😡", feedback: "🚫 May create conflict." },
                    { text: "Ignore silently 😶", feedback: "🙂 Sometimes safe, but voice may be needed." }
                ]
            },
            {
                id: 21,
                question: "You meet a former colleague. How do you reconnect?",
                options: [
                    { text: "Greet warmly and catch up 😊", feedback: "✅ Shows friendliness and strengthens bonds." },
                    { text: "Act indifferent 😶", feedback: "😕 Missed opportunity to reconnect." },
                    { text: "Talk only about work 😬", feedback: "🙂 Could feel transactional." },
                    { text: "Avoid them 😅", feedback: "😕 Missed social opportunity." }
                ]
            },
            {
                id: 22,
                question: "You’re in a debate. Someone insults you. Response?",
                options: [
                    { text: "Stay calm and respond logically 🗣️", feedback: "✅ Keeps discussion constructive." },
                    { text: "Insult back 😡", feedback: "🚫 Escalates conflict." },
                    { text: "Ignore and stay silent 😶", feedback: "🙂 Avoids drama, may seem passive." },
                    { text: "Walk away 😅", feedback: "👍 Sometimes best for safety and peace." }
                ]
            },
            {
                id: 23,
                question: "You want to make new friends. Best approach?",
                options: [
                    { text: "Join clubs or activities 🤝", feedback: "✅ Connects you with like-minded people." },
                    { text: "Wait for others to approach 😶", feedback: "😕 May take longer to form connections." },
                    { text: "Be overly talkative 😬", feedback: "😕 Could overwhelm people." },
                    { text: "Use social media only 📱", feedback: "🙂 Helpful, but in-person connection matters too." }
                ]
            },
            {
                id: 24,
                question: "You’re at a meeting. Someone interrupts you. How to handle?",
                options: [
                    { text: "Politely assert your turn 🗣️", feedback: "✅ Maintains respect while being heard." },
                    { text: "Stay quiet 😶", feedback: "😕 Ideas remain unheard." },
                    { text: "Interrupt angrily 😡", feedback: "🚫 Creates tension." },
                    { text: "Laugh it off 😅", feedback: "🙂 Lightens mood but may not solve issue." }
                ]
            },
            {
                id: 25,
                question: "You see a friend struggling socially. How do you support them?",
                options: [
                    { text: "Include them in conversations 🤝", feedback: "✅ Boosts confidence and connection." },
                    { text: "Ignore 😶", feedback: "😕 Could make them feel isolated." },
                    { text: "Make fun jokingly 😬", feedback: "🚫 Could hurt feelings." },
                    { text: "Give advice privately 🗣️", feedback: "👍 Helpful and considerate." }
                ]
            },
            {
                id: 26,
                question: "Someone asks for your opinion. How do you respond?",
                options: [
                    { text: "Be honest yet kind 😊", feedback: "✅ Builds trust while being respectful." },
                    { text: "Lie to please them 😬", feedback: "😕 Temporary solution, not ideal." },
                    { text: "Give vague answers 😅", feedback: "😕 Not very helpful." },
                    { text: "Criticize bluntly 😡", feedback: "🚫 Could offend or harm relationship." }
                ]
            },
            {
                id: 27,
                question: "You’re at a crowded social event. How do you act?",
                options: [
                    { text: "Be aware and polite ✅", feedback: "✅ Respectful behavior keeps everyone comfortable." },
                    { text: "Push through impatiently 😬", feedback: "😕 Could annoy others." },
                    { text: "Stay only with friends 😶", feedback: "🙂 Safe but limits networking." },
                    { text: "Ignore social norms 😅", feedback: "😕 Could create awkward situations." }
                ]
            },
            {
                id: 28,
                question: "You’re helping someone who is shy in group activities. Approach?",
                options: [
                    { text: "Encourage participation gently 😊", feedback: "✅ Boosts confidence and inclusion." },
                    { text: "Ignore 😶", feedback: "😕 They may feel excluded." },
                    { text: "Push aggressively 😬", feedback: "🚫 Could increase anxiety." },
                    { text: "Make fun jokingly 😅", feedback: "😕 Discouraging and hurtful." }
                ]
            },
            {
                id: 29,
                question: "You meet someone with different opinions. How do you react?",
                options: [
                    { text: "Listen respectfully and discuss 🗣️", feedback: "✅ Encourages open-minded conversation." },
                    { text: "Dismiss them 😬", feedback: "😕 Missed opportunity to learn." },
                    { text: "Argue aggressively 😡", feedback: "🚫 Creates tension and conflict." },
                    { text: "Avoid conversation 😶", feedback: "🙂 Sometimes safe, but not engaging." }
                ]
            },
            {
                id: 30,
                question: "You want to maintain a positive online presence. Approach?",
                options: [
                    { text: "Share helpful content and interact kindly 💬", feedback: "✅ Builds credibility and positive relationships." },
                    { text: "Post controversial opinions 😬", feedback: "😕 Could attract negativity." },
                    { text: "Ignore interactions 😶", feedback: "🙂 Limits engagement and networking." },
                    { text: "Argue online frequently 😡", feedback: "🚫 Can harm reputation and connections." }
                ]
            }
        ]
    },
    {
        id: 9,
        category: "🧩 Logic & Brain Tricks",
        description: "Sharpen your mind with tricky situations and brain teasers! 🧠✨",
        questions: [
            {
                id: 1,
                question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops Lazzies?",
                options: [
                    { text: "Yes 🤔", feedback: "Absolutely! This follows the transitive logic." },
                    { text: "No 😅", feedback: "Think about the chain of inclusion carefully." },
                    { text: "Cannot say 🤷", feedback: "With full info, we can conclude yes." },
                    { text: "Only sometimes 🤔", feedback: "Logic here is absolute, not sometimes." }
                ]
            },
            {
                id: 2,
                question: "I’m a three-digit number. My tens digit is five more than my ones digit, and my hundreds digit is eight less than my tens digit. Who am I?",
                options: [
                    { text: "194 🧠", feedback: "Exactly! Solve step by step using the clues." },
                    { text: "582 😅", feedback: "Check the relationships carefully." },
                    { text: "261 🤔", feedback: "Try solving with each clue one by one." },
                    { text: "739 😬", feedback: "Doesn’t satisfy all the given conditions." }
                ]
            },
            {
                id: 3,
                question: "Which word doesn’t belong: Apple, Banana, Carrot, Grape?",
                options: [
                    { text: "Carrot 🥕", feedback: "Correct! Carrot is a vegetable; others are fruits." },
                    { text: "Banana 🍌", feedback: "This is a fruit, like most others." },
                    { text: "Grape 🍇", feedback: "Another fruit, not the odd one out." },
                    { text: "Apple 🍎", feedback: "Also a fruit, so not unique here." }
                ]
            },
            {
                id: 4,
                question: "If you rearrange 'CIFAIPC', you get a/an?",
                options: [
                    { text: "Pacific 🌊", feedback: "Yes! Classic anagram puzzle." },
                    { text: "Pacifico 😅", feedback: "Close, but check letters carefully." },
                    { text: "Ficcap 🤔", feedback: "Not a real word." },
                    { text: "Capific 😬", feedback: "Doesn’t form a meaningful word." }
                ]
            },
            {
                id: 5,
                question: "Which number comes next: 2, 6, 12, 20, 30, ?",
                options: [
                    { text: "42 🔢", feedback: "Yes! Pattern adds consecutive even numbers." },
                    { text: "40 😅", feedback: "Check the pattern of differences." },
                    { text: "36 🤔", feedback: "The differences increase progressively." },
                    { text: "48 😬", feedback: "Too high, check the addition pattern." }
                ]
            },
            {
                id: 6,
                question: "I’m lighter than air but can fill a room. What am I?",
                options: [
                    { text: "Smoke 😬", feedback: "Heavier than air, so not correct." },
                    { text: "Helium 🎈", feedback: "Yes! Light gas that floats." },
                    { text: "Water vapor 💧", feedback: "Slightly heavier; not intended answer." },
                    { text: "Sand 🏖️", feedback: "Definitely heavier than air." }
                ]
            },
            {
                id: 7,
                question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
                options: [
                    { text: "Letter M 📝", feedback: "Classic riddle, M appears as described." },
                    { text: "Time ⏳", feedback: "Clever, but not what the riddle asks." },
                    { text: "Sun 🌞", feedback: "Not related to letters." },
                    { text: "Moon 🌙", feedback: "Also not correct." }
                ]
            },
            {
                id: 8,
                question: "If it takes 5 machines 5 minutes to make 5 widgets, how long for 100 machines to make 100 widgets?",
                options: [
                    { text: "5 minutes ⏱️", feedback: "Each machine makes 1 widget in 5 minutes." },
                    { text: "100 minutes 😅", feedback: "Overthinking! Scale up correctly." },
                    { text: "20 minutes 🤔", feedback: "Check the production rate carefully." },
                    { text: "50 minutes 😬", feedback: "Too high; consider simultaneous work." }
                ]
            },
            {
                id: 9,
                question: "Find the odd one: 121, 144, 169, 196, 225, 256, 289, 300",
                options: [
                    { text: "300 🤔", feedback: "All others are perfect squares, 300 isn’t." },
                    { text: "225 😅", feedback: "225 is 15², so it fits the pattern." },
                    { text: "144 🧠", feedback: "12², perfect square." },
                    { text: "196 😬", feedback: "14², also a perfect square." }
                ]
            },
            {
                id: 10,
                question: "If five cats can catch five mice in five minutes, how many cats for 100 mice in 100 minutes?",
                options: [
                    { text: "5 cats 🐱", feedback: "Same rate, just more time." },
                    { text: "10 cats 😅", feedback: "Not necessary, rate scales with time." },
                    { text: "20 cats 🤔", feedback: "Too many, logic is linear." },
                    { text: "100 cats 😬", feedback: "Overkill! Rate already works with time." }
                ]
            },
            {
                id: 11,
                question: "What number is missing: 1, 4, 9, 16, ?, 36",
                options: [
                    { text: "25 🔢", feedback: "Perfect squares: 1², 2², 3², 4², 5², 6²." },
                    { text: "20 😅", feedback: "Not a perfect square." },
                    { text: "30 🤔", feedback: "Doesn’t fit the pattern." },
                    { text: "24 😬", feedback: "Also not a perfect square." }
                ]
            },
            {
                id: 12,
                question: "You’re in a room with 3 light switches and 3 bulbs in another room. How do you find which switch controls which bulb?",
                options: [
                    { text: "Turn on 2 switches, leave one, touch bulbs 🕹️", feedback: "Use heat and observation to figure it out." },
                    { text: "Guess randomly 😅", feedback: "Could take forever." },
                    { text: "Ask someone 🤔", feedback: "Possible but defeats the puzzle." },
                    { text: "Turn all on/off repeatedly 😬", feedback: "Inefficient; not clever logic." }
                ]
            },
            {
                id: 13,
                question: "Which is heavier: a pound of feathers or a pound of bricks?",
                options: [
                    { text: "Both the same ⚖️", feedback: "Weight is equal despite volume differences." },
                    { text: "Bricks 😅", feedback: "Trick question! Check units carefully." },
                    { text: "Feathers 🤔", feedback: "Volume differs, weight same." },
                    { text: "Cannot tell 😬", feedback: "Actually, both weigh the same." }
                ]
            },
            {
                id: 14,
                question: "I have keys but no locks. What am I?",
                options: [
                    { text: "Piano 🎹", feedback: "Keys without locks, classic riddle!" },
                    { text: "Keyboard ⌨️", feedback: "Also works, but piano is classic." },
                    { text: "Map 🗺️", feedback: "Not related to keys here." },
                    { text: "Treasure chest 💰", feedback: "Usually has locks, not correct." }
                ]
            },
            {
                id: 15,
                question: "Two fathers and two sons buy 3 items. How is this possible?",
                options: [
                    { text: "Three generations 👴👨👦", feedback: "Grandfather, father, son; three people." },
                    { text: "Impossible 😅", feedback: "Think about generational overlap." },
                    { text: "They share items 🤔", feedback: "Not needed; only three people." },
                    { text: "Store error 😬", feedback: "The trick is in family relationships." }
                ]
            },
            {
                id: 16,
                question: "Find the next letter: A, C, F, J, ?",
                options: [
                    { text: "O 🔤", feedback: "Yes! Pattern adds 1, 2, 3, 4 letters." },
                    { text: "N 😅", feedback: "Almost, check the incremental pattern." },
                    { text: "P 🤔", feedback: "Slightly ahead." },
                    { text: "M 😬", feedback: "Too early in sequence." }
                ]
            },
            {
                id: 17,
                question: "Find the next number: 1, 1, 2, 3, 5, 8, ?",
                options: [
                    { text: "13 🔢", feedback: "Fibonacci sequence continues!" },
                    { text: "12 😅", feedback: "Doesn’t match Fibonacci." },
                    { text: "15 🤔", feedback: "Too high." },
                    { text: "11 😬", feedback: "Too low." }
                ]
            },
            {
                id: 18,
                question: "Which is the odd one: 2, 3, 5, 7, 9, 11?",
                options: [
                    { text: "9 🤔", feedback: "All others are prime numbers; 9 isn’t." },
                    { text: "7 😅", feedback: "Prime number." },
                    { text: "5 🧠", feedback: "Prime number." },
                    { text: "11 😬", feedback: "Prime number." }
                ]
            },
            {
                id: 19,
                question: "I speak without a mouth and hear without ears. What am I?",
                options: [
                    { text: "Echo 🎶", feedback: "Sound reflects without a mouth or ears." },
                    { text: "Wind 🌬️", feedback: "Doesn’t hear or speak." },
                    { text: "Shadow 👤", feedback: "No sound involved." },
                    { text: "Mirror 🪞", feedback: "Reflects light, not sound." }
                ]
            },
            {
                id: 20,
                question: "I’m tall when I’m young and short when I’m old. What am I?",
                options: [
                    { text: "Candle 🕯️", feedback: "Burns down over time, classic riddle!" },
                    { text: "Tree 🌳", feedback: "Grows taller, opposite effect." },
                    { text: "Pencil ✏️", feedback: "Not classic answer here." },
                    { text: "Person 👤", feedback: "Doesn’t fit riddle perfectly." }
                ]
            },
            {
                id: 21,
                question: "What has hands but can’t clap?",
                options: [
                    { text: "Clock ⏰", feedback: "Hands without clapping ability!" },
                    { text: "Person 🤷", feedback: "Humans can clap, so not correct." },
                    { text: "Robot 🤖", feedback: "Can technically clap, not intended." },
                    { text: "Chair 🪑", feedback: "No hands here." }
                ]
            },
            {
                id: 22,
                question: "I fly without wings, I cry without eyes. What am I?",
                options: [
                    { text: "Cloud ☁️", feedback: "Moves and produces rain." },
                    { text: "Wind 🌬️", feedback: "Moves but doesn’t cry." },
                    { text: "Bird 🐦", feedback: "Has wings." },
                    { text: "Shadow 👤", feedback: "Doesn’t cry or fly." }
                ]
            },
            {
                id: 23,
                question: "What occurs once in a year, twice in a week, and never in a day?",
                options: [
                    { text: "Letter E 📝", feedback: "Appears exactly as described!" },
                    { text: "Sunday 🌞", feedback: "Doesn’t fit riddle." },
                    { text: "Month 📅", feedback: "Not related to letters." },
                    { text: "Time ⏳", feedback: "Clever, but letters intended." }
                ]
            },
            {
                id: 24,
                question: "You have 2 ropes that each burn 1 hour unevenly. How do you measure 45 minutes?",
                options: [
                    { text: "Light both ends of one, one end of other 🔥", feedback: "Clever timing puzzle solution!" },
                    { text: "Light one rope 😅", feedback: "Won’t measure 45 minutes accurately." },
                    { text: "Measure by clock ⏱️", feedback: "Puzzle requires rope trick." },
                    { text: "Guess time 🤔", feedback: "Not precise." }
                ]
            },
            {
                id: 25,
                question: "If you take 3 apples from 5 apples, how many do you have?",
                options: [
                    { text: "3 🍎", feedback: "You have the ones you took!" },
                    { text: "2 😅", feedback: "That’s what remains, not what you have." },
                    { text: "5 🤔", feedback: "Not correct; question asks what you take." },
                    { text: "None 😬", feedback: "Incorrect interpretation." }
                ]
            }
        ]
    },
    {
        id: 10,
        category: "💰 Money & Savings",
        description: "Test your financial wisdom and learn smart saving habits! 🏦✨",
        questions: [
            {
                id: 1,
                question: "You receive $100. What's the best way to manage it?",
                options: [
                    { text: "Save part and spend part 💵", feedback: "Good balance! Saving and spending wisely." },
                    { text: "Spend all immediately 😅", feedback: "Tempting, but risky for future needs." },
                    { text: "Hide under mattress 🤔", feedback: "Not ideal; money doesn’t grow this way." },
                    { text: "Give it all away 😬", feedback: "Generous, but could harm your own finances." }
                ]
            },
            {
                id: 2,
                question: "Why is it smart to have an emergency fund?",
                options: [
                    { text: "Covers unexpected expenses 🏥", feedback: "Exactly! Provides financial security." },
                    { text: "For luxury shopping 😅", feedback: "Not really; emergency funds aren’t for fun." },
                    { text: "To lend to friends 🤔", feedback: "Possible, but main purpose is emergencies." },
                    { text: "To keep it under bed 😬", feedback: "Better in a bank for safety and interest." }
                ]
            },
            {
                id: 3,
                question: "You get a bonus at work. What should you do first?",
                options: [
                    { text: "Pay off debts 💳", feedback: "Smart! Reduces interest and stress." },
                    { text: "Buy gadgets 😅", feedback: "Fun, but not financially responsible." },
                    { text: "Eat out 🍔", feedback: "Enjoyable, but short-term satisfaction." },
                    { text: "Invest part 📈", feedback: "Good option for long-term growth." }
                ]
            },
            {
                id: 4,
                question: "Why is budgeting important?",
                options: [
                    { text: "Helps track spending 📊", feedback: "Exactly! Prevents overspending." },
                    { text: "Restricts fun 😅", feedback: "Not necessarily; balance is key." },
                    { text: "For showing off 🤔", feedback: "Budgeting isn’t about impressing others." },
                    { text: "To ignore bills 😬", feedback: "Definitely not; it prevents missed payments." }
                ]
            },
            {
                id: 5,
                question: "You want to save $500 in 5 months. Best approach?",
                options: [
                    { text: "Save $100/month 💰", feedback: "Perfect! Consistent small savings work." },
                    { text: "Wait until month 5 😅", feedback: "Harder to save large amount later." },
                    { text: "Ask someone to save for you 🤔", feedback: "Not ideal; personal responsibility matters." },
                    { text: "Buy lottery tickets 😬", feedback: "Not reliable for saving." }
                ]
            },
            {
                id: 6,
                question: "You earn interest on savings. Why is it good?",
                options: [
                    { text: "Money grows over time 🌱", feedback: "Exactly! Compounding helps wealth." },
                    { text: "Bank takes more money 😅", feedback: "Interest is actually your gain, not loss." },
                    { text: "Taxes go up 🤔", feedback: "Taxes are separate; interest still benefits you." },
                    { text: "It doesn’t matter 😬", feedback: "Interest is an important tool for savings." }
                ]
            },
            {
                id: 7,
                question: "Your friend asks for a loan. How should you respond?",
                options: [
                    { text: "Lend if affordable 🤝", feedback: "Generous but safe, check your limits." },
                    { text: "Lend all money 😅", feedback: "Risky! Keep your own finances safe." },
                    { text: "Refuse rudely 😬", feedback: "Unnecessary rudeness could hurt friendship." },
                    { text: "Ignore request 🤔", feedback: "Not ideal; communicate clearly instead." }
                ]
            },
            {
                id: 8,
                question: "What’s better: saving or investing?",
                options: [
                    { text: "Both, depending on goal 💡", feedback: "Yes! Saving for safety, investing for growth." },
                    { text: "Only saving 😅", feedback: "Safe but may not grow wealth fast." },
                    { text: "Only investing 🤔", feedback: "Higher returns but also higher risk." },
                    { text: "Neither 😬", feedback: "Ignoring finances won’t help you." }
                ]
            },
            {
                id: 9,
                question: "You want to buy a new phone. How do you save?",
                options: [
                    { text: "Set aside small amounts monthly 💵", feedback: "Perfect! Gradual savings make goals achievable." },
                    { text: "Use credit immediately 😅", feedback: "Can lead to debt if not managed." },
                    { text: "Ask parents 🤔", feedback: "Depends, but personal savings teaches discipline." },
                    { text: "Ignore budget 😬", feedback: "Overspending can cause problems." }
                ]
            },
            {
                id: 10,
                question: "Why should you compare prices before buying?",
                options: [
                    { text: "Find best deal 🏷️", feedback: "Smart! Helps save money effectively." },
                    { text: "Waste time 😅", feedback: "Time well spent if it saves money." },
                    { text: "To brag 🤔", feedback: "Not the reason; comparison is practical." },
                    { text: "Ignore it 😬", feedback: "Could overspend unnecessarily." }
                ]
            },
            {
                id: 11,
                question: "What is an interest rate?",
                options: [
                    { text: "Cost of borrowing money 💵", feedback: "Correct! Also applies to saving growth." },
                    { text: "Bank fee 😅", feedback: "Partly correct, but it’s about borrowing/lending." },
                    { text: "Fixed charge 🤔", feedback: "Not exactly; varies with rate." },
                    { text: "Free money 😬", feedback: "Interest is never free; there’s a reason!" }
                ]
            },
            {
                id: 12,
                question: "Why diversify your investments?",
                options: [
                    { text: "Reduce risk 🎯", feedback: "Yes! Spreading money avoids total loss." },
                    { text: "Make it complicated 😅", feedback: "Not the main reason." },
                    { text: "For fun 🤔", feedback: "Investing is serious; diversification is for safety." },
                    { text: "To ignore savings 😬", feedback: "Risky approach!" }
                ]
            },
            {
                id: 13,
                question: "You spend $50 on eating out weekly. What should you do to save?",
                options: [
                    { text: "Cook at home more 🍳", feedback: "Good choice! Reduces expenses." },
                    { text: "Eat out more 😅", feedback: "Opposite of saving goal." },
                    { text: "Borrow money 🤔", feedback: "Not ideal; increases debt." },
                    { text: "Ignore it 😬", feedback: "Costs add up over time." }
                ]
            },
            {
                id: 14,
                question: "What is a budget?",
                options: [
                    { text: "Plan for income & expenses 📊", feedback: "Exactly! Helps manage money." },
                    { text: "A list of debts 😅", feedback: "Part of budget, but not the full idea." },
                    { text: "A bank account 🤔", feedback: "Not the definition." },
                    { text: "Shopping list 😬", feedback: "Completely different concept." }
                ]
            },
            {
                id: 15,
                question: "Why is tracking expenses important?",
                options: [
                    { text: "Avoid overspending 💡", feedback: "Yes! Helps manage finances effectively." },
                    { text: "Waste of time 😅", feedback: "Actually saves money in the long run." },
                    { text: "To brag 🤔", feedback: "Not the purpose." },
                    { text: "Ignore receipts 😬", feedback: "Could lead to overspending." }
                ]
            },
            {
                id: 16,
                question: "You receive a paycheck. What should you do first?",
                options: [
                    { text: "Pay essential bills 🏠", feedback: "Smart move! Prioritize necessities." },
                    { text: "Spend on shopping 😅", feedback: "Fun but risky before bills." },
                    { text: "Save a portion 💵", feedback: "Good habit for future security." },
                    { text: "Give it all away 😬", feedback: "Generous but risky for personal needs." }
                ]
            },
            {
                id: 17,
                question: "What is the benefit of a savings account?",
                options: [
                    { text: "Earn interest 💰", feedback: "Correct! Your money grows safely." },
                    { text: "Keep cash safe 😅", feedback: "Partly correct, also earns interest." },
                    { text: "Spend faster 🤔", feedback: "Opposite of purpose." },
                    { text: "No benefit 😬", feedback: "Actually, there are clear advantages." }
                ]
            },
            {
                id: 18,
                question: "Why is avoiding impulse buying important?",
                options: [
                    { text: "Save money 💡", feedback: "Yes! Helps control unnecessary spending." },
                    { text: "Buy better 😅", feedback: "Sometimes true, but main reason is savings." },
                    { text: "For fun 🤔", feedback: "Impulse buying rarely helps finances." },
                    { text: "Ignore it 😬", feedback: "Could harm your budget." }
                ]
            },
            {
                id: 19,
                question: "What is compound interest?",
                options: [
                    { text: "Interest on principal & interest 📈", feedback: "Correct! Helps money grow faster." },
                    { text: "Bank fee 😅", feedback: "Not accurate; it’s your gain." },
                    { text: "Loan penalty 🤔", feedback: "No, it’s for savings/investment growth." },
                    { text: "Free money 😬", feedback: "It grows due to reinvestment, not magic." }
                ]
            },
            {
                id: 20,
                question: "You want a big purchase next year. Best financial strategy?",
                options: [
                    { text: "Start saving now 💵", feedback: "Yes! Time helps accumulate funds." },
                    { text: "Borrow now 😅", feedback: "May incur interest; not best first option." },
                    { text: "Ignore plan 🤔", feedback: "Won’t meet your goal easily." },
                    { text: "Spend freely 😬", feedback: "Could lead to regret later." }
                ]
            },
            {
                id: 21,
                question: "What is a smart way to handle credit cards?",
                options: [
                    { text: "Pay full balance monthly 💳", feedback: "Avoids interest and keeps good credit." },
                    { text: "Pay minimum 😅", feedback: "Leads to higher interest over time." },
                    { text: "Ignore bills 🤔", feedback: "Could harm credit score." },
                    { text: "Max out cards 😬", feedback: "Very risky!" }
                ]
            },
            {
                id: 22,
                question: "Why is it good to shop with a list?",
                options: [
                    { text: "Avoid unnecessary spending 🛒", feedback: "Yes! Helps stick to budget." },
                    { text: "Make shopping fun 😅", feedback: "Fun, but not the main reason." },
                    { text: "Forget essentials 🤔", feedback: "Opposite effect." },
                    { text: "Spend more 😬", feedback: "Not ideal." }
                ]
            },
            {
                id: 23,
                question: "You want to save for retirement. Best approach?",
                options: [
                    { text: "Start early 📅", feedback: "Time is your friend; compound growth works." },
                    { text: "Wait until later 😅", feedback: "Missed opportunity for growth." },
                    { text: "Spend first 🤔", feedback: "Not a wise strategy." },
                    { text: "Ignore retirement 😬", feedback: "Could lead to trouble later." }
                ]
            },
            {
                id: 24,
                question: "Why keep track of subscriptions?",
                options: [
                    { text: "Avoid unnecessary payments 💡", feedback: "Yes! Saves money monthly." },
                    { text: "For fun 😅", feedback: "Not the main reason." },
                    { text: "To brag 🤔", feedback: "No, tracking is practical." },
                    { text: "Ignore them 😬", feedback: "Can waste money." }
                ]
            },
            {
                id: 25,
                question: "What is a good rule for saving income?",
                options: [
                    { text: "Save at least 20% 💵", feedback: "Great habit for long-term security." },
                    { text: "Spend 100% 😅", feedback: "Dangerous! No savings." },
                    { text: "Save nothing 🤔", feedback: "Not wise." },
                    { text: "Only save gifts 😬", feedback: "Limited savings approach." }
                ]
            },
            {
                id: 26,
                question: "Why is it important to review bank statements?",
                options: [
                    { text: "Check for errors 📝", feedback: "Yes! Keeps your accounts accurate." },
                    { text: "To waste time 😅", feedback: "Not the main purpose." },
                    { text: "To brag 🤔", feedback: "Incorrect." },
                    { text: "Ignore them 😬", feedback: "Could miss fraud or errors." }
                ]
            },
            {
                id: 27,
                question: "Why is comparison shopping useful?",
                options: [
                    { text: "Get better deals 🏷️", feedback: "Yes! Maximizes value for money." },
                    { text: "Confuses buyer 😅", feedback: "Could, but overall saves money." },
                    { text: "For fun 🤔", feedback: "Secondary benefit." },
                    { text: "Ignore prices 😬", feedback: "May overspend." }
                ]
            },
            {
                id: 28,
                question: "What is a rainy day fund?",
                options: [
                    { text: "Money saved for emergencies ☔", feedback: "Exactly! Helps in unexpected situations." },
                    { text: "Money for fun 😅", feedback: "Not the intended purpose." },
                    { text: "Debt payment 🤔", feedback: "Could be separate; main goal is safety." },
                    { text: "Investment fund 😬", feedback: "Different purpose; rainy day is for emergencies." }
                ]
            },
            {
                id: 29,
                question: "Why avoid payday loans?",
                options: [
                    { text: "High interest 💸", feedback: "Yes! Can trap you in debt." },
                    { text: "Too convenient 😅", feedback: "Convenience is misleading." },
                    { text: "Short term 🤔", feedback: "True, but main risk is high interest." },
                    { text: "No reason 😬", feedback: "There are clear dangers." }
                ]
            },
            {
                id: 30,
                question: "You find $50 on the street. Best choice?",
                options: [
                    { text: "Try to return it 🙏", feedback: "Ethical choice! Shows integrity." },
                    { text: "Keep it immediately 😅", feedback: "Tempting, but not ethical." },
                    { text: "Ignore it 🤔", feedback: "Could be lost opportunity for good deed." },
                    { text: "Donate it 😬", feedback: "Generous, but first try to find the owner." }
                ]
            }
        ]
    },
    {
        id: 11,
        category: "🧐 Critical Thinking",
        description: "Challenge your mind and improve your reasoning skills! 💡🧠",
        questions: [
            {
                id: 1,
                question: "A bat and a ball cost $1.10 together. The bat costs $1 more than the ball. How much does the ball cost?",
                options: [
                    { text: "5 cents 🧠", feedback: "Correct! Ball costs 5 cents, bat $1.05." },
                    { text: "10 cents 😅", feedback: "Common mistake; check the $1 difference." },
                    { text: "15 cents 🤔", feedback: "Too high; calculate carefully." },
                    { text: "1 dollar 😬", feedback: "Bat is $1 more, not the ball itself." }
                ]
            },
            {
                id: 2,
                question: "If all roses are flowers and some flowers fade quickly, can some roses fade quickly?",
                options: [
                    { text: "Yes 🤔", feedback: "Correct! Some flowers that fade may include roses." },
                    { text: "No 😅", feedback: "Logic allows it, don’t overthink." },
                    { text: "Cannot say 🧠", feedback: "With given info, yes is possible." },
                    { text: "Only sometimes 😬", feedback: "Ambiguous; logical reasoning favors yes." }
                ]
            },
            {
                id: 3,
                question: "You see a boat filled with people, yet there isn’t a single person on board. How is this possible?",
                options: [
                    { text: "All are married 😅", feedback: "Correct! Wordplay on 'single'." },
                    { text: "Invisible people 🤔", feedback: "Funny, but not intended answer." },
                    { text: "Ghost boat 👻", feedback: "Not logical in this context." },
                    { text: "Empty boat 😬", feedback: "Contradicts the question." }
                ]
            },
            {
                id: 4,
                question: "Which statement is logically true: If it rains, the ground gets wet. It’s wet now.",
                options: [
                    { text: "It rained 🌧️", feedback: "Not necessarily; other causes possible." },
                    { text: "The ground is wet 💧", feedback: "Correct! Fact stated." },
                    { text: "It did not rain 😅", feedback: "Cannot conclude this." },
                    { text: "Rain caused this 🤔", feedback: "Possible, but not definite." }
                ]
            },
            {
                id: 5,
                question: "A store sells 2 shirts for $30. One shirt costs $20 more than the other. How much is the cheaper shirt?",
                options: [
                    { text: "$5 🧠", feedback: "Correct! Cheaper shirt $5, expensive $25." },
                    { text: "$10 😅", feedback: "Too high; check difference carefully." },
                    { text: "$15 🤔", feedback: "Incorrect; sum doesn’t match." },
                    { text: "$20 😬", feedback: "This is the more expensive shirt." }
                ]
            },
            {
                id: 6,
                question: "If Tom is taller than Jerry, and Jerry is taller than Sam, who is the tallest?",
                options: [
                    { text: "Tom 🧍‍♂️", feedback: "Correct! Chain comparison shows Tom is tallest." },
                    { text: "Jerry 😅", feedback: "He is in middle." },
                    { text: "Sam 🤔", feedback: "Shortest of the three." },
                    { text: "Cannot say 😬", feedback: "We can conclude from given info." }
                ]
            },
            {
                id: 7,
                question: "Which of these is a logical sequence: 2, 6, 12, 20, ?",
                options: [
                    { text: "30 🔢", feedback: "Correct! Pattern adds consecutive even numbers." },
                    { text: "28 😅", feedback: "Check differences carefully." },
                    { text: "32 🤔", feedback: "Too high." },
                    { text: "26 😬", feedback: "Too low." }
                ]
            },
            {
                id: 8,
                question: "You have a fox, a chicken, and grain. You must cross a river with a boat carrying only one at a time. How do you do it?",
                options: [
                    { text: "Take chicken first 🐔", feedback: "Correct! Then alternate to avoid eating." },
                    { text: "Take fox first 🦊", feedback: "Leaves chicken alone with grain; risky." },
                    { text: "Take grain first 🌾", feedback: "Leaves fox and chicken alone; not ideal." },
                    { text: "Take all together 😬", feedback: "Boat can’t hold all at once." }
                ]
            },
            {
                id: 9,
                question: "If five machines take 5 minutes to make 5 items, how long for 100 machines to make 100 items?",
                options: [
                    { text: "5 minutes ⏱️", feedback: "Correct! Each machine works simultaneously." },
                    { text: "100 minutes 😅", feedback: "Overthinking; scale properly." },
                    { text: "20 minutes 🤔", feedback: "Doesn’t match calculation." },
                    { text: "50 minutes 😬", feedback: "Too long." }
                ]
            },
            {
                id: 10,
                question: "You are in a room with 3 switches and 3 bulbs in another room. How to find which switch belongs to which bulb?",
                options: [
                    { text: "Turn on 2, leave one, feel bulbs 🕹️", feedback: "Correct! Touch warm bulbs to identify." },
                    { text: "Turn on all 😅", feedback: "Won’t help distinguish." },
                    { text: "Guess 🤔", feedback: "Not reliable." },
                    { text: "Leave all off 😬", feedback: "No info gained." }
                ]
            },
            {
                id: 11,
                question: "Which word does not belong: Dog, Cat, Rabbit, Carrot?",
                options: [
                    { text: "Carrot 🥕", feedback: "Correct! All others are animals." },
                    { text: "Dog 🐶", feedback: "Animal, fits with group." },
                    { text: "Cat 🐱", feedback: "Animal, fits with group." },
                    { text: "Rabbit 🐇", feedback: "Animal, fits with group." }
                ]
            },
            {
                id: 12,
                question: "I speak without a mouth and hear without ears. What am I?",
                options: [
                    { text: "Echo 🎶", feedback: "Classic riddle! Sound reflects." },
                    { text: "Wind 🌬️", feedback: "Moves, but doesn’t speak." },
                    { text: "Shadow 👤", feedback: "No sound involved." },
                    { text: "Mirror 🪞", feedback: "Reflects light, not sound." }
                ]
            },
            {
                id: 13,
                question: "If you rearrange 'LISTEN', what do you get?",
                options: [
                    { text: "Silent 🤫", feedback: "Perfect anagram! Matches meaning too." },
                    { text: "Inlets 😅", feedback: "Also correct word, but silent fits theme." },
                    { text: "Tinsel 🤔", feedback: "Correct anagram but not logical connection." },
                    { text: "Nestil 😬", feedback: "Not a real word." }
                ]
            },
            {
                id: 14,
                question: "A farmer has 17 sheep. All but 9 run away. How many remain?",
                options: [
                    { text: "9 🐑", feedback: "Correct! The phrasing is tricky." },
                    { text: "8 😅", feedback: "Check wording carefully." },
                    { text: "17 🤔", feedback: "Not correct." },
                    { text: "0 😬", feedback: "No, some remain." }
                ]
            },
            {
                id: 15,
                question: "What occurs once in a minute, twice in a moment, never in a thousand years?",
                options: [
                    { text: "Letter M 📝", feedback: "Classic word riddle! Logical observation." },
                    { text: "Time ⏳", feedback: "Good guess, but letters intended." },
                    { text: "Sun 🌞", feedback: "Not correct." },
                    { text: "Moon 🌙", feedback: "Also not correct." }
                ]
            },
            {
                id: 16,
                question: "A cube has 6 faces. How many edges does it have?",
                options: [
                    { text: "12 📐", feedback: "Correct! Count edges carefully." },
                    { text: "6 😅", feedback: "Number of faces, not edges." },
                    { text: "8 🤔", feedback: "Number of corners, not edges." },
                    { text: "10 😬", feedback: "Incorrect for a cube." }
                ]
            },
            {
                id: 17,
                question: "If two hours ago it was as long after one o’clock as it was before one o’clock tomorrow, what time is it now?",
                options: [
                    { text: "11 AM 🕚", feedback: "Classic time puzzle; careful reasoning!" },
                    { text: "12 PM 😅", feedback: "Check the phrasing carefully." },
                    { text: "1 PM 🤔", feedback: "Not the solution." },
                    { text: "10 AM 😬", feedback: "Too early." }
                ]
            },
            {
                id: 18,
                question: "Which is heavier: a pound of feathers or a pound of bricks?",
                options: [
                    { text: "Same weight ⚖️", feedback: "Correct! Trick question, same weight." },
                    { text: "Bricks 😅", feedback: "Common mistake; weight is equal." },
                    { text: "Feathers 🤔", feedback: "Volume differs, not weight." },
                    { text: "Cannot tell 😬", feedback: "Both weigh 1 pound." }
                ]
            },
            {
                id: 19,
                question: "You have two ropes that burn 1 hour unevenly. How to measure 45 minutes?",
                options: [
                    { text: "Light both ends of one, one end of other 🔥", feedback: "Correct! Clever timing trick." },
                    { text: "Light one rope 😅", feedback: "Won’t give accurate time." },
                    { text: "Guess time 🤔", feedback: "Not precise." },
                    { text: "Measure by clock ⏱️", feedback: "Puzzle requires rope trick." }
                ]
            },
            {
                id: 20,
                question: "Find next number: 1, 4, 9, 16, ?",
                options: [
                    { text: "25 🔢", feedback: "Correct! Perfect squares continue." },
                    { text: "20 😅", feedback: "Not a perfect square." },
                    { text: "30 🤔", feedback: "Incorrect." },
                    { text: "24 😬", feedback: "Incorrect." }
                ]
            },
            {
                id: 21,
                question: "Which is the odd one out: Mercury, Venus, Earth, Mars, Pluto?",
                options: [
                    { text: "Pluto 🪐", feedback: "Correct! No longer officially a planet." },
                    { text: "Earth 🌎", feedback: "Planet, fits with group." },
                    { text: "Mars ⛏️", feedback: "Planet, fits with group." },
                    { text: "Venus 🌕", feedback: "Planet, fits with group." }
                ]
            },
            {
                id: 22,
                question: "A man builds a house with all four sides facing south. A bear walks by. What color is the bear?",
                options: [
                    { text: "White 🐻", feedback: "Correct! Only at the North Pole." },
                    { text: "Brown 😅", feedback: "Common bear, but not correct here." },
                    { text: "Black 🤔", feedback: "Not correct." },
                    { text: "Gray 😬", feedback: "Incorrect." }
                ]
            },
            {
                id: 23,
                question: "If you have 3 coins totaling 30 cents, and one is not a nickel, what are the coins?",
                options: [
                    { text: "Quarter, nickel, nickel 🪙", feedback: "Correct! One coin is not a nickel." },
                    { text: "Dime, dime, nickel 😅", feedback: "Total 25 cents, not enough." },
                    { text: "Three dimes 🤔", feedback: "Total 30 cents but violates the riddle." },
                    { text: "Three nickels 😬", feedback: "Only 15 cents." }
                ]
            },
            {
                id: 24,
                question: "A man pushes his car to a hotel and loses his money. Why?",
                options: [
                    { text: "Playing Monopoly 🎲", feedback: "Correct! Classic riddle context." },
                    { text: "Car broke 😅", feedback: "Doesn’t explain losing money." },
                    { text: "Hotel robbery 🤔", feedback: "Not intended riddle solution." },
                    { text: "Bank error 😬", feedback: "Incorrect." }
                ]
            },
            {
                id: 25,
                question: "If three kids can paint 3 walls in 3 hours, how long for 6 kids to paint 6 walls?",
                options: [
                    { text: "3 hours 🖌️", feedback: "Correct! Doubling workers doubles output." },
                    { text: "6 hours 😅", feedback: "Overestimate." },
                    { text: "1.5 hours 🤔", feedback: "Undercalculated." },
                    { text: "9 hours 😬", feedback: "Too long." }
                ]
            },
            {
                id: 26,
                question: "You see a sequence: 2, 4, 8, 16, ?. What’s next?",
                options: [
                    { text: "32 🔢", feedback: "Correct! Sequence doubles each time." },
                    { text: "24 😅", feedback: "Doesn’t fit doubling pattern." },
                    { text: "30 🤔", feedback: "Incorrect." },
                    { text: "40 😬", feedback: "Incorrect." }
                ]
            },
            {
                id: 27,
                question: "If a plane crashes on the border of two countries, where do you bury survivors?",
                options: [
                    { text: "Nowhere 🤔", feedback: "Correct! Survivors are alive." },
                    { text: "Country A 😅", feedback: "Trick question." },
                    { text: "Country B 😬", feedback: "Also incorrect." },
                    { text: "Both 🤔", feedback: "Still incorrect." }
                ]
            },
            {
                id: 28,
                question: "You have a fox, a goose, and grain. You can carry one at a time. How do you get all safely across a river?",
                options: [
                    { text: "Take goose first 🦢", feedback: "Correct! Then alternate items to avoid loss." },
                    { text: "Take fox first 🦊", feedback: "Leaves goose with grain; unsafe." },
                    { text: "Take grain first 🌾", feedback: "Leaves fox with goose; unsafe." },
                    { text: "Take all together 😬", feedback: "Boat too small; not possible." }
                ]
            },
            {
                id: 29,
                question: "Which number is missing: 1, 4, 9, 16, ?, 36?",
                options: [
                    { text: "25 🔢", feedback: "Perfect squares continue!" },
                    { text: "20 😅", feedback: "Not a perfect square." },
                    { text: "30 🤔", feedback: "Incorrect." },
                    { text: "24 😬", feedback: "Incorrect." }
                ]
            },
            {
                id: 30,
                question: "I am tall when young, short when old. What am I?",
                options: [
                    { text: "Candle 🕯️", feedback: "Classic riddle! Burns down over time." },
                    { text: "Tree 🌳", feedback: "Grows taller; opposite effect." },
                    { text: "Person 👤", feedback: "Doesn’t match riddle perfectly." },
                    { text: "Pencil ✏️", feedback: "Not intended answer." }
                ]
            }
        ]
    },
    {
        id: 12,
        category: "🚨 Safety & Emergency",
        description: "Test your safety knowledge and learn smart emergency responses! 🦺⚡",
        questions: [
            {
                id: 1,
                question: "You smell gas at home. What should you do first?",
                options: [
                    { text: "Open windows & leave 🏃‍♂️", feedback: "Correct! Ventilate and exit safely." },
                    { text: "Light a match 😅", feedback: "Dangerous! Could cause explosion." },
                    { text: "Ignore it 🤔", feedback: "Unsafe; immediate action needed." },
                    { text: "Call a friend 😬", feedback: "Better to call emergency services first." }
                ]
            },
            {
                id: 2,
                question: "During an earthquake, the safest place is?",
                options: [
                    { text: "Under a sturdy table 🪑", feedback: "Correct! Protects you from falling debris." },
                    { text: "Near windows 😅", feedback: "Glass can shatter; not safe." },
                    { text: "On a balcony 🤔", feedback: "Risk of falling debris or collapse." },
                    { text: "In a doorway 😬", feedback: "Outdated advice; safer under furniture." }
                ]
            },
            {
                id: 3,
                question: "If someone is bleeding heavily, what is the first step?",
                options: [
                    { text: "Apply direct pressure ✋", feedback: "Correct! Helps stop bleeding quickly." },
                    { text: "Move them around 😅", feedback: "Could worsen injury." },
                    { text: "Give water 🤔", feedback: "Not immediate priority." },
                    { text: "Wait for ambulance 😬", feedback: "Immediate action can save lives." }
                ]
            },
            {
                id: 4,
                question: "You see smoke and fire in a building. What should you do?",
                options: [
                    { text: "Evacuate immediately 🏃‍♀️", feedback: "Correct! Safety first." },
                    { text: "Try to extinguish alone 😅", feedback: "Dangerous; prioritize getting out." },
                    { text: "Take photos 🤔", feedback: "Not recommended in emergency." },
                    { text: "Hide under bed 😬", feedback: "Extremely unsafe." }
                ]
            },
            {
                id: 5,
                question: "A friend is choking. What should you do?",
                options: [
                    { text: "Perform Heimlich maneuver 🤲", feedback: "Correct! Can save their life." },
                    { text: "Give water 😅", feedback: "May worsen choking." },
                    { text: "Pat on back gently 🤔", feedback: "May not dislodge object." },
                    { text: "Ignore 😬", feedback: "Unsafe; action needed immediately." }
                ]
            },
            {
                id: 6,
                question: "During a thunderstorm, the safest place is?",
                options: [
                    { text: "Indoors 🏠", feedback: "Correct! Avoid open areas and tall objects." },
                    { text: "Under a tree 🌳", feedback: "Dangerous! Lightning risk." },
                    { text: "On a hilltop 🤔", feedback: "Exposed and unsafe." },
                    { text: "Near water 😬", feedback: "Water conducts electricity; very risky." }
                ]
            },
            {
                id: 7,
                question: "If someone faints, what should you do?",
                options: [
                    { text: "Lay them flat and elevate legs 🛌", feedback: "Correct! Helps blood flow to brain." },
                    { text: "Give food immediately 😅", feedback: "Not immediate priority." },
                    { text: "Spray water 🤔", feedback: "Not recommended as first step." },
                    { text: "Shake them 😬", feedback: "Unsafe; could cause harm." }
                ]
            },
            {
                id: 8,
                question: "During a flood, what is the safest option?",
                options: [
                    { text: "Move to higher ground 🌄", feedback: "Correct! Avoids rising water." },
                    { text: "Walk through water 😅", feedback: "Risky; currents can be strong." },
                    { text: "Stay in basement 🤔", feedback: "Dangerous; water can rise quickly." },
                    { text: "Drive through water 😬", feedback: "Extremely unsafe." }
                ]
            },
            {
                id: 9,
                question: "You see a person unconscious and not breathing. What is the first step?",
                options: [
                    { text: "Call emergency services ☎️", feedback: "Correct! Immediate professional help is crucial." },
                    { text: "Leave them 😅", feedback: "Unsafe; action needed." },
                    { text: "Give water 🤔", feedback: "Not appropriate immediately." },
                    { text: "Move them roughly 😬", feedback: "Could cause further injury." }
                ]
            },
            {
                id: 10,
                question: "During a fire, what is safer: elevator or stairs?",
                options: [
                    { text: "Stairs 🪜", feedback: "Correct! Elevators can fail in fire." },
                    { text: "Elevator 😅", feedback: "Unsafe; can trap you." },
                    { text: "Depends 🤔", feedback: "Not advisable; stairs are always safer." },
                    { text: "Neither 😬", feedback: "Stairs are safe; elevator is risky." }
                ]
            },
            {
                id: 11,
                question: "If your clothes catch fire, what should you do?",
                options: [
                    { text: "Stop, drop, and roll 🔥", feedback: "Correct! Smothers the flames." },
                    { text: "Run quickly 😅", feedback: "Spreads fire; dangerous." },
                    { text: "Jump in water 🤔", feedback: "Works if nearby, but roll is immediate action." },
                    { text: "Remove clothes 😬", feedback: "May cause burns; stop/drop/roll is safer." }
                ]
            },
            {
                id: 12,
                question: "A minor cut occurs. What should you do?",
                options: [
                    { text: "Clean and bandage ✋", feedback: "Correct! Prevents infection." },
                    { text: "Ignore it 😅", feedback: "Risk of infection." },
                    { text: "Apply heavy chemicals 🤔", feedback: "Can cause harm; avoid." },
                    { text: "Cover with dirty cloth 😬", feedback: "Unsafe; may cause infection." }
                ]
            },
            {
                id: 13,
                question: "During a car accident, what’s the first thing to check?",
                options: [
                    { text: "Safety of yourself & others 🚗", feedback: "Correct! Prevents further harm." },
                    { text: "Call insurance 😅", feedback: "Important later, but safety first." },
                    { text: "Take photos 🤔", feedback: "After ensuring safety." },
                    { text: "Move the car immediately 😬", feedback: "Could be unsafe if injured." }
                ]
            },
            {
                id: 14,
                question: "You encounter a suspicious package in public. What should you do?",
                options: [
                    { text: "Do not touch & alert authorities 🚨", feedback: "Correct! Avoid risk of explosives." },
                    { text: "Open it 😅", feedback: "Dangerous!" },
                    { text: "Move it yourself 🤔", feedback: "Unsafe; professionals handle it." },
                    { text: "Ignore it 😬", feedback: "Could be dangerous for others." }
                ]
            },
            {
                id: 15,
                question: "You see someone slipping on ice. What’s the safest way to help?",
                options: [
                    { text: "Support them gently 🧊", feedback: "Correct! Avoid pulling abruptly." },
                    { text: "Push them up quickly 😅", feedback: "Could cause injury." },
                    { text: "Ignore 🤔", feedback: "Unsafe; someone could be hurt." },
                    { text: "Laugh 😬", feedback: "Not helpful!" }
                ]
            },
            {
                id: 16,
                question: "While hiking, you get lost. What should you do first?",
                options: [
                    { text: "Stay put and signal for help 🏞️", feedback: "Correct! Easier to be found." },
                    { text: "Run in random direction 😅", feedback: "Increases risk of injury." },
                    { text: "Climb a tree 🤔", feedback: "May help visibility but risky." },
                    { text: "Ignore situation 😬", feedback: "Unsafe; immediate action needed." }
                ]
            },
            {
                id: 17,
                question: "If someone is having a seizure, what should you do?",
                options: [
                    { text: "Move objects away & protect head 🧑‍⚕️", feedback: "Correct! Prevents injury." },
                    { text: "Hold them down 😅", feedback: "Could cause harm." },
                    { text: "Give water 🤔", feedback: "Not during seizure." },
                    { text: "Leave alone 😬", feedback: "Unsafe; help is needed." }
                ]
            },
            {
                id: 18,
                question: "In case of carbon monoxide leak, what is the safest action?",
                options: [
                    { text: "Evacuate & call emergency services 🏠", feedback: "Correct! Gas is odorless and deadly." },
                    { text: "Open small window 😅", feedback: "Insufficient ventilation; unsafe." },
                    { text: "Use fan 🤔", feedback: "Not effective in emergency." },
                    { text: "Ignore 😬", feedback: "Dangerous; could be fatal." }
                ]
            },
            {
                id: 19,
                question: "If a tornado is approaching, where should you go?",
                options: [
                    { text: "Underground shelter 🌪️", feedback: "Correct! Lowest and safest point." },
                    { text: "Top floor 😅", feedback: "Exposed; very unsafe." },
                    { text: "Open field 🤔", feedback: "Dangerous; risk of debris." },
                    { text: "Car 😬", feedback: "Not safe; risk of being thrown." }
                ]
            },
            {
                id: 20,
                question: "During winter, how can you prevent frostbite?",
                options: [
                    { text: "Wear warm layers 🧤", feedback: "Correct! Protects skin and extremities." },
                    { text: "Expose skin 😅", feedback: "Dangerous; risk of frostbite." },
                    { text: "Only wear gloves 🤔", feedback: "Insufficient; cover entire body." },
                    { text: "Stay outdoors 😬", feedback: "Unsafe in extreme cold." }
                ]
            },
            {
                id: 21,
                question: "A fire extinguisher is labeled 'PASS'. What does it mean?",
                options: [
                    { text: "Pull, Aim, Squeeze, Sweep 🔥", feedback: "Correct! Proper fire extinguisher use." },
                    { text: "Push, Activate, Stop, Spray 😅", feedback: "Incorrect sequence." },
                    { text: "Pull, Alert, Stop, Spray 🤔", feedback: "Partially correct, not standard." },
                    { text: "Press, Aim, Scream, Spray 😬", feedback: "Incorrect." }
                ]
            },
            {
                id: 22,
                question: "You encounter a downed power line. What do you do?",
                options: [
                    { text: "Keep distance & call authorities ⚡", feedback: "Correct! Electricity is dangerous." },
                    { text: "Touch to move 😅", feedback: "Extremely unsafe." },
                    { text: "Spray water 🤔", feedback: "Can conduct electricity; unsafe." },
                    { text: "Ignore 😬", feedback: "Could harm others if unattended." }
                ]
            },
            {
                id: 23,
                question: "During heavy rain, road starts flooding. Best action?",
                options: [
                    { text: "Avoid driving & seek higher ground 🚗", feedback: "Correct! Prevents accident." },
                    { text: "Drive slowly 😅", feedback: "Still risky; strong currents possible." },
                    { text: "Walk through water 🤔", feedback: "Risky; can be swept away." },
                    { text: "Ignore 😬", feedback: "Dangerous." }
                ]
            },
            {
                id: 24,
                question: "Child swallows a small object. What should you do?",
                options: [
                    { text: "Call poison control or doctor 📞", feedback: "Correct! Professional guidance needed." },
                    { text: "Induce vomiting 😅", feedback: "May be harmful; don’t do without guidance." },
                    { text: "Give water 🤔", feedback: "May not help; seek advice first." },
                    { text: "Ignore 😬", feedback: "Unsafe; immediate action needed." }
                ]
            },
            {
                id: 25,
                question: "If trapped in smoke-filled room, what should you do?",
                options: [
                    { text: "Stay low & crawl 🐍", feedback: "Correct! Smoke rises, safer near floor." },
                    { text: "Stand tall 😅", feedback: "Risk of inhaling smoke." },
                    { text: "Run randomly 🤔", feedback: "Disorients and unsafe." },
                    { text: "Cover face & stand 😬", feedback: "Better to crawl low." }
                ]
            },
            {
                id: 26,
                question: "During a lightning storm, what should you avoid?",
                options: [
                    { text: "Tall isolated objects ⚡", feedback: "Correct! High risk of lightning strike." },
                    { text: "Stay indoors 🏠", feedback: "Safe option." },
                    { text: "Use wired electronics 🤔", feedback: "Can be unsafe; avoid corded devices." },
                    { text: "Crouch low 🧍‍♂️", feedback: "Safe if no shelter available." }
                ]
            },
            {
                id: 27,
                question: "If you see someone in water struggling to swim, what’s the first action?",
                options: [
                    { text: "Throw flotation device 🛟", feedback: "Correct! Avoid entering water directly if unsafe." },
                    { text: "Jump immediately 😅", feedback: "Risky unless trained." },
                    { text: "Shout for help 🤔", feedback: "Good, but assist with safety." },
                    { text: "Ignore 😬", feedback: "Unsafe; person needs help." }
                ]
            },
            {
                id: 28,
                question: "While camping, a bear approaches. Best action?",
                options: [
                    { text: "Stay calm, back away slowly 🐻", feedback: "Correct! Avoid sudden movements." },
                    { text: "Run 😅", feedback: "Can trigger chase instinct." },
                    { text: "Feed bear 🤔", feedback: "Dangerous; never feed wild animals." },
                    { text: "Climb a small tree 😬", feedback: "Bear can climb too; unsafe." }
                ]
            },
            {
                id: 29,
                question: "If trapped in an elevator during power outage, what should you do?",
                options: [
                    { text: "Stay calm & use alarm button 🛑", feedback: "Correct! Wait for rescue." },
                    { text: "Try to force door open 😅", feedback: "Unsafe." },
                    { text: "Climb out 🤔", feedback: "Dangerous; can fall." },
                    { text: "Call friend only 😬", feedback: "Emergency services better." }
                ]
            },
            {
                id: 30,
                question: "You are caught in a building fire. Smoke is heavy. What’s the best move?",
                options: [
                    { text: "Stay low & exit quickly 🏃‍♀️", feedback: "Correct! Minimizes smoke inhalation." },
                    { text: "Stand & breathe normally 😅", feedback: "Risk of inhaling smoke." },
                    { text: "Hide under furniture 🤔", feedback: "Not safe unless trapped." },
                    { text: "Use elevator 😬", feedback: "Elevator unsafe in fire." }
                ]
            }
        ]
    },
    {
        id: 13,
        category: "👪 Parenting & Family",
        description: "Test your parenting instincts and family decision skills! ❤️🏠",
        questions: [
            {
                id: 1,
                question: "Your child refuses to eat vegetables. What’s the best approach?",
                options: [
                    { text: "Offer them creatively 🥦", feedback: "Great! Fun presentation encourages eating 😋" },
                    { text: "Force them 😅", feedback: "Not ideal! Can create resistance 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed chance to encourage healthy habits 🍎" },
                    { text: "Offer candy instead 🍬", feedback: "Tempting but unhealthy choice ❌" }
                ]
            },
            {
                id: 2,
                question: "Your teenager comes home late without informing you. What do you do?",
                options: [
                    { text: "Talk calmly about concern 🗣️", feedback: "Excellent! Encourages trust ❤️" },
                    { text: "Yell at them 😡", feedback: "Might strain your relationship 🚫" },
                    { text: "Ignore it 🤔", feedback: "Missed chance to set boundaries ⚖️" },
                    { text: "Ground them immediately 😬", feedback: "Could provoke rebellion 😕" }
                ]
            },
            {
                id: 3,
                question: "Your child is scared of sleeping alone. Best response?",
                options: [
                    { text: "Comfort & gradually encourage 🛌", feedback: "Correct! Builds confidence slowly 💪" },
                    { text: "Force them 😅", feedback: "Not effective; may increase fear 😟" },
                    { text: "Mock them 🤔", feedback: "Harmful; damages trust ❌" },
                    { text: "Leave them 😬", feedback: "Unsafe and unsupportive 😢" }
                ]
            },
            {
                id: 4,
                question: "A family member forgets an important event. How should you respond?",
                options: [
                    { text: "Forgive & gently remind 💌", feedback: "Perfect! Maintains harmony ❤️" },
                    { text: "Get angry 😡", feedback: "Could hurt feelings 🚫" },
                    { text: "Ignore 🤔", feedback: "Might create tension later ⚠️" },
                    { text: "Bring it up publicly 😬", feedback: "Embarrassing; not recommended 😅" }
                ]
            },
            {
                id: 5,
                question: "Your child does well in school. How should you respond?",
                options: [
                    { text: "Praise effort & progress 🎉", feedback: "Excellent! Encourages motivation 🏆" },
                    { text: "Ignore it 😅", feedback: "Missed chance to reinforce good behavior ⚠️" },
                    { text: "Compare with others 🤔", feedback: "May create unnecessary pressure 😕" },
                    { text: "Give only rewards 😬", feedback: "Praise should be meaningful, not just material 💰" }
                ]
            },
            {
                id: 6,
                question: "Child asks a difficult question you don’t know the answer to. What do you do?",
                options: [
                    { text: "Admit & explore together 🔍", feedback: "Great! Shows honesty and curiosity 🧠" },
                    { text: "Make up an answer 😅", feedback: "Can create mistrust ❌" },
                    { text: "Ignore question 🤔", feedback: "Missed learning opportunity 📚" },
                    { text: "Tell them to stop 😬", feedback: "Discourages curiosity 😢" }
                ]
            },
            {
                id: 7,
                question: "Your spouse seems stressed after work. How do you respond?",
                options: [
                    { text: "Listen & offer support 🤗", feedback: "Correct! Builds emotional connection ❤️" },
                    { text: "Ignore them 😅", feedback: "Missed chance for bonding 😔" },
                    { text: "Criticize 🤔", feedback: "Not helpful; worsens stress 🚫" },
                    { text: "Give advice immediately 😬", feedback: "Sometimes they just need listening 👂" }
                ]
            },
            {
                id: 8,
                question: "Child spills juice on the carpet. Best response?",
                options: [
                    { text: "Stay calm & help clean 🧹", feedback: "Excellent! Teaches responsibility gently 😇" },
                    { text: "Yell 😡", feedback: "Scary; may create fear 😖" },
                    { text: "Punish immediately 🤔", feedback: "Too harsh; misses teaching moment ⚠️" },
                    { text: "Ignore 😬", feedback: "Could encourage careless behavior 😕" }
                ]
            },
            {
                id: 9,
                question: "Your teen wants to choose a different career path. How do you react?",
                options: [
                    { text: "Discuss options & support 🌟", feedback: "Perfect! Encourages independence and confidence 💪" },
                    { text: "Insist on your choice 😅", feedback: "Could create conflict 🚫" },
                    { text: "Ignore their feelings 🤔", feedback: "Not supportive; damages trust 😢" },
                    { text: "Threaten 😬", feedback: "May push them away 😔" }
                ]
            },
            {
                id: 10,
                question: "Sibling rivalry is causing fights. How to handle?",
                options: [
                    { text: "Encourage communication & fairness ⚖️", feedback: "Great! Builds understanding and empathy ❤️" },
                    { text: "Separate them always 😅", feedback: "Temporary solution; doesn’t teach conflict resolution 🚫" },
                    { text: "Punish both 🤔", feedback: "Doesn’t teach skills; may cause resentment 😕" },
                    { text: "Ignore 😬", feedback: "Problem persists; not effective 😢" }
                ]
            },
            {
                id: 11,
                question: "Your child makes a mistake in homework. What’s the best approach?",
                options: [
                    { text: "Guide & encourage improvement ✏️", feedback: "Correct! Teaches learning from mistakes 📘" },
                    { text: "Scold harshly 😡", feedback: "May reduce confidence 🚫" },
                    { text: "Do it for them 🤔", feedback: "Prevents learning 😕" },
                    { text: "Ignore 😬", feedback: "Missed chance to help them grow 🌱" }
                ]
            },
            {
                id: 12,
                question: "Your partner forgets to do a chore. How do you react?",
                options: [
                    { text: "Politely remind 💌", feedback: "Excellent! Encourages cooperation ❤️" },
                    { text: "Shout 😅", feedback: "Creates tension 🚫" },
                    { text: "Do it yourself 🤔", feedback: "Could create imbalance 😕" },
                    { text: "Ignore 😬", feedback: "Problem may persist 😔" }
                ]
            },
            {
                id: 13,
                question: "Your child wants a pet. Best response?",
                options: [
                    { text: "Discuss responsibility 🐶", feedback: "Correct! Teaches care & commitment 🐾" },
                    { text: "Refuse immediately 😅", feedback: "May disappoint unnecessarily ❌" },
                    { text: "Give it without discussion 🤔", feedback: "Can cause problems 😕" },
                    { text: "Ignore request 😬", feedback: "Missed opportunity to teach responsibility 🌱" }
                ]
            },
            {
                id: 14,
                question: "Your child is bullied at school. How do you respond?",
                options: [
                    { text: "Listen & support ❤️", feedback: "Correct! Builds trust and confidence 💪" },
                    { text: "Ignore 😅", feedback: "Missed chance to protect & teach resilience 😢" },
                    { text: "Fight the bully 🤔", feedback: "Could escalate situation ⚠️" },
                    { text: "Blame child 😬", feedback: "Not supportive; harmful 😔" }
                ]
            },
            {
                id: 15,
                question: "Child refuses to do chores. Best approach?",
                options: [
                    { text: "Make it fun & rewarding 🎯", feedback: "Correct! Encourages participation happily 😄" },
                    { text: "Force them 😅", feedback: "Can create resentment 🚫" },
                    { text: "Ignore 🤔", feedback: "No learning opportunity 😕" },
                    { text: "Punish harshly 😬", feedback: "Not constructive 😔" }
                ]
            },
            {
                id: 16,
                question: "Your teen shares a personal secret. How do you react?",
                options: [
                    { text: "Listen without judgment 👂", feedback: "Perfect! Builds trust & connection ❤️" },
                    { text: "Criticize 😅", feedback: "Could break trust 🚫" },
                    { text: "Share with others 🤔", feedback: "Violates privacy 😕" },
                    { text: "Ignore 😬", feedback: "Missed chance to support 😢" }
                ]
            },
            {
                id: 17,
                question: "Your child fails a test. How should you respond?",
                options: [
                    { text: "Encourage & review mistakes 📘", feedback: "Correct! Promotes learning & resilience 💪" },
                    { text: "Scold 😡", feedback: "Reduces confidence 🚫" },
                    { text: "Do homework for them 🤔", feedback: "Prevents learning 😕" },
                    { text: "Ignore 😬", feedback: "Missed opportunity to guide 😢" }
                ]
            },
            {
                id: 18,
                question: "Family planning: your partner has different ideas. Best approach?",
                options: [
                    { text: "Discuss & compromise 🤝", feedback: "Correct! Builds understanding ❤️" },
                    { text: "Insist on your way 😅", feedback: "Could create tension 🚫" },
                    { text: "Ignore partner 🤔", feedback: "Not collaborative 😕" },
                    { text: "Avoid conversation 😬", feedback: "Problem persists 😔" }
                ]
            },
            {
                id: 19,
                question: "Child is afraid of dentist. What’s best?",
                options: [
                    { text: "Explain & comfort 🦷", feedback: "Correct! Reduces fear & builds trust 😄" },
                    { text: "Force them 😅", feedback: "Increases anxiety 🚫" },
                    { text: "Ignore fears 🤔", feedback: "Missed chance to support 😕" },
                    { text: "Threaten 😬", feedback: "Unsafe & scary 😔" }
                ]
            },
            {
                id: 20,
                question: "Child lies about a small mistake. How do you react?",
                options: [
                    { text: "Discuss honesty calmly 🗣️", feedback: "Correct! Encourages truthfulness ❤️" },
                    { text: "Punish harshly 😡", feedback: "May create fear 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed opportunity to teach values 😕" },
                    { text: "Humiliate 😬", feedback: "Damaging; never effective 😢" }
                ]
            },
            {
                id: 21,
                question: "Your spouse forgets an anniversary. Best response?",
                options: [
                    { text: "Laugh & gently remind 💌", feedback: "Correct! Maintains love & humor 😄" },
                    { text: "Get angry 😡", feedback: "Hurts relationship 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed chance for bonding 😕" },
                    { text: "Publicly shame 😬", feedback: "Very harmful 😔" }
                ]
            },
            {
                id: 22,
                question: "Child breaks a household item. Best approach?",
                options: [
                    { text: "Calmly explain & teach repair 🔧", feedback: "Correct! Teaches responsibility ❤️" },
                    { text: "Shout 😡", feedback: "Creates fear 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed teaching moment 😕" },
                    { text: "Punish physically 😬", feedback: "Never appropriate ❌" }
                ]
            },
            {
                id: 23,
                question: "Family argument arises. How to handle?",
                options: [
                    { text: "Listen & mediate calmly 🗣️", feedback: "Great! Encourages understanding ❤️" },
                    { text: "Take sides 😅", feedback: "Could escalate tension 🚫" },
                    { text: "Ignore 🤔", feedback: "Doesn’t solve problem 😕" },
                    { text: "Shout 😬", feedback: "Unhelpful & stressful 😔" }
                ]
            },
            {
                id: 24,
                question: "Child wants to stay up late. Best response?",
                options: [
                    { text: "Explain healthy sleep 🌙", feedback: "Correct! Teaches balance & discipline 😄" },
                    { text: "Force sleep 😅", feedback: "May create resistance 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed chance to teach habits 😕" },
                    { text: "Give in 😬", feedback: "Can encourage poor habits 😔" }
                ]
            },
            {
                id: 25,
                question: "Child is shy in social situations. How do you help?",
                options: [
                    { text: "Encourage gently & model behavior 🌟", feedback: "Correct! Builds confidence ❤️" },
                    { text: "Force them 🤔", feedback: "Can increase anxiety 😕" },
                    { text: "Ignore 😬", feedback: "Missed learning opportunity 😢" },
                    { text: "Mock 😅", feedback: "Very harmful 🚫" }
                ]
            },
            {
                id: 26,
                question: "Teen wants to go to a party with friends. Best approach?",
                options: [
                    { text: "Discuss rules & safety 🛡️", feedback: "Correct! Promotes trust & safety ❤️" },
                    { text: "Refuse immediately 😅", feedback: "Can strain relationship 🚫" },
                    { text: "Ignore plans 🤔", feedback: "Not safe; guidance needed ⚠️" },
                    { text: "Let them go without rules 😬", feedback: "Risky; unsafe 😔" }
                ]
            },
            {
                id: 27,
                question: "Child is upset after losing a game. How do you respond?",
                options: [
                    { text: "Comfort & encourage effort 🎯", feedback: "Perfect! Teaches resilience & sportsmanship ❤️" },
                    { text: "Criticize 😡", feedback: "Can hurt confidence 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed chance to teach coping skills 😕" },
                    { text: "Force to play again 😬", feedback: "May worsen feelings 😔" }
                ]
            },
            {
                id: 28,
                question: "Partner seems distant. Best approach?",
                options: [
                    { text: "Talk & listen 🗣️", feedback: "Correct! Promotes connection & understanding ❤️" },
                    { text: "Ignore 😅", feedback: "Relationship may drift apart 🚫" },
                    { text: "Criticize 🤔", feedback: "Can increase distance 😕" },
                    { text: "Leave them alone 😬", feedback: "Missed chance to connect 😔" }
                ]
            },
            {
                id: 29,
                question: "Child refuses to share toys. Best approach?",
                options: [
                    { text: "Teach sharing through games 🎲", feedback: "Correct! Encourages empathy & cooperation ❤️" },
                    { text: "Force sharing 😅", feedback: "May create resistance 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed teaching moment 😕" },
                    { text: "Punish 😬", feedback: "Not effective or kind 😔" }
                ]
            },
            {
                id: 30,
                question: "Family plans a vacation. One member disagrees. How to handle?",
                options: [
                    { text: "Discuss & compromise 🏖️", feedback: "Perfect! Promotes harmony & respect ❤️" },
                    { text: "Insist on plan 😅", feedback: "Could create tension 🚫" },
                    { text: "Ignore their opinion 🤔", feedback: "May feel excluded 😕" },
                    { text: "Cancel trip 😬", feedback: "Not necessary; compromise is better 😔" }
                ]
            }
        ]
    },
    {
        id: 14,
        category: "💞 Emotional Intelligence",
        description: "Test your empathy, self-awareness, and social skills! 🌟🧠",
        questions: [
            {
                id: 1,
                question: "A friend is upset but won’t talk. What do you do?",
                options: [
                    { text: "Give space but check in ❤️", feedback: "Perfect! Respecting space builds trust 🤗" },
                    { text: "Force them to talk 😅", feedback: "Might push them away 🚫" },
                    { text: "Ignore their feelings 🤔", feedback: "Missed chance to support 😢" },
                    { text: "Make jokes 😬", feedback: "Could feel insensitive 😕" }
                ]
            },
            {
                id: 2,
                question: "You feel angry at work. Best first step?",
                options: [
                    { text: "Take deep breaths 😌", feedback: "Correct! Helps control emotions 🌬️" },
                    { text: "Shout at others 😡", feedback: "Not constructive 🚫" },
                    { text: "Ignore feelings 🤔", feedback: "Suppressing may worsen anger 😕" },
                    { text: "Leave without reason 😬", feedback: "Avoids solution; not ideal 🚫" }
                ]
            },
            {
                id: 3,
                question: "A colleague takes credit for your work. How do you react?",
                options: [
                    { text: "Address calmly & clarify 🗣️", feedback: "Great! Shows assertiveness without aggression 💪" },
                    { text: "Get revenge 😅", feedback: "Unprofessional & risky 🚫" },
                    { text: "Stay silent 🤔", feedback: "May allow repeated behavior 😕" },
                    { text: "Gossip 😬", feedback: "Could harm relationships 😔" }
                ]
            },
            {
                id: 4,
                question: "Your friend achieved something big. How do you respond?",
                options: [
                    { text: "Celebrate & praise 🎉", feedback: "Correct! Shows empathy & happiness for them ❤️" },
                    { text: "Feel jealous 😅", feedback: "Natural but not helpful 🚫" },
                    { text: "Ignore accomplishment 🤔", feedback: "Missed chance to connect 😕" },
                    { text: "Criticize 😬", feedback: "Not supportive; harmful 😔" }
                ]
            },
            {
                id: 5,
                question: "You realize you hurt someone’s feelings. What’s the best approach?",
                options: [
                    { text: "Apologize sincerely 🙏", feedback: "Correct! Repairs relationships & shows empathy ❤️" },
                    { text: "Ignore it 😅", feedback: "May damage trust 🚫" },
                    { text: "Blame them 🤔", feedback: "Avoids responsibility 😕" },
                    { text: "Make a joke 😬", feedback: "Could minimize their feelings 😔" }
                ]
            },
            {
                id: 6,
                question: "A team member is quiet during meetings. How do you help?",
                options: [
                    { text: "Encourage & listen 🤝", feedback: "Perfect! Builds inclusivity and understanding ❤️" },
                    { text: "Ignore them 😅", feedback: "Missed chance to support 🚫" },
                    { text: "Criticize silence 🤔", feedback: "Could harm confidence 😕" },
                    { text: "Speak for them 😬", feedback: "Oversteps; not empowering 😔" }
                ]
            },
            {
                id: 7,
                question: "You’re frustrated but need to give feedback. How?",
                options: [
                    { text: "Stay calm & use 'I' statements 🗣️", feedback: "Great! Expresses feelings without blame ❤️" },
                    { text: "Yell 😡", feedback: "Could harm relationships 🚫" },
                    { text: "Avoid feedback 🤔", feedback: "Missed opportunity for improvement 😕" },
                    { text: "Make sarcastic comments 😬", feedback: "Can escalate conflict 😔" }
                ]
            },
            {
                id: 8,
                question: "A friend is happy about their success, but you feel envy. How to handle?",
                options: [
                    { text: "Acknowledge feelings & focus on growth 🌱", feedback: "Correct! Self-aware & positive mindset 💪" },
                    { text: "Hide jealousy & resent 😅", feedback: "May affect relationships 🚫" },
                    { text: "Complain to others 🤔", feedback: "Not constructive 😕" },
                    { text: "Ignore them 😬", feedback: "Missed chance to connect 😔" }
                ]
            },
            {
                id: 9,
                question: "You make a mistake in front of others. Best response?",
                options: [
                    { text: "Admit & learn from it 📚", feedback: "Correct! Shows maturity & self-awareness ❤️" },
                    { text: "Blame others 😅", feedback: "Avoids responsibility 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed chance to model accountability 😕" },
                    { text: "Laugh it off 😬", feedback: "May work sometimes, but learning is better 😉" }
                ]
            },
            {
                id: 10,
                question: "Someone criticizes your work. How should you respond?",
                options: [
                    { text: "Listen & evaluate feedback 👂", feedback: "Perfect! Shows emotional intelligence ❤️" },
                    { text: "Get defensive 😅", feedback: "May block growth 🚫" },
                    { text: "Ignore feedback 🤔", feedback: "Missed learning opportunity 😕" },
                    { text: "Retaliate 😬", feedback: "Not professional or productive 😔" }
                ]
            },
            {
                id: 11,
                question: "Your sibling is upset and blames you unfairly. What do you do?",
                options: [
                    { text: "Stay calm & empathize 🤗", feedback: "Correct! Helps resolve conflict peacefully ❤️" },
                    { text: "Yell back 😡", feedback: "Escalates tension 🚫" },
                    { text: "Ignore them 🤔", feedback: "Problem may persist 😕" },
                    { text: "Make sarcastic remark 😬", feedback: "Not helpful 😔" }
                ]
            },
            {
                id: 12,
                question: "You feel stressed before a big presentation. How to manage?",
                options: [
                    { text: "Practice & breathe deeply 😌", feedback: "Correct! Reduces anxiety & improves focus 💪" },
                    { text: "Ignore stress 😅", feedback: "Can worsen performance 🚫" },
                    { text: "Blame others 🤔", feedback: "Not productive 😕" },
                    { text: "Panic 😬", feedback: "Unhelpful; increases stress 😔" }
                ]
            },
            {
                id: 13,
                question: "A friend is upset about losing. How do you respond?",
                options: [
                    { text: "Listen & validate feelings ❤️", feedback: "Perfect! Encourages empathy & connection 🤗" },
                    { text: "Laugh at them 😅", feedback: "Insensitive 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed chance to support 😕" },
                    { text: "Criticize 😬", feedback: "Hurtful 😔" }
                ]
            },
            {
                id: 14,
                question: "You’re tempted to gossip about a colleague. Best choice?",
                options: [
                    { text: "Avoid gossip & stay neutral ✨", feedback: "Correct! Shows emotional maturity ❤️" },
                    { text: "Join in 😅", feedback: "Could harm relationships 🚫" },
                    { text: "Tell everyone 🤔", feedback: "Unwise & unprofessional 😕" },
                    { text: "Compliment falsely 😬", feedback: "Not genuine 😔" }
                ]
            },
            {
                id: 15,
                question: "A team member seems disengaged. How do you react?",
                options: [
                    { text: "Check in & support 🤝", feedback: "Correct! Encourages collaboration & empathy ❤️" },
                    { text: "Ignore 😅", feedback: "Problem may persist 🚫" },
                    { text: "Criticize openly 🤔", feedback: "May embarrass them 😕" },
                    { text: "Take over tasks 😬", feedback: "Not empowering 😔" }
                ]
            },
            {
                id: 16,
                question: "You feel nervous meeting new people. How to cope?",
                options: [
                    { text: "Prepare & stay confident 😌", feedback: "Great! Promotes self-awareness & calm 💪" },
                    { text: "Avoid interaction 😅", feedback: "Missed opportunity 🚫" },
                    { text: "Overcompensate 🤔", feedback: "May seem unnatural 😕" },
                    { text: "Stay silent 😬", feedback: "Not engaging 😔" }
                ]
            },
            {
                id: 17,
                question: "Someone criticizes your idea unfairly. Best response?",
                options: [
                    { text: "Listen & evaluate calmly 🧠", feedback: "Correct! Maintains professionalism & self-control ❤️" },
                    { text: "Argue angrily 😡", feedback: "Escalates conflict 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed chance to grow 😕" },
                    { text: "Retaliate 😬", feedback: "Unproductive 😔" }
                ]
            },
            {
                id: 18,
                question: "You notice a friend is socially isolated. What’s your response?",
                options: [
                    { text: "Reach out & invite them 🤗", feedback: "Perfect! Shows empathy & care ❤️" },
                    { text: "Ignore 😅", feedback: "Missed chance to support 🚫" },
                    { text: "Criticize 🤔", feedback: "Not helpful 😕" },
                    { text: "Gossip 😬", feedback: "Hurtful & harmful 😔" }
                ]
            },
            {
                id: 19,
                question: "You feel frustrated during a team project. Best step?",
                options: [
                    { text: "Communicate feelings calmly 🗣️", feedback: "Correct! Encourages teamwork & understanding ❤️" },
                    { text: "Blame others 😡", feedback: "Damaging relationships 🚫" },
                    { text: "Shut down 🤔", feedback: "Reduces collaboration 😕" },
                    { text: "Act passive-aggressive 😬", feedback: "Creates conflict 😔" }
                ]
            },
            {
                id: 20,
                question: "Your friend achieves something you wanted. How to react?",
                options: [
                    { text: "Celebrate their success 🎉", feedback: "Correct! Shows empathy & emotional control ❤️" },
                    { text: "Feel bitter 😅", feedback: "Unhelpful emotion 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed chance for connection 😕" },
                    { text: "Criticize achievement 😬", feedback: "Harmful behavior 😔" }
                ]
            },
            {
                id: 21,
                question: "Someone interrupts you in a conversation. How do you respond?",
                options: [
                    { text: "Stay calm & assert politely 🗣️", feedback: "Correct! Maintains composure & respect ❤️" },
                    { text: "Yell 😡", feedback: "Creates conflict 🚫" },
                    { text: "Ignore 🤔", feedback: "Could signal acceptance of bad behavior 😕" },
                    { text: "Interrupt back 😬", feedback: "Escalates tension 😔" }
                ]
            },
            {
                id: 22,
                question: "You notice a coworker looks upset. Best response?",
                options: [
                    { text: "Check in privately 🤝", feedback: "Perfect! Shows empathy & care ❤️" },
                    { text: "Ignore 😅", feedback: "Missed opportunity 🚫" },
                    { text: "Publicly question them 🤔", feedback: "Could embarrass them 😕" },
                    { text: "Gossip 😬", feedback: "Not empathetic 😔" }
                ]
            },
            {
                id: 23,
                question: "You receive unexpected criticism. How do you handle it?",
                options: [
                    { text: "Stay calm & reflect 🧘‍♂️", feedback: "Correct! Shows self-awareness & emotional control ❤️" },
                    { text: "Get defensive 😡", feedback: "Blocks learning 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed chance to improve 😕" },
                    { text: "Complain to others 😬", feedback: "Unproductive 😔" }
                ]
            },
            {
                id: 24,
                question: "A friend is bragging excessively. Best response?",
                options: [
                    { text: "Listen politely & redirect 🌟", feedback: "Correct! Maintains patience & empathy ❤️" },
                    { text: "Get annoyed 😅", feedback: "May hurt friendship 🚫" },
                    { text: "Interrupt angrily 🤔", feedback: "Creates conflict 😕" },
                    { text: "Ignore completely 😬", feedback: "May seem rude 😔" }
                ]
            },
            {
                id: 25,
                question: "You accidentally hurt someone’s feelings. Best response?",
                options: [
                    { text: "Apologize sincerely 🙏", feedback: "Perfect! Shows empathy & accountability ❤️" },
                    { text: "Ignore 😅", feedback: "Missed chance to repair trust 🚫" },
                    { text: "Blame situation 🤔", feedback: "Avoids responsibility 😕" },
                    { text: "Make jokes 😬", feedback: "Minimizes their feelings 😔" }
                ]
            },
            {
                id: 26,
                question: "A team member is overwhelmed. How to respond?",
                options: [
                    { text: "Offer help & listen 🤗", feedback: "Correct! Shows empathy & support ❤️" },
                    { text: "Ignore 😅", feedback: "Missed chance to support 🚫" },
                    { text: "Criticize 🤔", feedback: "Could worsen stress 😕" },
                    { text: "Take over everything 😬", feedback: "May not empower them 😔" }
                ]
            },
            {
                id: 27,
                question: "You feel disappointed by a friend. Best reaction?",
                options: [
                    { text: "Express feelings calmly 🗣️", feedback: "Correct! Encourages honest communication ❤️" },
                    { text: "Stay silent 😅", feedback: "Missed opportunity 🚫" },
                    { text: "Criticize harshly 🤔", feedback: "Could harm relationship 😕" },
                    { text: "Hold a grudge 😬", feedback: "Negative impact 😔" }
                ]
            },
            {
                id: 28,
                question: "Someone asks for feedback on a sensitive topic. How do you respond?",
                options: [
                    { text: "Be honest but kind 🌟", feedback: "Perfect! Shows empathy & tact ❤️" },
                    { text: "Criticize bluntly 😅", feedback: "Can hurt feelings 🚫" },
                    { text: "Avoid feedback 🤔", feedback: "Missed chance to help 😕" },
                    { text: "Give false praise 😬", feedback: "Not genuine 😔" }
                ]
            },
            {
                id: 29,
                question: "You feel anxious in social settings. Best approach?",
                options: [
                    { text: "Prepare & breathe deeply 😌", feedback: "Correct! Helps manage emotions & confidence ❤️" },
                    { text: "Avoid social events 😅", feedback: "Missed opportunity 🚫" },
                    { text: "Overcompensate 🤔", feedback: "May seem unnatural 😕" },
                    { text: "Stay silent 😬", feedback: "Not engaging 😔" }
                ]
            },
            {
                id: 30,
                question: "Your colleague succeeds where you failed. Best response?",
                options: [
                    { text: "Congratulate & learn 🎉", feedback: "Perfect! Shows maturity & emotional control ❤️" },
                    { text: "Feel bitter 😅", feedback: "Unhelpful emotion 🚫" },
                    { text: "Ignore 🤔", feedback: "Missed chance to connect 😕" },
                    { text: "Criticize them 😬", feedback: "Harmful behavior 😔" }
                ]
            }
        ]
    },
    {
        id: 15,
        category: "🌍 Environmental Decisions",
        description: "Everyday choices that affect our planet — make a difference one decision at a time! 🌿♻️",
        questions: [
            {
                id: 1,
                question: "You see someone littering in a park. What do you do?",
                options: [
                    { text: "Pick it up and dispose properly", feedback: "👏 Awesome! Every small action counts." },
                    { text: "Tell them to stop politely", feedback: "👍 Great! Awareness matters." },
                    { text: "Ignore it", feedback: "😕 Not ideal — the environment suffers." },
                    { text: "Take a photo and post online", feedback: "😅 Might raise awareness, but action is better." }
                ]
            },
            {
                id: 2,
                question: "You have a choice between using a plastic bag or a reusable bag. What do you choose?",
                options: [
                    { text: "Reusable bag", feedback: "✅ Correct! Small habit, big impact." },
                    { text: "Plastic bag", feedback: "😬 Not sustainable." },
                    { text: "Reuse the plastic bag multiple times", feedback: "🙂 Better, but reusable bags are best." },
                    { text: "Ask someone else to carry it for you", feedback: "😅 Doesn’t solve the problem." }
                ]
            },
            {
                id: 3,
                question: "You notice the tap is leaking water at home. What’s your move?",
                options: [
                    { text: "Fix it or inform someone", feedback: "👏 Smart! Conserving water is crucial." },
                    { text: "Ignore it", feedback: "😕 Wasteful and avoidable." },
                    { text: "Leave it leaking", feedback: "🚫 Not responsible." },
                    { text: "Blame someone else", feedback: "😅 Doesn’t solve the issue." }
                ]
            },
            {
                id: 4,
                question: "You’re choosing a commute method. Options: walk, bike, car. What do you pick?",
                options: [
                    { text: "Walk", feedback: "✅ Great for you and the planet!" },
                    { text: "Bike", feedback: "👍 Excellent! Eco-friendly and healthy." },
                    { text: "Car", feedback: "😬 Only if necessary — try shared rides." },
                    { text: "Take a taxi every day", feedback: "🚫 Not eco-friendly." }
                ]
            },
            {
                id: 5,
                question: "You buy bottled water every day. What’s a better alternative?",
                options: [
                    { text: "Reusable water bottle", feedback: "✅ Smart choice!" },
                    { text: "Stick to bottled water", feedback: "😬 Adds to plastic waste." },
                    { text: "Ask shops for refills", feedback: "👍 Good habit!" },
                    { text: "Drink soda instead", feedback: "😅 Not better for environment or health." }
                ]
            },
            {
                id: 6,
                question: "You’re planting a garden. Which is the best approach?",
                options: [
                    { text: "Native plants", feedback: "✅ Perfect! Eco-friendly and low maintenance." },
                    { text: "Exotic plants", feedback: "😬 Might disturb local ecosystem." },
                    { text: "Plastic plants", feedback: "🚫 Not natural." },
                    { text: "Buy fully grown plants", feedback: "🙂 Okay, but growing from seeds is better." }
                ]
            },
            {
                id: 7,
                question: "You’re deciding on electricity use. What’s your approach?",
                options: [
                    { text: "Turn off lights when not in use", feedback: "✅ Saves energy and money!" },
                    { text: "Keep all devices on", feedback: "😬 Wastes energy." },
                    { text: "Use energy-saving bulbs", feedback: "👏 Perfect! Efficient and green." },
                    { text: "Use more gadgets for convenience", feedback: "🚫 Not sustainable." }
                ]
            },
            {
                id: 8,
                question: "You notice a wildlife habitat nearby being destroyed. What do you do?",
                options: [
                    { text: "Report to local authorities", feedback: "✅ Great, every report helps." },
                    { text: "Post on social media", feedback: "🙂 Awareness is good, but action helps more." },
                    { text: "Ignore it", feedback: "😕 Not responsible." },
                    { text: "Visit and disturb wildlife", feedback: "🚫 Definitely harmful." }
                ]
            },
            {
                id: 9,
                question: "You have old electronics. How do you dispose of them?",
                options: [
                    { text: "Recycle at e-waste center", feedback: "✅ Correct! Keeps toxins out of environment." },
                    { text: "Throw in trash", feedback: "😬 Very harmful." },
                    { text: "Keep them at home forever", feedback: "🙂 Avoids pollution, but cluttered." },
                    { text: "Give to someone who doesn’t know disposal", feedback: "🚫 Could be harmful." }
                ]
            },
            {
                id: 10,
                question: "You’re buying groceries. What’s better for environment?",
                options: [
                    { text: "Use reusable bags", feedback: "✅ Correct!" },
                    { text: "Plastic bags", feedback: "😬 Avoid if possible." },
                    { text: "Buy in bulk with own containers", feedback: "👍 Great idea!" },
                    { text: "Ask store to double-pack everything", feedback: "🚫 Wasteful." }
                ]
            },
            {
                id: 11,
                question: "You’re eating out. How do you reduce environmental impact?",
                options: [
                    { text: "Bring own reusable cutlery", feedback: "✅ Excellent!" },
                    { text: "Use disposable items", feedback: "😬 Creates waste." },
                    { text: "Order only necessary portions", feedback: "👍 Reduces food waste." },
                    { text: "Waste leftovers intentionally", feedback: "🚫 Wrong approach." }
                ]
            },
            {
                id: 12,
                question: "You need to print documents. How do you approach it?",
                options: [
                    { text: "Print only essential pages", feedback: "✅ Smart, saves paper." },
                    { text: "Print everything", feedback: "🚫 Wasteful." },
                    { text: "Use digital copies", feedback: "👍 Perfect eco-friendly option." },
                    { text: "Ask someone else to print", feedback: "🙂 Doesn’t solve sustainability." }
                ]
            },
            {
                id: 13,
                question: "You’re shopping for clothes. What’s eco-friendly?",
                options: [
                    { text: "Buy second-hand or recycled", feedback: "✅ Excellent!" },
                    { text: "Fast fashion", feedback: "😬 High environmental impact." },
                    { text: "Buy natural fibers", feedback: "👍 Sustainable choice." },
                    { text: "Ignore materials completely", feedback: "🚫 Not environmentally conscious." }
                ]
            },
            {
                id: 14,
                question: "You’re disposing of food waste. Best option?",
                options: [
                    { text: "Compost it", feedback: "✅ Perfect — enriches soil and reduces landfill." },
                    { text: "Throw in garbage", feedback: "😬 Wasteful." },
                    { text: "Feed it to pets", feedback: "🙂 Okay if safe for them." },
                    { text: "Burn it", feedback: "🚫 Harmful for air quality." }
                ]
            },
            {
                id: 15,
                question: "You’re buying a new gadget. Environmental choice?",
                options: [
                    { text: "Energy-efficient model", feedback: "👏 Saves power and reduces impact." },
                    { text: "Cheapest without concern", feedback: "🚫 Might consume more resources." },
                    { text: "Used/refurbished option", feedback: "👍 Very eco-friendly!" },
                    { text: "Ignore specs", feedback: "😕 Not sustainable." }
                ]
            },
            {
                id: 16,
                question: "You’re choosing transportation for a short distance.",
                options: [
                    { text: "Walk", feedback: "✅ Healthy and eco-friendly." },
                    { text: "Bike", feedback: "👍 Perfect choice!" },
                    { text: "Motorbike", feedback: "😬 Better than car, but still emissions." },
                    { text: "Drive car", feedback: "🚫 Avoid if possible." }
                ]
            },
            {
                id: 17,
                question: "Your city offers recycling bins. What do you do?",
                options: [
                    { text: "Use them for all recyclables", feedback: "✅ Excellent!" },
                    { text: "Throw everything in trash", feedback: "😬 Not sustainable." },
                    { text: "Separate some but not all", feedback: "🙂 Better than nothing." },
                    { text: "Ignore and litter", feedback: "🚫 Harmful choice." }
                ]
            },
            {
                id: 18,
                question: "You want to reduce plastic usage at home.",
                options: [
                    { text: "Use cloth bags and containers", feedback: "👏 Perfect choice!" },
                    { text: "Continue using plastic bags", feedback: "😬 Not sustainable." },
                    { text: "Buy large plastic packs to reduce trips", feedback: "🙂 Better but still plastic-heavy." },
                    { text: "Ignore the issue", feedback: "🚫 Avoidable harm." }
                ]
            },
            {
                id: 19,
                question: "You notice a tree being cut illegally. What do you do?",
                options: [
                    { text: "Report to authorities", feedback: "✅ Correct! Protect nature." },
                    { text: "Take photos only", feedback: "🙂 Awareness, but action is better." },
                    { text: "Do nothing", feedback: "😬 Not responsible." },
                    { text: "Try to stop it yourself", feedback: "😅 Risky, call authorities instead." }
                ]
            },
            {
                id: 20,
                question: "You are choosing lunch packaging. What’s better?",
                options: [
                    { text: "Reusable container", feedback: "✅ Excellent choice!" },
                    { text: "Disposable plastic", feedback: "😬 Avoidable waste." },
                    { text: "Paper packaging", feedback: "👍 Better, biodegradable option." },
                    { text: "Leave without packaging", feedback: "🙂 Only works if possible." }
                ]
            },
            {
                id: 21,
                question: "Your friends suggest buying bottled water daily. You…",
                options: [
                    { text: "Carry your own bottle", feedback: "👏 Saves plastic!" },
                    { text: "Buy bottles like them", feedback: "😬 Creates waste." },
                    { text: "Drink from tap if safe", feedback: "👍 Good eco-friendly option." },
                    { text: "Ignore the impact", feedback: "🚫 Not responsible." }
                ]
            },
            {
                id: 22,
                question: "You want to reduce energy usage at home.",
                options: [
                    { text: "Turn off unused devices", feedback: "👏 Great habit!" },
                    { text: "Keep everything on", feedback: "🚫 Wastes energy." },
                    { text: "Use smart devices", feedback: "👍 Efficient choice!" },
                    { text: "Ignore electricity bills", feedback: "😅 Not sustainable." }
                ]
            },
            {
                id: 23,
                question: "You’re shopping for food. What’s eco-friendly?",
                options: [
                    { text: "Local produce", feedback: "✅ Reduces carbon footprint." },
                    { text: "Imported goods", feedback: "😬 Higher environmental impact." },
                    { text: "Organic food", feedback: "👍 Great for environment and health." },
                    { text: "Ignore sourcing", feedback: "😅 Not sustainable." }
                ]
            },
            {
                id: 24,
                question: "You want to reduce car usage. What’s a better choice?",
                options: [
                    { text: "Carpool", feedback: "✅ Helps reduce emissions!" },
                    { text: "Public transport", feedback: "👍 Very eco-friendly." },
                    { text: "Drive alone", feedback: "😬 Less sustainable." },
                    { text: "Avoid traveling", feedback: "🙂 Works sometimes." }
                ]
            },
            {
                id: 25,
                question: "You notice water wastage in school. What do you do?",
                options: [
                    { text: "Inform authorities", feedback: "👏 Good habit!" },
                    { text: "Ignore it", feedback: "😬 Problem persists." },
                    { text: "Turn off taps yourself", feedback: "👍 Helps immediately." },
                    { text: "Laugh with friends", feedback: "🚫 Not responsible." }
                ]
            },
            {
                id: 26,
                question: "You want to make your classroom eco-friendly.",
                options: [
                    { text: "Introduce recycling bins", feedback: "✅ Great idea!" },
                    { text: "Keep things same", feedback: "😬 Missed opportunity." },
                    { text: "Decorate with plastic stuff", feedback: "🚫 Not eco-friendly." },
                    { text: "Plant small indoor plants", feedback: "👍 Perfect touch!" }
                ]
            },
            {
                id: 27,
                question: "You have leftover food. Best option?",
                options: [
                    { text: "Compost it", feedback: "✅ Eco-friendly choice!" },
                    { text: "Throw in trash", feedback: "😬 Wasteful." },
                    { text: "Feed animals safely", feedback: "👍 Good option!" },
                    { text: "Ignore leftovers", feedback: "😅 Wastes food and resources." }
                ]
            },
            {
                id: 28,
                question: "You’re using air conditioning. How to save energy?",
                options: [
                    { text: "Use fan instead", feedback: "✅ Energy saver!" },
                    { text: "Set AC at moderate temperature", feedback: "👍 Good compromise." },
                    { text: "Keep AC full blast", feedback: "😬 Wasteful." },
                    { text: "Leave AC on when away", feedback: "🚫 Not eco-friendly." }
                ]
            },
            {
                id: 29,
                question: "You want to plant trees in community. How do you start?",
                options: [
                    { text: "Organize a local drive", feedback: "✅ Excellent initiative!" },
                    { text: "Plant at home only", feedback: "🙂 Good start, but scale matters." },
                    { text: "Donate to tree organizations", feedback: "👍 Helpful choice!" },
                    { text: "Do nothing", feedback: "🚫 Missed opportunity." }
                ]
            },
            {
                id: 30,
                question: "Your friend is wasting water while brushing. What do you do?",
                options: [
                    { text: "Politely tell them", feedback: "✅ Correct! Awareness helps." },
                    { text: "Do nothing", feedback: "😕 Water keeps getting wasted." },
                    { text: "Turn off their tap secretly", feedback: "🙂 Funny, but communicate better." },
                    { text: "Scold aggressively", feedback: "😬 Might backfire." }
                ]
            }
        ]
    },

];

