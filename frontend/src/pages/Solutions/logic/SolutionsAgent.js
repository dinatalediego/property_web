export class SolutionsAgent {
  constructor(view) {
    this.view = view;
  }

  getDescription() {
    return "Access dashboards and APIs tailored to business insights.";
  }

  viewSolutions() {
    console.log("Exploring solutions:", this.view);
  }
}
