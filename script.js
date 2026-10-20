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
        action: () => {
          // Mark tour as completed in storage so it doesn't auto-start again
          localStorage.setItem("hasCompletedTour", "true");
          tour.complete();
        },
      },
    ],
  });

  // Also handle if the user clicks the 'X' (cancel) icon
  tour.on("cancel", () => {
    localStorage.setItem("hasCompletedTour", "true");
  });

  // 3. Attach Click Listener to Manual Tour Launch Button
  const startBtn = document.getElementById("start-tour-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      // Clear storage flag if they manually click to force the tour to run
      localStorage.removeItem("hasCompletedTour");
      tour.start();
    });
  }

  // 4. Auto-Start Tour on Page Load / Refresh (If not completed before)
  const hasCompletedTour = localStorage.getItem("hasCompletedTour");
  if (!hasCompletedTour) {
    // Optional: Add a short timeout (e.g., 500ms) to ensure DOM elements are fully painted before targeting
    setTimeout(() => {
      tour.start();
    }, 500);
  }
});
