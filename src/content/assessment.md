# Deploying to Vercel
    1. If you haven’t already, create a free GitHub, GitLab or Bitbucket account.
    2. If you haven't already, create a free Hobby account on Vercel. You can sign up to Vercel
    by using your GitHub, GitLab, or BitBucket account.
    3. Then, create a project on Vercel (see Prerequisites below). At the “Create Git
    Repository” stage, ensure “Create private Git repository” is selected.
    4. Use the Transcript and questionaire responses below as the content for your vercel project.


    # Prerequisites
    ● Configure basic access authentication using Edge Middleware on your project. You may
    wish to reference our Basic Auth Password Protection template for guidance.
    ● Configure the login credentials for the project to something unique but something you
    are willing to share with us. Your credentials must be different to the default
    credentials used by the Basic Auth Password Protection template.

    # Support Session Transcript & Questionnaire

**Session ID:** 5FDzKZMH
**Candidate:** Aditya Pathania
**Download Date:** 8/17/2025, 3:23:57 PM

--- 

## Conversation History

**Customer** (8/17/2025, 1:51:53 PM):
Subject: 500 Internal Server Error on Production Site  
Description: Our production site is showing a "500 Internal Server Error" on every page, which is quite concerning. I noticed that the preview deployments from pull requests are working fine, so it seems limited to the production environment. I tried clearing the cache and redeploying, but the issue persists.

**Aditya Pathania** (8/17/2025, 2:02:17 PM):
Hi Alex, thanks for reaching out and reporting this issue. I understand how important this is to you, and I will do my best to help resolve the issue as quickly as possible.

To help investigate further, could you please share more details about the issue like:
1) Where is production running Vercel, Netlify, Docker, or others: Node or edge.
2) Do you have access to the server logs of production? If so, could you please share that with me?

**Customer** (8/17/2025, 2:02:35 PM):
Our production is running on Vercel. Yes, I have access to the server logs. Here's a snippet from the logs:

```
2025-05-12T20:01:58.045Z  INFO  Deployment started
2025-05-12T20:01:59.123Z  INFO  Cloning repository...
2025-05-12T20:02:01.456Z  INFO  Installing dependencies...
2025-05-12T20:02:05.789Z  INFO  Running build command...
2025-05-12T20:02:07.234Z  INFO  Compiling...
2025-05-12T20:02:08.567Z  INFO  Collecting page data...
2025-05-12T20:02:09.890Z  INFO  Generating static pages (0/15)
2025-05-12T20:02:10.012Z  INFO  Generating static pages (5/15)
2025-05-12T20:02:10.345Z  INFO  Generating static pages (10/15)
2025-05-12T20:02:10.678Z  INFO  Generating static pages (15/15)
2025-05-12T20:02:10.901Z  INFO  Finalizing build...
2025-05-12T20:02:11.123Z  ERROR  PrismaClientInitializationError: Environment variable not found: DATABASE_URL
2025-05-12T20:02:11.234Z  ERROR  Error occurred prerendering page "/dashboard"
2025-05-12T20:02:11.345Z  ERROR  Error occurred prerendering page "/profile"
2025-05-12T20:02:11.456Z  ERROR  Error occurred prerendering page "/settings"
2025-05-12T20:02:11.567Z  WARN   Failed to generate static pages for dynamic routes
2025-05-12T20:02:11.678Z  INFO   Collecting build traces...
2025-05-12T20:02:11.789Z  INFO   Traced Next.js server files
2025-05-12T20:02:11.890Z  INFO   Build completed
2025-05-12T20:02:12.012Z  INFO   Deploying...
2025-05-12T20:02:15.345Z  INFO   Deployment complete
2025-05-12T20:02:15.456Z  WARN   Some pages failed to generate during build
2025-05-23T19::23::45::789z ERROR [GET] /api/users Internal Server Error
```

Let me know if you need anything else

**Aditya Pathania** (8/17/2025, 2:12:41 PM):
Thank you for sharing the logs. From what I can see, the issue might be related to the `DATABASE_URL` environment variable. Before jumping to any conclusions and providing a solution, could you please help clarify the following:

