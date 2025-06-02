let hasSubscribed = $state(false);

export const getHasSubscribed = () => hasSubscribed;

export const updateHasSubscribed = (value: boolean) => {
  if (value) {
    localStorage.setItem("hs", "true");
    hasSubscribed = value;
  } else {
    localStorage.removeItem("hs");
    hasSubscribed = value;
  }
};
