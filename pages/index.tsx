

import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import MainHeader from '@/components/MainHeader/MainHeader'
import Balance from '@/components/ui/Balance'
import Claim from '@/components/ui/Claim'
import Mint from '@/components/ui/Mint'
import Reward from '@/components/ui/Reward'


export default function Home() {
  return (
    <main className='lg:container mx-auto  px-1 md:px-4 2xl:px-0 py-4'>
      <Header />
      <MainHeader />
      <Main />

      <div className='md:hidden mt-5'>
        <Mint />
        <Claim />
      </div>

      <div className='md:hidden mt-5'>
        <Balance />
      </div>
      <div className='md:hidden mt-5'>
        <Reward />
      </div>


    </main>
  )
}