1) Which version of the Next.js app are you running?
2) What version of Prisma are you using?
3) What kind of database are you connecting to (e.g., Postgres, Mongo, etc.)?
4) Have you already set `DATABASE_URL` in Vercel --> Settings --> Environment Variables under the production scope?

**Customer** (8/17/2025, 2:12:44 PM):
We're running the latest version of Next.js and Prisma. Our database is Postgres. I haven't set the `DATABASE_URL` in the production environment variables on Vercel.

**Aditya Pathania** (8/17/2025, 2:16:25 PM):
Thanks for confirming. Since DATABASE_URL isn't set in production on vercel and you're using Postgres with Prisma, that explains the 500's.

Please try the following steps to fix the issue:
1) Add the env variable: 
Vercel --> Project --> settings -->  Environment variables

**Customer** (8/17/2025, 2:16:27 PM):
Thank you so much for pointing that out! I'll go ahead and add the `DATABASE_URL` environment variable in the production settings on Vercel. I really appreciate your help with this.

**Aditya Pathania** (8/17/2025, 2:21:30 PM):
Sorry about the earlier message, I pressed enter too quickly. Lets try the following steps to fix the issue.

1) Add the env variable: 
      i) Vercel --> Project --> settings -->  Environment variables
      ii) Name DATABASE_URL
      iii) Value: &lt;YOUR_POSTGRES_URL&gt;

2) Redeploy: In vercel --> Deployments, choose the latest commit --> Redeploy
3) Verify your production pages.

Once the DATABASE_URL is present in production, I expect the 500s to clear. If not then please share the logs from the latest deployment again.

**Customer** (8/17/2025, 2:21:32 PM):
Got it, I'll add the `DATABASE_URL` environment variable in Vercel's production settings and redeploy. Thank you for the detailed steps—I'll verify the pages afterward. I appreciate your help!

--- 

## Questionnaire Responses

**Completed At:** 8/17/2025, 3:23:53 PM

### Support Task Preferences

- **Question:** Respond to 25+ support requests via email every day
  *Rating:* 2/5 (Dislike)
  *Explanation:* No explanation provided.

- **Question:** Dig through logs to troubleshoot a customer's broken project
  *Rating:* 3/5 (Neutral)
  *Explanation:* No explanation provided.

- **Question:** Write and maintain support articles and docs pages
  *Rating:* 3/5 (Neutral)
  *Explanation:* No explanation provided.

- **Question:** Create video tutorials to help teach users a specific feature or use case
  *Rating:* 4/5 (Like)
  *Explanation:* No explanation provided.

- **Question:** Help resolve billing issues for customers
  *Rating:* 2/5 (Dislike)
  *Explanation:* No explanation provided.

- **Question:** Analyze hundreds of support tickets to spot trends the product team can use
  *Rating:* 4/5 (Like)
  *Explanation:* No explanation provided.

- **Question:** Identify, file (and, where possible, resolve) bugs in GitHub repos
  *Rating:* 4/5 (Like)
  *Explanation:* No explanation provided.

- **Question:** Manage a support team
  *Rating:* 4/5 (Like)
  *Explanation:* No explanation provided.

- **Question:** Find and recruit teammates for the support team
  *Rating:* 3/5 (Neutral)
  *Explanation:* No explanation provided.

- **Question:** Help train and onboard new support teammates
  *Rating:* 5/5 (Most Favorite)
  *Explanation:* No explanation provided.

- **Question:** Run ticket review sessions to make sure tone is consistent
  *Rating:* 3/5 (Neutral)
  *Explanation:* No explanation provided.

- **Question:** Work with 3rd-party partners to help a joint customer
  *Rating:* 4/5 (Like)
  *Explanation:* No explanation provided.

- **Question:** Work with the product team on a new feature based on feedback
  *Rating:* 5/5 (Most Favorite)
  *Explanation:* No explanation provided.

- **Question:** Respond to queries on Twitter, Reddit, Hacker News, etc.
  *Rating:* 4/5 (Like)
  *Explanation:* No explanation provided.

- **Question:** Act as a dedicated CSE for key customers
  *Rating:* 4/5 (Like)
  *Explanation:* No explanation provided.

- **Question:** Collaborate with engineering teams during incidents
  *Rating:* 5/5 (Most Favorite)
  *Explanation:* No explanation provided.

