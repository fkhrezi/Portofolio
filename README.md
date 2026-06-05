# Fakhri Fahrezi Portfolio

A modern personal portfolio built with Next.js, TypeScript, Tailwind CSS, and the App Router. The site is structured as a polished one-page portfolio with scalable routes for project case studies and an online resume.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Vercel-ready deployment

## Install Dependencies

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Project Structure

```text
src/
  app/
    page.tsx
    resume/
      page.tsx
    projects/
      page.tsx
      [slug]/
        page.tsx
  components/
    layout/
    sections/
    ui/
  data/
    achievements.ts
    certifications.ts
    education.ts
    experience.ts
    profile.ts
    projects.ts
    skills.ts
  lib/
    utils.ts
public/
  project-images/
```

## Add a New Project

1. Open `src/data/projects.ts`.
2. Add a new object to the `projects` array.
3. Use a unique `slug`, for example `my-new-project`.
4. Add a project cover image inside `public/project-images/`.
5. Set the project `image` field, for example:

```ts
image: "/project-images/my-new-project.svg";
```

The dynamic page will be available at:

```bash
/projects/my-new-project
```

## Edit Personal Information

Main profile details are stored in:

```bash
src/data/profile.ts
```

Update the placeholder email and social links there. The website does not display a phone number and does not include GPA.

Other editable content lives in:

- `src/data/skills.ts`
- `src/data/experience.ts`
- `src/data/education.ts`
- `src/data/certifications.ts`
- `src/data/achievements.ts`

## Update the CV PDF

Place the CV PDF inside the `public` folder with this exact filename:

```bash
public/Fakhri-Fahrezi-CV.pdf
```

All Download CV buttons already point to:

```bash
/Fakhri-Fahrezi-CV.pdf
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js settings.
4. Deploy.

Recommended Vercel settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: default

## Recommended Future Improvements

- Add real public email, LinkedIn, and GitHub URLs in `src/data/profile.ts`.
- Replace placeholder learning items with verified certifications and credential links.
- Add more project case studies with real screenshots or product walkthroughs.
- Add project filtering by category and status.
- Add a searchable project index.
- Add blog or article routes for product notes, academic writing, and learning logs.
- Integrate a CMS for easier long-term content updates.
- Add an admin dashboard only after the content model is stable.
