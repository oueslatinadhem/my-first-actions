// jest.config.js

module.exports = {
    // ... other Jest configurations ...
  
    // Configuration de la couverture de code
    collectCoverage: true, 
    coverageReporters: ["lcov"], 
    coverageDirectory: "./coverage", 
  }; // Make sure this is the last line, no extra text after it