- **Question:** Schedule time-off coverage for the support team
  *Rating:* 2/5 (Dislike)
  *Explanation:* No explanation provided.

- **Question:** Engage multiple users at once in a public forum
  *Rating:* 3/5 (Neutral)
  *Explanation:* No explanation provided.

- **Question:** Help people decide if Vercel is suitable for their use-case
  *Rating:* 4/5 (Like)
  *Explanation:* No explanation provided.

### Vercel Fluid Compute
**Question:** Outline pros, cons, and use-cases for Fluid Compute.

**Response:**
Pros:
1) Automatic scaling: Resources expand instantly when the workload grows and shrink when idle.
2) Cost-efficient: Pay for what you use.
3) Better developer experience as devs dont choose instance size or clusters, just deploy the code.
4) Better resource utilization: Underlying infrastructure can improve performance for users.

COns:
1) Latency overhead: In some scenarios, scaling decisions can cause temporary latency
2) Each vendor implements fluid compute differently.. Therefore, moving workloads to a different vendor may require rewrites.
3) Less control over infrastructure: Devs cant specify exact VM or hardware characteristics.

### Past Technical Issue Resolution
**Question:** Describe a technical issue you recently resolved. What was it, and how did you fix it?

**Response:**
Context:
Long ago, we migrated our starter app to nextjs 13. One of the customer faced an issue with authentication, reporting that they could not stay logged in and refreshing the page or opening a new tab logged them out. 

Steps I took:
1) Tried reproducing the customer code base in my local environment on vercel. There i observed that the Set-Cookie header was missing on subsequent requests.
2) In dev tools I noticed that the cookies were set with Secure and SameSite=None attributes but not persistent.
3) I realized tht the problem was due to how Nextjs middleware and API routes handled cookie under vercels serverless Edge runtime. Customers API was using res.setHeader('Set-Cookie,...) directly which would only work in local Node runtime and not in Edge runtime. On vercel these headers were stripped unless properly set using the NextResponse API.
3) Refactored the routes to use cookies.set() from next/headers instead of raw headers.
4) Redeployed the fix to production and headers were correctly returned.


### First Six Months at Vercel Goals
**Question:** What do you hope to accomplish in your first six months at Vercel?

**Response:**
First 1 - 2 months: Onboarding and Foundation
- Ramp up on Vercel platform architecture
- Get comfortable with the workflow and contributing to production systems.
- Understand common customer/developer pain points

3- 4 Months - Owning the problem space
- Take ownership of important features or initiatives
- Contribute to any internal tooling initiatives/automation that improves developer productivity.
- partner with product teams and reduce recurring customer friction.

5-6 months - Try to make impact and drive decisions
- Partner with product teams to propose forward looking improvement and how to improve existing features based on customer interactions.
- Help raise team's collective knowledge by sharing learning via documentations or tech talks.
- Lead design and delivery of larger intiatives. 
- Become a subject matter expert for at least one technical area within the team.

### AI in Your Work
**Question:** What is your level of comfort with using AI in your work? Do you believe it should be used in your role, and if so, how do you ensure it is used appropriately?

**Response:**
I am very comfortable using the AI as part of my workflow, both for productivity and for brainstorming solutions. I already use AI tools for things like summarzing logs or exploring multiple approaches for a problem before refining the final solution myself.
In a role at vercel, I beleive AI can and should be used, especially since developer experience is at the core of Vercel's mission. It can help speed up support responses, surface better documentation or even optimize workflows. But i also think it's critical to use AI appropriately, always validate the AI-generated code or suggestions as a starting point and not the final word. 
For me, appropriate use of AI means validation and security. Validation: thoroughly testing and reviewing AI outputs and security: ensuring no confidential code or customer data leaves approved systems. When used that way, AI becomes an accelerator that helps me focus on higher level design, problem solving and collaboration. 

### Assessment Feedback
**Question:** How would you improve this assessment? What would you add, remove, or change?

**Response:**
If I were to improve this, I would add more practical tasks, with more hands-on assignments, for e.g. a small code snippet with a bug to fix. That way, we could test the technical depth in a more realistic workflow. Also, we could keep the practical task time constrained to help know how someone works under pressure. 

