# DevConnect - 20-Day Development Workflow

## Project Overview
**Goal:** Build a full-stack developer community platform  
**Time:** 2 hours/day × 20 days = 40 hours  
**Tech Stack:** React, Node.js, Express, MongoDB, JWT

---

---

## 🏆 Success Criteria Checklist
┌────────────────────────────────────────────────────────────┐
│         MINIMUM VIABLE PRODUCT (MVP) CHECKLIST             │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  MUST-HAVE (Core Features):                                │
│  ☐ User registration works                                 │
│  ☐ User login works and persists                           │
│  ☐ Users can create posts                                  │
│  ☐ Posts display on homepage                               │
│  ☐ Post detail page works                                  │
│  ☐ Code syntax highlighting works                          │
│  ☐ Users can add comments                                  │
│  ☐ Users can edit/delete own posts                         │
│  ☐ Responsive on mobile and desktop                        │
│  ☐ No console errors                                       │
│  ☐ Backend deployed and accessible                         │
│  ☐ Frontend deployed and accessible                        │
│  ☐ README with screenshots                                 │
│                                                            │
│  NICE-TO-HAVE (Bonus Features):                            │
│  ☐ Upvote/downvote system                                  │
│  ☐ Save/bookmark posts                                     │
│  ☐ Search functionality                                    │
│  ☐ Filter by tags                                          │
│  ☐ User profile page                                       │
│  ☐ Dark mode                                               │
│  ☐ Loading states/skeletons                                │
│  ☐ Toast notifications                                     │
│                                                            │
│  INTERVIEW-READY CRITERIA:                                 │
│  ☐ Can demo in 2 minutes                                   │
│  ☐ Can explain architecture                                │
│  ☐ Can discuss challenges faced                            │
│  ☐ Can explain any code section                            │
│  ☐ GitHub has clean commit history                         │
│  ☐ Code is readable and organized                          │
│  ☐ Environment variables properly set                      │
│  ☐ No hardcoded secrets in code                            │
│                                                            │
│  POLISH CHECKLIST:                                         │
│  ☐ Favicon added                                           │
│  ☐ Page titles descriptive                                 │
│  ☐ Forms have validation                                   │
│  ☐ Error messages are helpful                              │
│  ☐ Success feedback is clear                               │
│  ☐ Links have hover effects                                │
│  ☐ Buttons have loading states                             │
│  ☐ Images are optimized                                    │
│                                                            │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│                  QUALITY CHECKLIST                         │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  CODE QUALITY:                                             │
│  ☐ Consistent naming conventions                           │
│  ☐ Functions are small and focused                         │
│  ☐ No duplicate code                                       │
│  ☐ Comments explain "why" not "what"                       │
│  ☐ Error handling in all API calls                         │
│  ☐ Input validation on frontend and backend                │
│                                                            │
│  SECURITY:                                                 │
│  ☐ Passwords are hashed                                    │
│  ☐ JWT secret is in .env                                   │
│  ☐ Protected routes verified                               │
│  ☐ CORS configured correctly                               │
│  ☐ No sensitive data in frontend                           │
│  ☐ .env files in .gitignore                                │
│                                                            │
│  PERFORMANCE:                                              │
│  ☐ Images compressed                                       │
│  ☐ No unnecessary re-renders                               │
│  ☐ API calls optimized                                     │
│  ☐ Database queries indexed                                │
│  ☐ Loading states implemented                              │
│                                                            │
│  USER EXPERIENCE:                                          │
│  ☐ Intuitive navigation                                    │
│  ☐ Clear call-to-actions                                   │
│  ☐ Helpful error messages                                  │
│  ☐ Smooth animations                                       │
│  ☐ Fast page loads                                         │
│  ☐ Works on all major browsers                             │
│                                                            │
└────────────────────────────────────────────────────────────┘

## Phase 1: Setup & Backend Foundation (Days 1-6)

### Day 1: Project Setup & Environment Configuration
**Time: 2 hours**

**Tasks:**
- [ ] Create main project folder `devconnect`
- [ ] Initialize frontend with Vite
```bash
  npm create vite@latest client -- --template react
  cd client
  npm install

 Install frontend dependencies

bash  npm install react-router-dom axios react-syntax-highlighter

 Initialize backend

bash  mkdir server
  cd server
  npm init -y

 Install backend dependencies

bash  npm install express mongoose bcryptjs jsonwebtoken cors dotenv
  npm install -D nodemon

 Create .gitignore for both client and server
 Setup MongoDB Atlas account (free tier)
 Create basic server.js with Express boilerplate
 Test server runs on http://localhost:5000
 Git commit: "Initial project setup"

Deliverable: Project structure ready, dependencies installed, server running
```

