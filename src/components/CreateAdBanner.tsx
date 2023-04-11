import { MagnifyingGlassPlus } from "phosphor-react";

import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className='pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2x1 text-white font-black block'>Não encontrou seu DUO</strong>
            <span className='text-zinc-400 block'>Publique um anuncio</span>
          </div>
          
            <Dialog.Trigger className='px-4 py-3 text-white bg-violet-500 rounded hover:bg-violet-600 flex items-center gap-3'>
              <MagnifyingGlassPlus size={24}/>
               Publicar anúncio
            </Dialog.Trigger>
        </div>
      </div> 
  )
}