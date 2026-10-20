document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Shepherd Tour Instance
  const tour = new Shepherd.Tour({
    useModalOverlay: true, // Dim the background during tour
    defaultStepOptions: {
      classes: "custom-shepherd-theme",
      scrollTo: { behavior: "smooth", block: "center" },
      cancelIcon: {
        enabled: true,
      },
    },
  });

  // 2. Define Tour Steps

  // Step 1: Welcome & Sidebar
  tour.addStep({
    id: "step-sidebar",
    text: "Welcome! Use this navigation bar to access different sections of the application.",
    attachTo: {
      element: "#sidebar",
      on: "right",
    },
    buttons: [
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  // Step 2: Dashboard Section
  tour.addStep({
    id: "step-dashboard",
    text: "This is your main dashboard where overall project status is displayed.",
    attachTo: {
      element: "#section1",
      on: "bottom",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
        classes: "shepherd-button-secondary",
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  // Step 3: Analytics Button Action
  tour.addStep({
    id: "step-analytics-btn",
    text: "Click here to generate detailed graphical analytical reports.",
    attachTo: {
      element: "#btn-sec2",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
        classes: "shepherd-button-secondary",
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  // Step 4: Settings Section
  tour.addStep({
    id: "step-settings",
    text: "Adjust your user profile, notification rules, and preferences in Settings.",
    attachTo: {
      element: "#section3",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
        classes: "shepherd-button-secondary",
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  // Step 5: Footer / Completion
  tour.addStep({
    id: "step-footer",
    text: "You are all set! Check out the footer for licensing and help links.",
    attachTo: {
      element: "#footer",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
        classes: "shepherd-button-secondary",
      },
      {
        text: "Finish",
        action: tour.complete,
      },
    ],
  });

  // 3. Attach Click Listener to Tour Launch Button
  const startBtn = document.getElementById("start-tour-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      tour.start();
    });
  }
});
