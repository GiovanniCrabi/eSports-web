interface GameBannerProps {
  title: string;
  announcement: number;
  img: string;
}

export function GameBanner({ img, title, announcement }: GameBannerProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden' >
      <img src={img} alt="game-2" />

      <div className='bg-game-gradient w-full pt-16 pb-4 px-4  absolute right-0 left-0 bottom-0' >
        <strong className='font-bold text-white block'>{title}</strong>
        <span className='text-zinc-300 text-sm block mt-1' > <p> {announcement} {announcement == 1 ? 'anúncio' : 'anúncios'} </ p>
        </span>
      </div>

    </a>
  )
}