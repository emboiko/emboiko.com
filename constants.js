export const THEME = {
  light: {
    "color-bg": "#f4f6fa",        
    "color-surface": "#ffffff",
    "color-text": "#111318",
    "color-muted": "#6b7280",     
    "color-border": "#e5e7eb",
    "color-accent": "#2b6cb0",    
    "color-accent-muted": "#3b6ea8", 
    "color-code-bg": "#eef2f7",   
  },
  dark: {
    "color-bg": "#0e1116",        
    "color-surface": "#161c26",   
    "color-text": "#f3f4f6",
    "color-muted": "#9aa4b2",
    "color-border": "#2a3240",
    "color-accent": "#7ab3ff",
    "color-accent-muted": "#5f9de6", 
    "color-code-bg": "#1c2330",
  },
}

export const NAV_ITEMS = [
  { id: "intro", label: "Intro" },
  { id: "ballast", label: "Ballast" },
  { id: "other-projects", label: "Other Projects" },
  { id: "how-i-build-software", label: "How I Build Software" },
]

export const INTRO_PARAGRAPHS = [
  "I build software with a focus on correctness, clarity, and long-term maintainability.",
  "My work spans systems tooling, real-time applications, and financial platforms with an emphasis on understanding failure modes, operator workflows, and the tradeoffs that matter once a system is actually in use.",
]

export const BALLAST_PROJECT = {
  description: "A reference implementation of a modern e-commerce platform with transactions, financing, subscriptions, and admin-first design.",
  title: "Ballast",
  mainDescriptions: [
    "Ballast is a reference implementation of a modern e-commerce and payments platform, designed to reflect the minimum level of rigor required to take online transactions seriously in 2026. It is built as a monorepo comprising a public storefront, a large admin panel, a backend API, and scheduled background jobs for financing and subscription charges.",
    "Rather than focusing on shipping logistics or consumer polish, Ballast prioritizes correctness, auditability, and operator usability- handling standard purchases, financing workflows, subscriptions, refunds, and authentication flows with explicit attention to real-world failure modes. The admin application is intentionally larger and more feature-rich than the customer-facing app, emphasizing clear actions, fast workflows, and system visibility.",
    "This project demonstrates end-to-end ownership of financial systems, thoughtful abstraction around payment processors, disciplined handling of money, and a strong bias toward operational clarity over surface-level features.",
    "Admin workflows are treated as a first-class product, designed around low click counts, clear state visibility, consistent views, and actionable dashboards.",
  ],
  personalNote: "Transactions beyond 'Buy Now' - designed with retries, idempotency, and auditability in mind.",
  githubUrls: [
    { url: "https://github.com/emboiko/ballast", label: null },
  ],
  liveUrls: [
    { url: "https://ballast.systems", label: null },
    { url: "https://admin.ballast.systems", label: null },
    { url: "https://api.ballast.systems", label: null },
  ],
}

