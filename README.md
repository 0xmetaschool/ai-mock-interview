## AI_Mock_Interviewer

The Full Stack AI Mock Interviewer app is a tool that lets users simulate mock interviews with the help of AI. By combining Next.js, React, Drizzle ORM, Gemini AI, and Clerk, this project provides an interactive experience for developers to practice and refine their interview skills. It's designed to offer hands-on practice and help users prepare for real-world technical interviews.

## Setup

**Installation**

1. Clone the repository:
```bash
git clone https://github.com/0xmetaschool/AI_Mock_Interviewer.git
```

2. Navigate to the project directory:
```bash
cd AI_Mock_Interviewer
```

3. Install dependencies:
```bash
npm install
```
4. Run the development server:
```bash
npm run dev
```

**Configuration**

1. Create a .env file in the root directory as `.env.local` with the following environment variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_DRIZZLE_DB_URL=
sslmode=
NEXT_PUBLIC_GEMINI_API_KEY=
NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=
NEXT_PUBLIC_INFORMATION=
NEXT_PUBLIC_QUESTION_NOTE=
```
**Features**
- **Next.js and React:** It is used to build Robust frontend framework for building scalable web applications.
- **Clerk Authentication:** It is used to implement social and email/password authentication for secure access.
- **Tailwind CSS:** Provides utility-first CSS framework for rapid UI development.
- **Drizzle ORM:** An Efficient database setup solution and querying process.
- **Google Gemini API:** It generates AI interview questions and processes user responses.
- **Speech-to-Text:** It converts recorded user answers into text.
- **Cloud Deployment:** You can easily deploy your application on Vercel.


**Verification**

To verify the setup:

1. Open the browser and go to http://localhost:3000.
2. Ensure that every thing is loading and the live preview works as expected

## Usage

 **Basic Usage**

1. **Authentication:** Users can sign up or log in using social accounts or email/password through Clerk.
2. **AI Interview Generation:** Generate interview questions using the Google Gemini API.
3. **Answer Recording:** Users can record their answers using the web interface and their microphone.
4. **Speech-to-Text:** The app converts spoken answers into text for analysis.
5. **Save and Review:** Users can save their responses and review them later.

## License

This project is licensed under the MIT License - see the [LICENSE file](./LICENSE) for details.


## Contact
For support or queries, please join our [Discord server](https://discord.com/invite/vbVMUwXWgc) and ask all relevant questions there.


## Feature Wishlist
- **Interview Customization:** Allow users to customize their mock interviews by selecting the difficulty level, question categories, or specific topics for practice.

- **Payment Integration:** Introduce payment options to limit the number of mock interview trials for non-paying users, while offering unlimited access to premium members.

- **Multilingual Support:** Expand the app to support multiple languages, allowing users to practice interviews in languages other than English.

We encourage community discussion and contributions to these potential features!