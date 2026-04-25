// src/data/act3.js
// Act 3: this_feels_real.txt, "Damage Control"

import morningAfter from "../assets/morning_after.png";
import somethingIsWrong from "../assets/something_is_wrong.png";
import callTheSoc from "../assets/call_the_soc.png";
import reconstructTheNight from "../assets/reconstruct_the_night.png";
import containmentMode from "../assets/containment_mode.png";
import logsAndEvidence from "../assets/what_the_logs_remember.png";
import teamBriefing from "../assets/the_whole_team_knows.png";
import recoveryPlan from "../assets/recovery_plan.png";
import finalReport from "../assets/final_report.png";

const act3 = {
  meta: {
    actId: "act3",
    title: "this_feels_real.txt",
    subtitle: "Damage Control",
    theme:
      "breach discovery • incident response • SOC containment • accountability after social engineering",
    setting: {
      city: "Las Vegas",
      venue: "CyberSteel Executive Summit",
      vibe: "Morning-after panic, executive pressure, and a security team racing to contain the damage",
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
    rex: {
      id: "rex",
      name: "Rex Vale",
      publicBio: "Billionaire tech executive, CEO of CyberSteel",
      hiddenBio:
        "Protective of Cipher, now forced to confront how trust became a security failure",
      archetype: "compromised executive",
      traits: ["confident", "guarded", "accountable"],
    },
    socTeam: {
      id: "socTeam",
      name: "CyberSteel SOC Team",
      publicBio: "Security operations team responsible for incident response",
      hiddenBio:
        "The team responsible for containment, investigation, recovery, and reporting",
      archetype: "incident response team",
      traits: ["focused", "technical", "urgent"],
    },
    cybersteelTeam: {
      id: "cybersteelTeam",
      name: "CyberSteel Team",
      publicBio:
        "CyberSteel leadership, legal, engineering, and security staff",
      hiddenBio:
        "Cross-functional team managing damage control after the Cipher breach",
      archetype: "crisis response team",
      traits: ["pressured", "coordinated", "accountable"],
    },
  },

  glossary: {
    attackVector: {
      term: "attack vector",
      definition: "The path or method used to begin or advance an attack.",
      sources: [4],
    },
    humanFactors: {
      term: "human factors",
      definition:
        "The human behaviors and judgments that attackers exploit instead of relying only on technical flaws.",
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
      attackVector: {
        term: "attack vector",
        definition: "The path or method used to begin or advance an attack.",
        sources: [4],
      },
      humanFactors: {
        term: "human factors",
        definition:
          "The human behaviors and judgments that attackers exploit instead of relying only on technical flaws.",
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
      breachReported: false,
      accessRevoked: false,
      logsReviewed: false,
      teamBriefed: false,
      evidencePreserved: false,
      cipherContained: false,
    },
    score: {
      containment: 0,
      investigation: 0,
      accountability: 0,
    },
  },

  startSceneId: "s00_morning_after",

  scenes: {
    s00_morning_after: {
      id: "s00_morning_after",
      title: "Morning After",
      location: "Hotel suite • sunrise",
      image: morningAfter,
      text: [
        "Rex wakes to a room that looks almost normal.",
        "His jacket is still folded over the chair. His laptop is still on the desk. The city is still glowing through the glass.",
        "But Gemma is gone.",
        "Then Rex sees the notification: an unusual access alert tied to Cipher.",
        "The story is no longer about chemistry. It is about damage control.",
      ],
      redFlags: ["humanFactors", "deception"],
      ui: {
        showToast: {
          title: "Act 3: this_feels_real.txt",
          body: "The perspective shifts to Rex. Cipher has been stolen, and CyberSteel has to respond quickly, honestly, and carefully.",
          kind: "neutral",
        },
      },
      choices: [
        {
          id: "c00_report",
          label: "Report the alert to the CyberSteel security team immediately",
          next: "s01_report_breach",
          effects: {
            flags: { breachReported: true },
            score: { containment: 2, accountability: 2 },
          },
        },
        {
          id: "c00_check_first",
          label: "Check the laptop first and try to understand what happened",
          next: "s01_check_laptop",
          effects: {
            score: { investigation: 1, accountability: 1 },
          },
        },
      ],
    },

    s01_check_laptop: {
      id: "s01_check_laptop",
      title: "Something Is Wrong",
      location: "Hotel suite",
      image: somethingIsWrong,
      text: [
        "Rex opens the laptop and sees what he hoped not to see.",
        "Recent access. Opened files. A session that does not match his memory of the night.",
        "The timeline starts arranging itself in a way he does not like.",
        "Gemma was not just charming. She was collecting access.",
      ],
      redFlags: ["attackVector", "deception"],
      ui: {
        showToast: {
          title: "Attack vector",
          body: "The attack vector was not only technical. The breach began through social contact, trust, and access opportunities.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c01_report_now",
          label: "Report the breach before touching anything else",
          next: "s01_report_breach",
          effects: {
            flags: { breachReported: true },
            score: { containment: 2, accountability: 2 },
          },
        },
        {
          id: "c01_retrace",
          label: "Write down what he remembers before calling the team",
          next: "s02_reconstruct_timeline",
          effects: {
            score: { investigation: 2, accountability: 1 },
          },
        },
      ],
    },

    s01_report_breach: {
      id: "s01_report_breach",
      title: "Call the SOC",
      location: "CyberSteel security operations center",
      image: callTheSoc,
      text: [
        "Rex contacts CyberSteel’s security team, and the response starts immediately.",
        "He explains the alert, the laptop access, the private Cipher materials, and Gemma’s sudden disappearance.",
        "Nobody wastes time making the situation sound better than it is.",
        "The SOC lead names the priority: contain first, investigate second, recover third.",
      ],
      redFlags: ["humanFactors", "attackVector"],
      ui: {
        showToast: {
          title: "Damage control begins",
          body: "Fast reporting helps the team contain the incident before more systems, credentials, or files are exposed.",
          kind: "success",
        },
      },
      choices: [
        {
          id: "c02_contain",
          label:
            "Start containment: revoke access and isolate affected systems",
          next: "s03_containment",
          effects: {
            flags: { accessRevoked: true, cipherContained: true },
            score: { containment: 3 },
          },
        },
        {
          id: "c02_timeline",
          label:
            "Start investigation: reconstruct the timeline with the SOC team",
          next: "s02_reconstruct_timeline",
          effects: {
            flags: { logsReviewed: true },
            score: { investigation: 2 },
          },
        },
      ],
    },

    s02_reconstruct_timeline: {
      id: "s02_reconstruct_timeline",
      title: "Reconstruct the Night",
      location: "CyberSteel incident response bridge",
      image: reconstructTheNight,
      text: [
        "The CyberSteel team builds the timeline minute by minute.",
        "Lobby bar. Private lounge. Hotel corridor. Laptop access. Cipher alert.",
        "What felt like romance now reads like a sequence of decisions, distractions, and exploited human factors.",
        "Rex has to say the quiet part out loud: Gemma used trust to get close enough to steal from them.",
      ],
      redFlags: ["humanFactors", "manipulation"],
      choices: [
        {
          id: "c03_logs",
          label: "Have the SOC team review access logs and file activity",
          next: "s04_logs_and_evidence",
          effects: {
            flags: { logsReviewed: true, evidencePreserved: true },
            score: { investigation: 3 },
          },
        },
        {
          id: "c03_contain",
          label: "Move directly into containment before the breach spreads",
          next: "s03_containment",
          effects: {
            flags: { accessRevoked: true, cipherContained: true },
            score: { containment: 3 },
          },
        },
      ],
    },

    s03_containment: {
      id: "s03_containment",
      title: "Containment Mode",
      location: "CyberSteel security operations center",
      image: containmentMode,
      text: [
        "The SOC team moves fast.",
        "They sign Rex out of every device, reset his passwords, lock down the Cipher files, and isolate the systems connected to the alert.",
        "The CyberSteel team temporarily limits access to sensitive systems while security checks for further exposure.",
        "The goal is simple: stop the damage from spreading and preserve what the team needs to investigate.",
      ],
      redFlags: ["attackVector", "deception"],
      ui: {
        showToast: {
          title: "Good containment choice",
          body: "Containment limits additional damage by cutting off access paths before the attacker can use them again.",
          kind: "success",
        },
      },
      choices: [
        {
          id: "c04_logs",
          label: "Review access logs to learn what was touched",
          next: "s04_logs_and_evidence",
          effects: {
            flags: { logsReviewed: true, evidencePreserved: true },
            score: { investigation: 2 },
          },
        },
        {
          id: "c04_team",
          label: "Brief CyberSteel leadership, legal, and engineering",
          next: "s05_team_briefing",
          effects: {
            flags: { teamBriefed: true },
            score: { accountability: 2 },
          },
        },
      ],
    },

    s04_logs_and_evidence: {
      id: "s04_logs_and_evidence",
      title: "What the Logs Remember",
      location: "CyberSteel SOC dashboard",
      image: logsAndEvidence,
      text: [
        "The logs are less emotional than Rex is.",
        "They show access times, file movement, unusual activity, and the path the breach appears to have taken.",
        "The evidence points to a blended attack: deception created the opportunity, human factors lowered resistance, and technical access finished the job.",
        "The team preserves evidence instead of guessing. The timeline matters now.",
      ],
      redFlags: ["attackVector", "humanFactors", "deception"],
      choices: [
        {
          id: "c05_scope",
          label: "Determine what Cipher information was copied",
          next: "s05_team_briefing",
          effects: {
            flags: { logsReviewed: true },
            score: { investigation: 2, accountability: 1 },
          },
        },
        {
          id: "c05_hunt",
          label:
            "Search for signs of additional access across CyberSteel systems",
          next: "s05_team_briefing",
          effects: {
            flags: { logsReviewed: true },
            score: { containment: 1, investigation: 2 },
          },
        },
      ],
    },

    s05_team_briefing: {
      id: "s05_team_briefing",
      title: "The Whole Team Knows",
      location: "CyberSteel executive briefing room",
      image: teamBriefing,
      text: [
        "By midmorning, CyberSteel’s security, engineering, legal, and leadership teams are in one room.",
        "The update is uncomfortable but clear: Cipher information was accessed and copied.",
        "Rex does not frame himself as the victim of a mysterious technical failure.",
        "He explains the social engineering honestly because the team cannot fix what the company refuses to name.",
      ],
      redFlags: ["manipulation", "humanFactors"],
      ui: {
        showToast: {
          title: "Accountability",
          body: "Social engineering incidents require honesty. Blaming only the technology can hide the human factors that made the breach possible.",
          kind: "success",
        },
      },
      choices: [
        {
          id: "c06_recovery",
          label: "Move into recovery and strengthen access controls",
          next: "s06_recovery_plan",
          effects: {
            score: { containment: 1, accountability: 2 },
          },
        },
        {
          id: "c06_lessons",
          label: "Turn the incident into a company-wide security lesson",
          next: "s06_recovery_plan",
          effects: {
            score: { accountability: 3 },
          },
        },
      ],
    },

    s06_recovery_plan: {
      id: "s06_recovery_plan",
      title: "Recovery Plan",
      location: "CyberSteel SOC",
      image: recoveryPlan,
      text: [
        "CyberSteel tightens access controls around Cipher.",
        "The SOC team expands monitoring, reviews executive device policies, and adds stronger safeguards for private product previews.",
        "The company also updates training to show how manipulation, trust, and deception can create real technical consequences.",
        "Rex cannot undo the breach, but he can help make sure the lesson survives longer than the embarrassment.",
      ],
      redFlags: ["manipulation", "deception", "humanFactors"],
      choices: [
        {
          id: "c07_finish",
          label: "Finalize the incident response report",
          next: "s07_final_report",
          effects: {
            flags: { cipherContained: true, teamBriefed: true },
            score: { containment: 2, accountability: 2 },
          },
        },
        {
          id: "c07_reflect",
          label: "Have Rex document exactly how Gemma gained his trust",
          next: "s07_final_report",
          effects: {
            flags: { evidencePreserved: true },
            score: { investigation: 1, accountability: 3 },
          },
        },
      ],
    },

    s07_final_report: {
      id: "s07_final_report",
      title: "End of Act 3: Damage Control",
      location: "CyberSteel incident response report",
      image: finalReport,
      text: [
        "The final report does not read like a love story.",
        "It reads like an incident: initial contact, trust-building, access opportunity, data exposure, containment, investigation, and recovery.",
        "Gemma is gone, but CyberSteel can finally see how the breach happened.",
        "CyberSteel names the breach for what it was: a social engineering attack that used human factors as the opening.",
        "Damage control cannot erase what happened. It can stop the bleeding, preserve the evidence, and make the next attack harder to repeat.",
      ],
      redFlags: ["attackVector", "humanFactors", "manipulation", "deception"],
      end: {
        outcome: "damage_control_complete",
        hook: "Rex and the CyberSteel team contained the breach, investigated the attack vector, and turned the incident into a lesson about deception, manipulation, and human factors.",
      },
      choices: [
        {
          id: "c08_restart",
          label: "Restart Act 3",
          next: null,
        },
      ],
    },
  },
};

export default act3;