export const OTHER_PROJECTS = [
  {
    title: "Socket_Singleton",
    description: "A lightweight Python library for reliably enforcing single-instance applications without lockfiles or OS-specific primitives.",
    mainDescriptions: [
      "Socket_Singleton is a small, dependency-free Python library that enforces single-instance execution of an application using a cross-platform socket-binding approach. Useful in desktop apps, Python CLIs, or any tool that needs process exclusivity.",
      "Unlike lockfile or OS-specific mutex solutions, it provides a clean, predictable mechanism that works consistently across platforms and supports forwarding arguments from subsequent launch attempts back to the primary process.",
      "This module sees steady, organic usage on PyPI and is used in real applications. The project overall reflects my preference for simple, explicit solutions to recurring systems problems- aligned with Python's philosophy that there should be one clear, obvious way to do something."
    ],
    personalNote: "I treat package download numbers cautiously- there's a lot of automated traffic on registries like PyPI, but what mattered to me was designing a solution I'd be comfortable maintaining and reusing myself. The fact that it's been picked up organically by other developers was a good signal that the API and approach resonated.",
    githubUrls: [
      { url: "https://github.com/emboiko/socket_singleton", label: null },
    ],
    installCommands: ["pip install socket_singleton"]
  },
  {
    title: "winDozer",
    description: "A keyboard-driven Windows utility for precise, global window management using low-level Win32 and DWM APIs",
    mainDescriptions: [
      "winDozer is a Windows utility that enables precise, keyboard-driven window management using Win32 and Desktop Window Manager (DWM) APIs. Unlike traditional tiling window managers or mouse-driven snapping, winDozer is designed to operate from anywhere, regardless of which window is focused via low-level keyboard hooks.",
      "The tool allows users to reposition, resize, and restore windows across large multi-monitor setups with pixel-level accuracy, including saving and restoring full window layouts via snapshot commands. Although implemented as a console application, it intentionally does not accept input through its console window- instead, it acts as a background command interpreter responding to global key sequences.",
      "This project demonstrates deep familiarity with Windows internals, event handling, and human-centric tooling design - prioritizing speed, precision, and workflow ergonomics over conventional UI patterns.",
    ],
    personalNote: "Once someone operates beyond simple dual-monitor setups, mainstream window management tools stop scaling. Mouse-driven snapping, drag-based resizing, and even most tiling managers become slow and imprecise when dealing with many displays and non-uniform layouts.",
    githubUrls: [
      { url: "https://github.com/emboiko/windozer", label: null }
    ]
  },
  {
    title: "Alex Jones Ipsum",
    description: "A satirical lorem-ipsum generator used as a vehicle for cross-language library and FFI design.",
    mainDescriptions: [
      "Alex Jones Ipsum is a cross-language text generation library built around a shared C core, with native bindings for both Python and Node.js. While the generated content is intentionally satirical, the project's purpose is technical: to demonstrate how to design, package, and distribute a reusable core library across multiple ecosystems without duplicating logic.",
      "Rather than implementing separate generators per language, the project centralizes tokenization, generation logic, and state handling in C, exposing clean, idiomatic APIs to higher-level runtimes. A lightweight web application demonstrates the library in practice, while the core package is published independently for programmatic use.",
      "This project showcases systems thinking, FFI design, build tooling, and disciplined separation between core logic and presentation using a bit of humor as a delivery mechanism, not a substitute for engineering rigor.",
    ],
    personalNote: "One core, many interfaces - and refusing to copy-paste logic.",
    githubUrls: [
      { url: "https://github.com/emboiko/alex_jonesum", label: "Core/Bindings" },
      { url: "https://github.com/emboiko/alex_jonesum_app", label: "Web App" }
    ],
    installCommands: [
      "pip install alex_jonesum",
      "npm install alex-jonesum"
    ],
    liveUrls: [
      { url: "https://jonesum.wtf/", label: null }
    ]
  },
  {
    title: "Fridge-Magnets",
    description: "A real-time, multiplayer web app that synchronizes a shared canvas using Socket.IO and a server-authoritative model.",
    mainDescriptions: [
      "Fridge-Magnets is a real-time, multiplayer web application that allows anonymous users to collaboratively manipulate draggable “magnet” letters on a shared canvas. While the interface presents as a playful toy, the underlying system is a fully networked, state-synchronized application built with Socket.IO, a custom canvas renderer, and a non-trivial server-side authority model.",
      "The application manages concurrent user interactions, live cursor and object updates, persistence of shared state, and an administrative control panel for moderation and system oversight. The project intentionally explores the tension between chaotic user behavior and deterministic system design- requiring careful handling of synchronization, performance, and abuse prevention.",
      "This project demonstrates real-time systems thinking, client/server state coordination, and the ability to design robust infrastructure beneath intentionally simple UX.",
    ],
    githubUrls: [
      { url: "https://github.com/emboiko/fridge-magnets", label: null }
    ],
    personalNote: "Building serious infrastructure to support unserious behavior.",
    liveUrls: [
      { url: "https://fridgemagnets.fun", label: null },
      { url: "https://🧲💩.ws", label: null }
    ]
  },
  {
    title: "Raycasting (C & JS)",
    description: "A classic raycasting implementation in C and JavaScript, built as a deliberate study of rendering fundamentals.",
    mainDescriptions: [
      "This project implements classic Doom-style raycasting algorithms in both C (using SDL) and JavaScript (using p5.js) as a comparative exploration of low-level rendering fundamentals across vastly different runtimes.",
      "Rather than relying on modern engines or abstractions, the implementations focus on the core mechanics of raycasting - grid traversal, distance projection, collision detection, and screen-space rendering - demonstrating how the same underlying algorithmic concepts translate between a systems-level language and a browser-based environment.",
      "The project serves as a deliberate exercise in understanding rendering fundamentals, performance tradeoffs, and abstraction boundaries, rather than as a full game engine or graphics showcase.",
    ],
    personalNote: "Understanding the abstraction you normally stand on.",
    githubUrls: [
      { url: "https://github.com/emboiko/c_raycast", label: "C" },
      { url: "https://github.com/emboiko/js_raycast", label: "JS" }
    ],
    liveUrls: [
      { url: "https://js-raycast-b6a9a6ff6db1.herokuapp.com/", label: "JS/Heroku" }
    ]
  },
  {
    title: "Hotdog Hallway",
    description: "A production guild website with role-based access, application workflows, and real-world usage.",
    mainDescriptions: [
      "Hotdog Hallway is a production web application built to establish an online presence for a World of Warcraft guild, streamline recruitment, and provide lightweight internal tooling for guild leadership. While the feature set is intentionally simple, the site supports real traffic, role-based access control, anonymous-to-authenticated user flows, and basic Discord integrations for applicant communication.",
      "The application prioritizes clarity, usability, and presentation over feature density- serving as a public-facing hub that members actively link in-game and across community platforms. Internally, it distinguishes between casual members, raiders, and leadership roles, exposing additional views and moderation tools where appropriate.",
      "This project demonstrates pragmatic full-stack development, role-based access patterns, and the ability to ship a focused, purpose-built application that solves a real organizational need without unnecessary complexity.",
    ],
    githubUrls: [
      { url: "https://github.com/emboiko/hotdog-hallway-client", label: "Client" },
      { url: "https://github.com/emboiko/hotdog-hallway-server", label: "Server" }
    ],
    personalNote: "\"We got the exact presence we asked for.\"",
    liveUrls: [
      { url: "https://hotdog-hallway.com", label: null }
    ]
  },
]

export const HOW_I_BUILD_SOFTWARE = [
  "I care more about correctness than cleverness, especially when money or user trust is involved.",
  "I design systems that are easy to reason about by humans, not just compilers.",
  "Operator and administrator experiences matter as much as user-facing flows.",
  "I prefer explicit abstractions that earn their place, and I am comfortable leaving things simple.",
  "I've learned that knowing when to stop is just as important as knowing how to continue."
]
