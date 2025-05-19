// cypress/support/utils/helpers.js

export const waitUntil = (conditionFn, maxRetries = 10, delay = 1000) => {
  let retries = 0;
  const poll = (resolve) => {
    if (conditionFn()) resolve();
    else if (retries++ < maxRetries) setTimeout(poll, delay, resolve);
    else throw new Error('Condition not met within timeout');
  };
  return new Promise(poll);
};
