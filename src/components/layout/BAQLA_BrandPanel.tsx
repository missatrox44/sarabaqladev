import { BAQLA_Crest } from './BAQLA_Crest';
import { BAQLA_RoleTicker } from './BAQLA_RoleTicker';

export function BAQLA_BrandPanel() {
  return (
    <header className="sticky top-0 z-0 flex flex-col items-center justify-center gap-6 bg-baqla-sky text-baqla-blue px-6 pt-24 pb-10 text-center min-h-[80svh] tablet:min-h-[65svh] desktop:h-dvh desktop:min-h-0 desktop:self-start desktop:pb-8 desktop:[container-type:size]">
      <p className="font-display uppercase leading-[0.9] text-[44px] tablet:text-[72px] desktop:mt-auto desktop:text-[length:min(88px,13cqh)]">
        <span className="desktop:block">Sara</span> <span className="desktop:block">Baqla</span>
      </p>
      <BAQLA_Crest className="h-[72px] w-auto tablet:h-24 desktop:h-[min(140px,20cqh)]" />
      <p className="max-w-sm text-balance text-base desktop:text-lg">Professional googler since 2022.</p>
          {/* <p className="max-w-sm text-balance text-base desktop:text-lg">Professional googler since 2022, professional prompter since the robots arrived.</p> */}
      <div className="desktop:mt-auto">
        <BAQLA_RoleTicker />
      </div>
    </header>
  );
}
