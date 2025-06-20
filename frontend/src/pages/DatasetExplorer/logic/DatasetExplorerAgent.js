export class DatasetExplorerAgent {
  constructor(dataset) {
    this.dataset = dataset
  }
  getDescription() {
    return this.dataset.description
  }
  startExploration() {
    window.open(this.dataset.download_url, '_blank')
  }
}
