import { BAQLA_Crest } from './BAQLA_Crest';
import { BAQLA_RoleTicker } from './BAQLA_RoleTicker';

export function BAQLA_BrandPanel() {
  return (
    <header className="sticky top-0 z-0 flex flex-col items-center justify-center gap-6 bg-baqla-lime text-baqla-olive px-6 pt-24 pb-10 text-center min-h-[80svh] tablet:min-h-[65svh] desktop:h-dvh desktop:min-h-0 desktop:self-start">
      <p className="font-display font-black [font-stretch:125%] uppercase leading-[0.9] text-[44px] tablet:text-[72px] desktop:text-[88px]">
        <span className="desktop:block">Sara</span> <span className="desktop:block">Baqla</span>
      </p>
      <BAQLA_Crest className="h-[72px] w-auto tablet:h-24 desktop:h-[140px]" />
      <p className="max-w-sm text-base desktop:text-lg">Full stack developer building fast, accessible sites.</p>
      <div className="desktop:absolute desktop:bottom-8 desktop:inset-x-6">
        <BAQLA_RoleTicker />
      </div>
    </header>
  );
}