# Day 2: Database Connection & User Model
```bash
Time: 2 hours
Tasks:

 Create .env file in server folder

  MONGODB_URI=your_mongodb_connection_string
  PORT=5000
  JWT_SECRET=your_secret_key

 Setup MongoDB connection in server.js
 Create folder structure:

  server/
  ├── models/
  ├── routes/
  ├── middleware/
  ├── controllers/
  └── server.js

 Create User model (models/User.js)

Fields: username, email, password, createdAt
Add validation and unique constraints


 Test database connection
 Git commit: "Setup database and User model"

Deliverable: MongoDB connected, User schema created
```
# Day 3: Authentication Backend - Registration
```bash
Time: 2 hours
Tasks:

 Create routes/auth.js
 Create controllers/authController.js
 Implement registration endpoint /api/auth/register

Validate user input
Check if user already exists
Hash password with bcrypt
Save user to database
Return success message


 Test registration with Postman/Thunder Client
 Add proper error handling
 Git commit: "Implement user registration"

Deliverable: Working registration API endpoint
```
# Day 4: Authentication Backend - Login & JWT
```bash
Time: 2 hours
Tasks:

 Implement login endpoint /api/auth/login

Validate credentials
Compare hashed passwords
Generate JWT token
Return token and user data


 Create authentication middleware (middleware/auth.js)

Verify JWT token
Attach user to request object


 Test login with Postman
 Test protected route with middleware
 Git commit: "Implement login and JWT authentication"

Deliverable: Working login system with JWT tokens
```
# Day 5: Post Model & CRUD APIs (Part 1)
```bash 
Time: 2 hours
Tasks:

 Create Post model (models/Post.js)

Fields: title, content, code, language, author (ref: User), tags[], votes, createdAt


 Create routes/posts.js
 Create controllers/postController.js
 Implement POST /api/posts - Create new post (protected)
 Implement GET /api/posts - Get all posts (public)
 Implement GET /api/posts/:id - Get single post (public)
 Test with Postman
 Git commit: "Create Post model and basic CRUD"

Deliverable: Create and read posts functionality
```
# Day 6: Post CRUD APIs (Part 2) & Comment Model
 ```bash
 Time: 2 hours
Tasks:

 Implement PUT /api/posts/:id - Update post (protected, own posts only)
 Implement DELETE /api/posts/:id - Delete post (protected, own posts only)
 Create Comment model (models/Comment.js)

Fields: text, author (ref: User), post (ref: Post), createdAt


 Implement POST /api/posts/:id/comments - Add comment
 Implement GET /api/posts/:id/comments - Get comments
 Test all endpoints
 Git commit: "Complete post CRUD and comment system"

Deliverable: Full backend API for posts and comments

Phase 2: Frontend Development (Days 7-13)
```
# Day 7: Frontend Setup & Routing
```bash
Time: 2 hours
Tasks:

 Clean up default Vite files
 Create folder structure:

  src/
  ├── components/
  ├── pages/
  ├── context/
  ├── utils/
  └── App.jsx

 Setup React Router in App.jsx

Routes: Home, Login, Register, PostDetail, Profile, CreatePost


 Create basic page components (placeholders)
 Create Navbar.jsx component with navigation links
 Setup basic CSS/Tailwind
 Test routing works
 Git commit: "Setup frontend routing and structure"

Deliverable: Frontend structure with working navigation
```
# Day 8: Authentication Context & API Setup
```bash
Time: 2 hours
Tasks:

 Create utils/api.js for axios configuration

Base URL setup
Token interceptor


 Create context/AuthContext.jsx

State: user, token, loading
Functions: login, register, logout


 Wrap App with AuthProvider
 Create components/ProtectedRoute.jsx
 Test context provides values correctly
 Git commit: "Setup auth context and API utils"

Deliverable: Authentication state management ready
```
# Day 9: Login & Register Pages
```bash
Time: 2 hours
Tasks:

 Create pages/Login.jsx

Form with email and password
Form validation
Connect to login API
Show loading state
Handle errors
Redirect on success


 Create pages/Register.jsx

Form with username, email, password
Form validation
Connect to register API
Handle errors
Redirect to login on success


 Test both forms work end-to-end
 Git commit: "Implement login and register pages"

Deliverable: Working authentication UI
```
# Day 10: Home Page - Post Feed

