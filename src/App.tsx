import { MagnifyingGlassPlus } from "phosphor-react";

import './styles/main.css';

import logoImg from './assets/logo-galaxy.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo" />
      
      <h1 className='text-6xl text-white font-black mt-20'> 
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'> duo </span> está aqui. 
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src="/game-1.png" alt="game-2" />

           <div className='bg-game-gradient w-full pt-16 pb-4 px-4  absolute right-0 left-0 bottom-0' >
            <strong className='font-bold text-white block'>League of legends</strong>
            <span className='text-zinc-300 text-sm block mt-1' >4 anuncios </span>
          </div>

        </a>

        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src="/game-2.png" alt="game-2" />

           <div className='bg-game-gradient w-full pt-16 pb-4 px-4  absolute right-0 left-0 bottom-0' >
            <strong className='font-bold text-white block'>League of legends</strong>
            <span className='text-zinc-300 text-sm block mt-1' >4 anuncios </span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src="/game-3.png" alt="game-2" />

           <div className='bg-game-gradient w-full pt-16 pb-4 px-4  absolute right-0 left-0 bottom-0' >
            <strong className='font-bold text-white block'>League of legends</strong>
            <span className='text-zinc-300 text-sm block mt-1' >4 anuncios </span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src="/game-4.png" alt="game-2" />

           <div className='bg-game-gradient w-full pt-16 pb-4 px-4  absolute right-0 left-0 bottom-0' >
            <strong className='font-bold text-white block'>League of legends</strong>
            <span className='text-zinc-300 text-sm block mt-1' >4 anuncios </span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src="/game-5.png" alt="game-2" />

           <div className='bg-game-gradient w-full pt-16 pb-4 px-4  absolute right-0 left-0 bottom-0' >
            <strong className='font-bold text-white block'>League of legends</strong>
            <span className='text-zinc-300 text-sm block mt-1' >4 anuncios </span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden' >
          <img src="/game-6.png" alt="game-2" />

           <div className='bg-game-gradient w-full pt-16 pb-4 px-4  absolute right-0 left-0 bottom-0' >
            <strong className='font-bold text-white block'>League of legends</strong>
            <span className='text-zinc-300 text-sm block mt-1' >4 anuncios </span>
          </div>
        </a>

      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2x1 text-white font-black block'>Não encontrou seu DUO</strong>
            <span className='text-zinc-400 block'>Publique um anuncio</span>
          </div>
          
            <button className='px-4 py-3 text-white bg-violet-500 rounded hover:bg-violet-600 flex items-center gap-3'>
              <MagnifyingGlassPlus size={24}/>
               Publicar anuncio
            </button>
        </div>
      </div> 
    </div>
  )
}

export default App
