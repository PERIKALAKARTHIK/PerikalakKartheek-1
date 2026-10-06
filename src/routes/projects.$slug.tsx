import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight, FileText, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectVisual } from '@/components/portfolio/ProjectVisual';
import { projects } from '@/data/portfolio';

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const project = projects.find(item => item.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => ({
    links: [{ rel: 'canonical', href: `/projects/${params.slug}` }],
    meta: [
      { title: loaderData ? `${loaderData.title} | Perikala Kartheek` : 'Project Not Found | Perikala Kartheek' },
      { name: 'description', content: loaderData?.description ?? 'Explore engineering projects by Perikala Kartheek.' },
      { property: 'og:title', content: loaderData ? `${loaderData.title} | Perikala Kartheek` : 'Project Not Found | Perikala Kartheek' },
      { property: 'og:description', content: loaderData?.description ?? 'Explore engineering projects by Perikala Kartheek.' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `/projects/${params.slug}` },
      { name: 'twitter:card', content: 'summary_large_image' },
      ...(loaderData ? [] : [{ name: 'robots', content: 'noindex' }]),
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  return <main className="detail-page">
    <div className="container-wide detail-container">
      <Link to="/" hash="projects" className="back-link"><ArrowLeft size={17} /> All projects</Link>
      <div className="detail-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> PROJECT FILE / {project.type.toUpperCase()}</div><h1>{project.title}</h1><p className="detail-lead">{project.description}</p><div className="detail-meta"><span>{project.category}</span>{project.dates && <span>{project.dates}</span>}</div></div><div className="detail-visual"><ProjectVisual visual={project.visual} /></div></div>
      <div className="detail-grid">
        <article className="detail-main">
          <section><span className="detail-number">01 / CONTEXT</span><h2>Problem Statement</h2><p>{project.problem}</p></section>
          <section><span className="detail-number">02 / INTENT</span><h2>Objective</h2><p>{project.objective}</p></section>
          <section><span className="detail-number">03 / SYSTEM</span><h2>System Architecture</h2><div className="architecture" aria-label="System architecture">{project.architecture.map((step, i) => <div className="architecture-step" key={step}><span className="architecture-index">{String(i + 1).padStart(2, '0')}</span><span>{step}</span>{i !== project.architecture.length - 1 && <span className="architecture-arrow">↓</span>}</div>)}</div></section>
          <section><span className="detail-number">04 / FLOW</span><h2>Working Principle</h2><p>{project.working}</p></section>
          <section><span className="detail-number">05 / BUILD</span><h2>Implementation</h2><p>{project.implementation}</p></section>
          <section><span className="detail-number">06 / CAPABILITIES</span><h2>Key Features</h2><ul className="feature-list">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
          <section><span className="detail-number">07 / REFLECTION</span><h2>Challenges</h2><p>{project.challenges}</p></section>
          <section><span className="detail-number">08 / RESULT</span><h2>Outcome</h2><p>{project.outcome}</p></section>
          <section><span className="detail-number">09 / NEXT</span><h2>Future Improvements</h2><p>{project.future}</p></section>
        </article>
        <aside className="detail-aside"><div className="aside-block"><span className="aside-label">TECHNOLOGIES / CONCEPTS</span><div className="tag-list">{project.technologies.map(tech => <span className="tech-tag" key={tech}>{tech}</span>)}</div></div><div className="aside-block"><span className="aside-label">PROJECT MATERIALS</span><p>Source code, circuit diagrams, prototype photos and PDFs can be linked here when available.</p><div className="aside-links">{project.githubUrl && <Button variant="outline" size="sm" asChild><a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github /> GitHub <ArrowUpRight /></a></Button>}{project.demoUrl && <Button variant="outline" size="sm" asChild><a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight /></a></Button>}{project.pdfUrl && <Button variant="outline" size="sm" asChild><a href={project.pdfUrl} target="_blank" rel="noopener noreferrer"><FileText /> Project PDF</a></Button>}</div></div></aside>
      </div>
      <div className="detail-bottom"><span>NEXT / EXPLORE MORE WORK</span><Link to="/" hash="projects">Back to projects <ArrowUpRight size={18} /></Link></div>
    </div>
  </main>;
}