```bash
Time: 2 hours
Tasks:

 Create pages/Home.jsx

Fetch posts on component mount
Display loading skeleton
Handle errors


 Create components/PostCard.jsx

Display post title, excerpt, author, date
Syntax highlight code preview
Link to post detail
Show vote count


 Create grid layout for posts
 Make responsive (mobile/desktop)
 Git commit: "Create home page with post feed"

Deliverable: Home page displaying all posts
```
# Day 11: Create Post Page
```bash
Time: 2 hours
Tasks:

 Create pages/CreatePost.jsx (protected route)
 Create components/PostForm.jsx

Input: title, content, code, language selector, tags
Form validation
Submit to create post API
Show loading state
Handle success/error
Redirect to home on success


 Add syntax highlighting preview for code
 Style form nicely
 Git commit: "Implement create post functionality"

Deliverable: Users can create new posts
```
# Day 12: Post Detail Page
```bash
Time: 2 hours
Tasks:

 Create pages/PostDetail.jsx

Fetch single post by ID
Display full post with syntax highlighting
Show author info
Edit/Delete buttons (if own post)


 Create components/CodeBlock.jsx

Syntax highlighting with react-syntax-highlighter
Copy code button
Language label


 Implement delete post functionality
 Add "Back to home" button
 Git commit: "Create post detail page"

Deliverable: View individual posts with full details
```
# Day 13: Comments Section
```bash
Time: 2 hours
Tasks:

 Create components/CommentSection.jsx

Display all comments for a post
Comment form (protected)
Submit new comment
Show loading/error states


 Create components/CommentCard.jsx

Display comment text, author, date
Delete button (if own comment)


 Add to PostDetail page
 Style comments section
 Git commit: "Implement comments system"

Deliverable: Working comment functionality

Phase 3: Advanced Features (Days 14-17)
```
# Day 14: Search & Filter Functionality
```bash
Time: 2 hours
Tasks:

 Add search bar to Home page
 Implement client-side search

Search by title/content
Debounce search input (300ms)


 Add filter dropdown

Filter by tags
Filter by language


 Update post display based on search/filter
 Add "clear filters" button
 Git commit: "Add search and filter features"

Deliverable: Users can search and filter posts
```
# Day 15: Upvote/Downvote System
```bash
Time: 2 hours
Tasks:

 Update Post model to include votes array

Store user IDs who voted


 Create vote endpoints

POST /api/posts/:id/upvote
POST /api/posts/:id/downvote


 Create components/VoteButtons.jsx

Upvote/downvote buttons
Show vote count
Highlight if user voted
Prevent multiple votes


 Add to PostCard and PostDetail
 Git commit: "Implement voting system"

Deliverable: Users can upvote/downvote posts
```
# Day 16: User Profile Page
```bash
Time: 2 hours
Tasks:

 Create backend route GET /api/users/:id

Return user info and their posts


 Create pages/Profile.jsx

Display username, join date
Show user's posts
Show stats (total posts, total votes received)


 Add "View Profile" link from post cards
 Style profile page
 Git commit: "Create user profile page"

Deliverable: View user profiles and their posts
```
# Day 17: Save/Bookmark Feature
```bash
Time: 2 hours
Tasks:

 Update User model - add savedPosts array
 Create bookmark endpoints

POST /api/posts/:id/save
DELETE /api/posts/:id/unsave
GET /api/users/saved - Get user's saved posts


 Add bookmark button to PostCard
 Create pages/SavedPosts.jsx (protected)
 Add "Saved Posts" link to navbar
 Git commit: "Implement bookmark functionality"

Deliverable: Users can save and view favorite posts

Phase 4: Polish & Deployment (Days 18-20)
```
# Day 18: UI/UX Polish & Loading States
```bash
Time: 2 hours
Tasks:

 Add loading skeletons for all data fetching
 Add smooth transitions/animations
 Implement toast notifications for actions

Success messages
Error messages


 Add empty states

"No posts yet"
"No comments yet"
"No saved posts"


 Ensure all forms have proper validation messages
 Fix any UI bugs
 Test on mobile devices
 Git commit: "Polish UI/UX and add loading states"

Deliverable: Smooth, polished user experience
```
# Day 19: Testing & Bug Fixes
```bash
Time: 2 hours
Tasks:

 Test all features end-to-end

Register → Login → Create Post → Comment → Vote → Save → Logout


 Fix any bugs found
 Test edge cases

Empty inputs
Invalid data
Unauthorized access


 Check console for errors
 Test responsive design on different screen sizes
 Optimize images/assets
 Clean up unused code
 Git commit: "Bug fixes and testing"

Deliverable: Stable, bug-free application
```
# Day 20: Deployment & Documentation
```bash
Time: 2 hours
Tasks:

 Prepare backend for deployment

Environment variables
Update CORS settings
Test production build


 Deploy backend to Render/Railway

Create account
Connect GitHub repo
Set environment variables
Deploy


 Update frontend API URL to deployed backend
 Deploy frontend to Vercel/Netlify

Create account
Connect GitHub repo
Deploy


 Test deployed app thoroughly
 Create comprehensive README.md

Project description
Features list
Tech stack
Screenshots/GIFs
Installation instructions
Live demo link
API endpoints documentation


 Final commit: "Project complete - deployed"

Deliverable: Fully deployed, documented project