import { Activity, Antenna, Box, Cpu, Radio, ScanLine, ShieldCheck, Sprout, Waves, Zap } from 'lucide-react';
import type { Project } from '@/data/portfolio';

export function ProjectVisual({ visual, compact = false }: { visual: Project['visual']; compact?: boolean }) {
  const icon = visual === 'inventory' ? <Box /> : visual === 'railway' ? <ShieldCheck /> : visual === 'id' ? <ScanLine /> : visual === 'agriculture' ? <Sprout /> : visual === 'water' ? <Waves /> : <Activity />;
  return (
    <div className={`project-visual visual-${visual} ${compact ? 'project-visual-compact' : ''}`} aria-hidden="true">
      <div className="visual-grid" />
      <span className="visual-coordinate">PK / SYSTEMS</span>
      <div className="visual-wire visual-wire-a" /><div className="visual-wire visual-wire-b" /><div className="visual-wire visual-wire-c" />
      <span className="visual-node visual-node-a"><Antenna /></span>
      <span className="visual-node visual-node-b"><Radio /></span>
      <span className="visual-node visual-node-c"><Zap /></span>
      <div className="visual-core"><span className="visual-core-ring" />{icon}</div>
      <span className="visual-label visual-label-a">INPUT 01</span><span className="visual-label visual-label-b">OUTPUT 02</span>
      <span className="visual-corner"><Cpu /> EMBEDDED / LOGIC</span>
    </div>
  );
}
