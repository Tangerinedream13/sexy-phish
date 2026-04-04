// src/data/act3.js
// Act 3: this_feels_real.txt, "Damage Control"
//
// IMPORTANT:
// This file is DATA ONLY. No JSX. No Chakra components.

const act3 = {
  meta: {
    actId: "act3",
    title: "this_feels_real.txt",
    subtitle: "Damage Control",
    theme: "breach fallout • urgency • containment • consequence",
    setting: {
      city: "Las Vegas",
      venue: "CyberSteel Executive Summit • backstage corridors, ops rooms, and the aftermath",
      vibe: "The chemistry is gone. The consequences are not.",
    },
    version: 3,
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
      hiddenBio: "Operative exploiting trust, attraction, and access for information",
      archetype: "charismatic social engineer",
      traits: ["calm", "convincing", "strategic"],
    },
    rex: {
      id: "rex",
      name: "Rex Vale",
      publicBio: "Billionaire tech executive, CEO of CyberSteel",
      hiddenBio: "Now caught between embarrassment, panic, and damage control",
      archetype: "compromised target",
      traits: ["shaken", "defensive", "image-conscious"],
    },
    ivy: {
      id: "ivy",
      name: "Ivy",
      publicBio: "CyberSteel EA / conference ops lead",
      hiddenBio: "The first person to recognize that something is wrong",
      archetype: "gatekeeper turned incident coordinator",
      traits: ["sharp", "controlled", "unimpressed"],
    },
    marco: {
      id: "marco",
      name: "Marco",
      publicBio: "Security staff (badge checks / VIP entrance)",
      hiddenBio: "Now dealing with the consequences of a culture that normalized exceptions",
      archetype: "overloaded security",
      traits: ["tired", "blunt"],
    },
  },

  glossary: {
    incidentResponse: {
      term: "incident response",
      definition:
        "The process of identifying, containing, investigating, and recovering from a security incident.",
      sources: [],
    },
    containment: {
      term: "containment",
      definition:
        "Immediate actions taken to prevent a compromise from getting worse.",
      sources: [],
    },
    breach: {
      term: "breach",
      definition: "A compromise of information, access, or security controls.",
      sources: [1, 4],
    },
    misinformation: {
      term: "misinformation",
      definition:
        "False or misleading information that distorts what is really happening.",
      sources: [1],
    },
    disinformation: {
      term: "disinformation",
      definition:
        "Information shaped or framed to manipulate what others believe about an incident.",
      sources: [1],
    },
    warningFlags: {
      term: "warning flags",
      definition:
        "Signs that a situation may be manipulative, deceptive, or unsafe.",
      sources: [1, 3],
    },
    trust: {
      term: "trust",
      definition:
        "A sense of emotional safety that lowers skepticism and makes disclosure easier.",
      sources: [1, 3, 4],
    },
    oversharing: {
      term: "oversharing",
      definition:
        "Revealing sensitive information too casually, too emotionally, or too early.",
      sources: [2, 3, 4],
    },
    urgency: {
      term: "urgency",
      definition:
        "Creating time pressure so a person acts before fully verifying the situation.",
      sources: [1],
    },
    confidentialInformation: {
      term: "confidential information",
      definition:
        "Sensitive details that should not be disclosed without proper need and verification.",
      sources: [4],
    },
    socialEngineering: {
      term: "social engineering",
      definition:
        "Manipulating people through trust, deception, and social interaction to gain access or sensitive information.",
      sources: [2, 4],
    },
    attackVector: {
      term: "attack vector",
      definition: "The path or method used to begin or advance an attack.",
      sources: [4],
    },
    humanFactors: {
      term: "human factors",
      definition:
        "The human behaviors and judgments that attackers exploit instead of technical flaws alone.",
      sources: [4],
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

    redFlags: {
      breach: {
        term: "breach",
        definition: "A compromise of information, access, or security controls.",
        sources: [1, 4],
      },
      misinformation: {
        term: "misinformation",
        definition:
          "False or misleading information that distorts what is really happening.",
        sources: [1],
      },
      disinformation: {
        term: "disinformation",
        definition:
          "Information shaped or framed to manipulate what others believe about an incident.",
        sources: [1],
      },
      warningFlags: {
        term: "warning flags",
        definition:
          "Signs that a situation may be manipulative, deceptive, or unsafe.",
        sources: [1, 3],
      },
      trust: {
        term: "trust",
        definition:
          "A sense of emotional safety that lowers skepticism and makes disclosure easier.",
        sources: [1, 3, 4],
      },
      oversharing: {
        term: "oversharing",
        definition:
          "Revealing sensitive information too casually, too emotionally, or too early.",
        sources: [2, 3, 4],
      },
      urgency: {
        term: "urgency",
        definition:
          "Creating time pressure so a person acts before fully verifying the situation.",
        sources: [1],
      },
      confidentialInformation: {
        term: "confidential information",
        definition:
          "Sensitive details that should not be disclosed without proper need and verification.",
        sources: [4],
      },
      socialEngineering: {
        term: "social engineering",
        definition:
          "Manipulating people through trust, deception, and social interaction to gain access or sensitive information.",
        sources: [2, 4],
      },
      attackVector: {
        term: "attack vector",
        definition: "The path or method used to begin or advance an attack.",
        sources: [4],
      },
      humanFactors: {
        term: "human factors",
        definition:
          "The human behaviors and judgments that attackers exploit instead of technical flaws alone.",
        sources: [4],
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
    },
  },

  state: {
    flags: {
      triedPrivateFix: false,
      evidenceLost: false,
      rexReportedHonestly: false,
      ivyInLoop: false,
      marcoInLoop: false,
      opticsPriority: false,
      delayedResponse: false,
    },
    score: { heat: 0, risk: 0, security: 0 },
  },

  startSceneId: "s00_something_off",

  scenes: {
    s00_something_off: {
      id: "s00_something_off",
      title: "Something Feels Off",
      location: "Backstage corridor",
      text: [
        "A skipped check. A strange prompt. A detail that should not have traveled this far.",
        "Nothing dramatic at first, just enough wrongness to make the room feel colder.",
        "Rex looks at his phone. Ivy looks at Rex. Every charged moment from the night before starts to rearrange itself into warning flags.",
      ],
      redFlags: ["warningFlags", "trust"],
      ui: {
        showToast: {
          title: "Act 3: this_feels_real.txt",
          body:
            "The breach is no longer hypothetical. Now the warning flags, pressure, and fallout all arrive at once.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c00_tellivy",
          label: "Tell Ivy immediately",
          next: "s01_escalate_fast",
          effects: {
            flags: { ivyInLoop: true, rexReportedHonestly: true },
            score: { security: 2 },
          },
        },
        {
          id: "c00_handleprivate",
          label: "Try to handle it quietly with Rex",
          next: "s01_private_fix",
          effects: { score: { risk: 2, heat: 1 } },
        },
        {
          id: "c00_optics",
          label: "Worry about optics first",
          next: "s02_optics_pressure",
          effects: {
            flags: { opticsPriority: true },
            score: { risk: 2, heat: 1 },
          },
        },
      ],
    },

    s01_private_fix: {
      id: "s01_private_fix",
      title: "Keep This Between Us",
      location: "Side hallway",
      text: [
        "Rex lowers his voice like privacy can still fix this.",
        "He says the line people always say when they are scared: \"Let's not make this bigger than it is.\"",
        "That sentence has probably made every breach bigger than it had to be.",
      ],
      redFlags: ["trust", "warningFlags", "deception"],
      ui: {
        showToast: {
          title: "Red flag: private incident handling",
          body:
            "Security events should go into official response channels, not side conversations shaped by fear, image, or attraction.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c01_pushreport",
          label: "Push him to report it properly",
          next: "s01_escalate_fast",
          effects: {
            flags: { ivyInLoop: true, rexReportedHonestly: true },
            score: { security: 2 },
          },
        },
        {
          id: "c01_cleanup",
          label: "Try to delete evidence and clean it up",
          next: "s02_evidence_loss",
          effects: {
            flags: { triedPrivateFix: true, evidenceLost: true },
            score: { risk: 3 },
          },
        },
      ],
    },

    s01_escalate_fast: {
      id: "s01_escalate_fast",
      title: "Say It Early, Say It Clearly",
      location: "Ops room threshold",
      text: [
        "Ivy does not waste time on denial, image management, or wishful thinking.",
        "She asks the right questions in the right order: what happened, what was shared, what changed, and who needs to know right now.",
        "Real incident response starts by treating social engineering as both a technical problem and a human one.",
      ],
      redFlags: [],
      ui: {
        showToast: {
          title: "Defense: fast escalation",
          body:
            "Early reporting helps teams preserve evidence, contain the breach, and understand how trust was exploited.",
          kind: "success",
        },
      },
      choices: [
        {
          id: "c02_contain",
          label: "Move straight into containment",
          next: "s02_containment",
          effects: {
            flags: { ivyInLoop: true, marcoInLoop: true },
            score: { security: 2 },
          },
        },
        {
          id: "c02_downplay",
          label: "Report it, but leave out the embarrassing parts",
          next: "s03_minimize_story",
          effects: { score: { risk: 2 } },
        },
      ],
    },

    s02_containment: {
      id: "s02_containment",
      title: "Containment in Real Time",
      location: "Ops room",
      text: [
        "Ivy moves fast without moving messy.",
        "Badges get checked. Sessions get locked. Logs get preserved. Marco gets pulled into the loop.",
        "Nobody likes the look of a real incident. Everybody likes the aftermath of ignoring one even less.",
      ],
      redFlags: [],
      choices: [
        {
          id: "c03_rexhonest",
          label: "Be fully honest about every exception and interaction",
          next: "s03_truth_hurts",
          effects: {
            flags: { rexReportedHonestly: true },
            score: { security: 2 },
          },
        },
        {
          id: "c03_rexminimize",
          label: "Minimize what happened to protect Rex's image",
          next: "s03_minimize_story",
          effects: { score: { risk: 2, heat: 1 } },
        },
      ],
    },

    s02_optics_pressure: {
      id: "s02_optics_pressure",
      title: "Optics vs. Reality",
      location: "Outside ops room",
      text: [
        "Rex is already thinking like a headline, not a responder.",
        "Ivy's face hardens by exactly one degree.",
        "A breach does not become less real because people work harder to keep it quiet.",
      ],
      redFlags: ["misinformation", "deception"],
      choices: [
        {
          id: "c04_escalate_anyway",
          label: "Escalate anyway",
          next: "s02_containment",
          effects: { score: { security: 2 } },
        },
        {
          id: "c04_wait",
          label: "Wait and see if it blows over",
          next: "s03_delay_costs",
          effects: {
            flags: { delayedResponse: true },
            score: { risk: 3 },
          },
        },
      ],
    },

    s02_evidence_loss: {
      id: "s02_evidence_loss",
      title: "Delete, Deny, Regret",
      location: "Rex's phone and inbox",
      text: [
        "Messages disappear. Logs do not.",
        "The instinct to hide embarrassment just destroyed useful evidence.",
        "Now the incident is harder to understand, harder to contain, and harder to explain.",
      ],
      redFlags: ["misinformation", "deception"],
      choices: [
        {
          id: "c05_confess",
          label: "Confess and escalate before more damage is done",
          next: "s02_containment",
          effects: { score: { security: 1 } },
        },
        {
          id: "c05_commit",
          label: "Double down and hope nobody notices",
          next: "s03_delay_costs",
          effects: {
            flags: { delayedResponse: true },
            score: { risk: 3, heat: 1 },
          },
        },
      ],
    },

    s03_truth_hurts: {
      id: "s03_truth_hurts",
      title: "The Honest Timeline",
      location: "Ops room • whiteboard and cold coffee",
      text: [
        "It is humiliating. It is also useful.",
        "The team maps the chain: after-hours access, private texting, oversharing, proximity, exceptions, and the moment trust became an attack vector.",
        "Every awkward detail becomes defensive intelligence.",
      ],
      redFlags: [],
      ui: {
        showToast: {
          title: "Defense: tell the whole story",
          body:
            "Accurate timelines help investigators understand how the breach happened and how trust was exploited.",
          kind: "success",
        },
      },
      choices: [
        {
          id: "c06_locklessons",
          label: "Capture lessons learned and notify the right people",
          next: "s04_good_end",
          effects: { score: { security: 3 } },
        },
      ],
    },

    s03_minimize_story: {
      id: "s03_minimize_story",
      title: "Edited for Reputation",
      location: "Ops room",
      text: [
        "The story gets cleaned up before the systems do.",
        "A vague timeline protects egos and weakens the response.",
        "The technical damage may be containable. The cultural damage is the part that lingers.",
      ],
      redFlags: ["misinformation", "disinformation"],
      choices: [
        {
          id: "c07_correct",
          label: "Correct the record and be honest",
          next: "s03_truth_hurts",
          effects: { score: { security: 2 } },
        },
        {
          id: "c07_keepspinning",
          label: "Keep spinning it",
          next: "s04_bad_end",
          effects: { score: { risk: 3 } },
        },
      ],
    },

    s03_delay_costs: {
      id: "s03_delay_costs",
      title: "Time Is a Threat Actor",
      location: "Summit floor • one hour later",
      text: [
        "Delay always feels passive. It never is.",
        "The longer a compromised situation sits unreported, the more room it has to spread, confuse, and calcify.",
        "By the time action starts, the story is already harder to trust and the breach is harder to contain.",
      ],
      redFlags: ["urgency", "warningFlags", "misinformation"],
      choices: [
        {
          id: "c08_escalate_late",
          label: "Escalate late",
          next: "s04_mixed_end",
          effects: { score: { security: 1, risk: 1 } },
        },
        {
          id: "c08_keepwaiting",
          label: "Keep waiting",
          next: "s04_bad_end",
          effects: { score: { risk: 3 } },
        },
      ],
    },

    s04_good_end: {
      id: "s04_good_end",
      title: "Damage Controlled",
      location: "Ops room • post-incident",
      text: [
        "It is not clean, but it is contained.",
        "Access is reviewed. Policies get sharper. Rex looks like someone who finally understands what \"just this once\" can cost.",
        "The breach became a lesson before it became a catastrophe.",
      ],
      redFlags: [],
      end: {
        outcome: "best_practice",
        hook:
          "Fast escalation, honest reporting, and real containment reduce long-term damage.",
      },
      choices: [
        {
          id: "c09_restart",
          label: "Restart Act 3",
          next: null,
        },
      ],
    },

    s04_mixed_end: {
      id: "s04_mixed_end",
      title: "Contained, But Late",
      location: "Ops room • post-incident",
      text: [
        "They got there eventually.",
        "Some damage was contained. Some evidence was blurred by delay. Some trust will not recover on the same timeline as the systems.",
        "Late reporting is better than never. It is still worse than immediate truth.",
      ],
      redFlags: [],
      end: {
        outcome: "mixed",
        hook:
          "Delays make incidents harder to contain, even when the right people eventually get involved.",
      },
      choices: [
        {
          id: "c10_restart",
          label: "Restart Act 3",
          next: null,
        },
      ],
    },

    s04_bad_end: {
      id: "s04_bad_end",
      title: "This Feels Real",
      location: "Conference floor • rumors, screens, and silence",
      text: [
        "The chemistry is gone now. All that is left is consequence.",
        "A preventable incident has become a public one, a technical one, and a human one.",
        "Somebody will write a timeline later. Everybody in it will wish they had made a different choice sooner.",
      ],
      redFlags: ["urgency", "disinformation", "deception"],
      end: {
        outcome: "worst_case",
        hook:
          "Delays, secrecy, and reputation management can turn a manageable incident into a broader failure.",
      },
      choices: [
        {
          id: "c11_restart",
          label: "Restart Act 3",
          next: null,
        },
      ],
    },
  },
};

export default act3;