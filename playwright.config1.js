
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
      trace : 'on',//off,on
    
      }
    },

    { 
      name :'chrome execution',
      use: 
      {

      browserName : 'chromium',
      headless : false,
      screenshot : 'on',
      video : 'retain-on-failure',
      trace : 'on',//off,on
      }
    
    },

    { 
      name :'safari execution',
      use: 
      {

      browserName : 'webkit',
      headless : false,
      screenshot : 'on',
      video : 'retain-on-failure',
      trace : 'on',//off,on
     // ...devices['iPhone 11'],
      }
    
    }
    
  ]
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  

};

module.exports = config;

