export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description?: string;
}

export interface Language {
  name: string;
  level: string;
}

export const personalInfo = {
  name: "Abdelkhalek Bourkha",
  title: "IT Operations Specialist",
  email: "Abdelkhalek.bourkha@gmail.com",
  phone: "+212-639-69-47-63",
  location: "Tanger, Maroc",
  linkedin: "bourkha-abdelkhalek",
  profile: "IT professional with background in network management, system administration, and network security.",
};

export const experiences: Experience[] = [
  {
    title: "IT OPERATIONS",
    company: "Magna International",
    location: "TANGER, MAROC",
    period: "15/07/2024 - Present",
    responsibilities: [
      "Management and administration of devices via Microsoft Intune and Azure AD.",
      "Supervision of IT/OT local network: maintenance, incident resolution, and performance optimization.",
      "Administration of FortiGate firewalls: creation and management of rules, especially for the OT network.",
      "Creation, configuration, and management of virtual machines and servers via VMware vSphere."
    ]
  },
  {
    title: "IT OFFICER",
    company: "Indore Composite International",
    location: "TANGER, MAROC",
    period: "22/01/2024 - 05/07/2024",
    responsibilities: [
      "Sole IT Department Member: Comprehensive supervision of all IT responsibilities at the Morocco Plant.",
      "Participation in IT project planning and execution, including equipment upgrades and system installations.",
      "Technical support to end users by troubleshooting hardware and software issues.",
      "IT Documentation: Creation and updating of standard operating procedures and system configurations.",
      "Regular training sessions for end users on IT technologies and software.",
      "Participation in managing and maintaining the organization's network infrastructure."
    ]
  },
  {
    title: "TECHNICIEN IT",
    company: "MARTUR FOMPAK International",
    location: "TANGER, MAROC",
    period: "21/10/2022 - 17/01/2024",
    responsibilities: [
      "Managing interventions through ticketing tools.",
      "Managing security updates and Windows patches.",
      "Managing AD, DHCP, file servers, and print servers.",
      "Monitoring network traffic to ensure continuous operation within the network.",
      "Virtual Local Area Network (VLANs) management.",
      "Creating Python scripts to automate daily tasks.",
      "Collaboration with internal/external partners."
    ]
  },
  {
    title: "STAGIAIRE IT",
    company: "MARTUR FOMPAK International",
    location: "TANGER, MAROC",
    period: "21/09/2022 - 21/10/2022",
    responsibilities: [
      "Installation, configuration, testing, and troubleshooting of end-user workstation hardware and software, as well as network peripherals.",
      "Technical assistance to users.",
      "Monitoring system alerts and reports on servers.",
      "Managing security updates and Windows patches.",
      "User awareness of IT security and best practice rules."
    ]
  },
  {
    title: "STAGIAIRE IT",
    company: "Tribunal de premiére instance de Tiflet",
    location: "TIFLET, MAROC",
    period: "30/12/2019 - 31/01/2020",
    responsibilities: [
      "Connecting and installing hardware, peripherals, and devices.",
      "User account administration with Active Directory.",
      "Ensuring connections (printers, network...).",
      "Guiding and training users."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Master en Ingénierie Informatique, Sécurité et Décision",
    institution: "ENSA",
    location: "TANGER, MAROC",
    period: "2023-2025",
    description: "Établissement : Écoles Nationales des Sciences Appliquées"
  },
  {
    degree: "Technicien Spécialisé en Techniques des Réseaux Informatiques",
    institution: "OFPPT",
    location: "TIFLET, MAROC",
    period: "2020-2022",
    description: "Établissement : Institut Spécialisé de Technologie Appliquée NTIC | Grade : Major de promotion"
  },
  {
    degree: "Technicien en Maintenance et Support Informatique et Réseaux",
    institution: "OFPPT",
    location: "TIFLET, MAROC",
    period: "2018-2020",
    description: "Établissement : Institut Spécialisé de Technologie Appliquée NTIC | Grade : Major de promotion"
  },
  {
    degree: "Baccalauréat",
    institution: "Lycée Abd Elkrim El Khattabi",
    location: "TIFLET, MAROC",
    period: "2016-2017",
    description: "Option : Sciences physiques (PC) | Mention : A.Bien"
  }
];

export const skills: Skill[] = [
  {
    category: "Outils et technologie de travail",
    items: ["Radmin", "SAP", "Wireshark", "LAPS", "DUDE", "DHCP", "DNS", "VLANs", "FortiClient", "Tibbo Manager", "Zebra"]
  },
  {
    category: "Bureautique",
    items: ["Word", "Excel", "Powerpoint", "Outlook", "Office 365", "Access", "Azure Intune"]
  },
  {
    category: "Personnalité",
    items: ["Sérieux", "Autonome", "Appliqué", "Travail en équipe", "Positif", "Dynamique", "Créatif", "Ambitieux", "Bon manager", "Polyvalent"]
  },
  {
    category: "Administration des Réseaux Informatiques",
    items: ["Commutation (VLANs, VTP, STP, EtherChannel)", "Routage", "WLAN (WLC, AP)"]
  },
  {
    category: "Administration Système sous Microsoft Windows",
    items: ["Windows Client (7, 8, 10)", "Windows Server (2012,2016,2019)", "AD DC, DHCP, DNS, IIS", "WSUS, WDS, GPO, VPN, NIC Teaming, VSS, DFS, FSRM", "PowerShell"]
  },
  {
    category: "Administration Système sous Linux",
    items: ["Linux Server", "DHCP DNS", "Virtualisation", "ESXI, Hyper-v"]
  }
];

export const languages: Language[] = [
  { name: "Arab - Darija", level: "Natal" },
  { name: "Amazigh", level: "Natal" },
  { name: "Anglais", level: "Avancé" },
  { name: "Français", level: "Moyen" }
];

export const achievements: Achievement[] = [
  { title: "ALC B4: English Language", description: "American School" },
  { title: "CCNA RS: Scaling Networks" },
  { title: "CCNA RS: Routing and Switching Essentials" },
  { title: "IT Essentials" }
];