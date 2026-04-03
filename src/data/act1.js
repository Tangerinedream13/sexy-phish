// src/data/act1.js
// Act 1: hello.friend, “The Meet-Cute”
//
// IMPORTANT:
//  This file is DATA ONLY. No JSX. No Chakra components.
//  PlayAct1.jsx renders: scene.title, scene.location, scene.text (array),
//   scene.redFlags (array), scene.ui.showToast, and scene.choices (label/next).

const act1 = {
  meta: {
    actId: "act1",
    title: "hello.friend",
    subtitle: "The Meet-Cute",
    theme: "Vegas neon • dangerous chemistry • first-contact social engineering • warning flags in plain sight",
    setting: {
      city: "Las Vegas",
      venue: "CyberSteel Executive Summit",
      vibe: "City of sin: confidence, distraction, temptation, and opportunity",
    },
    version: 3,
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
    socialEngineering:
      "Manipulating people through trust, emotion, and social interaction to gain access or information.",
    humanVulnerability:
      "The tendency for emotion, distraction, ego, or attraction to weaken judgment.",
    attackVector:
      "The path used to begin or advance an attack.",
    warningFlags:
      "Small signs that something is off, even when the moment still feels exciting or harmless.",
    redFlags: {
      trust:
        "A sense of emotional safety that lowers skepticism and speeds disclosure.",
      urgency:
        "Creating time pressure so verification feels inconvenient or optional.",
      luring:
        "Using attraction, attention, or curiosity to pull someone closer to risk.",
      tailgating:
        "Following into a secure area without authorization.",
      baiting:
        "Using something tempting or flattering to override caution.",
      credentialHarvesting:
        "Trying to obtain usernames, passwords, badges, tokens, or access-enabling details.",
      oversharing:
        "Revealing sensitive information casually, emotionally, or too early.",
      confirmationBias:
        "Interpreting events the way you want them to be true rather than the way they are.",
      socialProof:
        "Assuming something is safe because other people seem comfortable with it.",
      socialInteraction:
        "Ordinary conversation and rapport that can be used as part of a social engineering attack.",
      confidentialInformation:
        "Sensitive details that should not be disclosed casually or without verification.",
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
    // ------------------------------------------------------------
    // S00 - Arrival / Setup
    // ------------------------------------------------------------
    s00_arrival: {
      id: "s00_arrival",
      title: "Neon Check-In",
      location: "Conference lobby • CyberSteel Executive Summit",
      text: [
        "Las Vegas is all velvet light, mirrored ceilings, and expensive mistakes.",
        "At the CyberSteel Executive Summit, badges shine like tiny passports into other people’s power.",
        "Gemma steps into the crowd looking effortless, but nothing about tonight is accidental.",
        "She is here for one person: Rex Vale — and for whatever trust he can be persuaded to mistake for fate.",
      ],
      redFlags: [],
      ui: {
        showToast: {
          title: "Act 1: hello.friend",
          body: "A meet-cute can also be an attack scenario. Watch how trust, charm, and social interaction become an attack vector.",
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
    // S01 - Check-in / Badge moment
    // ------------------------------------------------------------
    s01_checkin: {
      id: "s01_checkin",
      title: "Badge, Please",
      location: "Registration desk",
      text: [
        "The registration desk hands Gemma a badge and a bright professional smile.",
        "A staffer reminds everyone: “Badges are required for all sessions, including VIP floors.”",
        "Gemma’s gaze lingers on the word VIP just long enough to look curious instead of calculated.",
      ],
      redFlags: ["luring", "socialInteraction"],
      ui: {
        showToast: {
          title: "Red flag: social engineering setup",
          body: "A believable entrance often starts with ordinary conversation, timing, and a cover that feels natural.",
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
        "Gemma notes it immediately: visual compliance keeps a crowd moving, even when real verification never quite happens.",
      ],
      redFlags: ["socialProof", "tailgating"],
      ui: {
        showToast: {
          title: "Red flags: social proof & tailgating",
          body: "Crowds, status, and rhythm can make weak verification look normal.",
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
        "Marco glances up, just long enough to register that something is not quite right.",
        "“Ma’am,” he says. “Badge?”",
      ],
      redFlags: ["tailgating", "warningFlags"],
      choices: [
        {
          id: "c01_pretext",
          label: "Smile: “I’m with CyberSteel, my badge is acting up.”",
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
        "Marco’s gaze flicks to the line behind her, to the growing impatience, to the inconvenience of stopping everything for one person.",
        "Security versus speed. In real life, that contest does not always go to security.",
        "He waves her away. “Get it fixed. Don’t come back up without it.”",
      ],
      redFlags: ["urgency", "socialInteraction"],
      ui: {
        showToast: {
          title: "Red flag: urgency",
          body: "When people are rushed or overloaded, they are more likely to bend process than verify properly.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c01_roam",
          label: "Roam, find Rex first",
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
    // S01 - Spot Rex
    // ------------------------------------------------------------
    s01_spot_rex: {
      id: "s01_spot_rex",
      title: "Target Acquired",
      location: "Lobby bar • off the main floor",
      text: [
        "Rex Vale stands at the bar, sleeves rolled, relaxed for exactly twelve seconds.",
        "His conference badge hangs forward; the NFC chip catches the light like a wink.",
        "He looks up just as Gemma’s reflection appears behind him in the mirror, and for one charged second it feels less like surveillance than destiny.",
      ],
      redFlags: ["credentialHarvesting", "oversharing"],
      ui: {
        showToast: {
          title: "Human-factor moment",
          body: "Badges, phones, and laptops in public spaces are soft targets — especially when attraction and distraction enter the room.",
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
    // S02 - Floor / Gatekeeper path
    // ------------------------------------------------------------
    s02_floor_walk: {
      id: "s02_floor_walk",
      title: "Walk Like You Belong",
      location: "Expo hall",
      text: [
        "The expo hall is a sea of logos, polished smiles, and soft bragging.",
        "Gemma moves with purpose. Purpose reads as permission more often than it should.",
        "A booth demo flashes: “Cipher: Secure Intelligence at Scale.”",
        "There it is, the name out in the open, like the most dangerous things are always hidden better than that.",
      ],
      redFlags: ["socialProof", "confidentialInformation"],
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
        "Ivy runs conference ops like a chessboard, and Gemma can tell at a glance that she is not the easy mark in this room.",
        "Gemma asks casual questions: “Which rooms are VIP? Is Rex speaking?”",
        "Ivy smiles, pleasant and not fooled.",
        "“All speaker updates are in the official app,” she says. “And we don’t share VIP schedules.”",
      ],
      redFlags: ["warningFlags", "socialInteraction"],
      ui: {
        showToast: {
          title: "Defense: official channels",
          body: "Good gatekeepers redirect sensitive requests into verified systems instead of improvising.",
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
        "Gemma opens the official summit app.",
        "It lists public sessions but masks VIP events behind a login.",
        "A prompt appears: “Sign in with your conference badge ID.”",
      ],
      redFlags: ["credentialHarvesting"],
      choices: [
        {
          id: "c05_safe",
          label: "Back out, don’t enter badge info on a public network",
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
        "The app shows partial VIP info: room numbers, time blocks.",
        "One label catches her eye: “Cipher Private Preview.”",
      ],
      redFlags: ["confidentialInformation"],
      choices: [
        {
          id: "c06_rex",
          label: "Head to the lobby bar (Rex will be there)",
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
        "Gemma leans closer, voice soft like a secret passed between women who understand the room.",
        "Ivy’s smile stays put. Her eyes do not.",
        "“We have a strict policy,” Ivy says. “And people notice when policy bends.”",
        "Gemma clocks it immediately: Ivy is the kind of person who files reports without ever raising her voice.",
      ],
      redFlags: ["warningFlags", "trust"],
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
      redFlags: ["urgency", "warningFlags"],
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
    // S02 - Meet cute
    // ------------------------------------------------------------
    s02_meet_cute: {
      id: "s02_meet_cute",
      title: "Hello, Stranger",
      location: "Lobby bar",
      text: [
        "Gemma slides onto the stool beside him like she has done it in another life and fully intends to do it again in this one.",
        "“Let me guess,” she says, eyeing the badge. “You’re the reason everyone in this building is pretending they understand AI.”",
        "Rex laughs, short and surprised.",
        "“And you are?”",
      ],
      redFlags: ["socialInteraction"],
      choices: [
        {
          id: "c10_intro_soft",
          label: "Introduce yourself as a consultant (safe, plausible)",
          next: "s03_smalltalk",
          effects: { score: { heat: 1, security: 1 } },
        },
        {
          id: "c10_intro_bold",
          label: "Flirt hard: “Someone who likes powerful men.”",
          next: "s03_flirt_bold",
          effects: { score: { heat: 2, risk: 1 } },
        },
        {
          id: "c10_badge_banter",
          label: "Tease him about the badge and lanyard",
          next: "s02_badge_banter",
          effects: { score: { heat: 1, risk: 1 } },
        },
      ],
    },

    s02_badge_banter: {
      id: "s02_badge_banter",
      title: "Nice Lanyard",
      location: "Lobby bar",
      text: [
        "Gemma tilts her head toward his badge like she’s admiring a watch.",
        "“That lanyard practically screams important,” she says.",
        "Rex glances down and smiles. “You can tell a lot from conference accessories?”",
        "“Only whether someone is worth talking to,” Gemma says, and lets her eyes linger a beat longer than necessary.",
        "He laughs again, warmer this time. Vanity is such a cooperative technology.",
      ],
      redFlags: ["credentialHarvesting", "luring", "oversharing"],
      ui: {
        showToast: {
          title: "Red flag: charm as access",
          body: "Flattery, attraction, and curiosity can gather access-enabling details without ever sounding suspicious.",
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
          label: "Keep it playful and steer back to small talk",
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
        "People approach Rex in three categories: starstruck, transactional, and useful.",
        "No one checks whether his badge is visible. No one asks why his phone is unlocked on the counter for half a second.",
        "The lesson hums beneath the music: busy important people leak confidential information in fragments long before anyone asks the dangerous question directly.",
      ],
      redFlags: ["oversharing", "credentialHarvesting"],
      ui: {
        showToast: {
          title: "Observation is a tactic",
          body: "A great deal of social engineering starts by collecting tiny clues before first contact ever begins.",
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
          label: "Wait until he’s alone, then make your move",
          next: "s03_smalltalk",
          effects: { flags: { gotAloneTime: true }, score: { heat: 1 } },
        },
      ],
    },

    // ------------------------------------------------------------
    // S03 - Conversation branches
    // ------------------------------------------------------------
    s03_smalltalk: {
      id: "s03_smalltalk",
      title: "Velvet Small Talk",
      location: "Lobby bar",
      text: [
        "Gemma gives him something polished, clever, and just personal enough to feel intimate.",
        "Rex relaxes by degrees, drawn in by the kind of attention that feels rare when everyone else wants something from him.",
        "Their banter starts to hum with tension. Underneath it, Gemma is reading more than his words: ego, loneliness, impatience, appetite, and the first warning flags of human vulnerability.",
      ],
      redFlags: ["trust", "luring", "warningFlags"],
      choices: [
        {
          id: "c12_cipher",
          label: "Ask how intense it must be protecting something like Cipher",
          next: "s04_cipher_hook",
          effects: { score: { risk: 1, heat: 1 } },
        },
        {
          id: "c12_invite",
          label: "Let him talk and see if he offers something first",
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
        "“Someone who likes powerful men,” Gemma says, like she’s testing whether vanity can pick a lock.",
        "Rex smiles, but only with half his face.",
        "He has heard lines from people who want money, access, and selfies. The trick is making this feel like attraction instead of an obvious attack method.",
      ],
      redFlags: ["baiting", "warningFlags"],
      choices: [
        {
          id: "c13_soften",
          label: "Dial it back and pivot to smart conversation",
          next: "s03_smalltalk",
          effects: { score: { heat: 1, security: 1 } },
        },
        {
          id: "c13_double_down",
          label: "Double down: ask for a private demo of Cipher",
          next: "s04_private_demo_push",
          effects: { score: { risk: 2, heat: 1 } },
        },
      ],
    },

    // ------------------------------------------------------------
    // S04 - Consequences / outcomes
    // ------------------------------------------------------------
    s04_cipher_hook: {
      id: "s04_cipher_hook",
      title: "The Name Drop",
      location: "Lobby bar",
      text: [
        "The moment Gemma says Cipher, Rex’s expression changes by less than a heartbeat.",
        "Not fear. Ownership.",
        "He answers carefully, which is its own kind of answer.",
      ],
      redFlags: ["confidentialInformation"],
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
        "Gemma barely has to steer. The most effective social engineering often feels self-authored, powered by trust, chemistry, and confirmation bias rather than force.",
      ],
      redFlags: ["oversharing", "confirmationBias"],
      end: {
        outcome: "trust_gain",
        hook: "By being patient, you let the target do the work for you.",
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
        "Rex’s amusement cools into pattern recognition.",
        "Charm works best before intent becomes visible and the warning flags finally line up.",
      ],
      redFlags: ["urgency", "warningFlags"],
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