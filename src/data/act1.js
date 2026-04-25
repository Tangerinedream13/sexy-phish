// src/data/act1.js
// Act 1: hello.friend, "Meet Cute"

const act1 = {
  meta: {
    actId: "act1",
    title: "hello.friend",
    subtitle: "Meet Cute",
    theme:
      "Vegas neon • dangerous chemistry • first contact social engineering • warning flags in plain sight",
    setting: {
      city: "Las Vegas",
      venue: "CyberSteel Executive Summit",
      vibe: "City of sin, expensive temptation, and just enough chemistry to make caution slip",
    },
    version: 5,
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
      publicBio: "Independent security consultant",
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
      publicBio: "CyberSteel EA for Rex Vale",
      hiddenBio: "Gatekeeper who notices patterns",
      archetype: "gatekeeper",
      traits: ["efficient", "polite", "sharp"],
    },
    marco: {
      id: "marco",
      name: "Marco",
      publicBio: "Security staff",
      hiddenBio: "Overworked, relies on social compliance",
      archetype: "overloaded security",
      traits: ["stern", "distracted"],
    },
  },

  glossary: {
    socialEngineering: {
      term: "social engineering",
      definition:
        "Manipulating people through trust, deception, and social interaction in order to gain access or sensitive information.",
      sources: [2, 4],
    },
    luring: {
      term: "luring",
      definition:
        "Using attraction, attention, or curiosity to draw someone into a risky interaction.",
      sources: [1, 3],
    },
    socialInteraction: {
      term: "social interaction",
      definition:
        "Ordinary conversation and rapport-building that can lower defenses and make a risky exchange feel natural.",
      sources: [2, 4],
    },
    warningFlags: {
      term: "warning flags",
      definition:
        "Signs that a situation may be manipulative, deceptive, or unsafe.",
      sources: [1, 3],
    },

    redFlags: {
      socialEngineering: {
        term: "social engineering",
        definition:
          "Manipulating people through trust, deception, and social interaction in order to gain access or sensitive information.",
        sources: [2, 4],
      },
      luring: {
        term: "luring",
        definition:
          "Using attraction, attention, or curiosity to draw someone into a risky interaction.",
        sources: [1, 3],
      },
      socialInteraction: {
        term: "social interaction",
        definition:
          "Ordinary conversation and rapport-building that can lower defenses and make a risky exchange feel natural.",
        sources: [2, 4],
      },
      warningFlags: {
        term: "warning flags",
        definition:
          "Signs that a situation may be manipulative, deceptive, or unsafe.",
        sources: [1, 3],
      },
    },
  },

  state: {
    flags: {
      rexTargeted: false,
      rexEngaged: false,
      rexFlattered: false,
      rexOpenedUp: false,
      ivyNoticed: false,
    },
    score: {
      deception: 0,
      suspicion: 0,
      rapport: 0,
    },
  },

  startSceneId: "s00_arrival",

  scenes: {
    s00_arrival: {
      id: "s00_arrival",
      title: "Neon Check-In",
      location: "Conference Lobby • CyberSteel Executive Summit",
      text: [
        "Las Vegas glows with velvet light, mirrored ceilings, and expensive mistakes.",
        "Inside the CyberSteel Executive Summit, badges flash like tiny passports to power.",
        "Gemma moves through the crowd with effortless confidence, but nothing about tonight is accidental.",
        "She is here for Rex Vale, the CEO of CyberSteel, and for whatever information he can be persuaded to mistake for chemistry.",
      ],
      redFlags: ["socialEngineering", "warningFlags"],
      ui: {
        showToast: {
          title: "Act 1: hello.friend",
          body: "This meet cute is also the beginning of a social engineering attack. Watch how charm, attention, and ordinary conversation can lower someone’s guard.",
          kind: "neutral",
        },
      },
      choices: [
        {
          id: "c00_scan",
          label: "Scan the room for Rex",
          next: "s01_target_acquired",
          effects: {
            flags: { rexTargeted: true },
            score: { deception: 1 },
          },
        },
        {
          id: "c00_blend",
          label: "Blend in and observe the conference first",
          next: "s01_observe",
          effects: {
            score: { deception: 1, rapport: 1 },
          },
        },
      ],
    },

    s01_observe: {
      id: "s01_observe",
      title: "Reading the Room",
      location: "Expo Hall",
      text: [
        "Gemma walks the expo hall like she belongs there.",
        "Screens glow with product demos, investor language, and hints about CyberSteel’s newest AI platform: Cipher.",
        "She does not need to break into anything yet. A lot of social engineering begins with watching what people reveal when they think nobody is collecting it.",
      ],
      redFlags: ["socialEngineering", "socialInteraction"],
      ui: {
        showToast: {
          title: "Social engineering setup",
          body: "Attackers often collect small clues first so later questions feel natural instead of suspicious.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c01_find_rex",
          label: "Head toward the lobby bar and find Rex",
          next: "s01_target_acquired",
          effects: {
            flags: { rexTargeted: true },
            score: { deception: 1 },
          },
        },
        {
          id: "c01_ask_ivy",
          label:
            "Ask Ivy whether Rex is attending the private Cipher reception",
          next: "s02_ivy_gatekeeper",
          effects: {
            flags: { ivyNoticed: true },
            score: { suspicion: 1 },
          },
        },
      ],
    },

    s02_ivy_gatekeeper: {
      id: "s02_ivy_gatekeeper",
      title: "Gatekeeper Energy",
      location: "Conference Ops Desk",
      text: [
        "Ivy runs conference operations like a chessboard.",
        "Gemma asks about Rex with a smile that sounds casual but lands too specifically.",
        "Ivy smiles back, polite and sharp.",
        '"All speaker and VIP updates are handled through official channels," Ivy says.',
        "Gemma clocks it immediately. Ivy is the kind of person who notices patterns.",
      ],
      redFlags: ["warningFlags", "socialEngineering"],
      ui: {
        showToast: {
          title: "Warning flag",
          body: "A request can sound friendly and still be probing for information that should not be shared casually.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c02_backoff",
          label: "Back off and find Rex directly",
          next: "s01_target_acquired",
          effects: {
            score: { rapport: 1 },
          },
        },
        {
          id: "c02_charm",
          label: "Keep charming Ivy for just one hint",
          next: "s02_ivy_noticed",
          effects: {
            flags: { ivyNoticed: true },
            score: { suspicion: 2, deception: 1 },
          },
        },
      ],
    },

    s02_ivy_noticed: {
      id: "s02_ivy_noticed",
      title: "Too Many Questions",
      location: "Conference Ops Desk",
      text: [
        "Gemma softens her voice and makes the question sound harmless.",
        "Ivy’s expression stays pleasant, but her eyes stop smiling.",
        '"If Rex wants someone at a private event, Rex can confirm it himself," Ivy says.',
        "The door closes without slamming. Gemma has learned something useful: Ivy is a problem.",
      ],
      redFlags: ["warningFlags", "socialInteraction"],
      choices: [
        {
          id: "c03_leave_ivy",
          label: "Leave before this becomes memorable",
          next: "s01_target_acquired",
          effects: {
            score: { suspicion: 1 },
          },
        },
      ],
    },

    s01_target_acquired: {
      id: "s01_target_acquired",
      title: "Target Acquired",
      location: "Lobby Bar",
      text: [
        "Rex Vale stands at the bar with his sleeves rolled and his attention finally unguarded.",
        "His badge catches the light when he turns, and the name CyberSteel sits beneath his title like a dare.",
        "Gemma appears beside him in the mirror before she appears beside him in real life.",
        "For one dangerous second, the scene reads less like surveillance and more like fate.",
      ],
      redFlags: ["luring", "warningFlags"],
      ui: {
        showToast: {
          title: "Target acquired",
          body: "Gemma has found Rex. The goal of Act 1 is not to steal Cipher yet. The goal is to make the next step feel natural.",
          kind: "neutral",
        },
      },
      choices: [
        {
          id: "c04_overt",
          label: "Overt route: flirt boldly and make him feel chosen",
          next: "s03_overt_meetcute",
          effects: {
            flags: { rexEngaged: true, rexFlattered: true },
            score: { deception: 1, rapport: 2, suspicion: 1 },
          },
        },
        {
          id: "c04_covert",
          label: "Covert route: start with smart, casual conference small talk",
          next: "s03_covert_meetcute",
          effects: {
            flags: { rexEngaged: true },
            score: { deception: 1, rapport: 1 },
          },
        },
      ],
    },

    s03_overt_meetcute: {
      id: "s03_overt_meetcute",
      title: "Too Smooth",
      location: "Lobby Bar",
      text: [
        '"Let me guess," Gemma says, eyeing his badge. "You’re the reason everyone in this building is pretending they understand AI."',
        "Rex laughs, surprised enough to enjoy it.",
        "Gemma lets the moment linger a little too long.",
        "This is the obvious version of the attack: flattering, charged, and risky. It works because attention can feel like intimacy when someone is used to being wanted for access.",
      ],
      redFlags: ["luring", "warningFlags"],
      ui: {
        showToast: {
          title: "Luring",
          body: "This route is obvious and flirtatious. Attraction can be used to make risky conversation feel exciting instead of unsafe.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c05_overt_badge",
          label: "Tease him about how important his badge looks",
          next: "s04_badge_banter",
          effects: {
            score: { deception: 1, rapport: 1, suspicion: 1 },
          },
        },
        {
          id: "c05_overt_cipher",
          label: "Ask if Cipher is as impressive as everyone says",
          next: "s04_cipher_question",
          effects: {
            score: { deception: 1, suspicion: 2 },
          },
        },
      ],
    },

    s03_covert_meetcute: {
      id: "s03_covert_meetcute",
      title: "Polished Small Talk",
      location: "Lobby Bar",
      text: [
        "Gemma introduces herself as a security consultant and keeps the conversation professional enough to feel safe.",
        "She asks about the conference, the pressure of launching new technology, and how exhausting it must be to have everyone watching CyberSteel.",
        "Rex relaxes by degrees.",
        "This is the subtle version of the attack. Nothing sounds obviously dangerous, which is exactly why it works.",
      ],
      redFlags: ["socialInteraction", "socialEngineering"],
      ui: {
        showToast: {
          title: "Social interaction",
          body: "Not every risky exchange looks dramatic. Ordinary conversation can lower defenses when it feels validating and natural.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c06_covert_listen",
          label: "Let Rex talk and see what he reveals first",
          next: "s04_rex_opens_up",
          effects: {
            flags: { rexOpenedUp: true },
            score: { rapport: 2, deception: 1 },
          },
        },
        {
          id: "c06_covert_probe",
          label: "Casually ask how CyberSteel protects Cipher from leaks",
          next: "s04_cipher_question",
          effects: {
            score: { deception: 1, suspicion: 1 },
          },
        },
      ],
    },

    s04_badge_banter: {
      id: "s04_badge_banter",
      title: "Nice Badge",
      location: "Lobby Bar",
      text: [
        "Gemma tilts her head toward his badge like she is admiring a watch.",
        '"That credential practically screams important," she says.',
        "Rex glances down and smiles before he can stop himself.",
        "It is a tiny moment, almost nothing. But tiny moments are how bigger mistakes begin.",
      ],
      redFlags: ["luring", "warningFlags"],
      choices: [
        {
          id: "c07_continue",
          label: "Keep the chemistry going",
          next: "s05_act1_funnel",
          effects: {
            flags: { rexFlattered: true },
            score: { rapport: 1, deception: 1 },
          },
        },
      ],
    },

    s04_cipher_question: {
      id: "s04_cipher_question",
      title: "The Name Drop",
      location: "Lobby Bar",
      text: [
        "The moment Gemma says Cipher, Rex’s expression changes by less than a heartbeat.",
        "Not fear. Ownership.",
        "He answers carefully, which is its own kind of answer.",
        "Gemma smiles like she has learned nothing, even though she has learned plenty.",
      ],
      redFlags: ["socialEngineering", "warningFlags"],
      choices: [
        {
          id: "c08_continue",
          label: "Ease off before the question feels too pointed",
          next: "s05_act1_funnel",
          effects: {
            score: { deception: 1, rapport: 1 },
          },
        },
      ],
    },

    s04_rex_opens_up: {
      id: "s04_rex_opens_up",
      title: "Voluntary Disclosure",
      location: "Lobby Bar",
      text: [
        "Rex starts sharing without Gemma asking the dangerous questions directly.",
        "He talks about investors, leaks, pressure, and the exhaustion of protecting something everyone wants.",
        "Gemma listens like he is fascinating, not useful.",
        "That is what makes it work.",
      ],
      redFlags: ["socialInteraction", "socialEngineering"],
      choices: [
        {
          id: "c09_continue",
          label: "Let the connection deepen",
          next: "s05_act1_funnel",
          effects: {
            flags: { rexOpenedUp: true },
            score: { rapport: 2, deception: 1 },
          },
        },
      ],
    },

    s05_act1_funnel: {
      id: "s05_act1_funnel",
      title: "End of Act 1: The Door Opens",
      location: "Lobby Bar • Later That Night",
      text: [
        "By the end of the conversation, Gemma has not stolen anything yet.",
        "She has something more useful for the next phase: Rex’s attention.",
        "Whether the approach was bold or subtle, the result is the same. Rex now sees Gemma as interesting, attractive, and safe enough to continue trusting.",
        "Act 1 ends with the attack still disguised as chemistry.",
      ],
      redFlags: ["socialEngineering", "luring", "warningFlags"],
      end: {
        outcome: "continue_to_act2",
        hook: "Target acquired. Gemma has created enough trust and curiosity to move from first contact into the situationship.",
      },
      choices: [
        {
          id: "c10_act2",
          label: "Continue to Act 2: trust_me.exe",
          next: null,
        },
      ],
    },
  },
};

export default act1;
