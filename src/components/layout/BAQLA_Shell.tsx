import { BAQLA_BrandPanel } from './BAQLA_BrandPanel';
import { BAQLA_NavPill } from './BAQLA_NavPill';
import { BAQLA_Footer } from './BAQLA_Footer';

export function BAQLA_Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="desktop:grid desktop:grid-cols-[minmax(400px,34%)_1fr]">
      <BAQLA_BrandPanel />
      <BAQLA_NavPill />
      <div className="relative z-10 min-w-0 bg-baqla-paper">
        <main id="main-content">{children}</main>
        <BAQLA_Footer />
      </div>
    </div>
  );
}
