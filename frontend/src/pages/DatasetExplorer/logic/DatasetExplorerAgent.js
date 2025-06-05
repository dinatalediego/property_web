export class DatasetExplorerAgent {
  constructor(config) {
    this.config = config;
  }

  getDescription() {
    return "Interactively explore economic datasets with filters and insights.";
  }

  startExploration() {
    console.log("Starting dataset exploration with config:", this.config);
  }
}