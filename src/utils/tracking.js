export const trackYandexMetrika = (goal) => {
  if (window.ym) {
    window.ym(98108619, 'reachGoal', goal);
  }
};

export const trackMyTracker = (goal) => {
  if (window._tmr) {
    window._tmr.push({ id: '3536479', type: 'reachGoal', goal });
  }
};

export const handleTracking = (goal) => {
  trackYandexMetrika(goal);
  trackMyTracker(goal);
};
