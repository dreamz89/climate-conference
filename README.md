# Climate Solutions Conference

## Techstack

Framework: **Next.js (SSG)**  
CI/CD: **Github Actions**  
Hosting: **Vercel**  
Styling: **Tailwind CSS**  
CMS: **Storyblok**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Live: https://climate-conference.vercel.app/ (main branch)  
Preview: https://climate-conference-preview.vercel.app/ (preview branch)  
Every pull request will automatically be made available at a unique preview URL

## Storyblok

Main branch: Live Editing and Storyblok bridge disabled (using public token and environment variables)  
Preview and Development branch: Live editing and Storyblok bridge enabled (preview token)

To see draft content:

```bash
https://climate-conference-preview.vercel.app/api/draft?secret=<previewToken>&slug=
```

To return to published content:

```bash
https://climate-conference-preview.vercel.app/api/disable-draft?slug=
```

## Design

Designed by me in <a href="https://www.figma.com/file/jZJbEQhxgWt18VeoCeReYb/Climate-Solutions-Conference?type=design&node-id=3%3A3&mode=design&t=4TVL9zFP7fxs7A9T-1">Figma</a>  
Inspirations: <a href="https://dribbble.com/dreamz89/collections/6900670-Conferences">Dribble</a>

## Attribution

Font: <a href="https://tokotype.github.io/plusjakarta-sans/">+Jakarta Sans</a>  
Logo: Image by <a href="https://www.freepik.com/free-vector/logotype_4352888.htm">Freepik</a>  
Partner Logos: Image by rawpixel.com on <a href="https://www.freepik.com/free-vector/set-company-logo-design-ideas-vector_3528867.htm">Freepik</a>  
Profile Photos: Freepik  
Grid photo: Solar panels by <a href="https://unsplash.com/@zburival?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Zbynek Burival</a> on <a href="https://unsplash.com/photos/blue-solar-panel-boards-V4ZYJZJ3W4M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>  
Grid photo: Scientist by <a href="https://unsplash.com/@nci?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">National Cancer Institute</a> on <a href="https://unsplash.com/photos/man-in-white-dress-shirt-holding-black-binoculars-uxnbYOejXCE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>  
Grid photo: Wood by <a href="https://www.freepik.com/free-photo/stack-square-wood-planks-furniture-materials_3596098.htm">Freepik</a>  
Grid photo: Bamboo by <a href="https://www.freepik.com/free-photo/tropical-green-bamboo-forest_15519129.htm">Freepik</a>

## Potential additional features

- Dark mode
- Add other pages
- Ticket payment
