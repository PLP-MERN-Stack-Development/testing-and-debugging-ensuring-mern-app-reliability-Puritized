# MERN Application – Testing, Debugging, and Quality Assurance

This README provides complete documentation for all testing layers implemented in the MERN application. It covers Unit, Integration, and End-to-End (E2E) tests, debugging techniques, error handling, performance monitoring, and the overall project structure.

---

# 1. Overview

This project follows a full testing strategy to ensure reliability and maintainability across the MERN stack.

Testing layers included:

- **Unit Testing** – Jest, React Testing Library  
- **Integration Testing** – Jest + Supertest  
- **E2E Testing** – Cypress  
- **Code Coverage** – Jest Coverage Tools  
- **Debugging & Error Handling** – Express global error handlers, React error boundaries  
- **Performance Monitoring** – Morgan, Lighthouse, React Profiler  

---

# 2. Installation & Setup

## Clone and Install Dependencies
git clone <your-repo-url>
cd project-folder
npm run install-all


## Setup Test Database


cd server
npm run setup-test-db


---

# 3. Available Scripts

## Run All Tests


npm test


## Unit Tests Only


npm run test:unit


## Integration Tests Only


npm run test:integration


## E2E Tests Only


npm run test:e2e


## Generate Coverage Report


npm run test:unit -- --coverage

---

# 4. Unit Testing

Unit tests focus on isolated functions and components.

### Tools Used:
- Jest
- React Testing Library
- Mocking utilities
- Supertest (for isolated API behavior)
- Testing custom hooks, utils, and Redux logic

### Examples of Unit Tests:
- React components in isolation  
- Express middleware  
- Utility helper functions  
- Redux reducers/actions  
- Custom React hooks  

Coverage target: **70% minimum**

---

# 5. Integration Testing

Integration tests verify the flow between API routes, controllers, middleware, and the database.

### Tools Used:
- Jest
- Supertest
- MongoDB Test Database

### What Was Tested:
- REST API endpoints  
- Authentication flows (login, register)  
- CRUD operations  
- Form submission and validation  
- Database queries  

### Photos:
<img width="824" height="704" alt="image" src="https://github.com/user-attachments/assets/200dbd9b-6853-4a32-a4f7-13868feed73d" />
<img width="1331" height="609" alt="image" src="https://github.com/user-attachments/assets/e0bcd867-59d6-494b-9b36-809e0336ba4a" />


