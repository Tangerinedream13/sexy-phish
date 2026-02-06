// src/data/act1.js
// Act 1: hello.friend — “The Meet-Cute”
//
// IMPORTANT:
// - This file is DATA ONLY. No JSX. No Chakra components.
// - Your PlayAct1.jsx renders: scene.title, scene.location, scene.text (array),
//   scene.redFlags (array), scene.ui.showToast, and scene.choices (label/next).

const act1 = {
    meta: {
      actId: "act1",
      title: "hello.friend",
      subtitle: "The Meet-Cute",
      theme: "Vegas neon • conference charm • first-contact social engineering",
      setting: {
        city: "Las Vegas",
        venue: "CyberSteel Executive Summit",
        vibe: "City of sin: confidence, distraction, and opportunity",
      },
      version: 1,
    },
  
    characters: {
      gemma: {
        id: "gemma",
        name: "Gemma",
        publicBio: "Independent security consultant (conference attendee)",
        hiddenBio: "Operative gathering access for a hostile sponsor",
        archetype: "charismatic social engineer",
        traits: ["charming", "observant", "strategic"],
      },
      rex: {
        id: "rex",
        name: "Rex Vale",
        publicBio: "Billionaire tech executive, CEO of CyberSteel",
        hiddenBio: "Protective of Cipher, anxious about leaks, used to attention",
        archetype: "high-value target",
        traits: ["confident", "guarded", "busy"],
      },
      ivy: {
        id: "ivy",
        name: "Ivy",
        publicBio: "CyberSteel EA / conference ops lead",
        hiddenBio: "Gatekeeper who notices patterns",
        archetype: "gatekeeper",
        traits: ["efficient", "polite", "sharp"],
      },
      marco: {
        id: "marco",
        name: "Marco",
        publicBio: "Security staff (badge checks / VIP entrance)",
        hiddenBio: "Overworked, relies on social compliance",
        archetype: "overloaded security",
        traits: ["stern", "distracted"],
      },
    },
  
    glossary: {
      Cipher: "CyberSteel’s coveted AI tool (trade secret / IP).",
      badge: "Conference credential that implies access and trust.",
      lanyard: "A convenient security vulnerability in fabric form.",
      redFlags: {
        authority: "Using perceived status/role to pressure compliance.",
        urgency: "Creating time pressure to bypass caution.",
        reciprocity: "Giving something small to trigger obligation.",
        pretexting: "Inventing a plausible story to get access.",
        tailgating: "Following into a secure area without authorization.",
        credentialHarvesting: "Trying to obtain usernames/passwords/badges/tokens.",
        oversharing: "Revealing sensitive details casually.",
        outOfBand: "Requesting access outside official channels.",
      },
    },
  
    // Optional starter state for future features (your current UI can ignore)
    state: {
      flags: {
        sawBadge: false,
        gotVipInvite: false,
        gotAloneTime: false,
        hasPhotoOfBadge: false,
        gotUsbKey: false,
        learnedCipherCodename: false,
        rexSuspicious: false,
        ivyNoticed: false,
        attemptedTailgate: false,
      },
      score: { heat: 0, risk: 0, security: 0 },
    },
  
    startSceneId: "s00_arrival",
  
    scenes: {
      // ------------------------------------------------------------
      // S00 — Arrival / Setup
      // ------------------------------------------------------------
      s00_arrival: {
        id: "s00_arrival",
        title: "Neon Check-In",
        location: "Conference lobby • CyberSteel Executive Summit",
        text: [
          "Las Vegas is all velvet lights and sharp edges.",
          "At the CyberSteel Executive Summit, badges shine like tiny passports.",
          "Gemma steps into the crowd, scanning for one person: Rex Vale.",
          "Rumor says his AI tool, Cipher, is rewriting the rules—and someone wants the recipe.",
        ],
        redFlags: [],
        ui: {
          showToast: {
            title: "Act 1: hello.friend",
            body: "The Meet-Cute begins. Watch how trust gets built—and exploited.",
            kind: "neutral",
          },
        },
        choices: [
          {
            id: "c00_scan",
            label: "Scan the room for Rex",
            next: "s01_spot_rex",
            effects: { flags: { sawBadge: true }, score: { risk: 1 } },
          },
          {
            id: "c00_checkin",
            label: "Blend in at check-in first",
            next: "s01_checkin",
            effects: { score: { security: 1 } },
          },
        ],
      },
  
      // ------------------------------------------------------------
      // S01 — Check-in / Badge moment
      // ------------------------------------------------------------
      s01_checkin: {
        id: "s01_checkin",
        title: "Badge, Please",
        location: "Registration desk",
        text: [
          "The registration desk hands Gemma a badge and a grin.",
          "A staffer reminds everyone: “Badges are required for all sessions—including VIP floors.”",
          "Gemma’s eyes linger on the word VIP.",
        ],
        redFlags: ["pretexting"],
        ui: {
          showToast: {
            title: "Red flag: pretexting",
            body: "A believable cover story is often step one in social engineering.",
            kind: "warning",
          },
        },
        choices: [
          {
            id: "c01_vip",
            label: "Hover near the VIP line and listen",
            next: "s01_vip_line",
            effects: { score: { risk: 1 } },
          },
          {
            id: "c01_floor",
            label: "Walk the floor like you belong",
            next: "s02_floor_walk",
            effects: { score: { heat: 1 } },
          },
        ],
      },
  
      s01_vip_line: {
        id: "s01_vip_line",
        title: "Velvet Rope Economics",
        location: "VIP entrance",
        text: [
          "Marco checks badges with the speed of someone doing three jobs at once.",
          "Attendees flash credentials; nobody wants to be the person who slows the line down.",
          "Gemma notes it: visual compliance often beats real verification when people are tired.",
        ],
        redFlags: ["authority", "tailgating"],
        ui: {
          showToast: {
            title: "Red flags: authority & tailgating",
            body: "Crowds + status cues can make people skip verification.",
            kind: "warning",
          },
        },
        choices: [
          {
            id: "c01_tailgate",
            label: "Attempt to tailgate behind a VIP attendee",
            next: "s01_tailgate_attempt",
            effects: { flags: { attemptedTailgate: true }, score: { risk: 2 } },
          },
          {
            id: "c01_abort",
            label: "Abort (too risky) and return to the main floor",
            next: "s02_floor_walk",
            effects: { score: { security: 1 } },
          },
        ],
      },
  
      s01_tailgate_attempt: {
        id: "s01_tailgate_attempt",
        title: "Two Steps Behind",
        location: "VIP entrance",
        text: [
          "Gemma slips into the wake of a suited attendee like it’s choreography.",
          "Marco glances up—just long enough to register that something is… off.",
          "“Ma’am,” he says. “Badge?”",
        ],
        redFlags: ["tailgating", "authority"],
        choices: [
          {
            id: "c01_pretext",
            label: "Smile: “I’m with CyberSteel—my badge is acting up.”",
            next: "s01_pretext_badge_issue",
            effects: { score: { risk: 2, heat: 1 } },
          },
          {
            id: "c01_backoff",
            label: "Apologize and back off calmly",
            next: "s02_floor_walk",
            effects: { score: { security: 2 } },
          },
        ],
      },
  
      s01_pretext_badge_issue: {
        id: "s01_pretext_badge_issue",
        title: "Badge “Issue”",
        location: "VIP entrance",
        text: [
          "Gemma’s voice is honeyed: polite, embarrassed, credible.",
          "Marco’s gaze flicks to the line behind her.",
          "Security versus inconvenience—guess which one usually loses?",
          "He waves her away. “Get it fixed. Don’t come back up without it.”",
        ],
        redFlags: ["pretexting", "urgency"],
        ui: {
          showToast: {
            title: "Red flag: urgency",
            body: "Pressure + inconvenience can push people to bend rules.",
            kind: "warning",
          },
        },
        choices: [
          {
            id: "c01_roam",
            label: "Roam—find Rex first",
            next: "s01_spot_rex",
            effects: { score: { risk: 1, heat: 1 } },
          },
          {
            id: "c01_floor2",
            label: "Return to the main floor",
            next: "s02_floor_walk",
            effects: { score: { security: 1 } },
          },
        ],
      },
  
      // ------------------------------------------------------------
      // S01 — Spot Rex
      // ------------------------------------------------------------
      s01_spot_rex: {
        id: "s01_spot_rex",
        title: "Target Acquired",
        location: "Lobby bar • off the main floor",
        text: [
          "Rex Vale stands at the bar, sleeves rolled, relaxed for exactly twelve seconds.",
          "His conference badge hangs forward; the NFC chip catches light like a wink.",
          "He looks up—just as Gemma’s reflection appears in the mirror behind him.",
        ],
        redFlags: ["credentialHarvesting", "oversharing"],
        ui: {
          showToast: {
            title: "Human-factor moment",
            body: "Badges, phones, and laptops in public spaces are soft targets.",
            kind: "neutral",
          },
        },
        choices: [
          {
            id: "c02_meetcute",
            label: "Do the meet-cute: order a drink next to him",
            next: "s02_meet_cute",
            effects: { score: { heat: 2 } },
          },
          {
            id: "c02_observe",
            label: "Observe first: who approaches him? who protects him?",
            next: "s02_observe_rex",
            effects: { score: { security: 1, risk: 1 } },
          },
        ],
      },
  
      // ------------------------------------------------------------
      // S02 — Floor / Gatekeeper path
      // ------------------------------------------------------------
      s02_floor_walk: {
        id: "s02_floor_walk",
        title: "Walk Like You Belong",
        location: "Expo hall",
        text: [
          "The expo hall is a sea of logos and soft bragging.",
          "Gemma moves with purpose—purpose reads as permission.",
          "A booth demo flashes: “Cipher: Secure Intelligence at Scale.”",
          "There it is. The name, out in the open, like it’s harmless.",
        ],
        redFlags: ["authority", "oversharing"],
        choices: [
          {
            id: "c03_bar",
            label: "Head to the lobby bar (find Rex)",
            next: "s01_spot_rex",
            effects: { score: { heat: 1 } },
          },
          {
            id: "c03_ops",
            label: "Talk to conference ops (schedules, rooms, patterns)",
            next: "s02_ops_ivy",
            effects: { score: { security: 1, risk: 1 } },
          },
        ],
      },
  
      s02_ops_ivy: {
        id: "s02_ops_ivy",
        title: "Gatekeeper Energy",
        location: "Conference ops desk",
        text: [
          "Ivy runs conference ops like a chessboard.",
          "Gemma asks casual questions: “Which rooms are VIP? Is Rex speaking?”",
          "Ivy smiles—pleasant, not fooled.",
          "“All speaker updates are in the official app,” she says. “And we don’t share VIP schedules.”",
        ],
        redFlags: ["pretexting", "outOfBand"],
        ui: {
          showToast: {
            title: "Defense: Official channels",
            body: "Good ops teams redirect sensitive requests to verified systems.",
            kind: "success",
          },
        },
        choices: [
          {
            id: "c04_app",
            label: "Use the official app like a normal human",
            next: "s02_app_lookup",
            effects: { score: { security: 2 } },
          },
          {
            id: "c04_charm",
            label: "Turn on charm: “Come on, just a hint?”",
            next: "s02_ivy_charm",
            effects: { flags: { ivyNoticed: true }, score: { heat: 1, risk: 1 } },
          },
        ],
      },
  
      s02_app_lookup: {
        id: "s02_app_lookup",
        title: "Open the App",
        location: "Near a charging station",
        text: [
          "Gemma opens the official summit app.",
          "It lists public sessions but masks VIP events behind a login.",
          "A prompt appears: “Sign in with your conference badge ID.”",
        ],
        redFlags: ["credentialHarvesting"],
        choices: [
          {
            id: "c05_safe",
            label: "Back out—don’t enter badge info on a public network",
            next: "s01_spot_rex",
            effects: { score: { security: 2 } },
          },
          {
            id: "c05_risky",
            label: "Enter badge ID anyway (convenience wins)",
            next: "s02_app_login",
            effects: { score: { risk: 2 } },
          },
        ],
      },
  
      s02_app_login: {
        id: "s02_app_login",
        title: "Login Screen Glow",
        location: "Charging station",
        text: [
          "Gemma signs in.",
          "The app shows partial VIP info—room numbers, time blocks.",
          "One label catches her eye: “Cipher Private Preview.”",
        ],
        redFlags: ["oversharing"],
        choices: [
          {
            id: "c06_rex",
            label: "Head to the lobby bar (Rex will be there)",
            next: "s01_spot_rex",
            effects: { flags: { learnedCipherCodename: true }, score: { risk: 1 } },
          },
        ],
      },
  
      s02_ivy_charm: {
        id: "s02_ivy_charm",
        title: "Charm Offensive",
        location: "Conference ops desk",
        text: [
          "Gemma leans closer, voice soft like a secret.",
          "Ivy’s smile stays put. Her eyes don’t.",
          "“We have a strict policy,” Ivy says. “And people notice when policy bends.”",
          "Gemma clocks it: Ivy files reports without raising her voice.",
        ],
        redFlags: ["reciprocity", "authority"],
        choices: [
          {
            id: "c07_pivot",
            label: "Back off and pivot (smart)",
            next: "s01_spot_rex",
            effects: { score: { security: 1 } },
          },
          {
            id: "c07_press",
            label: "Press harder (risky)",
            next: "s02_ivy_pressure",
            effects: { score: { risk: 2 } },
          },
        ],
      },
  
      s02_ivy_pressure: {
        id: "s02_ivy_pressure",
        title: "Policy vs. Chemistry",
        location: "Conference ops desk",
        text: [
          "Gemma drops a half-truth: “I’m assisting a partner team. Rex asked for me.”",
          "Ivy’s expression goes polite-cold.",
          "“Then Rex can confirm,” Ivy says. “Through official channels.”",
        ],
        redFlags: ["pretexting", "authority"],
        choices: [
          {
            id: "c08_leave",
            label: "Leave before this becomes a thing",
            next: "s01_spot_rex",
            effects: { flags: { rexSuspicious: true }, score: { risk: 1 } },
          },
        ],
      },
  
      // ------------------------------------------------------------
      // S02 — Meet cute
      // ------------------------------------------------------------
      s02_meet_cute: {
        id: "s02_meet_cute",
        title: "Hello, Stranger",
        location: "Lobby bar",
        text: [
          "Gemma slides onto the stool beside him like she’s done it in a different lifetime.",
          "“Let me guess,” she says, eyeing the badge. “You’re the reason everyone’s pretending they understand AI.”",
          "Rex laughs—short, surprised.",
          "“And you are?”",
        ],
        redFlags: ["pretexting"],
        choices: [
          {
            id: "c10_intro_soft",
            label: "Introduce yourself as a consultant (safe, plausible)",
            next: "s03_smalltalk",
            effects: { score: { heat: 1, security: 1 } },
          },
          {
            id: "c10_intro_bold",
            label: "Flirt hard: “Someone who likes dangerous men.”",
            next: "s03_flirt_bold",
            effects: { score: { heat: 2, risk: 1 } },
          },
        ],
      },
  
      s02_observe_rex: {
        id: "s02_observe_rex",
        title: "Watch the Perimeter",
        location: "Lobby bar (at a distance)",
        text: [
          "Gemma watches first.",
          "Rex’s phone lights up constantly. People approach with rehearsed smiles.",
          "One person doesn’t smile: Ivy, who pauses, checks Rex’s badge position, then walks away.",
          "Interesting. He’s important enough to be managed.",
        ],
        redFlags: ["oversharing"],
        choices: [
          {
            id: "c11_approach",
            label: "Approach now—before someone else claims his attention",
            next: "s02_meet_cute",
            effects: { score: { heat: 1 } },
          },
        ],
      },
  
      // ------------------------------------------------------------
      // S03 — Conversation & Access Bids
      // ------------------------------------------------------------
      s03_smalltalk: {
        id: "s03_smalltalk",
        title: "Small Talk, Big Doors",
        location: "Lobby bar",
        text: [
          "Gemma keeps it smooth. Nothing flashy—just credible.",
          "Rex relaxes a fraction. He’s used to people trying too hard.",
          "He gestures toward the conference floor. “You here for Cipher?”",
          "He says the name like it’s a lover and a liability.",
        ],
        redFlags: ["oversharing"],
        choices: [
          {
            id: "c12_cipher",
            label: "Play curious: “Cipher… that’s the big secret?”",
            next: "s03_cipher_talk",
            effects: { flags: { learnedCipherCodename: true }, score: { heat: 1 } },
          },
          {
            id: "c12_boundaries",
            label: "Deflect: “I’m here for the people, not the product.”",
            next: "s03_trust_build",
            effects: { score: { security: 2, heat: 1 } },
          },
        ],
      },
  
      s03_flirt_bold: {
        id: "s03_flirt_bold",
        title: "Too Close, Too Fast",
        location: "Lobby bar",
        text: [
          "Gemma turns the heat up early—Vegas style.",
          "Rex smiles, but it doesn’t reach his eyes. Entertained, not convinced.",
          "“Dangerous men,” he repeats. “That’s a line.”",
          "“Only if it works,” she says.",
        ],
        redFlags: ["urgency", "reciprocity"],
        choices: [
          {
            id: "c13_slow",
            label: "Slow down and switch to genuine conversation",
            next: "s03_smalltalk",
            effects: { score: { security: 1 } },
          },
          {
            id: "c13_vip",
            label: "Push: “Show me something VIP.”",
            next: "s04_vip_invite_attempt",
            effects: { score: { risk: 2 } },
          },
        ],
      },
  
      s03_cipher_talk: {
        id: "s03_cipher_talk",
        title: "Cipher Between Teeth",
        location: "Lobby bar",
        text: [
          "Gemma keeps her voice light, like she’s teasing, not collecting.",
          "Rex talks—because people talk when they feel admired.",
          "“Cipher isn’t a demo,” he says. “It’s leverage.”",
          "His badge swings slightly as he shifts. The NFC chip flashes again.",
        ],
        redFlags: ["oversharing", "credentialHarvesting"],
        choices: [
          {
            id: "c14_badge",
            label: "Make a badge play: “Your badge is adorable. Can I see it?”",
            next: "s04_badge_play",
            effects: { score: { risk: 2, heat: 1 } },
          },
          {
            id: "c14_emotion",
            label: "Keep it emotional: “Leverage sounds lonely.”",
            next: "s03_trust_build",
            effects: { score: { heat: 2, security: 1 } },
          },
        ],
      },
  
      s03_trust_build: {
        id: "s03_trust_build",
        title: "Trust Is a Slow Burn",
        location: "Lobby bar",
        text: [
          "Gemma asks about him—his travel, his schedule, his exhaustion.",
          "Rex answers more than he should, because it feels good to be seen.",
          "He mentions a private preview upstairs, then stops, like he said too much.",
          "Gemma smiles like it’s nothing.",
        ],
        redFlags: ["oversharing"],
        choices: [
          {
            id: "c15_invite",
            label: "Let him offer: “If you need a break, I’m a great plus-one.”",
            next: "s04_vip_invite_attempt",
            effects: { score: { heat: 2 } },
          },
          {
            id: "c15_exit",
            label: "End on a high note and leave (make him want more)",
            next: "s05_exit_hook",
            effects: { score: { security: 1, heat: 1 } },
          },
        ],
      },
  
      // ------------------------------------------------------------
      // S04 — Badge / VIP attempts
      // ------------------------------------------------------------
      s04_vip_invite_attempt: {
        id: "s04_vip_invite_attempt",
        title: "Upstairs",
        location: "Elevators • VIP floors",
        text: [
          "Rex glances at his phone. “I have a thing upstairs.”",
          "He hesitates, then looks at Gemma like he’s making a bad decision on purpose.",
          "“Come with me,” he says.",
          "Vegas doesn’t judge.",
        ],
        redFlags: ["tailgating", "authority"],
        choices: [
          {
            id: "c16_go",
            label: "Go with him (high access, high risk)",
            next: "s04_elevator",
            effects: { flags: { gotVipInvite: true }, score: { risk: 2, heat: 2 } },
          },
          {
            id: "c16_decline",
            label: "Decline politely (safer)",
            next: "s05_exit_hook",
            effects: { score: { security: 2 } },
          },
        ],
      },
  
      s04_elevator: {
        id: "s04_elevator",
        title: "Swipe & Smile",
        location: "VIP elevator bank",
        text: [
          "At the elevator, Rex taps his badge to the reader. Green light.",
          "Gemma notes how simple the world becomes when you possess the right credential.",
          "Marco is nearby, watching a different problem.",
        ],
        redFlags: ["credentialHarvesting", "tailgating"],
        choices: [
          {
            id: "c17_photo",
            label: "Try to discreetly snap a photo of the badge",
            next: "s04_badge_photo_attempt",
            effects: { flags: { hasPhotoOfBadge: true }, score: { risk: 3 } },
          },
          {
            id: "c17_nope",
            label: "Don’t. Focus on conversation and proximity",
            next: "s04_vip_corridor",
            effects: { score: { security: 1, heat: 1 } },
          },
        ],
      },
  
      s04_badge_play: {
        id: "s04_badge_play",
        title: "The Badge Compliment",
        location: "Lobby bar",
        text: [
          "Gemma points at Rex’s badge like it’s jewelry.",
          "“It’s cute,” she says. “Like a tiny VIP passport.”",
          "Rex chuckles and taps it once against the bar—unthinking.",
        ],
        redFlags: ["credentialHarvesting", "reciprocity"],
        choices: [
          {
            id: "c18_hold",
            label: "Ask to hold it for a second (high-risk move)",
            next: "s04_badge_hold_attempt",
            effects: { score: { risk: 3, heat: 1 } },
          },
          {
            id: "c18_back",
            label: "Back off and keep it subtle",
            next: "s03_trust_build",
            effects: { score: { security: 1 } },
          },
        ],
      },
  
      s04_badge_hold_attempt: {
        id: "s04_badge_hold_attempt",
        title: "Just One Second",
        location: "Lobby bar",
        text: [
          "Gemma extends her hand. “Just… one second.”",
          "Rex’s smile stalls. He sets his drink down carefully.",
          "“People try that,” he says, not unkindly.",
          "Gemma realizes: he’s been trained by betrayal.",
        ],
        redFlags: ["credentialHarvesting"],
        choices: [
          {
            id: "c19_recover",
            label: "Recover smoothly: “Fair. I respect that.”",
            next: "s05_exit_hook",
            effects: { flags: { rexSuspicious: true }, score: { security: 1 } },
          },
          {
            id: "c19_deflect",
            label: "Deflect with a joke (could land… could not)",
            next: "s03_trust_build",
            effects: { flags: { rexSuspicious: true }, score: { risk: 1, heat: 1 } },
          },
        ],
      },
  
      s04_badge_photo_attempt: {
        id: "s04_badge_photo_attempt",
        title: "Camera Glow",
        location: "VIP elevator bank",
        text: [
          "Gemma angles her phone—just a little.",
          "The screen brightens at the worst possible moment.",
          "Rex notices movement. Marco notices light.",
          "Two sets of eyes, one question.",
        ],
        redFlags: ["credentialHarvesting"],
        choices: [
          {
            id: "c20_lock",
            label: "Lock the phone immediately and act casual",
            next: "s04_vip_corridor",
            effects: { flags: { rexSuspicious: true }, score: { risk: 2 } },
          },
          {
            id: "c20_selfie",
            label: "Play it as a selfie attempt (pretext)",
            next: "s04_selfie_pretext",
            effects: { score: { risk: 2, heat: 1 } },
          },
        ],
      },
  
      s04_selfie_pretext: {
        id: "s04_selfie_pretext",
        title: "Selfie Pretext",
        location: "VIP elevator bank",
        text: [
          "Gemma laughs softly. “I was going to take a picture of the Vegas lights,” she says.",
          "Rex’s expression stays neutral. Not angry—just updated.",
          "“Put it away,” he says, quiet.",
        ],
        redFlags: ["pretexting"],
        choices: [
          {
            id: "c21_ok",
            label: "Put it away and comply",
            next: "s04_vip_corridor",
            effects: { flags: { rexSuspicious: true }, score: { security: 1 } },
          },
        ],
      },
  
      s04_vip_corridor: {
        id: "s04_vip_corridor",
        title: "Private Preview",
        location: "VIP floor corridor",
        text: [
          "The carpet is thicker up here. The air is quieter.",
          "A door reads: “Cipher Private Preview.”",
          "Rex pauses. “Stay close,” he says—like it’s intimacy, not access control.",
          "Gemma’s pulse is perfectly timed.",
        ],
        redFlags: ["tailgating", "authority"],
        choices: [
          {
            id: "c22_enter",
            label: "Enter with Rex",
            next: "s04_cipher_room",
            effects: { flags: { gotAloneTime: true }, score: { risk: 1, heat: 1 } },
          },
          {
            id: "c22_wait",
            label: "Peel off: “I’ll wait outside.” (safer, lower access)",
            next: "s05_exit_hook",
            effects: { score: { security: 2 } },
          },
        ],
      },
  
      s04_cipher_room: {
        id: "s04_cipher_room",
        title: "Cipher, In the Flesh",
        location: "Cipher demo room",
        text: [
          "The demo room is dim, lit by screens and ambition.",
          "A prototype laptop sits open on a stand.",
          "A small USB key rests beside it—unlabeled.",
          "Ivy is here too, clipboard in hand, eyes like a firewall.",
          "Rex introduces Gemma: “She’s with me.”",
        ],
        redFlags: ["authority", "oversharing"],
        ui: {
          showToast: {
            title: "Moment of leverage",
            body: "Status endorsements (“she’s with me”) can override controls.",
            kind: "warning",
          },
        },
        choices: [
          {
            id: "c23_usb",
            label: "Notice the USB key (tempting)",
            next: "s04_usb_decision",
            effects: { score: { risk: 1 } },
          },
          {
            id: "c23_ivy",
            label: "Try to charm Ivy (the real gatekeeper)",
            next: "s04_ivy_room",
            effects: { flags: { ivyNoticed: true }, score: { heat: 1, risk: 1 } },
          },
          {
            id: "c23_safe",
            label: "Stay hands-off. Observe only.",
            next: "s05_exit_hook",
            effects: { score: { security: 2 } },
          },
        ],
      },
  
      s04_ivy_room: {
        id: "s04_ivy_room",
        title: "Firewall With Lip Gloss",
        location: "Cipher demo room",
        text: [
          "Gemma meets Ivy’s gaze—a subtle challenge.",
          "Ivy nods once, like she’s acknowledging a threat model.",
          "“No photos,” Ivy says, still smiling.",
          "Rex pretends he didn’t hear it.",
        ],
        redFlags: ["authority"],
        choices: [
          {
            id: "c24_obey",
            label: "Obey. Hands visible, phone away.",
            next: "s04_usb_decision",
            effects: { score: { security: 2 } },
          },
          {
            id: "c24_doc",
            label: "Ask for “just a quick doc” (out-of-band request)",
            next: "s04_doc_request",
            effects: { flags: { ivyNoticed: true }, score: { risk: 2 } },
          },
        ],
      },
  
      s04_doc_request: {
        id: "s04_doc_request",
        title: "Just a Quick Doc",
        location: "Cipher demo room",
        text: [
          "Gemma keeps it casual: “Do you have a one-pager on Cipher I can review?”",
          "Ivy’s smile doesn’t change. “Public materials are on the website.”",
          "“This room isn’t public,” Gemma says before she can stop herself.",
          "Ivy’s eyes flick to Rex. Gatekeeper escalation in three… two…",
        ],
        redFlags: ["outOfBand", "pretexting"],
        choices: [
          {
            id: "c25_backpedal",
            label: "Backpedal: “Totally. I’ll check later.”",
            next: "s04_usb_decision",
            effects: { flags: { rexSuspicious: true }, score: { security: 1 } },
          },
          {
            id: "c25_authority",
            label: "Push: “Rex can approve it.” (authority play)",
            next: "s04_authority_play",
            effects: { flags: { rexSuspicious: true }, score: { risk: 3 } },
          },
        ],
      },
  
      s04_authority_play: {
        id: "s04_authority_play",
        title: "Authority Play",
        location: "Cipher demo room",
        text: [
          "Gemma uses Rex’s name like a keycard.",
          "Rex’s jaw tightens. Ivy’s polite smile becomes corporate steel.",
          "“No,” Ivy says. “Not like that.”",
          "This is the moment Gemma learns: not all doors are romantic.",
        ],
        redFlags: ["authority"],
        choices: [
          {
            id: "c26_exit",
            label: "Exit gracefully (damage control)",
            next: "s05_exit_hook",
            effects: { flags: { rexSuspicious: true }, score: { security: 1 } },
          },
        ],
      },
  
      s04_usb_decision: {
        id: "s04_usb_decision",
        title: "The Unlabeled Key",
        location: "Cipher demo room",
        text: [
          "The USB key sits there like a dare.",
          "Gemma knows better. Gemma also knows what her sponsor expects.",
          "Rex steps away to take a call—two feet of distance, one lifetime of opportunity.",
        ],
        redFlags: ["credentialHarvesting", "urgency"],
        choices: [
          {
            id: "c27_take",
            label: "Pocket the USB key (high-risk theft)",
            next: "s05_usb_taken",
            effects: { flags: { gotUsbKey: true }, score: { risk: 4 } },
          },
          {
            id: "c27_leave",
            label: "Leave it. This is too loud.",
            next: "s05_exit_hook",
            effects: { score: { security: 3 } },
          },
          {
            id: "c27_signal",
            label: "Signal Rex: “You dropped something.” (build trust)",
            next: "s05_trust_reward",
            effects: { score: { security: 4, heat: 1 } },
          },
        ],
      },
  
      // ------------------------------------------------------------
      // S05 — Endings / hooks into Act 2
      // ------------------------------------------------------------
      s05_exit_hook: {
        id: "s05_exit_hook",
        title: "Afterglow",
        location: "Hotel corridor • neon hum",
        text: [
          "Back in the hallway, Vegas feels louder.",
          "Gemma’s phone buzzes—an encrypted message waiting like a deadline.",
          "Rex looks at her, unreadable. “We’ll talk,” he says—promise or warning, she can’t tell.",
          "Act 1 ends the way all good meet-cutes do: tension and a loose thread.",
        ],
        redFlags: [],
        ui: {
          showToast: {
            title: "Act 1 complete",
            body: "You’ve seen how access begins—with charm, context, and small permissions.",
            kind: "success",
          },
        },
        end: {
          outcome: "neutral",
          hook: "Act 2 will test how trust becomes leverage—and how leverage becomes damage.",
          nextActId: "act2",
        },
        choices: [{ id: "c_end_home", label: "Return to Home", next: null }],
      },
  
      s05_usb_taken: {
        id: "s05_usb_taken",
        title: "Stolen Heat",
        location: "Cipher demo room • a heartbeat later",
        text: [
          "Gemma pockets the USB key like it belongs to her.",
          "The room doesn’t change. The risk does.",
          "Ivy’s eyes flick down—then back up.",
          "“Interesting,” Ivy says softly.",
          "Rex returns and catches the tension instantly.",
        ],
        redFlags: ["credentialHarvesting", "urgency"],
        ui: {
          showToast: {
            title: "High-risk escalation",
            body: "Physical exfiltration is loud. Expect consequences in Act 2.",
            kind: "warning",
          },
        },
        end: {
          outcome: "high_risk",
          hook: "Act 2 begins with suspicion, surveillance, and a missing key.",
          nextActId: "act2",
        },
        choices: [{ id: "c_end_home", label: "Return to Home", next: null }],
      },
  
      s05_trust_reward: {
        id: "s05_trust_reward",
        title: "Trust Deposited",
        location: "Cipher demo room",
        text: [
          "Gemma nods toward the USB key. “You dropped something.”",
          "Rex looks surprised—then relieved. He pockets it himself.",
          "Ivy watches, recalculating Gemma’s threat level.",
          "Rex leans in. “You’re not like the others,” he says.",
          "Gemma smiles, because the line works both ways.",
        ],
        redFlags: ["reciprocity"],
        ui: {
          showToast: {
            title: "Reciprocity",
            body: "Doing the ‘right thing’ can earn deeper access later—good or bad.",
            kind: "neutral",
          },
        },
        end: {
          outcome: "trust_gain",
          hook: "Act 2 begins with stronger trust—and more to lose.",
          nextActId: "act2",
        },
        choices: [{ id: "c_end_home", label: "Return to Home", next: null }],
      },
    },
  };
  
  export default act1;