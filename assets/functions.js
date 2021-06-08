// Store common functions here

/**
 * @name debounce
 *
 * Applies the debounce property on the function
 * To be applied if the function being used many times in a second
 * The passed function is called after waiting for the passed amount of time
 * If the passed function is called many times, it won't run until the calls stop coming
 *
 * @param {function} functionToApplyOn - function that is called
 * @param {number} waitTime - time in ms after which the function can be called again @default 100
 * @returns function with the debounce ability
 */
function debounce(functionToApplyOn, waitTime = 100) {
  let timeOut
  return function (...args) {
    const context = this
    clearTimeout(timeOut)
    timeOut = setTimeout(() => functionToApplyOn.apply(context, args), waitTime)
  }
}

/**
 * @name simpleThrottle
 *
 * Applies the throttle property on the function
 * To be applied if the function being used many times in a second
 * The function will be called at regular intervals ignoring all the calls in between
 * Disadvantage: Last call of function may get lost
 * Hence, only use this function if the limitTime is very less
 *
 * @param {function} functionToApplyOn - function that is called
 * @param {number} limitTime - time in ms after which the function can be called again @default 100
 * @returns function with the throttle ability
 */
function simpleThrottle(functionToApplyOn, limitTime = 100) {
  let inThrottle
  return function (...args) {
    const context = this
    if (!inThrottle) {
      functionToApplyOn.apply(context, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limitTime)
    }
  }
}

/**
 * @name throttle
 *
 * Applies the throttle property on the function
 * To be applied if the function being used many times in a second
 * The function will be called at regular intervals ignoring all the calls in between : Similar to the simpleThrottle function
 * Improvement: Last call of function gets executed
 *
 * @param {function} functionToApplyOn - function that is called
 * @param {number} limitTime - time in ms after which the function can be called again @default 1000
 * @returns function with the throttle ability
 */
function throttle(functionToApplyOn, limitTime = 1000) {
  let lastRunAt
  let latestFunctionCall
  return function (...args) {
    const context = this
    if (!lastRunAt) {
      functionToApplyOn.apply(context, args)
      lastRunAt = Date.now()
    } else {
      clearTimeout(latestFunctionCall)
      latestFunctionCall = setTimeout(function () {
        if (Date.now() - lastRunAt >= limitTime) {
          functionToApplyOn.apply(context, args)
          lastRunAt = Date.now()
        }
      }, limitTime - (Date.now() - lastRunAt))
    }
  }
}

export const performance = {
  debounce,
  simpleThrottle,
  throttle,
}
