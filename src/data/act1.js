// src/data/act1.js
// Act 1: hello.friend, "The Meet-Cute"
//
// IMPORTANT:
// This file is DATA ONLY. No JSX. No Chakra components.
// PlayAct1.jsx renders: scene.title, scene.location, scene.text (array),
// scene.redFlags (array), scene.ui.showToast, and scene.choices (label/next).

const act1 = {
  meta: {
    actId: "act1",
    title: "hello.friend",
    subtitle: "The Meet-Cute",
    theme:
      "Vegas neon • dangerous chemistry • first contact social engineering • warning flags in plain sight",
    setting: {
      city: "Las Vegas",
      venue: "CyberSteel Executive Summit",
      vibe: "City of sin, expensive temptation, and just enough chemistry to make caution slip",
    },
    version: 4,
  },

  sources: {
    1: "Akeiber, H. J. (2025). The evolution of social engineering attacks: A cybersecurity engineering perspective.",
    2: "Hatfield, J. M. (2018). Social engineering in cybersecurity: The evolution of a concept.",
    3: "Iovine, A. (2026). What are romance scams and how can you avoid them?",
    4: "Wang, Z., Sun, L., & Zhu, H. (2020). Defining social engineering in cybersecurity.",
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
      archetype: "high value target",
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
    socialEngineering: {
      term: "social engineering",
      definition:
        "Manipulating people through trust, deception, and social interaction to gain access or sensitive information.",
      sources: [2, 4],
    },
    trust: {
      term: "trust",
      definition:
        "A sense of emotional safety that lowers skepticism and makes disclosure easier.",
      sources: [1, 3, 4],
    },
    tailgating: {
      term: "tailgating",
      definition:
        "Following someone into a restricted area without proper authorization.",
      sources: [1],
    },
    luring: {
      term: "luring",
      definition:
        "Using attraction, attention, or curiosity to draw someone into a risky interaction.",
      sources: [1, 3],
    },
    urgency: {
      term: "urgency",
      definition:
        "Creating time pressure so a person acts before fully verifying the situation.",
      sources: [1],
    },
    oversharing: {
      term: "oversharing",
      definition:
        "Revealing sensitive information too casually, too emotionally, or too early.",
      sources: [2, 3, 4],
    },
    socialProof: {
      term: "social proof",
      definition:
        "Assuming something is safe because other people appear comfortable with it.",
      sources: [1],
    },
    humanFactors: {
      term: "human factors",
      definition:
        "The human behaviors and judgments that attackers exploit instead of technical flaws alone.",
      sources: [4],
    },
    attackVector: {
      term: "attack vector",
      definition: "The path or method used to begin or advance an attack.",
      sources: [4],
    },
    confidentialInformation: {
      term: "confidential information",
      definition:
        "Sensitive details that should not be disclosed without proper need and verification.",
      sources: [4],
    },
    warningFlags: {
      term: "warning flags",
      definition:
        "Signs that a situation may be manipulative, deceptive, or unsafe.",
      sources: [1, 3],
    },
    manipulation: {
      term: "manipulation",
      definition:
        "Influencing someone through psychological pressure, emotion, or misdirection.",
      sources: [1, 2, 4],
    },
    deception: {
      term: "deception",
      definition:
        "Misleading someone in order to influence their actions or gain information.",
      sources: [2, 4],
    },
    socialInteraction: {
      term: "social interaction",
      definition:
        "Ordinary conversation and rapport building that can be used to lower defenses and make a risky exchange feel natural.",
      sources: [2, 4],
    },
    credentialHarvesting: {
      term: "credential harvesting",
      definition:
        "Collecting badge details, access clues, or login information that can later be used to gain entry or impersonate someone.",
      sources: [1, 4],
    },
    baiting: {
      term: "baiting",
      definition:
        "Using something tempting, flattering, or emotionally charged to override caution.",
      sources: [1],
    },
    confirmationBias: {
      term: "confirmation bias",
      definition:
        "Interpreting events the way you want them to be true rather than the way they are.",
      sources: [1],
    },

    redFlags: {
      socialEngineering: {
        term: "social engineering",
        definition:
          "Manipulating people through trust, deception, and social interaction to gain access or sensitive information.",
        sources: [2, 4],
      },
      trust: {
        term: "trust",
        definition:
          "A sense of emotional safety that lowers skepticism and makes disclosure easier.",
        sources: [1, 3, 4],
      },
      tailgating: {
        term: "tailgating",
        definition:
          "Following someone into a restricted area without proper authorization.",
        sources: [1],
      },
      luring: {
        term: "luring",
        definition:
          "Using attraction, attention, or curiosity to draw someone into a risky interaction.",
        sources: [1, 3],
      },
      urgency: {
        term: "urgency",
        definition:
          "Creating time pressure so a person acts before fully verifying the situation.",
        sources: [1],
      },
      oversharing: {
        term: "oversharing",
        definition:
          "Revealing sensitive information too casually, too emotionally, or too early.",
        sources: [2, 3, 4],
      },
      socialProof: {
        term: "social proof",
        definition:
          "Assuming something is safe because other people appear comfortable with it.",
        sources: [1],
      },
      humanFactors: {
        term: "human factors",
        definition:
          "The human behaviors and judgments that attackers exploit instead of technical flaws alone.",
        sources: [4],
      },
      attackVector: {
        term: "attack vector",
        definition: "The path or method used to begin or advance an attack.",
        sources: [4],
      },
      confidentialInformation: {
        term: "confidential information",
        definition:
          "Sensitive details that should not be disclosed without proper need and verification.",
        sources: [4],
      },
      warningFlags: {
        term: "warning flags",
        definition:
          "Signs that a situation may be manipulative, deceptive, or unsafe.",
        sources: [1, 3],
      },
      manipulation: {
        term: "manipulation",
        definition:
          "Influencing someone through psychological pressure, emotion, or misdirection.",
        sources: [1, 2, 4],
      },
      deception: {
        term: "deception",
        definition:
          "Misleading someone in order to influence their actions or gain information.",
        sources: [2, 4],
      },
      socialInteraction: {
        term: "social interaction",
        definition:
          "Ordinary conversation and rapport building that can be used to lower defenses and make a risky exchange feel natural.",
        sources: [2, 4],
      },
      credentialHarvesting: {
        term: "credential harvesting",
        definition:
          "Collecting badge details, access clues, or login information that can later be used to gain entry or impersonate someone.",
        sources: [1, 4],
      },
      baiting: {
        term: "baiting",
        definition:
          "Using something tempting, flattering, or emotionally charged to override caution.",
        sources: [1],
      },
      confirmationBias: {
        term: "confirmation bias",
        definition:
          "Interpreting events the way you want them to be true rather than the way they are.",
        sources: [1],
      },
    },
  },

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
    s00_arrival: {
      id: "s00_arrival",
      title: "Neon Check-In",
      location: "Conference Lobby • Premier Tech Summit",
      text: [
        "Las Vegas glows with golden light, mirrored ceilings, and expensive regrets.",
        "Inside the Premier Tech Summit, badges flash like tiny passports to power, opening doors to influence, information, and the people behind both.",
        "Gemma moves through the crowd with effortless confidence, but nothing about tonight is accidental.",
        "She is here for one man, Rex Vale, and for the access tied to the badge hanging from his lanyard.",
      ],
      redFlags: ["socialEngineering", "attackVector"],
      ui: {
        showToast: {
          title: "Act 1: hello.friend",
          body: "A meet-cute can also be an attack scenario. Watch how chemistry, trust, and charm begin building the same attack vector that Act 2 deepens and Act 3 exposes.",
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

    s01_checkin: {
      id: "s01_checkin",
      title: "Badge, Please",
      location: "Registration desk",
      text: [
        "The registration desk hands Gemma a badge and a bright professional smile.",
        "A staffer reminds everyone that badges are required for all sessions, including VIP floors.",
        "Gemma lets her gaze rest on the word VIP just long enough to look curious rather than calculated. But that access is exactly what she came here to get.",
      ],
      redFlags: ["socialEngineering", "humanFactors"],
      ui: {
        showToast: {
          title: "Red flag: social engineering setup",
          body: "The best setups do not feel dramatic. They feel flirtatious, casual, and perfectly ordinary.",
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
      title: "Behind the Velvet Rope",
      location: "VIP entrance",
      text: [
        "Crowds, status, and momentum can make weak security feel normal. When everyone keeps moving, it becomes easier for someone to slip through without being questioned.",
        "Marco checks badges with the distracted speed of someone doing three jobs at once.",
        "Attendees flash their credentials and keep moving. No one wants to be the person who slows everything down or interrupts the flow.",
        "Gemma knows exactly how to use first impressions. She looks stunning in a fitted red dress that makes her hard to ignore, but not so conspicuous that anyone studies her too closely. She draws just the right kind of attention: enough to seem like she belongs, not enough to invite real scrutiny.",
        "She notices it right away. People are trusting the situation too easily. The polished atmosphere makes the security look stronger than it really is, and she knows she could slip straight into the VIP lounge.",
      ],
      redFlags: ["socialProof", "tailgating"],
      ui: {
        showToast: {
          title: "Red flags: social proof and tailgating",
          body: "Crowds, status, and momentum can make bad security feel normal enough to slip inside.",
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
          label: "Abort and return to the main floor",
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
        "Gemma slips into the wake of a suited attendee like the move was rehearsed before.",
        "Marco glances up, just long enough to catch that something is off.",
        "Ma'am, he says. Badge?",
      ],
      redFlags: ["tailgating", "warningFlags"],
      choices: [
        {
          id: "c01_pretext",
          label: "Smile and say your badge is acting up",
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
      title: "Badge Issue",
      location: "VIP entrance",
      text: [
        "Gemma’s voice softens, all polish and practiced embarrassment.",
        "Marco glances at the growing line behind her and weighs the cost of slowing everything down for one small disruption.",
        "Security and speed are always at war. Most of the time, speed wins.",
        'He weighs it for a second, then steps aside. "I\'ll let you in," he says.',
      ],
      redFlags: ["urgency", "manipulation"],
      ui: {
        showToast: {
          title: "Red flag: urgency",
          body: "When people are rushed, overloaded, or distracted, process starts to loosen.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c01_roam",
          label: "Roam and find Rex first",
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

    s01_spot_rex: {
      id: "s01_spot_rex",
      title: "Target Acquired",
      location: "Lobby bar",
      text: [
        "Beyond the expo floor, Rex has drifted to the bar, jacket off, sleeves rolled, and for the first time all night, his attention is unguarded.",
        "His badge hangs forward, catching the light like an invitation it was never meant to be.",
        "Then he catches Gemma's reflection in the mirror. Their eyes meet for a charged, deliberate moment, and she notices the badge almost immediately. It is exactly the kind of access she came here to find.",
        "She moves with the kind of presence that turns heads without trying. Her dress traces her figure with effortless sexiness, and Rex finds himself unable to look away.",
        "Rex's attention belongs entirely with Gemma.",
      ],
      redFlags: ["credentialHarvesting", "humanFactors"],
      ui: {
        showToast: {
          title: "Human factor moment",
          body: "Badges, phones, and small lapses become much easier to exploit when attraction and distraction enter the room.",
          kind: "neutral",
        },
      },
      choices: [
        {
          id: "c02_meetcute",
          label: "Do the meet-cute and order a drink beside him",
          next: "s02_meet_cute",
          effects: { score: { heat: 2 } },
        },
        {
          id: "c02_observe",
          label: "Observe first: who approaches him, who protects him",
          next: "s02_observe_rex",
          effects: { score: { security: 1, risk: 1 } },
        },
      ],
    },

    s02_floor_walk: {
      id: "s02_floor_walk",
      title: "Walk Like You Belong",
      location: "Expo hall",
      text: [
        "Gemma slips back into the main Expo Hall, her move toward the VIP lounge quietly shut down by Marco.",
        "The expo hall is a sea of logos, the who's who of tech, and soft bragging.",
        "Gemma moves with purpose. Purpose often reads as permission.",
        'A booth demo flashes: "Cipher: CyberSteel\'s New AI Commodity."',
        "There it is, displayed in plain sight. Truly sensitive information is usually obscured, not advertised, and that alone feels like a warning.",
      ],
      redFlags: ["confidentialInformation", "humanFactors"],
      choices: [
        {
          id: "c03_bar",
          label: "Head to the lobby bar and find Rex",
          next: "s01_spot_rex",
          effects: { score: { heat: 1 } },
        },
        {
          id: "c03_ops",
          label: "Talk to conference ops about schedules and room patterns",
          next: "s02_ops_ivy",
          effects: { score: { security: 1, risk: 1 } },
        },
      ],
    },

    s02_ops_ivy: {
      id: "s02_ops_ivy",
      title: "Gatekeeper Energy",
      location: "CyberSteel booth",
      text: [
        "Strong gatekeepers do not leak sensitive details in conversation. They redirect requests into official, verified channels and make the boundary feel final.",
        "Ivy commands the CyberSteel booth with effortless polish, sharp as glass and impossible to rattle. She knows Rex, knows his world, and recognizes the practiced charm of people trying to get close to him under the guise of harmless curiosity.",
        "Gemma asks lightly about the VIP rooms and whether Rex is speaking.",
        "Ivy's smile is immaculate, but it never softens into trust.",
        '"All speaker updates are in the official app," she says. "And we do not share VIP schedules."',
      ],
      redFlags: ["warningFlags", "socialEngineering"],
      ui: {
        showToast: {
          title: "Defense: official channels",
          body: "Good gatekeepers redirect sensitive requests into verified systems instead of casual conversation.",
          kind: "success",
        },
      },
      choices: [
        {
          id: "c04_app",
          label: "Use the official app",
          next: "s02_app_lookup",
          effects: { score: { security: 2 } },
        },
        {
          id: "c04_charm",
          label: "Turn on the charm and ask for a hint",
          next: "s02_ivy_charm",
          effects: {
            flags: { ivyNoticed: true },
            score: { heat: 1, risk: 1 },
          },
        },
      ],
    },

    s02_app_lookup: {
      id: "s02_app_lookup",
      title: "Open the App",
      location: "Expo Hall",
      text: [
        "Gemma opens the summit app.",
        "It lists public sessions but masks VIP events behind a login.",
        "A prompt appears and asks for conference credentials.",
      ],
      redFlags: ["warningFlags"],
      choices: [
        {
          id: "c05_safe",
          label: "Back out and avoid entering credentials in public",
          next: "s01_spot_rex",
          effects: { score: { security: 2 } },
        },
        {
          id: "c05_risky",
          label: "Enter the information anyway",
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
        "The app shows partial VIP info, room numbers, and time blocks.",
        'One label catches her eye: "Cipher Private Preview."',
      ],
      redFlags: ["confidentialInformation", "credentialHarvesting"],
      choices: [
        {
          id: "c06_rex",
          label: "Head to the lobby bar",
          next: "s01_spot_rex",
          effects: {
            flags: { learnedCipherCodename: true },
            score: { risk: 1 },
          },
        },
      ],
    },

    s02_ivy_charm: {
      id: "s02_ivy_charm",
      title: "Charm Offensive",
      location: "CyberSteel booth",
      text: [
        "Gemma leans closer, voice soft like a secret.",
        "Ivy's smile stays put. Her eyes do not.",
        '"We have a strict policy," Ivy says.',
        "Gemma sees it immediately. Ivy is not someone people push past.",
        ,
      ],
      redFlags: ["trust", "warningFlags"],
      choices: [
        {
          id: "c07_pivot",
          label: "Back off and pivot",
          next: "s01_spot_rex",
          effects: { score: { security: 1 } },
        },
        {
          id: "c07_press",
          label: "Press harder",
          next: "s02_ivy_pressure",
          effects: { score: { risk: 2 } },
        },
      ],
    },

    s02_ivy_pressure: {
      id: "s02_ivy_pressure",
      title: "Policy vs. Chemistry",
      location: "Cybersteel Booth",
      text: [
        "Gemma offers a half-truth, polished to sound like she already belongs.",
        "Ivy's expression cools without losing its professionalism.",
        '"Then Rex can confirm," she says. "Through official channels."',
      ],
      redFlags: ["deception", "warningFlags"],
      choices: [
        {
          id: "c08_leave",
          label: "Leave before this becomes memorable",
          next: "s01_spot_rex",
          effects: { flags: { rexSuspicious: true }, score: { risk: 1 } },
        },
      ],
    },

    s02_meet_cute: {
      id: "s02_meet_cute",
      title: "Hello, Stranger",
      location: "Lobby bar",
      text: [
        "Gemma slides onto the stool beside him with sexy confidence",
        "Rex's heart skips a beat.",
        '"Let me guess," she says, looking toward his badge. "You\'re the one everyone here keeps trying to impress."',
        "Rex laughs, genuinely amused.",
        '"And you are?"',
      ],
      redFlags: ["luring"],
      choices: [
        {
          id: "c10_intro_soft",
          label: "Introduce yourself as a consultant",
          next: "s03_smalltalk",
          effects: { score: { heat: 1, security: 1 } },
        },
        {
          id: "c10_intro_bold",
          label: "Flirt hard",
          next: "s03_flirt_bold",
          effects: { score: { heat: 2, risk: 1 } },
        },
        {
          id: "c10_badge_banter",
          label: "Tease him about the badge",
          next: "s02_badge_banter",
          effects: { score: { heat: 1, risk: 1 } },
        },
      ],
    },

    s02_badge_banter: {
      id: "s02_badge_banter",
      title: "Nice Badge",
      location: "Lobby bar",
      text: [
        "Gemma lets her gaze drift toward his badge, as if she were admiring an expensive watch.",
        '"I bet that badge gets you into places the rest of us never see," she says.',
        "Rex glances down and smiles, clearly pleased by the attention.",
      ],
      redFlags: ["luring", "manipulation", "oversharing"],
      ui: {
        showToast: {
          title: "Red flag: luring",
          body: "Flattery and attraction can gather sensitive details without sounding like an attack.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c11_badge_probe",
          label: "Ask what kind of access the badge gives him",
          next: "s03_smalltalk",
          effects: { score: { risk: 2, heat: 1 } },
        },
        {
          id: "c11_playful_redirect",
          label: "Keep it playful and return to small talk",
          next: "s03_smalltalk",
          effects: { score: { heat: 1, security: 1 } },
        },
      ],
    },

    s02_observe_rex: {
      id: "s02_observe_rex",
      title: "Read the Room",
      location: "Lobby bar",
      text: [
        "Gemma keeps just outside his orbit, watching the rhythm of the room around him.",
        "People approach Rex in ways that feel familiar: some starstruck, some calculating, some eager to prove their value.",
        "A badge with that level of access should never be left exposed in a public space.",
        "A great deal of social engineering begins long before anyone says a word.",
      ],
      redFlags: ["socialEngineering", "humanFactors"],
      ui: {
        showToast: {
          title: "Observation is a tactic",
          body: "Attackers often collect small clues first, then use them to make later manipulation feel natural.",
          kind: "neutral",
        },
      },
      choices: [
        {
          id: "c09_join_now",
          label: "Approach him now with a polished opener",
          next: "s02_meet_cute",
          effects: { score: { security: 1, heat: 1 } },
        },
        {
          id: "c09_wait_for_gap",
          label: "Wait until he is alone, then make your move",
          next: "s03_smalltalk",
          effects: { flags: { gotAloneTime: true }, score: { heat: 1 } },
        },
      ],
    },

    s03_smalltalk: {
      id: "s03_smalltalk",
      title: "The Opening Move",
      location: "Lobby bar",
      text: [
        'Gemma smiles. "Hi, I\'m Gemma."',
        "From there, the conversation flows like he's known this woman his whole life. They talk and laugh like the connection was waiting to happen, and for a moment Rex feels the pull of something that seems almost familiar.",
        "He relaxes by degrees, drawn in by Gemma's sexy energy.",
        "Underneath it all, Gemma is taking mental notes. Every reaction, every weakness, every subtle sign that his trust is starting to open the door.",
      ],
      redFlags: ["trust", "warningFlags", "humanFactors"],
      choices: [
        {
          id: "c12_cipher",
          label: "Ask how intense it must be protecting something like Cipher",
          next: "s04_cipher_hook",
          effects: { score: { risk: 1, heat: 1 } },
        },
        {
          id: "c12_invite",
          label: "Let him talk and see what he offers first",
          next: "s04_rex_opens_up",
          effects: { score: { security: 1, heat: 1 } },
        },
      ],
    },

    s03_flirt_bold: {
      id: "s03_flirt_bold",
      title: "Too Smooth",
      location: "Lobby bar",
      text: [
        '"Someone who knows exactly who she\'s talking to," Gemma says, testing whether a little vanity might loosen the lock.',
        "Rex smiles, his attention settling on Gemma exactly where she wants it.",
        "The trick is making manipulation feel like chemistry instead of an obvious warning sign.",
      ],
      redFlags: ["manipulation", "warningFlags"],
      choices: [
        {
          id: "c13_soften",
          label: "Dial it back and pivot to smarter conversation",
          next: "s03_smalltalk",
          effects: { score: { heat: 1, security: 1 } },
        },
        {
          id: "c13_double_down",
          label: "Double down and ask for a private demo of Cipher",
          next: "s04_private_demo_push",
          effects: { score: { risk: 2, heat: 1 } },
        },
      ],
    },

    s04_cipher_hook: {
      id: "s04_cipher_hook",
      title: "The Name Drop",
      location: "Lobby bar",
      text: [
        "The moment Gemma says Cipher, Rex's expression changes by less than a heartbeat.",
        "Not fear. Ownership.",
        "He answers carefully, which is its own kind of answer.",
      ],
      redFlags: ["confidentialInformation", "warningFlags"],
      end: {
        outcome: "neutral",
        hook: "You got him talking, but you also revealed exactly what interested you.",
      },
      choices: [
        {
          id: "c14_restart",
          label: "Restart Act 1",
          next: null,
        },
      ],
    },

    s04_rex_opens_up: {
      id: "s04_rex_opens_up",
      title: "Voluntary Disclosure",
      location: "Lobby bar",
      text: [
        "Rex starts revealing more than he means to, without Gemma ever having to ask the dangerous questions outright.",
        "He talks about investors, private previews, leaks, and the exhausting pressure of protecting something everyone seems to want.",
        "The most effective social engineering rarely feels forced. It feels self-directed, powered by trust, ego, and ordinary human vulnerability.",
      ],
      redFlags: ["oversharing", "trust", "socialEngineering"],
      end: {
        outcome: "trust_gain",
        hook: "By being patient, Gemma let the target do the work for her and set the stage for the emotional slide into Act 2.",
      },
      choices: [
        {
          id: "c15_restart",
          label: "Restart Act 1",
          next: null,
        },
      ],
    },

    s04_private_demo_push: {
      id: "s04_private_demo_push",
      title: "Too Much, Too Fast",
      location: "Lobby bar",
      text: [
        "Gemma pushes fast, hinting at a more private demo in Rex's hotel room. Her hand gently grazing Rex's thigh.",
        "For a moment, Rex seems tempted. Then the look on his face changes. Amusement cools into recognition.",
        "He has seen this pattern before.",
        '"Nice try," he says, setting his glass down.',
        "Charm only works until people realize you want something from them.",
      ],
      redFlags: ["warningFlags", "attackVector"],
      end: {
        outcome: "high_risk",
        hook: "You pushed for access before enough trust was built.",
      },
      choices: [
        {
          id: "c16_restart",
          label: "Restart Act 1",
          next: null,
        },
      ],
    },
  },
};

export default act1;
