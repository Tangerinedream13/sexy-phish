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
      location: "Conference lobby • CyberSteel Executive Summit",
      text: [
        "Las Vegas is all velvet light, mirrored ceilings, and expensive mistakes.",
        "At the CyberSteel Executive Summit, badges flash like tiny passports into other people's power.",
        "Gemma steps into the crowd looking effortless, but nothing about tonight is accidental.",
        "She is here for one man, Rex Vale, and for whatever trust he can be seduced into mistaking for fate.",
      ],
      redFlags: ["socialEngineering", "attackVector"],
      ui: {
        showToast: {
          title: "Act 1: hello.friend",
          body: "A meet-cute can also be an attack scenario. Watch how chemistry, trust, and charm start building the same attack vector that Act 2 deepens and Act 3 pays for.",
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
        "Gemma lets her gaze rest on the word VIP just long enough to look intrigued instead of intentional.",
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
      title: "Velvet Rope Economics",
      location: "VIP entrance",
      text: [
        "Marco checks badges with the speed of someone doing three jobs at once.",
        "Attendees flash credentials and keep moving. Nobody wants to be the person who breaks the rhythm.",
        "Gemma sees it immediately. Social proof can make weak verification look polished, even sexy.",
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
        "Gemma slips into the wake of a suited attendee like the move was rehearsed in silk and neon.",
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
        "Gemma's voice turns honey-soft, all polish and plausible embarrassment.",
        "Marco's gaze flicks to the impatient line behind her and to the cost of slowing everything down for one beautiful inconvenience.",
        "Security and speed pull in opposite directions. In real life, speed gets kissed first.",
        "He waves her away. Get it fixed. Do not come back up without it.",
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
      location: "Lobby bar • off the main floor",
      text: [
        "Rex Vale stands at the bar with his sleeves rolled and his attention finally unguarded.",
        "His badge hangs forward, the NFC chip catching the light like an invitation it was never meant to be.",
        "He looks up just as Gemma appears behind him in the mirror, and for one dangerous second the scene reads less like surveillance and more like destiny.",
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
        "The expo hall is a sea of logos, polished smiles, and soft bragging.",
        "Gemma moves with purpose. Purpose often reads as permission.",
        'A booth demo flashes: "Cipher: Secure Intelligence at Scale."',
        "There it is, the name out in the open, like the most sensitive things are always hidden better than that.",
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
      location: "Conference ops desk",
      text: [
        "Ivy runs conference ops like a chessboard.",
        "Gemma asks casual questions about VIP rooms and whether Rex is speaking.",
        "Ivy smiles, pleasant and not fooled.",
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
      location: "Near a charging station",
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
      location: "Conference ops desk",
      text: [
        "Gemma leans closer, voice soft like a secret.",
        "Ivy's smile stays put. Her eyes do not.",
        '"We have a strict policy," Ivy says. "And people notice when policy bends."',
        "Gemma clocks it immediately. Ivy is the kind of person who files reports without raising her voice.",
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
      location: "Conference ops desk",
      text: [
        "Gemma drops a half truth and tries to sound like she already belongs inside the system.",
        "Ivy's expression goes polite and cold.",
        '"Then Rex can confirm," Ivy says. "Through official channels."',
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
        "Gemma slides onto the stool beside him like she has done it in another life and fully intends to do it again in this one.",
        '"Let me guess," she says, eyeing the badge. "You\'re the reason everyone in this building is pretending they understand AI."',
        "Rex laughs, short and surprised.",
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
        "Gemma tilts her head toward his badge like she is admiring a watch.",
        '"That credential practically screams important," she says.',
        "Rex glances down and smiles. Vanity is such a cooperative human factor.",
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
      location: "Lobby bar • mirror line",
      text: [
        "Gemma lingers just outside his orbit and watches the rhythm around him.",
        "People approach Rex in categories: starstruck, transactional, and useful.",
        "No one checks whether his badge is visible. No one notices how much can be inferred before a single direct question is asked.",
        "A great deal of social engineering begins with observation.",
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
      title: "Velvet Small Talk",
      location: "Lobby bar",
      text: [
        "Gemma gives him something polished, clever, and just personal enough to feel intimate.",
        "Rex relaxes by degrees, drawn in by the kind of attention that feels rare when everyone else wants something from him.",
        "Their banter starts to hum with tension. Underneath it, Gemma is reading more than his words. Ego, loneliness, impatience, appetite, and the first warning flags of trust at work.",
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
        '"Someone who likes powerful men," Gemma says, like she is testing whether vanity can unlock a door.',
        "Rex smiles, but only with half his face.",
        "The trick is making manipulation feel like attraction instead of an obvious warning flag.",
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
        "Rex starts sharing without being asked the dangerous questions directly.",
        "He talks about investors, previews, leaks, and the exhausting pressure of guarding something everyone wants.",
        "The most effective social engineering often feels self authored, powered by trust and human factors instead of force.",
      ],
      redFlags: ["oversharing", "trust", "socialEngineering"],
      end: {
        outcome: "trust_gain",
        hook: "By being patient, you let the target do the work for you and set up the emotional slide into Act 2.",
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
        "Gemma asks for a private demo too soon.",
        "Rex's amusement cools into pattern recognition.",
        "Charm works best before intent becomes visible and the warning flags line up.",
      ],
      redFlags: ["warningFlags", "attackVector"],
      end: {
        outcome: "high_risk",
        hook: "You pushed for access before enough trust and ambiguity were built.",
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
