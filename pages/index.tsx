import Head from 'next/head'
import { AnimatingDots } from '../components/AnimatingDots';
import { MultipleAnimatedText } from '../components/MultipleAnimatedText';


export default function Home() {
  return (
    <div className='bg-black text-white min-h-screen flex flex-col justify-start items-start'>
      <Head>
        <title>Ben Chomsang</title>
      </Head>
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}


function Footer() {
  return (<div className='w-full p-3 flex justify-between flex-wrap mx-auto max-w-6xl opacity-50'>
    <div>By Ben Chomsang</div>
    <a href='mailto:1994benc@gmail.com' className='border-b hover:border-blue-500 cursor-pointer'>1994benc@gmail.com</a>
  </div>);
}


function Header() {
  return (<div className='text-black py-10 w-full flex-1 flex flex-col justify-center items-start'>
    <div className='text-4xl uppercase heading mx-auto max-w-6xl flex items-center px-3'>
      <div className='flex flex-col items-start gap-5'>
        <AnimatingDots></AnimatingDots>
        <MultipleAnimatedText texts={['Research', 'Define', 'Refine', 'Build', 'Test']} />
        <div className='text-white'>Applications everyone wants to use</div>
      </div>
    </div>
  </div>);
}