# Oleksandr Chaikovskyi

**Staff Engineer ∙ Software Architect ∙ Distributed & Cross-Platform Systems ∙ Security & Privacy**

[me@chaikovskyi.dev](mailto:me@chaikovskyi.dev) · [linkedin](https://www.linkedin.com/in/oleksandr-chaikovskyi/) · [github](https://github.com/alexprogrammr/)

---

## Summary

I'm a software engineer with 10 years of experience designing and shipping high-scale distributed systems, cross-platform native libraries, and privacy/security products used by millions. Proven track record of taking complex technical problems from zero to production - from C++ cryptographic engine running on 6 platforms to Go-based Call and Email Protection systems processing millions of events daily. Personally designed infrastructure that drove 50K+ new subscriptions and saved $500K+/year in feature costs. Combines deep hands-on engineering (Go, TypeScript, Swift, C++, Python) with architectural leadership, team scaling, and AI-augmented development workflows.

I'm also an amateur endurance athlete. Finisher of 10+ half-marathons, 2 marathons and Ironman 70.3 - on my way to ultra running and full Ironman distance.

---

## Experience

### Aura
*Jun 2020 - Present*

#### Software Architect
*Jan 2023 - Present*

- Designed and built the **Call Protection** system from scratch in Go processing **2M+ calls/month**, reducing spam calls for users by **82%** and directly driving **50K+ new subscriptions** via launch featured by Robert Downey Jr.
- Designed and built the **Email Protection** system handling **1M+ emails/day** in Gmail, Outlook, Yahoo inboxes - providing real-time scanning and threat filtering at scale
- Architected a **distributed auto-scaled workers system** managing **10K+ concurrent persistent IMAP connections** with proven scaling path to hundreds of thousands - solving sharding, load balancing, reconnection logic, and NAT gateway port exhaustion across multiple AWS availability zones and regions
- Drove **features cost optimization** process at the application and infrastructure layers, saving **$500K+/year**
- Leveraged **AI-augmented development workflows** to accelerate prototyping, delivery, and architectural exploration across the team
- Introduced an **RFC process** that now governs **~10 fundamental engineering decisions per quarter**, aligning cross-functional teams around a shared technical vision

> **Tech:** Go · TypeScript · AWS (ECS, EC2, Lambda, DynamoDB, RDS, SNS, SQS, SES, S3) · Terraform · Prometheus · Grafana · Postgres · Databricks · Claude Code

#### Tech Lead
*Jun 2020 - Dec 2022 ∙ 2 yrs 7 mos*

- Successfully lead comprehensive **external technical audit** performed by major **OEM (Lenovo, Acer, Dell, HP)** to integrate privacy and security features in their platforms
- Scaled cross-functional engineering team from **2 to 8 engineers**, owning hiring, onboarding, mentoring, and personal development planning
- Designed and implemented **cross-platform multithreaded C++ library** containing the core cryptographic and sync logic of the Password Manager - shipped to production on **5 platforms** (macOS, Windows, iOS, Android, Web) where it remains in production today
- Redesigned the Password Manager's cryptographic internals to enable **secure item sharing** between users without compromising zero-knowledge architecture
- Built an **automated bindings generation pipeline** using libclang that produces platform-specific bindings for all 6 targets - replacing days of manual integration work with a single CI job that runs on every commit
- Compiled C++ core to **WebAssembly via Emscripten**, enabling the Password Manager to run natively in the browser with near-native performance
- Conducted technical R&D in privacy and security - including secure inter-process communication (Noise protocol framework) and cryptographic scheme simplification that reduced sign-in friction while maintaining security guarantees

> **Tech:** C++ · C# · JS/TS · Python · Emscripten · WebAssembly · SQLite · OpenSSL · libsodium · Clang · CMake

### Zeo Alliance
*Jun 2016 - May 2020 ∙ 4 yrs*

#### R&D Software Engineer
*Jul 2018 - May 2020 ∙ 1 yr 11 mos*

- Co-designed a **machine learning system for classifying web form input fields** - from data collection and labeling tooling through distributed model training and testing pipelines to production deployment - resulting in a **granted US patent**
- Implemented a **generic VPN framework** for iOS and macOS supporting pluggable backends (system-default, OpenVPN, strongSwan), enabling a single codebase for multiple VPN configurations
- Designed a **malware detection engine** combining Yara pattern-matching rules with Apple's Endpoint Security framework for real-time threat detection on macOS

> **Tech:** C · Objective-C · Swift · JS/TS · Node.js · MongoDB · Python · NumPy · Pandas · Keras · Scikit · Yara · OpenVPN · strongSwan

#### iOS & macOS Software Engineer
*Sep 2016 - Jun 2018 ∙ 1 yr 10 mos*

- Shipped features across **5 products** (MacKeeper, MegaBackup, Chargeberry, TrackMyMac, FigLeaf) spanning macOS and iOS platforms
- Diagnosed and fixed systemic stability issues on legacy macOS 10.6+, raising **crash-free rate to 99.8%**
- Built a **generic networking framework** for back-end API communication and a **complex IPC system** for multi-process desktop applications
- Established **CI/CD pipelines** for automated builds and releases

> **Tech:** Objective-C · Swift · AppKit · UIKit · Core Data · Realm · RxSwift · RxCocoa

#### Software Engineering Intern
*Jun 2016 - Aug 2016 ∙ 3 mos*

- Completed intensive 3-month internship with **10+ hours/day** of hands-on Objective-C and PHP training, covering end-to-end macOS application development with backend integration
- Designed and shipped **2 fully functional applications** as final projects: feature-rich drawing app with custom rendering, and genealogy tree builder with full backend API integration - both presented to the engineering team

> **Tech:** Objective-C · PHP · AppKit · REST

---

## Projects

**[The Pathways - Infinite RPG](https://apps.apple.com/us/app/the-pathways-infinite-rpg/id6478637145)**

AI-powered text-based adventure game with branching narratives across cyberpunk, fantasy, sci-fi worlds and beyond. Available in 16 languages on iPhone and iPad.

---

## Education

**National Technical University of Ukraine "Kyiv Polytechnic Institute"**

Computer Science and Engineering · 2014 - 2022

Master's Degree ∙ Unfinished PhD

---

## Patents

**Classifying Input Fields and Groups of Input Fields of a Webpage**

[US11100279B2](https://patents.google.com/patent/US11100279B2) · Aug 24, 2021

Method, system and machine-readable data carrier, which are intended to classify input fields and groups of input fields of a webpage.

---

## Certifications

**Deep Learning Specialization** · Coursera

[AJPQ3LGLGMJH](https://www.coursera.org/account/accomplishments/specialization/5ULSCW3VHVVJ) · Apr 2019

---

## Interests

**Endurance Sports**

- 10+ times **half-marathon** finisher ∙ PB **1:38:57**
- 2 times **marathon** finisher ∙ PB **3:50:43**
- **Ironman 70.3** finisher ∙ PB **6:05:42**
