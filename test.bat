@echo off 

echo Hello, you are running the UoS Homepage demo suite. Enjoy!
echo Before the tests can run, the system needs to make sure you have the correct packages installed...

call npm install
call npm install --save-dev

echo The packages have been checked and installed. 
echo The tests are ready to run on Chrome, Firefox, and Edge.
echo You should see a successful page navigation test and two failed login tests for each browser.

call npm run test

echo Tests complete.

pause