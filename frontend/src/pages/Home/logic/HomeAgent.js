export class HomeAgent {
  constructor(name = "EconoAgents") {
    this.name = name;
  }

  getWelcomeMessage() {
    return `Welcome to ${this.name} — your gateway to economic intelligence.`;
  }

  navigateTo(section) {
    console.log(`Navigating to: ${section}`);
  }
}