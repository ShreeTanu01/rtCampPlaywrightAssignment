
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries :0,
  
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  
  reporter: 'html',
  projects : [
    { 
      name :'firefox execution',
      use: 
      {

      browserName : 'firefox',
      headless : true,
      screenshot : 'on',
      video : 'retain-on-failure',
      trace : 'retain-on-failure',//off,on
    
      }
    },

    { 
      name :'chrome execution',
      use: 
      {

      browserName : 'chromium',
      headless : true,
      screenshot : 'on',
      video : 'retain-on-failure',
      trace : 'retain-on-failure',
      }
    
    },

    { 
      name :'safari execution',
      use: 
      {

      browserName : 'webkit',
      headless : true,
      screenshot : 'on',
      video : 'retain-on-failure',
      trace : 'retain-on-failure',
      }
    
    }
    
  ]
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
};

module.exports = config;

